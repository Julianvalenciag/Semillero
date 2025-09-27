import { DataTypes } from "sequelize";
import Sequelize from "../config/database.js";

const User = Sequelize.define("User", {
    id:{ type: DataTypes.INTEGER, autoIncrement: true, primarykey: true};
    name: { type:DataTypes.STRING, allowNull: false},
    email: { type: DataTypes.STRING, allowNull: false, unique: true

    },{
        timestamps: true,
        tablename: "users"
    }
});
export default User;

