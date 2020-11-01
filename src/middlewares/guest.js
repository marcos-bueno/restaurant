export default (request, response, next) => {
  if (request.session && !request.session.user) {
    return next();
  }

  return response.redirect('/dashboard');
}