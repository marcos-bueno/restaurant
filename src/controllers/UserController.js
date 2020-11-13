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
      const {
        name,
        email,
        password } = request.body;

      const hash = bcrypt.hashSync(password, 10);

      if (!name || !email || !password) {
        return response.json();
      }

      await knex('users').insert({
        name,
        email,
        password: hash
      });

      request.flash('success', 'Usuário cadastrado com sucesso!');

      return response.redirect('');

    } catch (error) {
        
      next(error);
    }
  }

  async update(request, response, next) {

    try {
      if (request.body.name) {

        const {
          id,
          name, 
          email
        } = request.body;

        if (!name || !email) {
          return response.json();
        }

        await knex('users')
        .where({ id })
        .update({
          name,
          email
        });
        
      } else {

        const {
          id,
          newPassword, 
          passwordConfirm
        } = request.body;
  
        if (!newPassword || !passwordConfirm) {

          return response.json();

        } else if (newPassword !== passwordConfirm) {

          return response.json();
        }

        const hash = bcrypt.hashSync(newPassword, 10);

        await knex('users')
        .where({ id })
        .update({
          password: hash
        });
      }

      request.flash('success', 'Usuário atualizado com sucesso!');

      return response.redirect('');

    } catch (error) {
      
      next(error);
    }
  }

  async delete(request, response, next) {

    try {
      const { id } = request.params;

      await knex('users')
      .where({ id })
      .del();

      request.flash('success', 'Usuário deletado com sucesso!');

      return response.redirect('');

    } catch (error) {
      
      next(error);
    }
  }
}

export default new UserController;