import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel(){
    var self = this;
    return this.get('session').isAdmin().then(
      function(){
        // if successful just continue
      },
      function(){
        // if fail, take back to dashboard
        this.transitionTo('dashboard');
      });
  }
});
