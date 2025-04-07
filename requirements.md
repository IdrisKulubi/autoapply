# 🧠 Autofill AI MVP — Development Plan & Requirements

This file outlines the **features**, **steps**, and **priorities** to build version 1 of the MVP using:

- **Next.js (App Router)**
- **Neon DB + Drizzle ORM**
- **OpenAI API**
- **Chrome Extension (Manifest v3)**

---

## ✅ Phase 1 — User Onboarding & Profile Creation

> 📍 Goal: Capture user info and resume for future autofill

### Tasks
- [ ] Set up authentication (NextAuth or Auth.js with email/password)
- [ ] Create user dashboard
- [ ] Build “Create Profile” form:
  - [ ] Name, email, phone
  - [ ] LinkedIn, GitHub, website
  - [ ] Education
  - [ ] Work experience
  - [ ] Resume upload (PDF/DOCX)

- [ ] Parse uploaded resume into clean text
- [ ] Extract data (skills, experience, etc.) and store in Neon DB
- [ ] Store user data in Neon DB via Drizzle

---

## ✅ Phase 2 — Chrome Extension MVP

> 📍 Goal: Detect job forms and autofill them from saved profile

### Tasks
- [ ] Set up Manifest v3 extension
- [ ] Inject content script on known job sites (LinkedIn, Workday, Lever, Greenhouse)
- [ ] Detect form fields (input, textarea, select)
- [ ] Add “Autofill with AI” button to page
- [ ] Communicate with backend to fetch user profile

---

## ✅ Phase 3 — AI Autofill Agent (Core Feature)

> 📍 Goal: Use AI to fill open-ended questions and match resume info to fields

### Tasks
- [ ] Create OpenAI integration (GPT-4-turbo)
- [ ] Create autofill endpoint in API:
  - [ ] Match profile fields to form fields
  - [ ] Generate tailored responses for:
    - “Why this role?”
    - “Why this company?”
    - “Describe a challenge you faced...”
- [ ] Design AI prompt templates
- [ ] Add post-AI fill review step (user can edit before submitting)

---

## ✅ Phase 4 — Token System (Freemium Model)

> 📍 Goal: Limit usage to tokens, monetise with premium features later

### Tasks
- [ ] Give new users 10 free tokens
- [ ] Store token count in database
- [ ] Subtract 1 token per AI-powered autofill
- [ ] Optional: Stripe checkout page to buy tokens

---

## ✅ Phase 5 — Admin & Feedback (Optional for MVP)

> 📍 Goal: Improve quality via user feedback

### Tasks
- [ ] Track user autofill history
- [ ] Ask user to rate accuracy (1–5 stars) or flag issues
- [ ] Store feedback in database

---

## 🧪 Testing

- [ ] Test autofill on:
  - [ ] LinkedIn job forms
  - [ ] Workday
  - [ ] Lever
- [ ] Test AI answers with different resumes
- [ ] Test autofill accuracy across form variations

---

## 📦 Deliverables for MVP Launch

- [ ] Working Chrome Extension
- [ ] Web app with auth, profile creation, and resume parsing
- [ ] Autofill endpoint with AI generation
- [ ] Token system
- [ ] Clean UI + basic error handling

---

## 🎯 MVP Goals Recap

- Autofill job application forms using AI with >90% accuracy
- Seamless UX via browser extension
- Launch-ready for user testing and feedback collection

---

## 🚀 Phase 2 (Post-MVP Ideas)

- Cover letter generator
- Job tracking dashboard
- AI-enhanced resume editing
- Company-specific question banks
- Auto-apply to job feeds

---