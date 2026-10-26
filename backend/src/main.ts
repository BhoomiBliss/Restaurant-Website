import "reflect-metadata";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";

export async function createApp() {
  const app = await NestFactory.create(AppModule, { logger: false });
  app.setGlobalPrefix("api");
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  app.enableCors({
    origin: (origin, callback) => {
      const allowed = (process.env.FRONTEND_URLS ?? "")
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean);
      const isVercelPreview = !!origin && /^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(origin);
      const isNativeApp = origin === "capacitor://localhost" || origin === "http://localhost";
      callback(null, !origin || allowed.includes(origin) || isVercelPreview || isNativeApp);
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  });
  await app.init();
  return app;
}
