import admin from "firebase-admin";
import fs from "fs";

admin.initializeApp({
  credential: admin.credential.cert(
    JSON.parse(fs.readFileSync("../../what_you_want_service_account.json", "utf8"))
  ),
});

async function run() {
  const uid = "test-user-123"; // fake user
  const token = await admin.auth().createCustomToken(uid);

  console.log(token);
}

//npx ts-node scripts/createToken.ts
run();