var User = Backbone.Model.extend({
  defaults: function(){
    return {
      email: "",
      name: "",
      phone: "",
      twitter: "",

    };
  },

});

export default User;
