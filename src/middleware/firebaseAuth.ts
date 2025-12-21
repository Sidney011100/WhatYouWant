import { Request, Response, NextFunction } from "express";
import admin from "firebase-admin";

export async function firebaseAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Missing token" });

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded; // ✅ TS should now accept this
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
}
