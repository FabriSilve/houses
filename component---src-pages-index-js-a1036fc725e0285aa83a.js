(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Bl7J:function(e,t,a){"use strict";var n=a("IRj2"),r=a("q1tI"),l=a.n(r),i=a("Wbzz"),s=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(i.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t)),l.a.createElement("h1",{style:{margin:0}},l.a.createElement(i.Link,{to:"/tags",style:{color:"white",textDecoration:"none"}},"All tags"))))};s.defaultProps={siteTitle:""};var c=s;a("8ypT"),t.a=function(e){var t=e.children,a=n.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c,{siteTitle:a.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},l.a.createElement("main",null,t),l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"title":"Houses"}}}}')},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"listQuery",(function(){return s}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=(a("4BGS"),a("Bl7J"));t.default=function(e){var t=e.data.allMarkdownRemark;return r.a.createElement(i.a,null,t.edges.map((function(e,t){var a=e.node;return r.a.createElement(l.Link,{to:a.fields.houseLink,key:t,className:"link"},r.a.createElement("div",{className:"house-list"},r.a.createElement("h1",null,a.frontmatter.price),r.a.createElement("span",null,a.frontmatter.address),r.a.createElement("p",null,a.excerpt)))})))};var s="2172054820"}}]);
//# sourceMappingURL=component---src-pages-index-js-a1036fc725e0285aa83a.js.map