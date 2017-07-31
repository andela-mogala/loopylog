import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    loadData() {
      let start = moment(new Date(this.get('startDate'))).format('MM-DD-YYYY ') + this.get('startTime');
      let end = moment(new Date(this.get('endDate'))).format('MM-DD-YYYY ') + this.get('endTime');
      let url = `/${start}/to/${end}`;
      this.get("load")(url);
    }
  }
});
