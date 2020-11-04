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
    try{
      console.log("Create");
      const { filename: photo } = request.file;

      const{
        title,
        description,
        price
      } = request.body;

      await knex('menus').insert({
        title,
        description,
        price,
        photo
      });

      request.flash('success', 'Prato cadastrado com sucesso!');
      //response.redirect("/dashboard/menus");

    } catch (error) {
      
      next(error);
    }
  }


  async update(request, response, next) {
    try{
      console.log("Update");

      const{
        id,
        title,
        description,
        filename: photo = request.file,
        price
      } = request.body;
      console.log("Update2");

      await knex('menus')
      .where({ id })
      .update({ title, description, price, photo });
      console.log("Update3");

      request.flash('success', 'Prato atualizado com sucesso!');
      response.redirect("/dashboard/menus");

    } catch (error) {
      
      next(error);
    }
  }

  async delete(request, response, next) {

    try {
      console.log("Delete");
      const { id } = request.params;

      await knex('menus')
      .where({ id })
      .del();

      request.flash('success', 'Item deletado com sucesso!');

      response.redirect("/dashboard/menu");

    } catch (error) {
      
      next(error);
    }
  }
}

export default new DashMenuController;