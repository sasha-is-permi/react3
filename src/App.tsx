
import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux' // connect- позволяет соединить App со store. работает как hoc 
import {fetchWeather} from './actions'
import {storeState} from './reducers'

interface AppProps{
    weather: [];
    fetchWeather(): any;
}

      
// Описание типов
type Obj0 = { num: number, currentTemp: number,feels_like: number, description:string,humidity:number,wind_speed:number,
        wind_deg:string,clouds:number,img:string}
      
type ObjOther = { num:number,date: Date,day:number,dayOfWeak:string,month:string,maxT:number,minT:number,img:string} 
        
        
     
 

function dayOfWeak(day:number):string{
    let dayOfWeak:string=""
    switch (day) {
        case 0:
        dayOfWeak="Вс"
        break;
      case 1:
        dayOfWeak="Пн"
        break;
      case 2:
        dayOfWeak="Вт"
        break;   
      case 3:
        dayOfWeak="Ср"
        break;  
      case 4:
        dayOfWeak="Чт"
        break;
      case 5:
        dayOfWeak="Пт"
        break;   
      case 6:
        dayOfWeak="Сб"
        break;       
    }
    return dayOfWeak;
   }     
  
   function month(monthNumber:number):string{
    let monthString:string=""
    switch (monthNumber) {
      case 0:
        monthString="Янв"
        break;
      case 1:
        monthString="Фев"
        break;
      case 2:
        monthString="Мар"
        break;   
      case 3:
        monthString="Апр"
        break;  
      case 4:
        monthString="Май"
        break;
      case 5:
        monthString="Июн"
        break;   
      case 6:
        monthString="Июл"
        break;  
      case 7:
        monthString="Авг"
        break;
      case 8:
        monthString="Сен"
        break;
      case 9:
        monthString="Окт"
        break;   
      case 10:
        monthString="Ноя"
        break;  
      case 11:
        monthString="Дек"
        break;     
    }
    return monthString;
   }    
  
   function wind_deg(wind_deg_number:number):string{
    let wind_deg_string:string=""
     if (wind_deg_number>=0 && wind_deg_number<=30){wind_deg_string="северный"}
     else if (wind_deg_number>30 && wind_deg_number<=60){wind_deg_string="С-В"}
     else if (wind_deg_number>60 && wind_deg_number<=120){wind_deg_string="восточный"}
     else if (wind_deg_number>120 && wind_deg_number<=150){wind_deg_string="Ю-В"}
     else if (wind_deg_number>150 && wind_deg_number<=210){wind_deg_string="южный"}
     else if (wind_deg_number>210 && wind_deg_number<=240){wind_deg_string="Ю/З"}
     else if (wind_deg_number>240 && wind_deg_number<=300){wind_deg_string="западный"}
     else if (wind_deg_number>300 && wind_deg_number<=330){wind_deg_string="С/З"}
     else if (wind_deg_number>330 && wind_deg_number<=360){wind_deg_string="северный"}
  
    
    return wind_deg_string;
   } 



function weatherTodayFunction(weather:any):Obj0{



      let weatherToday:Obj0 = {num:0, currentTemp:0, feels_like:0, description:"", humidity:0, wind_speed:0, wind_deg:"", clouds:0, img:""}
  
       weatherToday.currentTemp = Math.round(+weather.current.temp)
       weatherToday.feels_like = Math.round(+weather.current.feels_like)
       weatherToday.description = weather.current.weather[0].description
       weatherToday.humidity = weather.current.humidity
       weatherToday.wind_speed = weather.current.wind_speed
       weatherToday.wind_deg = wind_deg(+weather.current.wind_deg)
       weatherToday.clouds = weather.current.clouds
       weatherToday.img ="https://openweathermap.org/img/wn/"+ weather.current.weather[0].icon + ".png"    
      
          
      return weatherToday
}



function weatherFunction(weather:any){
   
    let date1:Date= new Date()

    let obj1:ObjOther = {num:1,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
    let obj2:ObjOther = {num:2,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
    let obj3:ObjOther = {num:3,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
    let obj4:ObjOther = {num:4,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
    let obj5:ObjOther = {num:5,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
    let obj6:ObjOther = {num:6,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
    let obj7:ObjOther = {num:7,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
    let obj8:ObjOther = {num:8,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
   
  
    let  weatherOther= [obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8]    
 

      for(let i:number=0; i<8;i++){
        weatherOther[i].num = i+1
        weatherOther[i].date =    new Date(+weather.daily[i].dt *1000 );
        weatherOther[i].day =      +weatherOther[i].date.getDate() ;
        weatherOther[i].dayOfWeak = dayOfWeak(+weatherOther[i].date.getDay()) ;
        weatherOther[i].month = month(+weatherOther[i].date.getMonth()) ;
        weatherOther[i].maxT = Math.round(+weather.daily[i].temp.max)
        weatherOther[i].minT = Math.round(+weather.daily[i].temp.min)         
        weatherOther[i].img ="https://openweathermap.org/img/wn/"+ weather.daily[i].weather[0].icon + ".png" 

    }
        
    return weatherOther
}




  

// Создаем компонент-класс
class App extends Component<AppProps>{

    componentDidMount() {
      this.props.fetchWeather()  
      
    } 
    
   render(){
      
      
    let weatherToday:Obj0 = {num:0, currentTemp:0, feels_like:0, description:"", humidity:0, wind_speed:0, wind_deg:"", clouds:0, img:""}   
    if (this.props.weather.length!==0) { weatherToday = weatherTodayFunction(this.props.weather);}
    
    let date1:Date= new Date()
    
    let obj1:ObjOther = {num:1,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
    let obj2:ObjOther = {num:2,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
    let obj3:ObjOther = {num:3,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
    let obj4:ObjOther = {num:4,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
    let obj5:ObjOther = {num:5,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
    let obj6:ObjOther = {num:6,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
    let obj7:ObjOther = {num:7,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
    let obj8:ObjOther = {num:8,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
   
  
    let  weather= [obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8]
     if(this.props.weather.length!==0) {weather = weatherFunction(this.props.weather);}

      return(
<React.Fragment>
    <section className="section section-weather">
    <div className="container container-weather mt-5">

          <h2> Погода в Перми </h2>


          <div className="row">
          <div className="col-2 img-weather">
              <img src={weatherToday.img}  className="img-fluid d-none d-sm-block" alt=""/>
          </div>
          <div className="col-2">
               <p className="text-real-weather"></p>
          </div>
          <div className="col text-data">
              <p>Сегодня</p>
              <p >&nbsp;&nbsp;{weather[0].day}&nbsp;{weather[0].month}</p>
              <img  className="img1" src={weather[0].img} alt=""/>

          </div>
          <div className="col text-data">
              <p> &nbsp;&nbsp;&nbsp; {weather[1].dayOfWeak}</p>
              <p>{weather[1].day}&nbsp;{weather[1].month}</p>
              <img src={weather[1].img} alt=""/>

          </div>


          <div className="col text-data">
              <p>&nbsp;&nbsp;&nbsp;{weather[2].dayOfWeak}</p>
              <p>{weather[2].day}&nbsp;{weather[2].month}</p>
              <img src={weather[2].img} alt=""/>

          </div>
          <div className="col text-data">
              <p>&nbsp;&nbsp;&nbsp;{weather[3].dayOfWeak}</p>
              <p>{weather[3].day}&nbsp;{weather[3].month}</p>
              <img src={weather[3].img} alt=""/>

          </div>
          <div className="col text-data">
              <p>&nbsp;&nbsp;&nbsp;{weather[4].dayOfWeak}</p>
              <p>{weather[4].day}&nbsp;{weather[4].month}</p>
              <img src={weather[4].img} alt=""/>

          </div>
          <div className="col d-none d-sm-block text-data">
              <p>&nbsp;&nbsp;&nbsp;{weather[5].dayOfWeak}</p>
              <p>{weather[5].day}&nbsp;{weather[5].month}</p>
              <img src={weather[5].img} alt=""/>

          </div>
          <div className="col d-none d-sm-block text-data">
              <p>&nbsp;&nbsp;&nbsp;{weather[6].dayOfWeak}</p>
              <p>{weather[6].day}&nbsp;{weather[6].month}</p>
              <img src={weather[6].img} alt=""/>

          </div>
          <div className="col d-none d-sm-block text-data">
              <p>&nbsp;&nbsp;&nbsp;{weather[7].dayOfWeak}</p>
              <p>{weather[7].day}&nbsp;{weather[7].month}</p>
              <img src={weather[7].img} alt=""/>

          </div>
      </div>
      <div className="row">
          <div className="col-4 info-weather">
              <p className="text-degree">&nbsp;&nbsp;{weatherToday.currentTemp}&deg;C</p>
              <p className="info-cloud">{weatherToday.description}</p>
              <p className="info-wind">Ветер: {weatherToday.wind_speed} м/с  {weatherToday.wind_deg} Влажность: {weatherToday.humidity}% 
               Облачность: {weatherToday.clouds}% Ощущается на: {weatherToday.feels_like} &deg;C   
              </p>
              
          </div>
          <div className="col-8">
                  <div className="row"  >
                      <div className="col text-temperature">
                          <p>{weather[0].maxT}&deg;</p>
                      </div>
                      <div className="col text-temperature">
                          <p>{weather[1].maxT}&deg;</p>
                      </div>
                      <div className="col text-temperature">
                          <p>{weather[2].maxT}&deg;</p>
                      </div>
                      <div className="col text-temperature">
                          <p>{weather[3].maxT}&deg;</p>
                      </div>
                      <div className="col text-temperature">
                          <p>{weather[4].maxT}&deg;</p>
                      </div>
                      <div className="col d-none d-sm-block text-temperature">
                          <p>{weather[5].maxT}&deg;</p>
                      </div>
                      <div className="col d-none d-sm-block text-temperature">
                          <p>{weather[6].maxT}&deg;</p>
                      </div>
                      <div className="col d-none d-sm-block text-temperature">
                          <p>{weather[7].maxT}&deg;</p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-8 col-sm-5 line-temperature">
                          <hr />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col text-temperature">
                          <p>{weather[0].minT}&deg;</p>
                      </div>
                      <div className="col text-temperature">
                          <p>{weather[1].minT}&deg;</p>
                      </div>
                      <div className="col text-temperature">
                          <p>{weather[2].minT}&deg;</p>
                      </div>
                      <div className="col text-temperature">
                          <p>{weather[3].minT}&deg;</p>
                      </div>
                      <div className="col text-temperature">
                          <p>{weather[4].minT}&deg;</p>
                      </div>
                      <div className="col d-none d-sm-block text-temperature">
                          <p>{weather[5].minT}&deg;</p>
                      </div>
                      <div className="col d-none d-sm-block text-temperature">
                          <p>{weather[6].minT}&deg;</p>
                      </div>
                      <div className="col d-none d-sm-block text-temperature">
                          <p>{weather[7].minT}&deg;</p>
                      </div>
                  </div>
          </div>        
        </div>  




        </div>               
</section>
</React.Fragment> 
      )    
    }
}


 

// Данные из state станут обычными параметрами для компонента (props)
function mapStateToProps(state:storeState):{weather:[]}{
  return{
    weather:state.weather
    
  }
}

// После вызова функции туда кладем компонент App
export default connect(mapStateToProps,{fetchWeather})(App);


