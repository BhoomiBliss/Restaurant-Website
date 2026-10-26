import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { IsEmail, IsInt, IsISO8601, IsOptional, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { DatabaseService } from "./database.service.js";

class ReservationDto {
  @IsString() @MinLength(2) @MaxLength(80) name!: string;
  @IsEmail() @MaxLength(254) email!: string;
  @IsString() @MinLength(7) @MaxLength(24) phone!: string;
  @IsISO8601() date!: string;
  @IsString() time!: string;
  @IsInt() @Min(1) @Max(12) guests!: number;
  @IsOptional() @IsString() @MaxLength(300) notes?: string;
}

class ContactDto {
  @IsString() @MinLength(2) @MaxLength(80) name!: string;
  @IsEmail() @MaxLength(254) email!: string;
  @IsOptional() @IsString() @MaxLength(24) phone?: string;
  @IsString() @MinLength(5) @MaxLength(2000) message!: string;
}

@Controller()
export class AppController {
  constructor(private readonly database: DatabaseService) {}

  @Get("health")
  health() {
    return { status: "ok", service: "jyothi-restaurant-api" };
  }

  @Post("reservations")
  @HttpCode(HttpStatus.CREATED)
  async createReservation(@Body() body: ReservationDto) {
    const id = await this.database.insert("reservations", {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      date: body.date,
      time: body.time,
      guests: body.guests,
      notes: body.notes?.trim(),
      status: "pending",
    });
    return { id, status: "pending" };
  }

  @Post("contact")
  @HttpCode(HttpStatus.CREATED)
  async createContactMessage(@Body() body: ContactDto) {
    const id = await this.database.insert("contactMessages", {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim(),
      message: body.message.trim(),
    });
    return { id, received: true };
  }
}
