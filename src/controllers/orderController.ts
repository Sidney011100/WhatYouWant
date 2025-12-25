import { Request, Response } from "express";
import { createOrder } from "../repositories/orderRepo";

// Create a new group order
export const createOrderController = async (req: Request, res: Response) => {
  // if (!req.user)
  //   return res.status(403).json({ error: "Guests cannot create orders" });

    // TEMP: fake user (replace later with Firebase)
  const user = {
    id: 1,
    uid: "dev-user-123",
    name: "Dev User",
    email: "dev@example.com",
  };

  try {
    const { drinks } = req.body;

    const order = await createOrder({
      userId: user.id,
      drinks: drinks,
      closed: false,
    });

    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create order" });
  }
};
