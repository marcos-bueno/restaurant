import knex from '../database';
import bcrypt from 'bcryptjs';

class SessionController {
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
        const json = JSON.parse(data);

        if (user.length === 0) {
            request.flash('error', 'Usuário não encontrado!');
            return response.redirect('/login');
        } 
        
        if (!await bcrypt.compare(password, json[0].password)) {
            request.flash('error', 'Senha incorreta!');
            return response.redirect('/login');
        } 

        request.session.user = user;

        return response.redirect('/dashboard'); 
    }

    destroy(request, response, next) {
        request.session.destroy(() => {
            response.clearCookie('root');
            return response.redirect('/');
        });
    }
}

export default new SessionController;