

# Autofill AI

## Overview
An AI-powered job application autofill tool that helps users auto-complete application forms on job sites like LinkedIn, Workday, and Lever. This MVP aims to build the core features: user profile setup, resume parsing, a Chrome extension to autofill job forms, and a token-based freemium system.

## 🔧 Tech Stack Requirements

### Frontend
- Next.js (App Router)
- Responsive design for profile management

### Backend
- API Routes (Edge Functions optional)
- Secure API endpoints for extension communication

### Database
- Neon DB (PostgreSQL)
- Drizzle ORM for database interactions

### AI Layer
- OpenAI (GPT-4-turbo)
- Custom Prompt Engineering for form filling
- Resume parsing capabilities

### Browser Extension
- Manifest V3 compliant Chrome extension
- JavaScript for form detection and filling

### Storage
- Local storage for MVP
- Cloudflare R2 integration planned for future

## ✅ MVP Feature Requirements

### User Profile System
- Sign up / log in functionality
- Profile creation with:
  - Personal information (name, email, LinkedIn, GitHub)
  - Education history
  - Work experience
- Resume upload (PDF/DOCX support)

### Resume Processing
- PDF parsing (pdf-parse library)
- DOCX parsing (docx-parser)
- AI-powered structured data extraction
- Data storage in Neon DB

### Chrome Extension
- Detection of known job sites (LinkedIn, Workday, Lever)
- Autofill button injection on form pages
- API communication to fetch user data
- Standard field autofill capability
- AI-generated answers for custom questions
- Toggle functionality

### Token System
- 10 free tokens on signup
- Token balance tracking in database
- 1 token per autofill consumption
- Token bundle purchase system (10 tokens = £2.50)
- Stripe integration (optional for v1)

### AI Features
- GPT-powered autofill for custom questions
- Context-aware responses using:
  - User profile data
  - Job title and company information
- Resume parsing and data extraction

## 📁 Project Structure Requirements

### Application Directories
- `/app/profile` - User profile form
- `/app/auth` - Sign in/up logic
- `/app/dashboard` - Token usage + history
- `/api/resume-parser` - Resume parsing endpoint
- `/api/tokens` - Token logic
- `/api/autofill` - AI-powered fill generator

### Database
- `schema.ts` - Drizzle schema for:
  - User data
  - Resume data
  - Token tracking

### Extension
- `/public/extension` - Chrome Extension source code

### Utilities
- `openai.ts` - AI prompt logic
- `field-matcher.ts` - Field matching algorithm

## 🔐 Security Requirements
- Email/password authentication (Auth.js)
- Session tokens for API security
- Secure communication between extension and backend
- Data encryption for sensitive information

## 🚀 Setup Requirements

### Development Environment
- Node.js environment
- PostgreSQL database
- OpenAI API key
- Package management via pnpm

### Installation
```bash
git clone https://github.com/IdrisKulubi/autofill-ai
cd autofill-ai
pnpm install
cp .env.example .env.local
```
# Add your DB credentials, OpenAI key, etc.
pnpm dev

## 🌱 Future Roadmap (Post-MVP)

- AI-generated cover letters
- Job tracker dashboard
- User feedback system
- Additional ATS integrations
- Enhanced token gating features

## 🤝 Credits

Built with ❤️ by [autoapply] & team. Inspired by: Simplify, LazyApply, Careerflow, Teal