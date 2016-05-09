import Ember from 'ember';
import ENV from 'music-match/config/environment';
const Droplet = window.Droplet;

export default Ember.Component.extend(Droplet, {
  url: ENV.apiURL + '/' + ENV.apiNamespace + '/me/picture',
  actions: {
    show(){
      var token = this.get('token');
      this.options.requestHeaders = {
        token: token
      };
      this.$('.modal').modal();
    },
    enter(){
      this.$('.profile-picture h5').attr('hidden', false);
    },
    leave(){
      this.$('.profile-picture h5').attr('hidden', true);
    }
  },
  hooks: {
      didUpload: function() {
        // Refresh after upload so that state is reset
        window.location.reload();
      }
    }
});
