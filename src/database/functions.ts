import { Kysely, PostgresDialect } from "kysely";
import { type DB } from "./types";
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const queryBuilder = new Kysely<DB>({
    dialect: new PostgresDialect({ 
        pool: new pg.Pool({ 
            connectionString: process.env.DATABASE_URL,
        })
    })
})

export function getQueryBuilder() { 
    return queryBuilder;
}