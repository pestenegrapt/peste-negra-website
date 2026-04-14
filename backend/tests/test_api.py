"""Backend API tests for Peste Negra band website"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

# Mailing List Tests
class TestMailingList:
    def test_subscribe(self):
        r = requests.post(f"{BASE_URL}/api/mailing-list", json={"email": "TEST_pestenegra@test.com"})
        assert r.status_code == 200
        data = r.json()
        assert data["email"] == "TEST_pestenegra@test.com"
        assert "id" in data

    def test_duplicate_email(self):
        requests.post(f"{BASE_URL}/api/mailing-list", json={"email": "TEST_dup@test.com"})
        r = requests.post(f"{BASE_URL}/api/mailing-list", json={"email": "TEST_dup@test.com"})
        assert r.status_code == 400

    def test_count(self):
        r = requests.get(f"{BASE_URL}/api/mailing-list/count")
        assert r.status_code == 200
        assert "count" in r.json()
        assert isinstance(r.json()["count"], int)

# Guestbook Tests
class TestGuestbook:
    def test_post_entry(self):
        r = requests.post(f"{BASE_URL}/api/guestbook", json={"name": "TEST_Fan", "message": "TEST_message"})
        assert r.status_code == 200
        data = r.json()
        assert data["name"] == "TEST_Fan"
        assert data["message"] == "TEST_message"
        assert "id" in data

    def test_get_entries(self):
        r = requests.get(f"{BASE_URL}/api/guestbook")
        assert r.status_code == 200
        assert isinstance(r.json(), list)

    def test_empty_name_rejected(self):
        r = requests.post(f"{BASE_URL}/api/guestbook", json={"name": "  ", "message": "hello"})
        assert r.status_code == 400

# Events Tests
class TestEvents:
    def test_get_events(self):
        r = requests.get(f"{BASE_URL}/api/events")
        assert r.status_code == 200
        assert isinstance(r.json(), list)
