const apiKey = "e2062d25286c4bc8ba2161804261905";

const city =
localStorage.getItem(
    "userLocation"
) || "Kakinada";

/* GET WEATHER DATA */

async function getWeather() {

    const url =
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        /* TEMPERATURE */

        const temp =
        document.getElementById("temp");

        if(temp){

            temp.innerHTML =
            `${data.current.temp_c}°C`;

        }

        /* HUMIDITY */

        const humidity =
        document.getElementById("humidity");

        if(humidity){

            humidity.innerHTML =
            `${data.current.humidity}%`;

        }

        /* WIND */

        const wind =
        document.getElementById("wind");

        if(wind){

            wind.innerHTML =
            `${data.current.wind_kph} km/h`;

        }

        /* PRESSURE */

        const pressure =
        document.getElementById("pressure");

        if(pressure){

            pressure.innerHTML =
            `${data.current.pressure_mb} mb`;

        }

    }

    catch(error){

        console.log(
            "Weather API Error"
        );

    }

}

/* ALERT BUTTON */

function showAlert(){

    alert(
`⚠ MARINE WARNING

High sea waves detected.

Avoid deep sea fishing today.

Stay near coastal zones.`
    );

}
/* SAVE LOCATION */

function saveLocation(){

    const location =
    document.getElementById(
        "locationSelect"
    ).value;

    localStorage.setItem(
        "userLocation",
        location
    );

    document.getElementById(
        "locationPopup"
    ).style.display = "none";

}

/* START */

getWeather();
