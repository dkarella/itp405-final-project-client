import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  value: attr('string'),
  type: attr('number'),
  musicians: attr(),
  typeString: Ember.computed('type', function(){
    return this.get('type') === 0 ? 'instrument' : 'genre';
  })
});
