(function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/carcarum/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"17a1":function(e,t,a){},"1b4c":function(e){e.exports=JSON.parse('[{"id":1,"name":"Maria Theresa","summonId":1,"minStage":0,"maxStage":4,"startId":1},{"id":2,"name":"Caim","summonId":2,"minStage":0,"maxStage":4,"startId":2},{"id":3,"name":"Nier","summonId":3,"minStage":0,"maxStage":4,"startId":3},{"id":4,"name":"Estarriola","summonId":4,"minStage":0,"maxStage":4,"startId":4},{"id":5,"name":"Fraux","summonId":5,"minStage":0,"maxStage":4,"startId":5},{"id":6,"name":"Lobelia","summonId":6,"minStage":0,"maxStage":4,"startId":2},{"id":7,"name":"Geisenborger","summonId":7,"minStage":0,"maxStage":4,"startId":6},{"id":8,"name":"Haaselia","summonId":8,"minStage":0,"maxStage":4,"startId":1},{"id":9,"name":"Alanaan","summonId":9,"minStage":0,"maxStage":4,"startId":5},{"id":10,"name":"Katzelia","summonId":10,"minStage":0,"maxStage":4,"startId":4}]')},"53ea":function(e,t){e.exports="data:image/png;base64,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"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("div",[r("b-nav",{attrs:{id:"nav",tabs:"",justified:""}},[r("b-nav-item",{attrs:{to:"/"}},[r("img",{attrs:{src:a("53ea"),alt:""}}),e._v("Evoker Calculator")])],1)],1),r("router-view")],1)},o=[],s=(a("034f"),a("2877")),i={},l=Object(s["a"])(i,n,o,!1,null,null,null),c=l.exports,u=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ecalc"},[a("CharSelector",{attrs:{addEvoker:e.onEvokerAdded,filteredEvokers:e.filterEvokerList}}),a("EvokerTable",{staticClass:"mt-1",attrs:{evokerList:e.evokers,removeEvoker:e.onEvokerRemoved}})],1)},m=[],f=(a("d81d"),a("a434"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-form",{on:{submit:e.onEvokerAdded}},[a("div",{staticClass:"row"},[a("b-form-group",{staticClass:"col-lg-6 col-sm-12",attrs:{id:"char-select-group",label:"Evoker:","label-for":"select-evoker"}},[a("b-form-select",{attrs:{id:"select-evoker",disabled:e.haveAll},model:{value:e.selectedChar,callback:function(t){e.selectedChar=t},expression:"selectedChar"}},e._l(e.filteredChars,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})),0)],1),a("b-form-group",{staticClass:"col-lg-6 col-sm-12",attrs:{id:"stage-select-group",label:"Current Stage:","label-for":"select-stage"}},[a("b-form-select",{attrs:{id:"select-stage",options:e.stageOptions,disabled:e.haveAll},model:{value:e.selectedStage,callback:function(t){e.selectedStage=t},expression:"selectedStage"}})],1)],1),a("b-button",{attrs:{block:"",type:"submit",variant:"secondary",disabled:e.haveAll}},[e._v("Add Evoker")])],1)],1)}),g=[],v=(a("4de4"),a("caad"),a("2532"),a("1b4c")),A=a("7247"),p={props:["addEvoker","filteredEvokers"],data:function(){return{chars:v,summons:A,selectedChar:1,selectedStage:0,haveAll:!1}},computed:{stageOptions:function(){var e=this,t=[];if(this.filteredChars.length>0){t.push({value:0,text:"Nothing"});for(var a=0;a<=3;a++)t.push({value:a+1,text:"".concat(a,"* SR Summon")});for(var r=3;r<=5;r++)t.push({value:r+2,text:"".concat(r,"* SSR Summon")});for(var n=this.filteredChars.filter((function(t){return t.id===e.selectedChar}))[0].maxStage,o=0;o<=n;o++)t.push({value:o+8,text:"".concat(o,"* SSR Character")})}return t},filteredChars:function(){var e=this;return this.chars.filter((function(t){return!e.filteredEvokers.includes(t.id)}))}},methods:{onEvokerAdded:function(){this.addEvoker(this.selectedChar,this.selectedStage)}},watch:{filteredEvokers:function(e){this.filteredChars.length>0?(this.haveAll=!1,e.includes(this.selectedChar)&&(this.selectedChar=this.filteredChars[0].id)):this.haveAll=!0}}},S=p,b=(a("715a"),Object(s["a"])(S,f,g,!1,null,"7af36ede",null)),h=b.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-table",{attrs:{fields:e.fields,"primary-key":"id",striped:"",responsive:"md",items:e.tableItems,"show-empty":""},scopedSlots:e._u([{key:"cell(currentStage)",fn:function(t){return[e._v(" "+e._s(e.getStageName(t.item.currentStage))+" ")]}},{key:"cell(details)",fn:function(t){return[a("b-button",{staticClass:"mb-1",attrs:{size:"sm",variant:"primary"},on:{click:t.toggleDetails}},[e._v(" "+e._s(t.detailsShowing?"Hide":"Show")+" Details ")])]}},{key:"row-details",fn:function(e){return[a("SummaryTable",{attrs:{currentStage:e.item.currentStage}})]}},{key:"cell(delete)",fn:function(t){return[a("b-button",{staticClass:"mb-1",attrs:{size:"sm",variant:"danger"},on:{click:function(a){return e.removeEvoker(t.item.id)}}},[e._v(" Delete ")])]}}])})],1)},x=[],y=(a("a4d3"),a("e01a"),a("d28b"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",[a("div",[a("b-form",[a("div",{staticClass:"row"},[a("b-form-group",{staticClass:"col-lg-6 col-sm-12",attrs:{id:"char-select-group",label:"Current Stage:","label-for":"select-current"}},[a("b-form-select",{attrs:{id:"select-current",disabled:""},model:{value:e.currentStage,callback:function(t){e.currentStage=t},expression:"currentStage"}},[a("option",{domProps:{value:e.currentStage}},[e._v(e._s(e.getStageName(e.currentStage)))])])],1),a("b-form-group",{staticClass:"col-lg-6 col-sm-12",attrs:{id:"stage-select-group",label:"Target Stage:","label-for":"select-target"}},[a("b-form-select",{attrs:{id:"select-target",options:e.stageOptions},model:{value:e.targetStage,callback:function(t){e.targetStage=t},expression:"targetStage"}})],1)],1),a("b-button",{attrs:{block:"",type:"submit",variant:"secondary"}},[e._v("Add Evoker")])],1)],1)])}),E=[],C={name:"SummaryTable",props:["currentStage"],data:function(){return{targetStage:Math.max(this.currentStage+1,13)}},methods:{getStageName:function(e){var t;return t=0===e?"Nothing":e<5?"".concat(e-1,"* SR Summon"):e<8?"".concat(e-2,"* SSR Summon"):e<14?"".concat(e-8,"* SSR Character"):"Unknown",t}}},T=C,j=Object(s["a"])(T,y,E,!1,null,"ea97d7b8",null),I=j.exports,O={name:"EvokerTable",props:["evokerList","removeEvoker"],components:{SummaryTable:I},data:function(){return{fields:[{key:"name",label:"Evoker Name"},{key:"summonName",label:"Summon Name"},{key:"currentStage",label:"Current Stage"},{key:"details"},{key:"delete"}],chars:v,summons:A}},computed:{tableItems:function(){var e=this,t=[],a=!0,r=!1,n=void 0;try{for(var o,s=function(){var a=o.value,r={};r.id=a.id;var n=e.chars.filter((function(e){return e.id===r.id}))[0];r.name=n.name;var s=e.summons.filter((function(e){return e.id===n.summonId}))[0];r.summonName=s.name,r.currentStage=a.currentStage,t.push(r)},i=this.evokerList[Symbol.iterator]();!(a=(o=i.next()).done);a=!0)s()}catch(l){r=!0,n=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw n}}return t}},methods:{getStageName:function(e){var t;return t=0===e?"Nothing":e<5?"".concat(e-1,"* SR Summon"):e<8?"".concat(e-2,"* SSR Summon"):e<14?"".concat(e-8,"* SSR Character"):"Unknown",t}}},R=O,W=Object(s["a"])(R,k,x,!1,null,"c1dd1f9a",null),w=W.exports,V={components:{CharSelector:h,EvokerTable:w},data:function(){return{evokers:[]}},methods:{onEvokerAdded:function(e,t){this.evokers.push({id:e,currentStage:t})},onEvokerRemoved:function(e){for(var t=0;t<this.evokers.length;t++)this.evokers[t].id===e&&this.evokers.splice(t,1)}},computed:{filterEvokerList:function(){return this.evokers.map((function(e){return e.id}))}}},B=V,M=Object(s["a"])(B,d,m,!1,null,"862a626a",null),X=M.exports;r["default"].use(u["a"]);var L=[{path:"/",name:"home",component:X}],N=new u["a"]({routes:L}),z=N,U=a("5f5b");a("f9e3"),a("2dd8");r["default"].use(U["a"]),r["default"].config.productionTip=!1,new r["default"]({router:z,render:function(e){return e(c)}}).$mount("#app")},"715a":function(e,t,a){"use strict";var r=a("17a1"),n=a.n(r);n.a},7247:function(e){e.exports=JSON.parse('[{"id":1,"name":"Justice","minStage":0,"maxStage":6},{"id":2,"name":"The Hanged Man","minStage":0,"maxStage":6},{"id":3,"name":"Death","minStage":0,"maxStage":6},{"id":4,"name":"Temperance","minStage":0,"maxStage":6},{"id":5,"name":"The Devil","minStage":0,"maxStage":6},{"id":6,"name":"The Tower","minStage":0,"maxStage":6},{"id":7,"name":"The Star","minStage":0,"maxStage":6},{"id":8,"name":"The Moon","minStage":0,"maxStage":6},{"id":9,"name":"The Sun","minStage":0,"maxStage":6},{"id":10,"name":"Judgement","minStage":0,"maxStage":6}]')},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.21943c1e.js.map