import { createApp } from "./main";

createApp().then((app) => app.listen(process.env.PORT ?? 3000));
