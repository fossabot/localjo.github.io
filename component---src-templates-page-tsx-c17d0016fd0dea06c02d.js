(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{165:function(e,n,t){"use strict";t.r(n),t.d(n,"query",function(){return d});t(67);var r=t(12),a=(t(0),t(174)),i=t(175),o=t(179),l=t(178),c=t(182);n.default=function(e){var n=e.data;return console.log(n),Object(r.d)(l.a,null,Object(r.d)(a.a,null,Object(r.d)(i.a,null,Object(r.d)(o.a,null,Object(r.d)("p",null,"Parsing ",n.markdownRemark.fields.slug.replace(/\//g,""),".md..."),Object(r.d)(c.a,{text:n.markdownRemark.frontmatter.title}),Object(r.d)("br",null),Object(r.d)("div",{dangerouslySetInnerHTML:{__html:n.markdownRemark.html}})))))};var d="4189041508"},168:function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"d",function(){return a}),t.d(n,"a",function(){return i}),t.d(n,"e",function(){return o}),t.d(n,"c",function(){return l});var r={brand:"#663399",yellow:"rgb(241,217,29)",blue:"rgb(24,122,191)",purple:"rgb(102, 51,153)",green:"rgb(104, 159, 99)",pink:"rgb(229,53,171)",orange:"rgb(241,101,41)",red:"rgb(204,52,45)",teal:"rgb(94,211,243)",ui:{terminal:"rgb(30, 34, 41)",traffic:{red:"rgb(236, 97, 86)",yellow:"rgb(246, 193, 81)",green:"rgb(99, 199, 86)"}},code:"rgb(254, 125, 232)",white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},o={md:720,lg:960,xl:1140},l={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5}},170:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(168),a=function(e){return e/r.c.fontSize.regular}},171:function(e,n,t){"use strict";t.d(n,"b",function(){return u});var r=t(12),a=t(0),i=t.n(a),o=t(5),l=t.n(o),c=t(43),d=t.n(c);t.d(n,"a",function(){return d.a}),t.d(n,"c",function(){return c.navigate});t(172);var s=i.a.createContext({});function b(e){var n=e.staticQueryData,t=e.data,a=e.query,o=e.render,l=t?t.data:n[a]&&n[a].data;return Object(r.d)(i.a.Fragment,null,l&&o(l),!l&&Object(r.d)("div",null,"Loading (StaticQuery)"))}var u=function(e){var n=e.data,t=e.query,a=e.render,i=e.children;return Object(r.d)(s.Consumer,null,function(e){return Object(r.d)(b,{data:n,query:t,render:a||i,staticQueryData:e})})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},172:function(e,n,t){var r;e.exports=(r=t(176))&&r.default||r},174:function(e,n,t){"use strict";var r=t(169),a=t(12),i=(t(0),t(168)),o=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");n.a=function(e){var n=e.children,t=e.className;return Object(a.d)(o,{className:t},n)}},175:function(e,n,t){"use strict";var r=t(169),a=t(12),i=(t(0),t(168)),o=t(170),l=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(o.a)(i.e.lg),"em;");n.a=function(e){var n=e.children,t=e.className;return Object(a.d)(l,{className:t},n)}},176:function(e,n,t){"use strict";t.r(n);t(68);var r=t(0),a=t.n(r),i=t(5),o=t.n(i),l=t(70),c=function(e){var n=e.location,t=e.pageResources;return t?a.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=c},177:function(e){e.exports={data:{site:{siteMetadata:{title:"Jo Sprague",description:"Senior Software Engineer"}}}}},178:function(e,n,t){"use strict";var r=t(12),a=t(177),i=t(0),o=t(181),l=t.n(o),c=t(171),d=(t(164),t(168)),s=t(170),b=t(173),u="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+d.c.fontSize.regular+"px !important;\n    line-height: "+d.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+d.d.sansSerif+";\n    color: "+d.b.black+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+d.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+Object(b.a)(.2,d.b.white)+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+Object(b.a)(.2,d.b.white)+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+Object(b.d)(.9,d.b.white)+";\n        }\n        tr {\n          background-color: "+Object(b.d)(.9,d.b.white)+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+d.b.black+";\n    font-weight: 600;\n    line-height: "+d.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+d.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+d.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+d.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+d.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+d.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+Object(b.a)(.2,d.b.white)+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+Object(b.a)(.2,d.b.white)+";\n    color: "+Object(b.a)(.4,d.b.white)+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(s.a)(d.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",g=t(169),m=Object(g.a)("div",{target:"e17su9850"})({name:"1mbwsz5",styles:"display:flex;flex-direction:column;min-height:100vh;height:100vh;overflow-y:hidden;"}),p=function(e){var n=e.children,t=e.className;return Object(r.d)(i.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(u)}}),Object(r.d)(m,{className:t},n))},f=Object(g.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),h=function(e){var n=e.children,t=e.className;return Object(r.d)(f,{className:t},n)};n.a=function(e){var n=e.children;return Object(r.d)(c.b,{query:"991718019",render:function(e){return Object(r.d)(p,null,Object(r.d)(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]}),Object(r.d)(h,null,n))},data:a})}},179:function(e,n,t){"use strict";t(67),t(100),t(102),t(69),t(44),t(183),t(184),t(185);var r=t(169),a=t(12),i=t(180),o=t(0),l=t(171),c=t(25),d=t(186),s=t.n(d),b=t(168),u=t(173),g=t(170),m=Object(r.a)("div",{target:"e130cks0"})("opacity:0.9;position:relative;margin-left:auto;margin-right:auto;width:auto;max-height:95vh;overflow:scroll;background:",b.b.ui.terminal,";color:",b.b.white,";box-shadow:rgba(0,0,0,0.1) 1px 1px,rgba(0,0,0,0.1) -1px -1px,rgba(0,0,0,0.1) 1px -1px,rgba(0,0,0,0.1) -1px 1px,rgba(0,0,0,0.8) 0 0 70px;border-radius:5px;"),p=Object(r.a)("div",{target:"e130cks1"})("background:",b.b.ui.terminal,";position:sticky;top:0;z-index:100;text-align:center;span{font-size:12px;font-weight:500;color:",Object(u.a)(.2,b.b.white),";padding:8px 0 8px 0;margin:0;}"),f=Object(r.a)("div",{target:"e130cks2"})("position:absolute;top:0;left:0;line-height:12px;padding:0;button{display:inline-block;width:12px;height:12px;margin:10px 0 0 10px;border-radius:6px;appearance:none;background:",Object(u.a)(.2,b.b.white),";border:none;padding:0;&.green{background:",b.b.ui.traffic.green,";}&.yellow{background:",b.b.ui.traffic.yellow,";}&.red{background:",b.b.ui.traffic.red,";}}"),h=Object(r.a)("div",{target:"e130cks3"})("padding:15px 15px 5px 15px;font-family:monospace;font-size:16px;line-height:1.5em;min-height:600px;color:",Object(u.a)(.2,b.b.white),";h1,h2,h3,h4,h5,h6,small,strong,b,em,p{font-size:inherit;color:inherit;}hr{border-style:dashed;}small{opacity:0.5;}.badge{white-space:nowrap;background:",Object(u.a)(.2,b.b.white),";color:",b.b.ui.terminal,";font-style:normal;text-decoration:none;display:inline-block;padding:0 0.4em;margin:0 0 0.6em 0;&.yellow{background:",Object(u.d)(.2,b.b.yellow),";}&.blue{background:",Object(u.d)(.2,b.b.blue),";}&.teal{background:",Object(u.d)(.2,b.b.teal),";}&.purple{background:",Object(u.d)(.2,Object(u.c)(.25,b.b.purple)),";}&.green{background:",Object(u.d)(.2,b.b.green),";}&.pink{background:",Object(u.d)(.2,b.b.pink),";}&.red{background:",Object(u.d)(.2,Object(u.c)(.05,b.b.red)),";}&.orange{background:",Object(u.d)(.2,Object(u.c)(.05,b.b.orange)),";}}.emoji{text-indent:-2em;margin-left:2em;}.columns{@media (min-width:",Object(g.a)(b.a.md),"em){columns:2;}}ul,.section{margin:0;-webkit-column-break-inside:avoid;page-break-inside:avoid;break-inside:avoid-column;display:table;}ul{list-style:none;margin:0;padding:0;li{margin:0;padding:0;}li:before{content:'»';padding-right:0.5em;}}code,pre{color:",b.b.code,";margin:0;padding:0;line-height:1.1em;}a{color:",Object(u.a)(.2,b.b.white),";text-decoration:underline;&:hover{background:",Object(u.a)(.2,b.b.white),";color:",b.b.ui.terminal,";}}table{font-size:16px;border:none;th,td{vertical-align:top;padding:10px;border:none;}}.project-list{display:flex;flex-wrap:wrap;justify-content:space-between;}.project{background:",Object(u.d)(.9,b.b.white),";padding:15px;margin-bottom:15px;width:100%;@media (min-width:",Object(g.a)(b.a.lg),"em){width:49%;}h2{margin:0 0 1em 0;}p:nth-of-type(2){clear:both;}p:nth-of-type(1){float:left;width:245px;max-height:160px;overflow:hidden;}h3:nth-of-type(1){padding-left:15px;overflow:hidden;}ul:nth-of-type(1){padding-left:15px;li:before{content:'';padding:0;}}h3:nth-of-type(2){display:none;}ul:nth-of-type(2){clear:both;li{display:inline-block;}li:before{content:'';padding:0;}}}.experience{h3{padding:10px;background:",Object(u.d)(.9,b.b.white),";}a{color:",b.b.blue,";}p > em,p > i{color:",Object(u.d)(.5,b.b.white),";padding:10px;a{color:",b.b.ui.terminal,";background:",b.b.blue,";font-style:normal;padding:0 0.3em;}}ul{li{margin-bottom:1em;&:before{position:absolute;right:100%;}}position:relative;margin:0 auto;max-width:80%;}}"),j=Object(r.a)("div",{target:"e130cks4"})({name:"xdees7",styles:"overflow:scroll;"}),O=Object(r.a)("div",{target:"e130cks5"})("background:",b.b.ui.terminal,";padding:10px 0;position:sticky;bottom:-1px;&[stuck]{padding:10px 0 9px 0;&:after{position:absolute;bottom:100%;height:50px;width:100%;content:'';background:linear-gradient(to top,",b.b.ui.terminal," 0%,",Object(u.d)(1,b.b.ui.terminal)," 90%);pointer-events:none;}&:before{position:absolute;top:-5px;width:100%;content:'˅˅ scroll for more ˅˅';text-align:center;color:",Object(u.d)(.8,b.b.white),";pointer-events:none;}}ul.ls{list-style:none;margin-left:0;padding-left:0;li{display:inline-block;margin-right:2em;margin-bottom:1em;margin-left:0;padding-left:0;&:before{content:'';}}}.prompt{min-height:2em;input{font-size:16px;text-align:left;box-sizing:content-box;appearance:none;background:transparent;border:none;border-right:0.8em solid;margin-right:0.2em;text-shadow:0 0 0 ",Object(u.a)(.2,b.b.white),";color:transparent;&:focus{overflow:hidden;white-space:nowrap;padding-right:0;display:inline-block;animation:blink-caret 1.2s step-end infinite;}}}@keyframes blink-caret{from,to{border-right-color:transparent;}50%{border-right-color:",Object(u.a)(.2,b.b.white),";}}");n.a=function(e){var n=e.children,t=e.title,r=c.globalHistory.location,d=Object(o.useState)(),b=d[0],u=d[1],g=Object(o.useRef)(null),w=Object(o.useRef)(null),x=i.data;Object(o.useEffect)(function(){var e;return w.current&&(e=new IntersectionObserver(function(e){var n=e[0];n.target.toggleAttribute("stuck",n.intersectionRatio<1)},{threshold:[1]})).observe(w.current),function(){e.disconnect()}},[w]);var k=x.allMarkdownRemark.edges.map(function(e){return{name:e.node.frontmatter.title,link:e.node.fields.slug}}).filter(function(e){return e.link!==r.pathname});"/"!==r.pathname&&k.push({name:"Home",link:"/"});var v=k.reduce(function(e,n){return e[n.name]={action:function(){Object(l.c)(n.link)}},e},{}),y=Object.keys(v);return Object(a.d)(m,{onClick:function(e){var n=e.target.closest(".prompt"),t=e.target.classList.contains("prompt"),r=e.target.classList.contains("terminal-main");(t||n||r)&&g.current&&g.current.focus()}},Object(a.d)(p,null,Object(a.d)(f,null,Object(a.d)("button",{className:"red",onClick:function(){return Object(l.c)("/")}}),Object(a.d)("button",{className:"yellow"}),Object(a.d)("button",{className:"green"})),Object(a.d)("span",null,"you@localjo-portfolio: ~",t||r.pathname)),Object(a.d)(h,{className:"terminal-main"},Object(a.d)(j,null,n),Object(a.d)(O,{ref:w},Object(a.d)("p",null,"> ls ",Object(a.d)("small",null,"# tap one of the options below")),Object(a.d)("ul",{className:"ls"},k.map(function(e){return Object(a.d)("li",{key:e.link},Object(a.d)(l.a,{to:e.link},"/",e.name))})),Object(a.d)("div",{className:"prompt"},"> ",Object(a.d)(s.a,{ref:g,autoFocus:!0,value:b,onChange:function(e){var n=e.target.value;u(n.toLowerCase().slice(0,50)),e.target.selectionStart=n.length},onSelect:function(e){var n=e.target.value;e.target.selectionStart=n.length},onKeyDown:function(e){if(b&&b.length>0)switch(e.keyCode){case 13:var n=y.filter(function(e){return e.toLowerCase().startsWith(b.toLowerCase())})[0],t=v[n],r=(t||{action:function(){}}).action;"function"==typeof r&&r(),u("");break;case 9:e.preventDefault();var a=y.filter(function(e){return e.toLowerCase().startsWith(b.toLowerCase())})[0];u(a.toLowerCase())}}}),y.filter(function(e){return!!(b&&b.length>0)&&e.toLowerCase().startsWith(b.toLowerCase())}).map(function(e,n,t){var r=n===t.length-1,i=0===n;return Object(a.d)("small",{key:e,style:i?{opacity:.7,position:"relative",left:"-1em"}:{}},i&&b?e.toLowerCase().replace(b,""):e.toLowerCase(),r?"":", ")})))))}},180:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Code Demos"},fields:{slug:"/code-demos/"}}},{node:{frontmatter:{title:"Contact"},fields:{slug:"/contact/"}}},{node:{frontmatter:{title:"Experience"},fields:{slug:"/experience/"}}},{node:{frontmatter:{title:"Links"},fields:{slug:"/links/"}}},{node:{frontmatter:{title:"Open Source"},fields:{slug:"/open-source/"}}},{node:{frontmatter:{title:"Technologies"},fields:{slug:"/technologies/"}}}]}}}},182:function(e,n,t){"use strict";t(103),t(188),t(101);var r=t(12),a=t(0),i=t.n(a),o=t(189),l=t.n(o),c=t(190),d=t(191),s=t(173);l.a.parseFont("Small Slant",d.a),l.a.parseFont("Slant",c.a);n.a=function(e){var n=e.text,t=void 0===n?"Hello!":n,o=e.rainbow,c=void 0===o||o,d=e.large,b=void 0!==d&&d,u=Object(a.useState)(t),g=u[0],m=u[1];if(Object(a.useEffect)(function(){t&&l.a.text(t,{font:b?"Slant":"Small Slant"},function(e,n){return m(n)})}),c){var p=g.split("\n").filter(function(e){return e.trim().length>0}),f=p.map(function(e,n){return Array.from("rbg").map(function(e,t){return function(e,n){return Math.floor(127*Math.sin(Math.PI/p.length*2*e+n))+128}(n,t*Math.PI*2/3)})});return Object(r.d)(i.a.Fragment,null,Object(r.d)("style",null,"pre.rainbow {margin: 0; padding: 0;}"),p.map(function(e,n){var t=f[n],a=t[0],i=t[1],o=t[2];return Object(r.d)("pre",{key:n,className:"rainbow",style:{color:Object(s.b)(.2,"rgb("+a+","+o+","+i+")")}},e)}))}return Object(r.d)("pre",null,g)}}}]);
//# sourceMappingURL=component---src-templates-page-tsx-c17d0016fd0dea06c02d.js.map