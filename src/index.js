import app from "./app.js";
// import { conectDb } from "./db.js";

const PORT = process.env.PORT || 9000;

conectDb();
app.listen(PORT);
console.log(`server on port ${PORT}`);
