"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var f=c(function(H,q){
var W=require("path").resolve,x=require('@stdlib/fs-read-wasm/dist').sync,A=x(W(__dirname,"..","src","main.wasm"));q.exports=A
});var l=c(function(I,w){
var O=require('@stdlib/assert-is-wasm-memory/dist'),h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=require('@stdlib/utils-inherit/dist'),m=require('@stdlib/wasm-module-wrapper/dist'),T=require('@stdlib/error-tools-fmtprodmsg/dist'),B=f();function n(e){if(!(this instanceof n))return new n(e);if(!O(e))throw new TypeError(T('2VJH0',e));return m.call(this,B,e,{env:{memory:e}}),this}S(n,m);h(n.prototype,"main",function(r,t,i,a){return this._instance.exports.c_zscal(r,t,i,a),i});h(n.prototype,"ndarray",function(r,t,i,a,o){return this._instance.exports.c_zscal_ndarray(r,t,i,a,o),i});w.exports=n
});var b=c(function(J,z){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=require('@stdlib/utils-inherit/dist'),g=require('@stdlib/strided-base-stride2offset/dist'),j=require('@stdlib/strided-base-read-dataview/dist').ndarray,D=require('@stdlib/wasm-memory/dist'),L=require('@stdlib/wasm-base-arrays2ptrs/dist'),P=require('@stdlib/complex-float64-reim/dist'),M=require('@stdlib/wasm-base-strided2object/dist'),p=l();function u(){return this instanceof u?(p.call(this,new D({initial:0})),this):new u}V(u,p);_(u.prototype,"main",function(r,t,i,a){return this.ndarray(r,t,i,a,g(r,a))});_(u.prototype,"ndarray",function(r,t,i,a,o){var v,s,y;return v=L(this,[M(r,i,a,o),M(2,P(t),1,0)]),s=v[0],y=v[1],p.prototype.ndarray.call(this,r,y.ptr,s.ptr,s.stride,s.offset),s.copy&&j(r,this.view,s.stride*s.BYTES_PER_ELEMENT,s.ptr,i,a,o,!0),i});z.exports=u
});var R=c(function(K,E){
var Y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=b(),C=l(),d=new k;d.initializeSync();Y(d,"Module",C.bind(null));E.exports=d
});var F=R();module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
