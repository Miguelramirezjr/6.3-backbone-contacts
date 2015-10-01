import User from 'models/user-data';

var UserCollection = Backbone.Collection.extend({
  model: User,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/contacts"
});

export default UserCollection;
