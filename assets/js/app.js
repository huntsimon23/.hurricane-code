var NYTimesURL = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=AMQMxuYu9k5pwYEEK3tFSbdG6s99PQkO"
var reliefWebURL = "https://api.reliefweb.int/v1/countries"
var onOff = 1
var crisisCountries = []

// <--------TO-DO-------->

// $("#onOffSwitch").on('click', function(){
//     switch (onOff){
//         case 0:
//             console.log("i am off")
//             $("#onOffSwitch").attr('src', './assets/images/on.png')
//             $('link[rel=stylesheet]').attr('href','./assets/css/darkmode.css');
//             onOff++
//             console.log("i turned on")

//         break;
//         case 1:
//         console.log("i am on")
//             $("#onOffSwitch").attr('src', './assets/images/off.png')
//             $('link[rel=stylesheet]').attr('href','./assets/css/style.css');
//             onOff--
//         console.log("i turned off")
//         break;
//     }
//     console.log(onOff)
// })

// <------------------TRENDING-CODE------------------>


$.ajax({
    url: NYTimesURL,
    method: "GET"
}).then(function(response){
    var articleData = response.results
    var windowHeight = $(window).height()
    var footerHeight = $("#donate").height()
    var trendingHeight = windowHeight - footerHeight


    $("#trending").css('height', trendingHeight)

    for(i = 0; i < 10; i++){
        // console.log(articleData[i])

        var appArtCard = $("<div>").attr('class', 'card my-3 mx-auto').attr('style', 'width: 25rem').attr('id', 'appArtCard' + i)
        var appArtBody = $("<div>").attr('class', 'card-body').attr('id', 'appArtBody' + i)
        var appCardPic = $("<img>").attr('src', articleData[i].multimedia[4].url).attr('class', 'card-img-top').attr('id', 'appCardPic' + i)
        var appArtTitle = $("<h5>").attr('class', 'card-title mt-2').text(articleData[i].title)

        // console.log(articleData[i])

        $("#trending").append(appArtCard)
        $("#appArtCard" + i).append(appArtBody)
        $("#appArtBody" + i).append(appCardPic)
        $("#appArtBody" + i).append($("<hr>"))
        $("#appArtBody" + i).append(appArtTitle)


    }

})

// <------------------MAPS-CODE------------------>

$(function(){

    var mapHeight = $("#mapArea").height()
    var mapWidth = $("#mapArea").width()


    $("#map").css('height', mapHeight)
    $("#map").css('width', mapWidth)

    GetMap()
})

function GetMap()
{
    var map = new Microsoft.Maps.Map('#map', {
        credentials: 'Atu6_COX5E94wLFqO9FiQbCtWY8GSJthzKLWIq4JKuMz53WWLWrmMVyjYJeeoagN',
        center: new Microsoft.Maps.Location(51.50632, -0.12714),
        mapTypeId: Microsoft.Maps.MapTypeId.roads,
        zoom: 1
    });
    

}

$.ajax({
    url: reliefWebURL,
    method: "GET"
}).then(function(response){
    var countryData = response.data
    var crisisCountries = []

    for(i = 0; i < 11; i++){
        crisisCountries.push(countryData[i].fields.name)
        console.log(crisisCountries)
    }

})



