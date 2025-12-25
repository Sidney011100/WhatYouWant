/// <reference path="./types/express/index.d.ts" />

import express from "express";
import { firebaseAuth } from "./middleware/firebaseAuth";
import { createOrderController } from "./controllers/orderController";

const app = express();
app.use(express.json());

// Dummy route
app.get("/users/:id", firebaseAuth, (req, res) => {
  res.json({ userId: req.user?.uid });
});

app.get("/hi", (req,res) => {
  res.json({data: "hello"})
})

app.post("/order", createOrderController)

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

