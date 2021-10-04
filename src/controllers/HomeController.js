class HomeController {
  index(request, response) {
    response.json({
      'tudo ok': true,
    });
  }
}

export default new HomeController();
