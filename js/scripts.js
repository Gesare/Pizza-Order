// Business logic
function Order(size, crust, topping, number) {
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaToppings = topping;
    this.pizzaNumber = number;
}
Order.prototype.aboutOrder = function () {
    return this.pizzaSize + "," + this.pizzaCrust + "," + this.pizzaToppings + "," + this.pizzaNumber;
}

// UI Logic
$(document).ready(function () {
    $('form#ordering').submit(function (event) {
        event.preventDefault();

        var choosenSize = $("input[name='size']:checked").val();
        var sizedPrice;
        if (choosenSize === "Small") {
            sizedPrice = 1800;
        }
        else if (choosenSize === "Medium") {
            sizedPrice = 3000;
        }
        else {
            sizedPrice = 5000;
        }
        var choosenCrust = $("input[name='crust']:checked").val();
        var crustPrice;
        if ((choosenCrust === "Crispy") || (choosenCrust === "Stuffed")) {
            crustPrice = 500;
        }
        else {
            crustPrice = 700;
        }
        var choosenToppings = [];
        $("#toppings option:selected").each(function () {
            choosenToppings.push($(this).val());
        });
        var addToppings = 0;
        for (var top = 0; top < choosenToppings.length; top++) {
            if (choosenToppings[top] === "Mushrooms") {
                addToppings += 600;
            }
            else if ((choosenToppings[top] === "Onions") || (choosenToppings[top] === "Green peppers")) {
                addToppings += 300;
            }
            else if (choosenToppings[top] === "Pepperoni") {
                addToppings += 700;
            }
            else if (choosenToppings === "Bacon and shrimp") {
                addToppings += 1000;
            }
            else if ((choosenToppings === "Barbecue sauce and chicken") || (choosenToppings === "Taco toppings")) {
                addToppings += 1200;
            }
            else {
                addToppings += 500;
            }
        }
        var choosenNumber = parseInt($("#number").val());
        var newOrder = new Order(choosenSize, choosenCrust, addToppings, choosenNumber)

    });

    $("#pick").click(function () {
        $("#price").show();
        $("#details").text(newOrder);
        $("#pizza-amount").text() = sizedPrice + crustPrice + specialTopping + " Rwf";
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