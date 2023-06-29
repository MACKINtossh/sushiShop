import { StoredFile } from "@/types";
import type { InferModel } from "drizzle-orm";
import {
  int,
  text,
  json,
  decimal,
  mysqlEnum,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const products = mysqlTable("products", {
  id: serial("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description").notNull(),
  images: json("images").$type<StoredFile[] | null>().default(null),
  price: decimal("price", { precision: 10, scale: 2 }).notNull().default("0"),
  rating: int("inventory").notNull().default(0),
  category: mysqlEnum("category", [
    "sushi",
    "meat",
    "seafood",
    "ramen",
  ]).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Product = InferModel<typeof products>;
