import Ember from 'ember';
import ENV from 'music-match/config/environment';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel(){
    this.get('session').isValid(this);
  }
});
