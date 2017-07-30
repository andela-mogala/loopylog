import Ember from 'ember';

export default Ember.Controller.extend({
  // totalBoards: Ember.computed('model.@each.boards', function() {
  //   return this.get('model').reduce(function(prev, row){
  //     return prev + parseFloat(row.get('boards'));
  //   }, 0);
  // }),
  boards: Ember.computed.mapBy('model', 'boards'),
  totalBoards: Ember.computed.sum('boards'),
  maxBoards: Ember.computed.max('boards'),
  boardFeets: Ember.computed.mapBy('model', 'boardFeet'),
  totalBoardFeet: Ember.computed.sum('boardFeets'),
  maxBoardFeet: Ember.computed.max('boardFeets')
});
