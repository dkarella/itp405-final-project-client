import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model(params){
    return this.store.findRecord('admin-tag', params.id);
  },
  actions: {
    removeMusicianTag(tagId, musicianId){
      var token = this.get('session.token');
      var self = this;
      $.ajax({
        url: `http://localhost:3000/api/v1/admin/musician-tag/${musicianId}/${tagId}`,
        type: 'DELETE',
        headers: {
          token: token
        },
        success: function(){
          // handle success
          self.refresh();
        }
      });
    }
  }
});
