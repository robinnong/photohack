(this.webpackJsonpphotohack=this.webpackJsonpphotohack||[]).push([[0],{13:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(5),c=a.n(o),l=(a(13),a(7)),s=a(1),i=a(6),u=function(e){return n.a.createElement("form",{action:"",className:"searchForm",onSubmit:e.getPhotos},n.a.createElement("label",{htmlFor:"search",className:"sr-only"},"Search"),n.a.createElement("div",null,n.a.createElement("input",{onChange:e.handleUserInput,type:"text",id:"search",placeholder:"'Mountains'"}),n.a.createElement("button",{type:"submit","aria-label":"Search"},n.a.createElement("i",{className:"fas fa-search","aria-hidden":"true"}))))},m=function(e){return n.a.createElement("div",{className:"galleryContainer"},n.a.createElement("p",null,"Here is today's creative inspiration:"),n.a.createElement("ul",{className:"gallery"},e.images.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.photographer_url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{className:"imageContainer"},n.a.createElement("img",{src:e.src.large,alt:"Photo by ".concat(e.photographer," from Pexels")})),n.a.createElement("p",null,"@",e.photographer)))}))))},h=function(){return n.a.createElement("footer",null,"\xa9 2020 ",n.a.createElement("a",{href:"https://github.com/robinnong"},"Robin Nong"),". Photos provided by ",n.a.createElement("a",{href:"https://www.pexels.com"},"Pexels."))},p=(a(17),Object(i.a)("563492ad6f917000010000011f5e758f86d140e99237550104aae485")),f=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)(""),i=Object(s.a)(c,2),f=i[0],d=i[1],g=Object(r.useState)([]),b=Object(s.a)(g,2),E=b[0],y=b[1],v=Object(r.useState)(0),j=Object(s.a)(v,2),w=j[0],O=j[1],k=Object(r.useState)(!1),N=Object(s.a)(k,2),S=N[0],P=N[1],C=Object(r.useState)(!1),_=Object(s.a)(C,2),x=_[0],M=_[1],I=Object(r.useState)(""),W=Object(s.a)(I,2),B=W[0],F=W[1],J=Object(r.useState)({}),U=Object(s.a)(J,2),q=U[0],A=U[1];Object(r.useEffect)((function(){p.photos.curated({per_page:6}).then((function(e){var t=Math.floor(6*Math.random()),a=e.photos[t];A({photog:a.photographer,url:a.photographer_url}),document.documentElement.style.setProperty("--background-image-full","url(".concat(a.src.original,")"))}))}),[]),Object(r.useEffect)((function(){w===a.length-1&&(M(!0),P(!1))}),[w]);return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"Photo Inspo")),n.a.createElement("main",null,n.a.createElement("div",{className:"blue"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("p",null,"Want to create some art but can't decide if you want to paint a landscape or practice drawing portraits? Get inspired with powerful reference images, and narrow down your favourites."),n.a.createElement("p",null,"Search ideas: a subject, colour, emotion or multiple words."),n.a.createElement(u,{getPhotos:function(e){return function(e){if(e.preventDefault(),""!==f){var t=f;p.photos.search({query:t,per_page:15}).then((function(e){0===e.photos.length?F("Sorry, we couldn't find any images based on your search \ud83d\ude2d Check your spelling for try a new search term."):(o(e.photos),P(!0),F(""),d(""))}))}}(e)},handleUserInput:function(e){return function(e){return d(e.target.value)}(e)}}),n.a.createElement("p",{className:"errorMessage"},B))),S?n.a.createElement("div",{className:"votingContainer"},n.a.createElement("img",{src:a[w].src.large,alt:""}),n.a.createElement("button",{onClick:function(){return O(w+1)},className:"dislike","aria-label":"dislike"},n.a.createElement("span",{role:"img","aria-hidden":"true"},"\ud83d\udc4e")),n.a.createElement("button",{onClick:function(){!function(){var e=Object(l.a)(E);e.push(a[w]),y(e)}(),O(w+1)},className:"like","aria-label":"like"},n.a.createElement("span",{role:"img","aria-hidden":"true"},"\ud83d\udc4d")),n.a.createElement("a",{href:a[w].photographer_url,target:"_blank",rel:"noopener noreferrer"},"@",a[w].photographer)):null,x?n.a.createElement(m,{images:E}):null,n.a.createElement("p",{className:"featured"},"Photo of the day by ",n.a.createElement("a",{href:q.url},q.photog))),n.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.40770f67.chunk.js.map