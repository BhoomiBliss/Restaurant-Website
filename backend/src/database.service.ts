import { Injectable, ServiceUnavailableException } from "@nestjs/common";
import mongoose, { Connection } from "mongoose";

@Injectable()
export class DatabaseService {
  private connectionPromise?: Promise<Connection>;

  async insert(collectionName: string, document: Record<string, unknown>) {
    const collection = await this.collection(collectionName);
    const result = await collection.insertOne({
      ...document,
      createdAt: new Date(),
    });
    return result.insertedId.toString();
  }

  private async collection(collectionName: string) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new ServiceUnavailableException(
        "Online forms are not configured yet. Please call the restaurant directly.",
      );
    }

    this.connectionPromise ??= mongoose.createConnection(uri).asPromise();

    try {
      const connection = await this.connectionPromise;
      return connection.collection(collectionName);
    } catch {
      this.connectionPromise = undefined;
      throw new ServiceUnavailableException(
        "The booking service is temporarily unavailable. Please try again shortly.",
      );
    }
  }
}
