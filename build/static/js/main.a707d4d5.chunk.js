(this.webpackJsonpreact3=this.webpackJsonpreact3||[]).push([[0],{31:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var c,s=a(1),n=a.n(s),r=a(6),d=a.n(r),i=a(19),m=a(20),l=a(26),j=a(25),h=(a(31),a(7)),o=a(10),x=a.n(o),b=a(22),O=a(23),p=a.n(O);!function(e){e[e.weather=0]="weather"}(c||(c={}));var u=a(0);function y(e){var t="";switch(e){case 0:t="\u0412\u0441";break;case 1:t="\u041f\u043d";break;case 2:t="\u0412\u0442";break;case 3:t="\u0421\u0440";break;case 4:t="\u0427\u0442";break;case 5:t="\u041f\u0442";break;case 6:t="\u0421\u0431"}return t}function g(e){var t="";switch(e){case 0:t="\u042f\u043d\u0432";break;case 1:t="\u0424\u0435\u0432";break;case 2:t="\u041c\u0430\u0440";break;case 3:t="\u0410\u043f\u0440";break;case 4:t="\u041c\u0430\u0439";break;case 5:t="\u0418\u044e\u043d";break;case 6:t="\u0418\u044e\u043b";break;case 7:t="\u0410\u0432\u0433";break;case 8:t="\u0421\u0435\u043d";break;case 9:t="\u041e\u043a\u0442";break;case 10:t="\u041d\u043e\u044f";break;case 11:t="\u0414\u0435\u043a"}return t}var f=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchWeather()}},{key:"render",value:function(){var e={num:0,currentTemp:0,feels_like:0,description:"",humidity:0,wind_speed:0,wind_deg:"",clouds:0,img:""};0!==this.props.weather.length&&(e=function(e){var t={num:0,currentTemp:0,feels_like:0,description:"",humidity:0,wind_speed:0,wind_deg:"",clouds:0,img:""};return t.currentTemp=Math.round(+e.current.temp),t.feels_like=Math.round(+e.current.feels_like),t.description=e.current.weather[0].description,t.humidity=e.current.humidity,t.wind_speed=e.current.wind_speed,t.wind_deg=function(e){var t="";return e>=0&&e<=30?t="\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439":e>30&&e<=60?t="\u0421-\u0412":e>60&&e<=120?t="\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439":e>120&&e<=150?t="\u042e-\u0412":e>150&&e<=210?t="\u044e\u0436\u043d\u044b\u0439":e>210&&e<=240?t="\u042e/\u0417":e>240&&e<=300?t="\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439":e>300&&e<=330?t="\u0421/\u0417":e>330&&e<=360&&(t="\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439"),t}(+e.current.wind_deg),t.clouds=e.current.clouds,t.img="https://openweathermap.org/img/wn/"+e.current.weather[0].icon+".png",t}(this.props.weather));var t=new Date,a=[{num:1,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""},{num:2,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""},{num:3,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""},{num:4,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""},{num:5,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""},{num:6,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""},{num:7,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""},{num:8,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}];return 0!==this.props.weather.length&&(a=function(e){for(var t=new Date,a=[{num:1,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""},{num:2,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""},{num:3,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""},{num:4,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""},{num:5,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""},{num:6,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""},{num:7,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""},{num:8,date:t,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}],c=0;c<8;c++)a[c].num=c+1,a[c].date=new Date(1e3*+e.daily[c].dt),a[c].day=+a[c].date.getDate(),a[c].dayOfWeak=y(+a[c].date.getDay()),a[c].month=g(+a[c].date.getMonth()),a[c].maxT=Math.round(+e.daily[c].temp.max),a[c].minT=Math.round(+e.daily[c].temp.min),a[c].img="https://openweathermap.org/img/wn/"+e.daily[c].weather[0].icon+".png";return a}(this.props.weather)),Object(u.jsx)(n.a.Fragment,{children:Object(u.jsx)("section",{className:"section section-weather",children:Object(u.jsxs)("div",{className:"container container-weather mt-5",children:[Object(u.jsx)("h2",{children:" \u041f\u043e\u0433\u043e\u0434\u0430 \u0432 \u041f\u0435\u0440\u043c\u0438 "}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-2 img-weather",children:Object(u.jsx)("img",{src:e.img,className:"img-fluid d-none d-sm-block",alt:""})}),Object(u.jsx)("div",{className:"col-2",children:Object(u.jsx)("p",{className:"text-real-weather"})}),Object(u.jsxs)("div",{className:"col text-data",children:[Object(u.jsx)("p",{children:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"}),Object(u.jsxs)("p",{children:["\xa0\xa0",a[0].day,"\xa0",a[0].month]}),Object(u.jsx)("img",{className:"img1",src:a[0].img,alt:""})]}),Object(u.jsxs)("div",{className:"col text-data",children:[Object(u.jsxs)("p",{children:[" \xa0\xa0\xa0 ",a[1].dayOfWeak]}),Object(u.jsxs)("p",{children:[a[1].day,"\xa0",a[1].month]}),Object(u.jsx)("img",{src:a[1].img,alt:""})]}),Object(u.jsxs)("div",{className:"col text-data",children:[Object(u.jsxs)("p",{children:["\xa0\xa0\xa0",a[2].dayOfWeak]}),Object(u.jsxs)("p",{children:[a[2].day,"\xa0",a[2].month]}),Object(u.jsx)("img",{src:a[2].img,alt:""})]}),Object(u.jsxs)("div",{className:"col text-data",children:[Object(u.jsxs)("p",{children:["\xa0\xa0\xa0",a[3].dayOfWeak]}),Object(u.jsxs)("p",{children:[a[3].day,"\xa0",a[3].month]}),Object(u.jsx)("img",{src:a[3].img,alt:""})]}),Object(u.jsxs)("div",{className:"col text-data",children:[Object(u.jsxs)("p",{children:["\xa0\xa0\xa0",a[4].dayOfWeak]}),Object(u.jsxs)("p",{children:[a[4].day,"\xa0",a[4].month]}),Object(u.jsx)("img",{src:a[4].img,alt:""})]}),Object(u.jsxs)("div",{className:"col d-none d-sm-block text-data",children:[Object(u.jsxs)("p",{children:["\xa0\xa0\xa0",a[5].dayOfWeak]}),Object(u.jsxs)("p",{children:[a[5].day,"\xa0",a[5].month]}),Object(u.jsx)("img",{src:a[5].img,alt:""})]}),Object(u.jsxs)("div",{className:"col d-none d-sm-block text-data",children:[Object(u.jsxs)("p",{children:["\xa0\xa0\xa0",a[6].dayOfWeak]}),Object(u.jsxs)("p",{children:[a[6].day,"\xa0",a[6].month]}),Object(u.jsx)("img",{src:a[6].img,alt:""})]}),Object(u.jsxs)("div",{className:"col d-none d-sm-block text-data",children:[Object(u.jsxs)("p",{children:["\xa0\xa0\xa0",a[7].dayOfWeak]}),Object(u.jsxs)("p",{children:[a[7].day,"\xa0",a[7].month]}),Object(u.jsx)("img",{src:a[7].img,alt:""})]})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-4 info-weather",children:[Object(u.jsxs)("p",{className:"text-degree",children:["\xa0\xa0",e.currentTemp,"\xb0C"]}),Object(u.jsx)("p",{className:"info-cloud",children:e.description}),Object(u.jsxs)("p",{className:"info-wind",children:["\u0412\u0435\u0442\u0435\u0440: ",e.wind_speed," \u043c/\u0441  ",e.wind_deg," \u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",e.humidity,"% \u041e\u0431\u043b\u0430\u0447\u043d\u043e\u0441\u0442\u044c: ",e.clouds,"% \u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043d\u0430: ",e.feels_like," \xb0C"]})]}),Object(u.jsxs)("div",{className:"col-8",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col text-temperature",children:Object(u.jsxs)("p",{children:[a[0].maxT,"\xb0"]})}),Object(u.jsx)("div",{className:"col text-temperature",children:Object(u.jsxs)("p",{children:[a[1].maxT,"\xb0"]})}),Object(u.jsx)("div",{className:"col text-temperature",children:Object(u.jsxs)("p",{children:[a[2].maxT,"\xb0"]})}),Object(u.jsx)("div",{className:"col text-temperature",children:Object(u.jsxs)("p",{children:[a[3].maxT,"\xb0"]})}),Object(u.jsx)("div",{className:"col text-temperature",children:Object(u.jsxs)("p",{children:[a[4].maxT,"\xb0"]})}),Object(u.jsx)("div",{className:"col d-none d-sm-block text-temperature",children:Object(u.jsxs)("p",{children:[a[5].maxT,"\xb0"]})}),Object(u.jsx)("div",{className:"col d-none d-sm-block text-temperature",children:Object(u.jsxs)("p",{children:[a[6].maxT,"\xb0"]})}),Object(u.jsx)("div",{className:"col d-none d-sm-block text-temperature",children:Object(u.jsxs)("p",{children:[a[7].maxT,"\xb0"]})})]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-md-8 col-sm-5 line-temperature",children:Object(u.jsx)("hr",{})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col text-temperature",children:Object(u.jsxs)("p",{children:[a[0].minT,"\xb0"]})}),Object(u.jsx)("div",{className:"col text-temperature",children:Object(u.jsxs)("p",{children:[a[1].minT,"\xb0"]})}),Object(u.jsx)("div",{className:"col text-temperature",children:Object(u.jsxs)("p",{children:[a[2].minT,"\xb0"]})}),Object(u.jsx)("div",{className:"col text-temperature",children:Object(u.jsxs)("p",{children:[a[3].minT,"\xb0"]})}),Object(u.jsx)("div",{className:"col text-temperature",children:Object(u.jsxs)("p",{children:[a[4].minT,"\xb0"]})}),Object(u.jsx)("div",{className:"col d-none d-sm-block text-temperature",children:Object(u.jsxs)("p",{children:[a[5].minT,"\xb0"]})}),Object(u.jsx)("div",{className:"col d-none d-sm-block text-temperature",children:Object(u.jsxs)("p",{children:[a[6].minT,"\xb0"]})}),Object(u.jsx)("div",{className:"col d-none d-sm-block text-temperature",children:Object(u.jsxs)("p",{children:[a[7].minT,"\xb0"]})})]})]})]})]})})})}}]),a}(s.Component);var k=Object(h.b)((function(e){return{weather:e.weather}}),{fetchWeather:function(){return function(){var e=Object(b.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=58.0&lon=56.14&units=metric&lang=ru&appid=9b8bdb2ae53f944ff3f79cb14af0ad03&cnt=7");case 2:a=e.sent,t({type:c.weather,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(f),v=a(3),T=a(24),w=Object(v.b)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===c.weather?t.payload:e}}),N=Object(v.c)(w,Object(v.a)(T.a)),W=Object(u.jsxs)(h.a,{store:N,children:[" ",Object(u.jsx)(k,{})]});d.a.render(W,document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.a707d4d5.chunk.js.map