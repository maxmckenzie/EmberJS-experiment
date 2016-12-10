export default function() {

  this.get('/expenses', function(db/*,request*/) {
    console.log(db);
    console.log(db.expenses);
    return {
      data: db.expenses.map(attrs => (
        { type: 'expenses', id: attrs.id, attributes: attrs }
      ))
    }
  });
}
