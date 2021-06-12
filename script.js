$ ("#search").on("click",function(){
    var city=$("#city").val()
console.log(city)
  displayweather(city) 
  displaysearches(city)
})
function displayweather(city) {
        var urlAPI= `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=da7a3dbf28e16dc2bafb4c6c4640d3b1`
$.ajax({
    url:urlAPI,
    method:"GET"
}).then(function (response) {
    console.log (response)
    var citydata= response[0]
    var weatherAPI=`https://api.openweathermap.org/data/2.5/onecall?lat=${citydata.lat}&lon=${citydata.lon}&units=imperial&exclude=minutely,hourly&appid=da7a3dbf28e16dc2bafb4c6c4640d3b1`

    $.ajax ({
        url:weatherAPI,
        method:"GET"
        
    }).then(function (weather) {
        $("#todaysweather").empty()
        var citynameelm=$("<h1>")
        citynameelm.text(citydata.name)
        $("#todaysweather").append(citynameelm)
     console.log (weather.current.temp)
     console.log (weather) 
     var tempELM= $("<p>") 
     tempELM.text("temperture: " + weather.current.temp)
     console.log(tempELM)
     $("#todaysweather").append(tempELM)

     var windELM= $("<p>") 
     windELM.text("wind: " + weather.current.wind_speed)
     console.log(windELM)
     $("#todaysweather").append(windELM)

     var humidityELM= $("<p>") 
     humidityELM.text("humidity: " + weather.current.humidity)
     console.log(humidityELM)
     $("#todaysweather").append(humidityELM)

     var uviELM= $("<p>") 
     uviELM.text("uvi: " + weather.current.uvi)
     console.log(uviELM)
     $("#todaysweather").append(uviELM)

    createcards(weather)

    })
})
function createcards(weather) {
    console.log(weather.daily)
    $("#weathercards").empty()
    for (let i = 0; i < 5; i++) {
        var card=$("<div class=card>")
        var cardbody=$("<div class=card-body>")
        var tempELM= $("<p>") 
     tempELM.text("temperture: " + weather.daily[i].temp.day)

     var windELM= $("<p>") 
     windELM.text("wind: " + weather.daily[i].wind_speed)
     console.log(windELM)

     var humidityELM= $("<p>") 
     humidityELM.text("humidity: " + weather.daily[i].humidity)
     console.log(humidityELM)

     var uviELM= $("<p>") 
     uviELM.text("uvi: " + weather.daily[i].uvi)
     console.log(uviELM)
cardbody.append(tempELM)
cardbody.append(windELM)
cardbody.append(humidityELM)
cardbody.append(uviELM)

        card.append(cardbody)
    
        $("#weathercards").append(card)
        
    }
}


}
function displaysearches (city) {
  $("#searches").empty()
   var searches=JSON.parse(localStorage.getItem("searchesstorage"))
   var searchesarray=searches || []
   searchesarray.push(city)
   for (let i = 0; i < searchesarray.length; i++) {
       var citybtn=$("<button>")
    citybtn.text(searchesarray[i])  
    $("#searches").append(citybtn) 
    localStorage.setItem("searchesstorage",JSON.stringify(searchesarray))
   }
}
var searches=JSON.parse(localStorage.getItem("searchesstorage"))
   var searchesarray=searches || []
 for (let i = 0; i < searchesarray.length; i++) {
       var citybtn=$("<button>")
    citybtn.text(searchesarray[i])  
    $("#searches").append(citybtn) 
    localStorage.setItem("searchesstorage",JSON.stringify(searchesarray))
   }
