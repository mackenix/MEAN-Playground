var configValues = require('./config');

module.exports = {
  getDbConnectionString: function(){
    return 'mongodb://' + configValues.uname + ":" + configValues.pwd +
    "@ds113660.mlab.com:13660/mean-todo";
  }
};
