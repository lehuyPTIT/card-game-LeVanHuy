import { ModelAttributes, QueryInterface, QueryOptions } from "sequelize";
import { DataBaseTableNames } from "../constants";
import { DBModelFieldInit } from "../db-structure.model";
import { migrationWrapper } from "../transactions";

export default {
  up: async (queryInterface: QueryInterface, Sequelize: any) => {
    const migration = async (options: QueryOptions) => {
      await queryInterface.sequelize.query(
        `ALTER DATABASE ${queryInterface.sequelize.config.database}
        CHARACTER SET utf8 COLLATE utf8_general_ci;`
      );

      const userModelAttributes: DBModelFieldInit<any> = {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      };
      await queryInterface.createTable(
        DataBaseTableNames.USER,
        userModelAttributes as ModelAttributes,
        options
      );

      const cardModelAttributes: DBModelFieldInit<any> = {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        power: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        type: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      };
      await queryInterface.createTable(
        DataBaseTableNames.CARD,
        cardModelAttributes as ModelAttributes,
        options
      );
      const collectionModelAttributes: DBModelFieldInit<any> = {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: DataBaseTableNames.USER,
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      };
      await queryInterface.createTable(
        DataBaseTableNames.COLLECTION,
        collectionModelAttributes as ModelAttributes,
        options
      );

      const collectionItemModelAttributes: DBModelFieldInit<any> = {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        cart_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: DataBaseTableNames.CARD,
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        status: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      };
      await queryInterface.createTable(
        DataBaseTableNames.COLLECTION_ITEM,
        collectionItemModelAttributes as ModelAttributes,
        options
      );

      const logModelAttributes: DBModelFieldInit<any> = {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        collection_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: DataBaseTableNames.COLLECTION_ITEM,
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        action: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      };
      await queryInterface.createTable(
        DataBaseTableNames.LOG,
        logModelAttributes as ModelAttributes,
        options
      );
    };

    await migrationWrapper(migration);
  },

  down: async (queryInterface: QueryInterface, Sequelize: any) => {
    const migration = async (options: QueryOptions) => {
      await queryInterface.dropAllTables(options);
    };

    await migrationWrapper(migration);
  },
};
