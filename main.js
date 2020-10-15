// GET Request

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Locate City Name
        console.log(apiResult.name);
        //Locate Weather Description
        console.log(apiResult.weather[0].description);

        //Print the city name at the end of the header text
        var header = document.getElementById("heading");

        function addLocation() {
          var newHeading = document.createElement("h2");
          var newHeadingNode = document.createTextNode(apiResult.name);

          newHeading.appendChild(newHeadingNode);
          header.appendChild(newHeading);
        }

        addLocation();

        //Print the weather description at the end of the main section text
        var mainSection = document.getElementById("main-section");

        function addWxDescription() {
          var newPara = document.createElement("p");
          var newParaNode = document.createTextNode(apiResult.weather[0].description);

          newPara.appendChild(newParaNode);
          mainSection.appendChild(newPara);
        }

        addWxDescription();
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=94111,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
