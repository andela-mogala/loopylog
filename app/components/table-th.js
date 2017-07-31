import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'th',
  classNameBindings: ['thClass'],
  thClass: Ember.computed('sortBy', 'currentSort', function() {
    if(this.get('sortBy') === this.get('currentSort')) {
      return 'sorted';
    } else { return '' }
  }),
  actions: {
    sort() {
      this.get('sortData')(this.get('sortBy'));
    }
  }
});
