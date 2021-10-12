import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      password_hase: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'email já existe',
        },
        validate: {
          isEmail: {
            args: [3, 255],
            msg: 'Email invalido',
          },
        },
      },
      password: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha preisa ter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }
}
