import { Sequelize } from "sequelize";
import { DB_DATABASE,DB_PASSWORD,DB_PORT,DB_USERNAME } from "../../utils/envvar";

// this works the same way as singleton does
// singleton essentially is just a global
// only the instance below will be used throughout the process's life
const sequelize = new Sequelize(
    DB_DATABASE, // DB_DATABASE environment variable must exist 
    DB_USERNAME, // DB_USERNAME environment variable must exist
    DB_PASSWORD, // DB_PASSWORD  environment variable must exist
    {
        dialect: 'mariadb',
        port: parseInt(DB_PORT), // DB_PORT environment variable must exist
        pool: {
            max:10,
            min:0
    }
})
export {sequelize}
