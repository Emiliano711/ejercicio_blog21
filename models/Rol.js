const { Model, DataTypes } = require("sequelize");

class Rol extends Model {
  static initModel(sequelize) {
    Rol.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        rolname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "rol",
      },
    );
    return Rol;
  }
}

module.exports = Rol;
