import knex from '../database';

class ContactController {

  index(request, response, next) {
    
    try {
      return response.render('pages/contact');

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

      request.flash('success', 'Mensagem enviada com sucesso!');
  
      return response.redirect('/contato');

    } catch (error) {
      
      next(error);
    }
  }
}

export default new ContactController;