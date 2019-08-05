// Business logic
// function Order(size, crust, topping, number) {
//     this.pizzaSize = size;
//     this.pizzaCrust = crust;
//     this.pizzaToppings = topping;
//     this.pizzaNumber = number;
// }
// Order.prototype.aboutOrder = function () {
//     return this.pizzaSize + "," + this.pizzaCrust + "," + this.pizzaToppings + "," + this.pizzaNumber;
// }


var choosenNumber = parseInt($("#number").val());
// User Interface logic
$(document).ready(function () {
    $('form#ordering').submit(function (event) {
        event.preventDefault();
        // var sizedPrice;
        // var choosenSize = $("input[name='size']:checked").val();
        // if (choosenSize === "Small") {
        //     sizedPrice = 1800;
        // }
        // else if (choosenSize === "Medium") {
        //     sizedPrice = 3000;
        // }
        // else {
        //     sizedPrice = 5000;
        // }
        // var crustPrice;
        // var choosenCrust = $("input[name='crust']:checked").val();

        // if ((choosenCrust === "Crispy") || (choosenCrust === "Stuffed")) {
        //     crustPrice = 500;
        // }
        // else {
        //     crustPrice = 700;
        // }
        // var choosenToppings = $("#toppings option:selected").val();
        // $("#toppings option:selected").each(function () {
        //     choosenToppings.push($(this).val());
        // });
        // var addToppings = 0;
        // for (var top = 0; top < choosenToppings.length; top++) {
        //     if (choosenToppings[top] === "Mushrooms") {
        //         addToppings += 600;
        //     }
        //     else if ((choosenToppings[top] === "Onions") || (choosenToppings[top] === "Green peppers")) {
        //         addToppings += 300;
        //     }
        //     else if (choosenToppings[top] === "Pepperoni") {
        //         addToppings += 700;
        //     }
        //     else if (choosenToppings === "Bacon and shrimp") {
        //         addToppings += 1000;
        //     }
        //     else if ((choosenToppings === "Barbecue sauce and chicken") || (choosenToppings === "Taco toppings")) {
        //         addToppings += 1200;
        //     }
        //     else {
        //         addToppings += 500;
        //     }
        // }



    });

    $("#pick").click(function () {
        $("#price").show();
        $("#order").show();
        $("#check").show();
        var sizedPrice;
        var choosenSize = $("input[name='size']:checked").val();
        if (choosenSize === "Small") {
            sizedPrice = 1800;
        }
        else if (choosenSize === "Medium") {
            sizedPrice = 3000;
        }
        else {
            sizedPrice = 5000;
        }
        var crustPrice;
        var choosenCrust = $("input[name='crust']:checked").val();

        if ((choosenCrust === "Crispy") || (choosenCrust === "Stuffed")) {
            crustPrice = 500;
        }
        else {
            crustPrice = 700;
        }
        var addToppings = 0;
        var choosenToppings = $("#toppings option:selected").val();
        if (choosenToppings === "Mushrooms") {
            addToppings += 600;
        }
        else if ((choosenToppings === "Onions") || (choosenToppings === "Peppers")) {
            addToppings += 300;
        }
        else if (choosenToppings === "Pepperoni") {
            addToppings += 700;
        }
        else if (choosenToppings === "Bacon") {
            addToppings += 1000;
        }
        else if ((choosenToppings === "Barbecue") || (choosenToppings === "Taco")) {
            addToppings += 1200;
        }
        else {
            addToppings += 500;
        }
        $("#check").click(function () {
            $("#price").show();
            $("#order").show();
            var pizzaNumber = parseInt($("#number").val());
            var price = (sizedPrice + crustPrice + addToppings) * pizzaNumber + "Rwf";
            $("#pizza-amount").text(price);

            var display = $("#number").val() + " " + $("input[name='size']:checked").val() + ", " + $("input[name='crust']:checked").val() + ", " + $("#toppings option:selected").val();
            $("#details").text(display);

            // $("#add").show();
            // $(this).click(function(){
            //     $("input[name='size']:checked").val()="";
            //     $("input[name='crust']:checked").val()="";

            // })
        });
    });
    $("#deliver").click(function () {
        alert("Please, mention your location!");
        var location = prompt("Enter your location address!");
        alert("Thanks, you will be delivered at " + location);

        $("#check").show();
        var sizedPrice;
        var choosenSize = $("input[name='size']:checked").val();
        if (choosenSize === "Small") {
            sizedPrice = 1800;
        }
        else if (choosenSize === "Medium") {
            sizedPrice = 3000;
        }
        else {
            sizedPrice = 5000;
        }
        var crustPrice;
        var choosenCrust = $("input[name='crust']:checked").val();

        if ((choosenCrust === "Crispy") || (choosenCrust === "Stuffed")) {
            crustPrice = 500;
        }
        else {
            crustPrice = 700;
        }
        var addToppings = 0;
        var choosenToppings = $("#toppings option:selected").val();
        if (choosenToppings === "Mushrooms") {
            addToppings += 600;
        }
        else if ((choosenToppings === "Onions") || (choosenToppings === "Peppers")) {
            addToppings += 300;
        }
        else if (choosenToppings === "Pepperoni") {
            addToppings += 700;
        }
        else if (choosenToppings === "Bacon") {
            addToppings += 1000;
        }
        else if ((choosenToppings === "Barbecue") || (choosenToppings === "Taco")) {
            addToppings += 1200;
        }
        else {
            addToppings += 500;
        }
        $("#check").click(function () {
            $("#price").show();
            $("#order").show();
            var pizzaNumber = parseInt($("#number").val());
            var price = "Rwf " + (sizedPrice + crustPrice + addToppings) * pizzaNumber;
            $("#pizza-amount").text(price);

            var display = $("#number").val() + " " + $("input[name='size']:checked").val() + ", " + $("input[name='crust']:checked").val() + ", " + $("#toppings option:selected").val();
            $("#details").text(display);

            
            // $("#add").show();
            // $("#price").show();
            // $("#order").show();
            $("#delivery").show();
            $("#charges").show();
            $("#total").text() = "The total cost is: " + [2000 + (sizedPrice + crustPrice + addToppings) * pizzaNumber] + " Rwf!");
        // $("#add").show();
    });
});
});