## ADDED Requirements

### Requirement: Login page UI
The system SHALL provide a login page at `/app/login/page.tsx` using Tailwind CSS.

#### Scenario: Login page renders
- **WHEN** user navigates to /login
- **THEN** system displays a centered card with email and password inputs

### Requirement: Client component for UI
The system SHALL implement `/components/LoginForm.tsx` as a Client Component using "use client" directive.

#### Scenario: Client component directive present
- **WHEN** user inspects LoginForm.tsx
- **THEN** system finds "use client" directive at the top of the file

### Requirement: Form inputs for credentials
The system SHALL provide email and password input fields in the login form.

#### Scenario: Email input field present
- **WHEN** user inspects the login form
- **THEN** system finds an input with type "email" and name "email"

#### Scenario: Password input field present
- **WHEN** user inspects the login form
- **THEN** system finds an input with type "password" and name "password"

### Requirement: Loading state during authentication
The system SHALL display a loading indicator when the authentication request is in progress.

#### Scenario: Loading indicator present during request
- **WHEN** authentication request starts
- **THEN** system displays "Loading..." text or spinner in the UI

### Requirement: Error display in UI
The system SHALL display error messages when authentication fails.

#### Scenario: Error message container present
- **WHEN** user inspects the login form
- **THEN** system finds a div or section with role "alert" for displaying errors

### Requirement: Simple logo "AutoFlow AI"
The system SHALL provide a simple SVG logo inline using Tailwind CSS.

#### Scenario: Logo renders at top of login page
- **WHEN** user navigates to /login
- **THEN** system displays "AutoFlow AI" logo centered above the login form

#### Scenario: Login UI does not rely on gender perspectives
The system SHALL implement login without dependencia en la UI**, respetando el stack actual y decisiones previas.

#### Scenario: Login page structure maintains Server/Client separation
- **WHEN** user inspects /app/login/page.tsx
- **THEN** system finds Server Component directive and no client-side logic

### Requirement: No external image dependencies
The system SHALL use inline SVG or Tailwind CSS for all visual elements, avoiding imágenes externas.

#### Scenario: All visual assets are code-based
- **WHEN** user inspects el proyecto
- **THEN** sistema no encuentra archivos .jpg, .png, .gif externos en /app/login/ o /components/