Sprint 3 Retrospective
Student Name: Jashanpreet Singh
Sprint: 3
What went well in this sprint?
In this sprint, I focused on refactoring shared state using the hook-service-repository pattern. I successfully removed prop drilling and centralized team state using a custom hook (useTeam). Navigation between pages works properly and state updates correctly across Players, Team, and Stats pages.
What could have gone better?
At first, I was slightly confused about separating presentation logic from business logic. Some refactoring was needed before everything aligned properly with the architecture pattern.
How did I implement my part?
I created and refined the useTeam hook, ensured it calls teamService correctly, and confirmed that components no longer directly handle business logic. I tested duplicate prevention and state updates across routes.
Future Plans
In the next sprint, I plan to focus on improving performance and possibly introducing context or backend API integration while maintaining architectural separation.
