import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import ENV from 'music-match/config/environment';

export default Model.extend({
  musicianId: attr(),
  path: attr('string'),
  title: attr('string'),
  musician: attr(),
  url: Ember.computed('path', function(){
    return `${ENV.apiURL}/${ENV.apiNamespace}/${this.get('path')}`;
  })
});
