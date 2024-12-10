const express = require("express");
const bodyParser = require("body-parser");
const schoolRoutes = require("./Routes/schoolRoutes");

const app = express();

// Middleware to parse incoming requests with JSON payload
app.use(bodyParser.json());

// Use the school routes
app.use(schoolRoutes);
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
