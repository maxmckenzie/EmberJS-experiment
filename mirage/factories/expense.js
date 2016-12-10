// //https://github.com/marak/Faker.js/
// import Mirage, { faker } from 'ember-cli-mirage';
//
// export default Mirage.Factory.extend({
//   'title'() { return faker.product(); },
//   'description'() { return faker.companyName(); },
//   'price'() { return faker.price(); },
//   'date'() { return faker.past(); },
//   'category'() { return faker.department(); }
// });
import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName: 'test',
  afterCreate() {
    console.log(faker.name.firstName);
  }
});
