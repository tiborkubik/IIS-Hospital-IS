(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ca33b80"],{"0722":function(t,e,r){},"0af5":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main__page"},[r("top-nav-bar"),r("div",{staticClass:"row"},[r("div",{staticClass:"column left__part"},[r("h1",{staticClass:"headline"},[t._v(" Hospitalis - the best solution for your hospital ")]),r("div",{staticClass:"button__area"},[r("vs-button",{staticClass:"btn",attrs:{floating:"",large:"",gradient:""},on:{click:function(e){return t.setDoctorLoginActive()}}},[t._v(" Doctor login ")]),r("login-dialog",{attrs:{userType:"Doctor",userLoginActive:this.$store.state.doctorLoginWindowActive}}),r("vs-button",{staticClass:"btn",attrs:{floating:"",large:"",gradient:""},on:{click:function(e){return t.setPatientLoginActive()}}},[t._v(" Patient login ")]),r("login-dialog",{attrs:{userType:"Patient",userLoginActive:this.$store.state.patientLoginWindowActive}}),r("vs-button",{staticClass:"btn",attrs:{floating:"",large:"",gradient:""},on:{click:function(e){return t.setHealthcareLoginActive()}}},[t._v(" Insurance worker login ")]),r("login-dialog",{attrs:{userType:"Healthcare worker",userLoginActive:this.$store.state.healthcareLoginWindowActive}})],1)]),t._m(0)])],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column"},[n("img",{staticClass:"home__illustration",attrs:{src:r("a554"),alt:""}})])}],i=(r("96cf"),r("1da1")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vs-dialog",{attrs:{blur:""},on:{close:function(e){return t.loginDialogClosed()}},scopedSlots:t._u([{key:"header",fn:function(){return["Healthcare worker"===t.userType?r("h4",{staticClass:"not-margin"},[t._v(" Log in as "),r("b",[t._v(t._s("Insurance worker"))])]):r("h4",{staticClass:"not-margin"},[t._v(" Log in as "),r("b",[t._v(t._s(t.userType))])])]},proxy:!0}]),model:{value:t.userLoginActive,callback:function(e){t.userLoginActive=e},expression:"userLoginActive"}},[r("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[r("div",{staticClass:"con-form"},[r("vs-input",{ref:"email_field",staticClass:"con-form-item",attrs:{"label-placeholder":"Email",block:""},scopedSlots:t._u([{key:"icon",fn:function(){return[r("box-icon",{attrs:{name:"user"}})]},proxy:!0}]),model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("vs-input",{staticClass:"con-form-item",attrs:{type:"password",visiblePassword:t.hasVisiblePassword,"label-placeholder":"Password",block:""},on:{"click-icon":function(e){t.hasVisiblePassword=!t.hasVisiblePassword}},scopedSlots:t._u([{key:"icon",fn:function(){return[t.hasVisiblePassword?r("box-icon",{attrs:{name:"show"}}):r("box-icon",{attrs:{name:"hide"}})]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[t._v(" > ")])],1),r("div",{staticClass:"footer-dialog"},[r("vs-button",{attrs:{type:"submit",block:""}},[t._v(" Sign In ")])],1),t.response_code?r("span",[r("br"),t._v(" Response code: "+t._s(this.response_code||null)+" "),r("br"),t._v(" Response detail: "+t._s(this.response_string||null)+" ")]):t._e()])])},s=[],c=(r("b0c0"),{name:"LoginDialog",props:{userType:String,userLoginActive:Boolean},data:function(){return{hasVisiblePassword:!1,email:"",password:"",credentials_invalid:!1,response_code:null,response_string:null}},computed:{validEmail:function(){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.xxx)}},methods:{loginDialogClosed:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("Administrator"!==t.userType){e.next=3;break}return e.next=3,t.$store.commit("SET_ADMIN_LOGIN_WINDOW");case 3:if("Doctor"!==t.userType){e.next=6;break}return e.next=6,t.$store.commit("SET_DOCTOR_LOGIN_WINDOW");case 6:if("Patient"!==t.userType){e.next=9;break}return e.next=9,t.$store.commit("SET_PATIENT_LOGIN_WINDOW");case 9:if("Healthcare worker"!==t.userType){e.next=12;break}return e.next=12,t.$store.commit("SET_HEALTHCARE_LOGIN_WINDOW");case 12:case"end":return e.stop()}}),e)})))()},login:function(){var t=this;if(this.email.length&&this.password.length){var e;if(this.$store.state.patientLoginWindowActive)e="patient";else if(this.$store.state.doctorLoginWindowActive)e="doctor";else if(this.$store.state.healthcareLoginWindowActive)e="healthcare-worker";else{if(!this.$store.state.adminLoginWindowActive)return void console.log("invalid login role");e="admin"}this.$store.dispatch("loginUser",{email:this.email,password:this.password,role:e}).then((function(){t.credentials_invalid=!1,"patient"===e&&t.$router.push("my-health-report-card"),"doctor"===e&&t.$router.push("health-concerns"),"healthcare-worker"===e&&t.$router.push("examination-actions-overview"),"admin"===e&&t.$router.push("users-overview"),t.loginDialogClosed()})).catch((function(e){console.log(e),t.credentials_invalid=!0,e.response?(e.response.data&&(t.response_string=e.response.data.detail),t.response_code=e.response.status):(t.response_string="No response from server",t.response_code="-")}))}},register:function(){this.$store.dispatch("registerUser",{name:this.name,email:this.email,password:this.password})}}}),u=c,l=(r("809a"),r("0c7c")),h=Object(l["a"])(u,a,s,!1,null,"14a62472",null),f=h.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("vs-navbar",{staticClass:"top__navbar",attrs:{"center-collapsed":""},scopedSlots:t._u([{key:"right",fn:function(){return[r("vs-button",{attrs:{floating:""},on:{click:function(e){return t.setAdminLoginActive()}}},[t._v(" Administrator login ")])]},proxy:!0}])}),r("login-dialog",{attrs:{userType:"Administrator",userLoginActive:this.$store.state.adminLoginWindowActive}})],1)},d=[],v={name:"TopNavBar",components:{LoginDialog:f},methods:{setAdminLoginActive:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.commit("SET_ADMIN_LOGIN_WINDOW");case 2:case"end":return e.stop()}}),e)})))()}}},g=v,m=(r("2dac"),Object(l["a"])(g,p,d,!1,null,"63eceda6",null)),y=m.exports,w={name:"MainPage",components:{LoginDialog:f,TopNavBar:y},methods:{setDoctorLoginActive:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.commit("SET_DOCTOR_LOGIN_WINDOW");case 2:case"end":return e.stop()}}),e)})))()},setPatientLoginActive:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.commit("SET_PATIENT_LOGIN_WINDOW");case 2:case"end":return e.stop()}}),e)})))()},setHealthcareLoginActive:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.commit("SET_HEALTHCARE_LOGIN_WINDOW");case 2:case"end":return e.stop()}}),e)})))()}}},_=w,b=(r("5445"),Object(l["a"])(_,n,o,!1,null,"0ea85652",null));e["default"]=b.exports},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)}))}}},"2dac":function(t,e,r){"use strict";var n=r("97eb"),o=r.n(n);o.a},5445:function(t,e,r){"use strict";var n=r("0722"),o=r.n(n);o.a},"809a":function(t,e,r){"use strict";var n=r("ca31"),o=r.n(n);o.a},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(C){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=E(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function g(){}function m(){}function y(){}var w={};w[i]=function(){return this};var _=Object.getPrototypeOf,b=_&&_(_($([])));b&&b!==r&&n.call(b,i)&&(w=b);var L=y.prototype=g.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return I()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=A(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function A(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,A(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function $(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return m.prototype=L.constructor=y,y.constructor=m,m.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),c(L,s,"Generator"),L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=$,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:$(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"97eb":function(t,e,r){},a554:function(t,e,r){t.exports=r.p+"img/home-page.6a72f038.svg"},ca31:function(t,e,r){}}]);
//# sourceMappingURL=chunk-4ca33b80.b1388511.js.map