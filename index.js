const express = require("express");
const webhookRoute = require("./webhook");

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Express on Vercel"));
app.use("/webhook", webhookRoute);

app.listen(3000, () => console.log("Server is running on port 3000"));

