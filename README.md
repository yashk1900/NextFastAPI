# NextFastAPI

A comprehensive Gym Planner application with a RESTful API backend and dynamic frontend, enabling users to create, delete, and edit workouts and routines. The system supports associating multiple workouts with specific routines, providing flexibility in workout management. This project was developed to gain hands-on experience with FastAPI and Next.js, leveraging their speed and developer-friendly features.

## Key Features

- **Workout and Routine Management:** Create, update, and delete workouts and routines seamlessly.
- **Flexible Associations:** Associate any number of workouts with a specific routine.
- **Modern API Design:** Built using FastAPI, ensuring high performance and intuitive API development.
- **Responsive Frontend:** Developed with Next.js for efficient client-side rendering and user interactions.

## Tech Stack

- **Backend:** FastAPI (Python)
- **Frontend:** Next.js (React and Bootstrap for UI design)
- **Database:** SQLAlchemy (for data modeling and database operations)
- **Cross-Origin Resource Sharing (CORS):** Configured to allow seamless communication between the frontend and backend.

## Setup Instructions

Follow these steps to get the project up and running locally:

### Backend Setup

1. Navigate to the `/api` directory.
2. Install the necessary Python dependencies by running:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the FastAPI server using Uvicorn:
   ```bash
   uvicorn main:app --reload
   ```
   The API will be available at `http://localhost:8000`.

### Frontend Setup

1. Navigate to the `/nextjs` directory.
2. Install the required Node.js packages:
   ```bash
   npm install
   ```
3. Start the Next.js development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`.

## API Endpoints

### Workouts

- **Create Workout:** `POST /workouts`
- **Retrieve Workouts:** `GET /workouts`
- **Update Workout:** `PUT /workouts/{id}`
- **Delete Workout:** `DELETE /workouts/{id}`

### Routines

- **Create Routine:** `POST /routines`
- **Retrieve Routines:** `GET /routines`
- **Update Routine:** `PUT /routines/{id}`
- **Delete Routine:** `DELETE /routines/{id}`

### Associations

- **Associate Workout to Routine:** `POST /routines/{id}/workouts/{workout_id}`

## Technical Highlights

- **FastAPI for Backend:**
  - High-performance asynchronous API handling.
  - Automatic generation of OpenAPI documentation.
- **SQLAlchemy for Data Persistence:**
  - Relational data modeling.
  - Efficient ORM-based operations.
- **Next.js for Frontend:**
  - Server-side rendering for fast load times.
  - Integration with React and Bootstrap for responsive UI.
- **CORS Configuration:**
  - Enabled secure communication between backend and frontend services.

## Performance Insights

FastAPI matches or exceeds the speed of traditional frameworks like Express/Node.js for API development, making it an excellent choice for high-performance applications.

## Future Improvements

- **Authentication and Authorization:** Secure the API endpoints.
- **Enhanced UI/UX:** Improve the frontend design and user experience.
- **Testing:** Add unit and integration tests for robust code maintenance.
- **Deployment:** Containerize the application using Docker for scalable deployments.

## Conclusion

NextFastAPI demonstrates the powerful combination of FastAPI and Next.js for building modern, full-stack applications. The modular architecture and high performance make it suitable for production-grade projects.

