import{S as t,i as a,s as n,e as o,a as s,b as l,c as e,d as c,l as i,n as r,f as u,o as p,h as w,j as m,k as d,m as b,p as f,q as g,r as y,v as x}from"./main.js";import{h}from"./howler-8b04a87e.js";function $(t){let a,n,s;return{c(){a=o("button"),a.textContent="=",l(a,"id","pause"),l(a,"class","w3-black w3-xlarge pause w3-button w3-animate-fading svelte-opx3ln")},m(o,l){e(o,a,l),n||(s=i(a,"click",t[2]),n=!0)},p:r,d(t){t&&u(a),n=!1,s()}}}function k(t){let a,n,s;return{c(){a=o("button"),a.textContent=">",l(a,"id","play"),l(a,"class","w3-black w3-xlarge playing w3-button svelte-opx3ln")},m(o,l){e(o,a,l),n||(s=i(a,"click",t[2]),n=!0)},p:r,d(t){t&&u(a),n=!1,s()}}}function v(t){let a,n,p,w,m;function d(t,a){return t[1].playing?k:$}let b=d(t),f=b(t);return{c(){a=o("div"),f.c(),n=s(),p=o("button"),p.textContent="↑",l(p,"id","top"),l(p,"class","w3-display-bottomright w3-black w3-xlarge to-top w3-button w3-hide svelte-opx3ln"),l(a,"class","w3-container w3-display-bottomleft svelte-opx3ln")},m(o,s){e(o,a,s),f.m(a,null),c(a,n),c(a,p),t[5](a),w||(m=i(p,"click",N),w=!0)},p(t,[o]){b===(b=d(t))&&f?f.p(t,o):(f.d(1),f=b(t),f&&(f.c(),f.m(a,n)))},i:r,o:r,d(n){n&&u(a),f.d(),t[5](null),w=!1,m()}}}function N(){window.scrollTo({top:0,behavior:"smooth"})}function q(t,a,n){let o,s,l,e,{src:c}=a,i=[];i.push(c);let{sound:r=new h.Howl({src:i,autoplay:!1,loop:!0,onplayerror(){r.once("unlock",(function(){r.play()}))}})}=a;r.play();let u={playing:!0};return p(()=>{s=o.querySelector("#top"),l=o.querySelector("#pause"),e=o.querySelector("#play")}),window.addEventListener("scroll",(function(){window.scrollY>=300?(s.className="w3-display-bottomright w3-black w3-xlarge to-top w3-button w3-animate-opacity",e.className="w3-black w3-xlarge playing w3-button w3-opacity-max",l.className="w3-black w3-xlarge pause w3-button w3-animate-fading w3-opacity-max"):(s.className="w3-display-bottomright w3-black w3-xlarge to-top w3-button w3-hide",e.className="w3-black w3-xlarge playing w3-button",l.className="w3-black w3-xlarge pause w3-button w3-animate-fading w3-opacity-off")})),t.$$set=t=>{"src"in t&&n(3,c=t.src),"sound"in t&&n(4,r=t.sound)},[o,u,function(){n(1,u.playing=!u.playing,u),!0===u.playing?r.play():r.pause()},c,r,function(t){w[t?"unshift":"push"](()=>{o=t,n(0,o)})}]}class S extends t{constructor(t){super(),a(this,t,q,v,n,{src:3,sound:4})}}function j(t){let a,n,o;const l=t[1].default,c=m(l,t,t[0],null);return n=new S({props:{src:"https://mommocmoc.github.io/unhappycircuit/sound.wav"}}),{c(){c&&c.c(),a=s(),d(n.$$.fragment)},m(t,s){c&&c.m(t,s),e(t,a,s),b(n,t,s),o=!0},p(t,[a]){c&&c.p&&1&a&&f(c,l,t,t[0],a,null,null)},i(t){o||(g(c,t),g(n.$$.fragment,t),o=!0)},o(t){y(c,t),y(n.$$.fragment,t),o=!1},d(t){c&&c.d(t),t&&u(a),x(n,t)}}}function C(t,a,n){let{$$slots:o={},$$scope:s}=a;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,o]}export default class extends t{constructor(t){super(),a(this,t,C,j,n,{})}}
//# sourceMappingURL=_layout-02cedd9c.js.map