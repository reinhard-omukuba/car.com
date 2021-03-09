var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);


//



var demio = {
    price: 600000,
    yom: "2017",
    model: "Toyota Demio",
    image : "images/demio.jpg",
    productId: "001",
    desc: "Demio Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit eligendi."
}

var forester = {

    price: 1400000,
    yom: "2010",
    model: "Subaru Foreser",
    productId: "002",
    image: "images/forester.jpg",
    desc: "Subaru Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit eligendi."
}

var vitara = {

    price: 1000000,
    yom: "2016",
    model: "Suzuki Grand Virtara",
    image: "images/vitara.jpg",
    productId: "003",
    desc: "Subaru Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit eligendi."
}



if (queryString == demio.productId){

    document.getElementById("image").src = demio.image;
    document.getElementById("model").innerHTML = demio.model;
    document.getElementById("desc").innerHTML = demio.desc;
    document.getElementById("price").innerHTML = "KES. " + demio.price;
    document.getElementById("yom").innerHTML = "Year of manufacture: "  + demio.yom;


    document.getElementById("selectQuantity").onchange = function(){

        var selectQty =  document.getElementById("selectQuantity").value;
    
        var qytInt = parseInt(selectQty);

        var totalPrices = qytInt * demio.price;
    
        document.getElementById("totalPrice").innerHTML = "Total ; " + totalPrices;


        document.getElementById("shopNow").onclick = function(){

            //hideElements

            document.getElementById("moreSec1").style.display = "none";
            document.getElementById("moreSec2").style.display = "block";

            document.getElementById("subTotalPrice").innerHTML = "Subtotal price: " + totalPrices;
            document.getElementById("yourTotalQty").innerHTML = "Item Quatity: " + qytInt;

            //calculating delivery price

            document.getElementById("deliveryAddress").onchange = function(){

                var theAddress = document.getElementById("deliveryAddress").value;

                if (theAddress == "Nakuru"){

                    var Nakuru = 40000;
                    var Nairobi = 18500;
                    var Mombasa = 41000;

                    document.getElementById("DeliveryFee").innerHTML = "Your delivery fee is: " + Nakuru;

                    var priceBeforeTax =  Nakuru + demio.price;
                    var tax = priceBeforeTax * 0.14;
                    var priceAfterTax = priceBeforeTax + tax

                   // document.getElementById("DeliveryFee").innerHTML = "Your delivery fee is: " + Nakuru;
                    document.getElementById("grandTotal").innerHTML = "Grand total is; " + priceAfterTax;

                    document.getElementById("btnCheckOut").onclick = function(){

                        document.getElementById("payments").style.display = "block";

                        var fullName =  document.getElementById("fullName").value;
                        document.getElementById("checkOutMsg").innerHTML = "Dear; " + fullName + " your total price is " + priceAfterTax + ". Click on a payment method below to checkout.";

                    }



                } else if(theAddress == "Nairobi"){

                    var Nakuru = 40000;
                    var Nairobi = 18500;
                    var Mombasa = 41000;

                    document.getElementById("DeliveryFee").innerHTML = "Your delivery fee is: " + Nairobi;

                    var priceBeforeTax =  Nairobi + demio.price;
                    var tax = priceBeforeTax * 0.14;
                    var priceAfterTax = priceBeforeTax + tax

                   // document.getElementById("DeliveryFee").innerHTML = "Your delivery fee is: " + Nakuru;
                    document.getElementById("grandTotal").innerHTML = "Grand total is; " + priceAfterTax;


                } else if(theAddress == "Mombasa"){

                    var Nakuru = 40000;
                    var Nairobi = 18500;
                    var Mombasa = 41000;

                    document.getElementById("DeliveryFee").innerHTML = "Your delivery fee is: " + Mombasa;

                    var priceBeforeTax =  Mombasa + demio.price;
                    var tax = priceBeforeTax * 0.14;
                    var priceAfterTax = priceBeforeTax + tax

                   // document.getElementById("DeliveryFee").innerHTML = "Your delivery fee is: " + Nakuru;
                    document.getElementById("grandTotal").innerHTML = "Grand total is; " + priceAfterTax;

                }

                

            }

          

        }
    
    }
    
} else if (queryString == forester.productId){

    document.getElementById("image").src = forester.image;
    document.getElementById("model").innerHTML = forester.model;
    document.getElementById("desc").innerHTML = forester.desc;
    document.getElementById("price").innerHTML = "KES. " + forester.price;
    document.getElementById("yom").innerHTML = "Year of manufacture: "  + forester.yom;

} else if(queryString == vitara.productId){

    document.getElementById("image").src = vitara.image;
    document.getElementById("model").innerHTML = vitara.model;
    document.getElementById("desc").innerHTML = vitara.desc;
    document.getElementById("price").innerHTML = "KES. " + vitara.price;
    document.getElementById("yom").innerHTML = "Year of manufacture: "  + vitara.yom;
}



