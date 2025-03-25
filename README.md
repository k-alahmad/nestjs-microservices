NestJS Microservices Project (service-a and service-b)
Note: I followed monorepo approache to organizing codebases
This project consists of two NestJS microservices, `service-a` and `service-b`, that communicate with each other using Redis.

## Setup

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/k-alahmad/nestjs-microservices
    cd nestjs-microservices
    ```

2.  **Install Dependencies:**

    Navigate to each service directory and install the necessary packages.

    ```bash
    cd service-a/service-a
    npm install
    cd ../../service-b/service-b
    npm install
    ```

3.  **Run Redis:**

    Ensure Redis is running. You can use Docker for convenience:

    ```bash
    docker run -p 6379:6379 -d redis:alpine
    ```

    Alternatively, if you have Redis installed locally, make sure it's running.

## Running the Services

1.  **Start service-a:**

    Open a terminal, navigate to the `service-a/service-a` directory, and run:

    ```bash
    npm run start:dev
    ```

2.  **Start service-b:**

    Open another terminal, navigate to the `service-b/service-b` directory, and run:

    ```bash
    npm run start:dev
    ```

    Both services should now be running and connected to Redis.

## API Endpoints

* **service-a:**
    * `GET /double/:num`: Sends a request to `service-b` to double the provided number.

* **service-b:**
    * `GET /square/:num`: Returns the square of the provided number.

## Running Tests

1.  **Run service-a tests:**

    Open a terminal, navigate to the `service-a/service-a` directory, and run:

    ```bash
    npm run test:e2e
    ```

2.  **Run service-b tests:**

    Open a terminal, navigate to the `service-b/service-b` directory, and run:

    ```bash
    npm run test:e2e
    ```
