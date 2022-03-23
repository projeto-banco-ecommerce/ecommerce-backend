import app from "./app";
import "dotenv";
import { serverDebug } from "./debugConfig";

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  serverDebug(`servidor rodando na port ${PORT}`);
});
