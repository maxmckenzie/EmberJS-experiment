import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addExpense() {
      console.log('addExpense');
      console.log(this.get('store'));

    },
  }
});
