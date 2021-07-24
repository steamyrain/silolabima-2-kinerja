import { Sequelize } from "sequelize";

// this works the same way as singleton does
// singleton essentially is just a global
// only the instance below will be used throughout the process's life
const sequelize = new Sequelize('','root','penis123', {
    //port: process.env.PORT?parseInt(process.env.PORT):3306,
    dialect: 'mariadb',
    port:3307, 
    pool: {
        max:10,
        min:0
    }
})
//const sequelize = new Sequelize("mariadb://root:penis123@localhost:3307")

export {sequelize}
