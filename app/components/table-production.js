import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',
  classNames: ['table'],
  boards: Ember.computed.mapBy('model', 'boards'),
  totalBoards: Ember.computed.sum('boards'),
  maxBoards: Ember.computed.max('boards'),
  boardFeets: Ember.computed.mapBy('model', 'boardFeet'),
  totalBoardFeet: Ember.computed.sum('boardFeets'),
  maxBoardFeet: Ember.computed.max('boardFeets')
});
