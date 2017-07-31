import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model(params) {
    this.set('params', params);
    return this.get('mystore').production(params.start, params.end);
  },

  //myStore: Ember.inject.service('mystore'),

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
