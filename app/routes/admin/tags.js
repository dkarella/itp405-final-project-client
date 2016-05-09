import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('admin-tag');
  },
  actions: {
    remove(id){
      this.store.findRecord('admin-tag', id).then(function(tag) {
        tag.destroyRecord();
      });
    }
  }
});
