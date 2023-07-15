import { DataTypes,Model } from "sequelize";
import connectiondb from "../db/connectiondb";

class cliente extends Model{
    id?: number;
    id_instalacion?: number;
    id_estado?: number;
    id_plan?: number;
    id_vivienda?: number;
    nombre?: string;
    apellido?: string;
    telefono?: string;
    correo?: string;
}

export const Clientes = connectiondb.define<cliente>("clientes",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_instalacion:{
        type:DataTypes.INTEGER
    },
    id_estado:{
        type:DataTypes.INTEGER
    },
    id_plan:{
        type:DataTypes.INTEGER
    },
    id_vivienda:{
        type:DataTypes.INTEGER
    },
    nombre:{
        type: DataTypes.STRING
    },
    apellido:{
        type: DataTypes.STRING
    },
    telefono:{
        type: DataTypes.STRING
    },
    correo:{
        type: DataTypes.STRING
    }

},{timestamps:false})