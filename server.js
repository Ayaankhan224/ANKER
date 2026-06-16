const express = require("express");
const cors = require("cors");

const rankingRoutes = require("./src/routes/ranking.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/rank", rankingRoutes);

const PORT = 7860;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});