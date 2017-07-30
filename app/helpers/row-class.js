import Ember from 'ember';

export function rowClass(params/*, hash*/) {
  if (params[0]) {
    let row = params[0], classNames = [];
    if (row.Boards === 0 || row.BoardsSum === 0) {
      classNames.push("zero");
    }
    return classNames.join(" ");
  }
  return '';
}

export default Ember.Helper.helper(rowClass);
