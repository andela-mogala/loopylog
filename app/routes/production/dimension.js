import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('mystore').dimension(params.dimension_id);
  },

  //myStore: Ember.inject.service('mystore')
});
