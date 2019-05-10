(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,n,t){e.exports=t(45)},38:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(7),c=t.n(o),i=(t(38),t(22)),l=t(23),u=t(30),d=t(24),s=t(31),f=t(9),m=t(10),p=t(26),y=t(17),h=t.n(y),g=t(27),b=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],w=function(e){return b[e]},E=function(e){return Number.isNaN(e)||0===e?"":e>0?"+":"-"},x="data/2.5/weather",v="data/2.5/forecast",k=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t="".concat("http://api.openweathermap.org","/").concat(e);return n.APPID="65f9c37a11805cae899e71f4f60f67d8",n.units="metric",Object.keys(n).reduce(function(e,t,a){return"".concat(e).concat(0===a?"?":"&").concat(t,"=").concat(n[t])},t)},_=function(e){var n=e.name,t=e.sys.country,a=e.main,r=a.humidity,o=a.pressure,c=a.temp,i=e.wind.speed,l=e.weather,u=l&&l[0]||{};return{city:n,country:t,weather:{description:u.description,icon:u.icon,main:u.main},temperature:Math.round(c),wind:i,humidity:r,pressure:o}},I=function(e){for(var n,t=e.list,a=[],r=null,o=0;o<t.length;o++){var c=t[o],i=(n=c.dt,new Date(1e3*n)).getDay();r!==i?(a.push({weekDayName:w(i),items:[c]}),r=i):a[a.length-1].items.push(c)}return a.map(function(e){var n=e.weekDayName,t=e.items,a=t[Math.floor(t.length/2)],r=a.weather,o=a.main.temp,c=r[0].icon;return{weekDayName:n,temperature:Math.round(o),icon:c}})},C=function(){var e=Object(g.a)(h.a.mark(function e(n){var t,a,r,o,c;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(n);case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,console.log({currentData:a}),r=a.id,e.next=10,N(r);case 10:return o=e.sent,e.next=13,o.json();case 13:return c=e.sent,e.abrupt("return",{currentInfo:_(a),weeklyInfo:I(c)});case 15:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),j=function(e){var n=k(x,{q:e});return fetch(n)},N=function(e){var n=k(v,{id:e});return fetch(n)},T={getCityWeather:C},O=t(4),z={FETCH_BY_CITY:"fetch_by_city",REQUEST_STARTED:"request_started",REQUEST_SUCCEED:"request_succeed",REQUEST_FAILED:"request_failed"};var D=function(e){return function(n,t,a){var r=a.api;n({type:z.REQUEST_STARTED}),r.getCityWeather(e).then(function(e){e.searchText;var t,a=e.currentInfo,r=e.weeklyInfo;n((t={currentInfo:a,weeklyInfo:r},{type:z.REQUEST_SUCCEED,payload:t}))}).catch(function(e){n(function(e){return{type:z.REQUEST_FAILED,payload:e}}(e))})}},S={searchText:null,currentInfo:null,weeklyInfo:null,loading:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1?arguments[1]:void 0;switch(console.log({action:n}),n.type){case z.REQUEST_STARTED:return Object(O.a)({},e,{loading:!0});case z.REQUEST_FAILED:return Object(O.a)({},e,{loading:!1,error:n.payload});case z.REQUEST_SUCCEED:return Object(O.a)({},e,{loading:!1},n.payload);default:return e}},R=function(){return Object(m.c)(B,Object(m.a)(p.a.withExtraArgument({api:T})))},U=t(2),P=U.a.div.withConfig({displayName:"header__Container",componentId:"i3zkpc-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]),Q=U.a.p.withConfig({displayName:"header__H1",componentId:"i3zkpc-1"})(["font-size:1.5em;margin:0;"]),A=U.a.p.withConfig({displayName:"header__H2",componentId:"i3zkpc-2"})(["font-size:0.7em;"]),W=function(e){var n=e.city,t=e.country,a="".concat(n).concat(t?"("+t+")":"");return r.a.createElement(P,null,r.a.createElement(Q,null,a),r.a.createElement(A,null,(new Date).toDateString()))};W.defaultProps={city:"New York",country:null};var q=W,F=t(3),H=t(13),L=t(0),M=function(e){var n=e.color,t=e.size,a=e.Icon,o=Object(H.a)(e,["color","size","Icon"]);return r.a.createElement(L.b.Provider,{value:Object(O.a)({color:n,size:t},o)},r.a.createElement(a,null))};M.defaultProps={color:"white",size:"2em"};var Y=M,J={main:"rgba(240, 255, 0, 1)",background:"rgba(240, 255, 0, ".concat(.05,")")},K={main:"rgba(236, 236, 236, 1)",background:"rgba(189, 195, 199, ".concat(.35,")")},$={main:"rgba(25, 181, 254, 1)",background:"rgba(25, 181, 254, ".concat(.05,")")},G={"01d":{icon:F.e,color:J},"01n":{icon:F.e,color:J},"02d":{icon:F.c,color:J},"02n":{icon:F.c,color:J},"03d":{icon:F.b,color:K},"03n":{icon:F.b,color:K},"04d":{icon:F.f,color:$},"04n":{icon:F.f,color:$},"09d":{icon:F.i,color:$},"09n":{icon:F.i,color:$},"10d":{icon:F.d,color:$},"10n":{icon:F.h,color:$},"11d":{icon:F.l,color:$},"11n":{icon:F.l,color:$},"13d":{icon:F.j,color:$},"13n":{icon:F.j,color:$},"50d":{icon:F.m,color:$},"50n":{icon:F.m,color:$}},V=function(e){return G[e]},X=function(e){var n=e.icon,t=Object(H.a)(e,["icon"]),a=function(e){var n=V(e);return n?n.icon:null}(n);return r.a.createElement(Y,Object(O.a)({Icon:a},t))};X.defaultProps={color:"white",size:"2em"};var Z=X,ee=U.a.div.withConfig({displayName:"body__Container",componentId:"sc-1pml6gs-0"})(["display:flex;width:80%;justify-content:center;align-items:center;flex-wrap:wrap;"]),ne=U.a.p.withConfig({displayName:"body__Temperature",componentId:"sc-1pml6gs-1"})(["flex:1;font-size:6em;font-weight:200;margin:5px;text-align:right;"]),te=U.a.div.withConfig({displayName:"body__InfoContainer",componentId:"sc-1pml6gs-2"})(["flex:1;"]),ae=U.a.div.withConfig({displayName:"body__Line",componentId:"sc-1pml6gs-3"})(["display:flex;flex-direction:row;align-items:center;"]),re=function(e){var n=e.text,t=e.icon;return r.a.createElement(ae,null,r.a.createElement(Y,{Icon:t}),r.a.createElement("p",{style:{margin:"5px"}},n))},oe=function(e){var n=e.temperature,t=e.icon,a=e.humidity,o=e.pressure,c=e.wind,i=E(n);return console.log({icon:t}),r.a.createElement(ee,null,r.a.createElement(ne,null,"".concat(i).concat(n,"\xb0")),r.a.createElement("div",{style:{flex:0,display:"flex",justifyContent:"center"}},r.a.createElement(Z,{size:"8em",icon:t})),r.a.createElement(te,null,r.a.createElement(re,{text:"".concat(o," mm Hg"),icon:F.a}),r.a.createElement(re,{text:"".concat(a,"% humidity"),icon:F.g}),r.a.createElement(re,{text:"".concat(c,"m/s NW"),icon:F.k})))};oe.defaultProps={};var ce=oe,ie=U.a.p.withConfig({displayName:"footer__WeatherText",componentId:"sc-1hmap2g-0"})(["background-color:",";padding:5px;border-radius:10px;font-size:0.8em;"],"rgba(100,100,100,0.8)"),le=function(e){var n=e.text;return r.a.createElement(ie,null,n)};le.defaultProps={text:"Cloudy, Storm"};var ue=le,de=U.a.div.withConfig({displayName:"infoPanel__Container",componentId:"sc-1aocc1o-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;padding:25px;background-image:url('","');background-repeat:no-repeat;background-size:cover;background-position:center center;"],"https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area_web-f17b1f60e6.jpg"),se=function(e){var n=e.currentInfo,t=n.city,a=n.country,o=n.temperature,c=n.humidity,i=n.pressure,l=n.wind,u=n.weather,d=u.icon,s=u.description;return r.a.createElement(de,null,r.a.createElement(q,{city:t,country:a}),r.a.createElement(ce,{temperature:o,icon:d,humidity:c,pressure:i,wind:l}),r.a.createElement(ue,{description:s}))},fe=t(14),me=U.a.div.withConfig({displayName:"day__Container",componentId:"sc-16n56e2-0"})(["flex:1;display:flex;flex-direction:column;align-items:center;justify-content:space-between;margin-left:1px;padding:10px;border-top:3px solid ",";background-color:",";"],function(e){return e.colors.main},function(e){return e.colors.background}),pe=U.a.p.withConfig({displayName:"day__Title",componentId:"sc-16n56e2-1"})(["text-align:center;font-size:0.8em;"]),ye=U.a.p.withConfig({displayName:"day__Temperature",componentId:"sc-16n56e2-2"})(["text-align:center;font-size:0.8em;"]),he=function(e){var n=e.weekDayName,t=e.temperature,a=e.icon,o=E(t),c=function(e){var n=V(e);return n&&n.color||{main:"blue",blurred:"rgba(0, 0, 50, 0.8)"}}(a);return r.a.createElement(me,{colors:c},r.a.createElement(pe,null,n),r.a.createElement(Z,{icon:a,style:{borderRadius:"1em",backgroundColor:"rgba(100,100,100,0.6)"}}),r.a.createElement(ye,null,"".concat(o).concat(t,"\xb0")))};he.defaultProps={temperature:null};var ge=he;function be(){var e=Object(fe.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return be=function(){return e},e}var we=U.a.div(be()),Ee=function(e){var n=e.weeklyInfo;return r.a.createElement(we,null,n.map(function(e){return r.a.createElement(ge,Object.assign({key:e.weekDayName},e))}))};function xe(){var e=Object(fe.a)(["\n  position: relative;\n  align-self: center;\n  margin: 5px;\n  animation: rotate 2s linear infinite;\n  width: 25px;\n  height: 25px;\n\n  & .path {\n    stroke: #5652bf;\n    stroke-linecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -35;\n    }\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -124;\n    }\n  }\n"]);return xe=function(){return e},e}var ve=U.a.svg(xe()),ke=function(){return r.a.createElement(ve,{viewBox:"0 0 50 50"},r.a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"}))},_e=U.a.div.withConfig({displayName:"searchBar__Container",componentId:"sc-26uteq-0"})(["width:40%;min-width:300px;min-height:40px;display:flex;border-radius:20px;border:1px solid white;"]),Ie=U.a.input.withConfig({displayName:"searchBar__Input",componentId:"sc-26uteq-1"})(["flex:1;font-size:1em;padding-left:0.5em;background:transparent;border:none;&:focus{outline-width:0;}"]),Ce=Object(f.b)(function(e){return{loading:e.loading}},{fetchByCity:D})(function(e){var n=e.fetchByCity,t=e.loading,a=r.a.useCallback(function(e){if("Enter"===e.key){var t=e.target.value;t&&n(t)}},[n]);return r.a.createElement(_e,null,r.a.createElement(Ie,{placeholder:"Search city...",onKeyDown:a}),t&&r.a.createElement(ke,null))}),je=U.a.div.withConfig({displayName:"weatherInfo__Container",componentId:"sc-1ny5ofh-0"})(["min-height:100vh;position:fixed;left:0;right:0;display:flex;flex-direction:column;justify-content:space-around;align-items:center;z-index:3;padding:50px 0px 50px 0px;"]),Ne=U.a.div.withConfig({displayName:"weatherInfo__Panel",componentId:"sc-1ny5ofh-1"})(["height:90%;width:90%;"]),Te=U.a.div.withConfig({displayName:"weatherInfo__BackgroundBlurredImage",componentId:"sc-1ny5ofh-2"})(["position:fixed;top:-",";right:-",";bottom:-",";left:-",";z-index:1;display:flex;min-height:100vh;background-image:url('","');background-repeat:no-repeat;background-size:cover;background-position:center center;-webkit-filter:blur(",");-moz-filter:blur(",");-o-filter:blur(",");-ms-filter:blur(",");filter:blur(",");"],"20px","20px","20px","20px","https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area_web-f17b1f60e6.jpg","20px","20px","20px","20px","20px"),Oe={fetchByCity:D},ze=Object(f.b)(function(e){return Object(O.a)({},e)},Oe)(function(e){var n=e.currentInfo,t=e.weeklyInfo,a=e.fetchByCity;return r.a.useEffect(function(){a("Barcelona")},[a]),r.a.createElement("div",null,r.a.createElement(Te,null),r.a.createElement(je,null,r.a.createElement(Ce,null),n&&r.a.createElement(Ne,null,r.a.createElement(se,{currentInfo:n}),r.a.createElement(Ee,{weeklyInfo:t}))))}),De=R(),Se=function(e){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(f.a,{store:De},r.a.createElement(ze,null))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.2de111f3.chunk.js.map