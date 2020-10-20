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
      if(request.body.id === undefined) {

        const { filename: photo } = request.file;

        const { 
          title, 
          description, 
          price
        } = request.body;
    
        await knex('menus').insert({
          photo,
          title, 
          description, 
          price
        });
      }

      return response.redirect('/dashboard/menu');

    } catch (error) {
      
      next(error);
    }
  }


  async update(request, response, next) {

    try {
      const { 
        id,
        photo,
        title,
        description,
        price
      } = request.body;

      console.log('CONSOLE: ', request.body);

      // const { filename: photo } = request.file;

      await knex('menus')
      .where({ id })
      .update({ photo, title, description, price });

      return response.redirect('/dashboard/menu');

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

      response.redirect("/dashboard/menu");

    } catch (error) {
      
      next(error);
    }
  }
}

export default new DashMenuController;