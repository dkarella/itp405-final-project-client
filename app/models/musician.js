import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import ENV from 'music-match/config/environment';

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  picture: attr('string'),
  music: attr(),
  tags: attr(),
  profilePictureURL: Ember.computed('picture', function(){
    if(this.get('picture')){
        return `${ENV.apiURL}/${ENV.apiNamespace}/${this.get('picture')}`;
    }
    return null;
  }),
  music_processed: Ember.computed('music', function(){
    var music = this.get('music');

    if(music){
      return this.get('music').map(function(m){
        m.path = `${ENV.apiURL}/${ENV.apiNamespace}/${m.path}`;
        return m;
      });
    }
    return null;
  }),
  instruments: Ember.computed('tags', function(){
    var tags = this.get('tags');
    if(tags){
      var instruments = tags.filter(function(tag){
        return tag.type === 0;
      });
      if(instruments.length > 0){
        return instruments;
      }
    }
    return null;
  }),
  genres: Ember.computed('tags', function(){
    var tags = this.get('tags');
    if(tags){
      var genres = tags.filter(function(tag){
        return tag.type === 1;
      });
      if(genres.length > 0){
        return genres;
      }
    }
    return null;
  })
});
