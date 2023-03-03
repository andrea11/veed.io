This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Start the app

#### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.0.0 or later)  
  Or
- [Docker](https://docs.docker.com/get-docker/) (v20.10.7 or later)

#### Local environment

- Install dependencies

  ```bash
  npm install
  ```

- Build the app

  ```bash
  npm run build
  ```

- Run the app

  ```bash
  npm run start
  ```

#### Docker

- build docker

    ```bash
  docker build -t veed.io:latest .
  ```
- run docker

    ```bash
    docker run -i -t -p 3000:3000 veed.io:latest
    ```

\
\
\
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run tests
  ```bash
    npm run test
  ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!