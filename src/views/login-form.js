export default Backbone.View.extend({

  events: {
    submit(ev) {
      ev.preventDefault();

      var username = this.$el.find('#username').val();
      var password = this.$el.find('#password').val();
      var acceptedUsers =
    [
      {user: 'aaron@theironyard.com', password: 'password123'},
      {user: 'admin@google.com', password: 'pandas'},
      {user: 'chancey_ward@yahoo.com', password: 'honeycrisp'},
    ];
      var validLogIn  = acceptedUsers.reduce(function(current, deny) {
      if (current.username === user && current.password === password) {
        return true;
      }

      return deny;
    }, false);

      if (validLogIn === true) {
        window.location = 'http//theironyard.com';
      } else {
        alert('Login Attempt Failed: Bro did you match a valid username and password bro???');
      }
    },
  },
});
