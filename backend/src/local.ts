import { createApp } from "./main.js";

createApp().then((app) => app.listen(process.env.PORT ?? 3000));
