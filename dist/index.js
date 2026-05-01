"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=c(function(H,q){
var W=require("path").resolve,x=require('@stdlib/fs-read-wasm/dist').sync,A=x(W(__dirname,"..","src","main.wasm"));q.exports=A
});var l=c(function(I,w){
var O=require('@stdlib/assert-is-wasm-memory/dist'),h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=require('@stdlib/utils-inherit/dist'),m=require('@stdlib/wasm-module-wrapper/dist'),T=require('@stdlib/error-tools-fmtprodmsg/dist'),B=f();function n(e){if(!(this instanceof n))return new n(e);if(!O(e))throw new TypeError(T('2VJH0',e));return m.call(this,B,e,{env:{memory:e}}),this}S(n,m);h(n.prototype,"main",function(r,s,i,t){return this._instance.exports.c_zscal(r,s,i,t),i});h(n.prototype,"ndarray",function(r,s,i,t,o){return this._instance.exports.c_zscal_ndarray(r,s,i,t,o),i});w.exports=n
});var b=c(function(J,z){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=require('@stdlib/utils-inherit/dist'),g=require('@stdlib/strided-base-stride2offset/dist'),j=require('@stdlib/strided-base-read-dataview/dist').ndarray,D=require('@stdlib/wasm-memory/dist'),L=require('@stdlib/wasm-base-arrays2ptrs/dist'),P=require('@stdlib/complex-float64-reim/dist'),M=require('@stdlib/wasm-base-strided2object/dist'),p=l();function u(){return this instanceof u?(p.call(this,new D({initial:0})),this):new u}V(u,p);_(u.prototype,"main",function(r,s,i,t){return this.ndarray(r,s,i,t,g(r,t))});_(u.prototype,"ndarray",function(r,s,i,t,o){var v,a,y;return v=L(this,[M(r,i,t,o),M(2,P(s),1,0)]),a=v[0],y=v[1],p.prototype.ndarray.call(this,r,y.ptr,a.ptr,a.stride,a.offset),a.copy&&j(r,this.view,a.stride*a.BYTES_PER_ELEMENT,a.ptr,i,t,o,!0),i});z.exports=u
});var R=c(function(K,E){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=b(),C=l(),d=new k;d.initializeSync();Y(d,"Module",C.bind(null));E.exports=d
});var F=R();module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
