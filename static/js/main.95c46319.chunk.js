(this.webpackJsonpfarmdashboard=this.webpackJsonpfarmdashboard||[]).push([[0],{207:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){},211:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),o=a.n(l),i=(a(95),a(19)),s=a(12),c=a(13),u=a(14),d=a(16),m=a(15),g=a(40),h=function(e){return r.a.createElement(g.a,{options:e.options,data:e.data})},p=a(56),b=a.n(p),f=a(217),y=a(218),E=a(219),C=a(222),w=(a(207),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={weather:"",cloudCover:0,windSpeed:0,gauge:{},gaugeHumidity:{},fan:{},lineChartData:{labels:[],datasets:[{id:0,type:"line",label:"Indoor Temperature",backgroundColor:"rgba(0, 0, 0, 0)",pointBorderColor:"rgba(100,200,100, 0)",pointHoverBorderColor:"rgba(100,200,100, 1)",borderColor:"rgba(135,206,250,1)",fill:!0,borderWidth:"2",lineTension:1,data:[],showLine:!0,spanGaps:!0,showPoint:!1},{id:1,type:"line",label:"Outdoor Temperature",backgroundColor:"rgba(0, 0, 0, 0)",pointBorderColor:"rgba(135,206,250,0)",pointHoverBorderColor:"rgba(135,206,250,1)",borderColor:"rgba(100,200,100, 1)",fill:!0,borderWidth:"2",lineTension:1,data:[],showLine:!0,spanGaps:!0,showPoint:!1},{id:2,type:"line",label:"Water Temperature",backgroundColor:"rgba(0, 0, 0, 0)",pointBorderColor:"rgba(128,0,128,0)",pointHoverBorderColor:"rgba(235,06,250,1)",borderColor:"rgba(128,0,128,1)",fill:!0,borderWidth:"2",lineTension:1,data:[],showLine:!0,spanGaps:!0,showPoint:!1}]},lineChartOptions:{responsive:!0,maintainAspectRatio:!1,title:{text:"Temperature Charts",display:!0},tooltips:{enabled:!0},scales:{yAxes:[{ticks:{autoSkip:!0,maxTicksLimit:5,beginAtZero:!0,gridLines:{display:!1}}}],xAxes:[{ticks:{autoSkip:!0,maxTicksLimit:10,gridLines:{display:!1}}}]}},pieData:{labels:["clouds","clear sky"],datasets:[{data:[0,100],backgroundColor:["#D3D3D3","#00FFFF"],hoverBackgroundColor:["#A9A9A9","#0000CD"]}]}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={messageType:"propertyStatus",data:{temperature:Number}};this.ws=new WebSocket("wss://sherringiscaring.webthings.io/things/http---192.168.1.100-things-DHTSensor?jwt=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRhMTJiNWY5LWVlNTAtNGFkMi1hNzNlLTg5ODVjODRhNTU3ZiJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU5MTczNDAzMCwiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.UGVluprHnYwU1IW8HGHi5KzIdAy0tPm6BwIaCFJmcuWfP2bO7LUpYmuDZzLTKaepW8ZO5N80EiIzzTfeqB7Xsg","webthing"),this.ws.onopen=function(){var a;console.log("Connection Opened! (Inside Temp)"),e.ws.send(JSON.stringify(t)),fetch("https://sherringiscaring.webthings.io/things/weather-7122537431f4dc3d166c957717ee2b498815d683/properties",{method:"GET",headers:{Accept:"application/json",authorization:"Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhjOWVhNjA3LWE1ZWQtNDEyZS1iYmUxLWU2Yjk4OTk3NzM3NyJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU4OTc0ODIxNywiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.BvpmWFRxZsgQ25BAUcWjqyXE-ZmXOllgZN6xUJ9THewr6ckyo-MEhjgicPfknK8_KoJ1wolSrMIH6Wz1IaC8Xg"}}).then((function(e){return e.json()})).then((function(t){a=t,console.log(t),n.data.push(a.temperature),e.setState({weather:"".concat(t.description),windSpeed:t.windSpeed,cloudCover:t.cloudCover})})).catch((function(e){return console.log(e)}));var n=e.state.lineChartData.datasets[1]},this.ws.onmessage=function(t){var a=JSON.parse(t.data),n=e.state.lineChartData.datasets[0],r=Object(s.a)({},n);if(a.data.temperature){var l;fetch("https://sherringiscaring.webthings.io/things/weather-7122537431f4dc3d166c957717ee2b498815d683/properties",{method:"GET",headers:{Accept:"application/json",authorization:"Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjhjOWVhNjA3LWE1ZWQtNDEyZS1iYmUxLWU2Yjk4OTk3NzM3NyJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU4OTc0ODIxNywiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.BvpmWFRxZsgQ25BAUcWjqyXE-ZmXOllgZN6xUJ9THewr6ckyo-MEhjgicPfknK8_KoJ1wolSrMIH6Wz1IaC8Xg"}}).then((function(e){return e.json()})).then((function(t){l=t,o.data.push(l.temperature),i.data.splice(0,1,l.cloudCover),i.data.splice(1,1,100-l.cloudCover),e.setState({weather:"".concat(t.description),windSpeed:t.windSpeed,cloudCover:t.cloudCover,pieData:m})})).catch((function(e){return console.log(e)}));var o=e.state.lineChartData.datasets[1],i=e.state.pieData.datasets[0],c=Object(s.a)({},o);r.data.push(a.data.temperature);var u=Object(s.a)({},i),d=Object(s.a)(Object(s.a)(Object(s.a)({},e.state.lineChartData.datasets),{},{datasets:[r,c]},e.state.lineChartData.datasets[1]),{},{datasets:[r,c],labels:e.state.lineChartData.labels.concat((new Date).toLocaleTimeString([],{weekday:"short",hour:"2-digit",minute:"2-digit"}))}),m=Object(s.a)(Object(s.a)({},e.state.pieData.datasets),{},{datasets:[u]}),g=a.data.temperature;e.setState({lineChartData:d,gauge:g}),console.log(e.state)}if(a.data.humidity){var h=a.data.humidity;e.setState({gaugeHumidity:h})}}}},{key:"render",value:function(){return r.a.createElement(f.a,{className:"something",style:{position:"relative",zIndex:"1"}},r.a.createElement(y.a,{style:{height:"36vh",zIndex:"1",backgroundColor:"rgba(255,255,255, 0.5)"}},r.a.createElement(h,{className:"line chart",data:this.state.lineChartData,options:this.state.lineChartOptions})),r.a.createElement(E.a,{style:{marginTop:"1%"}},r.a.createElement(C.a,{style:{fontSize:"calc(50% + 2vmin)",backgroundColor:"rgba(255,255,255, 0.4)"},"data-aos":"fade-up"},r.a.createElement(C.a.Title,null,"Current Indoor Temperature"),r.a.createElement(C.a.Body,{style:{padding:"0",textAlign:"center"}},r.a.createElement(b.a,{forceRender:!0,fluidWidth:!1,minValue:10,maxValue:30,startColor:"red",endColor:"green",segments:5,value:this.state.gauge,needleColor:"purple",height:150,width:175}))),r.a.createElement(C.a,{style:{fontSize:"calc(50% + 2vmin)",backgroundColor:"rgba(255,255,255, 0.4)"},"data-aos":"fade-up"},r.a.createElement(C.a.Title,null,"Current Indoor Humidity"),r.a.createElement(C.a.Body,{style:{padding:"0",textAlign:"center"}},r.a.createElement(b.a,{forceRender:!0,fluidWidth:!1,minValue:0,maxValue:60,startColor:"red",endColor:"green",segments:3,value:this.state.gaugeHumidity,needleColor:"purple",height:150,width:175}))),r.a.createElement(C.a,{style:{fontSize:"calc(50% + 2vmin)",backgroundColor:"rgba(255,255,255, 0.4)"},"data-aos":"fade-up"},"Cloud Cover: ",this.state.cloudCover,"%",r.a.createElement(g.b,{data:this.state.pieData,style:{backgroundColor:"rgba(255,255,255, 0.4)"}})),r.a.createElement(C.a,{className:"box4",style:{position:"relative",fontSize:"calc(50% + 1vmin)",backgroundColor:"rgba(255,255,255, 0.4)",zIndex:"12"},"data-aos":"fade-up"},r.a.createElement("br",null),"weather images being changed at the moment",r.a.createElement("br",null),"wind speed: ",this.state.windSpeed," mph",r.a.createElement("br",null),"weather: ",this.state.weather)))}}]),a}(r.a.Component)),I=(a(208),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={fan:"off",buttonColor:"led-red"},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={messageType:"propertyStatus",data:{on:!0}};this.ws3=new WebSocket("wss://sherringiscaring.webthings.io/things/tplink-8006FCBECD4C4C98FFDE442CEED8F07019989CAB?jwt=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRhMTJiNWY5LWVlNTAtNGFkMi1hNzNlLTg5ODVjODRhNTU3ZiJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU5MTczNDAzMCwiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.UGVluprHnYwU1IW8HGHi5KzIdAy0tPm6BwIaCFJmcuWfP2bO7LUpYmuDZzLTKaepW8ZO5N80EiIzzTfeqB7Xsg","webthing"),this.ws3.onopen=function(){console.log("Connection Opened! (Fan)"),e.ws3.send(JSON.stringify(t))},this.ws3.onmessage=function(t){var a=JSON.parse(t.data);1==a.data.on?e.setState({fan:"on",buttonColor:"led-green"}):0==a.data.on&&e.setState({fan:"off",buttonColor:"led-red"})}}},{key:"render",value:function(){return r.a.createElement(f.a,{style:{alignText:"center"}},r.a.createElement("div",{class:this.state.buttonColor}),r.a.createElement("br",null),r.a.createElement("p",null,"Fan: ",this.state.fan))}}]),a}(n.Component)),v=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={Mister:"off",buttonColor:"led-red"},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={messageType:"propertyStatus",data:{on:!0}};this.ws=new WebSocket("wss://sherringiscaring.webthings.io/things/tplink-8006289E78CEF13619AF8FDE7F8FE2B31B28BAFA?jwt=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjRhMTJiNWY5LWVlNTAtNGFkMi1hNzNlLTg5ODVjODRhNTU3ZiJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTU5MTczNDAzMCwiaXNzIjoiaHR0cHM6Ly9zaGVycmluZ2lzY2FyaW5nLm1vemlsbGEtaW90Lm9yZyJ9.UGVluprHnYwU1IW8HGHi5KzIdAy0tPm6BwIaCFJmcuWfP2bO7LUpYmuDZzLTKaepW8ZO5N80EiIzzTfeqB7Xsg","webthing"),this.ws.onopen=function(){console.log("Connection Opened! (Mister)"),e.ws.send(JSON.stringify(t))},this.ws.onmessage=function(t){var a=JSON.parse(t.data);1==a.data.on?e.setState({Mister:"on",buttonColor:"led-green"}):0==a.data.on&&e.setState({Mister:"off",buttonColor:"led-red"})}}},{key:"render",value:function(){return r.a.createElement(f.a,{style:{alignItems:"center",alignText:"center"}},r.a.createElement("div",{class:this.state.buttonColor}),r.a.createElement("br",null),r.a.createElement("p",null,"Mister: ",this.state.Mister))}}]),a}(n.Component),O=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={WaterPump:"on",buttonColor:"led-green"},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{style:{alignItems:"center",alignText:"center"}},r.a.createElement("div",{class:this.state.buttonColor}),r.a.createElement("br",null),r.a.createElement("p",null,"WaterPump: ",this.state.WaterPump))}}]),a}(n.Component),j=(a(209),a(88)),N=function(e){var t=e.message,a=e.id,n=e.deleteNote;return r.a.createElement("div",{className:"Item"},t,r.a.createElement("button",{style:{marginLeft:"2%"},onClick:function(){return n(a)}},"x"))},T=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),c=s[0],u=s[1],d=Object(n.useState)(a.length+1),m=Object(i.a)(d,2),g=m[0],h=m[1],p=function(e,t,a,n,r){e.preventDefault();var l=t.length?t[t.length-1].id+1:0;a([].concat(Object(j.a)(t),[{id:l,message:n}])),r(""),h(g+1),console.log(g)};return r.a.createElement(r.a.Fragment,null,a.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{className:"todo",style:{width:"70%",marginLeft:"15%",marginTop:"2%",backgroundColor:"rgba(255, 255, 255, 0.6)"}},r.a.createElement(C.a.Title,null,"Farm To-Do-List"),r.a.createElement(C.a.Body,{style:{padding:"0"}},a.map((function(e){return r.a.createElement(N,{message:e.message,id:e.id,deleteNote:function(e){return function(e,t,a){a(t.filter((function(t){return t.id!=e}))),h(g-1),console.log(g)}(e,a,l)}})})),r.a.createElement("form",{style:{padding:"0"},onSubmit:function(e){return p(e,a,l,c,u)}},r.a.createElement("input",{placeholder:"or add a custom item...",onChange:function(e){return u(e.target.value)},value:c}))))):r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{className:"todo",style:{width:"70%",marginLeft:"15%",backgroundColor:"rgba(255, 255, 255, 0.6)"},"data-aos":"fade-up"},r.a.createElement(C.a.Title,null,"Farm To-Do-List"),r.a.createElement(C.a.Body,{style:{padding:"0"}},r.a.createElement("p",null,"Everything is currently taken care of!",r.a.createElement("br",null),"As parts of the farm need attention, such as water level going too high, eratic sensor values, or weekly maintenance items, the list will automatically populate"),r.a.createElement("form",{style:{padding:"0"},onSubmit:function(e){return p(e,a,l,c,u)}},r.a.createElement("input",{placeholder:"or add a custom item...",onChange:function(e){return u(e.target.value)},value:c}))))))},k=a(220),z=(a(210),a(221)),L=(a(211),function(){var e=0,t="";return window.addEventListener("scroll",(function(){!function(){var t=document.documentElement,a=document.body,n="scrollTop",r="scrollHeight";e=(t[n]||a[n])/((t[r]||a[r])-t.clientHeight)*100,console.log(e)}();document.getElementById("nav");var a=document.querySelector(".navbar-toggler");e>=80?a.classList.add("hide"):(t="auto",a.classList.remove("hide"))})),r.a.createElement(z.a,{id:"nav",fixed:"bottom",bg:"none",expand:t},r.a.createElement(z.a.Toggle,{"aria-controls":"basic-navbar-nav",style:{backgroundColor:"lightblue",borderRadius:"10%",marginBottom:"3%",marginLeft:"3%"}}," view ",r.a.createElement("br",null)," automation"),r.a.createElement(z.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(y.a,null,r.a.createElement(T,{style:{backgroundColor:"white"}})),r.a.createElement(y.a,{style:{width:"70%",marginLeft:"15%"}},r.a.createElement(k.a,null,r.a.createElement(I,null)),r.a.createElement(k.a,null,r.a.createElement(v,null)),r.a.createElement(k.a,null,r.a.createElement(O,null)))))}),W=a(86),S=a.n(W),D=(a(212),function(){var e=window.innerHeight,t=document.documentElement.scrollHeight,a=Object(n.useState)(t),l=Object(i.a)(a,2),o=(l[0],l[1]),s=Object(n.useState)(e),c=Object(i.a)(s,2),u=(c[0],c[1]),d=function(){o(document.documentElement.scrollHeight),u(window.innerHeight)};return Object(n.useEffect)((function(){return window.addEventListener("resize",d()),function(){window.removeEventListener("resize",d())}}),[]),Object(n.useEffect)((function(){S.a.init({})}),[]),r.a.createElement(r.a.Fragment,null,t>e+100?r.a.createElement(f.a,{fluid:!0,style:{height:"".concat(t),position:"absolute",zIndex:"1"},className:"app-container"},r.a.createElement(y.a,null,r.a.createElement(w,null)),r.a.createElement(L,null),r.a.createElement(T,{style:{backgroundColor:"rgba(255, 255, 255, 0.6)"},"data-aos":"fade-up"}),r.a.createElement(y.a,{style:{backgroundColor:"rgba(255, 255, 255, 0.6)",width:"70%",marginLeft:"15%"}},r.a.createElement(k.a,null,r.a.createElement(I,null)),r.a.createElement(k.a,null,r.a.createElement(v,null)),r.a.createElement(k.a,null,r.a.createElement(O,null)))):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{fluid:!0,style:{height:"100vh",position:"absolute",zIndex:"1",margin:"0"},className:"app-container"},r.a.createElement(y.a,{"data-aos":"fade-right",style:{}},r.a.createElement(w,null)),r.a.createElement(y.a,{style:{width:"80%",marginLeft:"10%",marginBottom:"0"},"data-aos":"fade-left"},r.a.createElement(T,{"data-aos":"fade-right"})),r.a.createElement(y.a,{style:{width:"54%",marginLeft:"23%",backgroundColor:"rgba(255, 255, 255, 0.6)"},"data-aos":"fade-up"},r.a.createElement(k.a,null,r.a.createElement(I,null)),r.a.createElement(k.a,null,r.a.createElement(v,null)),r.a.createElement(k.a,null,r.a.createElement(O,null))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){e.exports=a(213)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.95c46319.chunk.js.map