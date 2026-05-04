## ADDED Requirements

### Requirement: Login API endpoint
The system SHALL provide a POST endpoint at `/app/api/auth/login/route.ts` for processing login requests.

#### Scenario: POST endpoint exists
- **WHEN** user inspects /app/api/auth/login/
- **THEN** system finds route.ts file with POST method handler

### Requirement: Credential validation
The system SHALL validate email and password credentials before generating tokens.

#### Scenario: Email format validation
- **WHEN** POST request contains invalid email format
- **THEN** system returns 400 status with error message

#### Scenario: Password validation
- **WHEN** POST request contains password shorter than 8 characters
- **THEN** system returns 400 status with error message

### Requirement: JWT generation
The system SHALL generate a JWT token containing user email after successful validation.

#### Scenario: JWT token contains user email
- **WHEN** user successfully authenticates
- **THEN** JWT payload includes email claim

### Requirement: Secure cookie storage
The system SHALL store the JWT token in an HTTP-only cookie with secure and sameSite flags.

#### Scenario: Cookie has HTTP-only flag
- **WHEN** user inspects Set-Cookie header in response
- **THEN** system finds "HttpOnly" flag in the cookie

#### Scenario: Cookie is secure in production
- **WHEN** NODE_ENV equals 'production'
- **THEN** system sets "Secure" flag in the cookie

#### Scenario: Cookie uses sameSite=lax
- **WHEN** user inspects Set-Cookie header
- **THEN** system finds "SameSite=Lax" flag in the cookie

### Requirement: Mock validation for development
The system SHALL implement mock validation of credentials against a predefined list.

#### Scenario: Mock validation list exists
- **WHEN** user inspects el código
- **THEN** system encuentra una lista de emails válidos para mock

#### Scenario: Mock validation rejects invalid credentials
- **WHEN** POST request contains email not in mock list
- **THEN** system returns 401 status with error message

### Requirement: Server-side token generation
The system SHALL generate JWT tokens in Server Components or API routes, never in Client Components.

#### Scenario: Token generation occurs in server-side code
- **WHEN** user inspects /app/api/auth/login/route.ts
- **THEN** system encuentra lógica de generación de JWT en el Server Component