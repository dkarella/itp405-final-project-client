import Ember from 'ember';
import ENV from 'music-match/config/environment';
const Droplet = window.Droplet;

export default Ember.Component.extend(Droplet, {
  url: ENV.apiURL + '/' + ENV.apiNamespace + '/me/music',
  actions: {
    show(){
      var token = this.get('token');
      this.options.requestHeaders = {
        token: token
      };
      // support mp3 files
      this.options.mimeTypes = [
        'audio/mpeg3',
        'audio/x-mpeg-3',
        'audio/mp3'
      ];
      this.$('.modal').modal();
    },
    upload(){
      var musicTitle = this.get('musicTitle');
      this.options.requestPostData = {
        title: musicTitle
      }

      this.send('uploadFiles');
    }
  },
  hooks: {
    didUpload: function() {
      // Refresh after upload so that state is reset
      window.location.reload();
    }
  },
});
