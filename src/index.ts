
import express from "express";
import { firebaseAuth } from "./middleware/firebaseAuth";

const app = express();
app.use(express.json());

// Dummy route
app.get("/users/:id", firebaseAuth, (req, res) => {
  res.json({ userId: req.user?.uid });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

