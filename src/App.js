


app.post('/login', passport.authenticate('local'),function(request, response){
response.json({ username: request.user.username, id: request.user.id, auth_token:request.user.auth_token});
});
