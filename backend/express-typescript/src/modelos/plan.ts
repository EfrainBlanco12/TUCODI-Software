import { DataTypes,Model } from "sequelize";
import connectiondb from "../db/connectiondb";

class plan extends Model{
    id?: number;
    megas?: string;
    precio?: string;
}

export const Planes = connectiondb.define<plan>("planes",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    megas:{
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.STRING
    }

},{timestamps:false})