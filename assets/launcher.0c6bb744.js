import{O as m,J as p,Q as y,R as g}from"./fs.be20afa7.js";function w(e,n,o=!0,s=!0){const t=document.createElement("script"),l=document.getElementsByTagName("script")[0];t.async=o,t.defer=s,t.onload=function(){setTimeout(n,0)},t.src=e,l.parentNode.insertBefore(t,l)}function f(){window.Module={noInitialRun:!0,arguments:["/home/web_user/retroarch/userdata/content/downloads/"],preRun:[],postRun:[function(){console.log("pppsssssssssst rrrrrrrrrrrrrun")}],onRuntimeInitialized:function(){},print:function(e){console.log(e)},printErr:function(e){console.log(e)},canvas:document.getElementById("canvas"),totalDependencies:0,monitorRunDependencies:function(e){this.totalDependencies=Math.max(this.totalDependencies,e)}}}let r=!1;function E(){m();const{game:e,platform:n,core:o}=p.save.selectedGame;!e||!n||!o||(f(),window.Module.arguments=navigator.userAgent.indexOf("Chrome")>0?["-v",`/home/web_user/retroarch/userdata/content/downloads/${e}`]:["-v","--menu"],window.Module.onRuntimeInitialized=()=>{document.getElementById("play").textContent="Loading game ...",y(n,e,s=>{document.getElementById("play").textContent="Loading retroarch files ...",g(s,()=>{document.getElementById("play").style.display="none",r=!0,window.playGame()})})},w(`cores/${o}_libretro.js`,()=>{console.log("core loaded")}))}const h={9:"tab",13:"enter",16:"shift",18:"alt",27:"Escape",33:"rePag",34:"avPag",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12"};window.addEventListener("keydown",function(e){Object.values(h).includes(e.key)&&e.preventDefault()});let i;location.search&&(window.addEventListener("gamepadconnected",function(e){console.log("launcher: controller connected"),i||(i=setInterval(I,100))}),E());const v=document.getElementById("launcher");window.toggleFullScreen=()=>{const e=document.getElementById("bar"),n=getComputedStyle(e).display;document.fullscreenElement?(document.exitFullscreen(),n==="none"&&(document.getElementById("bar").style.display="block")):(v.requestFullscreen(),n!=="none"&&(document.getElementById("bar").style.display="none"))};window.exitToApp=()=>{a("Escape"),setTimeout(()=>{a("Escape"),setTimeout(parent.window.exitGame,600),clearInterval(i)},100),window.onbeforeunload=null};window.playGame=function(){!r||(window.onbeforeunload=function(){return"Dude, are you sure you want to leave?"},window.Module.callMain(window.Module.arguments),window.Module.resumeMainLoop(),setTimeout(()=>{window.Module.canvas.style.width="auto",window.Module.canvas.style.height="85%",document.getElementById("bar").style.display="block"},500),document.getElementById("play").style.display="none")};function b(){const e=document.getElementById("bar");getComputedStyle(e).display==="none"?document.getElementById("bar").style.display="block":document.getElementById("bar").style.display="none"}function a(e){document.dispatchEvent(new KeyboardEvent("keydown",{code:e})),setTimeout(()=>{document.dispatchEvent(new KeyboardEvent("keyup",{code:e})),console.log("key press",e)},33)}window.keyPress=a;const F=[[6,9,0,"F1"],[4,9,0,b],[6,8,0,window.toggleFullScreen],[4,8,0,window.exitToApp],[7,8,0,"F2"],[7,9,0,"F4"]];function I(){const e=navigator.getGamepads?navigator.getGamepads():[];for(let n=0;n<1;n++){const o=e[n];if(o){const s=[];for(let t=0;t<o.buttons.length;t++)o.buttons[t].pressed&&s.push(t);s.length&&F.forEach(t=>{const[l,c,u,d]=t;u+600<o.timestamp&&s.includes(l)&&s.includes(c)&&(t[2]=o.timestamp,typeof d=="string"?a(d):d())})}}}