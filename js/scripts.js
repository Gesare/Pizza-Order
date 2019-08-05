// Business logic
function Order(size, crust, topping, number, deliverance) {
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaToppings = topping;
    this.pizzaNumber = number;
    this.pizzaDevivery = deliverance;
}
Order.prototype.aboutOrder = function () {
    return this.pizzaSize + "," + this.pizzaCrust + "," + this.pizzaToppings + "," + this.pizzaNumber + "," + this.pizzaDevivery;
}
// var pizzaSize = $("input[name='size']:checked").val();

// var pizzaCrust = $("input[name='crust']:checked").val();

// var pizzaTopping = $('#toppings').val();
// var pizzaNumber = parseInt($("#number").val());
// var pizzaPrice;




// UI Logic
$(document).ready(function () {
    $('form#ordering').submit(function (event) {
        event.preventDefault();
        var newOrder;
        if($('small').val()){
            var choosenSize=$('#small').val()+""+"price=1800 Rwf";
            console.log(choosenSize);
        }
        else if()
    });
    // $("#pick").click(function () {
    //     $("#price").show();
    //     // if ()
    //     $("#order").show();
    //     $("#check").show();
    //     $("#check").click(function () {
    //         $("#price").show();
    //         $("#order").show();
    //         // $("#delivery").show();
    //         // $("#charges").show();
    //         $("#add").show();
    //     });
    // });
    // $("#deliver").click(function () {
    //     alert("Please, mention your location!");
    //     var location = prompt("Enter your location address!");
    //     alert("Thanks, you will be delivered at " + location);
    //     $("#check").show();
    //     $("#check").click(function () {
    //         $("#price").show();
    //         $("#order").show();
    //         $("#delivery").show();
    //         $("#charges").show();
    //         $("#add").show();
    //     });
    // });
});