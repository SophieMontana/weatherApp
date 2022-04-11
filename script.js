
let weather = { 
    "apiKey" : "6fbc26aefebe3a00860e1b11c9b2ced1",
    search: function () {
        this.fetchZip(document.querySelector(".search-bar").value);
        },
        
    fetchZip: function(zip) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?zip="+ zip +"&appid=" + this.apiKey + "&units=imperial"
        )
        .then((response) => {
            if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    
    // Display weather from API Objects
    displayWeather: function(data) {
        const {name} = data;
        const{description, icon} = data.weather[0];
        const{temp, feels_like, temp_min, temp_max} = data.main;
        const {sunrise, sunset} = data.sys;
        console.log(name, description, icon, temp, feels_like, temp_min, temp_max, sunrise, sunset);


        let button = document.querySelector(".button")
        let inputValue = document.querySelector(".search-bar")
        let location = document.querySelector(".location").innerText = "Weather in " + name; 
        let condition = document.querySelector(".cond").innerText =  "Currently: \n" + description;
        let iconW =  document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        // current temp - C --- convert to f 
        let cel =  document.querySelector(".c").innerText = temp + "°C";
        let feel = document.querySelector(".feels").innerText= feels_like;
        let low =  document.querySelector(".l").innerText = "Low: " +  temp_min + " °F";
        let hight = document.querySelector(".h").innerText = "High: " + temp_max + " °F";
        let sun = document.querySelector(".sunrise").innerText = sunrise;
        let set = document.querySelector(".sunset").innerText = sunset;
    }
        search function () {
            this.fetchZip(document.querySelector(".search-bar").value);
            },

        button.onclick = function (event){
            if (document.querySelector(".search-bar").value ==="") {
                weather.zip("28001");
            }
            fetch('https://api.openweathermap.org/data/2.5/weather?zip='+ inputValue.value +"&appid=" + this.apiKey + '&units=imperial')
            .then(response => response.json())
            .then(data => console.log(data));

        search-bar.addEventListener('keyup'),function(event) {
                if (event.key == "Enter") {
                    weather.zip();
                }
                fetch('https://api.openweathermap.org/data/2.5/weather?zip='+ inputValue.value +"&appid=" + this.apiKey + '&units=imperial')
                .then(response => response.json())
                .then(data => console.log(data))
            }
            

        })
        .catch(err => alert("Incorrect Zip Code!"))
    },
        

    };


