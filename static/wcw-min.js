const wcID=e=>document.getElementById(e),wcU=encodeURIComponent(window.location.href),newRequest=function(t=!0){fetch("https://api.websitecarbon.com/b?url="+wcU).then(function(e){if(e.ok)return e.json();throw Error(e)}).then(function(e){t&&renderResult(e),e.t=(new Date).getTime(),localStorage.setItem("wcb_"+wcU,JSON.stringify(e))}).catch(function(e){wcID("wcb_g").innerHTML="Aucun résultat",console.log(e),localStorage.removeItem("wcb_"+wcU)})},renderResult=function(e){wcID("wcb_g").innerHTML=e.c+"g of CO<sub>2</sub>/view",wcID("wcb_2").insertAdjacentHTML("beforeEnd","Plus propre que "+e.p+"% des pages testées")},wcB=wcID("wcb");if("fetch"in window){wcB.insertAdjacentHTML("beforeEnd",'<div id="wcb_p"><span id="wcb_g">Calcul des émissions de CO<sub>2</sub>&hellip;</span><a id="wcb_a" target="_blank" rel="noopener" href="https://websitecarbon.com">Website Carbon</a></div><span id="wcb_2"></span>');let e=localStorage.getItem("wcb_"+wcU);const h=(new Date).getTime();if(e){const i=JSON.parse(e);renderResult(i),864e5<h-i.t&&newRequest(!1)}else newRequest()}