import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },
  model(params){
    var query = params.q;
    query = query.replace(/[ ]+/g, '+');
    return this.store.query('musician', { q: query });
  }
});
