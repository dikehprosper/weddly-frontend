# Weddly – Wedding Coordinator Marketplace

Weddly is a minimal wedding coordinator marketplace MVP that allows couples to browse wedding coordinators, view their details, and request bookings with ease.


## Tech Stack
### Frontend:
Next.js (TypeScript)
Tailwind CSS
React Hooks (useEffect, useState)
API Integration via Fetch

### Backend:
Node.js + Express
MongoDB + Mongoose
REST API


### Live Demo

|  App                               | Link                                         |
| ---------------------------------- | -------------------------------------------- |
|  **Frontend (Next.js)**            | [https://weddlyfrontend.netlify.app](#)      |
|  **Backend (Express + MongoDB)**   | [https://weddly-backend.onrender.com](#) |


## Deployment
Frontend: Netlify
Backend: Render
Database: MongoDB


##E Setup Instructions
Clone the Repository
```bash
git clone https://github.com/dikehprosper/weddly-frontend
cd your-repo
```

### Install Dependencies
If using npm:
```bash
npm install
```
Or with yarn:
```bash
yarn install
```

#### Setup environment variables
cp .env.example .env
```bash
# env backend connection string
NEXT_PUBLIC_API_URL=https://weddly-backend.onrender.com
```


#### Run Development Server
```bash
npm run dev
# or
yarn dev
```
Access the app at: http://localhost:3000

#### Production Build
```bash
npm run build
npm start
```
Or for yarn:
```bash
yarn build
yarn start
```

## ✅ Assumptions & Limitations

### ✅ Assumptions
- You have **Node.js (version >= 18)** and **npm/yarn** installed.
- **MongoDB/PostgreSQL** (or your preferred database) is running if required.
- You are familiar with **.env** environment variable configuration.
- You have basic knowledge of terminal/command-line operations.

### ❗ Limitations
- This project is built for **modern browsers only** (e.g., Chrome, Firefox, Safari).
- Mobile responsiveness is handled via **TailwindCSS**, but further optimization may be needed for all devices.
- The booking system **does not include payment integrations** (you can update this if payments are added).
- The backend API (if applicable) **is not optimized for high concurrent traffic** without scaling solutions.
- This setup is intended for **development purposes** only; **production deployment** will require tools like **Docker** or services like **Vercel, AWS, DigitalOcean**, etc.



#### Author
Prosper – [https://dikeprosper.vercel.app/]
Twitter - [https://x.com/DikeProsper]
Linkedin - [https://www.linkedin.com/in/dikeprosper]
