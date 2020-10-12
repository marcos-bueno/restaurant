import knex from '../database';

class DashboardController {

  async index(request, response, next) {
    
    try {
      const dataReservations = await knex('reservations').count('id');
      const dataUsers = await knex('users').count('id');


      response.render('pages/admin/index', {
        countReservations: dataReservations[0]['count(`id`)'],
        countUsers: dataUsers[0]['count(`id`)']
      });

    } catch (error) {
      
      next(error);
    }
  }
}

export default new DashboardController;