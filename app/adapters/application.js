import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV from 'music-match/config/environment';

export default JSONAPIAdapter.extend({
  host: ENV.apiURL,
  namespace: ENV.apiNamespace,
  session: Ember.inject.service('session'),
  headers: Ember.computed('session.token', function() {
    return {
      'token': this.get('session.token'),
    };
  })
});
