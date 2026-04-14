from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

# --- Models ---

class MailingListEntry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class MailingListCreate(BaseModel):
    email: str

class GuestbookEntry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class GuestbookCreate(BaseModel):
    name: str
    message: str

class Event(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    date: str
    venue: str
    city: str
    country: str
    ticket_url: Optional[str] = None
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class EventCreate(BaseModel):
    date: str
    venue: str
    city: str
    country: str
    ticket_url: Optional[str] = None

# --- Routes ---

@api_router.get("/")
async def root():
    return {"message": "PESTE NEGRA API"}

# Mailing List
@api_router.post("/mailing-list", response_model=MailingListEntry)
async def subscribe_mailing_list(input: MailingListCreate):
    existing = await db.mailing_list.find_one({"email": input.email}, {"_id": 0})
    if existing:
        raise HTTPException(status_code=400, detail="Email already subscribed")
    entry = MailingListEntry(email=input.email)
    doc = entry.model_dump()
    await db.mailing_list.insert_one(doc)
    return entry

@api_router.get("/mailing-list/count")
async def get_mailing_list_count():
    count = await db.mailing_list.count_documents({})
    return {"count": count}

# Guestbook
@api_router.post("/guestbook", response_model=GuestbookEntry)
async def create_guestbook_entry(input: GuestbookCreate):
    if len(input.name.strip()) == 0 or len(input.message.strip()) == 0:
        raise HTTPException(status_code=400, detail="Name and message are required")
    entry = GuestbookEntry(name=input.name.strip(), message=input.message.strip())
    doc = entry.model_dump()
    await db.guestbook.insert_one(doc)
    return entry

@api_router.get("/guestbook", response_model=List[GuestbookEntry])
async def get_guestbook_entries():
    entries = await db.guestbook.find({}, {"_id": 0}).sort("created_at", -1).to_list(100)
    return entries

# Events
@api_router.post("/events", response_model=Event)
async def create_event(input: EventCreate):
    event = Event(**input.model_dump())
    doc = event.model_dump()
    await db.events.insert_one(doc)
    return event

@api_router.get("/events", response_model=List[Event])
async def get_events():
    events = await db.events.find({}, {"_id": 0}).sort("date", 1).to_list(100)
    return events

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
