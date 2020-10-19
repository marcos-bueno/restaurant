import knex from '../database';

class DashMenuController {
  async index(request, response, next) {
    
    try {
      const data = await knex('menus');

      response.render('pages/admin/menus', {
        data,
        body: request.body
      });

    } catch (error) {
      
      next(error);
    }
  }

  async create(request, response, next) {

    try {
      const { 
        title, 
        description, 
        price,
      } = request.body;

      const{photo} = request.file.filename;
  
      await knex('menus').insert({
        title, 
        description, 
        price,
        photo
      });
  
      return response.redirect('/');

    } catch (error) {
      
      next(error);
    }
  }

  async delete(request, response, next) {

    try {
      const { id } = request.params;

      await knex('menus')
      .where({ id })
      .del();
      response.redirect("/");

    } catch (error) {
      
      next(error);
    }
  }
}

export default new DashMenuController;