(this["webpackJsonpspacex-react-refactor"]=this["webpackJsonpspacex-react-refactor"]||[]).push([[0],{125:function(A,t,e){"use strict";e.r(t);var c=e(1),n=e(49),a=e.n(n),V=(e(58),e(59),e(6)),i=e(2),o=e(0);function s(){return Object(o.jsxs)("section",{className:"c-start-content-container prim-font j-start-content-container",children:[Object(o.jsx)("div",{className:"c-start-content-header",children:Object(o.jsx)("h1",{children:"SPACEX API"})}),Object(o.jsx)("div",{className:"c-start-project-motivations",children:"SpaceX designs, manufactures and launches advanced rockets and spacecraft.The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."}),Object(o.jsx)(V.b,{className:"c-view-missions-timeline j-start-viewing",to:"catalog",children:"START EXPLORING"})]})}var r=e(19),l=e(20),u=e(53),d=e(52),m=e(14),j=e.n(m);function p(A){return Object(o.jsxs)("div",{children:[Object(o.jsx)("section",{className:"c-main-content-header",children:Object(o.jsx)("p",{className:"prim-front",children:A.sectionTitle.toUpperCase()})}),Object(o.jsxs)("section",{className:"c-main-story",children:[Object(o.jsx)("section",{className:"c-mission-name",children:Object(o.jsx)("p",{children:j()(A.sectionDetails)})}),Object(o.jsx)("section",{className:"c-mission-story",children:Object(o.jsx)("p",{children:j()(A.sectionCaptions)})})]})]})}var b=e(18),f=e.n(b);function h(A){return f.a.get("https://api.spacexdata.com/v3/".concat(A)).then((function(A){return A.data})).catch((function(A){return alert(A)}))}function g(A){return A[Math.floor(Math.random()*A.length)]}function O(A){return A||"(additional info not available)"}var v=function(){function A(t,e){Object(r.a)(this,A),this.elementReference=t,this.imagebg=e}return Object(l.a)(A,[{key:"FadeOut",value:function(){this.elementReference.classList.add("animate-overlay-fadeout")}},{key:"FadeIn",value:function(){this.elementReference.classList.add("animate-overlay-fadein")}},{key:"Transition",value:function(){this.FadeOut();var A=this.elementReference,t=this.imagebg;setTimeout((function(){A.style.background="none",A.classList.remove("animate-overlay-fadeout")}),990),setTimeout((function(){A.classList.add("animate-overlay-fadein"),A.style.background="url('".concat(t,"') 0% 0% / cover"),console.log("url(".concat(t,") 0% 0% / cover"))}),1001),setTimeout((function(){A.classList.remove("animate-overlay-fadein")}),1999)}}]),A}();function x(A){new v(document.querySelector(".content-image-overlay"),g(k[A])).Transition()}function y(A,t){new v(document.querySelector(".content-image-overlay"),t).Transition()}var k={capsules:[],landpads:["https://live.staticflickr.com/4138/35231792310_78192738ec_3k.jpg","https://live.staticflickr.com/4341/36073878143_8aa04b684b_3k.jpg"],info:["https://cdn.vox-cdn.com/thumbor/XM6cF9lk2KslumFtuKEmetGLl3M=/0x0:3000x2000/2070x1164/filters:focal(1260x760:1740x1240):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/62153379/REC_Elon_LedeImage__1_.0.png"],launchpads:["https://live.staticflickr.com/65535/48052269657_f21b232e79_3k.jpg","https://live.staticflickr.com/4505/36984623903_f0e7c4367b_3k.jpg"],rockets:["https://live.staticflickr.com/4654/25254688767_1c6f195789_3k.jpg","https://live.staticflickr.com/4696/40126460511_6d7a260c20_3k.jpg","https://live.staticflickr.com/7834/40628437283_6021ece41b_3k.jpg","https://live.staticflickr.com/65535/48954138902_4913a18600_3k.jpg"],cores:["https://live.staticflickr.com/4471/37388002420_ebd36f661d_3k.jpg"]},w=function(A){Object(u.a)(e,A);var t=Object(d.a)(e);function e(A){var c;return Object(r.a)(this,e),(c=t.call(this,A)).state={locations:["capsules","cores","dragons","history","landpads","launches","launchpads","missions","payloads","rockets","roadster"],progression:{current:0},PreviewContent:{mainDetails:"",mainCaptions:""}},c}return Object(l.a)(e,[{key:"componentDidMount",value:function(){var A=this,t=this.state.locations;console.log(t[t.indexOf(this.props.match.params.id)]),this.props.match.params.id?(h(t[t.indexOf(this.props.match.params.id)]).then((function(t){return A.previewDisplay(t)})).catch((function(A){console.log(A)})),this.setState({progression:{current:t.indexOf(this.props.match.params.id)}})):(h("missions").then((function(t){return A.previewDisplay(t)})).catch((function(A){console.log(A)})),this.setState({progression:{current:7}}))}},{key:"getContentProgression",value:function(A){var t=this,e=this.state,c=e.locations,n=e.progression;e.PreviewContent;if("next"===A)n.current=n.current+1<c.length?n.current+1:0;else{if("info"===A)return n.current=4,h("info");n.current=n.current-1>-1?n.current-1:c.length-1}h(c[n.current]).then((function(A){return t.previewDisplay(A)})).catch((function(A){console.log(A)}))}},{key:"previewDisplay",value:function(A){var t="",e="",c=this.state,n=c.locations,a=c.progression;c.PreviewContent;if("capsules"==n[a.current]){var V=g(A);"CAPSULES",t=" ".concat(V.type," ").concat(V.capsule_serial),e="".concat(O(V.details))}if("cores"==n[a.current]){var i=g(A);"CORES",t="".concat(O(i.core_serial)),e=" ".concat(O(i.details))}if("dragons"==n[a.current]){var o=g(A);"DRAGON",t="".concat(o.name),e=" ".concat(o.description),y(0,o.flickr_images)}if("history"==n[a.current]){var s=g(A),r=new Date(s.event_date_utc).toUTCString();"HISTORY",t="".concat(s.title),e="".concat(s.details," <br>").concat(r)}if("landpads"==n[a.current]){var l=g(A);"LANDING PADS",t="".concat(l.full_name),e=" ".concat(l.details," <br><br> STATUS: ").concat(l.status.toUpperCase()),x(n[a.current])}if("launches"==n[a.current]){var u=g(A);"LAUNCHES",t="".concat(u.mission_name),e=" ".concat(O(u.details)," <br><br> Launched from : ").concat(u.launch_site.site_name_long),u.flickr_images&&y(0,u.flickr_images)}if("launchpads"==n[a.current]){var d=g(A);"LAUNCH PADS",t="".concat(d.name),e="".concat(d.site_name_long,"  <br><br> ").concat(d.details," <br><br> STATUS : ").concat(d.status.toUpperCase()),x(n[a.current])}if("missions"==n[a.current]){var m=g(A);"MISSIONS",t="".concat(m.mission_name),e="Mission ID : ".concat(m.mission_id,"  <br><br> ").concat(m.description," <br><br>")}if("payloads"==n[a.current]){var j=g(A);"PAYLOAD",t="".concat(j.payload_id),e="A commisioned payload of ".concat(j.customers.map((function(A){return"".concat(A)}))," that is manufactured by ").concat(O(j.manufacturer)," delivered into a ").concat(O(j.orbit_params.reference_system)," ").concat(O(j.orbit_params.regime)," orbit.")}if("rockets"==n[a.current]){var p=g(A);"ROCKETS",t=p.rocket_name,e="".concat(p.description," <br><br> First Flight : ").concat(p.first_flight),x(n[a.current])}"roadster"==n[a.current]&&("ROADSTER",t="".concat(A.name),e="".concat(A.details),y(0,A.flickr_images)),this.setState({PreviewContent:{mainDetails:t,mainCaptions:e}})}},{key:"render",value:function(){var A=this,t=this.state,e=t.locations,c=t.progression,n=t.PreviewContent;return Object(o.jsxs)("section",{className:"c-main-content-container prim-font",children:[Object(o.jsxs)("section",{className:"c-navigations prim-font j-navigation",children:[Object(o.jsxs)("section",{className:"nav-prev j-nav-prev",onClick:function(){return A.getContentProgression("prev")},children:[Object(o.jsx)("i",{className:"material-icons rounded",children:"arrow_back_ios"}),"PREV"]}),Object(o.jsxs)("section",{className:"nav-next j-nav-next",onClick:function(){return A.getContentProgression("next")},children:["NEXT",Object(o.jsx)("i",{className:"material-icons rounded",children:"arrow_forward_ios"})]})]}),Object(o.jsxs)("section",{className:"c-main-content j-main-content j-extended-content",children:[Object(o.jsx)(p,{sectionTitle:e[c.current],sectionDetails:n.mainDetails,sectionCaptions:n.mainCaptions}),Object(o.jsx)(V.b,{to:"/more-info/".concat(e[c.current]),style:"roadster"===e[c.current]?{display:"none"}:{display:"block"},children:Object(o.jsxs)("section",{className:"c-view-missions-timeline prim-co","data-moreof":e[c.current],children:["OTHER ",e[c.current].toUpperCase()]})})]})]})}}]),e}(c.Component),E=e(11);function I(A){var t=Object(c.useState)(""),e=Object(E.a)(t,2),n=e[0],a=e[1];return h(A.match.params.id).then((function(t){return function(A,t){var e="",c="",n="";return A.map((function(A){if("capsules"===t&&(c="".concat(A.type," ").concat(A.capsule_serial),n="".concat(O(A.details)," <br><br> Status : ").concat(A.status," <br><br> Original Launch Date : ").concat(A.original_launch)),"cores"===t&&(c="".concat(O(A.core_serial)),n="".concat(O(A.details)," <br><br> Status : ").concat(A.status," <br><br> Original Launch Date : ").concat(O(A.original_launch))),"dragons"===t&&(c="".concat(A.name),n="".concat(A.description," <br><br> Active : ").concat(A.active," <br><br> First Flight: ").concat(A.first_flight)),"history"===t){var a=new Date(A.event_date_utc).toUTCString();c="".concat(A.title),n="".concat(A.details," <br><br> Event Date : ").concat(a)}"landpads"===t&&(c="".concat(A.full_name),n="".concat(A.details," <br><br> Location : ").concat(A.location.name,",").concat(A.location.region," <br><br> Status : ").concat(A.status)),"launches"===t&&(c="".concat(A.mission_name),n="".concat(O(A.details)," <br><br> Launch Year : ").concat(A.launch_year," <br><br> Rocket Used : ").concat(A.rocket.rocket_name," (").concat(A.rocket.rocket_type,")")),"launchpads"===t&&(c="".concat(A.name),n="".concat(A.site_name_long," <br><br> ").concat(A.details," <br><br> Launched Vehicles : ").concat(A.vehicles_launched.join(" , ")," <br><br> Status : ").concat(A.status)),"missions"===t&&(c="".concat(A.mission_name),n="".concat(A.description,"<br><br> Manufacturer/s : ").concat(A.manufacturers.join(", "),"<br><br> Payloads(ID) : ").concat(A.payload_ids.join(" , "))),"payloads"===t&&(c="".concat(A.payload_id),n="Customer/s : ".concat(A.customers,"<br><br> Manufacturer/s : ").concat(O(A.manufacturer),"<br><br> Orbit Parameters <br><br> Reference System: ").concat(O(A.orbit_params.reference_system),"<br> Regime : ").concat(O(A.orbit_params.regime))),"rockets"===t&&(c="".concat(A.rocket_name),n="".concat(A.description," <br><br> First Flight : ").concat(A.first_flight,"<br><br> First Stage Reusability : ").concat(A.first_stage.reusable,"<br> Second Stage Reusability : ").concat(A.second_stage.reusable)),e+='   \n        <section class="c-circle-point-container jcircle">\n                <section class="c-circle-point jcircle-point"></section>\n        </section>\n\n            <section class="c-main-content-extended j-main-content-extended-mission-1">\n                <section class="c-main-story">\n                    <section class="c-mission-name">\n                        '.concat(c,'\n                    </section>\n                    <section class="c-mission-story">\n\n                        ').concat(n,"\n                \n                    </section>\n                </section>\n            </section>")})),e}(t,A.match.params.id)})).then((function(A){return a(A)})).catch((function(A){return alert(A)})),Object(o.jsxs)("section",{class:"view-more-container j-view-more-container",children:[Object(o.jsxs)("section",{class:"c-extended-details-container j-extended-details-container prim-font",children:[Object(o.jsx)("section",{class:"c-circle-point-container jcircle-point",children:Object(o.jsx)("section",{class:"c-line j-line"})}),Object(o.jsx)("section",{className:"c-leadCaption-expanded",children:Object(o.jsxs)("p",{children:[" ",Object(o.jsxs)(V.b,{to:"/catalog/".concat(A.match.params.id),children:[" ",Object(o.jsx)("span",{className:"c-goback-catalog",children:" GO   BACK "})," "]})," >    ",A.match.params.id.toUpperCase()," "]})}),j()(n)]}),Object(o.jsx)("a",{class:"c-icon-rocket-up j-icon-rocket-up",onClick:S})]})}var L=1e3,D=!1;function S(){D=!0,document.querySelector(".j-icon-rocket-up").classList.add("rocket-move"),window.scroll({top:0,left:0,behavior:"smooth"}),setTimeout((function(){document.querySelector(".j-icon-rocket-up")&&(document.querySelector(".j-icon-rocket-up").classList.remove("rocket-move"),document.querySelector(".j-icon-rocket-up").style.display="none",D=!1)}),3e3)}window.onscroll=function(){var A=window.pageYOffset;0===A&&!D&&document.querySelector(".j-icon-rocket-up")&&(document.querySelector(".j-icon-rocket-up").style.display="none"),L>A?document.getElementsByClassName("j-header")[0].style.top="0":(document.getElementsByClassName("j-header")[0].style.top="-100px",document.querySelector(".j-icon-rocket-up")&&(document.querySelector(".j-icon-rocket-up").style.display="block")),L=A};var B=e.p+"static/media/fbicon.6ada2a18.png",C=e.p+"static/media/twicon.7d3d220d.png",P=e.p+"static/media/yticon.23c24b8e.png";function M(){var A=Object(c.useState)(""),t=Object(E.a)(A,2),e=t[0],n=t[1],a=Object(c.useState)(""),V=Object(E.a)(a,2),i=V[0],s=V[1],r=Object(c.useState)(""),l=Object(E.a)(r,2),u=l[0],d=l[1];return Object(c.useEffect)((function(){x("info"),h("info").then((function(A){n("Space Exploration Technologies Corp."),s("Founded by ".concat(A.founder)),d("".concat(A.summary,' <br> <section class="c-links-out">\n                        <a target=\'_blanck\' href="https://www.flickr.com/photos/spacex/"><img src=').concat(B,"></a>\n                        <a target='_blanck' href=\"").concat(A.links.twitter,'"><img src=').concat(C,"></a>\n                        <a target='_blanck' href=\"https://www.youtube.com/user/spacexchannel\"><img src=").concat(P,"></a>\n                    </section>"))}))})),Object(o.jsx)("section",{className:"c-main-content-container prim-font",children:Object(o.jsx)("section",{className:"c-main-content j-main-content j-extended-content",children:Object(o.jsx)(p,{sectionTitle:e,sectionDetails:i,sectionCaptions:u})})})}function T(){return Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/",exact:!0,component:s}),Object(o.jsx)(i.a,{path:"/catalog",exact:!0,component:w}),Object(o.jsx)(i.a,{path:"/catalog/:id",exact:!0,component:w}),Object(o.jsx)(i.a,{path:"/more-info/:id",exact:!0,component:I}),Object(o.jsx)(i.a,{exact:!0,path:"/info",component:M})]})}function R(){return Object(o.jsxs)("section",{id:"h-header",className:"c-header prim-font j-header",children:[Object(o.jsx)("div",{className:"logo-container",children:Object(o.jsx)("img",{src:"data:image/png;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVaU9OCQAAAAAEPT/tc0VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMACXj4V2WBRjXIAAAAASUVORK5CYII=",alt:"",className:"c-spacex-logo"})}),Object(o.jsx)("div",{className:"c-menu-links-container",children:Object(o.jsxs)("ul",{className:"c-menu-links",children:[Object(o.jsx)(V.b,{to:"/",children:Object(o.jsx)("li",{className:"c-home-link j-home-link",children:"HOME"})}),Object(o.jsx)(V.b,{to:"/catalog",children:Object(o.jsx)("li",{className:"c-info-link j-info-link",children:"CATALOG"})}),Object(o.jsx)(V.b,{to:"/info",children:Object(o.jsx)("li",{className:"c-search-link prim-color",children:Object(o.jsx)("a",{target:"_blank",children:"INFO"})})})]})})]})}var X=function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)(V.a,{children:[Object(o.jsx)(R,{}),Object(o.jsx)(T,{})]}),Object(o.jsx)("div",{class:"content-image-overlay"})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(o.jsx)(X,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()}))},58:function(A,t,e){},59:function(A,t,e){},89:function(A,t){}},[[125,1,2]]]);
//# sourceMappingURL=main.80397516.chunk.js.map