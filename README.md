# PhotoLabs
Welcome to PhotoLabs!

PhotoLabs is a single-page application (SPA) built with ⚛️ React ⚛️ as a part of my studies with Lighthouse Labs. 
- Photos, topics, and user data are stored in a PostgreSQL database.
- The API server runs on Node via Express.js
- Requests are made to the API over HTTP in JSON format

## Preview

## Features
- Users can like a photo by clicking the ❤️ icon. A notification will be displayed to indicate that the user has liked photos.
- Each photo can be clicked to open up an expanded/modal view which displays similar photos along with the enlarged photo
- Users can choose from five different topic categories in the navigation bar to update the photos displayed on the main page

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`. This application requires that you run two servers at once: one for the front-end, one for the back-end (more on running the servers below).

## [Front-end] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Back-end] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
