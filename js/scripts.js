// Business logic
function Size(name,price){
    this.name=pizzaSize;
    this.price=price;
}
function Crust(name,price){
    this.name=crustName;
    this.price=price;
}
function Toppings(name,price){
    this.name=toppingName;
    this.price=price;
}

function Order(size, crust, topping, quantity) {
    this.size = pizzaSize;
    this.crust = pizzaCrust;
    this.topping = pizzaTopping;
    this.quantity = numberOfPizza;
}





// UI Logic
$(document).ready(function () {
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