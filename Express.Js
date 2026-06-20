### 1. What is Express.js?
Express.js is a **Node.js web framework** used to build web applications and REST APIs quickly.

```js
const express = require("express");
const app = express();
```
### 2. What are the features of Express.js?
* Fast and lightweight
* Routing support
* Middleware support
* REST API development
* Template engine support

### 3. What is the use of app.use()?
Used to register middleware.

```js
app.use(express.json());
```
### 4. Difference between app.use() and app.METHOD()?

**app.use()**

```js
app.use((req,res,next)=>{
   next();
});
```
Runs for all HTTP methods.

**app.get(), app.post()**

```js
app.get("/home",(req,res)=>{
   res.send("Home");
});
```
Runs for a specific HTTP method.


### 5. What is middleware in Express?
Middleware is a function that executes between request and response.

```js
app.use((req,res,next)=>{
   console.log("Middleware");
   next();
});

### 6. How do you handle errors in Express?

app.use((err,req,res,next)=>{
   res.status(500).send(err.message);
});
`
### 7. What is next() in middleware?
`next()` passes control to the next middleware function.

app.use((req,res,next)=>{
   next();
});

### 8. What is routing in Express?
Routing determines how an application responds to client requests.

app.get("/about",(req,res)=>{
   res.send("About");
});

### 9. How do you handle 404 errors?
app.use((req,res)=>{
   res.status(404).send("Page Not Found");
});

### 10. How do you parse JSON data in Express?
app.use(express.json());

### 11. What is CORS and how to enable it?
CORS (Cross-Origin Resource Sharing) allows requests from different domains.

```bash
npm install cors
```
```js
const cors = require("cors");
app.use(cors());

### 12. What is the purpose of package.json?
It stores:
* Project information
* Dependencies
* Scripts
* Version details

### 13. How to serve static files?

app.use(express.static("public"));

### 14. Difference between res.send() and res.json()?
**res.send()**
res.send("Hello");
Sends any type of response.

**res.json()**
res.json({name:"Ali"});
Sends JSON response.

### 15. How do you implement authentication in Express?
Using JWT:
npm install jsonwebtoken

```js
const jwt = require("jsonwebtoken");

const token = jwt.sign(
 {id:1},
 "secretKey"
);

# Common Express Commands

```bash
npm init -y
npm install express
npm install nodemon
npm install cors
```

```bash
npm run dev
```
