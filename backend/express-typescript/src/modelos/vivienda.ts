import { DataTypes,Model } from "sequelize";
import connectiondb from "../db/connectiondb";

class vivienda extends Model{
    id?:number;
    id_barrio?: number;
    direccion?: string;
    // fachada?: string;
    coordenada?: string;
    numero_piso?: string;
}

// Esto quiere decir que Viviendas va a ser una conexión a la base de datos con las variables 
// definidas en la clase vivienda
export const Viviendas = connectiondb.define<vivienda>("vivienda",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true
    },
    id_barrio:{
        type:DataTypes.INTEGER
    },
    direccion:{
        type:DataTypes.STRING
    },
    // fachada:{
    //     type:DataTypes.STRING
    // },
    coordenada:{
        type:DataTypes.STRING
    },
    numero_piso:{
        type:DataTypes.STRING
    }
},{timestamps:false})  //Me descativa la seguridad de sequelize del createAt y updateAt (NO HACER ESTO EN CASA)



