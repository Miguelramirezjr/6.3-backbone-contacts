import User from 'models/user-data';

var CreateUserView = Backbone.View.extend({

  tagName: 'form',
  className: 'create-form',

  template: JST['data/form'],

  events: {
    'submit': 'createUser'
  },

  render: function(){
    this.$el.html(this.template());
    console.log(this);
    return this;
  },

  createUser: function(e) {
    e.preventDefault();

    console.log(this);
    App.user.create(this.serializeForm());
  },

  serializeForm: function() {
    var result = {};
    var inputs = this.$el.serializeArray();
    inputs.forEach(function(input) {
      result[input.name] = input.value;
    });
    return result;
  }

});

export default CreateUserView;
