import 'express-serve-static-core';
import { Request } from "express";

const test = (req: Request) => {
  /// <reference path="./types/express/index.d.ts" />
  req.user?.uid; // This should compile without error
};
