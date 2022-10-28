$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Orders.feature");
formatter.feature({
  "line": 1,
  "name": "End to End scenarios for placing orders",
  "description": "",
  "id": "end-to-end-scenarios-for-placing-orders",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2319917900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify whether the User is able to place orders",
  "description": "",
  "id": "end-to-end-scenarios-for-placing-orders;verify-whether-the-user-is-able-to-place-orders",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Orders"
    },
    {
      "line": 2,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I add a product to the bag and checkout",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I place an order",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should see that the order is placed successfuly",
  "keyword": "Then "
});
formatter.match({
  "location": "Orders.i_login_to_the_application()"
});
formatter.result({
  "duration": 14065286400,
  "status": "passed"
});
formatter.match({
  "location": "Orders.i_add_a_product_to_the_bag_and_checkout()"
});
formatter.result({
  "duration": 13565965900,
  "status": "passed"
});
formatter.match({
  "location": "Orders.i_place_an_order()"
});
formatter.result({
  "duration": 3639766100,
  "status": "passed"
});
formatter.match({
  "location": "Orders.i_should_see_that_the_order_is_placed_successfuly()"
});
formatter.result({
  "duration": 74193900,
  "status": "passed"
});
formatter.after({
  "duration": 1107697700,
  "status": "passed"
});
});