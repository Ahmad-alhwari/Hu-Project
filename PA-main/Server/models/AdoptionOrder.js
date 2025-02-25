"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class AdoptionOrder extends Model {
    static associate(models) {
      AdoptionOrder.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });

      AdoptionOrder.belongsTo(models.Adoption, {
        foreignKey: "adoption_id",
        as: "adoption",
      });
    }
  }

  AdoptionOrder.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users", // Ensure this matches the actual table name
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      adoption_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Adoptions", // Ensure this matches the actual table name
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      status: {
        type: DataTypes.ENUM("pending", "approved", "rejected"),
        allowNull: false,
        defaultValue: "pending",
      },
    },
    {
      sequelize,
      modelName: "AdoptionOrder",
      tableName: "adoption_orders",
      timestamps: true,
      underscored: true,
    }
  );

  return AdoptionOrder;
};
