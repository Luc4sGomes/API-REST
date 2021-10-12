import User from '../models/User';

class UserController {
  async store(request, response) {
    try {
      const novoUser = await User.create({
        nome: 'Lucas',
        password: '123456',
        email: 'lucas@gmail.com',
      });
      return response.json(novoUser);
    } catch (error) {
      return response.status(400).json(error.errors.map((err) => err.message));
    }
  }

  async index(request, response) {
    try {
      const users = await User.findAll();
      return response.json(users);
    } catch (error) {
      return response.json(null);
    }
  }
}

export default new UserController();
