import Aluno from '../models/Aluno';

class HomeController {
  async index(request, response) {
    const novoAluno = await Aluno.create({
      nome: 'Lucas',
      sobrenome: 'gomes',
      email: 'lucas@gmail.com',
      idade: '12',
      peso: 300,
      altura: 2.4,
    });
    response.json(novoAluno);
  }
}

export default new HomeController();
