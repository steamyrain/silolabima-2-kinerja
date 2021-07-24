import { Sequelize } from "sequelize";

const sequelize = new Sequelize('kinerja','root','penis123',{
    pool: {
        max:10,
        min:0
    }
})
