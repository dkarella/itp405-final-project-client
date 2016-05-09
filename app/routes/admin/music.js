import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('admin-music');
  },
  actions: {
    remove(id){
      this.store.findRecord('admin-music', id).then(function(music) {
        music.destroyRecord(); // => DELETE to /posts/2
      });
    }
  }
});
