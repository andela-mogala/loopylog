import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',
  classNames: ['table'],
  sortBy:"default",
  sortedModel: Ember.computed('model', 'sortBy', function() {
    switch(this.get('sortBy')) {
      case "boards":
        return this.get('model').sortBy('boards', 'DimensionName').reverse();
      case "boardFeet":
        return this.get('model').sortBy('boardFeet', 'DimensionName').reverse();
      default:
        return this.get('model');
    }
  }),
  boards: Ember.computed.mapBy('model', 'boards'),
  totalBoards: Ember.computed.sum('boards'),
  maxBoards: Ember.computed.max('boards'),
  boardFeets: Ember.computed.mapBy('model', 'boardFeet'),
  totalBoardFeet: Ember.computed.sum('boardFeets'),
  maxBoardFeet: Ember.computed.max('boardFeets'),
  actions: {
    sortData(column) {
      this.set('sortBy', column);
    }
  }
});
