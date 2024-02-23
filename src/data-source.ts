import "reflect-metadata"
import { DataSource } from "typeorm"
import { Member } from "./entity/Member"
import { Role } from "./entity/Role"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "church",
    synchronize: true,
    logging: false,
    entities: [Member, Role],
    migrations: [],
    subscribers: [],
})
