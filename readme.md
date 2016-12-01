The goal for this exercise is to develop a small EmberJS application that allows the user to:

- Track his expenses, defined by a base amount and VAT type (an integer between 0 and 100) as well as a category
- For simplicity’s sake, we will assume each expenses has only one item and VAT type
- You can use a restricted set of categories (e.g. restaurants, supermarkets, Internet, rent and so on) or, if you feel brave, create them on demand from the UI
- For the expenses, the total amount will be calculated based on the base amount and the VAT (in Spain, an expense with 100€ as base amount and 21% as the generic VAT type, the total amount would be 121€)
- There will also be a dashboard that will show the total amount of all the expenses (e.g. 1561.44€), and the total amount of expenses for each category (e.g. restaurants 125.12€, supermarkets 159.99€, Internet 41.10€ and so on)

Bonus points for adding a feature designed by you within the application domain.

In order to keep things simple and focus on the client-side application, we strongly recommend using a tool like Mirage, that allows you to quickly setup and run a fake API back-end server.

We will value:

- Clean, effective, elegant code
- Reusable, well-structured markup and CSS architecture
- Correctness of the total amount results according to the behaviour exposed
