// Business logic
function Size(name, price) {
    this.name = pizzaSize;
    this.price = price;
}
function Crust(name, price) {
    this.name = crustName;
    this.price = price;
}
function Toppings(name, price) {
    this.name = toppingName;
    this.price = price;
}

function Order(size, crust, topping, quantity) {
    this.size = pizzaSize;
    this.crust = pizzaCrust;
    this.topping = pizzaTopping;
    this.quantity = numberOfPizza;
}





// UI Logic
$(document).ready(function () {
    var small = new size("Small", 1500);
    var medium = new size("Medium", 2500);
    var large = new size("Large", 4500);

    var crispy = new crust("Crispy", 500);
    var stuffed = new crust("Stuffed", 700);
    var gluten = new crust("Gluten", 1000);
    $("#pick").click(function () {
        $("#price").show();
        $("#order").show();
        $("#check").show();
        $("#check").click(function () {
            $("#price").show();
            $("#order").show();
            // $("#delivery").show();
            // $("#charges").show();
            $("#add").show();
        });
    });
    $("#deliver").click(function () {
        alert("Please, mention your location!");
        var location = prompt("Enter your location address!");
        alert("Thanks, you will be delivered at " + location);
        $("#check").show();
        $("#check").click(function () {
            $("#price").show();
            $("#order").show();
            $("#delivery").show();
            $("#charges").show();
            $("#add").show();
        });
    });
});