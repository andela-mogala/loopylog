import Ember from 'ember';
import Production from 'loopylog/models/production';

const { $ : { getJSON }, Service } = Ember;

export default Service.extend({
  production(start, end) {
    return (
      getJSON(`/data/production.json?starts_at=${start}&ends_at=${end}`)
        .then(data => {
          let records = [];
          data.forEach(item => {
            records.push(Production.create(item));
          });
          this.set('data', records);
          return records;
        })
    );
  },

  dimension(dimension_id) {
    return this.get('data').findBy('DimensionID', parseInt(dimension_id));
  }
});
