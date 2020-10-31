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

        const { email, password } = request.body;

        const user = await knex('users').where({ email });

        const data = JSON.stringify(user);

        console.log('>> data: ', data);

        const json = JSON.parse(data);

        console.log('>> json: ', json);

        if (!user) {
            console.log("Usuário não encontrado!");
            return response.redirect('/login');
        }
        
        if(!await bcrypt.compare(password, json[0].password)) {
            console.log("Senha incorreta!");
            return response.redirect('/login');
        }

        return response.redirect('/dashboard');

    }
}

export default new LoginController;