import app from "./app";
import ".env";
import { serverDebug } from "./debugConfig";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  serverDebug(`servidor rodando na port ${PORT}`);
});
