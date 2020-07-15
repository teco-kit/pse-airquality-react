(this["webpackJsonppse-airquality-react"]=this["webpackJsonppse-airquality-react"]||[]).push([[0],{120:function(e,t,n){e.exports=n(141)},125:function(e,t,n){},127:function(e,t,n){},134:function(e,t,n){var a={"./MockFeature":88,"./MockFeature.json":88};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=134},141:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(12),o=n.n(r);n(125),n(126),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(106),l=n(192),u=n(105),c=n.n(u),h=n(104),g=n.n(h),v=n(6),d=n(7),f=n(15),m=n(14),p=(n(127),function(){function e(t,n){Object(v.a)(this,e),this.center=void 0,this.zoom=void 0,this.center=t,this.zoom=n,this.zoom<0&&(this.zoom=0)}return Object(d.a)(e,[{key:"getCenter",value:function(){return this.center}},{key:"getZoom",value:function(){return this.zoom}},{key:"getRadius",value:function(){return this.zoom}},{key:"setCenter",value:function(e){this.center=e}},{key:"setZoom",value:function(e){this.zoom=e,this.zoom<0&&(this.zoom=0)}}]),e}()),b=n(202),y=n(203),k=n(176),O=n(204),w=n(197),E=function(){function e(t,n){if(Object(v.a)(this,e),this.latitude=void 0,this.longitude=void 0,Math.abs(t)>=90||Math.abs(n)>=180)throw new Error("Not valid coordinates: "+t+"\xb0N, "+n+"\xb0O");this.latitude=t,this.longitude=n}return Object(d.a)(e,[{key:"getCoordinates",value:function(){return{lat:this.latitude,lng:this.longitude}}},{key:"getLatitude",value:function(){return this.latitude}},{key:"getLongitude",value:function(){return this.longitude}},{key:"getString",value:function(){return(Math.round(100*this.latitude)/100).toString()+" \xb0N "+Math.round(100*this.longitude)/100+" \xb0O"}}]),e}(),C=n(174),S=n(72),j=n(175),I=n(91),F=function(){function e(){Object(v.a)(this,e),this.selectedLangId=void 0,this.languages=void 0,this.selectedLang=void 0,this.selectedLangId="de-de",this.languages=I.a,this.selectedLang=this.languages[0]}return Object(d.a)(e,[{key:"getText",value:function(e){var t=this.selectedLang.strings[e];return""===t||null==t?(alert("There is no string with id: "+e+" in "+this.selectedLang.name+"."),"STRING MISSING"):t}},{key:"getSelectedLanguage",value:function(){return this.selectedLang.name}},{key:"getSelectedLanguageId",value:function(){return this.selectedLang.id}},{key:"changeLanguage",value:function(e){var t=this.languages.find((function(t){return t.id===e}));void 0!==t&&(this.selectedLang=t,this.selectedLangId=e,localStorage.setItem("language",this.selectedLangId))}},{key:"getAvailabeleLanguages",value:function(){var e=new Map;return this.languages.forEach((function(t){e.set(t.id,t.name)})),e}}],[{key:"getInstance",value:function(){if(!this.languageInstance){this.languageInstance=new e;var t=localStorage.getItem("language");t&&this.languageInstance.changeLanguage(t)}return this.languageInstance}}]),e}();F.languageInstance=void 0;var x=n(55),M=n(172),P=n(198),N=n(201),D=n(200),T=n(95),V=n.n(T),A=Object(M.a)((function(e){return Object(P.a)({typography:{padding:e.spacing(2)},icon:{background:e.palette.primary.main,marginBottom:"10px"}})}));function H(e){var t,n,a=A(),r=i.a.useState(null),o=Object(x.a)(r,2),s=o[0],l=o[1],u=Boolean(s),c=u?"simple-popover":void 0;return i.a.createElement("div",null,i.a.createElement(D.a,{className:a.icon,"aria-describedby":c,onClick:function(e){l(e.currentTarget)},style:{visibility:e.feature?"visible":"hidden"}},i.a.createElement(V.a,null)),i.a.createElement(N.a,{id:c,open:u,anchorEl:s,onClose:function(){l(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},i.a.createElement(S.a,{className:a.typography},null!==(t=null===(n=e.feature)||void 0===n?void 0:n.getDescription())&&void 0!==t?t:"")))}var R=F.getInstance(),B=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"openDetails",value:function(){window.location.href="detail/"+this.props.lastObservation.getObservationStation().getId()}},{key:"render",value:function(){var e=this,t=this.props.lastObservation.getObservationStation();return i.a.createElement(C.a,{alignContent:"center",direction:"column",spacing:5},i.a.createElement(S.a,{variant:"h4",color:"secondary"},t.getName()),i.a.createElement(S.a,{variant:"subtitle1",color:"textSecondary"},t.getPosition().getString()),i.a.createElement(S.a,{variant:"h6"},i.a.createElement(C.a,{container:!0,direction:"row",spacing:2},i.a.createElement(C.a,{item:!0,xs:!0},i.a.createElement(H,{feature:this.props.lastObservation.getFeature()})),i.a.createElement(C.a,{item:!0,xs:!0},this.props.lastObservation.getFeature().getName()+":"),i.a.createElement(C.a,{item:!0,xs:!0},i.a.createElement(S.a,{variant:"h6",display:"inline",color:"primary"},this.props.lastObservation.getValue()," ",this.props.lastObservation.getFeature().getUnitOfMeasurement())))),i.a.createElement(j.a,{onClick:function(){return e.openDetails()},variant:"contained",color:"primary",style:{minWidth:"250px"}},R.getText("stationInfoButton")))}}]),n}(i.a.Component);n(132);var z=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).nextViewport=void 0,a.lock=void 0,a.lock=!1,a.nextViewport=null,a.state={viewport:a.props.viewport},a}return Object(d.a)(n,[{key:"getIconFromMapPin",value:function(e){return L.IconMaterial.icon({icon:"",iconColor:"",markerColor:e.getColor().getHex(),outlineColor:"black",outlineWidth:1})}},{key:"onViewportChange",value:function(e){var t=this;this.nextViewport=e,this.lock||(this.lock=!0,setTimeout((function(){return t.updateViewport(t.nextViewport)}),250))}},{key:"updateViewport",value:function(e){var t=this.viewportLeafletToModel(e);this.props.onViewportChange(t),this.setState({viewport:t}),this.lock=!1}},{key:"viewportLeafletToModel",value:function(e){var t,n,a,i,r;return new p(new E(null!==(t=null===(n=e.center)||void 0===n?void 0:n[0])&&void 0!==t?t:0,null!==(a=null===(i=e.center)||void 0===i?void 0:i[1])&&void 0!==a?a:0),null!==(r=e.zoom)&&void 0!==r?r:0)}},{key:"getPositionsFromPolygon",value:function(e){return e.getStations().map((function(e){return e.getPosition().getCoordinates()}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(b.a,{center:this.state.viewport.getCenter().getCoordinates(),zoom:this.state.viewport.getZoom(),onViewportChange:function(t){return e.onViewportChange(t)}},i.a.createElement(y.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),this.props.pins.map((function(t){return i.a.createElement(k.a,{position:t.getPosition().getCoordinates(),icon:e.getIconFromMapPin(t)},i.a.createElement(O.a,{onOpen:function(){return e.props.handlePopup(t)}},e.props.lastObservation?i.a.createElement(B,{lastObservation:e.props.lastObservation}):i.a.createElement("p",null,"No station selected")))})),this.props.polygons.map((function(t){return i.a.createElement(w.a,{positions:e.getPositionsFromPolygon(t),color:t.getColor().getHex()})}))))}}]),n}(i.a.Component),q=n(43),U=n.n(q),W=n(59),J=function(){function e(t,n,a,i){Object(v.a)(this,e),this.id=void 0,this.position=void 0,this.value=void 0,this.color=void 0,this.id=t,this.position=n,this.value=a,this.color=i}return Object(d.a)(e,[{key:"getPosition",value:function(){return this.position}},{key:"setPosition",value:function(e){this.position=e}},{key:"getValue",value:function(){return this.value}},{key:"setValue",value:function(e){this.value=e}},{key:"getId",value:function(){return this.id}},{key:"getColor",value:function(){return this.color}}]),e}(),G=function(){function e(){Object(v.a)(this,e)}return Object(d.a)(e,[{key:"buildMapPin",value:function(e,t){return new J(e.getId(),e.getPosition(),t,this.getScale().getColor(t))}}]),e}(),Z=function(){function e(t,n){Object(v.a)(this,e),this.stations=void 0,this.color=void 0,this.stations=t,this.color=n}return Object(d.a)(e,[{key:"getColor",value:function(){return this.color}},{key:"setColor",value:function(e){this.color=e}},{key:"getStations",value:function(){return this.stations}}]),e}(),_=function(){function e(t,n,a){if(Object(v.a)(this,e),this.r=void 0,this.g=void 0,this.b=void 0,t=Math.floor(t),n=Math.floor(n),a=Math.floor(a),t<0||t>255||n<0||n>255||a<0||a>255)throw new TypeError("r, g, b have to be an integer in [0, 255], are"+t+" "+n+" "+a);this.r=t,this.g=n,this.b=a}return Object(d.a)(e,[{key:"getRGB",value:function(){return{r:this.r,g:this.g,b:this.b}}},{key:"getHex",value:function(){return"#"+this.toHex(this.r)+this.toHex(this.g)+this.toHex(this.b)}},{key:"toHex",value:function(e){if(e<0||e>255)return this.toHex(0);var t=e.toString(16).toUpperCase();return t.length<2&&(t="0"+t),t}}],[{key:"getColorFromHex",value:function(t){var n=/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/g.exec(t);if(!n)throw new TypeError("hex has to be in format #RRGGBB");return new e(parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16))}}]),e}(),K=function(){function e(t,n,a,i,r){Object(v.a)(this,e),this.id=void 0,this.name=void 0,this.description=void 0,this.position=void 0,this.availableFeatures=void 0,this.id=t,this.name=n,this.description=a,this.position=i,this.availableFeatures=r}return Object(d.a)(e,[{key:"getId",value:function(){return this.id}},{key:"getName",value:function(){return this.name}},{key:"getDescription",value:function(){return this.description}},{key:"getPosition",value:function(){return this.position}},{key:"getFeatures",value:function(){return this.availableFeatures}},{key:"getDiagramms",value:function(){}},{key:"hasFeature",value:function(e){for(var t=!1,n=this.availableFeatures.length,a=0;a<n;a++)e===this.availableFeatures[a]&&(t=!0);return t}}]),e}(),Q=function(){function e(t,n,a,i){Object(v.a)(this,e),this.observationStation=void 0,this.feature=void 0,this.value=void 0,this.timestamp=void 0,this.observationStation=t,this.feature=n,this.value=a,this.timestamp=i}return Object(d.a)(e,[{key:"getObservationStation",value:function(){return this.observationStation}},{key:"getFeature",value:function(){return this.feature}},{key:"getValue",value:function(){return this.value}},{key:"getTimeStamp",value:function(){return this.timestamp}}]),e}(),$=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this)).feature=void 0,a.feature=e,a}return Object(d.a)(n,[{key:"getPins",value:function(e){return[new J(e.getCenter().getString(),e.getCenter(),10,new _(255*Math.random(),255*Math.random(),255*Math.random()))]}},{key:"getLatestObservationMock",value:function(){var e=Object(W.a)(U.a.mark((function e(t,n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Q(t,n,50*Math.random(),new Date(Date.now())));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getPolygonColor",value:function(){var e=Object(W.a)(U.a.mark((function e(t){var n,a,i,r,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.getStations(),a=[],i=0;case 3:if(!(i<n.length)){e.next=11;break}return e.next=6,this.getLatestObservationMock(n[i],this.feature);case 6:r=e.sent,a.push(r.getValue());case 8:i++,e.next=3;break;case 11:return o=a.reduce((function(e,t){return e+t}),0)/a.length,e.abrupt("return",this.getScale().getColor(o));case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPolygons",value:function(e){return[new Z([new K("1","1","",new E(49,8.4),[]),new K("1","1","",new E(49,8.5),[]),new K("1","1","",new E(50,8.45),[])],new _(0,0,0))]}},{key:"getScale",value:function(){return this.getFeatures()[0].getRelatedScale()}},{key:"getFeatures",value:function(){return[this.feature]}},{key:"setFeatures",value:function(e){0!==e.length&&(this.feature=e[0])}}]),n}(G),X=function(){function e(t,n){Object(v.a)(this,e),this.linearTransition=void 0,this.dict=void 0,this.linearTransition=t,this.dict=n,this.sortOnKeys()}return Object(d.a)(e,[{key:"getColor",value:function(e){var t=Object.keys(this.dict);if(0===t.length)return _.getColorFromHex("#AAAAAA");for(var n=0;n<t.length-1;n++)if(Number(t[n])<=e&&Number(t[n+1])>e)return this.linearTransition?this.getLinearTransition(n,e):_.getColorFromHex(this.dict[Number(t[n])]);return _.getColorFromHex(this.dict[Number(t[t.length-1])])}},{key:"sortOnKeys",value:function(){for(var e=Object.keys(this.dict),t=[],n=0;n<e.length;n++)t.push(Number(e[n]));t.sort();for(var a={},i=0;i<e.length;i++)a[t[i]]=this.dict[t[i]];this.dict=a}},{key:"getLinearTransition",value:function(e,t){var n=[Number(Object.keys(this.dict)[e]),""];n[1]=this.dict[n[0]];var a=[Number(Object.keys(this.dict)[e+1]),""];a[1]=this.dict[a[0]];var i=_.getColorFromHex(n[1]).getRGB(),r=_.getColorFromHex(a[1]).getRGB(),o=this.interpolate([n[0],i.r],[a[0],r.r],t),s=this.interpolate([n[0],i.g],[a[0],r.g],t),l=this.interpolate([n[0],i.b],[a[0],r.b],t);return new _(o,s,l)}},{key:"interpolate",value:function(e,t,n){var a=t[0]-e[0];return e[1]*((a-n+e[0])/a)+t[1]*((a-t[0]+n)/a)}}]),e}(),Y=(F.getInstance(),function(){function e(t,n,a,i,r,o,s,l){Object(v.a)(this,e),this.id=void 0,this.nameId=void 0,this.descriptionId=void 0,this.scale=void 0,this.relatedWeblinkId=void 0,this.limit=void 0,this.unitOfMeasurement=void 0,this.drawableDiagramIds=void 0,this.id=t,this.nameId=n,this.descriptionId=a,this.scale=i,this.relatedWeblinkId=r,this.limit=o,this.unitOfMeasurement=s,this.drawableDiagramIds=l}return Object(d.a)(e,[{key:"getId",value:function(){return this.id}},{key:"getName",value:function(){return this.nameId}},{key:"getDescription",value:function(){return this.descriptionId}},{key:"getRelatedScale",value:function(){return this.scale}},{key:"getRelatedWeblink",value:function(){return this.relatedWeblinkId}},{key:"getDrawableDiagrams",value:function(e){return[]}},{key:"getLimit",value:function(){return this.limit}},{key:"getUnitOfMeasurement",value:function(){return this.unitOfMeasurement}},{key:"isLimitExceeded",value:function(e){return e.getValue()>this.limit}}]),e}()),ee=function(){function e(){Object(v.a)(this,e)}return Object(d.a)(e,null,[{key:"randomColor",value:function(){return new _(255*Math.random(),255*Math.random(),255*Math.random())}},{key:"mockFeature",value:function(){for(var e={},t=0;t<5;t++){var n=this.randomColor().getHex();e[Math.floor(100*Math.random())]=n}var a=new X(!0,e);return new Y("MockFeature","nameId","descId",a,"weblink",100,"uoM",[])}},{key:"mockStation",value:function(t){var n=Math.floor(1e4*Math.random()).toString(),a=new K(n,"mockName","mockDesc",new E(t.getLatitude()+6*Math.random()-3,t.getLongitude()+6*Math.random()-3),[]);return e.stations[a.getId()]=a,a}},{key:"mockObservations",value:function(e){for(var t=Math.floor(9*Math.random())+2,n=[],a=0;a<t;a++)n.push(new Q(this.mockStation(e),this.mockFeature(),100*Math.random(),new Date(Date.now())));return n}},{key:"getLatestObservations",value:function(e,t,n){return this.mockObservations(e)}},{key:"getLatestObservation",value:function(e,t){return new Q(e,t,100*Math.random(),new Date(Date.now()))}},{key:"getObservations",value:function(e,t,n,a,i){throw new Error("Not implemented.")}},{key:"getObservationStations",value:function(e,t){for(var n=[],a=0;a<7;a++)n.push(this.mockStation(e));return n}},{key:"getStation",value:function(t){return e.stations[t]}}]),e}();ee.stations={};var te=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this)).selectedFeature=void 0,a.scale=void 0,a.selectedFeature=e,a.scale=a.selectedFeature.getRelatedScale(),a}return Object(d.a)(n,[{key:"buildMapPin",value:function(e,t){return new J(e.getId(),e.getPosition(),t,this.scale.getColor(t))}},{key:"buildNearScale",value:function(e){for(var t=Math.min.apply(Math,e.map((function(e){return e.getValue()}))),n=Math.max.apply(Math,e.map((function(e){return e.getValue()}))),a={},i=0;i<10;i++){var r=Math.floor(t+i/10*(n-t)),o=this.selectedFeature.getLimit()*(i/10);a[r]=this.selectedFeature.getRelatedScale().getColor(o).getHex()}return new X(!0,a)}},{key:"getPins",value:function(e){var t=this,n=ee.getObservationStations(e.getCenter(),e.getZoom()),a=ee.getLatestObservations(e.getCenter(),e.getZoom(),this.selectedFeature);this.scale=this.buildNearScale(a);var i=[];return n.forEach((function(e){i.push(t.buildMapPin(e,Math.floor(100*Math.random())))})),i}},{key:"getPolygons",value:function(e){return[]}},{key:"getScale",value:function(){return this.scale}},{key:"getFeatures",value:function(){return[this.selectedFeature]}}]),n}(G),ne=function(){function e(t){Object(v.a)(this,e),this.path=void 0,this.context=void 0,this.features=void 0,this.path=t,this.features={},this.context=n(134)}return Object(d.a)(e,[{key:"addFeature",value:function(e){if(e){var t=new Y(e.id,e.nameId,e.descriptionId,new X(!0,e.defaultScale),e.webLinkId,e.limit,e.unitOfMeasurement,e.diagrams);this.features[t.getId()]=t}}},{key:"getFeature",value:function(e){if(Object.keys(this.features).includes(e))return this.features[e];var t=this.getFeatureById(e);if(t)return this.features[e]=t,t;throw new Error("Failed at reading definition for "+e)}},{key:"getFeatureById",value:function(e){var t=this.context("./"+e+".json");if(!t)return null;var n=t;return new Y(n.id,n.nameId,n.descriptionId,new X(!0,n.defaultScale),n.webLinkId,n.limit,n.unitOfMeasurement,n.diagrams)}}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new e(this.PATH)),this.instance}}]),e}();ne.PATH="../Jsons/",ne.instance=null;var ae=n(78),ie=n.n(ae),re=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this)).selectedFeature=void 0,a.selectedFeature=e,a}return Object(d.a)(n,[{key:"getPins",value:function(e){return[]}},{key:"getPolygons",value:function(e){var t=this,n=ee.getObservationStations(e.getCenter(),e.getRadius()),a={},i=[];n.forEach((function(e){var n=ee.getLatestObservation(e,t.selectedFeature),r=e.getPosition().getCoordinates();i.push(new ie.a.Point(r.lat,r.lng)),a[e.getPosition().getString()]=n}));var r=ie.a.triangulate(i),o=[];return r.forEach((function(e){var n=a[new E(e.p1.x,e.p1.y).getString()],i=a[new E(e.p2.x,e.p2.y).getString()],r=a[new E(e.p3.x,e.p3.y).getString()],s=(n.getValue()+i.getValue()+r.getValue())/3;o.push(new Z([n.getObservationStation(),i.getObservationStation(),r.getObservationStation()],t.getScale().getColor(s)))})),o}},{key:"getScale",value:function(){return this.selectedFeature.getRelatedScale()}},{key:"getFeatures",value:function(){return[this.selectedFeature]}}]),n}(G),oe=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this)).selectedFeature=void 0,a.selectedFeature=e,a}return Object(d.a)(n,[{key:"getPins",value:function(e){var t=this;return ee.getObservationStations(e.getCenter(),0).map((function(e){return t.buildMapPin(e,100*Math.random())}))}},{key:"getPolygons",value:function(e){return[]}},{key:"getScale",value:function(){return this.selectedFeature.getRelatedScale()}},{key:"getFeatures",value:function(){return[this.selectedFeature]}}]),n}(G),se=new oe(ne.getInstance().getFeature("MockFeature")),le=new p(new E(49,8.4),7),ue=function(){function e(){Object(v.a)(this,e)}return Object(d.a)(e,null,[{key:"save",value:function(e,t){localStorage.setItem("mapconf",JSON.stringify({type:e.constructor.name,feature:e.getFeatures()[0].getId(),view:t}))}},{key:"load",value:function(){var e=localStorage.getItem("mapconf");if(e&&JSON.parse(e)){var t=JSON.parse(e),n=new p(new E(t.view.center.latitude,t.view.center.longitude),t.view.zoom),a=ne.getInstance().getFeature(t.feature);return"NearConfiguration"===t.type?[new te(a),n]:"PolygonConfiguration"===t.type?[new re(a),n]:"StationConfiguration"===t.type?[new oe(a),n]:[new $(a),n]}return[se,le]}}]),e}(),ce=function(){function e(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(Object(v.a)(this,e),this.config=void 0,this.viewport=void 0,this.DEFAULT_POSITION=new E(49,8.4),this.DEFAULT_ZOOM=5,t){var n=ue.load();this.config=n[0],this.viewport=n[1]}else this.viewport=new p(this.DEFAULT_POSITION,this.DEFAULT_ZOOM),this.config=new re(ee.mockFeature());if(0===this.config.getFeatures().length)throw Error("Invalid MapConfiguration")}return Object(d.a)(e,[{key:"handlePopup",value:function(e){var t=ee.getStation(e.getId());return ee.getLatestObservation(t,this.config.getFeatures()[0])}},{key:"save",value:function(){ue.save(this.config,this.viewport)}},{key:"getViewport",value:function(){return this.viewport}},{key:"handleViewportChange",value:function(e){this.viewport=e,this.save()}},{key:"getPins",value:function(){return this.config.getPins(this.viewport)}},{key:"getPolygons",value:function(){return this.config.getPolygons(this.viewport)}},{key:"getScale",value:function(){return this.config.getScale()}},{key:"changeFeature",value:function(e){}},{key:"onConfigurationChange",value:function(e){this.config=e,this.save()}},{key:"search",value:function(){var e=Object(W.a)(U.a.mark((function e(t){var n,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://nominatim.openstreetmap.org/search?format=json&q="+encodeURIComponent(t));case 4:return n=e.sent,e.next=7,n.json();case 7:if(0!==(a=e.sent).length){e.next=10;break}return e.abrupt("return");case 10:this.updateCurrentPosition(new E(a[0].lat,a[0].lon));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateCurrentPosition",value:function(e){this.viewport.setCenter(e),console.log(e)}}]),e}(),he=n(177),ge=n(178),ve=n(179),de=n(205),fe=n(196),me=n(183),pe=n(97),be=n.n(pe),ye=Object(M.a)((function(e){return Object(P.a)({root:{background:e.palette.primary.main},formControl:{margin:e.spacing(1),minWidth:120}})}));function ke(e){var t,n=ye(),r=Object(a.useState)(null),o=Object(x.a)(r,2),s=o[0],l=o[1],u=Object(a.useState)(ne.getInstance().getFeature("MockFeature")),c=Object(x.a)(u,2),h=c[0],g=c[1],v=Object(a.useState)(null),d=Object(x.a)(v,2),f=d[0],m=d[1],p=function(t,n){switch(console.log(t),m(t),t){case"TestConfiguration":var a=new $(n);e.onConfigurationChange(a);break;case"NearConfiguration":var i=new te(n);e.onConfigurationChange(i);break;case"PolygonConfiguration":var r=new re(n);e.onConfigurationChange(r);break;case"StationConfiguration":var o=new oe(n);e.onConfigurationChange(o)}};return i.a.createElement("div",null,i.a.createElement(D.a,{className:n.root,onClick:function(e){l(s?null:e.currentTarget)}},i.a.createElement(be.a,null)),s?i.a.createElement(he.a,{variant:"outlined"},i.a.createElement(ge.a,null,i.a.createElement(ve.a,{className:n.formControl},i.a.createElement(de.a,null,"Feature"),i.a.createElement(fe.a,{onChange:function(e){if(g(ne.getInstance().getFeature(e.target.value)),h){if(!f)throw new Error("No config selected");p(f,h)}},value:null!==(t=null===h||void 0===h?void 0:h.getName())&&void 0!==t?t:""},i.a.createElement(me.a,null,"Features here when"),i.a.createElement(me.a,null,"FeatureProvider getFeatures()"))),i.a.createElement(ve.a,{className:n.formControl},i.a.createElement(de.a,null,"Style"),i.a.createElement(fe.a,{onChange:function(e){h&&p(e.target.value,h)},value:null!==f&&void 0!==f?f:"ERROR"},i.a.createElement(me.a,{value:"PolygonConfiguration"},"PolygonConfiguration"),i.a.createElement(me.a,{value:"StationConfiguration"},"StationConfiguration"),i.a.createElement(me.a,{value:"NearConfiguration"},"NearConfiguration"))))):"")}var Oe=n(109),we=n(207),Ee=n(184),Ce=n(185),Se=n(98),je=n.n(Se),Ie=n(99),Fe=n.n(Ie),xe=n(143),Me=F.getInstance(),Pe=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).state={searchTerm:"",locationEnabled:!0},"geolocation"in navigator&&navigator.permissions.query({name:"geolocation"}).then((function(e){"denied"===e.state&&a.setState({locationEnabled:!1})})),a}return Object(d.a)(n,[{key:"locationClick",value:function(){var e=this;"geolocation"in navigator?(console.log("Available"),navigator.geolocation.getCurrentPosition((function(t){var n=new E(t.coords.latitude,t.coords.longitude);e.props.updatePosition(n),e.setState({locationEnabled:!0})}),(function(t){console.log("Location denied."),e.setState({locationEnabled:!1})}))):(console.log("Not Available"),this.setState({locationEnabled:!1}))}},{key:"render",value:function(){var e=this;return i.a.createElement(Oe.a,{className:this.props.classes.root},i.a.createElement(we.a,{type:"search",variant:"outlined",className:this.props.classes.input,label:Me.getText("search"),onKeyPress:function(t){"Enter"===t.key&&e.props.onSearch(e.state.searchTerm)},onChange:function(t){e.setState({searchTerm:t.target.value})},value:this.state.searchTerm}),i.a.createElement(Ee.a,{onClick:function(){return e.locationClick()},className:this.props.classes.iconButton},i.a.createElement(je.a,null)),i.a.createElement(Ce.a,{orientation:"vertical",className:this.props.classes.divider}),i.a.createElement(Ee.a,{color:"primary",onClick:function(){return e.locationClick()},className:this.props.classes.iconButton,disabled:!this.state.locationEnabled},i.a.createElement(Fe.a,null)))}}]),n}(i.a.Component),Le=Object(xe.a)((function(e){return{root:{margin:"5px 5px",padding:"2px 4px",display:"flex",alignItems:"center",width:"100%",maxWidth:"500px"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}))(Pe),Ne=n(193),De=Object(M.a)((function(e){return Object(P.a)({box:{padding:e.spacing(1),width:"50px",backgroundColor:"white"}})}));function Te(e,t,n){for(var a="linear-gradient(0deg,",i=0;i<10;i++)a=a+e.getColor(t+i/10*(n-t)).getHex()+" "+10*i+"%, ";return{background:a=a.slice(0,-2)+")",height:"80px",width:"40px"}}var Ve=function(e){var t=De();return i.a.createElement(Ne.a,{className:t.box,border:1},i.a.createElement(C.a,{container:!0,direction:"column"},i.a.createElement(S.a,{variant:"body2"},e.max),i.a.createElement(Ne.a,{style:Te(e.scale,e.min,e.max)}),i.a.createElement(S.a,{variant:"body2"},e.min)))},Ae=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).mapController=void 0,a.mapController=new ce,a.state={selectedStation:null,lastObservation:null,pins:a.mapController.getPins(),polygons:a.mapController.getPolygons(),viewport:a.mapController.getViewport()},a}return Object(d.a)(n,[{key:"selectObservation",value:function(e){this.setState({selectedStation:e.getObservationStation(),lastObservation:e})}},{key:"update",value:function(){this.setState({pins:this.mapController.getPins(),polygons:this.mapController.getPolygons()})}},{key:"getValueAt",value:function(e,t){throw Error("Not implemented.")}},{key:"onViewportChange",value:function(e){this.mapController.handleViewportChange(e),this.setState({viewport:e,pins:this.mapController.getPins(),polygons:this.mapController.getPolygons()})}},{key:"onStationSelected",value:function(e){var t=this.mapController.handlePopup(e);this.selectObservation(t)}},{key:"onSearch",value:function(e){this.mapController.search(e),this.setState({selectedStation:this.state.selectedStation})}},{key:"getMin",value:function(){var e=Math.min.apply(Math,this.state.pins.map((function(e){return e.getValue()})));return isFinite(e)||(e=0),e}},{key:"getMax",value:function(){var e=Math.max.apply(Math,this.state.pins.map((function(e){return e.getValue()})));return isFinite(e)||(e=100),e}},{key:"render",value:function(){var e=this,t=this.getMin(),n=this.getMax();return i.a.createElement(Ne.a,null,i.a.createElement(Le,{onSearch:function(t){return e.onSearch(t)},updatePosition:function(t){var n=e.state.viewport;n.setCenter(t),e.onViewportChange(n)}}),i.a.createElement(z,{viewport:this.state.viewport,onViewportChange:function(t){e.onViewportChange(t)},handlePopup:function(t){return e.onStationSelected(t)},pins:this.state.pins,polygons:this.state.polygons,lastObservation:this.state.lastObservation}),i.a.createElement(ke,{onConfigurationChange:function(t){e.mapController.onConfigurationChange(t),e.update()}}),i.a.createElement(Ne.a,{zIndex:1e3,style:{position:"absolute",bottom:"5%",right:"5%"}},i.a.createElement(Ve,{min:t,max:n,scale:this.mapController.getScale()})))}}]),n}(i.a.Component),He=Object(xe.a)((function(e){return{}}))(Ae),Re=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).code=void 0,a.message=void 0,a.code=a.props.code,a.message=a.props.message,a}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement(a.Fragment,null,i.a.createElement("h1",null,"Error"),i.a.createElement("h2",null,this.code),i.a.createElement("p",null,this.message))}}]),n}(i.a.Component),Be=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).observationStationId=void 0,a.observationStationId=a.props.match.params.id,a}return Object(d.a)(n,[{key:"observationStationExists",value:function(e){return!0}},{key:"render",value:function(){if(this.observationStationExists(this.observationStationId))return i.a.createElement(a.Fragment,null,i.a.createElement("h1",null,"Detail Page"),i.a.createElement("p",null," von Messstation mit der id: ",this.props.match.params.id));var e="There is no observation station with the id: "+this.observationStationId;return i.a.createElement(a.Fragment,null,i.a.createElement(Re,{code:404,message:e}))}}]),n}(i.a.Component),ze=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(v.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement(a.Fragment,null,i.a.createElement("h1",null,"AboutPage"))}}]),n}(i.a.Component),qe=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(v.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement("h1",null,"Privacy Policy Page")}}]),n}(i.a.Component),Ue=n(46),We=n(188),Je=n(189),Ge=n(194),Ze=n(182),_e=n(145),Ke=n(190),Qe=n(191),$e=n(100),Xe=n.n($e),Ye=n(102),et=n.n(Ye),tt=n(101),nt=n.n(tt),at=n(103),it=n.n(at),rt=n(107),ot=n(186),st=n(187),lt=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).availableLanguages=void 0,a.ref=void 0,a.language=void 0,a.language=e.language,a.state={selectedLang:a.language.getSelectedLanguage(),anchorEl:null},a.handleClick=a.handleClick.bind(Object(Ue.a)(a)),a.handleClose=a.handleClose.bind(Object(Ue.a)(a)),a.availableLanguages=a.language.getAvailabeleLanguages(),a}return Object(d.a)(n,[{key:"isSelectedLang",value:function(e){return!1}},{key:"handleClick",value:function(e){this.setState({anchorEl:e.currentTarget})}},{key:"handleClose",value:function(){this.setState({anchorEl:null})}},{key:"handleMenuItemClick",value:function(e,t){this.language.changeLanguage(t),window.location.reload(),this.setState({anchorEl:null,selectedLang:this.language.getSelectedLanguage()})}},{key:"langList",value:function(){var e=this,t=[];return this.availableLanguages.forEach((function(n,a){t.push(i.a.createElement(me.a,{onClick:function(t){return e.handleMenuItemClick(t,a)},selected:a===e.language.getSelectedLanguageId()},n))})),t}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(j.a,{onClick:this.handleClick,color:"inherit",startIcon:i.a.createElement(ot.a,null),endIcon:i.a.createElement(st.a,null),"aria-controls":"simple-menu","aria-haspopup":"true"},this.state.selectedLang),i.a.createElement(rt.a,{open:Boolean(this.state.anchorEl),anchorEl:this.state.anchorEl,onClose:this.handleClose},this.langList()))}}]),n}(i.a.Component),ut=n(54),ct=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).language=void 0,a.language=e.language,a.state={open:!1},a.toogleDrawer=a.toogleDrawer.bind(Object(Ue.a)(a)),a}return Object(d.a)(n,[{key:"toogleDrawer",value:function(){var e=!this.state.open;this.setState({open:e})}},{key:"render",value:function(){return i.a.createElement(a.Fragment,null,i.a.createElement(We.a,{position:"static"},i.a.createElement(Je.a,null,i.a.createElement(S.a,{variant:"h6",component:ut.b,to:"/pse-airquality-react/",style:{textDecoration:"none",color:"unset"}},"SmartAQnet"),i.a.createElement("div",{style:{marginLeft:"auto"}},i.a.createElement(lt,{language:this.language})),i.a.createElement("div",null,i.a.createElement(Ee.a,{style:{float:"right"},onClick:this.toogleDrawer},i.a.createElement(Xe.a,null))))),i.a.createElement(Ge.a,{anchor:"right",open:this.state.open,onOpen:this.toogleDrawer,onClose:this.toogleDrawer},i.a.createElement("div",{style:{width:250}},i.a.createElement(Ze.a,null,i.a.createElement(_e.a,{button:!0,onClick:this.toogleDrawer,component:ut.b,to:"/pse-airquality-react/privacy-policy"},i.a.createElement(Ke.a,null,i.a.createElement(nt.a,null)),i.a.createElement(Qe.a,{primary:this.language.getText("privacyPolicy")})),i.a.createElement(_e.a,{button:!0,onClick:this.toogleDrawer,component:ut.b,to:"/pse-airquality-react/about"},i.a.createElement(Ke.a,null,i.a.createElement(et.a,null)),i.a.createElement(Qe.a,{primary:this.language.getText("about")})),i.a.createElement(_e.a,{button:!0,onClick:this.toogleDrawer,component:"a",href:"https://www.smartaq.net"},i.a.createElement(Ke.a,null,i.a.createElement(it.a,null)),i.a.createElement(Qe.a,{primary:"SmartAQnet"}))))))}}]),n}(i.a.Component),ht=n(17);var gt=function(){var e=F.getInstance();return i.a.createElement("div",{className:"App"},i.a.createElement(ut.a,null,i.a.createElement(ct,{language:e}),i.a.createElement(ht.c,null,i.a.createElement(ht.a,{exact:!0,path:"/pse-airquality-react/",component:He}),i.a.createElement(ht.a,{exact:!0,path:"/pse-airquality-react/detail/:id",component:Be}),i.a.createElement(ht.a,{exact:!0,path:"/pse-airquality-react/about",component:ze}),i.a.createElement(ht.a,{exact:!0,path:"/pse-airquality-react/privacy-policy",component:qe}),i.a.createElement(ht.a,null,i.a.createElement(Re,{code:404,message:"page not found"})))))},vt=Object(s.a)({palette:{primary:{main:g.a[500]},secondary:{main:c.a[500]}}});o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(l.a,{theme:vt},i.a.createElement(gt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e){e.exports=JSON.parse('{"id":"MockFeature","nameId":"testFeatureName","unitOfMeasurement":"\xb0M","descriptionId":"mockDesc","defaultScale":{"0":"#AAAAAA","10":"#124379","100":"#217416"},"webLinkId":"link","limit":10,"diagrams":[]}')},91:function(e){e.exports=JSON.parse('{"a":[{"id":"de-de","name":"Deutsch","strings":{"about":"\xdcber","privacyPolicy":"Datenschutzerkl\xe4rung","stationInfoButton":"Mehr Informationen","search":"Suche"}},{"id":"en-us","name":"English","strings":{"about":"About","privacyPolicy":"Privacy Policy","stationInfoButton":"More details","search":"Search"}}]}')}},[[120,1,2]]]);
//# sourceMappingURL=main.1eb129d7.chunk.js.map