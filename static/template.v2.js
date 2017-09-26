(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?t():'function'==typeof define&&define.amd?define(t):t()})(this,function(){'use strict';function e(e){return`
<div class='byline'>
  <div class="authors">
    ${e.authors.map((e)=>`<div class="author">
      ${e.personalURL?`<a class="name" href="${e.personalURL}">${e.name}</a>`:`<div class="name">${e.name}</div>`}
      ${e.affiliationURL?`<a class="affiliation" href="${e.affiliationURL}">${e.affiliation}</a>`:`<div class="affiliation">${e.affiliation}</div>`}
    </div>`).join('\n')}
  </div>
  <div class="date">
    <div class="month">${e.publishedMonth}. ${e.publishedDay}</div>
    <div class="year">${e.publishedYear}</div>
  </div>
  <a class="citation" href="#citation">
    <div>${e.concatenatedAuthors}, ${e.publishedYear}</div>
  </a>
</div>
`}function t(e,t,n,i){var a=e.author.split(' and ');let r=a.map((e)=>{if(e=e.trim(),-1!=e.indexOf(','))var n=e.split(',')[0].trim(),i=e.split(',')[1];else var n=e.split(' ').slice(-1)[0].trim(),i=e.split(' ').slice(0,-1).join(' ');var a='';return void 0!=i&&(a=i.trim().split(' ').map((e)=>e.trim()[0]),a=a.join('.')+'.'),t.replace('${F}',i).replace('${L}',n).replace('${I}',a)});if(1<a.length){var o=r.slice(0,a.length-1).join(n);return o+=(i||n)+r[a.length-1],o}return r[0]}function n(e){var t=e.journal||e.booktitle||'';if('volume'in e){var n=e.issue||e.number;n=void 0==n?'':'('+n+')',t+=', Vol '+e.volume+n}return'pages'in e&&(t+=', pp. '+e.pages),''!=t&&(t+='. '),'publisher'in e&&(t+=e.publisher,'.'!=t[t.length-1]&&(t+='.')),t}function i(e){if('url'in e){var t=e.url,n=/arxiv\.org\/abs\/([0-9\.]*)/.exec(t);if(null!=n&&(t=`http://arxiv.org/pdf/${n[1]}.pdf`),'.pdf'==t.slice(-4))var i='PDF';else if('.html'==t.slice(-5))var i='HTML';return` &ensp;<a href="${t}">[${i||'link'}]</a>`}return''}function a(e,t){return'doi'in e?`${t?'<br>':''} <a href="https://doi.org/${e.doi}" style="text-decoration:inherit;">DOI: ${e.doi}</a>`:''}function r(e){if(e){var r='<b>'+e.title+'</b> ';return r+=i(e)+'<br>',r+=t(e,'${L}, ${I}',', ',' and '),r+=e.year||e.date?', '+(e.year||e.date)+'. ':'. ',r+=n(e),r+=a(e),r}return'?'}function o(e){if(e){var r='';r+='<b>'+e.title+'</b>',r+=i(e),r+='<br>';var o=t(e,'${I} ${L}',', ')+'.',d=n(e).trim()+' '+e.year+'. '+a(e,!0);return r+=(o+d).length<b(40,e.title.length)?o+' '+d:o+'<br>'+d,r}return'?'}function d(e){const t=600<window.innerWidth,n=t?18:12,i=t?18:0,a=document.querySelector('body').getBoundingClientRect();let r=e[0]-a.left,o=e[1]-a.top,d=b(window.innerWidth-2*i,648);return r=b(r,window.innerWidth-d-i),d-=2*n,`position: absolute;
     background-color: #FFF;
     opacity: 0.95;
     max-width: ${d}px;
     top: ${o}px;
     left: ${r}px;
     border: 1px solid rgba(0, 0, 0, 0.25);
     padding: ${n}px;
     border-radius: ${t?3:0}px;
     box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.2);
     z-index: ${1e6};`}function l(e=document){const t=new Set,n=e.querySelectorAll('d-cite');for(const i of n){const e=i.getAttribute('key').split(',');for(const n of e)t.add(n)}return[...t]}function s(e){const t=e.querySelector('script');if(t){const e=t.getAttribute('type');if('json'==e.split('/')[1]){const e=t.textContent;return JSON.parse(e)}console.error('Distill only supoprts JSON frontmatter tags anymore; no more YAML.')}else console.error('You added a frontmatter tag but did not provide a script tag with front matter data in it. Please take a look at our templates.');return{}}function p(e,t){return t={exports:{}},e(t,t.exports),t.exports}function u(e){return e.replace(/[\t\n ]+/g,' ').replace(/{\\["^`.'acu~Hvs]( )?([a-zA-Z])}/g,(e,t,n)=>n).replace(/{\\([a-zA-Z])}/g,(e,t)=>t)}function c(e){const t=new Map,n=te.toJSON(e);for(const i of n){for(const[e,t]of Object.entries(i.entryTags))i.entryTags[e]=u(t);i.entryTags.type=i.entryType,t.set(i.citationKey,i.entryTags)}return t}function g(e){return`@article{${e.slug},
  author = {${e.bibtexAuthors}},
  title = {${e.title}},
  journal = {${e.journal.title}},
  year = {${e.publishedYear}},
  note = {${e.url}}
}`}function h(e,t){if(0<t.size){e.host.style.display='initial';const n=e.querySelector('#references-list');n.innerHTML='';for(const[e,i]of t){const t=document.createElement('li');t.id=e,t.innerHTML=r(i),n.appendChild(t)}}else e.host.style.display='none'}function m(e,t){let n=`
  <style>

  d-toc {
    contain: content;
    display: block;
  }

  d-toc ul {
    padding-left: 0;
  }

  d-toc ul > ul {
    padding-left: 24px;
  }

  d-toc a {
    border-bottom: none;
    text-decoration: none;
  }

  </style>
  <nav role="navigation" class="table-of-contents"></nav>
  <h2>Table of contents</h2>
  <ul>`;for(const i of t){const e='D-TITLE'==i.parentElement.tagName,t=i.getAttribute('no-toc');if(e||t)continue;const a=i.textContent,r='#'+i.getAttribute('id');let o='<li><a href="'+r+'">'+a+'</a></li>';'H3'==i.tagName?o='<ul>'+o+'</ul>':o+='<br>',n+=o}n+='</ul></nav>',e.innerHTML=n}function f(e){return`
  ${xe}

  <h3 id="updates-and-corrections">Updates and Corrections</h3>
  <p><a href="">View all changes</a> to this article since it was first published. If you see mistakes or want to suggest changes, please <a href="${e.githubUrl+'/issues/new'}">create an issue on GitHub</a>. </p>

  <h3 id="reuse">Reuse</h3>
  <p>Diagrams and text are licensed under Creative Commons Attribution <a href="https://creativecommons.org/licenses/by/2.0/">CC-BY 2.0</a> with the <a class="github" href="${e.githubUrl}">source available on GitHub</a>, unless noted otherwise. The figures that have been reused from other sources don’t fall under this license and can be recognized by a note in their caption: “Figure from …”.</p>

  <h3 id="citation">Citation</h3>
  <p>For attribution in academic contexts, please cite this work as</p>
  <pre class="citation short">${e.concatenatedAuthors}, "${e.title}", Distill, ${e.publishedYear}.</pre>
  <p>BibTeX citation</p>
  <pre class="citation long">${g(e)}</pre>
  `}var b=Math.min;const y=`
d-byline {
  contain: content;
}

d-byline .byline {
  grid-column: left / page;
  font-size: 13px;
  line-height: 1.8em;
  color: rgba(0, 0, 0, 0.6);
}
d-byline .byline::before {
  content: "";
  display: block;
  border-bottom: solid 1px #999;
  width: 36px;
  margin-bottom: 36px;
}
d-byline .byline::after {
  content: "";
  display: block;
  border-bottom: solid 1px #999;
  width: 36px;
  margin-top: 36px;
  margin-bottom: 36px;
}

d-byline a,
d-article d-byline a {
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  border-bottom: none;
}

d-article d-byline a:hover {
  text-decoration: underline;
  border-bottom: none;
}

d-byline .authors {
  text-align: left;
}

d-byline .author {
  margin-right: 12px;
}

d-byline .author .name {
  font-weight: 600;
  display: inline;
  text-transform: uppercase;
  margin-right: 10px;
}

d-byline .author .affiliation {
  display: inline;
}

d-byline .date {
  display: inline;
  text-align: left;
  margin-right: 12px;
}

d-byline .date .year,
d-byline .date .month {
  display: inline;
}

d-byline .citation {
  display: inline;
  text-align: left;
}

d-byline .citation div {
  display: inline;
}
`;class x extends HTMLElement{static get is(){return'd-byline'}set frontMatter(t){this.innerHTML=e(t)}}var k='span.katex-display {\n  text-align: left;\n  padding: 8px 0 8px 0;\n  margin: 20px 0 20px 24px;\n}\n\nspan.katex {\n  -webkit-font-smoothing: antialiased;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 1.18em;\n}\n';const v=(e,t,n=!0)=>{return(i)=>{const a=document.createElement('template');return a.innerHTML=t,n&&'ShadyCSS'in window&&ShadyCSS.prepareTemplate(a,e),class extends i{static get is(){return e}constructor(){super(),this.clone=document.importNode(a.content,!0),n&&(this.attachShadow({mode:'open'}),this.shadowRoot.appendChild(this.clone))}connectedCallback(){n?'ShadyCSS'in window&&ShadyCSS.styleElement(this):this.insertBefore(this.clone,this.firstChild)}get root(){return n?this.shadowRoot:this}$(e){return this.root.querySelector(e)}$$(e){return this.root.querySelectorAll(e)}}}},w=v('d-abstract',`
<style>
  :host {
    display: block;
    font-size: 23px;
    line-height: 1.7em;
    margin-top: 64px;
    margin-bottom: 64px;
  }
  ${function(e){return`${e} {
      grid-column: left / text;
    }
  `}('d-abstract')}
</style>

<slot></slot>
`);class C extends w(HTMLElement){}const S=v('d-appendix',`
<style>

d-appendix {
  contain: content;

  font-size: 13px;
  line-height: 1.7em;
  margin-bottom: 0;
  border-top: 1px solid rgba(0,0,0,0.1);
  color: rgba(0,0,0,0.5);
  padding-top: 36px;
  padding-bottom: 48px;
}

d-appendix h3 {
  font-size: 15px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 0;
  color: rgba(0,0,0,0.65);
  line-height: 1em;
}

d-appendix a {
  color: rgba(0, 0, 0, 0.6);
}

d-appendix > * {
  grid-column: left / text;
}

</style>

`,!1);class E extends S(HTMLElement){}const T=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],L=['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'],A=(e)=>10>e?'0'+e:e,_=function(e){const t=T[e.getDay()].substring(0,3),n=A(e.getDate()),i=L[e.getMonth()].substring(0,3),a=e.getFullYear().toString(),r=e.getUTCHours().toString(),o=e.getUTCMinutes().toString(),d=e.getUTCSeconds().toString();return`${t}, ${n} ${i} ${a} ${r}:${o}:${d} Z`};class M{constructor(e){this.name=e.author,this.personalURL=e.authorURL,this.affiliation=e.affiliation,this.affiliationURL=e.affiliationURL}get firstName(){const e=this.name.split(' ');return e.slice(0,e.length-1).join(' ')}get lastName(){const e=this.name.split(' ');return e[e.length-1]}}class O{constructor(){this.title='',this.description='',this.authors=[],this.bibliography=new Map,this.bibliographyParsed=!1,this.citations=[],this.citationsCollected=!1,this.journal={},this.publishedDate=new Date,this.katex={}}mergeFromYMLFrontmatter(e){this.title=e.title,this.publishedDate=new Date(e.published),this.description=e.description,this.authors=e.authors.map((e)=>new M(e)),this.katex=e.katex}set url(e){this._url=e}get url(){if(this._url)return this._url;return this.distillPath&&this.journal.url?this.journal.url+'/'+this.distillPath:this.journal.url?this.journal.url:void 0}get githubUrl(){return'https://github.com/'+this.githubPath}set previewURL(e){this._previewURL=e}get previewURL(){return this._previewURL?this._previewURL:this.url+'/thumbnail.jpg'}get publishedDateRFC(){return _(this.publishedDate)}get updatedDateRFC(){return _(this.updatedDate)}get publishedYear(){return this.publishedDate.getFullYear()}get publishedMonth(){return L[this.publishedDate.getMonth()]}get publishedDay(){return this.publishedDate.getDate()}get publishedMonthPadded(){return A(this.publishedDate.getMonth()+1)}get publishedDayPadded(){return A(this.publishedDate.getDate())}get concatenatedAuthors(){if(2<this.authors.length)return this.authors[0].lastName+', et al.';return 2===this.authors.length?this.authors[0].lastName+' & '+this.authors[1].lastName:1===this.authors.length?this.authors[0].lastName:void 0}get bibtexAuthors(){return this.authors.map((e)=>{return e.lastName+', '+e.firstName}).join(' and ')}get slug(){let e='';return this.authors.length&&(e+=this.authors[0].lastName.toLowerCase(),e+=this.publishedYear,e+=this.title.split(' ')[0].toLowerCase()),e||'Untitled'}get bibliographyEntries(){return new Map(this.citations.map((e)=>{const t=this.bibliography.get(e);return[e,t]}))}}const N=(e)=>{return class extends e{constructor(){super();const e={childList:!0,characterData:!0,subtree:!0},t=new MutationObserver(()=>{t.disconnect(),this.renderIfPossible(),t.observe(this,e)});t.observe(this,e)}connectedCallback(){super.connectedCallback(),this.renderIfPossible()}renderIfPossible(){this.textContent&&this.root&&this.renderContent()}renderContent(){console.error(`Your class ${this.constructor.name} must provide a custom renderContent() method!`)}}},q=function(e,t,n){let i=n,a=0;for(const r=e.length;i<t.length;){const n=t[i];if(0>=a&&t.slice(i,i+r)===e)return i;'\\'===n?i++:'{'===n?a++:'}'===n&&a--;i++}return-1},j=function(e,t,n,i){const a=[];for(let r=0;r<e.length;r++)if('text'===e[r].type){const o=e[r].data;let d,l=!0,s=0;for(d=o.indexOf(t),-1!==d&&(s=d,a.push({type:'text',data:o.slice(0,s)}),l=!1);;){if(l){if(d=o.indexOf(t,s),-1===d)break;a.push({type:'text',data:o.slice(s,d)}),s=d}else{if(d=q(n,o,s+t.length),-1===d)break;a.push({type:'math',data:o.slice(s+t.length,d),rawData:o.slice(s,d+n.length),display:i}),s=d+n.length}l=!l}a.push({type:'text',data:o.slice(s)})}else a.push(e[r]);return a},z=function(e,t){let n=[{type:'text',data:e}];for(let a=0;a<t.length;a++){const e=t[a];n=j(n,e.left,e.right,e.display||!1)}return n},D=function(e,t){const n=z(e,t.delimiters),a=document.createDocumentFragment();for(let r=0;r<n.length;r++)if('text'===n[r].type)a.appendChild(document.createTextNode(n[r].data));else{const e=document.createElement('d-math'),i=n[r].data;t.displayMode=n[r].display;try{e.textContent=i,t.displayMode&&e.setAttribute('block','')}catch(i){if(!(i instanceof katex.ParseError))throw i;t.errorCallback('KaTeX auto-render: Failed to parse `'+n[r].data+'` with ',i),a.appendChild(document.createTextNode(n[r].rawData));continue}a.appendChild(e)}return a},R=function(e,t){for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];if(3===i.nodeType){const a=D(i.textContent,t);n+=a.childNodes.length-1,e.replaceChild(a,i)}else if(1===i.nodeType){const e=-1===t.ignoredTags.indexOf(i.nodeName.toLowerCase());e&&R(i,t)}}},P={delimiters:[{left:'$$',right:'$$',display:!0},{left:'\\[',right:'\\]',display:!0},{left:'\\(',right:'\\)',display:!1}],ignoredTags:['script','noscript','style','textarea','pre','code','svg'],errorCallback:function(e,t){console.error(e,t)}},I=function(e,t){if(!e)throw new Error('No element provided to render');const n=Object.assign({},P,t);R(e,n)},H='<link rel="stylesheet" href="https://distill.pub/third-party/katex/katex.min.css" crossorigin="anonymous">',F=v('d-math',`
${H}
<style>

:host {
  display: inline-block;
  contain: content;
}

:host([block]) {
  display: block;
}

${k}
</style>
<span id='katex-container'></span>
`);class U extends N(F(HTMLElement)){static set katexOptions(e){U._katexOptions=e,U.katexOptions.delimiters&&!U.katexAdded&&U.addKatex()}static get katexOptions(){return U._katexOptions||(U._katexOptions={delimiters:[{left:'$',right:'$',display:!0}]}),U._katexOptions}static katexLoadedCallback(){const e=document.querySelectorAll('d-math');for(const t of e)t.renderContent();if(U.katexOptions.delimiters){const e=document.querySelector('d-article');I(e,U.katexOptions)}}static addKatex(){document.head.insertAdjacentHTML('beforeend',H);const e=document.createElement('script');e.src='https://distill.pub/third-party/katex/katex.min.js',e.async=!0,e.onload=U.katexLoadedCallback,e.crossorigin='anonymous',document.head.appendChild(e),U.katexAdded=!0}get options(){const e={displayMode:this.hasAttribute('block')};return Object.assign(e,U.katexOptions)}connectedCallback(){super.connectedCallback(),U.katexAdded||U.addKatex()}renderContent(){if('undefined'!=typeof katex){const e=this.root.querySelector('#katex-container');katex.render(this.textContent,e,this.options)}}}U.katexAdded=!1,U.inlineMathRendered=!1,window.DMath=U;class B{constructor(e,t){this.visible=!1,this.div=e,this.bindDivEvents(this.div),this.triggerElement=t,this.bindTriggerEvents(this.triggerElement),this.hide()}bindDivEvents(e){this.div.addEventListener('mouseover',()=>{this.visible||this.showAtNode(e),this.stopTimeout()}),this.div.addEventListener('mouseout',()=>{this.extendTimeout(250)}),this.div.addEventListener('touchstart',(e)=>{e.stopPropagation()},{passive:!0}),document.body.addEventListener('touchstart',()=>{this.hide()},{passive:!0})}bindTriggerEvents(e){e.addEventListener('mouseover',()=>{this.visible||this.showAtNode(e),this.stopTimeout()}),e.addEventListener('mouseout',()=>{this.extendTimeout(250)}),e.addEventListener('touchstart',(t)=>{this.visible?this.hide():this.showAtNode(e),t.stopPropagation()},{passive:!0})}show(e){this.visible=!0;const t=d(e);this.div.setAttribute('style',t)}showAtNode(e){const t=e.getBoundingClientRect();this.show([t.right,t.bottom])}hide(){this.visible=!1,this.div.setAttribute('style','display:none'),this.stopTimeout()}stopTimeout(){this.timeout&&clearTimeout(this.timeout)}extendTimeout(e){this.stopTimeout(),this.timeout=setTimeout(()=>{this.hide()},e)}}const K=v('d-cite',`
<style>
  .citation {
    color: hsla(206, 90%, 20%, 0.7);
  }
  .citation-number {
    cursor: default;
    white-space: nowrap;
    font-family: -apple-system, BlinkMacSystemFont, "Roboto", Helvetica, sans-serif;
    font-size: 75%;
    color: hsla(206, 90%, 20%, 0.7);
    display: inline-block;
    line-height: 1.1em;
    text-align: center;
    position: relative;
    top: -2px;
    margin: 0 2px;
  }
  figcaption .citation-number {
    font-size: 11px;
    font-weight: normal;
    top: -2px;
    line-height: 1em;
  }
</style>

<div id="hover-box" class="dt-hover-box">
</div>

<span id="citation-" class="citation">
  <slot></slot>
  <span class="citation-number"></span>
</span>
`);class $ extends K(HTMLElement){connectedCallback(){this.hoverDiv=this.root.querySelector('.dt-hover-box'),this.outerSpan=this.root.querySelector('#citation-'),this.innerSpan=this.root.querySelector('.citation-number'),this.hoverbox=new B(this.hoverDiv,this.outerSpan)}disconnectedCallback(){const e={detail:[this,this.keys],bubbles:!0},t=new CustomEvent('onCiteKeyRemoved',e);document.dispatchEvent(t)}static get observedAttributes(){return['key']}attributeChangedCallback(e,t,n){const i=t?'onCiteKeyChanged':'onCiteKeyCreated',a=n.split(','),r={detail:[this,a],bubbles:!0},o=new CustomEvent(i,r);document.dispatchEvent(o)}set key(e){this.setAttribute('key',e)}get key(){return this.getAttribute('key')}get keys(){return this.getAttribute('key').split(',')}set numbers(e){const t=e.map((e)=>{return-1==e?'?':e+1+''}),n='['+t.join(', ')+']',i=this.root.querySelector('.citation-number');i.textContent=n}set entries(e){const t=this.root.querySelector('#hover-box');t.innerHTML=e.map(o).join('<br><br>')}}class W extends HTMLElement{static get is(){return'd-front-matter'}constructor(){super();const e=new MutationObserver((e)=>{for(const t of e)if('SCRIPT'===t.target.nodeName||'characterData'===t.type){const e=s(this);this.notify(e)}});e.observe(this,{childList:!0,characterData:!0,subtree:!0})}notify(e){const t=new CustomEvent('onFrontMatterChanged',{detail:e,bubbles:!0});document.dispatchEvent(t)}}var Q=function(e){const t=e.querySelector('head');if(e.querySelector('html').getAttribute('lang')||e.querySelector('html').setAttribute('lang','en'),!e.querySelector('meta[charset]')){const n=e.createElement('meta');n.setAttribute('charset','utf-8'),t.appendChild(n)}if(!e.querySelector('meta[name=viewport]')){const n=e.createElement('meta');n.setAttribute('name','viewport'),n.setAttribute('content','width=device-width, initial-scale=1'),t.appendChild(n)}},Y=function(e,t){const n=e.querySelector('d-article');let i=e.querySelector('h1');if(i)t.title||(t.title=i.textContent);else if(t.title&&(i=e.createElement('h1'),i.textContent=t.title,n.insertBefore(i,n.firstChild)),t.description){const a=e.createElement('h2');a.textContent=t.description,n.insertBefore(a,i.nextSibling)}let a=e.querySelector('d-byline');if(!a&&t.authors){a=e.createElement('d-byline');const t=['H1','H2','FIGURE'];let r=i;for(;-1!==t.indexOf(r.tagName);)r=r.nextSibling;n.insertBefore(a,r)}let r=e.querySelector('d-appendix');r||(r=e.createElement('d-appendix'),e.body.appendChild(r));let o=e.querySelector('d-footnote-list');o||(o=e.createElement('d-footnote-list'),r.appendChild(o));let d=e.querySelector('d-citation-list');d||(d=e.createElement('d-citation-list'),r.appendChild(d))};const J=new O,G={frontMatter:J,waitingOn:{bibliography:[],citations:[]},listeners:{onCiteKeyCreated(e){const[t,n]=e.detail;if(!J.citationsCollected)return void G.waitingOn.citations.push(()=>G.listeners.onCiteKeyCreated(e));if(!J.bibliographyParsed)return void G.waitingOn.bibliography.push(()=>G.listeners.onCiteKeyCreated(e));const i=n.map((e)=>J.citations.indexOf(e));t.numbers=i;const a=n.map((e)=>J.bibliography.get(e));t.entries=a},onCiteKeyChanged(){J.citations=l(),J.citationsCollected=!0;for(const e of G.waitingOn.citations.slice())e();const e=document.querySelector('d-citation-list'),t=new Map(J.citations.map((e)=>{return[e,J.bibliography.get(e)]}));e.citations=t;const n=document.querySelectorAll('d-cite');for(const e of n){const t=e.keys,n=t.map((e)=>J.citations.indexOf(e));e.numbers=n;const i=t.map((e)=>J.bibliography.get(e));e.entries=i}},onCiteKeyRemoved(e){G.listeners.onCiteKeyChanged(e)},onBibliographyChanged(e){const t=document.querySelector('d-citation-list'),n=e.detail;J.bibliography=n,J.bibliographyParsed=!0;for(const t of G.waitingOn.bibliography.slice())t();if(!J.citationsCollected)return void G.waitingOn.citations.push(function(){G.listeners.onBibliographyChanged({target:e.target,detail:e.detail})});const i=new Map(J.citations.map((e)=>{return[e,J.bibliography.get(e)]}));t.citations=i},onFootnoteChanged(){const e=document.querySelector('d-footnote-list');if(e){const t=document.querySelectorAll('d-footnote');e.footnotes=t}},onFrontMatterChanged(e){const t=e.detail;J.mergeFromYMLFrontmatter(t);const n=document.body.hasAttribute('distill-prerendered');if(!n){Y(document,J),Q(document,J);const e=document.querySelector('distill-appendix');e&&(e.frontMatter=J);const n=document.querySelector('d-byline');n&&(n.frontMatter=J),t.katex&&(U.katexOptions=t.katex)}},DOMContentLoaded(){const e=document.querySelector('d-front-matter'),t=s(e);G.listeners.onFrontMatterChanged({detail:t}),J.citations=l(),J.citationsCollected=!0;for(const e of G.waitingOn.citations.slice())e();const n=document.querySelector('d-footnote-list');if(n){const e=document.querySelectorAll('d-footnote');n.footnotes=e}}}},V=v('d-article',`
<style>
d-article {
  contain: content;
}
</style>
`,!1),X=/^\s*$/;class Z extends V(HTMLElement){constructor(){super(),new MutationObserver((e)=>{for(const t of e)for(const e of t.addedNodes)switch(e.nodeName){case'HR':console.warn('Use of <hr> tags in distill articles is discouraged as they interfere with layout! To separate sections, please just use h2 or h3 tags.');break;case'#text':{const t=e.nodeValue;if(!X.test(t)){console.warn('Use of unwrapped text in distill articles is discouraged as it breaks layout! Please wrap any text in a <span> or <p> tag. We found the following text: '+t);const n=document.createElement('span');n.innerHTML=e.nodeValue,e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e)}}}}).observe(this,{childList:!0})}connectedCallback(){for(const[e,t]of Object.entries(G.listeners))'function'==typeof t?document.addEventListener(e,t):console.error('Controller listeners need to be functions!')}}var ee='undefined'==typeof window?'undefined'==typeof global?'undefined'==typeof self?{}:self:global:window,te=p(function(e,t){(function(e){function t(){this.months=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],this.notKey=[',','{','}',' ','='],this.pos=0,this.input='',this.entries=[],this.currentEntry='',this.setInput=function(e){this.input=e},this.getEntries=function(){return this.entries},this.isWhitespace=function(e){return' '==e||'\r'==e||'\t'==e||'\n'==e},this.match=function(e,t){if((void 0==t||null==t)&&(t=!0),this.skipWhitespace(t),this.input.substring(this.pos,this.pos+e.length)==e)this.pos+=e.length;else throw'Token mismatch, expected '+e+', found '+this.input.substring(this.pos);this.skipWhitespace(t)},this.tryMatch=function(e,t){return(void 0==t||null==t)&&(t=!0),this.skipWhitespace(t),this.input.substring(this.pos,this.pos+e.length)==e},this.matchAt=function(){for(;this.input.length>this.pos&&'@'!=this.input[this.pos];)this.pos++;return!('@'!=this.input[this.pos])},this.skipWhitespace=function(e){for(;this.isWhitespace(this.input[this.pos]);)this.pos++;if('%'==this.input[this.pos]&&!0==e){for(;'\n'!=this.input[this.pos];)this.pos++;this.skipWhitespace(e)}},this.value_braces=function(){var e=0;this.match('{',!1);for(var t=this.pos,n=!1;;){if(!n)if('}'==this.input[this.pos]){if(0<e)e--;else{var i=this.pos;return this.match('}',!1),this.input.substring(t,i)}}else if('{'==this.input[this.pos])e++;else if(this.pos>=this.input.length-1)throw'Unterminated value';n='\\'==this.input[this.pos]&&!1==n,this.pos++}},this.value_comment=function(){for(var e='',t=0;!(this.tryMatch('}',!1)&&0==t);){if(e+=this.input[this.pos],'{'==this.input[this.pos]&&t++,'}'==this.input[this.pos]&&t--,this.pos>=this.input.length-1)throw'Unterminated value:'+this.input.substring(start);this.pos++}return e},this.value_quotes=function(){this.match('"',!1);for(var e=this.pos,t=!1;;){if(!t){if('"'==this.input[this.pos]){var n=this.pos;return this.match('"',!1),this.input.substring(e,n)}if(this.pos>=this.input.length-1)throw'Unterminated value:'+this.input.substring(e)}t='\\'==this.input[this.pos]&&!1==t,this.pos++}},this.single_value=function(){var e=this.pos;if(this.tryMatch('{'))return this.value_braces();if(this.tryMatch('"'))return this.value_quotes();var t=this.key();if(t.match('^[0-9]+$'))return t;if(0<=this.months.indexOf(t.toLowerCase()))return t.toLowerCase();throw'Value expected:'+this.input.substring(e)+' for key: '+t},this.value=function(){for(var e=[this.single_value()];this.tryMatch('#');)this.match('#'),e.push(this.single_value());return e.join('')},this.key=function(){for(var e=this.pos;;){if(this.pos>=this.input.length)throw'Runaway key';if(0<=this.notKey.indexOf(this.input[this.pos]))return this.input.substring(e,this.pos);this.pos++}},this.key_equals_value=function(){var e=this.key();if(this.tryMatch('=')){this.match('=');var t=this.value();return[e,t]}throw'... = value expected, equals sign missing:'+this.input.substring(this.pos)},this.key_value_list=function(){var e=this.key_equals_value();for(this.currentEntry.entryTags={},this.currentEntry.entryTags[e[0]]=e[1];this.tryMatch(',')&&(this.match(','),!this.tryMatch('}'));)e=this.key_equals_value(),this.currentEntry.entryTags[e[0]]=e[1]},this.entry_body=function(e){this.currentEntry={},this.currentEntry.citationKey=this.key(),this.currentEntry.entryType=e.substring(1),this.match(','),this.key_value_list(),this.entries.push(this.currentEntry)},this.directive=function(){return this.match('@'),'@'+this.key()},this.preamble=function(){this.currentEntry={},this.currentEntry.entryType='PREAMBLE',this.currentEntry.entry=this.value_comment(),this.entries.push(this.currentEntry)},this.comment=function(){this.currentEntry={},this.currentEntry.entryType='COMMENT',this.currentEntry.entry=this.value_comment(),this.entries.push(this.currentEntry)},this.entry=function(e){this.entry_body(e)},this.bibtex=function(){for(;this.matchAt();){var e=this.directive();this.match('{'),'@STRING'==e?this.string():'@PREAMBLE'==e?this.preamble():'@COMMENT'==e?this.comment():this.entry(e),this.match('}')}}}e.toJSON=function(e){var n=new t;return n.setInput(e),n.bibtex(),n.entries},e.toBibtex=function(e){var t='';for(var n in e){if(t+='@'+e[n].entryType,t+='{',e[n].citationKey&&(t+=e[n].citationKey+', '),e[n].entry&&(t+=e[n].entry),e[n].entryTags){var i='';for(var a in e[n].entryTags)0!=i.length&&(i+=', '),i+=a+'= {'+e[n].entryTags[a]+'}';t+=i}t+='}\n\n'}return t}})(t)});class ne extends HTMLElement{static get is(){return'd-bibliography'}constructor(){super();const e=new MutationObserver((e)=>{for(const t of e)('SCRIPT'===t.target.nodeName||'characterData'===t.type)&&this.parseIfPossible()});e.observe(this,{childList:!0,characterData:!0,subtree:!0})}parseIfPossible(){const e=this.querySelector('script');if(e)if('text/bibtex'==e.type){const t=e.textContent;if(this.bibtex!==t){this.bibtex=t;const e=c(this.bibtex);this.notify(e)}}else if('text/json'==e.type){const t=new Map(JSON.parse(e.textContent));this.notify(t)}else console.warn('Unsupported bibliography script tag type: '+e.type)}notify(e){const t=new CustomEvent('onBibliographyChanged',{detail:e,bubbles:!0});this.dispatchEvent(t)}static get observedAttributes(){return['src']}receivedBibtex(e){const t=c(e.target.response);this.notify(t)}attributeChangedCallback(e,t,n){var i=new XMLHttpRequest;i.onload=(t)=>this.receivedBibtex(t),i.onerror=()=>console.warn(`Could not load Bibtex! (tried ${n})`),i.responseType='text',i.open('GET',n,!0),i.send()}}const ie=v('d-citation-list',`
<style>

:host {
  contain: content;
}
.references {
  font-size: 12px;
  line-height: 20px;
}
.title {
  font-weight: 600;
}
ol {
  padding: 0 0 0 18px;
}
li {
  margin-bottom: 12px;
}
h3 {
  font-size: 15px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 0;
  color: rgba(0,0,0,0.65);
  line-height: 1em;
}
a {
  color: rgba(0, 0, 0, 0.6);
}

</style>

<h3>References</h3>
<ol class='references' id='references-list' ></ol>
`);class ae extends ie(HTMLElement){connectedCallback(){this.root.host.style.display='none'}set citations(e){h(this.root,e)}}var re=p(function(e){var t='undefined'==typeof window?'undefined'!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{}:window,n=function(){var e=/\blang(?:uage)?-(\w+)\b/i,n=0,a=t.Prism={util:{encode:function(e){return e instanceof i?new i(e.type,a.util.encode(e.content),e.alias):'Array'===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\u00a0/g,' ')},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,'__id',{value:++n}),e.__id},clone:function(e){var t=a.util.type(e);switch(t){case'Object':var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=a.util.clone(e[i]));return n;case'Array':return e.map&&e.map(function(e){return a.util.clone(e)});}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){i=i||a.languages;var r=i[e];if(2==arguments.length){for(var o in n=arguments[1],n)n.hasOwnProperty(o)&&(r[o]=n[o]);return r}var d={};for(var l in r)if(r.hasOwnProperty(l)){if(l==t)for(var o in n)n.hasOwnProperty(o)&&(d[o]=n[o]);d[l]=r[l]}return a.languages.DFS(a.languages,function(t,n){n===i[e]&&t!=e&&(this[t]=d)}),i[e]=d},DFS:function(e,t,n,r){for(var o in r=r||{},e)e.hasOwnProperty(o)&&(t.call(e,o,e[o],n||o),'Object'!==a.util.type(e[o])||r[a.util.objId(e[o])]?'Array'===a.util.type(e[o])&&!r[a.util.objId(e[o])]&&(r[a.util.objId(e[o])]=!0,a.languages.DFS(e[o],t,o,r)):(r[a.util.objId(e[o])]=!0,a.languages.DFS(e[o],t,null,r)))}},plugins:{},highlightAll:function(e,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run('before-highlightall',n);for(var r,o=n.elements||document.querySelectorAll(n.selector),d=0;r=o[d++];)a.highlightElement(r,!0===e,n.callback)},highlightElement:function(n,i,r){for(var o,d,l=n;l&&!e.test(l.className);)l=l.parentNode;l&&(o=(l.className.match(e)||[,''])[1].toLowerCase(),d=a.languages[o]),n.className=n.className.replace(e,'').replace(/\s+/g,' ')+' language-'+o,l=n.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,'').replace(/\s+/g,' ')+' language-'+o);var s=n.textContent,p={element:n,language:o,grammar:d,code:s};if(a.hooks.run('before-sanity-check',p),!p.code||!p.grammar)return p.code&&(p.element.textContent=p.code),void a.hooks.run('complete',p);if(a.hooks.run('before-highlight',p),i&&t.Worker){var u=new Worker(a.filename);u.onmessage=function(e){p.highlightedCode=e.data,a.hooks.run('before-insert',p),p.element.innerHTML=p.highlightedCode,r&&r.call(p.element),a.hooks.run('after-highlight',p),a.hooks.run('complete',p)},u.postMessage(JSON.stringify({language:p.language,code:p.code,immediateClose:!0}))}else p.highlightedCode=a.highlight(p.code,p.grammar,p.language),a.hooks.run('before-insert',p),p.element.innerHTML=p.highlightedCode,r&&r.call(n),a.hooks.run('after-highlight',p),a.hooks.run('complete',p)},highlight:function(e,t,n){var r=a.tokenize(e,t);return i.stringify(a.util.encode(r),n)},tokenize:function(e,t){var n=a.Token,r=[e],o=t.rest;if(o){for(var d in o)t[d]=o[d];delete t.rest}tokenloop:for(var d in t)if(t.hasOwnProperty(d)&&t[d]){var l=t[d];l='Array'===a.util.type(l)?l:[l];for(var s=0;s<l.length;++s){var u=l[s],c=u.inside,g=!!u.lookbehind,h=!!u.greedy,m=0,f=u.alias;if(h&&!u.pattern.global){var b=u.pattern.toString().match(/[imuy]*$/)[0];u.pattern=RegExp(u.pattern.source,b+'g')}u=u.pattern||u;for(var y,x=0,i=0;x<r.length;i+=r[x].length,++x){if(y=r[x],r.length>e.length)break tokenloop;if(!(y instanceof n)){u.lastIndex=0;var v=u.exec(y),w=1;if(!v&&h&&x!=r.length-1){if(u.lastIndex=i,v=u.exec(e),!v)break;for(var C=v.index+(g?v[1].length:0),S=v.index+v[0].length,E=x,k=i,p=r.length;E<p&&k<S;++E)k+=r[E].length,C>=k&&(++x,i=k);if(r[x]instanceof n||r[E-1].greedy)continue;w=E-x,y=e.slice(i,k),v.index-=i}if(v){g&&(m=v[1].length);var C=v.index+m,v=v[0].slice(m),S=C+v.length,T=y.slice(0,C),L=y.slice(S),A=[x,w];T&&A.push(T);var _=new n(d,c?a.tokenize(v,c):v,f,v,h);A.push(_),L&&A.push(L),Array.prototype.splice.apply(r,A)}}}}}return r},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,o=0;r=n[o++];)r(t)}}},i=a.Token=function(e,t,n,i,a){this.type=e,this.content=t,this.alias=n,this.length=0|(i||'').length,this.greedy=!!a};if(i.stringify=function(e,t,n){if('string'==typeof e)return e;if('Array'===a.util.type(e))return e.map(function(n){return i.stringify(n,t,e)}).join('');var r={type:e.type,content:i.stringify(e.content,t,n),tag:'span',classes:['token',e.type],attributes:{},language:t,parent:n};if('comment'==r.type&&(r.attributes.spellcheck='true'),e.alias){var d='Array'===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,d)}a.hooks.run('wrap',r);var l=Object.keys(r.attributes).map(function(e){return e+'="'+(r.attributes[e]||'').replace(/"/g,'&quot;')+'"'}).join(' ');return'<'+r.tag+' class="'+r.classes.join(' ')+'"'+(l?' '+l:'')+'>'+r.content+'</'+r.tag+'>'},!t.document)return t.addEventListener?(t.addEventListener('message',function(e){var n=JSON.parse(e.data),i=n.language,r=n.code,o=n.immediateClose;t.postMessage(a.highlight(r,a.languages[i],i)),o&&t.close()},!1),t.Prism):t.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName('script')).pop();return r&&(a.filename=r.src,document.addEventListener&&!r.hasAttribute('data-manual')&&('loading'===document.readyState?document.addEventListener('DOMContentLoaded',a.highlightAll):window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16))),t.Prism}();e.exports&&(e.exports=n),'undefined'!=typeof ee&&(ee.Prism=n),n.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/i,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.hooks.add('wrap',function(e){'entity'===e.type&&(e.attributes.title=e.content.replace(/&amp;/,'&'))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.util.clone(n.languages.css),n.languages.markup&&(n.languages.insertBefore('markup','tag',{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:'language-css'}}),n.languages.insertBefore('inside','attr-value',{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:'language-css'}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend('clike',{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),n.languages.insertBefore('javascript','keyword',{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),n.languages.insertBefore('javascript','string',{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:'punctuation'},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.insertBefore('markup','tag',{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:'language-javascript'}}),n.languages.js=n.languages.javascript,function(){'undefined'!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:'javascript',py:'python',rb:'ruby',ps1:'powershell',psm1:'powershell',sh:'bash',bat:'batch',h:'c',tex:'latex'};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function(t){for(var i,a=t.getAttribute('data-src'),r=t,o=/\blang(?:uage)?-(?!\*)(\w+)\b/i;r&&!o.test(r.className);)r=r.parentNode;if(r&&(i=(t.className.match(o)||[,''])[1]),!i){var d=(a.match(/\.(\w+)$/)||[,''])[1];i=e[d]||d}var l=document.createElement('code');l.className='language-'+i,t.textContent='',l.textContent='Loading\u2026',t.appendChild(l);var s=new XMLHttpRequest;s.open('GET',a,!0),s.onreadystatechange=function(){4==s.readyState&&(400>s.status&&s.responseText?(l.textContent=s.responseText,n.highlightElement(l)):400<=s.status?l.textContent='\u2716 Error '+s.status+' while fetching file: '+s.statusText:l.textContent='\u2716 Error: File does not exist or is empty')},s.send(null)})},document.addEventListener('DOMContentLoaded',self.Prism.fileHighlight))}()});Prism.languages.python={"triple-quoted-string":{pattern:/"""[\s\S]+?"""|'''[\s\S]+?'''/,alias:'string'},comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/("|')(?:\\\\|\\?[^\\\r\n])*?\1/,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)[a-z0-9_]+/i,lookbehind:!0},keyword:/\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,boolean:/\b(?:True|False)\b/,number:/\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,punctuation:/[{}[\];(),.:]/},Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};const oe=v('d-code',`
<style>

code {
  white-space: nowrap;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 2px;
  padding: 4px 7px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.6);
}

pre code {
  display: block;
  border-left: 2px solid rgba(0, 0, 0, .1);
  padding: 0 0 0 36px;
}

${'/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\n\ncode[class*="language-"],\npre[class*="language-"] {\n\tcolor: black;\n\tbackground: none;\n\ttext-shadow: 0 1px white;\n\tfont-family: Consolas, Monaco, \'Andale Mono\', \'Ubuntu Mono\', monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,\ncode[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\npre[class*="language-"]::selection, pre[class*="language-"] ::selection,\ncode[class*="language-"]::selection, code[class*="language-"] ::selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\n@media print {\n\tcode[class*="language-"],\n\tpre[class*="language-"] {\n\t\ttext-shadow: none;\n\t}\n}\n\n/* Code blocks */\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n\tbackground: #f5f2f0;\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #999;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #905;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #690;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n\tcolor: #a67f59;\n\tbackground: hsla(0, 0%, 100%, .5);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #07a;\n}\n\n.token.function {\n\tcolor: #DD4A68;\n}\n\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #e90;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n'}
</style>

<code id="code-container"></code>

`);class de extends N(oe(HTMLElement)){renderContent(){if(this.languageName=this.getAttribute('language'),!this.languageName)return void console.warn('You need to provide a language attribute to your <d-code> block to let us know how to highlight your code; e.g.:\n <d-code language="python">zeros = np.zeros(shape)</d-code>.');const e=re.languages[this.languageName];if(void 0==e)return void console.warn(`Distill does not yet support highlighting your code block in "${this.languageName}".`);let t=this.textContent;const n=this.shadowRoot.querySelector('#code-container');if(this.hasAttribute('block')){t=t.replace(/\n/,'');const e=t.match(/\s*/);if(t=t.replace(new RegExp('\n'+e,'g'),'\n'),t=t.trim(),n.parentNode instanceof ShadowRoot){const e=document.createElement('pre');this.shadowRoot.removeChild(n),e.appendChild(n),this.shadowRoot.appendChild(e)}}n.className=`language-${this.languageName}`,n.innerHTML=re.highlight(t,e)}}const le=v('d-footnote',`
<style>

d-math[block] {
  display: block;
}

sup {
  line-height: 1em;
  font-size: 0.75em;
  position: relative;
  top: 0;
  vertical-align: baseline;
  position: relative;
  top: -6px;
}

span {
  color: hsla(206, 90%, 20%, 0.7);
  cursor: default;
}

</style>

<div id="hover-box" class="dt-hover-box">
  <slot id="slot"></slot>
</div>

<sup><span id="fn-" data-hover-ref=""></span></sup>

`);class se extends le(HTMLElement){constructor(){super();const e=new MutationObserver(this.notify);e.observe(this,{childList:!0,characterData:!0,subtree:!0})}notify(){const e={detail:this,bubbles:!0},t=new CustomEvent('onFootnoteChanged',e);document.dispatchEvent(t)}connectedCallback(){se.currentFootnoteId+=1;const e=se.currentFootnoteId.toString();this.root.host.id='d-footnote-'+e;const t=this.root.querySelector('.dt-hover-box');t.id='dt-fn-hover-box-'+e;const n=this.root.querySelector('#fn-');n.setAttribute('id','fn-'+e),n.setAttribute('data-hover-ref',t.id),n.textContent=e,this.hoverbox=new B(t,n)}}se.currentFootnoteId=0;const pe=v('d-footnote-list',`
<style>
:host {
  contain: content;
}

ol {
  padding: 0 0 0 18px;
}
li {
  margin-bottom: 12px;
}
h3 {
  font-size: 15px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 0;
  color: rgba(0,0,0,0.65);
  line-height: 1em;
}
a {
  color: rgba(0, 0, 0, 0.6);
}

a.footnote-backlink {
  color: rgba(0,0,0,0.3);
  padding-left: 0.5em;
}


</style>

<h3>Footnotes</h3>
<ol></ol>
`);class ue extends pe(HTMLElement){connectedCallback(){this.list=this.root.querySelector('ol'),this.root.host.style.display='none'}set footnotes(e){if(this.list.innerHTML='',e.length){this.root.host.style.display='initial';for(const t of e){const e=document.createElement('li');e.id=t.id+'-listing',e.innerHTML=t.innerHTML;const n=document.createElement('a');n.setAttribute('class','footnote-backlink'),n.textContent='[\u21A9]',n.href='#'+t.id,e.appendChild(n),this.list.appendChild(e)}}else this.shadowRoot.host.style.display='none'}}const ce=v('d-references',`
<style>
d-references {
  display: block;
}
</style>
`,!1);class ge extends ce(HTMLElement){}class he extends HTMLElement{static get is(){return'd-toc'}connectedCallback(){this.getAttribute('prerendered')||(window.onload=()=>{const e=document.querySelector('d-article'),t=e.querySelectorAll('h2, h3');m(this,t)})}}class me extends HTMLElement{static get is(){return'd-figure'}static get readyQueue(){return me._readyQueue||(me._readyQueue=[]),me._readyQueue}static addToReadyQueue(e){-1===me.readyQueue.indexOf(e)&&(me.readyQueue.push(e),me.runReadyQueue())}static runReadyQueue(){if(!me.isScrolling){const e=me.readyQueue.sort((e,t)=>e._seenOnScreen-t._seenOnScreen).filter((e)=>!e._ready).pop();e&&(e.ready(),requestAnimationFrame(me.runReadyQueue))}}constructor(){super(),this._ready=!1,this._onscreen=!1,this._offscreen=!0}connectedCallback(){me.marginObserver.observe(this),me.directObserver.observe(this)}disconnectedCallback(){me.marginObserver.unobserve(this),me.directObserver.unobserve(this)}static get marginObserver(){if(!me._marginObserver){const e=window.innerHeight,t=Math.floor(2*e);me._marginObserver=new IntersectionObserver(me.didObserveMarginIntersection,{rootMargin:t+'px 0px '+t+'px 0px',threshold:0.01})}return me._marginObserver}static didObserveMarginIntersection(e){for(const t of e){const e=t.target;t.isIntersecting&&!e._ready&&me.addToReadyQueue(e)}}static get directObserver(){return me._directObserver||(me._directObserver=new IntersectionObserver(me.didObserveDirectIntersection,{rootMargin:'0px',threshold:[0,1]})),me._directObserver}static didObserveDirectIntersection(e){for(const t of e){const e=t.target;t.isIntersecting?(e._seenOnScreen=new Date,e._offscreen&&e.onscreen()):e._onscreen&&e.offscreen()}}addEventListener(e,t){super.addEventListener(e,t),'ready'===e&&-1!==me.readyQueue.indexOf(this)&&(this._ready=!1,me.runReadyQueue()),'onscreen'===e&&this.onscreen()}ready(){this._ready=!0,me.marginObserver.unobserve(this);const e=new CustomEvent('ready');this.dispatchEvent(e)}onscreen(){this._onscreen=!0,this._offscreen=!1;const e=new CustomEvent('onscreen');this.dispatchEvent(e)}offscreen(){this._onscreen=!1,this._offscreen=!0;const e=new CustomEvent('offscreen');this.dispatchEvent(e)}}if('undefined'!=typeof window){me.isScrolling=!1;let e;window.addEventListener('scroll',()=>{me.isScrolling=!0,clearTimeout(e),e=setTimeout(()=>{me.isScrolling=!1,console.log('Stopped Scrolling'),me.runReadyQueue()},500)},!0)}var fe='<svg viewBox="-607 419 64 64">\n  <path d="M-573.4,478.9c-8,0-14.6-6.4-14.6-14.5s14.6-25.9,14.6-40.8c0,14.9,14.6,32.8,14.6,40.8S-565.4,478.9-573.4,478.9z"/>\n</svg>\n';const be=v('distill-header',`
<style>
:host {
  box-sizing: border-box;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: transparent;
  z-index: ${1e6};
  color: rgba(0, 0, 0, 0.8);
  /*border-bottom: 1px solid rgba(0, 0, 0, 0.08);*/
  /*box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);*/
  contain: content;
}
.content {
  height: 70px;
}
a {
  font-size: 16px;
  height: 60px;
  line-height: 60px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  padding: 22px 0;
}
a:hover {
  color: rgba(255, 255, 255, 1);
}
svg {
  background-color: hsl(0, 0%, 15%);;
  padding: 8px;
  border-radius: 12px;
  width: 24px;
  position: relative;
  top: 16px;
  left: 16px;
  margin-right: 2px;
}
@media(min-width: 768px) {
  :host {
    height: 120px;
  }
  svg {
    top: 40px;
    left: 40px;
  }
}

@media(min-width: 1080px) {
  :host {
    height: 120px;
  }
  a {
    height: 70px;
    line-height: 70px;
    padding: 28px 0;
  }
  .logo {
  }
}
svg path {
  fill: white;
  stroke: rgba(255, 255, 255, 1.0);
  stroke-width: 3px;
}
.logo {
  font-size: 17px;
  font-weight: 200;
}
.nav {
  float: right;
  font-weight: 300;
}
.nav a {
  font-size: 12px;
  margin-left: 24px;
  text-transform: uppercase;
}

.name {
  opacity: 0.0;
  transition: opacity 0.5s
}

a:hover .name {
  opacity: 1.0;
}
</style>

<div class="content l-page">
  <a href="/" class="logo">
    ${fe}
  </a>
  <span class='name'>
    Distill
  </span>
</div>
`);class ye extends be(HTMLElement){}const xe=`
<style>
  distill-appendix {
    contain: content;
  }
  distill-appendix h3 {
    font-size: 15px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 0;
    color: rgba(0,0,0,0.65);
    line-height: 1em;
  }
  distill-appendix a {
    color: rgba(0, 0, 0, 0.6);
  }
  distill-appendix ol,
  distill-appendix ul {
    padding-left: 24px;
  }
  distill-appendix .citation {
    font-size: 11px;
    line-height: 15px;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    padding-left: 18px;
    border: 1px solid rgba(0,0,0,0.1);
    background: rgba(0, 0, 0, 0.02);
    padding: 10px 18px;
    border-radius: 3px;
    color: rgba(150, 150, 150, 1);
    overflow: hidden;
    margin-top: -12px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>
`;class ke extends HTMLElement{static get is(){return'distill-appendix'}set frontMatter(e){this.innerHTML=f(e)}}const ve=v('distill-footer',`
<style>

:host {
  display: block;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 300;
  padding: 40px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: hsl(180, 5%, 15%); /*hsl(200, 60%, 15%);*/
  text-align: left;

  contain: content;
}

.logo svg {
  width: 24px;
  position: relative;
  top: 4px;
  margin-right: 2px;
}

.logo svg path {
  fill: none;
  stroke: rgba(255, 255, 255, 0.8);
  stroke-width: 3px;
}

.logo {
  font-size: 17px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-right: 6px;
}

.container {
  grid-column: left / text;
}
</style>

<div class='container'>
<a href="/" class="logo">
  ${fe}
  Distill
</a> is dedicated to clear explanations of machine learning
</div>
`);class we extends ve(HTMLElement){}(function(e){const t='distill-prerendered-styles',n=e.getElementById(t);if(!n){const n=e.createElement('style');n.id=t,n.type='text/css';const i=e.createTextNode('html {\n  font-size: 20px;\n\tline-height: 1rem;\n\tfont-family: "Libre Franklin", "Helvetica Neue", sans-serif;\n  text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\na {\n  color: #004276;\n}\n\nfigure {\n  margin: 0;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ntable th {\n\ttext-align: left;\n}\n\ntable thead {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n\ntable thead th {\n  padding-bottom: 0.5em;\n}\n\ntable tbody :first-child td {\n  padding-top: 0.5em;\n}\n\npre {\n  overflow: auto;\n  max-width: 100%;\n}\n'+'@supports not (display: grid) {\n  d-article,\n  d-appendix,\n  d-byline,\n  distill-footer {\n    display: block;\n    padding: 8px;\n  }\n}\n\nd-article,\nd-appendix,\nd-byline,\ndistill-footer {\n  display: grid;\n  justify-items: stretch;\n  grid-template-columns: [start] 8px [left-outset] 8px [left] 1fr [text] 0px [page] 8px [text-outset] 0px [page-outset] 8px [end];\n}\n/*\n@media(min-width: 768px) {\n\n  d-article,\n  d-appendix,\n  d-byline,\n  distill-footer {\n    grid-template-columns: [start] 32px [left-outset] 32px [left] 3fr [text] 32px [text-outset] 1fr [page] 32px [page-outset] 32px [end];\n  }\n}*/\n\n@media(min-width: 960px) {\n  d-article,\n  d-appendix,\n  d-byline,\n  distill-footer {\n    grid-template-columns: [start] 1fr [left-outset] 32px [left] 672px [text] 32px [text-outset] 224px [page] 32px [page-outset] 1fr [end];\n  }\n}\n\nd-article,\nd-appendix,\nd-article > d-byline,\nd-article > distill-footer {\n  grid-column: start / end;\n}\n\n.l-body,\nd-article > * {\n  grid-column: left / text;\n}\n\n.l-page,\nd-figure {\n  grid-column: left / page;\n}\n\n.l-body-outset {\n  grid-column: left-outset / text-outset;\n}\n\n.l-page-outset {\n  grid-column: left-outset / page-outset;\n}\n\n.l-screen {\n  grid-column: start / end;\n}\n\n.l-screen-inset {\n  grid-column: start / end;\n  padding-left: 16px;\n  padding-left: 16px;\n}\n\n\n/* Aside */\n\naside {\n  grid-column: left / text;\n}\n\n@media(min-width: 768px) {\n  aside {\n    grid-column: text-outset / page;\n    font-size: 14px;\n    line-height: 1.3;\n  }\n\n  .side {\n    margin-left: 24px;\n    float: right;\n    width: 50%;\n  }\n}\n\n\n/* Rows and Columns */\n\n.row {\n  display: flex;\n}\n.column {\n  flex: 1;\n  box-sizing: border-box;\n  margin-right: 24px;\n  margin-left: 24px;\n}\n.row > .column:first-of-type {\n  margin-left: 0;\n}\n.row > .column:last-of-type {\n  margin-right: 0;\n}\n'+y+k+'d-article {\n  color: rgba(0, 0, 0, 0.8);\n  padding-top: 0;\n  padding-bottom: 72px;\n  overflow: hidden;\n  font-size: 14px;\n  line-height: 1.6em;\n  /*border-top: 1px solid rgba(0, 0, 0, 0.2);*/\n}\n@media(min-width: 768px) {\n  d-article {\n    font-size: 16px;\n  }\n}\n@media(min-width: 1024px) {\n  d-article {\n    font-size: 18px;\n  }\n}\n\nd-article h1 {\n  grid-column: left / page;\n  padding-top: 16px;\n  padding-bottom: 0;\n  margin-top: 0;\n  margin-bottom: 18px;\n  line-height: 1.15;\n  font-size: 32px;\n  font-weight: 700;\n}\n\nd-article h1+h2 {\n  grid-column: left / page;\n  border-bottom: none !important;\n  font-size: 22px;\n  font-weight: 300 !important;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  line-height: 1.6em !important;\n  margin-top: -2px !important;\n  margin-bottom: 36px !important;\n  border: none !important;\n}\n\n@media screen and (min-width: 768px), print {\n  d-article h1 {\n    font-size: 42px;\n  }\n  d-article h1+h2 {\n    font-size: 26px;\n  }\n}\n@media(min-width: 1024px) {\n  d-article h1 {\n    padding-top: 64px;\n    font-size: 42px;\n  }\n}\n@media(min-width: 1280px) {\n  d-article h1 {\n    padding-top: 96px;\n  }\n}\n\n/* H2 */\n\nd-article h2 {\n  font-weight: 400;\n  font-size: 26px;\n  line-height: 1.25em;\n  padding-top: 36px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  margin-bottom: 18px;\n  padding-bottom: 18px;\n}\n@media(min-width: 1024px) {\n  d-article h2 {\n    font-size: 30px;\n  }\n}\n\n/* H3 */\n\nd-article h3 {\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.4em;\n  margin-bottom: 24px;\n  margin-top: 0;\n}\n@media(min-width: 1024px) {\n  d-article h3 {\n    font-size: 20px;\n  }\n}\n\n/* H4 */\n\nd-article h4 {\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 14px;\n  line-height: 1.4em;\n}\nd-article a {\n  color: inherit;\n}\nd-article p,\nd-article ul,\nd-article ol {\n  margin-top: 0;\n  margin-bottom: 36px;\n}\nd-article a {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.4);\n  text-decoration: none;\n}\nd-article a:hover {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.8);\n}\nd-article .link {\n  text-decoration: underline;\n  cursor: pointer;\n}\nd-article ul,\nd-article ol {\n  padding-left: 24px;\n}\nd-article li {\n  margin-bottom: 24px;\n  margin-left: 0;\n  padding-left: 0;\n}\nd-article pre {\n  font-size: 14px;\n  margin-bottom: 20px;\n}\nd-article hr {\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  margin-top: 60px;\n  margin-bottom: 60px;\n}\nd-article section {\n  margin-top: 60px;\n  margin-bottom: 60px;\n}\n\n/* Figure */\n\nd-article figure {\n  position: relative;\n  margin-bottom: 36px;\n}\nd-article h1 + figure {\n  margin-top: 12px;\n}\nd-article figure img {\n  width: 100%;\n}\nd-article figure svg text,\nd-article figure svg tspan {\n}\nd-article figure figcaption {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n  line-height: 1.5em;\n}\n@media(min-width: 1024px) {\n  d-article figure figcaption {\n    font-size: 13px;\n  }\n}\nd-article figure.external img {\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);\n  padding: 18px;\n  box-sizing: border-box;\n}\nd-article figure figcaption a {\n  color: rgba(0, 0, 0, 0.6);\n}\n/*d-article figure figcaption::before {\n  position: relative;\n  display: block;\n  top: -20px;\n  content: "";\n  width: 25px;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n}*/\nd-article span.equation-mimic {\n  font-family: georgia;\n  font-size: 115%;\n  font-style: italic;\n}\nd-article figure figcaption b {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 1.0);\n}\nd-article > d-code,\nd-article section > d-code  {\n  display: block;\n}\nd-article > d-math[block],\nd-article section > d-math[block]  {\n  display: block;\n}\nd-article .citation {\n  color: #668;\n  cursor: pointer;\n}\nd-include {\n  width: auto;\n  display: block;\n}\n\nd-figure {\n  contain: content;\n  overflow: hidden;\n  height: 300px;\n}\n\n/* KaTeX */\n\n.katex, .katex-prerendered {\n  contain: content;\n  display: inline-block;\n}\n\n\nsup {\n  line-height: 1em;\n  font-size: 0.75em;\n  position: relative;\n  top: 0;\n  vertical-align: baseline;\n  position: relative;\n  top: -6px;\n}\n'+'@media print {\n\n  @page {\n    size: 8in 11in;\n    @bottom-right {\n      content: counter(page) " of " counter(pages);\n    }\n  }\n\n  html {\n    /* no general margins -- CSS Grid takes care of those */\n  }\n\n  p, code {\n    page-break-inside: avoid;\n  }\n\n  h2, h3 {\n    page-break-after: avoid;\n  }\n\n  d-header {\n    visibility: hidden;\n  }\n\n  d-footer {\n    display: none!important;\n  }\n\n}\n');n.appendChild(i),e.head.insertBefore(n,e.head.firstChild)}})(document);const Ce=[C,E,Z,ne,x,$,ae,de,se,ue,W,U,ge,he,me],Se=[ye,ke,we];(function(){const e=Ce.concat(Se);for(const t of e)customElements.define(t.is,t)})()});
//# sourceMappingURL=template.v2.js.map
