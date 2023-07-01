import { CartItem } from "@/types";
import type { InferModel } from "drizzle-orm";
import {
  json,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const carts = mysqlTable("carts", {
  id: serial("id").primaryKey(),
  userId: varchar("userId", { length: 191 }),
  paymentIntentId: varchar("paymentIntentId", { length: 191 }),
  clientSecret: varchar("clientSecret", { length: 191 }),
  items: json("items").$type<CartItem[] | null>().default(null),
  createdAt: timestamp("createdAt").defaultNow(),
});

export type Cart = InferModel<typeof carts>;
