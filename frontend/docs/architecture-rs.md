# Architecture Document - Ravdeep Sharma (RS)

## Overview

For Sprint 3, I refactored the Players feature using a hook-service-repository structure. This separates UI logic, business logic, and data access into different layers.

Structure used:

PlayersPage then, usePlayers then, playerService then, playerRepository then, playerTestData

---

## playerRepository.ts

### What does it do?
Handles player data (get all, add, remove). It uses test data stored in `playerTestData.ts`.

### Why is this logic here?
Repositories should only handle data access. No business rules or React code belong here.

### Where is it used?
It is used inside `playerService.ts`.

---

## playerService.ts

### What does it do?
Contains business rules for players, such as:
- Prevent empty names
- Prevent duplicate players

It prepares data before saving it to the repository.

### Why is this logic here?
Business rules should not be inside components. Keeping them in the service makes the app cleaner and easier to maintain.

### Where is it used?
It is used inside the `usePlayers` hook.



## usePlayers.ts

### What does it do?
Manages player state for the Players page. It:
- Loads players
- Adds new players
- Handles errors

### Why is this logic here?
Hooks manage presentation logic and React state. This keeps the component simple.

### Where is it used?
It is used in `PlayersPage.tsx`.

---

## useTeam.ts

### What does it do?
Manages shared team state between pages.

### Why is this logic here?
It prevents passing data through router props and keeps shared state organized.

### Where is it used?
Used in `PlayersPage.tsx` and `TeamPage.tsx`.

---

## Conclusion

This structure makes the app cleaner and easier to manage by clearly separating:

- Data access (Repository)
- Business logic (Service)
- UI state (Hook)
- Rendering (Component)