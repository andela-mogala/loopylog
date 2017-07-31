import Ember from 'ember';
import Production from 'loopylog/models/production';
import moment from 'moment';

const {
  RSVP: { Promise },
  $: { getJSON }
} = Ember;

export default Ember.Route.extend({
  model(params) {
    this.set('params', params);
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
  },

  setupController(controller, model) {
    this._super(controller, model);
    let { start, end } = this.get('params');
    controller.set('start', start);
    controller.set('end', end);
    controller.set('startDate', moment(new Date(start)).format('MM/DD/YYYY'));
    controller.set('endDate', moment(new Date(end)).format('MM/DD/YYYY'));
    controller.set('startTime', moment(new Date(start)).format('HH:mm'));
    controller.set('endTime', moment(new Date(start)).format('HH:mm'));
  },

  actions: {
    loadData(url) {
      this.transitionTo(url)
    }
  }
});
