import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  isAdmin: false,
  init(){
    this._super(...arguments);
    var self = this;
    self.get('session').isAdmin().then(
      function(){
        // if user is admin, set isAdmin to true
        self.set('isAdmin', true);
      },
      function(){
        // if user is not admin do nothing.
      });
  },
  actions: {
    logout(){
      this.get('session').invalidateSession();
      window.location.href = '/welcome';
    },
    search(){
      $("#search-button").click();
    }
  }
});
