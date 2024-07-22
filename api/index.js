const express = require("express");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  const data = req.body;
  console.log("data", data);
  const { userOp } = data.data;
  const { sender } = userOp

  if (sender === "0x47Bf99e56F29b29c5604EB0567144b2121cB891b") {
    res.json({
      arePoliciesVerified: true,
    });
  } else {
    res.json({
      arePoliciesVerified: false,
    });
  }
});

app.listen(8080, () => console.log("Server listening on port 8080!"));