# College API

Welcome to the College API! This API provides endpoints to fetch information about colleges in India.

## Getting Started

To use this API locally or deploy it, follow these steps:

### Prerequisites

- Node.js (14.x recommended)
- MongoDB (Make sure you have a running MongoDB instance)

### Installation

1. Fork and clone this repository to your local machine.

2. Open a terminal and navigate to the `backend` directory:
```sh
cd backend
```

3. Install the required dependencies:
```sh
npm install
```

### Configuration

1. Create a `.env` file in the `backend` directory:

```sh
MONGODB_URL=your_mongodb_url_here
```
Replace your_mongodb_url_here with the actual MongoDB connection URL.

### Running the Server

1. Start the backend server
```sh
npm start
```
The server will be accessible at http://localhost:8000.

2. To view the list of colleges, open a web browser or use a tool like Postman and navigate to:

```bash
http://localhost:8000/api/colleges
```

### Usage

1. Use the /api/colleges endpoint to get a list of all colleges.

2. Use the /api/states endpoint to get a list of all states.

3. You can filter colleges based on states by appending ?state=state_name to the /api/colleges endpoint.

### Contributing

1. Fork this repository.
2. Create a new branch for your feature:
```sh
git checkout -b feature/your-feature-name
```
3. Commit and push your changes to your branch.
4. Create a pull request to merge your changes into the main repository.
