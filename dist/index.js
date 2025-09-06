"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=c(function(H,y){
var x=require("path").resolve,A=require('@stdlib/fs-read-wasm/dist').sync,O=A(x(__dirname,"..","src","main.wasm"));y.exports=O
});var l=c(function(I,m){
var S=require('@stdlib/assert-is-wasm-memory/dist'),f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=require('@stdlib/utils-inherit/dist'),h=require('@stdlib/wasm-module-wrapper/dist'),B=require('@stdlib/error-tools-fmtprodmsg/dist'),V=q();function n(e){if(!(this instanceof n))return new n(e);if(!S(e))throw new TypeError(B('nullH0',e));return h.call(this,V,e,{env:{memory:e}}),this}T(n,h);f(n.prototype,"main",function(r,s,i,t){return this._instance.exports.c_zscal(r,s,i,t),i});f(n.prototype,"ndarray",function(r,s,i,t,o){return this._instance.exports.c_zscal_ndarray(r,s,i,t,o),i});m.exports=n
});var z=c(function(J,_){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/utils-inherit/dist'),j=require('@stdlib/strided-base-stride2offset/dist'),D=require('@stdlib/strided-base-read-dataview/dist').ndarray,L=require('@stdlib/wasm-memory/dist'),P=require('@stdlib/wasm-base-arrays2ptrs/dist'),Y=require('@stdlib/complex-float64-reim/dist'),w=require('@stdlib/wasm-base-strided2object/dist'),p=l();function u(){return this instanceof u?(p.call(this,new L({initial:0})),this):new u}g(u,p);M(u.prototype,"main",function(r,s,i,t){return this.ndarray(r,s,i,t,j(r,t))});M(u.prototype,"ndarray",function(r,s,i,t,o){var v,a,d;return v=P(this,[w(r,i,t,o),w(2,Y(s),1,0)]),a=v[0],d=v[1],p.prototype.ndarray.call(this,r,d.ptr,a.ptr,a.stride,a.offset),a.copy&&D(r,this.view,a.stride*a.BYTES_PER_ELEMENT,a.ptr,i,t,o,!0),i});_.exports=u
});var b=c(function(K,R){
var k=z(),E=new k;E.initializeSync();R.exports=E
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),W=b(),F=l();C(W,"Module",F);module.exports=W;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
