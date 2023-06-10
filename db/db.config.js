import { createPool } from "mysql2/promise";
import { DB_HOST,DB_PASSWORD,DB_USER,DB_NAME,DB_PORT } from "../config.js";




export const connectionDb = createPool({

    host:DB_HOST,
    user:DB_USER,
    port:DB_PORT,
    password:DB_PASSWORD,
    database:DB_NAME
    

})


