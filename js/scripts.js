


// User Interface logic
$(document).ready(function () {
    $('form#ordering').submit(function (event) {
        event.preventDefault();
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
            // $(this).click(function () {
            //     $("#add").hide();
            //     $("#details").hide();
            //     $("#pizza-amount").hide();
            //     $("#price").hide();
            //     $("#order").hide();

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
            $("#delivery").show();
            $("#charges").show();
            var total = (sizedPrice + crustPrice + addToppings) * pizzaNumber;
            var totalPrice = "The total cost is: Rwf " + (total + 2000);
            $("#total").text(totalPrice);
            // $("#add").show();
            // $("this").click(function () {
            //     $("#add").hide();
            //     $("#details").hide();
            //     $("#pizza-amount").hide();
            //     $("#price").hide();
            //     $("#order").hide();
            // });
        });
    });
});