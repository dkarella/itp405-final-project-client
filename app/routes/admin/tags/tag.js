import Ember from 'ember';
import ENV from 'music-match/config/environment';

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
        url: `${ENV.apiURL}/${ENV.apiNamespace}/admin/musician-tag/${musicianId}/${tagId}`,
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
