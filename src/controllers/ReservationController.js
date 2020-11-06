import moment from 'moment';

import knex from '../database';

moment.locale("pt-BR");

class ReservationController {

  async index(request, response, next) {

    try {
      const { id } = request.params;

      const data = await knex('reservations');
  
      return response.render('pages/admin/reservations', {
        id,
        data,
        moment,
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
        people,
        date,
        time,
      } = request.body;

      await knex('reservations').insert({
        name,
        email,
        people,
        date,
        time
      });

      request.flash('success', 'Reserva cadastrada com sucesso!');
      return response.redirect('/dashboard/reservas');

    } catch (error) {

      next(error);
    }
  }

  async update(request, response, next) {

    try {
      const { 
        id,
        name,
        email,
        people,
        date,
        time,
      } = request.body;
      console.log(name);

      if(!name)
      {
        console.log("IF");
        return confirm("mensagem");
      }

      await knex('reservations')
      .where({ id })
      .update({ name, email, people, date, time });

      request.flash('success', 'Reserva atualizada com sucesso!');
      return response.redirect('');

    } catch (error) {
      
      next(error);
    }
  }

  async delete(request, response, next) {

    try {
      const { id } = request.params;
      
      await knex('reservations')
      .where({ id })
      .del();

      request.flash('success', 'Reserva deletada com sucesso!');
      return response.redirect('');

    } catch (error) {
      
      next(error);
    }
  }
}

export default new ReservationController;