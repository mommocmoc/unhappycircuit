import{S as t,i as n,s,e as o,b as e,c as l,n as a,f as c,l as u,h as r,a as p,j as i,m,k as d,o as f,p as $,q as y}from"./main.js";import{h as b}from"./howler-8b04a87e.js";function g(t){let n,s,r;return{c(){n=o("button"),n.textContent="=",e(n,"class","pause w3-button w3-black svelte-469xvt")},m(o,e){l(o,n,e),s||(r=u(n,"click",t[1]),s=!0)},p:a,d(t){t&&c(n),s=!1,r()}}}function w(t){let n,s,r;return{c(){n=o("button"),n.textContent=">",e(n,"class","playing w3-button w3-black svelte-469xvt")},m(o,e){l(o,n,e),s||(r=u(n,"click",t[1]),s=!0)},p:a,d(t){t&&c(n),s=!1,r()}}}function h(t){let n;function s(t,n){return t[0].playing?w:g}let u=s(t),r=u(t);return{c(){n=o("div"),r.c(),e(n,"class","w3-display-bottomleft")},m(t,s){l(t,n,s),r.m(n,null)},p(t,[o]){u===(u=s(t))&&r?r.p(t,o):(r.d(1),r=u(t),r&&(r.c(),r.m(n,null)))},i:a,o:a,d(t){t&&c(n),r.d()}}}function x(t,n,s){let{src:o}=n,e=[];e.push(o);let{sound:l=new b.Howl({src:e,autoplay:!1,loop:!0,onplayerror(){l.once("unlock",(function(){l.play()}))}})}=n;l.play();let a={playing:!0};return t.$$set=t=>{"src"in t&&s(2,o=t.src),"sound"in t&&s(3,l=t.sound)},[a,function(){s(0,a.playing=!a.playing,a),!0===a.playing?l.play():l.pause()},o,l]}class k extends t{constructor(t){super(),n(this,t,x,h,s,{src:2,sound:3})}}function v(t){let n,s,o;const e=t[1].default,a=r(e,t,t[0],null);return s=new k({props:{src:"https://mommocmoc.github.io/unhappycircuit/sound.wav"}}),{c(){a&&a.c(),n=p(),i(s.$$.fragment)},m(t,e){a&&a.m(t,e),l(t,n,e),m(s,t,e),o=!0},p(t,[n]){a&&a.p&&1&n&&d(a,e,t,t[0],n,null,null)},i(t){o||(f(a,t),f(s.$$.fragment,t),o=!0)},o(t){$(a,t),$(s.$$.fragment,t),o=!1},d(t){a&&a.d(t),t&&c(n),y(s,t)}}}function j(t,n,s){let{$$slots:o={},$$scope:e}=n;return t.$$set=t=>{"$$scope"in t&&s(0,e=t.$$scope)},[e,o]}export default class extends t{constructor(t){super(),n(this,t,j,v,s,{})}}
//# sourceMappingURL=_layout-32e2bac0.js.map