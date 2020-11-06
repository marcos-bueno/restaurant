import knex from '../database';
import bcrypt from 'bcryptjs';

class UserController {

  async index(request, response, next) {

    try {
      const { id } = request.params;

      const data = await knex('users');

      response.render('pages/admin/users', {
        id,
        data,
        body: request.body
      });

    } catch (error) {
      
      next(error);
    }
  }

  async create(request, response, next) {
    
    try {
      console.log("Create");
      const {
        name,
        email,
        password } = request.body;

      if(request.body.id === undefined) {

        const hash = bcrypt.hashSync(password, 14);

        await knex('users').insert({
          name,
          email,
          password: hash
        });
      }

      request.flash('success', 'Usuário cadastrado com sucesso!');
      return response.redirect('/dashboard/usuarios');

    } catch (error) {
        
      next(error);
    }
  }

  async update(request, response, next) {

    try {
      console.log("Update");
      const {
        id,
        newPassword, 
        passwordConfirm
      } = request.body;

      if (newPassword === passwordConfirm) {

        const hash = bcrypt.hashSync(newPassword, 14);

        await knex('users')
        .where({ id })
        .update({
          password: hash
        });
  
        return response.redirect('/dashboard/usuarios');

      } else {

        console.log('Value of "newPassword" and "passwordConfirm" differents');
      }

    } catch (error) {
      
      next(error);
    }
  }

  async delete(request, response, next) {

    try {
      console.log("Delete");
      const { id } = request.params;

      await knex('users')
      .where({ id })
      .del();

      return response.redirect('/dashboard/usuarios');

    } catch (error) {
      
      next(error);
    }
  }
}

export default new UserController;