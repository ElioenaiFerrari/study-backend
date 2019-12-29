import Sequelize from "sequelize";
import dbConfig from "../config/config.json";
import User from "../models/User";

const connection = new Sequelize(dbConfig.development);

User.init(connection);

export default connection;
