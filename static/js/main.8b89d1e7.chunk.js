(this.webpackJsonpphotohack=this.webpackJsonpphotohack||[]).push([[0],{14:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),l=(a(14),a(8)),i=a(1),s=a(6),u=function(e){return r.a.createElement("form",{action:"",className:"searchForm",onSubmit:e.getPhotos},r.a.createElement("label",{htmlFor:"search",className:"sr-only"},"Search"),r.a.createElement("div",null,r.a.createElement("input",{onChange:e.handleUserInput,type:"text",id:"search",placeholder:"'Mountains'"}),r.a.createElement("button",{type:"submit","aria-label":"Search"},r.a.createElement("i",{className:"fas fa-search","aria-hidden":"true"}))))},m=function(e){return r.a.createElement("div",{className:"galleryContainer"},r.a.createElement("p",null,"Here is today's creative inspiration:"),r.a.createElement("ul",{className:"gallery"},e.images.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"imageContainer"},r.a.createElement("img",{src:e.src.large,alt:"Photo by ".concat(e.photographer," from Pexels")})),r.a.createElement("p",null,"@",e.photographer)))}))))},h=function(e){return r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 2020 ",r.a.createElement("a",{href:"https://www.robinnong.com/"},"Robin Nong"),". Photos provided by ",r.a.createElement("a",{href:"https://www.pexels.com"},"Pexels.")," Photo of the day by ",r.a.createElement("a",{href:e.link},e.photographer),"."))},p=a(7),d=a.n(p),f=(a(18),Object(s.a)("563492ad6f917000010000011f5e758f86d140e99237550104aae485")),g=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)([]),s=Object(i.a)(c,2),p=s[0],g=s[1],E=Object(n.useState)(""),b=Object(i.a)(E,2),w=b[0],y=b[1],v=Object(n.useState)([]),j=Object(i.a)(v,2),O=j[0],k=j[1],S=Object(n.useState)(0),N=Object(i.a)(S,2),P=N[0],C=N[1],x=Object(n.useState)(!1),I=Object(i.a)(x,2),M=I[0],_=I[1],B=Object(n.useState)(!1),F=Object(i.a)(B,2),W=F[0],z=F[1],A=Object(n.useState)(""),J=Object(i.a)(A,2),U=J[0],q=J[1],D=Object(n.useState)({photog:"Elina Sazonova",url:"https://www.pexels.com/@elina-sazonova"}),G=Object(i.a)(D,2),H=G[0],R=G[1];Object(n.useEffect)((function(){f.photos.curated({per_page:6}).then((function(e){var t=Math.floor(6*Math.random()),a=e.photos[t];R({photog:a.photographer,url:a.photographer_url}),document.documentElement.style.setProperty("--background-image-full","url(".concat(a.src.landscape,")"))})),setTimeout((function(){return o(!0)}),3e3)}),[]),Object(n.useEffect)((function(){P===p.length-1&&(z(!0),_(!1),C(0))}),[P]);return r.a.createElement("div",{className:"App"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"Photo Inspo")),r.a.createElement("main",null,r.a.createElement("div",{className:"fadeIn"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"Want to create some art but can't decide if you want to paint a landscape or practice drawing portraits? Get inspired with powerful reference images, and narrow down your favourites."),r.a.createElement("p",null,"Search ideas: a subject, colour, emotion or multiple words."),r.a.createElement(u,{getPhotos:function(e){return function(e){if(e.preventDefault(),""!==w){var t=w;f.photos.search({query:t,per_page:15}).then((function(e){0===e.photos.length?q("Sorry, we couldn't find any images based on your search \ud83d\ude2d Check your spelling for try a new search term."):(g(e.photos),_(!0),k([]),q(""),y(""))})).catch((function(e){q("Sorry, a problem occurred. Please try again later.")}))}}(e)},handleUserInput:function(e){return function(e){return y(e.target.value)}(e)}}),r.a.createElement("p",{className:"errorMessage"},U))),M?r.a.createElement("div",{className:"votingContainer"},r.a.createElement("img",{src:p[P].src.large,alt:""}),r.a.createElement("button",{onClick:function(){return C(P+1)},className:"dislike","aria-label":"dislike"},r.a.createElement("span",{role:"img","aria-hidden":"true"},"\ud83d\udc4e")),r.a.createElement("button",{onClick:function(){!function(){var e=Object(l.a)(O);e.push(p[P]),k(e)}(),C(P+1)},className:"like","aria-label":"like"},r.a.createElement("span",{role:"img","aria-hidden":"true"},"\ud83d\udc4d")),r.a.createElement("a",{href:p[P].url,target:"_blank",rel:"noopener noreferrer"},"@",p[P].photographer)):null,W?r.a.createElement(m,{images:O}):null),r.a.createElement(h,{link:H.url,photographer:H.photog})):r.a.createElement("div",{className:"loadingBackground"},r.a.createElement(d.a,{className:"loadingAnimation",type:"bars",color:"white",height:90,width:100})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.8b89d1e7.chunk.js.map