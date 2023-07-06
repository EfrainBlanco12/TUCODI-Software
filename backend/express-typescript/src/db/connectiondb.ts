import {Sequelize} from 'sequelize'

// Conexion a la base de datos
const connectiondb = new Sequelize('tucodi','root','123456',{host:"localhost",dialect:"mysql"})

export default connectiondb