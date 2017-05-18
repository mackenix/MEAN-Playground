var Todos = require('../models/todoModel');

module.exports = function(app){
  app.get('/api/setupTodos', function(req, res){

      //seed database
      var starterTodos = [
        {
          username: 'testUser',
          todo: 'Buy milk',
          isDone: false,
          hasAttachment: false
        },
        {
          username: 'testUser',
          todo: 'Feed Dog',
          isDone: false,
          hasAttachment: false
        },
        {
          username: 'testUser',
          todo: 'Learn Node',
          isDone: false,
          hasAttachment: false
        },

      ];
      Todos.create(starterTodos, function(err, results){
        res.send(results);
      });
  });
};
