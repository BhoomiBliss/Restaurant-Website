import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { AppController } from "./app.controller.js";
import { DatabaseService } from "./database.service.js";

@Module({
  imports: [ThrottlerModule.forRoot([{ ttl: 60_000, limit: 12 }])],
  controllers: [AppController],
  providers: [DatabaseService, { provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
