const BaseUrl="https://goweather.herokuapp.com/weather/";
// http://localhost:3000/weather/{city};
// https://github.com/public-apis/public-apis?tab=readme-ov-file#weather;
let city;
document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementById("city");
    input.addEventListener("change", (eve) => {
        city = eve.target.value;
        console.log(city);
    });

    async function search() {
        console.log(city)
        let a=`${BaseUrl}${city}`;
        console.log(a);
        let response=await fetch(`https://goweather.herokuapp.com/weather/${city}`)
        console.log(response)
        let info=await response.json()
        console.log(info)
        document.getElementById("name").innerHTML=city;
        document.getElementById("temp").innerHTML=info.temperature;
        document.getElementById("wind").innerHTML=info.wind;
        document.getElementById("desc").innerHTML=info.description;
        document.getElementById("temp1").innerHTML=info.forecast[0].temperature
        document.getElementById("wind1").innerHTML=info.forecast[0].wind;
        document.getElementById("temp2").innerHTML=info.forecast[1].temperature
        document.getElementById("wind2").innerHTML=info.forecast[1].wind;
        document.getElementById("temp3").innerHTML=info.forecast[2].temperature
        document.getElementById("wind3").innerHTML=info.forecast[2].wind;
        document.getElementById("details").style.display = "block";
        
    }

    let button = document.getElementById("btn");
    button.addEventListener("click", () => {
        search();
    });
});

let btn=document.getElementById("bt1");
if(document.getElementById("body").style.backgroundColor==""){
    btn.innerHTML="turn off dark mode"
}
else{
     btn.innerHTML="turn on dark mode"
}
btn.addEventListener("click",()=>{
    document.getElementById("body").style.animationTimingFunction="easein"
    if(document.getElementById("body").style.backgroundColor=="")
    {
        btn.innerHTML="turn off dark mode"
        document.getElementById("body").style.backgroundColor="black"
        document.getElementById("body").style.color="white"
    }
    else{
        btn.innerHTML="turn on dark mode"
        document.getElementById("body").style.backgroundColor=""
        document.getElementById("body").style.color="black"
    }
})