import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('admin-musician');
  },
  actions: {
    remove(id){
      this.store.findRecord('admin-musician', id).then(function(musician) {
        musician.destroyRecord(); 
      });
    }
  }
});
