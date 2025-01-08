/**
 * Contains the miscellaneous route handlers.
 * @author Tella Boluwatife <https://github.com/codeReaper0>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
