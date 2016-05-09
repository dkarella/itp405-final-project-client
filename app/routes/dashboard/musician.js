import Ember from 'ember';
import ENV from 'music-match/config/environment';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('musician', params.id);
  },
  setupController(controller, model){
    controller.set('musician', model);
  }
});
