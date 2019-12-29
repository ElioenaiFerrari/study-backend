import { DataTypes, Model } from "sequelize";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        age: DataTypes.INTEGER
      },
      { sequelize }
    );
  }
}
