import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        private_key: Sequelize.STRING,
        qr_code: Sequelize.STRING

      },
      {
        sequelize,
      },
    );
  }
}

export default User;
