import { QueryInterface, QueryOptions } from "sequelize";

import { migrationWrapper } from "../transactions";
import { CardPowerEnums, CardTypeEnums } from "../constants";
export default {
  up: async (queryInterface: QueryInterface, dataTypes: any) => {
    const migration = async (options: QueryOptions) => {
      // #####################################
      // Card test data
      // #####################################
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (1, 'Lisetta Wilcocke', 'http://dummyimage.com/185x100.png/ff4444/ffffff', ${CardPowerEnums.POWER_ONE}, '${CardTypeEnums.Water}',${CardPowerEnums.POWER_ONE})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (2, 'Radcliffe Sherburn', 'http://dummyimage.com/236x100.png/5fa2dd/ffffff',  ${CardPowerEnums.POWER_TWO}, '${CardTypeEnums.Water}',${CardPowerEnums.POWER_TWO})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (3, 'Matty Benthall', 'http://dummyimage.com/179x100.png/dddddd/000000', ${CardPowerEnums.POWER_THREE}, '${CardTypeEnums.Water}',${CardPowerEnums.POWER_THREE})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (4, 'Vere Pickrell', 'http://dummyimage.com/247x100.png/ff4444/ffffff', ${CardPowerEnums.POWER_FOUR}, '${CardTypeEnums.Water}',${CardPowerEnums.POWER_FOUR})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (5, 'Olivia Dennis', 'http://dummyimage.com/161x100.png/5fa2dd/ffffff', ${CardPowerEnums.POWER_FIVE}, '${CardTypeEnums.Water}',${CardPowerEnums.POWER_FIVE})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (6, 'Annaliese Geydon', 'http://dummyimage.com/236x100.png/cc0000/ffffff', ${CardPowerEnums.POWER_ONE}, '${CardTypeEnums.Fire}',${CardPowerEnums.POWER_ONE})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (7, 'Thor Poulter', 'http://dummyimage.com/244x100.png/cc0000/ffffff', ${CardPowerEnums.POWER_TWO}, '${CardTypeEnums.Fire}',${CardPowerEnums.POWER_TWO})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (8, 'Mendel Mollatt', 'http://dummyimage.com/181x100.png/5fa2dd/ffffff',${CardPowerEnums.POWER_THREE}, '${CardTypeEnums.Fire}',${CardPowerEnums.POWER_THREE})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (9, 'Amandie Jammes', 'http://dummyimage.com/169x100.png/ff4444/ffffff',${CardPowerEnums.POWER_FOUR}, '${CardTypeEnums.Fire}',${CardPowerEnums.POWER_FOUR})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (10, 'Sly Wenham', 'http://dummyimage.com/234x100.png/dddddd/000000',${CardPowerEnums.POWER_FIVE}, '${CardTypeEnums.Fire}',${CardPowerEnums.POWER_FIVE})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (11, 'Lorain Sarsons', 'http://dummyimage.com/247x100.png/5fa2dd/ffffff',${CardPowerEnums.POWER_ONE}, '${CardTypeEnums.Wood}',${CardPowerEnums.POWER_ONE})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (12, 'Brandais McGrae', 'http://dummyimage.com/185x100.png/dddddd/000000',${CardPowerEnums.POWER_TWO}, '${CardTypeEnums.Wood}',${CardPowerEnums.POWER_TWO})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (13, 'Erena Lount', 'http://dummyimage.com/197x100.png/ff4444/ffffff',${CardPowerEnums.POWER_THREE}, '${CardTypeEnums.Wood}',${CardPowerEnums.POWER_THREE})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (14, 'Gennifer Lawley', 'http://dummyimage.com/176x100.png/cc0000/ffffff',${CardPowerEnums.POWER_FOUR}, '${CardTypeEnums.Wood}',${CardPowerEnums.POWER_FOUR})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (15, 'Eve Orsman', 'http://dummyimage.com/123x100.png/5fa2dd/ffffff',${CardPowerEnums.POWER_FIVE}, '${CardTypeEnums.Wood}',${CardPowerEnums.POWER_FIVE})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (16, 'Andria Tolan', 'http://dummyimage.com/188x100.png/cc0000/ffffff',${CardPowerEnums.POWER_ONE}, '${CardTypeEnums.Earth}',${CardPowerEnums.POWER_ONE})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (17, 'Boniface Talman', 'http://dummyimage.com/115x100.png/5fa2dd/ffffff',${CardPowerEnums.POWER_TWO}, '${CardTypeEnums.Earth}',${CardPowerEnums.POWER_TWO})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (18, 'Adella Bazell', 'http://dummyimage.com/110x100.png/dddddd/000000',${CardPowerEnums.POWER_THREE}, '${CardTypeEnums.Earth}',${CardPowerEnums.POWER_THREE})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (19, 'Quintina Jakoviljevic', 'http://dummyimage.com/132x100.png/cc0000/ffffff',${CardPowerEnums.POWER_FOUR}, '${CardTypeEnums.Earth}',${CardPowerEnums.POWER_FOUR})`,
        options
      );
      await queryInterface.sequelize.query(
        `INSERT INTO card (id, name, image, power, type, price) VALUES (20, 'Marge McGlade', 'http://dummyimage.com/207x100.png/5fa2dd/ffffff',${CardPowerEnums.POWER_FIVE}, '${CardTypeEnums.Earth}',${CardPowerEnums.POWER_FIVE})`,
        options
      );
    };

    await migrationWrapper(migration);
  },

  down: async (queryInterface: QueryInterface, Sequelize: any) => {
    const migration = async (options: QueryOptions) => {
      await queryInterface.sequelize.query(
        "SET FOREIGN_KEY_CHECKS = 0",
        options
      );

      await queryInterface.sequelize.query(`TRUNCATE TABLE card`, options);

      await queryInterface.sequelize.query(
        "SET FOREIGN_KEY_CHECKS = 1",
        options
      );
    };

    await migrationWrapper(migration);
  },
};
