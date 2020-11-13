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
      const { filename: photo } = request.file;

      const {
        title,
        description,
        price
      } = request.body;

      if (!title || !description || !price) {
        return response.json();
      }

      await knex('menus').insert({
        photo,
        title,
        description,
        price
      });

      request.flash('success', 'Menu cadastrado com sucesso!');

      return response.redirect('');

    } catch (error) {
      
      next(error);
    }
  }

  async update(request, response, next) {
    
    try {
      if (!request.file) {

        const {
          id,
          photo,
          title,
          description,
          price
        } = request.body;

        if (!title || !description || !price) {
          return response.json();
        }

        await knex('menus')
        .where({ id })
        .update({ photo, title, description, price });

      } else {

        const { filename: photo } = request.file;

        const {
          id,
          title,
          description,
          price
        } = request.body;

        if (!title || !description || !price) {
          return response.json();
        }

        await knex('menus')
        .where({ id })
        .update({ photo, title, description, price });
      }

      request.flash('success', 'Menu atualizado com sucesso!');

      return response.redirect('');

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

      request.flash('success', 'Menu deletado com sucesso!');

      return response.redirect('');

    } catch (error) {
      
      next(error);
    }
  }
}

export default new DashMenuController;