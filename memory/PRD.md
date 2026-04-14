# Peste Negra Band Website - PRD

## Original Problem Statement
Build a website for the band Peste Negra. All info from https://linktr.ee/peste_negra

## User Personas
- **Fans**: Discover music, watch videos, buy merch, leave guestbook messages
- **Band members**: Manage show dates, view mailing list subscribers

## Core Requirements
- Single-page scrolling website with brutalist dark design
- Sections: Hero, Music/Discography, Videos, Merch, Shows, Guestbook, Contact
- Mailing list signup, guestbook, event/show dates

## What's Been Implemented (Dec 2025)
- Hero with promo background image + band logo + CTA
- Navigation (desktop + mobile hamburger)
- Discography (3 releases: Parasita, Peste Negra EP, Podridão)
- Videos (5 YouTube embeds)
- Merch (5 Bandcamp items)
- Tour Dates (dynamic from DB, shows "no upcoming shows")
- Guestbook (terminal-style, post + view entries)
- Mailing List (email subscribe with duplicate detection)
- Social Links (YouTube, Spotify, Apple Music, Bandcamp, Instagram, Facebook)
- Footer with scrolling marquee
- Backend: FastAPI + MongoDB (3 collections: mailing_list, guestbook, events)

## Tech Stack
- Frontend: React + Tailwind CSS + Shadcn UI
- Backend: FastAPI + MongoDB
- Fonts: Anton (headings) + JetBrains Mono (body)
- Design: Brutalist dark mode, pure black/white, no rounded corners

## Prioritized Backlog
### P0 (Done)
- All core sections implemented and tested

### P1
- Admin panel to add/manage events
- Admin panel to view mailing list subscribers
- SEO meta tags and Open Graph

### P2
- Spotify embed widget in music section
- Photo gallery
- Bandcamp player embed
- Analytics tracking
