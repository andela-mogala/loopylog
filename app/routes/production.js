import Ember from 'ember';
import Production from 'loopylog/models/production';

const {
  RSVP: { Promise },
  $: { getJSON }
} = Ember;

export default Ember.Route.extend({
  model(params) {
    return new Promise(function(resolve) {
      setTimeout(() => {
        getJSON(`/data/production.json?start=${params.start}&end=${params.end}`)
          .then(data => {
            let records = [];
            data.forEach(item => {
              records.pushObject(Production.create(item));
            });
            resolve(records);
          });
      }, 2000);
    });
  }
});
