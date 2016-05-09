import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    login(){
      var username = this.get('login');
      var password = this.get('login_pass');

      this.get('session').requestToken(username, password).then(
        function(){
          // if successful redirect to dashboard, refreshing the
          // page to ensure session is created
          window.location.href = '/';
        },
        function(){
          // if unsuccessful
          //TODO: set fail message
        }
      );
    },
    signup(){
      var username = this.get('signup');
      var first_name = this.get('first_name');
      var last_name = this.get('last_name');
      var password = this.get('signup_pass');
      //var password_verify = this.get('signup_pass_verify');

      console.log(`first: ${first_name}, last: ${last_name}`);

      this.get('session').register(username, password, first_name, last_name).then(
        function(){
          // if successful redirect to dashboard, refreshing the
          // page to ensure session is created
          window.location.href = '/';
        },
        function(){
          // if unsuccessful
          //TODO: set fail message
        }
      );
    }
  }
});
