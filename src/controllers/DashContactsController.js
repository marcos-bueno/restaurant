import knex from '../database';

class DashContactsController {
  async index(request, response, next) {
    
    try {
      const data = await knex('contacts');

      response.render('pages/admin/contacts', {
        data,
        body: request.body
      });

    } catch (error) {
      
      next(error);
    }
  }

  async delete(request, response, next) {

    try {
      const { id } = request.params;

      await knex('contacts')
      .where({ id })
      .del();
      response.redirect("/");

    } catch (error) {
      
      next(error);
    }
  }
}

export default new DashContactsController;