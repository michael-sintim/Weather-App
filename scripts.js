        // Get the dropdown trigger and menu elements
        // Function to show the dropdown
        // Function to hide the dropdown
        // Add staggered delay to list items
        // Reset transition delays
        // Function to toggle the dropdown
        // Toggle dropdown when clicking the trigger

     // Close dropdown when clicking outside
        // Close dropdown when pressing Escape key

        // Handle item clicks
        // Remove active class from all items in this section
        // Add active class to clicked item            
        // Update the header text
        // Check if we have any imperial units selected
        // Close dropdown after selection

    document.addEventListener('DOMContentLoaded' ,()=> {
        
    const DropdownTrigger = document.querySelector("[data-dropdown='custom-dropdown']")
    const dropdown = document.querySelector("[data-ul='Dropdown-ul']")
    const list_items = document.querySelectorAll("[data-ul='Dropdown-ul'] li")

    // show drop down 
    const Showdropdown = () =>{
        dropdown.classList.remove('hidden');
    }

    // hide dropdown 
    const HideDropdown = () => {
        dropdown.classList.add('hidden');
    }

    list_items.forEach((item,index) => {
        item.style.transitionDelay = `${index *0.05}s`
    });


    const reset_delay = function (){list_items.forEach((item) =>{
    item.style.transitionDelay = `${0}s`
    }
    )
    }


    const toogle_dropdown = () => {
        if (dropdown.classList.contains('hidden')){
            Showdropdown()
        }else {
            HideDropdown()
            reset_delay()
        }
    }


    DropdownTrigger.addEventListener('click',toogle_dropdown);


    const outside_close_with_keyboard = (e) => {
        if (e.key==="Escape" && !dropdown.classList.contains('hidden')){
            HideDropdown();
        }
    }


    document.addEventListener('keydown',outside_close_with_keyboard)


    const click_outside_to_close = (e) => {
            if (!DropdownTrigger.contains(e.target)){
                HideDropdown()
            }
    }

    document.addEventListener('click',click_outside_to_close)

    const CLOSEdROPdOWNaFTERSELECTION = (e) => {
            // Remove active class from all items
        list_items.forEach(item => item.classList.remove('active'));

            // Add active class to clicked item
        e.target.classList.add('active');

        HideDropdown();
        reset_delay();


    }

    list_items.forEach(item =>{
        item.addEventListener('click',CLOSEdROPdOWNaFTERSELECTION)
    })

    const date = new Date().toLocaleDateString('en-US',{
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

    document.querySelector('[data-date="date1"]').textContent = date


    const Dropdown2= document.querySelector('[data-hourly="menu"]')
    const d2trigger = document.querySelector("[data-hourly='dropdown']") // div

    d2trigger.addEventListener('click', () => {
        if(Dropdown2.classList.contains('hidden')){
            Dropdown2.classList.remove('hidden')
        }else{
            Dropdown2.classList.add('hidden')
        }
    }
    )
//click outside to close

            function d2toggler(e){
                if (!d2trigger.contains(e.target)){
                    Dropdown2.classList.add('hidden')
                }
            }

        document.addEventListener('click',d2toggler)


// close with escape

document.addEventListener('keydown',(e) => {
    if(e.key==="Escape" && !Dropdown2.classList.contains('hidden')){
        Dropdown2.classList.add('hidden')
        
    }
}
)


    //geocoding api 


    async function GeocodingData(cityName){
        try{
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json`)
        const data = await response.json();
        if (!data.results || data.results.length===0){
            alert('City not found')
            return null
        }
        
        return { 
            long:data.results[0].longitude,
            lat:data.results[0].latitude,
            city:data.results[0].name,
            country:data.results[0].country,
            
        }
    }

    catch (error){
        console.log(`Geocoding error: ${error}`)
        throw error
        }
        
    }   

    // default location 7




    //weather codes

    const weatherCodes = {

        0: 'assets/images/icon-sunny.webp',    //clear sky
        1: 'assets/images/icon-sunny.webp',   //Mainly clear
        2: 'assets/images/icon-partly-cloudy.webp', // partly cloudy
        3: 'assets/images/icon-overcast.webp' , //overcast
        45: 'assets/images/icon-fog.webp', // fog
        48: 'assets/images/icon-fog.webp', // fog
        53:'assets/images/icon-drizzle.webp', // drizzle 
        51:'assets/images/icon-drizzle.webp', // drizzle 
        55:'assets/images/icon-drizzle.webp', // drizzle 
        61: 'assets/images/icon-rain.webp', //rain
        63: 'assets/images/icon-rain.webp', //rain
        65: 'assets/images/icon-rain.webp', //rain
        66: 'assets/images/icon-rain.webp', //rain
        67: 'assets/images/icon-rain.webp', //rain
        71: 'assets/images/icon-snow.webp', // snow
        73: 'assets/images/icon-snow.webp', // snow
        75: 'assets/images/icon-snow.webp', // snow
        77: 'assets/images/icon-snow.webp', // snow
        80: 'assets/images/icon-rain.webp',
        81: 'assets/images/icon-rain.webp',
        82: 'assets/images/icon-rain.webp',
        85: 'assets/images/icon-snow.webp',
        86: 'assets/images/icon-snow.webp',
        95: 'assets/images/icon-storm.webp',
        96: 'assets/images/icon-storm.webp',
        99: 'assets/images/icon-storm.webp',



    }


    //weather api 
    async function FetchWeatherData(lat,long) {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,relative_humidity_2m,rain,wind_speed_180m,precipitation,temperature_80m,apparent_temperature,weather_code&current=temperature_2m,relative_humidity_2m,rain,precipitation,apparent_temperature,wind_speed_10m,weather_code`)
        
            const data = await response.json() //convert message to json
        console.log(data)
        

        const currentTemp = Math.round(data.current.temperature_2m)+'°'
        document.querySelector('[data-currentWeather="weather"]').textContent = currentTemp

        document.querySelector("[data-card='weather-card1']").textContent =  `${Math.round(data.current.apparent_temperature)}°`
        document.querySelector("[data-card='weather-card2']").textContent =  `${Math.round(data.current.relative_humidity_2m)}%`
        document.querySelector("[data-card='weather-card3']").textContent =  `${Math.round(data.current.wind_speed_10m)} `
        document.querySelector("[data-card='weather-card4']").textContent =  `${Math.round(data.current.precipitation)} mm`


        document.querySelector('[data-maxTemp1="max"]').textContent = `${Math.round(data.daily.temperature_2m_max[0])}`
        document.querySelector('[data-minTemp1="min"]').textContent = `${Math.round(data.daily.temperature_2m_min[0])}`

        //
        for(let i=0;i <7;i++){
            
            const WeatherCode = data.daily.weather_code[i]
            const img = document.querySelector('[data-bgimg="img"]')
            img.src = weatherCodes[WeatherCode]
        }
        // HOURr

        const dailyCards = document.querySelectorAll('[data-allCards="cards"] > div')
        

        for(let i=0; i<7;i++){
            
            const DayDate = data.daily.time[i]
            const cards = dailyCards[i]

            const WeatherCode = data.daily.weather_code[i]
            const MaxTemp=  Math.round(data.daily.temperature_2m_max[i])
            const MinTemp = Math.round(data.daily.temperature_2m_min[i])
        
            const icon_path = weatherCodes[WeatherCode]
            console.log(icon_path)
            const DDate = new Date(DayDate)
            let a = {weekday:'short'}
            const dateConversion = new Intl.DateTimeFormat('en-US',a).format(DDate)
            const img = cards.querySelector('img');
            img.src =  icon_path;
            
                    
                    document.querySelector(`[data-allCards="card${i}"]`).textContent = dateConversion; // for all h3 elements
                    document.querySelector(`[data-maxTemp${i}="max"]`).textContent = MaxTemp + '°';//max
                    document.querySelector(`[data-minTemp${i}="min"]`).textContent = MinTemp + '°';//min

        }


        // get day 
        const currentDay = new Date().getDay()
        const currentHour = new Date().getHours()
        for (let i=0;i<7;i++){

            const WEATHERCODE =  data.daily.weather_code[i]
            const high_temp =  data.hourly.temperature_2m[i]
            const data_time  = data.hourly.time[i]  
        }
        

        const HOURLY_CARDS = document.querySelectorAll('[data-ALLCARDS="CARDS"]')
        const currentHr = new Date().getHours() 
        for(let i=0;i<8;i++){

            const time_hrly = currentHr + i
            const time = data.hourly.time[time_hrly]

            const x = new Date(time).toLocaleTimeString('en-US',{
                hour:'numeric',
                hour12:true,
            
            })    
            

            const hr_temp = data.hourly.temperature_2m[time_hrly]
            const WeatherCodes = data.hourly.weather_code[time_hrly]
            const iteratedHuourlycards =  HOURLY_CARDS[i]
            const imge = iteratedHuourlycards.querySelector('img')
            const icon = weatherCodes[WeatherCodes]
            imge.src = icon

            document.querySelector(`[data-hrtime${i}="h0"]`).textContent = x
            document.querySelector(`[data-hr${i}="h0"]`).textContent = Math.round(hr_temp) + '°'


        }

        return data;
        
    }


    const ww = new Date().toLocaleString('en-US',{
        weekday:'long'
    })
    document.querySelector('[data-date="date"]').textContent = ww
    console.log(ww)

    let dateee = new Date()
    let options = {weekday: 'long', month: 'long',
        day: 'numeric',
        year: 'numeric',} // other parameeters day: 'numeric'
    const date_bg = new Intl.DateTimeFormat('en-GB',options).format(dateee)


    const searchForm = document.querySelector('form');

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const cityName = document.querySelector('[data-form="form"]').value;
        const cityname_capitalize =  cityName[0].toUpperCase() + cityName.slice(1).toLowerCase()
        const location = await GeocodingData(cityName)
        
        if (!location) return
        document.querySelector('[data-country="countryDate"]').textContent = `${cityname_capitalize}, ${location.country}`

        
        await FetchWeatherData(
            location.lat,location.long
        )

    })

    async function getDefaultLocation() {
        if (!navigator.geolocation){
            const location = await GeocodingData('Accra')
            document.querySelector('[data-country="countryDate"]').textContent = `Accra,  Ghana`;
            await FetchWeatherData(location.lat,location.long);
            return;
        }
        
    navigator.geolocation.getCurrentPosition(
        async   (position) => {
            const lat = position.coords.latitude
            const long = position.coords.longitude

            try {
                const response =    await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json` 
                )
                const data = await response.json()
                const city = data.address.city 
                            || data.address.town 
                            || data.address.village 
                            || data.address.county;
                    const country = data.address.country;
                    document.querySelector('[data-country="countryDate"]').textContent = `${city}, ${country}`;
                    await FetchWeatherData(lat, long);

            }catch(error){
                console.log('Geolocation denied:',error.message);
                const location = await GeocodingData('Accra')
                document.querySelector('[data-country="countryDate"]').textContent = `Accra, Ghana`;
                await FetchWeatherData(location.lat, location.long);
            }

        },
        async (error) => {
                console.log('Geolocation denied:', error.message);
                const location = await GeocodingData('London');
                document.querySelector('[data-country="countryDate"]').textContent = `London, United Kingdom`;
                await FetchWeatherData(location.lat, location.long);
            }

    )
    }


    getDefaultLocation()
    })