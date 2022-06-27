
# News API

A News API created using Express.js and Redis



## Run Locally

Clone the project

```bash
  git clone https://github.com/abhinav-root/News-API
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install or yarn install
```

Run docker-compose file (after installing docker)

```bash
  docker-compose up -d
```

Add .env file to your project and add API Keys

Start the server

```bash
  yarn start or npm start
```


## API Reference

#### Get top headlines

```http
  GET /api/top-headlines
```

### Get search results

```http
  GET /api/search?query=elon musk
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `q`      | `string` | **Required**.  |


## 🔗 Links
### Postman collection link
https://www.getpostman.com/collections/965cba30fb65e9531ba9