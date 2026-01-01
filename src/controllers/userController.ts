import { Request, Response } from "express";
import { createUserIfNotExists } from "../repositories/userRepo";

export const createUser = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const firebaseUid = req.user.uid;
    const email = req.user.email ?? null;

    const user = await createUserIfNotExists(firebaseUid, email);

    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create user" });
  }
};

export async function createUserController(
  req: Request,
  res: Response
) {
  try {
    // These should come from verified Firebase token
    const firebaseUid = req.user?.uid; // from auth middleware
    const email = req.user?.email;

    if (!firebaseUid) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await createUserIfNotExists(firebaseUid, email);

    return res.status(200).json(user);
  } catch (err) {
    console.error("Create user failed:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function getUserById(req: Request, res: Response) {
  const { id } = req.params;

  // for now, just prove it works
  res.json({
    message: "User route works",
    id,
  });
}
