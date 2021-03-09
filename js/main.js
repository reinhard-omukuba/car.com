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

//image one
document.getElementById("car").src = demio.image;
document.getElementById("price").innerHTML = "Price: " + demio.price;
document.getElementById("desc").innerHTML = demio.desc;

//image two
document.getElementById("car2").src = forester.image;
document.getElementById("price2").innerHTML = "Price: " + forester.price;
document.getElementById("desc2").innerHTML = forester.desc;

//image three
document.getElementById("car3").src = vitara.image;
document.getElementById("price3").innerHTML = "Price: " + vitara.price;
document.getElementById("desc3").innerHTML = vitara.desc;





//onclick
document.getElementById("carOne").onclick = function(){

    window.location.href ="viewmore.html" + "?" + demio.productId;
}

document.getElementById("carTwo").onclick = function(){

    window.location.href ="viewmore.html" + "?" + forester.productId;
}

document.getElementById("carThree").onclick = function(){

    window.location.href ="viewmore.html" + "?" + vitara.productId;
}