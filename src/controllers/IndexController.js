import knex from '../database';

class IndexController {
  index(request, response, next) {
    
    try {
      response.render('pages/index');

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
  
      return response.redirect('/');

    } catch (error) {
      
      next(error);
    }
  }
}

export default new IndexController;