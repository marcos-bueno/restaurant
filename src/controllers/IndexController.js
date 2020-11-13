import knex from '../database';

class IndexController {
  async index(request, response, next) {
    
    try {
      const data = await knex('menus');
      const dataMenu = await knex('menus').count('id');

      return response.render('pages/index', {
        data,
        body: request.body,
        countMenu: dataMenu[0]['count(`id`)']
      });

    } catch (error) {
      
      next(error);
    }
  }

  async create(request, response, next) {

    try {
      const { 
        name, 
        email, 
        people, 
        time
      } = request.body;
  
      const date = request.body.date.split('/');
  
      request.body.date = `${date[2]}-${date[1]}-${date[0]}`;
  
      await knex('reservations').insert({
        name,
        email,
        people,
        date: request.body.date,
        time,
      });
  
      request.flash('success', 'Reserva cadastrada com sucesso!');

      return response.redirect('/');

    } catch (error) {
      
      next(error);
    }
  }
}

export default new IndexController;