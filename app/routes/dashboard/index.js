import ProfileDropletComponent from 'music-match/components/profile-droplet';

import Ember from 'ember';
import ENV from 'music-match/config/environment';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model(){
    return this.get('session').fetchCurrentMusician();
  },
  setupController(controller){
    var me = this.modelFor(this.routeName).me;
    var token = this.get('session').get('token');
    var picture = me.picture;
    var music = me.music;
    var tags = me.tags;
    controller.set('token', token);
    controller.set('me', me);

    if(tags){
      var instruments = tags.filter(function(tag){
        return tag.type === 0;
      });

      var genres = tags.filter(function(tag){
        return tag.type === 1;
      });

      if(instruments.length > 0){
        controller.set('instruments', instruments)
      }

      if(genres.length > 0){
        controller.set('genres', genres)
      }
    }

    if(picture){
      controller.set('profilePictureURL', ENV.apiURL+'/'+ENV.apiNamespace+'/'+picture);
    }

    if(music){
      var music_processed = music.map(function(m){
        m.path = `${ENV.apiURL}/${ENV.apiNamespace}/${m.path}`;
        return m;
      })
      controller.set('music', music_processed);
    }
  }
});
