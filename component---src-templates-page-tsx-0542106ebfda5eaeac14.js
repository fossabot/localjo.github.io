(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{165:function(n,e,t){"use strict";t.r(e),t.d(e,"query",function(){return l});var r=t(12),a=(t(0),t(174)),i=t(175),o=t(179),c=t(178);e.default=function(n){var e=n.data;return Object(r.d)(c.a,null,Object(r.d)(a.a,null,Object(r.d)(i.a,null,Object(r.d)(o.a,null,Object(r.d)("h1",null,e.markdownRemark.frontmatter.title),Object(r.d)("div",{dangerouslySetInnerHTML:{__html:e.markdownRemark.html}})))))};var l="1366676620"},169:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"d",function(){return a}),t.d(e,"a",function(){return i}),t.d(e,"e",function(){return o}),t.d(e,"c",function(){return c});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},o={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5}},171:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var r=t(169),a=function(n){return n/r.c.fontSize.regular}},172:function(n,e,t){var r;n.exports=(r=t(177))&&r.default||r},173:function(n,e,t){"use strict";t.d(e,"b",function(){return b});var r=t(12),a=t(0),i=t.n(a),o=t(5),c=t.n(o),l=t(43),d=t.n(l);t.d(e,"a",function(){return d.a});t(172);var s=i.a.createContext({});function u(n){var e=n.staticQueryData,t=n.data,a=n.query,o=n.render,c=t?t.data:e[a]&&e[a].data;return Object(r.d)(i.a.Fragment,null,c&&o(c),!c&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var b=function(n){var e=n.data,t=n.query,a=n.render,i=n.children;return Object(r.d)(s.Consumer,null,function(n){return Object(r.d)(u,{data:e,query:t,render:a||i,staticQueryData:n})})};b.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},174:function(n,e,t){"use strict";var r=t(170),a=t(12),i=(t(0),t(169)),o=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(o,{className:t},e)}},175:function(n,e,t){"use strict";var r=t(170),a=t(12),i=(t(0),t(169)),o=t(171),c=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(o.a)(i.e.lg),"em;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(c,{className:t},e)}},176:function(n){n.exports={data:{site:{siteMetadata:{title:"gatsby-starter-typescript-plus",description:"A starter kit for TypeScript-based Gatsby projects with sensible defaults."}}}}},177:function(n,e,t){"use strict";t.r(e);t(67);var r=t(0),a=t.n(r),i=t(5),o=t.n(i),c=t(68),l=function(n){var e=n.location,t=n.pageResources;return t?a.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},178:function(n,e,t){"use strict";var r=t(12),a=t(176),i=t(0),o=t(180),c=t.n(o),l=t(173),d=(t(164),t(169)),s=t(171),u="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+d.c.fontSize.regular+"px !important;\n    line-height: "+d.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+d.d.sansSerif+";\n    color: "+d.b.black+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+d.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+d.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+d.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+d.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+d.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+d.b.black+";\n    font-weight: 600;\n    line-height: "+d.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+d.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+d.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+d.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+d.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+d.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+d.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+d.b.ui.light+";\n    color: "+d.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(s.a)(d.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",b=t(170),g=Object(b.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),m=function(n){var e=n.children,t=n.className;return Object(r.d)(i.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(u)}}),Object(r.d)(g,{className:t},e))},f=Object(b.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),h=function(n){var e=n.children,t=n.className;return Object(r.d)(f,{className:t},e)};e.a=function(n){var e=n.children;return Object(r.d)(l.b,{query:"991718019",render:function(n){return Object(r.d)(m,null,Object(r.d)(c.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:n.site.siteMetadata.description},{name:"keywords",content:n.site.siteMetadata.keywords}]}),Object(r.d)(h,null,e))},data:a})}},179:function(n,e,t){"use strict";var r=t(170),a=t(12),i=(t(0),t(25)),o=t(169),c=t(171),l=Object(r.a)("div",{target:"e130cks0"})("opacity:0.9;position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(c.a)(o.e.lg),"em;background:rgb(40,44,51);color:white;box-shadow:rgba(0,0,0,0.1) 1px 1px,rgba(0,0,0,0.1) -1px -1px,rgba(0,0,0,0.1) 1px -1px,rgba(0,0,0,0.1) -1px 1px,rgba(0,0,0,0.8) 0 0 70px;border-radius:5px;overflow:scroll;"),d=Object(r.a)("div",{target:"e130cks1"})({name:"yg2qwc",styles:"text-align:center;h1{font-size:12px;color:rgb(203,203,203);padding:8px 0 8px 0;margin:0;}"}),s=Object(r.a)("div",{target:"e130cks2"})({name:"1fnfvna",styles:"position:absolute;top:0;left:0;line-height:12px;padding:0;button{display:inline-block;width:12px;height:12px;margin:10px 0 0 10px;border-radius:6px;appearance:none;background:white;border:none;padding:0;&.green{background:rgb(99,199,86);}&.yellow{background:rgb(246,193,81);}&.red{background:rgb(236,97,86);}}"}),u=Object(r.a)("div",{target:"e130cks3"})({name:"9s0nes",styles:"padding:15px;font-family:monospace;font-size:16px;min-height:600px;color:rgb(199,199,199);h1,h2,h3,h4,h5,p{font-size:inherit;color:inherit;}code,pre{color:rgb(254,125,232);margin:0;padding:0;}a{color:rgb(199,199,199);text-decoration:underline;&:hover{background:rgb(199,199,199);color:rgb(40,44,51);}}"});e.a=function(n){var e=n.children,t=n.title,r=i.globalHistory.location;return Object(a.d)(l,null,Object(a.d)(d,null,Object(a.d)(s,null,Object(a.d)("button",{className:"red"}),Object(a.d)("button",{className:"yellow"}),Object(a.d)("button",{className:"green"})),Object(a.d)("h1",null,"you@localjo-portfolio: ~",t||r.pathname)),Object(a.d)(u,null,e))}}}]);
//# sourceMappingURL=component---src-templates-page-tsx-0542106ebfda5eaeac14.js.map