import { DataTypes,Model } from "sequelize";
import connectiondb from "../db/connectiondb";

class barrio extends Model{
    id?: number;
    nombre?: string;
}

export const Barrios = connectiondb.define<barrio>("barrios",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING
    }

},{timestamps:false})