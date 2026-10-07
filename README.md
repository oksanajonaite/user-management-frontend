# User Management Frontend

Angular frontend for the [User Management API](https://github.com/oksanajonaite/user-management-api) -- provides a web interface for user registration, authentication, administration, and audit log viewing.

## Features

- **Login / Registration** -- register new users with email and phone number
- **User list** -- view all users (admin sees everyone, regular user sees only self)
- **Admin panel** -- change user roles (USER / ADMIN / MANAGER), delete users
- **Audit log** -- view history of all user management actions
- **HTTP Basic Auth** -- credentials sent with each request to the Spring Boot backend

## Tech Stack

- Angular 21
- TypeScript
- RxJS
- Angular Router
- Angular Forms (two-way binding)

## Prerequisites

- Node.js 18+
- The [backend API](https://github.com/oksanajonaite/user-management-api) running on `http://localhost:8080`

## Getting Started

```bash
git clone https://github.com/oksanajonaite/user-management-frontend.git
cd user-management-frontend
npm install
ng serve
```

Open `http://localhost:4200` in your browser.

## Pages

| Route     | Description                              |
|-----------|------------------------------------------|
| `/login`  | Register a new account                   |
| `/users`  | View user list (requires credentials)    |
| `/admin`  | Change roles, delete users (admin only)  |
| `/audit`  | View audit log (admin only)              |

## Demo Users

Start the backend first -- it seeds these users (password for all: `demo`):

| Username | Role    |
|----------|---------|
| admin    | ADMIN   |
| manager  | MANAGER |
| user     | USER    |

## Related

Backend API: [user-management-api](https://github.com/oksanajonaite/user-management-api)
