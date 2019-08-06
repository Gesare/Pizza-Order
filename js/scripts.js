


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
        else if (choosenSize === "Large") {
            sizedPrice = 5000;
        }
        else {
            alert("Please, choose the size!");
        }
        var crustPrice;
        var choosenCrust = $("input[name='crust']:checked").val();

        if ((choosenCrust === "Crispy") || (choosenCrust === "Stuffed")) {
            crustPrice = 500;
        }
        else if (choosenCrust === "Gluten-free") {
            crustPrice = 700;
        }
        else {
            alert("Please choose crust for your pizza to continue!");
        }
        var addToppings = 0;
        var choosenToppings = $("#toppings option:selected").val();
        if (choosenToppings === "Mushrooms") {
            addToppings += 1300;
        }
        else if ((choosenToppings === "Onions") || (choosenToppings === "Peppers")) {
            addToppings += 800;
        }
        else if (choosenToppings === "Pepperoni") {
            addToppings += 1500;
        }
        else if (choosenToppings === "Bacon") {
            addToppings += 1000;
        }
        else if ((choosenToppings === "Barbecue") || (choosenToppings === "Taco")) {
            addToppings += 1800;
        }
        else if (choosenToppings === "Cheese") {
            addToppings += 1500;
        }
        else {
            alert("Please choose toppings for your pizza to continue!");
        }
        $("#check").click(function () {
            $("#price").hide();
            $("#order").show();
            $("#delivery").hide();
            $("#charges").hide();
            var pizzaNumber = parseInt($("#number").val());

            $("#pizza-amount").hide();

            var display = $("#number").val() + " " + $("input[name='size']:checked").val() + ", " + $("input[name='crust']:checked").val() + ", " + $("#toppings option:selected").val();
            $("#details").text(display);
            var total = (sizedPrice + crustPrice + addToppings) * pizzaNumber;
            var totalPrice = "The total cost is: Rwf " + total;
            $("#total").text(totalPrice);

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
            sizedPrice = 2000;
        }
        else if (choosenSize === "Medium") {
            sizedPrice = 3000;
        }
        else if (choosenSize === "Large") {
            sizedPrice = 5000;
        }
        else {
            alert("Please, choose the size!");
        }
        var crustPrice;
        var choosenCrust = $("input[name='crust']:checked").val();

        if ((choosenCrust === "Crispy") || (choosenCrust === "Stuffed")) {
            crustPrice = 500;
        }
        else if (choosenCrust === "Gluten-free") {
            crustPrice = 700;
        }
        else {
            alert("Please choose crust for your pizza to continue!");
        }
        var addToppings = 0;
        var choosenToppings = $("#toppings option:selected").val();
        if (choosenToppings === "Mushrooms") {
            addToppings += 1300;
        }
        else if ((choosenToppings === "Onions") || (choosenToppings === "Peppers")) {
            addToppings += 800;
        }
        else if (choosenToppings === "Pepperoni") {
            addToppings += 1500;
        }
        else if (choosenToppings === "Bacon") {
            addToppings += 1000;
        }
        else if ((choosenToppings === "Barbecue") || (choosenToppings === "Taco")) {
            addToppings += 1800;
        }
        else if (choosenToppings === "Cheese") {
            addToppings += 1500;
        }
        else {
            alert("Please choose toppings for your pizza to continue!");
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
        });
    });
});