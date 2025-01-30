# Welcome to the Authentication Service of Airline Microservices Project

## Project Setup

### Clone the Repository
To set up the project on your local machine, start by cloning the repository:

```bash
git clone https://github.com/Abhigupta13/AuthService-Airline.git
cd AuthService-Airline
```

### Install Dependencies
Navigate to the root directory of the project and install the necessary dependencies:

```bash
npm install
```

### Environment Variables
Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=3000
JWT_SECRET=<YOUR_JWT_SECRET_KEY>
DB_USERNAME=<YOUR_DB_LOGIN_NAME>
DB_PASSWORD=<YOUR_DB_PASSWORD>
DB_NAME=AuthService_DB_DEV
DB_HOST=127.0.0.1
DB_DIALECT=mysql
```

### Database Configuration
Inside the `src/config` folder, create a new file `config.json` and add the following JSON configuration:

```json
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "AuthService_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

### Database Setup
Once you've configured your database settings, go to the `src` folder from your terminal and execute the following commands to set up the database:

```bash
npx sequelize db:create
npx sequelize db:migrate
```

## JWT Authentication Implementation
This service uses JSON Web Tokens (JWT) for authentication and authorization. JWT is implemented in the following ways:

- **User Registration:** Registers new users and generates a JWT upon successful registration.
- **User Login:** Validates user credentials and returns a JWT if authentication is successful.
- **Token Verification:** Protects routes by verifying JWT in incoming requests.

For detailed implementation, refer to the service's codebase.## Authentication and Authorization Service for Airline Booking service Project

WebOTP
    - https://developer.mozilla.org/en-US/docs/Web/API/WebOTP_API

Sequelize Validations & Constraints
    - https://sequelize.org/docs/v6/core-concepts/validations-and-constrain

sequelize hooks / triggers
    -https://sequelize.org/docs/v6/other-topics/hooks/
