import Ember from 'ember';

export default Ember.Object.extend({
  boards: Ember.computed('BoardsSum', function () {
    return this.get('BoardsSum');
  }),
  boardFeet: Ember.computed.alias('BoardFeetSum')
});
