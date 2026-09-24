const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
require("./db/connection");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(express.json());

app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});