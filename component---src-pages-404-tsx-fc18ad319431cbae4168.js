(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{166:function(n,e,t){"use strict";t.r(e);var r=t(12),i=(t(0),t(171)),a=t(174),o=t(175),c=t(178);e.default=function(){return Object(r.d)(c.a,null,Object(r.d)(a.a,null,Object(r.d)(o.a,null,Object(r.d)("h1",null,"404: Page not found."),Object(r.d)("p",null,"You've hit the void. ",Object(r.d)(i.a,{to:"/"},"Go back.")))))}},168:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"d",function(){return i}),t.d(e,"a",function(){return a}),t.d(e,"e",function(){return o}),t.d(e,"c",function(){return c});var r={brand:"#663399",yellow:"rgb(241,217,29)",blue:"rgb(24,122,191)",purple:"rgb(102, 51,153)",green:"rgb(104, 159, 99)",pink:"rgb(229,53,171)",orange:"rgb(241,101,41)",red:"rgb(204,52,45)",teal:"rgb(94,211,243)",ui:{terminal:"rgb(30, 34, 41)",traffic:{red:"rgb(236, 97, 86)",yellow:"rgb(246, 193, 81)",green:"rgb(99, 199, 86)"}},code:"rgb(254, 125, 232)",white:"#fff",black:"#000"},i={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},a={xs:0,sm:576,md:768,lg:992,xl:1200},o={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5}},170:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(168),i=function(n){return n/r.c.fontSize.regular}},171:function(n,e,t){"use strict";t.d(e,"b",function(){return b});var r=t(12),i=t(0),a=t.n(i),o=t(5),c=t.n(o),d=t(43),l=t.n(d);t.d(e,"a",function(){return l.a}),t.d(e,"c",function(){return d.navigate});t(172);var s=a.a.createContext({});function u(n){var e=n.staticQueryData,t=n.data,i=n.query,o=n.render,c=t?t.data:e[i]&&e[i].data;return Object(r.d)(a.a.Fragment,null,c&&o(c),!c&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var b=function(n){var e=n.data,t=n.query,i=n.render,a=n.children;return Object(r.d)(s.Consumer,null,function(n){return Object(r.d)(u,{data:e,query:t,render:i||a,staticQueryData:n})})};b.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},172:function(n,e,t){var r;n.exports=(r=t(176))&&r.default||r},174:function(n,e,t){"use strict";var r=t(169),i=t(12),a=(t(0),t(168)),o=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",a.c.containerPadding,"rem;margin-bottom:3rem;");e.a=function(n){var e=n.children,t=n.className;return Object(i.d)(o,{className:t},e)}},175:function(n,e,t){"use strict";var r=t(169),i=t(12),a=(t(0),t(168)),o=t(170),c=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(o.a)(a.e.lg),"em;");e.a=function(n){var e=n.children,t=n.className;return Object(i.d)(c,{className:t},e)}},176:function(n,e,t){"use strict";t.r(e);t(68);var r=t(0),i=t.n(r),a=t(5),o=t.n(a),c=t(70),d=function(n){var e=n.location,t=n.pageResources;return t?i.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json)):null};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=d},177:function(n){n.exports={data:{site:{siteMetadata:{title:"Jo Sprague",description:"Senior Software Engineer"}}}}},178:function(n,e,t){"use strict";var r=t(12),i=t(177),a=t(0),o=t(181),c=t.n(o),d=t(171),l=(t(164),t(168)),s=t(170),u=t(173),b="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+l.c.fontSize.regular+"px !important;\n    line-height: "+l.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+l.d.sansSerif+";\n    color: "+l.b.black+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+l.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+Object(u.a)(.2,l.b.white)+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+Object(u.a)(.2,l.b.white)+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+Object(u.d)(.9,l.b.white)+";\n        }\n        tr {\n          background-color: "+Object(u.d)(.9,l.b.white)+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+l.b.black+";\n    font-weight: 600;\n    line-height: "+l.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+l.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+l.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+l.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+l.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+l.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+Object(u.a)(.2,l.b.white)+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+Object(u.a)(.2,l.b.white)+";\n    color: "+Object(u.a)(.4,l.b.white)+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(s.a)(l.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",g=t(169),m=Object(g.a)("div",{target:"e17su9850"})({name:"1mbwsz5",styles:"display:flex;flex-direction:column;min-height:100vh;height:100vh;overflow-y:hidden;"}),f=function(n){var e=n.children,t=n.className;return Object(r.d)(a.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(b)}}),Object(r.d)(m,{className:t},e))},h=Object(g.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),p=function(n){var e=n.children,t=n.className;return Object(r.d)(h,{className:t},e)};e.a=function(n){var e=n.children;return Object(r.d)(d.b,{query:"991718019",render:function(n){return Object(r.d)(f,null,Object(r.d)(c.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:n.site.siteMetadata.description},{name:"keywords",content:n.site.siteMetadata.keywords}]}),Object(r.d)(p,null,e))},data:i})}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-fc18ad319431cbae4168.js.map