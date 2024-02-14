// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Math.abs(r)}var n=Number,t=n.NEGATIVE_INFINITY;function u(r){return 0===r&&1/r===t}function e(r){return r!=r}var I=n.NEGATIVE_INFINITY,f=Number.POSITIVE_INFINITY;function N(r,n){var t,N,a,i;if(2===(t=arguments.length))return e(r)||e(n)?NaN:r===I||n===I?I:r===n&&0===r?u(r)?r:n:r<n?r:n;for(N=f,i=0;i<t;i++){if(e(a=arguments[i])||a===I)return a;(a<N||a===N&&0===a&&u(a))&&(N=a)}return N}function a(n,t){var u,e,I;if(0===(u=arguments.length))return f;if(2===u)return N(r(n),r(t));for(e=[],I=0;I<u;I++)e.push(r(arguments[I]));return N.apply(null,e)}export{a as default};
//# sourceMappingURL=mod.js.map
