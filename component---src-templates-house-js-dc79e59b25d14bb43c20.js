(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=m(t);return p[a]||!1},E="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,v=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+d+l+s+a+r+t+i+n+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=e.ariaHidden,l=d.default.createElement(z,(0,o.default)({src:t},n,{ariaHidden:i}));return a.length>1?d.default.createElement("picture",null,r(a),l):l},z=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},g,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!E&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(E||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,E=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,w=e.loading,x=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,o.default)({opacity:I?1:0,transition:V?"opacity "+b+"ms":"none"},s),T="boolean"==typeof E?"lightgray":E,N={transitionDelay:b+"ms"},P=(0,o.default)({opacity:this.state.imgLoaded?0:1},V&&N,{},s,{},f),H={title:t,alt:this.state.isVisible?"":a,style:P,className:m,itemProp:v};if(p){var j=p,q=g(p);return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),T&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&N)}),q.base64&&d.default.createElement(R,{ariaHidden:!0,src:q.base64,spreadProps:H,imageVariants:j,generateSources:k}),q.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,src:q.tracedSVG,spreadProps:H,imageVariants:j,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,S(j),d.default.createElement(z,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:w},q,{imageVariants:j}))}}))}if(h){var M=h,B=g(h),F=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},i);return"inherit"===i.display&&delete F.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},T&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:T,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},V&&N)}),B.base64&&d.default.createElement(R,{ariaHidden:!0,src:B.base64,spreadProps:H,imageVariants:M,generateSources:k}),B.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,src:B.tracedSVG,spreadProps:H,imageVariants:M,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,S(M),d.default.createElement(z,{alt:a,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:w},B,{imageVariants:M}))}}))}return null},t}(d.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});V.propTypes={resolutions:C,sizes:T,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([T,c.default.arrayOf(T)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=V;t.default=N},Bl7J:function(e,t,a){"use strict";var r=a("IRj2"),n=a("q1tI"),i=a.n(n),l=a("Wbzz"),s=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.Link,{to:"/tags",style:{color:"white",textDecoration:"none"}},"All tags"))))};s.defaultProps={siteTitle:""};var o=s;a("8ypT"),t.a=function(e){var t=e.children,a=r.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},INYr:function(e,t,a){"use strict";var r=a("XKFU"),n=a("CkkT")(6),i="findIndex",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),r(r.P+r.F*l,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(i)},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"title":"Houses"}}}}')},OGtf:function(e,t,a){var r=a("XKFU"),n=a("eeVq"),i=a("vhPU"),l=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},s1Bf:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=(a("9eSz"),a("Bl7J")),l=function(e){var t=e.prev,a=e.next;return console.log(t,a),n.a.createElement("div",null,"Navigation",n.a.createElement("ul",null,t&&n.a.createElement("li",null,n.a.createElement("a",{href:t.fields.houseLink},"Previous "," ",t.frontmatter.address)),a&&n.a.createElement("li",null,n.a.createElement("a",{href:a.fields.houseLink},"Next  "," "," ",a.frontmatter.address))))},s=function(e){var t=e.booli,a=e.broker,r=e.maps;return n.a.createElement("div",null,n.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},n.a.createElement("h3",{className:"center"},"Open in"),n.a.createElement("a",{href:r,target:"blank"},"Maps"),n.a.createElement("a",{href:t,target:"blank"},"Booli"),n.a.createElement("a",{href:a,target:"blank"},"Broker")))};a.d(t,"query",(function(){return o}));t.default=function(e){var t=e.data.markdownRemark,a=e.pageContext,r=a.prev,o=a.next,d=t.frontmatter,c=d.address,u=d.price,f=d.extimated,m=d.year,g=d.area,p=d.rooms,h=d.priceArea,E=d.houseCost,b=d.fees,y=d.association,v=d.mortgage,S=d.fee,w=d.saving,L=d.transport,k=d.bike,x=d.floorplan,I=d.booli,O=d.broker,R=d.maps,z=d.tags,V=d.star;return n.a.createElement(i.a,null,n.a.createElement("div",null,n.a.createElement("h1",{style:{textAlign:"right",width:"100%"}},V?"⭐️ ":""),n.a.createElement("h1",null,c),n.a.createElement("h1",null,n.a.createElement("i",null,u," kr (",f," kr)")),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Price area"),n.a.createElement("td",null,h," kr/m²")),n.a.createElement("tr",null,n.a.createElement("th",null,"House cost"),n.a.createElement("td",null,E," kr/month")),n.a.createElement("tr",null,n.a.createElement("th",null,"House fee"),n.a.createElement("td",null,b," kr/month")),n.a.createElement("tr",null,n.a.createElement("th",null,"Year"),n.a.createElement("td",null,m)),n.a.createElement("tr",null,n.a.createElement("th",null,"Area"),n.a.createElement("td",null,g," m²")),n.a.createElement("tr",null,n.a.createElement("th",null,"Rooms"),n.a.createElement("td",null,p)),n.a.createElement("tr",null,n.a.createElement("th",null,"Transport"),n.a.createElement("td",null,L," min")),n.a.createElement("tr",null,n.a.createElement("th",null,"Bike"),n.a.createElement("td",null,k," min")))),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Association"),n.a.createElement("td",null,y)),n.a.createElement("tr",null,n.a.createElement("th",null,"Mortage"),n.a.createElement("td",null,v," kr/m²")),n.a.createElement("tr",null,n.a.createElement("th",null,"Fee"),n.a.createElement("td",null,S," kr/month")),n.a.createElement("tr",null,n.a.createElement("th",null,"Savings"),n.a.createElement("td",null,w," kr/month")))),n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},z.map((function(e){return n.a.createElement("span",{style:{background:"orange",padding:"5px 10px",margin:"5px",borderRadius:"10px"}},n.a.createElement("strong",null,e))}))),x&&n.a.createElement("img",{src:x,style:{maxHeight:"800px",width:"auto"}}),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),n.a.createElement(l,{prev:r&&r.node,next:o&&o.node}),n.a.createElement(s,{booli:I,broker:O,maps:R})))};var o="2911461131"}}]);
//# sourceMappingURL=component---src-templates-house-js-dc79e59b25d14bb43c20.js.map