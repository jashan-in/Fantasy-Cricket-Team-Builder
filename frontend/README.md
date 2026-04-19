Fantasy Cricket Team Builder
Team Name

Cricket Architects

Team Members

Jashanpreet Singh, Ravdeep Sharma, Sukhpreet Kaur, Dilraj KaurG

Member 2

Member 3

Member 4

Project Description

Fantasy Cricket Team Builder is a React TypeScript application that allows users to:

Browse available players

Build and manage their fantasy team

View upcoming matches

View team statistics

The application follows a clean architecture pattern using Hook–Service–Repository layers.

High-Level User Stories

As a user, I want to browse available cricket players so that I can select them for my team.

As a user, I want to add and remove players from my team so that I can manage my fantasy lineup.

As a user, I want to view upcoming matches so that I know which teams are playing.

As a user, I want to see team statistics so that I can understand my team composition.

Architecture Overview (Sprint 3)

The application uses the following layered architecture:

Component
→ Hook
→ Service
→ Repository
→ Test Data

Components handle UI

Hooks manage presentation logic

Services manage business logic

Repositories manage data access

Test data simulates external resources

Each team member implemented a unique repository resource as part of Sprint 3 requirements.

Resources Implemented

PlayerRepository

MatchRepository

StatsRepository

teamService for business logic

Future Improvements

Replace test data with backend API

Add authentication

Add persistent storage

Improve UI styling

Add validation for player roles and limits