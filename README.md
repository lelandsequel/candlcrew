# Taberna Restaurant Training Game

## Project Overview
- **Name**: Taberna Restaurant Training Game
- **Goal**: Transform traditional restaurant training materials into an engaging, interactive game that helps new employees master the menu efficiently and enjoyably
- **Features**: 
  - 11 comprehensive training sections covering all menu categories
  - 3 different game modes (Practice, Timed Challenge, Certification)
  - Real-time scoring and progress tracking
  - Interactive question types (Multiple Choice, True/False, Fill-in-Blank, Scenario)
  - Completion certificates for certification mode
  - Mobile-responsive design with modern UI

## URLs
- **Development**: https://3000-inxuy1kazvnc1g3dh1hff-6532622b.e2b.dev
- **API Health Check**: https://3000-inxuy1kazvnc1g3dh1hff-6532622b.e2b.dev/api/sections
- **GitHub**: *To be deployed*

## Data Architecture
- **Data Models**: 
  - QuizSection: Contains section metadata (title, description, passing score)
  - Question: Individual questions with type, content, options, and correct answers
  - GameConfig: Global game settings (time limits, scoring, attempts)
- **Storage Services**: Static JSON data embedded in TypeScript modules (no external database needed)
- **Data Flow**: Client → Hono API endpoints → Structured quiz data → Interactive UI components

## Features Currently Implemented

### ✅ Core Training Sections (11 Total)
1. **Bread & Spreads** - Signature bread offerings and accompaniments (5 questions)
2. **Petiscos (Small Plates)** - Portuguese-inspired appetizers (5 questions)
3. **Sandwiches** - Portuguese sandwich offerings (5 questions)
4. **Saladas (Salads)** - Fresh salads with Mediterranean influences (5 questions)
5. **Sopa (Soups)** - Traditional Portuguese soups and stews (5 questions)
6. **Pizza** - Wood-fired pizza offerings (5 questions)
7. **Vegetarian Entrees** - Plant-based main courses (6 questions)
8. **Carne (Meat)** - Traditional and modern Portuguese meat dishes (6 questions)
9. **Mar (Seafood)** - Fresh seafood with Portuguese flair (7 questions)
10. **For The Table (Large Format)** - Shareable dishes for groups (6 questions)
11. **General Restaurant Knowledge** - Service standards and policies (7 questions)

### ✅ Game Modes
- **Practice Mode**: Unlimited time, no pressure learning
- **Timed Challenge**: 30-second time limit per question with bonus points
- **Certification Mode**: Complete evaluation with certificate generation

### ✅ Question Types
- **Multiple Choice**: Traditional A/B/C/D format
- **True/False**: Simple binary questions
- **Fill-in-the-Blank**: Text input for specific terms
- **Scenario**: Long-form answers for customer service situations

### ✅ Scoring & Progress
- Base points: 10 per correct answer
- Bonus points: 5 additional for quick answers in timed mode
- Progress tracking with visual progress bars
- Section completion certificates
- Final score calculation with percentage grades

### ✅ UI/UX Features
- Modern, responsive design using TailwindCSS
- Portuguese restaurant-themed color scheme
- FontAwesome icons for visual appeal
- Smooth animations and transitions
- Mobile-first responsive layout
- Confetti animation for certificate achievements

### ✅ API Endpoints
- `GET /api/sections` - List all training sections with metadata
- `GET /api/section/:id` - Get detailed section data with questions
- `POST /api/progress` - Save training progress (stub implementation)

### ✅ Technical Features
- Built with Hono framework for Cloudflare Pages/Workers
- TypeScript for type safety and better developer experience
- Modular, maintainable code structure
- PM2 process management for development
- Vite build system for optimized production builds

## User Guide

### Getting Started
1. **Choose Game Mode**: Select Practice (learn), Timed (challenge), or Certification (official test)
2. **Select Section**: Pick any of the 11 training sections to begin
3. **Answer Questions**: Work through various question types at your own pace
4. **Review Results**: Get immediate feedback and explanations
5. **Earn Certificate**: Pass certification mode to earn completion certificate

### Game Modes Explained
- **Practice Mode**: Perfect for new employees to learn without pressure
- **Timed Challenge**: Great for experienced staff to test their speed and knowledge
- **Certification Mode**: Official completion test requiring 70%+ overall score

### Question Navigation
- Read each question carefully
- Select your answer or fill in blanks
- Submit to see immediate feedback
- Review explanations for incorrect answers
- Progress to next question when ready

### Scoring System
- Each correct answer: 10 points
- Quick answers in timed mode: +5 bonus points
- Section passing: 70-90% depending on section difficulty
- Overall certification: 70% minimum across all sections

## Deployment
- **Platform**: Cloudflare Pages (development server running)
- **Status**: ✅ Active and fully functional
- **Tech Stack**: Hono + TypeScript + TailwindCSS + Vite
- **Build**: Optimized for edge deployment
- **Last Updated**: September 19, 2024

## Development Notes

### Next Recommended Steps
1. **Add user accounts** to save individual progress permanently
2. **Implement analytics** to track which sections are most challenging
3. **Add multiplayer features** for team competitions
4. **Create admin dashboard** for trainers to monitor employee progress
5. **Add more question types** like drag-and-drop or image-based questions
6. **Deploy to production** Cloudflare Pages with custom domain
7. **Add print certificates** functionality for physical records

### Technical Improvements
- Implement persistent storage using Cloudflare D1 database
- Add email notifications for completed certifications
- Create detailed analytics and reporting dashboard
- Add offline mode support for areas with poor connectivity
- Implement advanced scoring algorithms with difficulty weighting

### Content Enhancements
- Add audio pronunciations for Portuguese dish names
- Include high-quality food images for visual learning
- Create video explanations for complex preparation methods
- Add customer service scenario simulations
- Implement adaptive learning that adjusts difficulty based on performance

## Training Effectiveness
This gamified approach transforms dry menu memorization into an engaging experience that:
- **Improves retention** through interactive learning
- **Reduces training time** by focusing on problem areas
- **Provides consistent evaluation** across all staff
- **Enables self-paced learning** for different skill levels
- **Creates competition** through scoring and achievements
- **Ensures comprehensive coverage** of all menu sections

The game successfully converts the original 17-page PDF training manual into an interactive experience that's both educational and enjoyable for restaurant staff.