import type { IncomingMessage, ServerResponse } from "node:http";
import type { NestExpressApplication } from "@nestjs/platform-express";
import { createApp } from "../backend/src/main";

let appPromise: Promise<NestExpressApplication> | undefined;

export default async function handler(
  request: IncomingMessage,
  response: ServerResponse,
) {
  appPromise ??= createApp() as Promise<NestExpressApplication>;
  const app = await appPromise;
  const expressApp = app.getHttpAdapter().getInstance();
  return expressApp(request, response);
}
