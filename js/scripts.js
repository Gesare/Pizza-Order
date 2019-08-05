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
        var sizedPrice;
        if ($("input[name='size']:checked").val()==="Small") {
            var choosenSize = $("input[name='size']:checked").val();
            sizedPrice=1800;
        }
        else if($("input[name='size']:checked").val()==="Medium"){
            var choosenSize=$("input[name='size']:checked").val();
            sizedPrice=2500;
        }
        else{
            var choosenSize=$("input[name='size']:checked").val();
            sizedPrice=4000;
        }
        var crustPrice;
        if (($("input[name='crust']:checked").val()==="Crispy")||($("input[name='crust']:checked").val()==="Stuffed")) {
            var choosenCrust = $("input[name='crust']:checked").val();
            crustPrice=500;
        }
        else{
            var choosenCrust=$("input[name='crust']:checked").val();
            crustPrice=700;
        }
        var choosenToppings = [];
        $("#toppings option:selected").text().forEach(function () {
            choosenToppings.push($(this).val());
            var specialTopping = 0;
            function topping(choosenToppings) {
                for (var top = 0; top < choosenToppings.length; top++) {
                    if (choosenToppings[top] === "Mushrooms") {
                        specialTopping += 600;
                    }
                    else if ((choosenToppings[top] === "Onions")||(choosenToppings[top]==="Green peppers")) {
                        specialTopping += 300;
                    }
                    else if (choosenToppings[top] === "Pepperoni") {
                        specialTopping += 700;
                    }
                    else if(choosenToppings==="Bacon and shrimp"){
                        specialTopping+=1000;
                    }
                    else if((choosenToppings==="Barbecue sauce and chicken")||(choosenToppings==="Taco toppings")){
                        specialTopping+=1200;
                    }
                    else{
                        specialTopping+=500;
                    }
                    
                }
                return specialTopping;
            }
        });
    });
    var newOrder = new Order(choosenSize,choosenCrust,specialTopping,number, deliverance);
    console.log(newOrder);
    console.log(specialTopping);
    
    $("#pick").click(function () {
        $("#price").show();
        $("#pizza-amount").text()=sizedPrice+crustPrice+specialTopping+" Rwf";
        $("#order").show();
        $('ul#details').append("<li><span>" +newOrder.aboutOrder() +"</span></li>");
        // $("#details").val()=(choosenSize+", "+choosenCrust+", "+choosenToppings)*number;
        $("#check").show();
        $("#check").click(function () {
            $("#price").show();
            $("#order").show();
            // $("#delivery").show();
            // $("#charges").show();
            $("#add").show();
        });
    });
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