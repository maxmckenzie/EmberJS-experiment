import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editExpense(){
      console.log('editExpense');
    },
    deleteExpense(){
      console.log('deleteExpense');
    },
  }
});
