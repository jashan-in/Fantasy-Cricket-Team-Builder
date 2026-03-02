# Sprint 3 Architecture - RS (Ravdeep Sharma)

## Overview

For Sprint 3, the project was refactored to follow a layered architecture:

Component - Hook - Service - Repository

This separates presentation logic, business logic, and data access logic.

## Repository: PlayerRepository

### What does it do?
Handles CRUD operations for Player data:
- getAll()
- getById()
- create()
- update()
- delete()

Currently, it loads test data from `players.testData.ts`.

### Why is this logic here?
The repository is responsible only for data access.
It does not contain UI or business logic.

### Where is it used?
Used inside `TeamContext` to:
- Load initial players
- Add new players


## Service: TeamService

### What does it do?
Contains business rules for team selection:
- Prevent duplicate players
- Enforce maximum players (11)
- Enforce maximum credits (100)
- Calculate total credits

### Why is this logic here?
Business rules should not be inside components.
Keeping them in a service keeps the UI clean and reusable.

### Where is it used?
Used inside `TeamContext` when:
- Adding players
- Removing players
- Calculating credits


## Hook: useTeam

### What does it do?
Exposes shared team state and actions:
- players
- team
- creditsUsed
- addToTeam()
- removeFromTeam()
- addPlayerToPool()

### Why is this logic here?
The hook provides presentation logic and prevents prop drilling.
It connects components to the service and repository layers.

### Where is it used?
Used in:
- PlayersPage
- TeamPage

---

## Shared State: TeamContext

### What does it do?
Stores shared team and player state across pages.

### Why is this needed?
Avoids passing state through routes (prop drilling).

### Where is it used?
Wrapped around the app in `main.tsx`.