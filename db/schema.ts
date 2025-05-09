import { pgTable, text, timestamp, integer, primaryKey, pgEnum} from "drizzle-orm/pg-core";
import { type AdapterAccount } from "next-auth/adapters";

export const userRoleEnum = pgEnum('user_role', ['user', 'admin', 'manager', 'security', 'business_intelligence']);


// First define all tables 
export const users = pgTable("user", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password"), 
    role: userRoleEnum("role").default("user"),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image"),
    phone: text("phone"),
    dateOfBirth: timestamp("date_of_birth", { mode: "date" }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
  });
  
  // Auth.js tables
  export const accounts = pgTable(
    "account",
    {
      userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
      type: text("type").$type<AdapterAccount["type"]>().notNull(),
      provider: text("provider").notNull(),
      providerAccountId: text("providerAccountId").notNull(),
      refresh_token: text("refresh_token"),
      access_token: text("access_token"),
      expires_at: integer("expires_at"),
      token_type: text("token_type"),
      scope: text("scope"),
      id_token: text("id_token"),
      session_state: text("session_state"),
    },
    (account) => ({
      compoundKey: primaryKey({
        columns: [account.provider, account.providerAccountId],
      }),
    })
  );
  
  export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").notNull().primaryKey(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  });
  
  export const verificationTokens = pgTable(
    "verificationToken",
    {
      identifier: text("identifier").notNull(),
      token: text("token").notNull(),
      expires: timestamp("expires", { mode: "date" }).notNull(),
    },
    (vt) => ({
      compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
    })
  );