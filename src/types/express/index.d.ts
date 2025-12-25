import { DecodedIdToken } from "firebase-admin/auth";

declare module "express-serve-static-core" {
  interface Request {
    user?: DecodedIdToken;
  }
}

declare module "express" {
  interface Request {
    user?: DecodedIdToken;
  }
}
