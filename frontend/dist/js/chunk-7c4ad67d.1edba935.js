(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c4ad67d"],{"0703":function(e,t,n){"use strict";var a=n("5530"),i=n("d4ec"),o=n("bee2"),c=n("c427"),r=function(){function e(){Object(i["a"])(this,e)}return Object(o["a"])(e,[{key:"getAll",value:function(){return c["a"].get("/examination-requests/")}},{key:"getAllByCurrentUser",value:function(e){return c["a"].get("/examination-requests/",{params:Object(a["a"])({},{assigned_to:e})})}},{key:"getFiltered",value:function(e){var t=0!==e.state.length;return c["a"].get("/examination-requests/",{params:Object(a["a"])({},t?{state:e.state}:{})})}},{key:"get",value:function(e){return c["a"].get("/examination-requests/".concat(e,"/"))}},{key:"create",value:function(e){return c["a"].post("/examination-requests/",e)}},{key:"update",value:function(e,t){return c["a"].put("/examination-requests/".concat(e,"/"),t)}},{key:"delete",value:function(e){return c["a"].delete("/examination-requests/".concat(e,"/"))}},{key:"deleteAll",value:function(){return c["a"].delete("/examination-requests")}}]),e}();t["a"]=new r},"071d":function(e,t,n){"use strict";var a=n("5530"),i=n("d4ec"),o=n("bee2"),c=n("c427"),r=function(){function e(){Object(i["a"])(this,e)}return Object(o["a"])(e,[{key:"getAll",value:function(){return c["a"].get("examination-actions/")}},{key:"getAllByWorker",value:function(e){return c["a"].get("examination-actions/",{params:{action_manager:e}})}},{key:"getFiltered",value:function(e){var t=-1!==e.is_action_paid,n="true"===e.is_action_paid?"true":"false",i=e.action_manager;return c["a"].get("examination-actions/",{params:Object(a["a"])(Object(a["a"])({},t?{is_action_paid:n}:{}),-1!==i?{action_manager:i}:{})})}},{key:"get",value:function(e){return c["a"].get("examination-actions/".concat(e,"/"))}},{key:"create",value:function(e){return c["a"].post("examination-actions/",e)}},{key:"update",value:function(e,t){return c["a"].put("examination-actions/".concat(e,"/"),t)}},{key:"delete",value:function(e){return c["a"].delete("examination-actions/".concat(e,"/"))}},{key:"deleteAll",value:function(){return c["a"].delete("examination-actions")}}]),e}();t["a"]=new r},"2ea1":function(e,t,n){"use strict";var a=n("d4ec"),i=n("bee2"),o=n("c427"),c=function(){function e(){Object(a["a"])(this,e)}return Object(i["a"])(e,[{key:"getAll",value:function(){return o["a"].get("transaction-requests/")}},{key:"get",value:function(e){return o["a"].get("transaction-requests/".concat(e,"/"))}},{key:"create",value:function(e){return o["a"].post("transaction-requests/",e)}},{key:"update",value:function(e,t){return o["a"].put("transaction-requests/".concat(e,"/"),t)}},{key:"delete",value:function(e){return o["a"].delete("transaction-requests/".concat(e,"/"))}},{key:"deleteAll",value:function(){return o["a"].delete("transaction-requests")}}]),e}();t["a"]=new c},"39ba":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"main__content"},[n("h1",[e._v(" Creating examination based on ticket related to health concern "+e._s(e.examinationAboutTicket.concern.name)+" of patient "+e._s(e.examinationAboutTicket.concern.patient.user.first_name)+" "+e._s(e.examinationAboutTicket.concern.patient.user.last_name)+" ")])]),n("div",{staticClass:"main__content"},[n("h3",[e._v("Date of examination & actions")]),n("br"),n("vs-input",{staticClass:"input",attrs:{label:"Date of examination",type:"date"},model:{value:e.examinationDate,callback:function(t){e.examinationDate=t},expression:"examinationDate"}}),n("br"),n("h5",[e._v("Description")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.examinationDescription,expression:"examinationDescription"}],attrs:{placeholder:"Briefly describe the examination.."},domProps:{value:e.examinationDescription},on:{input:function(t){t.target.composing||(e.examinationDescription=t.target.value)}}}),n("br"),n("div",{staticClass:"actions"},[n("h5",[e._v("Medical actions made during this examination: ")]),0===e.chosenActions.length?n("span",[e._v("No actions selected")]):e._e(),e._l(e.chosenActions,(function(t,a){return n("div",{key:a,staticClass:"action__within__examination"},[n("div",[n("span",[n("b",[e._v(e._s(t.actionData.name))]),e._v(" "),n("br"),e._v(" ("+e._s(e.getPricing(t.actionData.is_action_paid))+")")])]),n("div",{staticClass:"buttons__action"},[t.is_action_paid?n("div",{staticClass:"overpay__switch"},[n("vs-switch",{staticStyle:{bottom:"7px"},attrs:{success:""},scopedSlots:e._u([{key:"off",fn:function(){return[e._v(" Paid by patient ")]},proxy:!0},{key:"on",fn:function(){return[e._v(" Paid by insurance company ")]},proxy:!0}],null,!0),model:{value:e.askToCover,callback:function(t){e.askToCover=t},expression:"askToCover"}})],1):e._e(),n("div",{staticStyle:{display:"inline-block"}},[n("vs-button",{attrs:{icon:"",danger:""},on:{click:function(t){return e.deleteAction(a)}}},[n("box-icon",{staticStyle:{fill:"#fff"},attrs:{name:"trash"}})],1)],1)])])})),n("vs-button",{staticClass:"button",attrs:{gradient:"",icon:""},on:{click:function(t){return e.addAction()}}},[n("box-icon",{staticStyle:{fill:"#fff"},attrs:{name:"message-square-add",type:"solid"}}),n("span",{staticStyle:{"margin-left":"1em"}},[e._v("Add new action")])],1),n("br"),n("br")],2)],1),n("div",{staticClass:"main__content"},[n("h3",[e._v("Attach the Doctor's report")]),n("br"),n("h5",[e._v("Author: "),n("b",[e._v(e._s(e.currentUserName))])]),n("h5",[e._v("Regarding the concern: "),n("b",[e._v(e._s(e.examinationAboutTicket.concern.name))])]),n("h5",[e._v("Based on ticket number "),n("b",[e._v(e._s(e.examinationAboutTicket.id))])]),n("br"),n("h6",[e._v("Text of the report")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.reportDescription,expression:"reportDescription"}],attrs:{placeholder:"Type the content of report here.."},domProps:{value:e.reportDescription},on:{input:function(t){t.target.composing||(e.reportDescription=t.target.value)}}}),n("br"),n("br"),n("h6",[e._v("Add image to report")]),n("div",{staticClass:"upload__wrapper"},[n("button",{staticClass:"upload__btn"},[e._v(" Choose an image ")]),n("input",{ref:"file",attrs:{type:"file",id:"file",accept:"image/*"},on:{change:function(t){return e.handleFileUpload()}}}),n("span",{attrs:{id:"file__chosen"}},[e._v(e._s(e.fileName?e.fileName:"No file Chosen"))])])]),n("div",{staticClass:"main__content"},[n("vs-checkbox",{staticClass:"ticket__checkbox",model:{value:e.markTicketResolved,callback:function(t){e.markTicketResolved=t},expression:"markTicketResolved"}},[e._v(" Mark health concern as resolved ")]),n("vs-checkbox",{staticClass:"ticket__checkbox",model:{value:e.markConcernEnded,callback:function(t){e.markConcernEnded=t},expression:"markConcernEnded"}},[e._v(" Mark ticket as resolved ")]),n("vs-button",{attrs:{success:""},on:{click:function(t){return e.saveExamination()}}},[e._v(" Save ")])],1),n("vs-dialog",{attrs:{width:"500px"},scopedSlots:e._u([{key:"header",fn:function(){return[n("h5",{staticClass:"popup__headline"},[e._v(" Select actions performed during examination ")])]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"popup__right"},[n("vs-button",{attrs:{success:"",disabled:0===e.actionToAdd.length},on:{click:function(t){return e.addActionFinal()}}},[e._v(" Add ")])],1)]},proxy:!0}]),model:{value:e.activeActionAdd,callback:function(t){e.activeActionAdd=t},expression:"activeActionAdd"}},[n("vs-select",{staticClass:"popup__center",attrs:{label:"Actions",color:"primary"},model:{value:e.actionToAdd,callback:function(t){e.actionToAdd=t},expression:"actionToAdd"}},e._l(e.availableActions,(function(t){return n("vs-option",{key:t.id,attrs:{label:"["+e.getPricing(t.is_action_paid)+"] "+t.name,value:t.name}},[e._v(" ["+e._s(e.getPricing(t.is_action_paid))+"] "+e._s(t.name)+" ")])})),1)],1)],1)},i=[],o=(n("a4d3"),n("e01a"),n("4160"),n("d81d"),n("a434"),n("b0c0"),n("159b"),n("96cf"),n("1da1")),c=n("5530"),r=n("0703"),s=n("071d"),u=n("2ea1"),l=n("b944"),d=n("b81e"),p=n("8ba5"),f=n("8e80"),m=n("fa1c"),v=n("2f62"),_={name:"NewExamination",props:{id:String},computed:Object(c["a"])(Object(c["a"])({},Object(v["b"])(["user"])),{},{currentUserName:function(){return this.user.first_name+" "+this.user.last_name}}),data:function(){return{examinationAboutTicket:{},examinationDate:"",activeActionAdd:!1,actionToAdd:"",examinationDescription:"",reportDescription:"",chosenActions:[],availableActions:[],markTicketResolved:!0,markConcernEnded:!1,askToCover:!0,file:"",fileName:""}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r["a"].get(e.id).then((function(t){e.examinationAboutTicket=t.data})).catch((function(e){console.log(e)})),s["a"].getAll().then((function(t){e.availableActions=t.data})).catch((function(e){console.log(e)})),n=new Date,a=n.getDate(),i=n.getMonth(),i+=1,o=n.getFullYear(),e.examinationDate=o+"-"+i+"-"+a;case 8:case"end":return t.stop()}}),t)})))()},methods:{handleFileUpload:function(){this.file=this.$refs.file.files[0],this.fileName=this.$refs.file.files[0].name},addAction:function(){this.activeActionAdd=!0},addActionFinal:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s["a"].get(e.actionToAdd).then((function(t){e.chosenActions.push({actionData:t.data,cover:!0}),e.activeActionAdd=!1})).catch((function(t){f["a"].failPopup(t,e.$vs)}));case 1:case"end":return t.stop()}}),t)})))()},getPricing:function(e){return e?"PAID":"FREE"},deleteAction:function(e){this.chosenActions.splice(e,1)},saveExamination:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={date_of_examination:m["a"].getDateForBackend(e.examinationDate),examinating_doctor:e.user.id,request_based_on:e.examinationAboutTicket.id,concern:e.examinationAboutTicket.concern.id,actions:e.chosenActions.map((function(e){return e.actionData.name})),description:e.examinationDescription},l["a"].create(n).then((function(t){f["a"].successPopup("Examination created.",e.$vs);var n=t.data.id,a=new FormData;e.file&&a.append("photo",e.file,e.file.name),a.append("created_by",e.user.id),a.append("about_concern",e.examinationAboutTicket.concern.id),a.append("description",e.reportDescription),a.append("during_examination",n),p["a"].create(a).then((function(e){console.log(e)})).catch((function(t){f["a"].failPopup(t,e.$vs)})),e.chosenActions.forEach((function(t){if(t.cover){var a={examination_action:t.actionData.name,request_state:"UD",related_to_patient:e.examinationAboutTicket.concern.patient.user.id,during_examination:n,transaction_approver:t.actionData.action_manager.user.id};u["a"].create(a).then((function(e){console.log(e)})).catch((function(t){f["a"].failPopup(t,e.$vs)}))}}))})).catch((function(t){f["a"].failPopup(t,e.$vs)})),e.markTicketResolved&&(a={concern:e.examinationAboutTicket.concern.id,created_by:e.examinationAboutTicket.created_by.user.id,assigned_to:e.user.id,state:"RD"},r["a"].update(e.examinationAboutTicket.id,a).then((function(e){console.log(e)})).catch((function(t){f["a"].failPopup(t,e.$vs)}))),i={name:e.examinationAboutTicket.concern.name,description:e.examinationAboutTicket.concern.description,state:e.markConcernEnded?"ED":"ON",patient:e.examinationAboutTicket.concern.patient.user.id,doctor:e.examinationAboutTicket.concern.doctor.user.id},d["a"].update(e.examinationAboutTicket.concern.id,i).then((function(e){console.log(e)})).catch((function(t){f["a"].failPopup(t,e.$vs)})),t.next=7,e.$router.go(-1);case 7:case"end":return t.stop()}}),t)})))()}}},h=_,b=(n("d20f"),n("0c7c")),g=Object(b["a"])(h,a,i,!1,null,"2f74866f",null);t["default"]=g.exports},a434:function(e,t,n){"use strict";var a=n("23e7"),i=n("23cb"),o=n("a691"),c=n("50c4"),r=n("7b0b"),s=n("65f0"),u=n("8418"),l=n("1dde"),d=n("ae40"),p=l("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,v=Math.min,_=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!f},{splice:function(e,t){var n,a,l,d,p,f,b=r(this),g=c(b.length),k=i(e,g),x=arguments.length;if(0===x?n=a=0:1===x?(n=0,a=g-k):(n=x-2,a=v(m(o(t),0),g-k)),g+n-a>_)throw TypeError(h);for(l=s(b,a),d=0;d<a;d++)p=k+d,p in b&&u(l,d,b[p]);if(l.length=a,n<a){for(d=k;d<g-a;d++)p=d+a,f=d+n,p in b?b[f]=b[p]:delete b[f];for(d=g;d>g-a+n;d--)delete b[d-1]}else if(n>a)for(d=g-a;d>k;d--)p=d+a-1,f=d+n-1,p in b?b[f]=b[p]:delete b[f];for(d=0;d<n;d++)b[d+k]=arguments[d+2];return b.length=g-a+n,l}})},a71c:function(e,t,n){},d20f:function(e,t,n){"use strict";var a=n("a71c"),i=n.n(a);i.a},d81d:function(e,t,n){"use strict";var a=n("23e7"),i=n("b727").map,o=n("1dde"),c=n("ae40"),r=o("map"),s=c("map");a({target:"Array",proto:!0,forced:!r||!s},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},e01a:function(e,t,n){"use strict";var a=n("23e7"),i=n("83ab"),o=n("da84"),c=n("5135"),r=n("861d"),s=n("9bf2").f,u=n("e893"),l=o.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new l(e):void 0===e?l():l(e);return""===e&&(d[t]=!0),t};u(p,l);var f=p.prototype=l.prototype;f.constructor=p;var m=f.toString,v="Symbol(test)"==String(l("test")),_=/^Symbol\((.*)\)[^)]+$/;s(f,"description",{configurable:!0,get:function(){var e=r(this)?this.valueOf():this,t=m.call(e);if(c(d,e))return"";var n=v?t.slice(7,-1):t.replace(_,"$1");return""===n?void 0:n}}),a({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=chunk-7c4ad67d.1edba935.js.map