
# Activity Tracker

A simple web application to track time spent on activities, built with TypeScript, Express.js, Prisma, SQLite, React, and Tailwind CSS.

## Features

* **Start Activity**: Record the start time and description of an activity
* **Stop Activity**: Record the end time of an in-progress activity
* **Activity History**: View all activities with start and end times
* **Persistent Storage**: Data stored in a local SQLite database

## Tech Stack

* **Backend**: Node.js, Express.js, TypeScript, Prisma ORM, SQLite
* **Frontend**: React, TypeScript, Tailwind CSS
* **Communication**: RESTful API (JSON)

## Getting Started

### Prerequisites

* Node.js v16+ and npm

### Installation & Running

1. **Clone the repository**

   ```bash
   git clone https://github.com/akankshareddypisati/activity-tracker.git
   cd activity-tracker/backend
   ```

2. **Setup & Run Backend**

   ```bash
   npm install
   npx prisma migrate dev --name init
   npm run dev
   ```

   The API will be available at `http://localhost:3001/api/activities`.

3. **Setup & Run Frontend**

   ```bash
   cd ../frontend
   npm install
   npm start
   ```

   The app will open at `http://localhost:3000`.

## Usage

* **Start an Activity**: Enter a description and click **Start**.
* **Stop an Activity**: Click **Stop** next to an in-progress activity.
* **View History**: All activities will be listed with timestamps.

