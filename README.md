## Instructions to Run Frontend Project

1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/manRexx/ps-assignment-frontend
   ```

2. Navigate to the project folder:
   ```bash
   cd ps-assignment-frontend
   ```

3. Create a `.env` file in the root directory and add the following configuration:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:8080/api/

   # Uncomment the following line to use the deployed backend API:
   # REACT_APP_API_BASE_URL=https://ubuntu-ps-backend-api.manraw.in/api/
   ```

4. Install the required dependencies:
   ```bash
   npm install
   ```

5. Start the application:
   ```bash
   npm start
   ```

6. The application will be available at:
   ```
   http://localhost:3000
   ```

## Note
- Ensure the backend is running before running the frontend application.
