import{S as e,i as a,s as t,e as s,a as r,t as n,b as i,J as m,c,d as p,z as u,f as h,n as l,g as d,M as o,N as f,u as g}from"./main.js";function x(e){let a,t,l,d,o,f,g,x,v,M,$,w,y,z,T=e[0].name+"",b=e[0].premiered.split("-")[0]+"",j=e[0].summary+"";return{c(){a=s("img"),l=r(),d=s("h1"),o=n(T),f=n(" ("),g=n(b),x=n(")"),v=r(),M=s("p"),$=r(),w=s("a"),y=n("Read more on TVMaze"),a.src!==(t=e[0].image.medium.replace("http","https"))&&i(a,"src",t),i(a,"alt","cover"),m(a,"height","295px"),i(w,"href",z=e[0].url)},m(e,t){c(e,a,t),c(e,l,t),c(e,d,t),p(d,o),p(d,f),p(d,g),p(d,x),c(e,v,t),c(e,M,t),M.innerHTML=j,c(e,$,t),c(e,w,t),p(w,y)},p(e,s){1&s&&a.src!==(t=e[0].image.medium.replace("http","https"))&&i(a,"src",t),1&s&&T!==(T=e[0].name+"")&&u(o,T),1&s&&b!==(b=e[0].premiered.split("-")[0]+"")&&u(g,b),1&s&&j!==(j=e[0].summary+"")&&(M.innerHTML=j),1&s&&z!==(z=e[0].url)&&i(w,"href",z)},d(e){e&&h(a),e&&h(l),e&&h(d),e&&h(v),e&&h(M),e&&h($),e&&h(w)}}}function v(e){let a,t,u,d,o,f,g=e[0].id&&x(e);return{c(){a=s("div"),t=s("h4"),u=s("a"),d=n("Go back"),f=r(),g&&g.c(),i(u,"href",o=e[1]("../..")),m(a,"text-align","center"),m(a,"max-width","540px"),m(a,"margin","auto")},m(e,s){c(e,a,s),p(a,t),p(t,u),p(u,d),p(a,f),g&&g.m(a,null)},p(e,[t]){2&t&&o!==(o=e[1]("../.."))&&i(u,"href",o),e[0].id?g?g.p(e,t):(g=x(e),g.c(),g.m(a,null)):g&&(g.d(1),g=null)},i:l,o:l,d(e){e&&h(a),g&&g.d()}}}function M(e,a,t){let s,r,n;d(e,o,e=>t(2,s=e)),d(e,f,e=>t(3,r=e)),d(e,g,e=>t(1,n=e));let i={};return e.$$.update=()=>{var a;4&e.$$.dirty&&(a=s.showId,fetch("https://api.tvmaze.com/shows/"+a).then(e=>e.json()).then(e=>{t(0,i=e),r()}))},[i,n]}export default class extends e{constructor(e){super(),a(this,e,M,v,t,{})}}
//# sourceMappingURL=[showId]-f1c44817.js.map