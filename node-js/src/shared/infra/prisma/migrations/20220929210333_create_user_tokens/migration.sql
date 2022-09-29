-- CreateTable
CREATE TABLE "users_tokens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "refresh_token" TEXT NOT NULL,
    "expires_date" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_user_id" TEXT NOT NULL,
    CONSTRAINT "users_tokens_fk_user_id_fkey" FOREIGN KEY ("fk_user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
