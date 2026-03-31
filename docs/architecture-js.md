Architecture Document: Sprint 3

Author: Jashanpreet Singh, Ravdeep Sharma, Sukhpreet Kaur, Dilraj Kaur

Overview

In Sprint 3, our team refactored the application to follow the Hook–Service–Repository architecture pattern. The goal was to improve code organization, remove prop drilling, and separate responsibilities clearly between presentation logic, business logic, and data access.

The architecture now follows this structure:

Component
Hook
Service
Repository
Test Data

This allows us to maintain clean separation of concerns and prepares the application for future backend integration.

1. useTeam Hook
What does this hook do?

The useTeam hook manages presentation logic related to the selected team. It provides:

team (current selected players)

addPlayer()

removePlayer()

It connects React components to the business logic layer without exposing implementation details.

Why was this logic placed here?

The hook contains only presentation logic:

Updating React state

Triggering re-renders

Calling service methods

It does NOT contain:

Data access logic

Business rules

Filtering logic

This ensures UI logic remains separate from core business logic.

Where is it used?

PlayersPage

TeamPage

StatsPage

All these pages rely on the hook to access and modify team state.

2. teamService (Business Logic Layer)
What does this service do?

teamService handles business rules for managing the selected team:

Preventing duplicate players

Removing players by id

Returning current team

It ensures that logic is reusable and independent of React.

Why was this logic placed here?

Business rules must not exist inside components. If duplicate checking or filtering logic existed in components, it would violate separation of concerns.

The service layer centralizes business logic and can later be reused in backend or other environments.

Where is it used?

Called inside useTeam hook

Delegates storage to TeamRepository

3. playerRepository
What does it do?

playerRepository manages Player data. It:

Loads playerTestData

Provides CRUD methods:

getAll()

getById()

add()

remove()

Why is this separate?

Repositories represent data access layer. Even though we are using test data, this simulates external resources.

Later, this can be replaced with API calls without changing components.

Where is it used?

PlayersPage retrieves players using playerRepository

4. matchRepository
What does it do?

matchRepository manages Match data. It:

Uses matchTestData

Implements CRUD methods

Supplies data to MatchesPage

Why is this separate?

Match data is a unique resource. Each team member was responsible for building their own repository to satisfy individual requirements.

Where is it used?

MatchesPage renders matches using repository

5. statsRepository
What does it do?

statsRepository manages Stats data:

Uses statsTestData

Provides CRUD operations

Supplies data to StatsPage

Why is this separate?

Stats is a separate resource in the system. This allows extension in future to dynamic backend stats.

Where is it used?

StatsPage displays repository data combined with team state

Architecture Benefits

After Sprint 3 refactor:

No prop drilling

No business logic inside components

Clean separation of responsibilities

Easy future backend integration

Better maintainability and debugging

This architecture significantly improves code quality compared to Sprint 2.