webpackJsonp([8],{0:function(n,t,e){n.exports=e("cDNt")},Npun:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var o=e("AP4T"),r=e("p5Ee"),i=e("XKz0"),a=(e("PSNg"),e("GQSG"),e("ivSB"),e("HT7u"),e("Owqd"),e("wH+M"),e("iBt5"),e("4Ggl"),e("Z04r")),l=function(){function n(n,t){this.http=n,this.mdSnackBar=t}return n.prototype.httpClientGet=function(n){return this.getHttpRequest(this.http.get(n))},n.prototype.httpClientPost=function(n,t){return this.getHttpRequest(this.http.post(n,t))},n.prototype.getHttpRequest=function(n){var t=this;return n.do(function(n){return t.logHttpResponse(n)}).retryWhen(function(n){return t.showSnackMessage(),n.delay(3e3).take(3).concat(o.a.throw(new Error("Reconnect server failed!")))}).catch(function(n){return t.showSnackMessage("Retry failed!",void 0,5500),t.logHttpErrorResponse(n)})},n.prototype.logHttpResponse=function(n){},n.prototype.logHttpErrorResponse=function(n){return console.log("sever error:",n),o.a.throw(n||"backend server error")},n.prototype.logErrorMessage=function(n){console.log("sever error:",n)},n.prototype.showSnackMessage=function(n,t,e){void 0===n&&(n="Reconnect after 3 second"),void 0===t&&(t="close"),void 0===e&&(e=2500),this.mdSnackBar.open(n,t,{duration:e})},n.prototype.setLanguage=function(n){localStorage.setItem("langCode",n)},n.prototype.getLanguage=function(){return localStorage.getItem("langCode")},n.prototype.setProfile=function(n){this.profile=n},n.prototype.getProfile=function(){return JSON.parse(this.profile)},n.prototype.getServer=function(){return r.a.APIURL},n.prototype.getLanguageList=function(){return[{code:"en",label:"English",country:"\u7f8e\u570b"},{code:"tw",label:"\u7e41\u9ad4",country:"\u53f0\u7063"},{code:"cn",label:"\u7b80\u4f53",country:"\u4e2d\u570b"}]},n.prototype.getNationalityList=function(){return[{nationalityCode:"CN",nationalityName:"China",nationalityi18n:"\u4e2d\u56fd"},{nationalityCode:"JP",nationalityName:"Japan",nationalityi18n:"\u65e5\u672c"},{nationalityCode:"PH",nationalityName:"Philippines",nationalityi18n:"Pilipinas"},{nationalityCode:"SG",nationalityName:"Singapore",nationalityi18n:"Singapore"},{nationalityCode:"TH",nationalityName:"Thailand",nationalityi18n:"\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22"},{nationalityCode:"TW",nationalityName:"Taiwan",nationalityi18n:"\u53f0\u7063"},{nationalityCode:"VN",nationalityName:"Vietnam",nationalityi18n:"Vi\u1ec7t Nam"}]},n.prototype.getRoleList=function(){return[{roleType:"0",roleName:"\u672a\u88ab\u6388\u6b0a"},{roleType:"1",roleName:"\u4f9b\u61c9\u5546"},{roleType:"2",roleName:"CWA"}]},n.ctorParameters=function(){return[{type:i.c},{type:a._101}]},n}()},cDNt:function(n,t,e){"use strict";function o(n){return r._43(0,[(n()(),r._41(null,["\n"])),(n()(),r._41(null,["\n"])),(n()(),r._41(null,["\n"])),(n()(),r._21(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r._19(212992,null,0,u.n,[u.b,r._3,r.m,[8,null],r.j],null,null),(n()(),r._41(null,["\n\n"]))],function(n,t){n(t,4,0)},null)}Object.defineProperty(t,"__esModule",{value:!0});var r=e("/oeL"),i=e("p5Ee"),a=(e("rgUS"),function(){return function(){}}()),l=e("Npun"),u=e("BkNc"),c=function(){function n(n,t,e){this._router=n,this.appService=t,this.localeId=e,this.languages=[{code:"en",label:"English"},{code:"tw",label:"\u7e41\u9ad4"},{code:"cn",label:"\u7b80\u4f53"},{code:"ja",label:"\u65e5\u672c\u306e"},{code:"th",label:"\u0e44\u0e17\u0e22"}]}return n.prototype.ngOnInit=function(){this.appService.setProfile(localStorage.getItem("profile"))},n.ctorParameters=function(){return[{type:u.k},{type:l.a},{type:void 0,decorators:[{type:r.w,args:[r.D]}]}]},n}(),_=e("v6Q/"),p=[[".website-position[_ngcontent-%COMP%]{background-color:#000}"]],d=r._18({encapsulation:0,styles:p,data:{}}),s=r._16("app-root",c,function(n){return r._43(0,[(n()(),r._21(0,null,null,1,"app-root",[],null,null,null,o,d)),r._19(114688,null,0,c,[u.k,l.a,r.D],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),g=e("qbdv"),f=e("fc+i"),y=e("f9zQ"),m=e("fL27"),h=e("EyWH"),b=e("JYHx"),k=e("vVgA"),v=e("z1Gz"),N=e("UPmf"),P=e("dGUy"),S=e("Z04r"),w=e("XKz0"),C=e("CPp0"),j=function(){return function(){}}(),H=e("mSH7"),R=r._17(a,[c],function(n){return r._32([r._33(512,r.m,r._13,[[8,[_.c,_.A,s]],[3,r.m],r.H]),r._33(5120,r.D,r._31,[[3,r.D]]),r._33(4608,g.n,g.m,[r.D]),r._33(5120,r.c,r._22,[]),r._33(5120,r.B,r._28,[]),r._33(5120,r.C,r._29,[]),r._33(4608,f.c,f.t,[g.d]),r._33(6144,r.T,null,[f.c]),r._33(4608,f.f,f.g,[]),r._33(5120,f.d,function(n,t,e,o){return[new f.l(n),new f.p(t),new f.o(e,o)]},[g.d,g.d,g.d,f.f]),r._33(4608,f.e,f.e,[f.d,r.J]),r._33(135680,f.n,f.n,[g.d]),r._33(4608,f.m,f.m,[f.e,f.n]),r._33(5120,y.a,m.d,[]),r._33(5120,y.c,m.e,[]),r._33(4608,y.b,m.c,[y.a,y.c]),r._33(5120,r.R,m.f,[f.m,y.b,r.J]),r._33(6144,f.q,null,[f.n]),r._33(4608,r._0,r._0,[r.J]),r._33(4608,f.h,f.h,[g.d]),r._33(4608,f.j,f.j,[g.d]),r._33(5120,u.a,u.w,[u.k]),r._33(4608,u.d,u.d,[]),r._33(6144,u.f,null,[u.d]),r._33(135680,u.o,u.o,[u.k,r.G,r.k,r.z,u.f]),r._33(4608,u.e,u.e,[]),r._33(5120,u.h,u.z,[u.x]),r._33(5120,r.b,function(n){return[n]},[u.h]),r._33(4608,h.b,m.b,[r.R,f.b]),r._33(4608,b.a,b.a,[]),r._33(5120,k.c,k.a,[[3,k.c],r.J,b.a]),r._33(5120,k.g,k.f,[[3,k.g],k.c]),r._33(4608,v.g,v.g,[k.c,k.g]),r._33(5120,v.c,v.j,[[3,v.c]]),r._33(4608,v.m,v.m,[k.g]),r._33(4608,v.b,v.b,[v.g,v.c,r.m,v.m,r.g,r.z,r.J]),r._33(5120,v.k,v.l,[v.b]),r._33(6144,N.b,null,[f.b]),r._33(4608,N.c,N.c,[[2,N.b]]),r._33(5120,P.j,P.i,[[3,P.j],[2,P.g],b.a]),r._33(4608,S._101,S._101,[v.b,P.j,r.z,[3,S._101]]),r._33(4608,w.h,w.m,[g.d,r.M,w.k]),r._33(4608,w.n,w.n,[w.h,w.l]),r._33(5120,w.a,function(n){return[n]},[w.n]),r._33(4608,w.j,w.j,[]),r._33(6144,w.i,null,[w.j]),r._33(4608,w.g,w.g,[w.i]),r._33(6144,w.b,null,[w.g]),r._33(5120,w.f,w.o,[w.b,[2,w.a]]),r._33(4608,w.c,w.c,[w.f]),r._33(4608,C.c,C.c,[]),r._33(4608,C.g,C.b,[]),r._33(5120,C.i,C.j,[]),r._33(4608,C.h,C.h,[C.c,C.g,C.i]),r._33(4608,C.f,C.a,[]),r._33(5120,C.d,C.k,[C.h,C.f]),r._33(4608,l.a,l.a,[w.c,S._101]),r._33(512,g.c,g.c,[]),r._33(1024,r.r,f.r,[]),r._33(1024,r.I,function(){return[u.s()]},[]),r._33(512,u.x,u.x,[r.z]),r._33(1024,r.d,function(n,t,e){return[f.s(n,t),u.y(e)]},[[2,f.i],[2,r.I],u.x]),r._33(512,r.e,r.e,[[2,r.d]]),r._33(131584,r._20,r._20,[r.J,r._14,r.z,r.r,r.m,r.e]),r._33(2048,r.g,null,[r._20]),r._33(512,r.f,r.f,[r.g]),r._33(512,f.a,f.a,[[3,f.a]]),r._33(1024,u.r,u.u,[[3,u.k]]),r._33(512,u.q,u.c,[]),r._33(512,u.b,u.b,[]),r._33(256,u.g,{useHash:!0},[]),r._33(1024,g.i,u.t,[g.t,[2,g.a],u.g]),r._33(512,g.h,g.h,[g.i]),r._33(512,r.k,r.k,[]),r._33(512,r.G,r.X,[r.k,[2,r.Y]]),r._33(1024,u.i,function(){return[[{path:"login",loadChildren:"./login-page/login-page.module#LoginPageModule"},{path:"dashboard",loadChildren:"./main-page/main-page.module#MainPageModule"},{path:"",redirectTo:"login",pathMatch:"full"}]]},[]),r._33(1024,u.k,u.v,[r.g,u.q,u.b,g.h,r.z,r.G,r.k,u.i,u.g,[2,u.p],[2,u.j]]),r._33(512,u.m,u.m,[[2,u.r],[2,u.k]]),r._33(512,j,j,[]),r._33(512,m.a,m.a,[]),r._33(512,H.e,H.e,[]),r._33(512,b.b,b.b,[]),r._33(512,k.b,k.b,[]),r._33(512,v.d,v.d,[]),r._33(512,S.c,S.c,[]),r._33(512,N.a,N.a,[]),r._33(256,S.k,!0,[]),r._33(512,S._11,S._11,[[2,f.b],[2,S.k]]),r._33(512,S._103,S._103,[]),r._33(512,w.e,w.e,[]),r._33(512,w.d,w.d,[]),r._33(512,C.e,C.e,[]),r._33(512,a,a,[]),r._33(256,w.k,"XSRF-TOKEN",[]),r._33(256,w.l,"X-XSRF-TOKEN",[])])});i.a.production&&Object(r._7)(),Object(f.k)().bootstrapModuleFactory(R)},gFIY:function(n,t,e){function o(n){var t=r[n];return t?Promise.all(t.slice(1).map(e.e)).then(function(){return e(t[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var r={"./login-page/login-page.module.ngfactory":["5UjK",0,6],"./main-page/main-page.module.ngfactory":["u2I6",0,5],"./modify-product-info/modify-product-info.module.ngfactory":["UCYb",0,4],"./modify-supplier-stock/modify-supplier-stock.module.ngfactory":["Qruf",0,3],"./modify-supplier/modify-supplier.module.ngfactory":["H+jx",0,2],"./product-management/product-management.module.ngfactory":["gvKO",0,1]};o.keys=function(){return Object.keys(r)},o.id="gFIY",n.exports=o},p5Ee:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var o={production:!0,APIURL:"http://mars.kh.usc.edu.tw/cwa/"}}},[0]);