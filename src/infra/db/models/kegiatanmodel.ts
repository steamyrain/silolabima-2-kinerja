import { DataTypes } from "sequelize"
import { KegiatanModel } from "../../../types/models/d";
import { sequelize } from "../connection"

KegiatanModel.init(
    {
        kegiatanId: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        pekerjaanId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        organisasiId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        kegiatanName: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, 
    {
        sequelize, // connection
        tableName: "kegiatan",
        modelName: "kegiatan"
    }
)

export default KegiatanModel
