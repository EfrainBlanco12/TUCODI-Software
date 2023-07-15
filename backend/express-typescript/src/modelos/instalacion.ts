import { DataTypes,Model } from "sequelize";
import connectiondb from "../db/connectiondb";

class instalacion extends Model{
    id?: number;
    num_nav?: string;
    direccion_ip?: string;
    fecha_instalacion?: Date;
}

export const Instalaciones = connectiondb.define<instalacion>("instalaciones",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    num_nav:{
        type:DataTypes.STRING
    },
    direccion_ip:{
        type:DataTypes.STRING
    },
    fecha_instalacion:{
        type:DataTypes.DATE
    }
},{timestamps:false})