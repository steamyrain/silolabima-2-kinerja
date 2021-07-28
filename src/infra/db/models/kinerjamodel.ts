import { DataTypes } from "sequelize"
import { sequelize } from "../connection"
import { KinerjaModel } from "../../../types/models/d"
import KegiatanModel from "./kegiatanmodel"

KinerjaModel.init(
    {
        kinerjaId: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        kinerjaStart: {
            type: DataTypes.DATE,
            allowNull: false
        },
        kinerjaEnd: {
            type: DataTypes.DATE,
            allowNull: false
        },
        kegiatanId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true
        },
        kinerjaDesc: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        sequelize,
        tableName: "kinerja",
        modelName: "kinerja",
    }
)

KegiatanModel.hasMany(KinerjaModel,{sourceKey:"kegiatanId",foreignKey:"kegiatanId"})
export default KinerjaModel
