import UserCollection from 'models/user-data';
import CreateUserView from 'views/create';


window.App = {};

$(document).ready(function(){
  App.user = new UserCollection();

  window.createUserView = new CreateUserView();
  $('#container').append(createUserView.render().el);

});
