import Ember from 'ember';

export default Ember.Service.extend({
  token: localStorage['token'] || '',
  fetchCurrentMusician(){
    var token = this.get('token');
    return $.get('http://localhost:3000/api/v1/me', {token: token});
  },
  requestToken(username, password){
    return $.post('http://localhost:3000/api/v1/request_token', {username: username, password: password}, 'json')
      .done((res) => {
        // success
        // set token in local storage
        localStorage['token'] = res.token;
        this.set('token', res.token);
      })
      .fail((res) => {
        console.log(res.responseJSON.error);
      });
  },
  register(username, password, first_name, last_name){
    return $.post('http://localhost:3000/api/v1/register',
      {
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name
      },
      'json')
      .done((res) => {
        // success
        // set token in local storage
        localStorage['token'] = res.token;
        this.set('token', res.token);
      })
      .fail((res) => {
        console.log(res.responseJSON.error);
      });
  },

  invalidateSession(){
    localStorage['token'] = '';
    this.set('token', '');
  },

  isValid(router){
    var token = this.get('token');
    var self = this;

    return $.post('http://localhost:3000/api/v1/validate_token', {token: token}).then(
      function(){
        // if successul don't do anything
      },
      function(){
        // if fail:
        // lose the old token and transition to welcome
        self.invalidateSession();
        router.transitionTo('welcome');
      });
  },

  isAdmin(router){
    var token = this.get('token');
    var self = this;

    return $.post('http://localhost:3000/api/v1/admin/validate', {token: token});
  }
});
