import axios from 'axios';

let api_key = 'xxxx';
export default {

getWeatherDataAxios : async(city) =>{
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
let responseData = await axios.get(url , {
});
return responseData;
},

getWeatherDataFetch : async(city) =>{
    let responseData = null;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
     await fetch(url).then(response => response.json())
                .then(response => {
                    console.log(response);
                    responseData = response;
                });
    return responseData;
},
getWeatherData: () =>{

}

};
