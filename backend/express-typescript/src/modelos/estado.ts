import { DataTypes,Model } from "sequelize";
import connectiondb from "../db/connectiondb";

class estado extends Model{
    id?: number;
    nombre?: string;
}

export const Estados = connectiondb.define<estado>("estados",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING
    }

},{timestamps:false})