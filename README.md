# In the Loop

A messaging forum for School of Code bootcampers to ask and answer coding questions.

## Table of Contents
- [What is this?](#what-is-this?)
- [What did I learn?](#what-did-I-learn?)
- [Project Next Steps](#project-next-steps)
- [Project Status](#project-status)
- [Setup to Run Locally](#setup)
- [Original Project Brief](#original-project-brief)

## What is this? <a name="what-is-this?"></a>

## What did I learn during the project week? <a name="what-did-I-learn?"></a>

- Git Branching
  - How to use branching to organize the team's workflow
  - How to address merge conflicts
- Deployment
  - Deploying to Netlify and Heroku from subdirectories in the repo
  - Deploying more than one service from a single repo
- Agile Working
  - Scrum: standups, retros
  - Trello kanban
- Design and Planning
  - The importance of a database ERD and good documentation for the API routes
  - Making user personas, user journey, and wireframes

## Project Next Steps <a name="project-next-steps"></a>

Even though the project week has finished, I plan to continue adding more features to the app and refactoring the code. As you can imagine, the mad dash to complete a full-stack app in less than 5 days with a team that had never worked together before led to a fair amount of code smells and technical debt. Instead of abandoning this project, I am using it as an exercise in refactoring and continuously improving existing code. I feel this is a worthwhile exercise because working engineers rarely have the luxury of starting a project from scratch.

### Refactoring Goals
- Reduce the number of requests to the API
  - use SQL table joins to include more of the necessary data in the API responses to reduce under fetching
  - Create a React custom hook to call the API only when new data is needed to be fetched
- Remove uneccessary state and props from React components

### Goals for New Features

- Authenticate users ✅ - 2022-02-20
- Add new users to the database and display their name on their posts/comments ✅ - 2022-02-20
- Secure the API
- Use Web Sockets to update the page for users in real time

## Project Status <a name="project-status"></a>

The frontend is [deployed to Netlify here](https://in-the-l00p.netlify.app/).
The backend API server and Postgres database are [deployed to Heroku here](https://in-the-loop-backend.herokuapp.com/).

This repo is a fork of the [original project repo](https://github.com/SchoolOfCode/national-project-week-room25-project).

## Setup to Run Locally <a name="setup"></a>

**To clone the repo:**
```
git clone git@github.com:cdmclellan7/in-the-loop.git
cd in-the-loop
```

**To run the frontend:**
```
cd frontend
npm i
npm start
```
And go to http://localhost:3000

**To setup the database tables with starter data:**

First create a .env file in /backend and add your database connection string 
```
DATABASE_URL=your-URL
```
Then create and populate the tables.
```
cd backend
npm run db-create-and-populate-all-tables
```

**To run the backend:**
```
cd backend
npm i
npm run dev
```
And go to http://localhost:3001

## Original Project Brief <a name="original-project-brief"></a>
### National Bootcamp - Week Nine Project Brief

For your project, you’ll be using what you’ve learned on the course so far to try and improve the lives of your users. In this case, the users will be close to home: bootcampers!

To do this, you’ll need to take the time to understand your user (a bootcamper), their experiences, and their problems. What do they need? What problem might they have that your application could solve for them? How can you get into the mindset of your user and keep them at the centre of your problem-solving?

The high level outcomes from this project should be:

- A minimum viable product (MVP) showcasing an innovative full stack application which meets the user need you’ve identified
- A presentation, complete with how you worked as a team and a demonstration of the project

Your project application should:

- Include a user experience created in React
- Build a REST API which is used by your front-end
- Be supported by a Postgresql database with multiple tables
- Be built and managed in an agile way

Remember, you only have a few days to code a solution, so being agile is key. That means brainstorming what you want to build, and working in sprints to deliver value each time. After each sprint, you can reassess and either continue on course or iterate towards a better solution. Have a plan which is incremental steps, rather than all or nothing.

Click the link to see the [Project Guidelines](https://github.com/SchoolOfCode/project-guidelines/blob/master/project-week.md)
