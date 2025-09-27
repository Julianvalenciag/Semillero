import Sequelize from "../config/database";
import User from "./user.model.js";

const db = { Sequelize, User};

export default db;