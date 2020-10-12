import knex from '../database';

class ContactsController {
  index(request, response, next) {
    
    try {
      response.render('pages/contact');

    } catch (error) {
      
      next(error);
    }
  }

  async create(request, response, next) {

    try {
      const { 
        name, 
        email, 
        message
      } = request.body;
  
      await knex('contacts').insert({
        name,
        email,
        message
      });
  
      return response.redirect('/');

    } catch (error) {
      
      next(error);
    }
  }
}

export default new ContactsController;