(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{fhHu:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Bl7J"),l=a("Wbzz"),m=function(e){var t=e.data;return r.a.createElement("article",{className:"card "},r.a.createElement(l.Link,{to:t.frontmatter.path},!!t.frontmatter.thumbnail&&r.a.createElement("img",{className:"people-avatar",src:t.frontmatter.thumbnail,alt:t.frontmatter.title+"- Featured Shot"})),r.a.createElement("header",null,r.a.createElement("h2",{className:"post-title"},r.a.createElement(l.Link,{to:t.frontmatter.path,className:"post-link"},t.frontmatter.title)),"alumni"!==t.frontmatter.position?r.a.createElement("div",{className:"post-meta"},t.frontmatter.metaDescription):r.a.createElement("div",{className:"post-meta"},"Graduated since "+t.frontmatter.endYear+". "+t.frontmatter.metaDescription)))},i=a("70lj");t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=t.filter((function(e){return!!e.node.frontmatter.date&&"alumni"!==e.node.frontmatter.position&&"supervisor"!==e.node.frontmatter.position&&"leader"!==e.node.frontmatter.position})).map((function(e){return r.a.createElement(m,{key:e.node.id,data:e.node})})),n=t.filter((function(e){return!!e.node.frontmatter.date&&"alumni"===e.node.frontmatter.position})).map((function(e){return r.a.createElement(m,{key:e.node.id,data:e.node})})),l=t.filter((function(e){return!!e.node.frontmatter.date&&"supervisor"===e.node.frontmatter.position})).map((function(e){return r.a.createElement(m,{key:e.node.id,data:e.node})})),s=t.filter((function(e){return!!e.node.frontmatter.date&&"leader"===e.node.frontmatter.position})).map((function(e){return r.a.createElement(m,{key:e.node.id,data:e.node})}));return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"People"}),r.a.createElement("h1",null,"Team Members"),r.a.createElement("h2",null,"Supervisors"),r.a.createElement("div",{className:"grids small",style:{marginBottom:"32px"}},l),r.a.createElement("h2",null,"Leaders"),r.a.createElement("div",{className:"grids small",style:{marginBottom:"32px"}},s),r.a.createElement("h2",null,"Current Lab Members"),r.a.createElement("div",{className:"grids small",style:{marginBottom:"32px"}},a),r.a.createElement("h2",null,"Previous Lab Members"),r.a.createElement("div",{className:"grids small",style:{marginBottom:"32px"}},n))}}}]);
//# sourceMappingURL=component---src-pages-people-js-95e2a5c135b5a77b0726.js.map