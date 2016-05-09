import Ember from 'ember';
import ENV from 'music-match/config/environment';

export default Ember.Service.extend({
  token: localStorage['token'] || '',
  fetchCurrentMusician(){
    var token = this.get('token');
    return $.get(`${ENV.apiURL}/${ENV.apiNamespace}/me`, {token: token});
  },
  requestToken(username, password){
    return $.post(`${ENV.apiURL}/${ENV.apiNamespace}/request_token`, {username: username, password: password}, 'json')
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
    return $.post(`${ENV.apiURL}/${ENV.apiNamespace}/register`,
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

    return $.post(`${ENV.apiURL}/${ENV.apiNamespace}/validate_token`, {token: token}).then(
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

  isAdmin(){
    var token = this.get('token');

    return $.post(`${ENV.apiURL}/${ENV.apiNamespace}/admin/validate`, {token: token});
  }
});
