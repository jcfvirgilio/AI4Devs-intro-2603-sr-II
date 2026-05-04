## ADDED Requirements

### Requirement: User authentication with JWT
The system SHALL authenticate users via email and password credentials.

#### Scenario: Successful user authentication
- **WHEN** user submits valid email and password
- **THEN** system generates a JWT token and stores it in an HTTP-only cookie

### Requirement: Secure token storage
The system SHALL store authentication tokens in HTTP-only cookies to prevent XSS attacks.

#### Scenario: Token not accessible via JavaScript
- **WHEN** user inspects page with browser devtools
- **THEN** token is not visible in localStorage, sessionStorage, or JavaScript variables

### Requirement: Session management
The system SHALL maintain user sessions using JWT tokens with a configurable expiration.

#### Scenario: Session expiration
- **WHEN** JWT token expires
- **THEN** system requires user to re-authenticate

### Requirement: Error handling for invalid credentials
The system SHALL return appropriate error messages when credentials are invalid.

#### Scenario: Invalid email format
- **WHEN** user submits email in invalid format
- **THEN** system displays "Invalid email format" error message

#### Scenario: Incorrect password
- **WHEN** user submits correct email but incorrect password
- **THEN** system displays "Incorrect password" error message