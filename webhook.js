const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const { data } = req.body;

  if (!data || typeof data !== "string") {
    return res.status(400).json({ error: "Invalid input, data shpuld be a string string" });
  }

  const sorted = data.split("").sort().join("");
  return res.status(200).json({ result: sorted });
});

module.exports = router;