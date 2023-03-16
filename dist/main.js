!function(){"use strict";!function(){function e(e){return 60*parseInt(e.slice(0,2))*60+60*parseInt(e.slice(3,5))+parseInt(e.slice(6))}function t(e){let t=parseInt(e.slice(0,4)),n=parseInt(e.slice(5,7)),r=parseInt(e.slice(8));return 12===n?r:1===n?31+r:t%4==0?[31,60,91,121,152,182,213,244,274,305,336,366][n-2]+r+31:[31,59,90,120,151,181,212,243,273,304,334,365][n-2]+r+31}function n(t,n,r,o,i,c){const d=n,a=n,s=Math.min(d,a)/2-20,l=d3.select(c).append("svg").attr("width",d).attr("height",a).append("g").attr("transform",`translate(${d/2},${a/2})`);let u=e(t.currentConditions.datetime),p=e(t.currentConditions.sunrise),m=e(t.currentConditions.sunset);const y=86400;let x=function(e,t,n){return e>n?y-e+t:e<t?t-e:y-n+t}(u,p,m),f=function(e,t,n){return e>t&&e<n?n-e:0}(u,p,m),h=function(e,t,n){return e>t?e-t:e<n?y+e-t:void 0}(u,p,m);const g={elapse:h,day:f,night:x},b=d3.scaleOrdinal().range(["#000000","#ff0660","#416fec"]),S=d3.pie().value((e=>e[1])).sort(null),v=d3.arc().innerRadius(s-r).outerRadius(s),w=S(Object.entries(g));l.selectAll("path").data(w).join("path").transition().duration(2e3).attrTween("d",(function(e){let t=d3.interpolate(e.startAngle+.1,e.endAngle);return function(n){return e.endAngle=t(n),v(e)}})).style("fill",(e=>b(e.data[0]))).attr("stroke",i).style("stroke-width",o).style("opacity",1)}function r(e,n,r,o,i,c){const d=n,a=n,s=Math.min(d,a)/2-20,l=d3.select(c).append("svg").attr("width",d).attr("height",a).append("g").attr("transform",`translate(${d/2},${a/2})`);let u=t(e.days[0].datetime);parseInt(e.days[0].datetime.slice(0,4));const p={current:u,winter:function(e){return e>90?0:90-e}(u),spring:function(e){return e>182?0:e>90?182-e:92}(u),summer:function(e){return e>273?0:e>182?273-e:92}(u),fall:function(e){return e>273?365-e:91}(u)},m=d3.scaleOrdinal().range(["#000000","#99ffe6","#065535","#fff228","#f77c3f"]),y=d3.pie().value((e=>e[1])).sort(null),x=d3.arc().innerRadius(s-r).outerRadius(s),f=y(Object.entries(p));l.selectAll("path").data(f).join("path").transition().duration(2e3).attrTween("d",(function(e){let t=d3.interpolate(e.startAngle+.1,e.endAngle);return function(n){return e.endAngle=t(n),x(e)}})).style("fill",(e=>m(e.data[0]))).attr("stroke",i).style("stroke-width",o).style("opacity",1)}function o(e,t,n,r,o){const i=t,c=t,d=Math.min(i,c)/2-20,a=d3.select(o).append("svg").attr("width",i).attr("height",c).append("g").attr("transform",`translate(${i/2},${c/2})`),s=d3.scaleOrdinal().range(function(e){let t=["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"];const n=e.currentConditions.moonphase;return n<.125||1===n?t.splice(0,0,"#000000"):n>=.125&&n<.25?t.splice(1,0,"#000000"):n>=.25&&n<.375?t.splice(2,0,"#000000"):n>=.375&&n<.5?t.splice(3,0,"#000000"):n>=.5&&n<.625?t.splice(4,0,"#000000"):n>=.625&&n<.75?t.splice(5,0,"#000000"):n>=.75&&n<.875?t.splice(6,0,"#000000"):n>=.875&&n<1?t.splice(7,0,"#000000"):t.splice(0,0,"#000000"),t}(e)),l=d3.pie().value((e=>e[1])).sort(null),u=d3.arc().innerRadius(d-80).outerRadius(d),p=l(Object.entries({"🌑":8,"🌒":8,"🌓":8,"🌔":8,"🌕":8,"🌖":8,"🌗":8,"🌘":8}));a.selectAll("slice").data(p).join("path").attr("d",u).transition().delay((function(e,t){return t/8*1e3})).duration(1e3).style("fill",(e=>s(e.data[0]))).attr("stroke",r).style("stroke-width",n).style("opacity",1),a.selectAll("slices").data(p).join("text").text((function(e){return e.data[0]})).transition().duration(2e3).attr("transform",(function(e){return`translate(${u.centroid(e)})`})).style("text-anchor","middle")}function i(e,t,n,r,o,i,c){const d=t,a=t,s=Math.min(d,a)/2-20,l=d3.select(c).append("svg").attr("width",d).attr("height",a).append("g").attr("transform",`translate(${d/2},${a/2})`),u=e.days[0].temp,p=e.days[0].tempmin,m=e.days[0].tempmax;e.days[0].feelslike;const y=[u-p,m-u],x=d3.scaleOrdinal().range(["#ff0c00","#29cdff"]),f=d3.pie().value((e=>e[1])).sort(null).startAngle(-5*Math.PI/6).endAngle(5*Math.PI/6),h=d3.arc().innerRadius(s-n).outerRadius(s),g=f(Object.entries(y));l.selectAll("path").data(g).join("path").transition().duration(2e3).attrTween("d",(function(e){let t=d3.interpolate(e.startAngle+.1,e.endAngle);return function(n){return e.endAngle=t(n),h(e)}})).style("fill",(e=>x(e.data[0]))).attr("stroke",o).style("stroke-width",r).style("opacity",1)}function c(e,t,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,c=arguments.length>6?arguments[6]:void 0;const d=t,a=t,s=Math.min(d,a)/2-20,l=d3.select(c).append("svg").attr("width",d).attr("height",a).append("g").attr("transform",`translate(${d/2},${a/2})`),u=e.currentConditions.humidity,p={"💧":u,"":100-u},m=d3.scaleOrdinal().range(["#9fc5e8","#3a3a3a"]),y=d3.pie().value((e=>e[1])).sort(null).startAngle(-5*Math.PI/6).endAngle(5*Math.PI/6),x=d3.arc().innerRadius(s-n).outerRadius(s),f=y(Object.entries(p));l.selectAll("slice").data(f).join("path").transition().duration(2e3).attrTween("d",(function(e){let t=d3.interpolate(e.startAngle+.1,e.endAngle);return function(n){return e.endAngle=t(n),x(e)}})).delay(i).style("fill",(e=>m(e.data[0]))).attr("stroke",o).style("stroke-width",r).style("opacity",1),l.selectAll("slices").data(f).join("text").text((function(e){return e.data[0]})).transition().duration(2e3).delay(i).attr("transform",(function(e){return`translate(${x.centroid(e)})`})).style("text-anchor","middle")}function d(e,t,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,c=arguments.length>6?arguments[6]:void 0;const d=t,a=t,s=Math.min(d,a)/2-20,l=d3.select(c).append("svg").attr("width",d).attr("height",a).append("g").attr("transform",`translate(${d/2},${a/2})`),u=d3.scaleOrdinal().range(["#3ded97","#fff440","#e69138","#ff0800","#d200ff"]),p=d3.pie().value((e=>e[1])).sort(null).startAngle(-5*Math.PI/6).endAngle(5*Math.PI/6),m=d3.arc().innerRadius(s-n).outerRadius(s),y=p(Object.entries([3,3,2,4,2]));l.selectAll("path").data(y).join("path").transition().duration(2e3).attrTween("d",(function(e){let t=d3.interpolate(e.startAngle+.1,e.endAngle);return function(n){return e.endAngle=t(n),m(e)}})).delay(i).style("fill",(e=>u(e.data[0]))).attr("stroke",o).style("stroke-width",r).style("opacity",1)}function a(e,t,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,c=arguments.length>6?arguments[6]:void 0;const d=t,a=t,s=Math.min(d,a)/2-20,l=d3.select(c).append("svg").attr("width",d).attr("height",a).append("g").attr("transform",`translate(${d/2},${a/2})`),u=e.days[0].precipprob,p={"🌧️":u,"":100-u},m=d3.scaleOrdinal().range(["#2900ff","#3a3a3a"]),y=d3.pie().value((e=>e[1])).sort(null).startAngle(-5*Math.PI/6).endAngle(5*Math.PI/6),x=d3.arc().innerRadius(s-n).outerRadius(s),f=y(Object.entries(p));l.selectAll("slice").data(f).join("path").transition().duration(2e3).attrTween("d",(function(e){let t=d3.interpolate(e.startAngle+.1,e.endAngle);return function(n){return e.endAngle=t(n),x(e)}})).delay(i).style("fill",(e=>m(e.data[0]))).attr("stroke",o).style("stroke-width",r).style("opacity",1),l.selectAll("slices").data(f).join("text").text((function(e){return e.data[0]})).transition().duration(2e3).delay(i).attr("transform",(function(e){return`translate(${x.centroid(e)})`})).style("text-anchor","middle")}const s="4P48W2KCWFQAQ6SJ99K5H2VBM",l=Math.floor(Date.now()/1e3);function u(s){!function(e){let t=e.days[0].datetime;document.querySelector("#date").innerText=t}(s),n(s,200,10,"5px","black","#sun-path"),o(s,450,"30px","black","#moons"),r(s,600,40,"20px","black","#seasons"),function(t){let r=e(t.currentConditions.datetime),o=e(t.currentConditions.sunrise),i=e(t.currentConditions.sunset);const c=document.querySelector(".astro-modal"),d=document.querySelector(".overlay"),a=document.querySelector("#sun-path>svg"),s=document.querySelector(".close-btn"),l=document.querySelector("#svg-container"),u=document.querySelector("#upper-text"),p=document.querySelector("#lower-text");a.addEventListener("click",(function(){c.classList.remove("hidden"),d.classList.remove("hidden")})),a.addEventListener("click",(function(){n(t,600,30,"5px","white","#svg-container"),function(e){const t=document.createElement("p"),n=document.createElement("h1"),c=document.createElement("p"),d=document.createElement("h1"),a=document.createElement("img");t.innerText="Sunrise was at",n.innerText=`${e.currentConditions.sunrise}`,n.style.color="black",n.style.border="5px solid #ff0660",n.style.borderRadius="20px",n.style.background="#ff0660",n.style.boxShadow="0px 0px 20px 20px #ff0660",n.style.textShadow="1px 1px 5px black",u.append(t),u.append(n),r>i?(c.innerText="Sunset was at",a.src="images/days/moon.png"):r<o?(t.innerText="Sunrise was last at",c.innerText="Sunset was at",a.src="images/days/moon.png"):(c.innerText="Sunset is at",a.src="images/days/sun2.png"),d.innerText=`${e.currentConditions.sunset}`,d.style.color="#416fec",d.style.border="5px solid #416fec",d.style.borderRadius="20px",d.style.background="black",d.style.boxShadow="0px 0px 20px 20px #416fec",d.style.textShadow="1px 1px 10px #416fec",p.append(c),p.append(d),l.append(a)}(t)})),s.addEventListener("click",(function(){c.classList.add("hidden"),d.classList.add("hidden"),l.innerHTML="",u.innerHTML="",p.innerHTML=""}))}(s),function(e){const t=document.querySelector(".astro-modal"),n=document.querySelector(".overlay"),r=document.querySelector("#moons>svg"),i=document.querySelector(".close-btn"),c=document.querySelector("#svg-container"),d=document.querySelector("#upper-text"),a=document.querySelector("#lower-text"),s=document.querySelector(".moon_background");r.addEventListener("click",(function(){t.classList.remove("hidden"),n.classList.remove("hidden"),s.classList.remove("hidden")})),r.addEventListener("click",(function(){o(e,600,"30px","black","#svg-container"),function(e){const t=document.createElement("p"),n=document.createElement("h1"),r=document.createElement("p"),o=document.createElement("h1"),i=document.createElement("img"),s=["New","Waxing Crescent","First Quarter","Waxing Gibbous","Full","Waning Gibbous","Last Quarter","Waning Crescent"],l=function(e){const t=e.currentConditions.moonphase;let n;return n=t<.125||1===t?"New":t>=.125&&t<.25?"Waxing Crescent":t>=.25&&t<.375?"First Quarter":t>=.375&&t<.5?"Waxing Gibbous":t>=.5&&t<.625?"Full":t>=.625&&t<.75?"Waning Gibbous":t>=.75&&t<.875?"Last Quarter":t>=.875&&t<1?"Waning Crescent":"New",n}(e);t.innerText="Current Phase",n.innerText=l,r.innerText="Next Phase";const u=s.indexOf(l);switch(o.innerText=7!==u?s[u+1]:s[0],l){case"New":i.src="images/moons/new_moon.png";break;case"Waxing Crescent":case"Waning Crescent":i.src="images/moons/waxing_crescent.png";break;case"First Quarter":i.src="images/moons/first_quarter.png";break;case"Waxing Gibbous":i.src="images/moons/waxing_gibbous.png";break;case"Full":i.src="images/moons/Full_moon.png";break;case"Waning Gibbous":i.src="images/moons/waning_gibbous.png";break;case"Last Quarter":i.src="images/moons/last_quarter.png"}n.style.fontSize="60px",o.style.fontSize="60px",n.style.fontStyle="italic",n.style.border="5px solid black",n.style.borderRadius="20px",n.style.background="black",n.style.color="white",n.style.boxShadow="0px 0px 60px 20px rgba(255, 255, 255, 0.4) ",n.style.textShadow="1px 1px 10px white ",o.style.fontStyle="italic",o.style.border="10px solid white",o.style.borderRadius="20px",o.style.background="white",o.style.color="black",o.style.boxShadow="0px 0px 60px 20px rgba(255, 255, 255, 0.4) ",o.style.textShadow="1px 1px 5px black ",o.style.width="80%",i.style.width="350",i.style.height="350",i.style.zIndex="10",d.append(t),d.append(n),a.append(r),a.append(o),c.append(i)}(e)})),i.addEventListener("click",(function(){t.classList.add("hidden"),n.classList.add("hidden"),s.classList.add("hidden"),c.innerHTML=""}))}(s),function(e){const n=document.querySelector(".astro-modal"),o=document.querySelector(".overlay"),i=document.querySelector("#seasons>svg"),c=document.querySelector(".close-btn"),d=document.querySelector("#svg-container"),a=document.querySelector("#upper-text"),s=document.querySelector("#lower-text");i.addEventListener("click",(function(){n.classList.remove("hidden"),o.classList.remove("hidden")})),i.addEventListener("click",(function(){r(e,600,40,"5px","white","#svg-container"),function(e){const n=document.createElement("p"),r=document.createElement("h1"),o=document.createElement("p"),i=document.createElement("h1"),c=document.createElement("img");let l,u,p,m,y,x,f=t(e.days[0].datetime);f<=90?(l=f,u=90-f,p="Winter",m="Spring",c.src="images/seasons/winter.png"):f>90&&f<=181?(l=f-90,u=181-f,p="Spring",m="Summer",c.src="images/seasons/spring.png"):f>182&&f<=273?(l=f-182,u=273-f,p="Summer",m="Fall",c.src="images/seasons/summer.png"):(l=f-274,u=365-f,console.log(l),console.log(f),p="Fall",m="Winter",c.src="images/seasons/autumn.png"),n.innerText=`${l} day(s) into `,o.innerText=`${u} day(s) until`,r.innerText=`${p}`,i.innerText=`${m}`,"Winter"===p?(y="#99ffe6",x="#065535"):"Spring"===p?(y="#065535",x="#fff228"):"Summer"===p?(y="#fff228",x="#f77c3f"):(y="#f77c3f",x="#99ffe6"),r.style.color=y,r.style.border=`5px solid ${y}`,r.style.borderRadius="20px",r.style.background="black",r.style.boxShadow=`0px 0px 30px 10px ${y} `,r.style.padding="10px",r.style.textShadow=`1px 1px 5px ${y} `,i.style.border=`10px solid ${x}`,i.style.borderRadius="20px",i.style.background=x,i.style.color="black",i.style.boxShadow=`0px 0px 30px 10px ${x} `,i.style.padding="10px",i.style.textShadow="1px 1px 5px black ",c.style.width="350px",c.style.height="350px",a.append(n),a.append(r),s.append(o),s.append(i),d.append(c)}(e)})),c.addEventListener("click",(function(){n.classList.add("hidden"),o.classList.add("hidden"),d.innerHTML=""}))}(s),function(e){let t=e.timezone.split("/"),n=e.resolvedAddress.split(",")[0],r=t[1].split("_").join(" "),o=e.resolvedAddress.split(",")[1]+"\n"+r+"\n"+n;document.querySelector("#location").append(o)}(s),function(e){i(e,150,30,"5px","black",0,"#temp-widget");const t=e.days[0].temp,n=(e.days[0].tempmin,e.days[0].tempmax,e.days[0].feelslike,document.querySelector("#temp-widget")),r=document.createElement("div");r.innerText=`${Math.floor(t)}°F`,n.append(r)}(s),function(e){c(e,150,30,"5px","black",500,"#humid-widget");const t=e.currentConditions.humidity,n=document.querySelector("#humid-widget"),r=document.createElement("div");r.innerText=`${Math.round(t)}%`,n.append(r)}(s),function(e){d(e,150,30,"5px","black",1500,"#uv-widget");const t=e.currentConditions.uvindex,n=document.querySelector("#uv-widget"),r=document.createElement("div");let o;o=null===t?"N/A":`UV ${t}`,r.innerText=o,t<3?(r.style.color="#3ded97",r.style.textShadow="1px 1px 20px #3ded97"):t>2&&t<6?(r.style.color="#fff440",r.style.textShadow="1px 1px 20px #fff440"):t>5&&t<8?(r.style.color="#e69138",r.style.textShadow="1px 1px 20px #e69138"):t>7&&t<11?(r.style.color="#ff0800",r.style.textShadow="1px 1px 20px #ff0800"):(r.style.color="#d200ff",r.style.textShadow="1px 1px 20px #d200ff"),n.append(r)}(s),function(e){a(e,150,30,"5px","black",1e3,"#precip-widget");const t=e.days[0].precipprob,n=document.querySelector("#precip-widget"),r=document.createElement("div");r.innerText=`${Math.round(t)}%`,n.append(r)}(s),function(e){const t=e.days[0].temp,n=e.days[0].tempmin,r=e.days[0].tempmax,o=e.days[0].feelslike,c=document.querySelector(".astro-modal"),d=document.querySelector(".overlay"),a=document.querySelector("#temp-widget>svg"),s=document.querySelector(".close-btn"),l=document.querySelector("#svg-container"),u=document.querySelector("#upper-text"),p=document.querySelector("#lower-text");a.addEventListener("click",(function(){c.classList.remove("hidden"),d.classList.remove("hidden")})),a.addEventListener("click",(function(){i(e,600,80,"5px","white",0,"#svg-container"),function(e){const i=document.createElement("p"),c=document.createElement("h1"),d=document.createElement("p"),a=document.createElement("h1"),s=document.createElement("div");i.innerText="Day High is ",c.innerText=`${Math.floor(r)}°F`,c.style.color="black",c.style.border="5px solid #ff0c00",c.style.borderRadius="20px",c.style.background="#ff0c00",c.style.boxShadow="0px 0px 20px 20px #ff0c00",c.style.textShadow="1px 1px 5px black",d.innerText="Day Low is",a.innerText=`${Math.floor(n)}°F`,a.style.color="black",a.style.border="5px solid #29cdff",a.style.borderRadius="20px",a.style.background="#29cdff",a.style.boxShadow="0px 0px 20px 20px #29cdff",a.style.textShadow="1px 1px 5px black",u.append(i),u.append(c),p.append(d),p.append(a);let m=document.createElement("div"),y=document.createElement("div"),x=document.createElement("div"),f=document.createElement("div");m.innerText="Currently",y.innerText=`${Math.floor(t)}°F`,x.innerText="Feels like",f.innerText=`${Math.floor(o)}°F`,s.append(m),s.append(y),s.append(document.createElement("br")),s.append(x),s.append(f),l.append(s)}()})),s.addEventListener("click",(function(){c.classList.add("hidden"),d.classList.add("hidden"),l.innerHTML="",u.innerHTML="",p.innerHTML=""}))}(s),function(e){const t=e.currentConditions.humidity,n=e.currentConditions.dew,r=document.querySelector(".astro-modal"),o=document.querySelector(".overlay"),i=document.querySelector("#humid-widget>svg"),d=document.querySelector(".close-btn"),a=document.querySelector("#svg-container"),s=document.querySelector("#upper-text"),l=document.querySelector("#lower-text");i.addEventListener("click",(function(){r.classList.remove("hidden"),o.classList.remove("hidden")})),i.addEventListener("click",(function(){c(e,600,60,"5px","white",0,"#svg-container"),function(e){const r=document.createElement("p"),o=document.createElement("h1"),i=document.createElement("p"),c=document.createElement("h1"),d=document.createElement("img");r.innerText="Current Humidity",o.innerText=`${Math.round(t)}%`,o.style.color="#000000",o.style.border="5px solid #9fc5e8",o.style.borderRadius="20px",o.style.background="#9fc5e8",o.style.boxShadow="0px 0px 20px 20px #9fc5e8",o.style.textShadow="1px 1px 5px black",i.innerText="Current Dew Point",c.innerText=`${Math.round(n)}°F`,c.style.color="#9fc5e8",c.style.border="5px solid #9fc5e8",c.style.borderRadius="20px",c.style.background="#9fc5e8",c.style.boxShadow="0px 0px 20px 20px #9fc5e8",c.style.textShadow="1px 1px 5px black",d.src="images/weather/humidity.png",a.append(d),s.append(r),s.append(o),l.append(i),l.append(c)}()})),d.addEventListener("click",(function(){r.classList.add("hidden"),o.classList.add("hidden"),a.innerHTML="",s.innerHTML="",l.innerHTML=""}))}(s),function(e){const t=e.days[0].precipprob,n=e.days[0].preciptype,r=document.querySelector(".astro-modal"),o=document.querySelector(".overlay"),i=document.querySelector("#precip-widget>svg"),c=document.querySelector(".close-btn"),d=document.querySelector("#svg-container"),s=document.querySelector("#upper-text"),l=document.querySelector("#lower-text");i.addEventListener("click",(function(){r.classList.remove("hidden"),o.classList.remove("hidden")})),i.addEventListener("click",(function(){a(e,600,60,"5px","white",0,"#svg-container"),function(e){const r=document.createElement("p"),o=document.createElement("h1"),i=document.createElement("p"),c=document.createElement("h1"),a=document.createElement("img");if(r.innerText="Precipitation Chance",o.innerText=`${Math.round(t)}%`,o.style.color="#000000",o.style.border="5px solid #2900ff",o.style.borderRadius="20px",o.style.background="#2900ff",o.style.boxShadow="0px 0px 20px 20px #2900ff",o.style.textShadow="1px 1px 5px black",i.innerText="Precipitation Type",n){for(let e=0;e<n.length;e++)n[e]=n[e][0].toUpperCase()+n[e].slice(1);c.innerText=n.join(",")}else c.innerText="None";c.style.color="#2900ff",c.style.textShadow="1px 1px 10px #2900ff",c.style.fontSize="35px",c.style.border="5px solid #2900ff",c.style.borderRadius="20px",c.style.boxShadow="0px 0px 20px 20px #2900ff",c.style.padding="5px",a.src="images/weather/precipitation.png",d.append(a),s.append(r),s.append(o),l.append(i),l.append(c)}()})),c.addEventListener("click",(function(){r.classList.add("hidden"),o.classList.add("hidden"),d.innerHTML="",s.innerHTML="",l.innerHTML=""}))}(s),function(e){const t=e.currentConditions.uvindex,n=document.querySelector(".astro-modal"),r=document.querySelector(".overlay"),o=document.querySelector("#uv-widget>svg"),i=document.querySelector(".close-btn"),c=document.querySelector("#svg-container"),a=document.querySelector("#upper-text"),s=document.querySelector("#lower-text");o.addEventListener("click",(function(){n.classList.remove("hidden"),r.classList.remove("hidden")})),o.addEventListener("click",(function(){d(e,600,30,"20px","black",0,"#svg-container"),function(e){const n=document.createElement("p"),r=document.createElement("h1"),o=document.createElement("p"),i=document.createElement("h1"),d=document.createElement("img");n.innerText="Current UV index",r.innerText=`${t}`;let l,u=["#3ded97","#fff440","#e69138","#ff0800","#d200ff"];t<3?(l=u[0],i.innerText="Low"):t>2&&t<6?(l=u[1],i.innerText="Moderate"):t>5&&t<8?(l=u[2],i.innerText="High"):t>7&&t<11?(l=u[3],i.innerText="Very High"):(l=u[4],i.innerText="Extreme"),r.style.color="#000000",r.style.border=`5px solid ${l}`,r.style.borderRadius="20px",r.style.background=`${l}`,r.style.boxShadow=`0px 0px 20px 20px ${l}`,r.style.textShadow="1px 1px 10px black",o.innerText="Current Condition",i.style.color=`${l}`,i.style.textShadow=`1px 1px 10px ${l}`,i.style.borderRadius="20px",i.style.border=`5px solid ${l}`,i.style.boxShadow=`1px 1px 20px 20px ${l}`,i.style.padding="10px",d.src="images/weather/uv.png",c.append(d),a.append(n),a.append(r),s.append(o),s.append(i)}()})),i.addEventListener("click",(function(){n.classList.add("hidden"),r.classList.add("hidden"),c.innerHTML="",a.innerHTML="",s.innerHTML=""}))}(s)}async function p(e){try{const t=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}/${l}?key=${s}`);if(!t.ok)throw t;u(await t.json()),function e(){let t=new Date,n=t.getHours(),r=t.getMinutes(),o=t.getSeconds();n=n<10?"0"+n:n,r=r<10?"0"+r:r,o=o<10?"0"+o:o;let i=n+":"+r+":"+o;document.querySelector("#clock").innerText=i,setTimeout((function(){e()}),1e3)}(),document.querySelector("#location").append(document.createElement("br")),document.querySelector("#location").append("Current Time")}catch(e){console.error(e)}}async function m(e,t,n){try{const r=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}/${t}T${n}?key=${s}&include=current`);if(!r.ok)throw r;{const e=await r.json();u(e),function(e){let t;t="09:00:00"===e.currentConditions.datetime?"9:00 AM":"9:00 PM",document.querySelector("#location").appendChild(document.createElement("br")),document.querySelector("#location").append(t)}(e),console.log(e)}}catch(e){console.error(e)}}function y(){let e=document.querySelector("#sun-path"),t=document.querySelector("#moons"),n=document.querySelector("#seasons"),r=document.querySelector("#temp-widget"),o=document.querySelector("#humid-widget"),i=document.querySelector("#uv-widget"),c=document.querySelector("#precip-widget"),d=document.querySelector("#location");e.innerHTML="",t.innerHTML="",n.innerHTML="",d.innerHTML="",r.innerHTML="",o.innerHTML="",i.innerHTML="",c.innerHTML=""}document.addEventListener("DOMContentLoaded",(()=>{(function(){const e=document.querySelector(".intro-modal"),t=document.querySelector("#start"),n=document.querySelector(".overlay");t.addEventListener("click",(function(){e.classList.add("hidden"),n.classList.add("hidden"),document.querySelector("#startSong").play()})),t.addEventListener("click",(function(){p(document.querySelector("#zipcode").value)}))})(),function(){const e=document.querySelector(".intro-modal"),t=document.querySelector(".overlay"),n=document.querySelector("#date-button"),r=document.createElement("div");r.setAttribute("id","selectContainer");const o=document.createElement("button");o.setAttribute("id","enterInputs"),o.innerText="→";const i=document.createElement("button");function c(){r.innerHTML="",e.innerHTML="",e.classList.add("hidden"),t.classList.add("hidden")}i.setAttribute("id","closeSelect"),i.innerText="←",i.style.width="100px",n.addEventListener("click",(function(){e.innerHTML="",e.classList.remove("hidden"),t.classList.remove("hidden"),function(){const e=document.createElement("input");e.setAttribute("type","date"),e.setAttribute("id","input-date");let t=new Date;t=t.toISOString().slice(0,10),e.max=t,e.min="1970-01-01";const n=document.createElement("div");n.setAttribute("id","dayNight");const c=document.createElement("input");c.setAttribute("type","radio"),c.setAttribute("id","dayRadio"),c.value="Day",c.name="timeofDay";const d=document.createElement("label");d.setAttribute("for","dayRadio"),d.innerText="Day";const a=document.createElement("input");a.setAttribute("type","radio"),a.setAttribute("id","nightRadio"),a.name="timeofDay",a.value="Night";const s=document.createElement("label");s.setAttribute("for","nightRadio"),s.innerText="Night",n.append(d,c,s,a);const l=document.createElement("input");l.setAttribute("type","number"),l.setAttribute("id","selectZip"),l.placeholder="ZIP code",r.append(l,e,n,o,i)}(),e.append(r)})),i.addEventListener("click",c),o.addEventListener("click",(function(){let e=document.querySelector("#selectZip").value,t=document.querySelector("#input-date").value,n=(document.querySelector("#dayRadio").checked,document.querySelector("#nightRadio").checked),r=(document.querySelector("#sun-path"),document.querySelector("#moons"),document.querySelector("#seasons"),new Date);r=r.toISOString().slice(0,10),r===t?(y(),p(e)):n?(y(),m(e,t,"21:00:00")):(y(),m(e,t,"09:00:00"))})),o.addEventListener("click",c)}(),function(){const e=document.querySelector("#songplay"),t=document.querySelector("#startSong");e.addEventListener("click",(function(){t.muted?(t.muted=!1,e.innerText="♫"):(t.muted=!0,e.innerText="⏸")}))}()}))}()}();
//# sourceMappingURL=main.js.map