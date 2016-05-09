import Ember from 'ember';

export default Ember.Controller.extend({
  token: null,
  profilePictureURL: null,
  newTag: null,
  me: null,
  instruments: [],
  genres: [],
  music: [],
  actions: {
    addTag(type){
      var genres = this.get('genres');
      var instruments = this.get('instruments');

      // Type 0 corresponds to an instrument
      if(type === 0){
        var tag = this.get('newInstrument');
        this.set('newInstrument', '');
        var token = this.get('token');
        var me = this.get('me');
        $.post('http://localhost:3000/api/v1/me/tag', {
          token: token,
          type: type,
          value: tag
        }).then(
          function(res){
            instruments.pushObject(res.newTag);
          },
          function(){
            // TODO: Display error
          });
      }
      // Type 1 corresponds to a genre
      else if(type === 1){
        var tag = this.get('newGenre');
        this.set('newGenre', '');
        var token = this.get('token');
        var me = this.get('me');
        $.post('http://localhost:3000/api/v1/me/tag', {
          token: token,
          type: type,
          value: tag
        }).then(
          function(res){
            genres.pushObject(res.newTag);
          },
          function(){
            // TODO: Display error
          });
      }
    },

    removeTag(tag){
      var genres = this.get('genres');
      var instruments = this.get('instruments');
      var token = this.get('token');

      $.ajax({
        url: `http://localhost:3000/api/v1/me/tag/${tag.id}`,
        type: 'DELETE',
        headers: {
          token: token
        },
        success: function(){
          if(tag.type === 0){
            instruments.removeObject(tag);
          } else if (tag.type === 1){
            genres.removeObject(tag);
          }
        }
      });
    },

    removeMusic(music){
      var musicArray = this.get('music');
      var token = this.get('token');

      $.ajax({
        url: `http://localhost:3000/api/v1/me/music/${music.id}`,
        type: 'DELETE',
        headers: {
          token: token
        },
        success: function(){
          musicArray.removeObject(music);
        }
      });
    },
  }
});
