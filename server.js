const express = require("express");
const PORT = process.env.PORT;
require("dotenv").config();

require("./db/connection");

const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(express.json());

app.use("/books", bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});