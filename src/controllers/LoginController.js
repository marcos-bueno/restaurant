import knex from '../database';
import bcrypt from 'bcryptjs';

class LoginController {
    index(request, response, next) {
        try {
          response.render('pages/login');
    
        } catch (error) {
          
          next(error);
        }
    }

    async store(request, response, next){
        const{
            email,
            password
        } = request.body;

        const user = await knex('users')
        .where({ email });

        if(!user)
        {
            console.log("Deu ruim");
            return response.redirect('/login');
        }
        else
        {
            console.log(user);
        }
        
        //if(!await bcrypt.compare(password, ))
    }
}

export default new LoginController;