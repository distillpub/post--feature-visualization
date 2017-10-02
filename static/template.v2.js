(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var base = "html {\n  font-size: 20px;\n\tline-height: 1rem;\n\tfont-family: \"Libre Franklin\", \"Helvetica Neue\", sans-serif;\n  text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\na {\n  color: #004276;\n}\n\nfigure {\n  margin: 0;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ntable th {\n\ttext-align: left;\n}\n\ntable thead {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n\ntable thead th {\n  padding-bottom: 0.5em;\n}\n\ntable tbody :first-child td {\n  padding-top: 0.5em;\n}\n\npre {\n  overflow: auto;\n  max-width: 100%;\n}\n";

var layout = "@supports not (display: grid) {\n  d-article,\n  d-appendix,\n  d-byline,\n  distill-footer {\n    display: block;\n    padding: 8px;\n  }\n}\n\nd-article,\nd-appendix,\nd-byline,\ndistill-footer {\n  display: grid;\n  justify-items: stretch;\n  grid-template-columns: [start] 8px [left-outset] 8px [left] 1fr [text] 0px [page] 8px [text-outset] 0px [page-outset] 8px [end];\n}\n/*\n@media(min-width: 768px) {\n\n  d-article,\n  d-appendix,\n  d-byline,\n  distill-footer {\n    grid-template-columns: [start] 32px [left-outset] 32px [left] 3fr [text] 32px [text-outset] 1fr [page] 32px [page-outset] 32px [end];\n  }\n}*/\n\n@media(min-width: 960px) {\n  d-article,\n  d-appendix,\n  d-byline,\n  distill-footer {\n    grid-template-columns: [start] 1fr [left-outset] 32px [left] 672px [text] 32px [text-outset] 224px [page] 32px [page-outset] 1fr [end];\n  }\n}\n\nd-article,\nd-appendix,\nd-article > d-byline,\nd-article > distill-footer {\n  grid-column: start / end;\n}\n\n.l-body,\nd-article > * {\n  grid-column: left / text;\n}\n\n.l-page,\nd-figure {\n  grid-column: left / page;\n}\n\n.l-body-outset {\n  grid-column: left-outset / text-outset;\n}\n\n.l-page-outset {\n  grid-column: left-outset / page-outset;\n}\n\n.l-screen {\n  grid-column: start / end;\n}\n\n.l-screen-inset {\n  grid-column: start / end;\n  padding-left: 16px;\n  padding-left: 16px;\n}\n\n\n/* Aside */\n\naside {\n  grid-column: left / text;\n}\n\n@media(min-width: 768px) {\n  aside {\n    grid-column: text-outset / page;\n    font-size: 14px;\n    line-height: 1.3;\n  }\n\n  .side {\n    margin-left: 24px;\n    float: right;\n    width: 50%;\n  }\n}\n\n\n/* Rows and Columns */\n\n.row {\n  display: flex;\n}\n.column {\n  flex: 1;\n  box-sizing: border-box;\n  margin-right: 24px;\n  margin-left: 24px;\n}\n.row > .column:first-of-type {\n  margin-left: 0;\n}\n.row > .column:last-of-type {\n  margin-right: 0;\n}\n";

var article = "d-article {\n  color: rgba(0, 0, 0, 0.8);\n  padding-top: 0;\n  padding-bottom: 72px;\n  overflow: hidden;\n  font-size: 14px;\n  line-height: 1.6em;\n  /*border-top: 1px solid rgba(0, 0, 0, 0.2);*/\n}\n@media(min-width: 768px) {\n  d-article {\n    font-size: 16px;\n  }\n}\n@media(min-width: 1024px) {\n  d-article {\n    font-size: 18px;\n  }\n}\n\nd-article h1 {\n  grid-column: left / page;\n  padding-top: 16px;\n  padding-bottom: 0;\n  margin-top: 0;\n  margin-bottom: 18px;\n  line-height: 1.15;\n  font-size: 32px;\n  font-weight: 700;\n}\n\nd-article h1+h2 {\n  grid-column: left / page;\n  border-bottom: none !important;\n  font-size: 22px;\n  font-weight: 300 !important;\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n  line-height: 1.6em !important;\n  margin-top: -2px !important;\n  margin-bottom: 36px !important;\n  border: none !important;\n}\n\n@media screen and (min-width: 768px), print {\n  d-article h1 {\n    font-size: 42px;\n  }\n  d-article h1+h2 {\n    font-size: 26px;\n  }\n}\n@media(min-width: 1024px) {\n  d-article h1 {\n    padding-top: 64px;\n    font-size: 42px;\n  }\n}\n@media(min-width: 1280px) {\n  d-article h1 {\n    padding-top: 96px;\n  }\n}\n\n/* H2 */\n\nd-article h2 {\n  font-weight: 400;\n  font-size: 26px;\n  line-height: 1.25em;\n  padding-top: 36px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  margin-bottom: 18px;\n  padding-bottom: 18px;\n}\n@media(min-width: 1024px) {\n  d-article h2 {\n    font-size: 30px;\n  }\n}\n\n/* H3 */\n\nd-article h3 {\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.4em;\n  margin-bottom: 24px;\n  margin-top: 0;\n}\n@media(min-width: 1024px) {\n  d-article h3 {\n    font-size: 20px;\n  }\n}\n\n/* H4 */\n\nd-article h4 {\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 14px;\n  line-height: 1.4em;\n}\nd-article a {\n  color: inherit;\n}\nd-article p,\nd-article ul,\nd-article ol {\n  margin-top: 0;\n  margin-bottom: 36px;\n}\nd-article a {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.4);\n  text-decoration: none;\n}\nd-article a:hover {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.8);\n}\nd-article .link {\n  text-decoration: underline;\n  cursor: pointer;\n}\nd-article ul,\nd-article ol {\n  padding-left: 24px;\n}\nd-article li {\n  margin-bottom: 24px;\n  margin-left: 0;\n  padding-left: 0;\n}\nd-article pre {\n  font-size: 14px;\n  margin-bottom: 20px;\n}\nd-article hr {\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  margin-top: 60px;\n  margin-bottom: 60px;\n}\nd-article section {\n  margin-top: 60px;\n  margin-bottom: 60px;\n}\n\n/* Figure */\n\nd-article figure {\n  position: relative;\n  margin-bottom: 36px;\n}\nd-article h1 + figure {\n  margin-top: 12px;\n}\nd-article figure img {\n  width: 100%;\n}\nd-article figure svg text,\nd-article figure svg tspan {\n}\nd-article figure figcaption {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n  line-height: 1.5em;\n}\n@media(min-width: 1024px) {\n  d-article figure figcaption {\n    font-size: 13px;\n  }\n}\nd-article figure.external img {\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);\n  padding: 18px;\n  box-sizing: border-box;\n}\nd-article figure figcaption a {\n  color: rgba(0, 0, 0, 0.6);\n}\n/*d-article figure figcaption::before {\n  position: relative;\n  display: block;\n  top: -20px;\n  content: \"\";\n  width: 25px;\n  border-top: 1px solid rgba(0, 0, 0, 0.3);\n}*/\nd-article span.equation-mimic {\n  font-family: georgia;\n  font-size: 115%;\n  font-style: italic;\n}\nd-article figure figcaption b {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 1.0);\n}\nd-article > d-code,\nd-article section > d-code  {\n  display: block;\n}\nd-article > d-math[block],\nd-article section > d-math[block]  {\n  display: block;\n}\nd-article .citation {\n  color: #668;\n  cursor: pointer;\n}\nd-include {\n  width: auto;\n  display: block;\n}\n\nd-figure {\n  contain: content;\n  overflow: hidden;\n}\n\n/* KaTeX */\n\n.katex, .katex-prerendered {\n  contain: content;\n  display: inline-block;\n}\n\n\nsup {\n  line-height: 1em;\n  font-size: 0.75em;\n  position: relative;\n  top: 0;\n  vertical-align: baseline;\n  position: relative;\n  top: -6px;\n}\n";

var print = "@media print {\n\n  @page {\n    size: 8in 11in;\n    @bottom-right {\n      content: counter(page) \" of \" counter(pages);\n    }\n  }\n\n  html {\n    /* no general margins -- CSS Grid takes care of those */\n  }\n\n  p, code {\n    page-break-inside: avoid;\n  }\n\n  h2, h3 {\n    page-break-after: avoid;\n  }\n\n  d-header {\n    visibility: hidden;\n  }\n\n  d-footer {\n    display: none!important;\n  }\n\n}\n";

const style = `
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
`;


function bylineTemplate(frontMatter) {
  return `
<div class='byline'>
  <div class="authors">
    ${frontMatter.authors.map( author => `<div class="author">
      ${author.personalURL ?
    `<a class="name" href="${author.personalURL}">${author.name}</a>`
    :
    `<div class="name">${author.name}</div>`
}
      ${author.affiliationURL ?
    `<a class="affiliation" href="${author.affiliationURL}">${author.affiliation}</a>`
    :
    `<div class="affiliation">${author.affiliation}</div>`
}
    </div>`).join('\n')}
  </div>
  <div class="date">
    <div class="month">${frontMatter.publishedMonth}. ${frontMatter.publishedDay}</div>
    <div class="year">${frontMatter.publishedYear}</div>
  </div>
  <a class="citation" href="#citation">
    <div>${frontMatter.concatenatedAuthors}, ${frontMatter.publishedYear}</div>
  </a>
</div>
`;
}

class Byline extends HTMLElement {

  static get is() { return 'd-byline'; }

  set frontMatter(frontMatter) {
    this.innerHTML = bylineTemplate(frontMatter);
  }

}

var style$1 = "span.katex-display {\n  text-align: left;\n  padding: 8px 0 8px 0;\n  margin: 20px 0 20px 24px;\n}\n\nspan.katex {\n  -webkit-font-smoothing: antialiased;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 1.18em;\n}\n";

const styles = base + layout + style + style$1 + article + print;

function makeStyleTag(dom) {

  const styleTagId = 'distill-prerendered-styles';
  const prerenderedTag = dom.getElementById(styleTagId);
  if (!prerenderedTag) {
    const styleTag = dom.createElement('style');
    styleTag.id = styleTagId;
    styleTag.type = 'text/css';
    const cssTextTag = dom.createTextNode(styles);
    styleTag.appendChild(cssTextTag);
    dom.head.insertBefore(styleTag, dom.head.firstChild);
  }

}

/*global ShadyCSS*/

const Template = (name, templateString, useShadow = true) => {

  return (superclass) => {

    const template = document.createElement('template');
    template.innerHTML = templateString;

    if (useShadow && 'ShadyCSS' in window) {
      ShadyCSS.prepareTemplate(template, name);
    }

    return class extends superclass {

      static get is() { return name; }

      constructor() {
        super();

        this.clone = document.importNode(template.content, true);
        if (useShadow) {
          this.attachShadow({mode: 'open'});
          this.shadowRoot.appendChild(this.clone);
        }
      }

      connectedCallback() {
        if (useShadow) {
          if ('ShadyCSS' in window) {
            ShadyCSS.styleElement(this);
          }
        } else {
          this.insertBefore(this.clone, this.firstChild);
        }
      }

      get root() {
        if (useShadow) {
          return this.shadowRoot;
        } else {
          return this;
        }
      }

      /* TODO: Are we using these? Should we even? */
      $(query) {
        return this.root.querySelector(query);
      }

      $$(query) {
        return this.root.querySelectorAll(query);
      }
    };
  };
};

// const marginSmall = 16;
// const marginLarge = 3 * marginSmall;
// const margin = marginSmall + marginLarge;
// const gutter = marginSmall;
// const outsetAmount = margin / 2;
// const numCols = 4;
// const numGutters = numCols - 1;
// const columnWidth = (768 - 2 * marginLarge - numGutters * gutter) / numCols;
//
// const screenwidth = 768;
// const pageWidth = screenwidth - 2 * marginLarge;
// const bodyWidth = pageWidth - columnWidth - gutter;

function body(selector) {
  return `${selector} {
      grid-column: left / text;
    }
  `;
}

const T = Template('d-abstract', `
<style>
  :host {
    display: block;
    font-size: 23px;
    line-height: 1.7em;
    margin-top: 64px;
    margin-bottom: 64px;
  }
  ${body('d-abstract')}
</style>

<slot></slot>
`);

class Abstract extends T(HTMLElement) {

}

const T$1 = Template('d-appendix', `
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

`, false);

class Appendix extends T$1(HTMLElement) {

}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const zeroPad = n => n < 10 ? '0' + n : n;

const RFC = function(date) {
  const day = days[date.getDay()].substring(0, 3);
  const paddedDate = zeroPad(date.getDate());
  const month = months[date.getMonth()].substring(0,3);
  const year = date.getFullYear().toString();
  const hours = date.getUTCHours().toString();
  const minutes = date.getUTCMinutes().toString();
  const seconds = date.getUTCSeconds().toString();
  return `${day}, ${paddedDate} ${month} ${year} ${hours}:${minutes}:${seconds} Z`;
};

class Author {

  // constructor(name='', personalURL='', affiliation='', affiliationURL='') {
  //   this.name = name; // 'Chris Olah'
  //   this.personalURL = personalURL; // 'https://colah.github.io'
  //   this.affiliation = affiliation; // 'Google Brain'
  //   this.affiliationURL = affiliationURL; // 'https://g.co/brain'
  // }

  constructor(object) {
    this.name = object.author; // 'Chris Olah'
    this.personalURL = object.authorURL; // 'https://colah.github.io'
    this.affiliation = object.affiliation; // 'Google Brain'
    this.affiliationURL = object.affiliationURL; // 'https://g.co/brain'
  }

  // 'Chris'
  get firstName() {
    const names = this.name.split(' ');
    return names.slice(0, names.length - 1).join(' ');
  }

  // 'Olah'
  get lastName() {
    const names = this.name.split(' ');
    return names[names.length -1];
  }
}

class FrontMatter {
  constructor() {
    this.title = ''; // 'Attention and Augmented Recurrent Neural Networks'
    this.description = ''; // 'A visual overview of neural attention...'
    this.authors = []; // Array of Author(s)

    this.bibliography = new Map();
    this.bibliographyParsed = false;
    //  {
    //    'gregor2015draw': {
    //      'title': 'DRAW: A recurrent neural network for image generation',
    //      'author': 'Gregor, Karol and Danihelka, Ivo and Graves, Alex and Rezende, Danilo Jimenez and Wierstra, Daan',
    //      'journal': 'arXiv preprint arXiv:1502.04623',
    //      'year': '2015',
    //      'url': 'https://arxiv.org/pdf/1502.04623.pdf',
    //      'type': 'article'
    //    },
    //  }

    // Citation keys should be listed in the order that they are appear in the document.
    // Each key refers to a key in the bibliography dictionary.
    this.citations = []; // [ 'gregor2015draw', 'mercier2011humans' ]
    this.citationsCollected = false;

    //
    // Assigned from posts.csv
    //

    //  publishedDate: 2016-09-08T07:00:00.000Z,
    //  tags: [ 'rnn' ],
    //  distillPath: '2016/augmented-rnns',
    //  githubPath: 'distillpub/post--augmented-rnns',
    //  doiSuffix: 1,

    //
    // Assigned from journal
    //
    this.journal = {};
    //  journal: {
    //    'title': 'Distill',
    //    'full_title': 'Distill',
    //    'abbrev_title': 'Distill',
    //    'url': 'http://distill.pub',
    //    'doi': '10.23915/distill',
    //    'publisherName': 'Distill Working Group',
    //    'publisherEmail': 'admin@distill.pub',
    //    'issn': '2476-0757',
    //    'editors': [...],
    //    'committee': [...]
    //  }
    //  volume: 1,
    //  issue: 9,
    this.publishedDate = new Date();

    this.katex = {};

    //
    // Assigned from publishing process
    //

    //  githubCompareUpdatesUrl: 'https://github.com/distillpub/post--augmented-rnns/compare/1596e094d8943d2dc0ea445d92071129c6419c59...3bd9209e0c24d020f87cf6152dcecc6017cbc193',
    //  updatedDate: 2017-03-21T07:13:16.000Z,
    //  doi: '10.23915/distill.00001',

  }

  // Example:
  // title: Demo Title Attention and Augmented Recurrent Neural Networks
  // published: Jan 10, 2017
  // authors:
  // - Chris Olah:
  // - Shan Carter: http://shancarter.com
  // affiliations:
  // - Google Brain:
  // - Google Brain: http://g.co/brain

  mergeFromYMLFrontmatter(data) {
    this.title = data.title;
    this.publishedDate = new Date(data.published);
    this.description = data.description;
    this.authors = data.authors.map( (authorObject) => new Author(authorObject));
    this.katex = data.katex;
    this.password = data.password;
  }

  //
  // Computed Properties
  //

  // 'http://distill.pub/2016/augmented-rnns',
  set url(value) {
    this._url = value;
  }
  get url() {
    if (this._url) {
      return this._url;
    } else if (this.distillPath && this.journal.url) {
      return this.journal.url + '/' + this.distillPath;
    } else if (this.journal.url) {
      return this.journal.url;
    }
  }

  // 'https://github.com/distillpub/post--augmented-rnns',
  get githubUrl() {
    return 'https://github.com/' + this.githubPath;
  }

  // TODO resolve differences in naming of URL/Url/url.
  // 'http://distill.pub/2016/augmented-rnns/thumbnail.jpg',
  set previewURL(value) {
    this._previewURL = value;
  }
  get previewURL() {
    return this._previewURL ? this._previewURL : this.url + '/thumbnail.jpg';
  }

  // 'Thu, 08 Sep 2016 00:00:00 -0700',
  get publishedDateRFC() {
    return RFC(this.publishedDate);
  }

  // 'Thu, 08 Sep 2016 00:00:00 -0700',
  get updatedDateRFC() {
    return RFC(this.updatedDate);
  }

  // 2016,
  get publishedYear() {
    return this.publishedDate.getFullYear();
  }

  // 'Sept',
  get publishedMonth() {
    return months[this.publishedDate.getMonth()];
  }

  // 8,
  get publishedDay() {
    return this.publishedDate.getDate();
  }

  // '09',
  get publishedMonthPadded() {
    return zeroPad(this.publishedDate.getMonth() + 1);
  }

  // '08',
  get publishedDayPadded() {
    return zeroPad(this.publishedDate.getDate());
  }

  // 'Olah & Carter',
  get concatenatedAuthors() {
    if (this.authors.length > 2) {
      return this.authors[0].lastName + ', et al.';
    } else if (this.authors.length === 2) {
      return this.authors[0].lastName + ' & ' + this.authors[1].lastName;
    } else if (this.authors.length === 1) {
      return this.authors[0].lastName;
    }
  }

  // 'Olah, Chris and Carter, Shan',
  get bibtexAuthors() {
    return this.authors.map(author => {
      return author.lastName + ', ' + author.firstName;
    }).join(' and ');
  }

  // 'olah2016attention'
  get slug() {
    let slug = '';
    if (this.authors.length) {
      slug += this.authors[0].lastName.toLowerCase();
      slug += this.publishedYear;
      slug += this.title.split(' ')[0].toLowerCase();
    }
    return slug || 'Untitled';
  }

  get bibliographyEntries() {
    return new Map(this.citations.map( citationKey => {
      const entry = this.bibliography.get(citationKey);
      return [citationKey, entry];
    }));
  }

}

const Mutating = (superclass) => {
  return class extends superclass {

    constructor() {
      super();

      // set up mutation observer
      const options = {childList: true, characterData: true, subtree: true};
      const observer = new MutationObserver( () => {
        observer.disconnect();
        this.renderIfPossible();
        observer.observe(this, options);
      });

      // ...and listen for changes
      observer.observe(this, options);
    }

    connectedCallback() {
      super.connectedCallback();

      this.renderIfPossible();
    }

    // potential TODO: check if this is enough for all our usecases
    // maybe provide a custom function to tell if we have enough information to render
    renderIfPossible() {
      if (this.textContent && this.root) {
        this.renderContent();
      }
    }

    renderContent() {
      console.error(`Your class ${this.constructor.name} must provide a custom renderContent() method!` );
    }

  }; // end class
}; // end mixin function

// This is a straight concatenation of code from KaTeX's contrib folder,
// but we aren't using some of their helpers that don't work well outside a browser environment.

/*global katex */

const findEndOfMath = function(delimiter, text, startIndex) {
  // Adapted from
  // https://github.com/Khan/perseus/blob/master/src/perseus-markdown.jsx
  let index = startIndex;
  let braceLevel = 0;

  const delimLength = delimiter.length;

  while (index < text.length) {
    const character = text[index];

    if (braceLevel <= 0 &&
      text.slice(index, index + delimLength) === delimiter) {
      return index;
    } else if (character === '\\') {
      index++;
    } else if (character === '{') {
      braceLevel++;
    } else if (character === '}') {
      braceLevel--;
    }

    index++;
  }

  return -1;
};

const splitAtDelimiters = function(startData, leftDelim, rightDelim, display) {
  const finalData = [];

  for (let i = 0; i < startData.length; i++) {
    if (startData[i].type === 'text') {
      const text = startData[i].data;

      let lookingForLeft = true;
      let currIndex = 0;
      let nextIndex;

      nextIndex = text.indexOf(leftDelim);
      if (nextIndex !== -1) {
        currIndex = nextIndex;
        finalData.push({
          type: 'text',
          data: text.slice(0, currIndex),
        });
        lookingForLeft = false;
      }

      while (true) { // eslint-disable-line no-constant-condition
        if (lookingForLeft) {
          nextIndex = text.indexOf(leftDelim, currIndex);
          if (nextIndex === -1) {
            break;
          }

          finalData.push({
            type: 'text',
            data: text.slice(currIndex, nextIndex),
          });

          currIndex = nextIndex;
        } else {
          nextIndex = findEndOfMath(
            rightDelim,
            text,
            currIndex + leftDelim.length);
          if (nextIndex === -1) {
            break;
          }

          finalData.push({
            type: 'math',
            data: text.slice(
              currIndex + leftDelim.length,
              nextIndex),
            rawData: text.slice(
              currIndex,
              nextIndex + rightDelim.length),
            display: display,
          });

          currIndex = nextIndex + rightDelim.length;
        }

        lookingForLeft = !lookingForLeft;
      }

      finalData.push({
        type: 'text',
        data: text.slice(currIndex),
      });
    } else {
      finalData.push(startData[i]);
    }
  }

  return finalData;
};


const splitWithDelimiters = function(text, delimiters) {
  let data = [{type: 'text', data: text}];
  for (let i = 0; i < delimiters.length; i++) {
    const delimiter = delimiters[i];
    data = splitAtDelimiters(
      data, delimiter.left, delimiter.right,
      delimiter.display || false);
  }
  return data;
};

/* Note: optionsCopy is mutated by this method. If it is ever exposed in the
 * API, we should copy it before mutating.
 */
const renderMathInText = function(text, optionsCopy) {
  const data = splitWithDelimiters(text, optionsCopy.delimiters);
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < data.length; i++) {
    if (data[i].type === 'text') {
      fragment.appendChild(document.createTextNode(data[i].data));
    } else {
      const tag = document.createElement('d-math');
      const math = data[i].data;
      // Override any display mode defined in the settings with that
      // defined by the text itself
      optionsCopy.displayMode = data[i].display;
      try {
        tag.textContent = math;
        if (optionsCopy.displayMode) {
          tag.setAttribute('block', '');
        }
      } catch (e) {
        if (!(e instanceof katex.ParseError)) {
          throw e;
        }
        optionsCopy.errorCallback(
          'KaTeX auto-render: Failed to parse `' + data[i].data +
          '` with ',
          e
        );
        fragment.appendChild(document.createTextNode(data[i].rawData));
        continue;
      }
      fragment.appendChild(tag);
    }
  }

  return fragment;
};

const renderElem = function(elem, optionsCopy) {
  for (let i = 0; i < elem.childNodes.length; i++) {
    const childNode = elem.childNodes[i];
    if (childNode.nodeType === 3) {
      // Text node
      const frag = renderMathInText(childNode.textContent, optionsCopy);
      i += frag.childNodes.length - 1;
      elem.replaceChild(frag, childNode);
    } else if (childNode.nodeType === 1) {
      // Element node
      const shouldRender = optionsCopy.ignoredTags.indexOf(
        childNode.nodeName.toLowerCase()) === -1;

      if (shouldRender) {
        renderElem(childNode, optionsCopy);
      }
    }
    // Otherwise, it's something else, and ignore it.
  }
};

const defaultAutoRenderOptions = {
  delimiters: [
    {left: '$$', right: '$$', display: true},
    {left: '\\[', right: '\\]', display: true},
    {left: '\\(', right: '\\)', display: false},
    // LaTeX uses this, but it ruins the display of normal `$` in text:
    // {left: '$', right: '$', display: false},
  ],

  ignoredTags: [
    'script', 'noscript', 'style', 'textarea', 'pre', 'code', 'svg',
  ],

  errorCallback: function(msg, err) {
    console.error(msg, err);
  },
};

const renderMathInElement = function(elem, options) {
  if (!elem) {
    throw new Error('No element provided to render');
  }

  const optionsCopy = Object.assign({}, defaultAutoRenderOptions, options);
  renderElem(elem, optionsCopy);
};

/*global katex */
const katexJSURL = 'https://distill.pub/third-party/katex/katex.min.js';
const katexCSSTag = '<link rel="stylesheet" href="https://distill.pub/third-party/katex/katex.min.css" crossorigin="anonymous">';

const T$3 = Template('d-math', `
${katexCSSTag}
<style>

:host {
  display: inline-block;
  contain: content;
}

:host([block]) {
  display: block;
}

${style$1}
</style>
<span id='katex-container'></span>
`);

// DMath, not Math, because that would conflict with the JS built-in
class DMath extends Mutating(T$3(HTMLElement)) {

  static set katexOptions(options) {
    DMath._katexOptions = options;
    if (DMath.katexOptions.delimiters && !DMath.katexAdded) {
      DMath.addKatex();
    }
  }

  static get katexOptions() {
    if (!DMath._katexOptions) {
      DMath._katexOptions = {
        delimiters: [ { 'left':'$', 'right':'$', 'display':true } ]
      };
    }
    return DMath._katexOptions;
  }

  static katexLoadedCallback() {
    // render all d-math tags
    const mathTags = document.querySelectorAll('d-math');
    for (const mathTag of mathTags) {
      mathTag.renderContent();
    }
    // transform inline delimited math to d-math tags
    if (DMath.katexOptions.delimiters) {
      const article = document.querySelector('d-article');
      renderMathInElement(article, DMath.katexOptions);
    }
  }

  static addKatex() {
    // css tag can use this convenience function
    document.head.insertAdjacentHTML('beforeend', katexCSSTag);
    // script tag has to be created to work properly
    const scriptTag = document.createElement('script');
    scriptTag.src = katexJSURL;
    scriptTag.async = true;
    scriptTag.onload = DMath.katexLoadedCallback;
    scriptTag.crossorigin = 'anonymous';
    document.head.appendChild(scriptTag);

    DMath.katexAdded = true;
  }

  get options() {
    const localOptions = { displayMode: this.hasAttribute('block') };
    return Object.assign(localOptions, DMath.katexOptions);
  }

  connectedCallback() {
    super.connectedCallback();
    if (!DMath.katexAdded) {
      DMath.addKatex();
    }
  }

  renderContent() {
    if (typeof katex !== 'undefined') {
      const container = this.root.querySelector('#katex-container');
      katex.render(this.textContent, container, this.options);
    }
  }

}

DMath.katexAdded = false;
DMath.inlineMathRendered = false;
window.DMath = DMath; // TODO: check if this can be removed, or if we should expose a distill global

function author_string(ent, template, sep, finalSep){
  var names = ent.author.split(' and ');
  let name_strings = names.map(name => {
    name = name.trim();
    if (name.indexOf(',') != -1){
      var last = name.split(',')[0].trim();
      var firsts = name.split(',')[1];
    } else {
      var last = name.split(' ').slice(-1)[0].trim();
      var firsts = name.split(' ').slice(0,-1).join(' ');
    }
    var initials = '';
    if (firsts != undefined) {
      initials = firsts.trim().split(' ').map(s => s.trim()[0]);
      initials = initials.join('.')+'.';
    }
    return template.replace('${F}', firsts)
      .replace('${L}', last)
      .replace('${I}', initials);
  });
  if (names.length > 1) {
    var str = name_strings.slice(0, names.length-1).join(sep);
    str += (finalSep || sep) + name_strings[names.length-1];
    return str;
  } else {
    return name_strings[0];
  }
}

function venue_string(ent) {
  var cite = (ent.journal || ent.booktitle || '');
  if ('volume' in ent){
    var issue = ent.issue || ent.number;
    issue = (issue != undefined)? '('+issue+')' : '';
    cite += ', Vol ' + ent.volume + issue;
  }
  if ('pages' in ent){
    cite += ', pp. ' + ent.pages;
  }
  if (cite != '') { cite += '. '; }
  if ('publisher' in ent){
    cite += ent.publisher;
    if (cite[cite.length-1] != '.') { cite += '.'; }
  }
  return cite;
}

function link_string(ent){
  if ('url' in ent){
    var url = ent.url;
    var arxiv_match = (/arxiv\.org\/abs\/([0-9\.]*)/).exec(url);
    if (arxiv_match != null){
      url = `http://arxiv.org/pdf/${arxiv_match[1]}.pdf`;
    }

    if (url.slice(-4) == '.pdf'){
      var label = 'PDF';
    } else if (url.slice(-5) == '.html') {
      var label = 'HTML';
    }
    return ` &ensp;<a href="${url}">[${label||'link'}]</a>`;
  }/* else if ("doi" in ent){
    return ` &ensp;<a href="https://doi.org/${ent.doi}" >[DOI]</a>`;
  }*/ else {
    return '';
  }
}
function doi_string(ent, new_line){
  if ('doi' in ent) {
    return `${new_line?'<br>':''} <a href="https://doi.org/${ent.doi}" style="text-decoration:inherit;">DOI: ${ent.doi}</a>`;
  } else {
    return '';
  }
}

function bibliography_cite(ent, fancy){
  if (ent){
    var cite =  '<b>' + ent.title + '</b> ';
    cite += link_string(ent) + '<br>';
    cite += author_string(ent, '${L}, ${I}', ', ', ' and ');
    if (ent.year || ent.date){
      cite += ', ' + (ent.year || ent.date) + '. ';
    } else {
      cite += '. ';
    }
    cite += venue_string(ent);
    cite += doi_string(ent);
    return cite;
    /*var cite =  author_string(ent, "${L}, ${I}", ", ", " and ");
    if (ent.year || ent.date){
      cite += ", " + (ent.year || ent.date) + ". "
    } else {
      cite += ". "
    }
    cite += "<b>" + ent.title + "</b>. ";
    cite += venue_string(ent);
    cite += doi_string(ent);
    cite += link_string(ent);
    return cite*/
  } else {
    return '?';
  }
}

function hover_cite(ent){
  if (ent){
    var cite = '';
    cite += '<b>' + ent.title + '</b>';
    cite += link_string(ent);
    cite += '<br>';

    var a_str = author_string(ent, '${I} ${L}', ', ') + '.';
    var v_str = venue_string(ent).trim() + ' ' + ent.year + '. ' + doi_string(ent, true);

    if ((a_str+v_str).length < Math.min(40, ent.title.length)) {
      cite += a_str + ' ' + v_str;
    } else {
      cite += a_str + '<br>' + v_str;
    }
    return cite;
  } else {
    return '?';
  }
}


//https://scholar.google.com/scholar?q=allintitle%3ADocument+author%3Aolah

function make_hover_css(pos, tag) {
  const pretty = window.innerWidth > 600;
  const padding = pretty? 18 : 12;
  const outer_padding = pretty ? 18 : 0;
  // const bbox = document.querySelector('body').getBoundingClientRect();
  const bbox = tag.offsetParent.getBoundingClientRect();
  let left = pos[0] - bbox.left, top = pos[1] - bbox.top;
  let width = Math.min(window.innerWidth-2*outer_padding, 648);
  left = Math.min(left, window.innerWidth-width-outer_padding);
  width = width - 2 * padding;
  return (`position: absolute;
     background-color: #FFF;
     opacity: 0.95;
     max-width: ${width}px;
     top: ${top}px;
     left: ${left}px;
     border: 1px solid rgba(0, 0, 0, 0.25);
     padding: ${padding}px;
     border-radius: ${pretty? 3 : 0}px;
     box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.2);
     z-index: ${1e6};`);
}

const timeoutDuration = 50000;

class HoverBox {

  constructor(contentHTML, triggerElement) {
    this.visible = false;
    // div hold teh contents of the box that will become visible
    this.div = contentHTML;
    this.bindDivEvents(this.div);
    // triggerElement holds the element that needs to be hovered etc to show contents
    this.triggerElement = triggerElement;
    this.bindTriggerEvents(this.triggerElement);
    this.hide();
  }

  bindDivEvents(node) {
    // For mice, same behavior as hovering on links
    this.div.addEventListener('mouseover', () => {
      if (!this.visible) { this.showAtNode(node); }
      this.stopTimeout();
    });
    this.div.addEventListener('mouseout', () => {
      this.extendTimeout(timeoutDuration);
    });
    // Don't trigger body touchstart event when touching within box
    this.div.addEventListener('touchstart', (event) => {
      event.stopPropagation();
    }, {passive: true});
    // Close box when touching outside box
    document.body.addEventListener('touchstart', () => {
      this.hide();
    }, {passive: true});
  }

  bindTriggerEvents(node) {
    node.addEventListener('mouseover', () => {
      if (!this.visible) {
        this.showAtNode(node);
      }
      this.stopTimeout();
    });

    node.addEventListener('mouseout', () => {
      this.extendTimeout(timeoutDuration);
    });

    node.addEventListener('touchstart', (event) => {
      if (this.visible) {
        this.hide();
      } else {
        this.showAtNode(node);
      }
      // Don't trigger body touchstart event when touching link
      event.stopPropagation();
    }, {passive: true});
  }

  show(position) {
    this.visible = true;
    const css = make_hover_css(position, this.triggerElement);
    this.div.setAttribute('style', css );
  }

  showAtNode(node) {
    const bbox = node.getBoundingClientRect();
    this.show([bbox.right, bbox.bottom]);
  }

  hide() {
    this.visible = false;
    this.div.setAttribute('style', 'display:none');
    this.stopTimeout();
  }

  stopTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  extendTimeout(time) {
    this.stopTimeout();
    this.timeout = setTimeout(() => {
      this.hide();
    }, time);
  }

}

const T$4 = Template('d-cite', `
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
`);

function collectCitations(dom=document) {
  const citations = new Set();
  const citeTags = dom.querySelectorAll('d-cite');
  for (const tag of citeTags) {
    const keys = tag.getAttribute('key').split(',');
    for (const key of keys) {
      citations.add(key);
    }
  }
  return [...citations];
}

class Cite extends T$4(HTMLElement) {

  /* Lifecycle */

  // constructor() {
  //   super();
  //   // Cite.currentId += 1;
  //   // this.citeId = Cite.currentId;
  // }

  connectedCallback() {
    // this.notify();

    this.hoverDiv = this.root.querySelector('.dt-hover-box');
    this.outerSpan = this.root.querySelector('#citation-');
    this.innerSpan = this.root.querySelector('.citation-number');
    // this.outerSpan.id = `citation-${this.citeId}`;
    // this.hoverDiv.id = `dt-cite-hover-box-${this.citeId}`;
    // console.log(this, this.hoverDiv, this.outerSpan, this.innerSpan);
    this.hoverbox = new HoverBox(this.hoverDiv, this.outerSpan);
  }

  disconnectedCallback() {
    const options = { detail: [this, this.keys], bubbles: true };
    const event = new CustomEvent('onCiteKeyRemoved', options);
    document.dispatchEvent(event);
  }

  /* Observed Attributes */

  // renderCitationNumbers(citations) {
  //   const numbers = this._keys.map( (key) => {
  //     const index = citations.indexOf(key);
  //     return index == -1 ? '?' : index + 1 + '';
  //   });
  //   const text = "[" + numbers.join(", ") + "]";
  //   this.innerSpan.textContent = text;
  // }



  /* observe 'key' attribute */

  static get observedAttributes() {
    return ['key'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const eventName = oldValue ? 'onCiteKeyChanged' : 'onCiteKeyCreated';
    const keys = newValue.split(',');
    const options = { detail: [this, keys], bubbles: true };
    const event = new CustomEvent(eventName, options);
    document.dispatchEvent(event);
  }

  set key(value) {
    this.setAttribute('key', value);
  }

  get key() {
    return this.getAttribute('key');
  }

  get keys() {
    return this.getAttribute('key').split(',');
  }

  /* Setters & Rendering */

  set numbers(numbers) {
    const numberStrings = numbers.map( index => {
      return index == -1 ? '?' : index + 1 + '';
    });
    const textContent = '[' + numberStrings.join(', ') + ']';
    const innerSpan = this.root.querySelector('.citation-number');
    innerSpan.textContent = textContent;
  }

  set entries(entries) {
    const div = this.root.querySelector('#hover-box');
    div.innerHTML = entries.map(hover_cite).join('<br><br>');
  }

  // renderContent() {
  //   const bibliography = document.querySelector('d-bibliography');
  //   if (bibliography && bibliography.finishedLoading) {
  //     customElements.whenDefined('d-bibliography').then( () => {
  //       const keys = this.key.split(",");
  //
  //       // set up hidden hover box
  //       const div = this.root.querySelector('.dt-hover-box');
  //       div.innerHTML = keys.map( (key) => {
  //         return bibliography.getEntry(key);
  //       }).map(hover_cite).join('<br><br>');
  //       div.id ='dt-cite-hover-box-' + this.citeId;
  //
  //       // set up visible citation marker
  //       const outerSpan = this.root.querySelector('#citation-');
  //       outerSpan.id = `citation-${this.citeId}`;
  //       // outerSpan.setAttribute('data-hover', dataHoverString); // directly tell HoverBox instead?
  //       const innerSpan = this.root.querySelector('.citation-number');
  //       innerSpan.textContent = inline_cite_short(keys, bibliography);
  //
  //       HoverBox.get_box(div).bind(outerSpan);
  //     });
  //   } else {
  //     console.error(`You used a d-cite tag (${key}) without including a d-bibliography tag in your article. We can't lookup your citation this way.`)
  //   }
  // }

}

function parseFrontmatter(element) {
  const scriptTag = element.querySelector('script');
  if (scriptTag) {
    const type = scriptTag.getAttribute('type');
    if (type.split('/')[1] == 'json') {
      const content = scriptTag.textContent;
      return JSON.parse(content);
    } else {
      console.error('Distill only supoprts JSON frontmatter tags anymore; no more YAML.');
    }
  } else {
    console.error('You added a frontmatter tag but did not provide a script tag with front matter data in it. Please take a look at our templates.');
  }
  return {};
}

class FrontMatter$1 extends HTMLElement {

  static get is() { return 'd-front-matter'; }

  constructor() {
    super();

    const options = {childList: true, characterData: true, subtree: true};
    const observer = new MutationObserver( (entries) => {
      for (const entry of entries) {
        if (entry.target.nodeName === 'SCRIPT' || entry.type === 'characterData') {
          const data = parseFrontmatter(this);
          this.notify(data);
        }
      }
    });
    observer.observe(this, options);
  }

  notify(data) {
    const options = { detail: data, bubbles: true };
    const event = new CustomEvent('onFrontMatterChanged', options);
    document.dispatchEvent(event);
  }

}

var html = function(dom) {

  const head = dom.querySelector('head');

  // set language to 'en'
  if (!dom.querySelector('html').getAttribute('lang')) {
    dom.querySelector('html').setAttribute('lang', 'en');
  }

  // set charset to 'utf-8'
  if (!dom.querySelector('meta[charset]')) {
    const meta = dom.createElement('meta');
    meta.setAttribute('charset', 'utf-8');
    head.appendChild(meta);
  }

  // set viewport
  if (!dom.querySelector('meta[name=viewport]')) {
    const meta = dom.createElement('meta');
    meta.setAttribute('name', 'viewport');
    meta.setAttribute('content', 'width=device-width, initial-scale=1');
    head.appendChild(meta);
  }
};

// no appendix -> add appendix
// title in front, no h1 -> add it
// no title in front, h1 -> read and put into frontMatter
// footnote -> footnote list
// break up bib
// if citation, no bib-list -> add citation-list

// if authors, no byline -> add byline

var optionalComponents = function(dom, data) {
  const article = dom.querySelector('d-article');

  let interstitial = dom.querySelector('d-interstitial');
  if (!interstitial && data.password) {
    interstitial = dom.createElement('d-interstitial');
    interstitial.password = data.password;
    dom.body.insertBefore(interstitial, article);
  }

  let h1 = dom.querySelector('h1');
  if (h1) {
    if (!data.title) {
      data.title = h1.textContent;
    }
  } else {
    if (data.title) {
      h1 = dom.createElement('h1');
      h1.textContent = data.title;
      article.insertBefore(h1, article.firstChild);
    }
    if (data.description) {
      const h2 = dom.createElement('h2');
      h2.textContent = data.description;
      article.insertBefore(h2, h1.nextSibling);
    }
  }

  let byline = dom.querySelector('d-byline');
  if (!byline && data.authors) {
    byline = dom.createElement('d-byline');
    const skipTags = ['H1', 'H2', 'FIGURE'];
    let candidate = h1;
    while (skipTags.indexOf(candidate.tagName) !== -1) {
      candidate = candidate.nextSibling;
    }
    article.insertBefore(byline, candidate);
  }

  let appendix = dom.querySelector('d-appendix');
  if (!appendix) {
    appendix = dom.createElement('d-appendix');
    dom.body.appendChild(appendix);
  }

  let footnoteList = dom.querySelector('d-footnote-list');
  if (!footnoteList) {
    footnoteList = dom.createElement('d-footnote-list');
    appendix.appendChild(footnoteList);
  }

  let citationList = dom.querySelector('d-citation-list');
  if (!citationList) {
    citationList = dom.createElement('d-citation-list');
    appendix.appendChild(citationList);
  }

};

const frontMatter = new FrontMatter();

const Controller = {

  frontMatter: frontMatter,
  waitingOn: {
    bibliography: [],
    citations: [],
  },
  listeners: {

    onCiteKeyCreated(event) {
      const [citeTag, keys] = event.detail;

      // ensure we have citations
      if (!frontMatter.citationsCollected) {
        // console.debug('onCiteKeyCreated, but unresolved dependency ("citations"). Enqueing.');
        Controller.waitingOn.citations.push(() => Controller.listeners.onCiteKeyCreated(event));
        return;
      }

      // ensure we have a loaded bibliography
      if (!frontMatter.bibliographyParsed) {
        // console.debug('onCiteKeyCreated, but unresolved dependency ("bibliography"). Enqueing.');
        Controller.waitingOn.bibliography.push(() => Controller.listeners.onCiteKeyCreated(event));
        return;
      }

      const numbers = keys.map( key => frontMatter.citations.indexOf(key) );
      citeTag.numbers = numbers;
      const entries = keys.map( key => frontMatter.bibliography.get(key) );
      citeTag.entries = entries;
    },

    onCiteKeyChanged(event) {
      // const [citeTag, keys] = event.detail;

      // update citations
      frontMatter.citations = collectCitations();
      frontMatter.citationsCollected = true;
      for (const waitingCallback of Controller.waitingOn.citations.slice()) {
        waitingCallback();
      }

      // update bibliography
      const citationListTag = document.querySelector('d-citation-list');
      const bibliographyEntries = new Map(frontMatter.citations.map( citationKey => {
        return [citationKey, frontMatter.bibliography.get(citationKey)];
      }));
      citationListTag.citations = bibliographyEntries;

      const citeTags = document.querySelectorAll('d-cite');
      for (const citeTag of citeTags) {
        const keys = citeTag.keys;
        const numbers = keys.map( key => frontMatter.citations.indexOf(key) );
        citeTag.numbers = numbers;
        const entries = keys.map( key => frontMatter.bibliography.get(key) );
        citeTag.entries = entries;
      }

    },

    onCiteKeyRemoved(event) {
      Controller.listeners.onCiteKeyChanged(event);
    },

    onBibliographyChanged(event) {
      const citationListTag = document.querySelector('d-citation-list');
      const bibliography = event.detail;

      frontMatter.bibliography = bibliography;
      frontMatter.bibliographyParsed = true;
      for (const waitingCallback of Controller.waitingOn.bibliography.slice()) {
        waitingCallback();
      }

      // ensure we have citations
      if (!frontMatter.citationsCollected) {
        Controller.waitingOn.citations.push( function() {
          Controller.listeners.onBibliographyChanged({target: event.target, detail: event.detail});
        });
        return;
      }

      const entries = new Map(frontMatter.citations.map( citationKey => {
        return [citationKey, frontMatter.bibliography.get(citationKey)];
      }));

      citationListTag.citations = entries;
    },

    onFootnoteChanged() {
      // const footnote = event.detail;
      //TODO: optimize to only update current footnote
      const footnotesList = document.querySelector('d-footnote-list');
      if (footnotesList) {
        const footnotes = document.querySelectorAll('d-footnote');
        footnotesList.footnotes = footnotes;
      }
    },

    onFrontMatterChanged(event) {
      const data = event.detail;
      frontMatter.mergeFromYMLFrontmatter(data);

      const interstitial = document.querySelector('d-interstitial');
      if (interstitial) {
        interstitial.password = frontMatter.password;
      }

      const prerendered = document.body.hasAttribute('distill-prerendered');
      if (!prerendered) {
        optionalComponents(document, frontMatter);
        html(document, frontMatter);

        const appendix = document.querySelector('distill-appendix');
        if (appendix) {
          appendix.frontMatter = frontMatter;
        }

        const byline = document.querySelector('d-byline');
        if (byline) {
          byline.frontMatter = frontMatter;
        }

        if (data.katex) {
          DMath.katexOptions = data.katex;
        }
      }

    },

    DOMContentLoaded() {
      // console.debug('DOMContentLoaded.');

      const frontMatterTag = document.querySelector('d-front-matter');
      const data = parseFrontmatter(frontMatterTag);
      Controller.listeners.onFrontMatterChanged({detail: data});

      // console.debug('Resolving "citations" dependency due to initial DOM load.');
      frontMatter.citations = collectCitations();
      frontMatter.citationsCollected = true;
      for (const waitingCallback of Controller.waitingOn.citations.slice()) {
        waitingCallback();
      }

      const footnotesList = document.querySelector('d-footnote-list');
      if (footnotesList) {
        const footnotes = document.querySelectorAll('d-footnote');
        footnotesList.footnotes = footnotes;
      }
    }

  }, // listeners

}; // Controller

const T$2 = Template('d-article', `
<style>
d-article {
  contain: content;
}
</style>
`, false);

// export function addInferableTags(dom, frontMatter) {
//   const title = frontMatter.title;
//   if (title) {
//     const titleTag = document.querySelector()
//
//   }
// }

const isOnlyWhitespace = /^\s*$/;

class Article extends T$2(HTMLElement) {

  constructor() {
    super();

    new MutationObserver( (mutations) => {
      for (const mutation of mutations) {
        for (const addedNode of mutation.addedNodes) {
          switch (addedNode.nodeName) {
          case 'HR':
            console.warn('Use of <hr> tags in distill articles is discouraged as they interfere with layout! To separate sections, please just use h2 or h3 tags.');
            break;
          case '#text': { // usually text nodes are only linebreaks.
            const text = addedNode.nodeValue;
            if (!isOnlyWhitespace.test(text)) {
              console.warn('Use of unwrapped text in distill articles is discouraged as it breaks layout! Please wrap any text in a <span> or <p> tag. We found the following text: ' + text);
              const wrapper = document.createElement('span');
              wrapper.innerHTML = addedNode.nodeValue;
              addedNode.parentNode.insertBefore(wrapper, addedNode);
              addedNode.parentNode.removeChild(addedNode);
            }
          } break;
          }
        }
      }
    }).observe(this, {childList: true});
  }

  connectedCallback() {
    for (const [functionName, callback] of Object.entries(Controller.listeners)) {
      if (typeof callback === 'function') {
        document.addEventListener(functionName, callback);
      } else {
        console.error('Controller listeners need to be functions!');
      }
    }
  }

}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var bibtexParse = createCommonjsModule(function (module, exports) {
/* start bibtexParse 0.0.22 */

//Original work by Henrik Muehe (c) 2010
//
//CommonJS port by Mikola Lysenko 2013
//
//Port to Browser lib by ORCID / RCPETERS
//
//Issues:
//no comment handling within strings
//no string concatenation
//no variable values yet
//Grammar implemented here:
//bibtex -> (string | preamble | comment | entry)*;
//string -> '@STRING' '{' key_equals_value '}';
//preamble -> '@PREAMBLE' '{' value '}';
//comment -> '@COMMENT' '{' value '}';
//entry -> '@' key '{' key ',' key_value_list '}';
//key_value_list -> key_equals_value (',' key_equals_value)*;
//key_equals_value -> key '=' value;
//value -> value_quotes | value_braces | key;
//value_quotes -> '"' .*? '"'; // not quite
//value_braces -> '{' .*? '"'; // not quite
(function(exports) {

    function BibtexParser() {
        
        this.months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
        this.notKey = [',','{','}',' ','='];
        this.pos = 0;
        this.input = "";
        this.entries = new Array();

        this.currentEntry = "";

        this.setInput = function(t) {
            this.input = t;
        };

        this.getEntries = function() {
            return this.entries;
        };

        this.isWhitespace = function(s) {
            return (s == ' ' || s == '\r' || s == '\t' || s == '\n');
        };

        this.match = function(s, canCommentOut) {
            if (canCommentOut == undefined || canCommentOut == null)
                { canCommentOut = true; }
            this.skipWhitespace(canCommentOut);
            if (this.input.substring(this.pos, this.pos + s.length) == s) {
                this.pos += s.length;
            } else {
                throw "Token mismatch, expected " + s + ", found "
                        + this.input.substring(this.pos);
            }
            this.skipWhitespace(canCommentOut);
        };

        this.tryMatch = function(s, canCommentOut) {
            if (canCommentOut == undefined || canCommentOut == null)
                { canCommentOut = true; }
            this.skipWhitespace(canCommentOut);
            if (this.input.substring(this.pos, this.pos + s.length) == s) {
                return true;
            } else {
                return false;
            }
            this.skipWhitespace(canCommentOut);
        };

        /* when search for a match all text can be ignored, not just white space */
        this.matchAt = function() {
            while (this.input.length > this.pos && this.input[this.pos] != '@') {
                this.pos++;
            }

            if (this.input[this.pos] == '@') {
                return true;
            }
            return false;
        };

        this.skipWhitespace = function(canCommentOut) {
            while (this.isWhitespace(this.input[this.pos])) {
                this.pos++;
            }
            if (this.input[this.pos] == "%" && canCommentOut == true) {
                while (this.input[this.pos] != "\n") {
                    this.pos++;
                }
                this.skipWhitespace(canCommentOut);
            }
        };

        this.value_braces = function() {
            var bracecount = 0;
            this.match("{", false);
            var start = this.pos;
            var escaped = false;
            while (true) {
                if (!escaped) {
                    if (this.input[this.pos] == '}') {
                        if (bracecount > 0) {
                            bracecount--;
                        } else {
                            var end = this.pos;
                            this.match("}", false);
                            return this.input.substring(start, end);
                        }
                    } else if (this.input[this.pos] == '{') {
                        bracecount++;
                    } else if (this.pos >= this.input.length - 1) {
                        throw "Unterminated value";
                    }
                }
                if (this.input[this.pos] == '\\' && escaped == false)
                    { escaped = true; }
                else
                    { escaped = false; }
                this.pos++;
            }
        };

        this.value_comment = function() {
            var str = '';
            var brcktCnt = 0;
            while (!(this.tryMatch("}", false) && brcktCnt == 0)) {
                str = str + this.input[this.pos];
                if (this.input[this.pos] == '{')
                    { brcktCnt++; }
                if (this.input[this.pos] == '}')
                    { brcktCnt--; }
                if (this.pos >= this.input.length - 1) {
                    throw "Unterminated value:" + this.input.substring(start);
                }
                this.pos++;
            }
            return str;
        };

        this.value_quotes = function() {
            this.match('"', false);
            var start = this.pos;
            var escaped = false;
            while (true) {
                if (!escaped) {
                    if (this.input[this.pos] == '"') {
                        var end = this.pos;
                        this.match('"', false);
                        return this.input.substring(start, end);
                    } else if (this.pos >= this.input.length - 1) {
                        throw "Unterminated value:" + this.input.substring(start);
                    }
                }
                if (this.input[this.pos] == '\\' && escaped == false)
                    { escaped = true; }
                else
                    { escaped = false; }
                this.pos++;
            }
        };

        this.single_value = function() {
            var start = this.pos;
            if (this.tryMatch("{")) {
                return this.value_braces();
            } else if (this.tryMatch('"')) {
                return this.value_quotes();
            } else {
                var k = this.key();
                if (k.match("^[0-9]+$"))
                    { return k; }
                else if (this.months.indexOf(k.toLowerCase()) >= 0)
                    { return k.toLowerCase(); }
                else
                    { throw "Value expected:" + this.input.substring(start) + ' for key: ' + k; }
            
            }
        };

        this.value = function() {
            var values = [];
            values.push(this.single_value());
            while (this.tryMatch("#")) {
                this.match("#");
                values.push(this.single_value());
            }
            return values.join("");
        };

        this.key = function() {
            var start = this.pos;
            while (true) {
                if (this.pos >= this.input.length) {
                    throw "Runaway key";
                }
                                // а-яА-Я is Cyrillic
                //console.log(this.input[this.pos]);
                if (this.notKey.indexOf(this.input[this.pos]) >= 0) {
                    return this.input.substring(start, this.pos);
                } else {
                    this.pos++;
                    
                }
            }
        };

        this.key_equals_value = function() {
            var key = this.key();
            if (this.tryMatch("=")) {
                this.match("=");
                var val = this.value();
                return [ key, val ];
            } else {
                throw "... = value expected, equals sign missing:"
                        + this.input.substring(this.pos);
            }
        };

        this.key_value_list = function() {
            var kv = this.key_equals_value();
            this.currentEntry['entryTags'] = {};
            this.currentEntry['entryTags'][kv[0]] = kv[1];
            while (this.tryMatch(",")) {
                this.match(",");
                // fixes problems with commas at the end of a list
                if (this.tryMatch("}")) {
                    break;
                }
                
                kv = this.key_equals_value();
                this.currentEntry['entryTags'][kv[0]] = kv[1];
            }
        };

        this.entry_body = function(d) {
            this.currentEntry = {};
            this.currentEntry['citationKey'] = this.key();
            this.currentEntry['entryType'] = d.substring(1);
            this.match(",");
            this.key_value_list();
            this.entries.push(this.currentEntry);
        };

        this.directive = function() {
            this.match("@");
            return "@" + this.key();
        };

        this.preamble = function() {
            this.currentEntry = {};
            this.currentEntry['entryType'] = 'PREAMBLE';
            this.currentEntry['entry'] = this.value_comment();
            this.entries.push(this.currentEntry);
        };

        this.comment = function() {
            this.currentEntry = {};
            this.currentEntry['entryType'] = 'COMMENT';
            this.currentEntry['entry'] = this.value_comment();
            this.entries.push(this.currentEntry);
        };

        this.entry = function(d) {
            this.entry_body(d);
        };

        this.bibtex = function() {
            while (this.matchAt()) {
                var d = this.directive();
                this.match("{");
                if (d == "@STRING") {
                    this.string();
                } else if (d == "@PREAMBLE") {
                    this.preamble();
                } else if (d == "@COMMENT") {
                    this.comment();
                } else {
                    this.entry(d);
                }
                this.match("}");
            }
        };
    }
    
    exports.toJSON = function(bibtex) {
        var b = new BibtexParser();
        b.setInput(bibtex);
        b.bibtex();
        return b.entries;
    };

    /* added during hackathon don't hate on me */
    exports.toBibtex = function(json) {
        var out = '';
        for ( var i in json) {
            out += "@" + json[i].entryType;
            out += '{';
            if (json[i].citationKey)
                { out += json[i].citationKey + ', '; }
            if (json[i].entry)
                { out += json[i].entry ; }
            if (json[i].entryTags) {
                var tags = '';
                for (var jdx in json[i].entryTags) {
                    if (tags.length != 0)
                        { tags += ', '; }
                    tags += jdx + '= {' + json[i].entryTags[jdx] + '}';
                }
                out += tags;
            }
            out += '}\n\n';
        }
        return out;
        
    };

})(exports);

/* end bibtexParse */
});

function normalizeTag(string) {
  return string
    .replace(/[\t\n ]+/g, ' ')
    .replace(/{\\["^`.'acu~Hvs]( )?([a-zA-Z])}/g, (full, x, char) => char)
    .replace(/{\\([a-zA-Z])}/g, (full, char) => char);
}

function parseBibtex(bibtex) {
  const bibliography = new Map();
  const parsedEntries = bibtexParse.toJSON(bibtex);
  for (const entry of parsedEntries) {
    // normalize tags; note entryTags is an object, not Map
    for (const [key, value] of Object.entries(entry.entryTags)) {
      entry.entryTags[key] = normalizeTag(value);
    }
    entry.entryTags.type = entry.entryType;
    // add to bibliography
    bibliography.set(entry.citationKey, entry.entryTags);
  }
  return bibliography;
}

function serializeFrontmatterToBibtex(frontMatter) {
  return `@article{${frontMatter.slug},
  author = {${frontMatter.bibtexAuthors}},
  title = {${frontMatter.title}},
  journal = {${frontMatter.journal.title}},
  year = {${frontMatter.publishedYear}},
  note = {${frontMatter.url}}
}`;
}

class Bibliography extends HTMLElement {

  static get is() { return 'd-bibliography'; }

  constructor() {
    super();

    // set up mutation observer
    const options = {childList: true, characterData: true, subtree: true};
    const observer = new MutationObserver( (entries) => {
      for (const entry of entries) {
        if (entry.target.nodeName === 'SCRIPT' || entry.type === 'characterData') {
          this.parseIfPossible();
        }
      }
    });
    observer.observe(this, options);
  }

  parseIfPossible() {
    const scriptTag = this.querySelector('script');
    if (!scriptTag) { return; }
    if (scriptTag.type == 'text/bibtex') {
      const newBibtex = scriptTag.textContent;
      if (this.bibtex !== newBibtex) {
        this.bibtex = newBibtex;
        const bibliography = parseBibtex(this.bibtex);
        this.notify(bibliography);
      }
    } else if (scriptTag.type == 'text/json') {
      const bibliography = new Map(JSON.parse(scriptTag.textContent));
      this.notify(bibliography);
    } else {
      console.warn('Unsupported bibliography script tag type: ' + scriptTag.type);
    }
  }

  notify(bibliography) {
    const options = { detail: bibliography, bubbles: true };
    const event = new CustomEvent('onBibliographyChanged', options);
    this.dispatchEvent(event);
  }

  /* observe 'src' attribute */

  static get observedAttributes() {
    return ['src'];
  }

  receivedBibtex(event) {
    const bibliography = parseBibtex(event.target.response);
    this.notify(bibliography);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    var oReq = new XMLHttpRequest();
    oReq.onload = (e) => this.receivedBibtex(e);
    oReq.onerror = () => console.warn(`Could not load Bibtex! (tried ${newValue})`);
    oReq.responseType = 'text';
    oReq.open('GET', newValue, true);
    oReq.send();
  }


}

const T$5 = Template('d-citation-list', `
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
`);

function renderCitationList(element, entries) {
  if (entries.size > 0) {
    element.host.style.display = 'initial';
    const list = element.querySelector('#references-list');
    list.innerHTML = '';

    for (const [key, entry] of entries) {
      const listItem = document.createElement('li');
      listItem.id = key;
      listItem.innerHTML = bibliography_cite(entry);
      list.appendChild(listItem);
    }
  } else {
    element.host.style.display = 'none';
  }
}

class CitationList extends T$5(HTMLElement) {

  connectedCallback() {
    this.root.host.style.display = 'none';
  }

  set citations(citations) {
    renderCitationList(this.root, citations);
  }

}

var prism = createCommonjsModule(function (module) {
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-(\w+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o) {
			var type = _.util.type(o);

			switch (type) {
				case 'Object':
					var clone = {};

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key]);
						}
					}

					return clone;

				case 'Array':
					// Check for existence for IE8
					return o.map && o.map(function(v) { return _.util.clone(v); });
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || document.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		parent = element.parentNode;

		if (/pre/i.test(parent.nodeName)) {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				env.element.textContent = env.code;
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var tokens = _.tokenize(text, grammar);
		return Token.stringify(_.util.encode(tokens), language);
	},

	tokenize: function(text, grammar, language) {
		var Token = _.Token;

		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		tokenloop: for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i=0, pos = 0; i<strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						break tokenloop;
					}

					if (str instanceof Token) {
						continue;
					}

					pattern.lastIndex = 0;

					var match = pattern.exec(str),
					    delNum = 1;

					// Greedy patterns can override/remove up to two previously matched tokens
					if (!match && greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && p < to; ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						/*
						 * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						 * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
						 */
						if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					}

					if (!match) {
						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1].length;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);
				}
			}
		}

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (env.type == 'comment') {
		env.attributes['spellcheck'] = 'true';
	}

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}
 	// In worker
	_self.addEventListener('message', function(evt) {
		var message = JSON.parse(evt.data),
		    lang = message.language,
		    code = message.code,
		    immediateClose = message.immediateClose;

		_self.postMessage(_.highlight(code, _.languages[lang], lang));
		if (immediateClose) {
			_self.close();
		}
	}, false);

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (document.addEventListener && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if ('object' !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof commonjsGlobal !== 'undefined') {
	commonjsGlobal.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\w\W]*?-->/,
	'prolog': /<\?[\w\W]+?\?>/,
	'doctype': /<!DOCTYPE[\w\W]+?>/i,
	'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
				inside: {
					'punctuation': /[=>"']/
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\w\W]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
	'string': {
		pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'property': /(\b|\B)[\w-]+(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css'
		}
	});
	
	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|').*?\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': {
		pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /(\.|\\)/
		}
	},
	'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	}
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\\\|\\?[^\\])*?`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript'
		}
	});
}

Prism.languages.js = Prism.languages.javascript;

/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function() {

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		if(Array.prototype.forEach) { // Check to prevent error in IE8
			Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
				var src = pre.getAttribute('data-src');

				var language, parent = pre;
				var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
				while (parent && !lang.test(parent.className)) {
					parent = parent.parentNode;
				}

				if (parent) {
					language = (pre.className.match(lang) || [, ''])[1];
				}

				if (!language) {
					var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
					language = Extensions[extension] || extension;
				}

				var code = document.createElement('code');
				code.className = 'language-' + language;

				pre.textContent = '';

				code.textContent = 'Loading…';

				pre.appendChild(code);

				var xhr = new XMLHttpRequest();

				xhr.open('GET', src, true);

				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {

						if (xhr.status < 400 && xhr.responseText) {
							code.textContent = xhr.responseText;

							Prism.highlightElement(code);
						}
						else if (xhr.status >= 400) {
							code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
						}
						else {
							code.textContent = '✖ Error: File does not exist or is empty';
						}
					}
				};

				xhr.send(null);
			});
		}

	};

	document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);

})();
});

Prism.languages.python= {
	'triple-quoted-string': {
		pattern: /"""[\s\S]+?"""|'''[\s\S]+?'''/,
		alias: 'string'
	},
	'comment': {
		pattern: /(^|[^\\])#.*/,
		lookbehind: true
	},
	'string': {
		pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/,
		greedy: true
	},
	'function' : {
		pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,
		lookbehind: true
	},
	'class-name': {
		pattern: /(\bclass\s+)[a-z0-9_]+/i,
		lookbehind: true
	},
	'keyword' : /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
	'boolean' : /\b(?:True|False)\b/,
	'number' : /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
	'operator' : /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
	'punctuation' : /[{}[\];(),.:]/
};

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': {
		pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /(\.|\\)/
		}
	},
	'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};

var css = "/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: black;\n\tbackground: none;\n\ttext-shadow: 0 1px white;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\n@media print {\n\tcode[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\ttext-shadow: none;\n\t}\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #f5f2f0;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #999;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #905;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #690;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n\tcolor: #a67f59;\n\tbackground: hsla(0, 0%, 100%, .5);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #07a;\n}\n\n.token.function {\n\tcolor: #DD4A68;\n}\n\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #e90;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n";

const T$6 = Template('d-code', `
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

${css}
</style>

<code id="code-container"></code>

`);

class Code extends Mutating(T$6(HTMLElement)) {

  renderContent() {

    // check if language can be highlighted
    this.languageName = this.getAttribute('language');
    if (!this.languageName) {
      console.warn('You need to provide a language attribute to your <d-code> block to let us know how to highlight your code; e.g.:\n <d-code language="python">zeros = np.zeros(shape)</d-code>.');
      return;
    }
    const language = prism.languages[this.languageName];
    if (language == undefined) {
      console.warn(`Distill does not yet support highlighting your code block in "${this.languageName}".`);
      return;
    }

    let content = this.textContent;
    const codeTag = this.shadowRoot.querySelector('#code-container');

    if (this.hasAttribute('block')) {
      // normalize the tab indents
      content = content.replace(/\n/, '');
      const tabs = content.match(/\s*/);
      content = content.replace(new RegExp('\n' + tabs, 'g'), '\n');
      content = content.trim();
      // wrap code block in pre tag if needed
      if (codeTag.parentNode instanceof ShadowRoot) {
        const preTag = document.createElement('pre');
        this.shadowRoot.removeChild(codeTag);
        preTag.appendChild(codeTag);
        this.shadowRoot.appendChild(preTag);
      }

    }

    codeTag.className = `language-${this.languageName}`;
    codeTag.innerHTML = prism.highlight(content, language);
  }

}

const T$7 = Template('d-footnote', `
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

`);

class Footnote extends T$7(HTMLElement) {

  constructor() {
    super();

    const options = {childList: true, characterData: true, subtree: true};
    const observer = new MutationObserver(this.notify);
    observer.observe(this, options);
  }

  notify() {
    const options = { detail: this, bubbles: true };
    const event = new CustomEvent('onFootnoteChanged', options);
    document.dispatchEvent(event);
  }

  connectedCallback() {
    // listen and notify about changes to slotted content
    // const slot = this.shadowRoot.querySelector('#slot');
    // slot.addEventListener('slotchange', this.notify);

    // create numeric ID
    Footnote.currentFootnoteId += 1;
    const IdString = Footnote.currentFootnoteId.toString();
    this.root.host.id = 'd-footnote-' + IdString;

    // set up hidden hover box
    const div = this.root.querySelector('.dt-hover-box');
    div.id = 'dt-fn-hover-box-' + IdString;

    // set up visible footnote marker
    const span = this.root.querySelector('#fn-');
    span.setAttribute('id', 'fn-' + IdString);
    span.setAttribute('data-hover-ref', div.id);
    span.textContent = IdString;

    this.hoverbox = new HoverBox(div, span);
  }

}

Footnote.currentFootnoteId = 0;

const T$8 = Template('d-footnote-list', `
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
`);

class FootnoteList extends T$8(HTMLElement) {

  connectedCallback() {
    this.list = this.root.querySelector('ol');
    // footnotes list is initially hidden
    this.root.host.style.display = 'none';
    // look through document and register existing footnotes
    // Store.subscribeTo('footnotes', (footnote) => {
    //   this.renderFootnote(footnote);
    // });
  }

  // TODO: could optimize this to accept individual footnotes?
  set footnotes(footnotes) {
    this.list.innerHTML = '';
    if (footnotes.length) {
      // ensure footnote list is visible
      this.root.host.style.display = 'initial';

      for (const footnote of footnotes) {
        // construct and append list item to show footnote
        const listItem = document.createElement('li');
        listItem.id = footnote.id + '-listing';
        listItem.innerHTML = footnote.innerHTML;

        const backlink = document.createElement('a');
        backlink.setAttribute('class', 'footnote-backlink');
        backlink.textContent = '[↩]';
        backlink.href = '#' + footnote.id;

        listItem.appendChild(backlink);
        this.list.appendChild(listItem);
      }
    } else {
      // ensure footnote list is invisible
      this.shadowRoot.host.style.display = 'none';
    }
  }

}

const T$9 = Template('d-references', `
<style>
d-references {
  display: block;
}
</style>
`, false);

class References extends T$9(HTMLElement) {

}

class TOC extends HTMLElement {

  static get is() { return 'd-toc'; }

  connectedCallback() {
    if (!this.getAttribute('prerendered')) {
      window.onload = () => {
        const article = document.querySelector('d-article');
        const headings = article.querySelectorAll('h2, h3');
        renderTOC(this, headings);
      };
    }
  }

}

function renderTOC(element, headings) {

  let ToC =`
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
  <ul>`;

  for (const el of headings) {
    // should element be included in TOC?
    const isInTitle = el.parentElement.tagName == 'D-TITLE';
    const isException = el.getAttribute('no-toc');
    if (isInTitle || isException) { continue; }
    // create TOC entry
    const title = el.textContent;
    const link = '#' + el.getAttribute('id');

    let newLine = '<li>' + '<a href="' + link + '">' + title + '</a>' + '</li>';
    if (el.tagName == 'H3') {
      newLine = '<ul>' + newLine + '</ul>';
    } else {
      newLine += '<br>';
    }
    ToC += newLine;

  }

  ToC += '</ul></nav>';
  element.innerHTML = ToC;
}

// Figure
//
// d-figure provides a state-machine of visibility events:
//
//                         scroll out of view
//                         +----------------+
//   *do work here*        |                |
// +----------------+    +-+---------+    +-v---------+
// | ready          +----> onscreen  |    | offscreen |
// +----------------+    +---------^-+    +---------+-+
//                                 |                |
//                                 +----------------+
//                                  scroll into view
//

class Figure extends HTMLElement {

  static get is() { return 'd-figure'; }

  static get readyQueue() {
    if (!Figure._readyQueue) {
      Figure._readyQueue = [];
    }
    return Figure._readyQueue;
  }

  static addToReadyQueue(figure) {
    if (Figure.readyQueue.indexOf(figure) === -1) {
      Figure.readyQueue.push(figure);
      Figure.runReadyQueue();
    }
  }

  static runReadyQueue() {
    // console.log("Checking to run readyQueue, length: " + Figure.readyQueue.length + ", scrolling: " + Figure.isScrolling);
    // if (Figure.isScrolling) return;

    // console.log("Running ready Queue");
    const figure = Figure.readyQueue
      .sort((a,b) => a._seenOnScreen - b._seenOnScreen )
      .filter((figure) => !figure._ready)
      .pop();
    if (figure) {
      figure.ready();
      requestAnimationFrame(Figure.runReadyQueue);
    }

  }

  constructor() {
    super();
    // debugger
    this._ready = false;
    this._onscreen = false;
    this._offscreen = true;
  }

  connectedCallback() {
    Figure.marginObserver.observe(this);
    Figure.directObserver.observe(this);
  }

  disconnectedCallback() {
    Figure.marginObserver.unobserve(this);
    Figure.directObserver.unobserve(this);
  }

  // We use two separate observers:
  // One with an extra 1000px margin to warn if the viewpoint gets close,
  // And one for the actual on/off screen events

  static get marginObserver() {
    if (!Figure._marginObserver) {
      const viewportHeight = window.innerHeight;
      const margin = Math.floor(2 * viewportHeight);
      Figure._marginObserver = new IntersectionObserver(
        Figure.didObserveMarginIntersection, {
          rootMargin: margin + 'px 0px ' + margin + 'px 0px', threshold: 0.01,
        });
    }
    return Figure._marginObserver;
  }

  static didObserveMarginIntersection(entries) {
    for (const entry of entries) {
      const figure = entry.target;
      if (entry.isIntersecting && !figure._ready) {
        Figure.addToReadyQueue(figure);
      }
    }
  }

  static get directObserver() {
    if (!Figure._directObserver) {
      Figure._directObserver = new IntersectionObserver(
        Figure.didObserveDirectIntersection, {
          rootMargin: '0px', threshold: [0, 1.0],
        }
      );
    }
    return Figure._directObserver;
  }

  static didObserveDirectIntersection(entries) {
    for (const entry of entries) {
      const figure = entry.target;
      if (entry.isIntersecting) {
        figure._seenOnScreen = new Date();
        // if (!figure._ready) { figure.ready(); }
        if (figure._offscreen) { figure.onscreen(); }
      } else {
        if (figure._onscreen) { figure.offscreen(); }
      }
    }
  }

  // Notify listeners that registered late, too:

  addEventListener(eventName, callback) {
    super.addEventListener(eventName, callback);
    // if we had already dispatched something while presumingly no one was listening, we do so again
    // debugger
    if (eventName === 'ready') {
      if (Figure.readyQueue.indexOf(this) !== -1) {
        this._ready = false;
        Figure.runReadyQueue();
      }
    }
    if (eventName === 'onscreen') {
      this.onscreen();
    }
  }

  // Custom Events

  ready() {
    // debugger
    this._ready = true;
    Figure.marginObserver.unobserve(this);
    const event = new CustomEvent('ready');
    this.dispatchEvent(event);
  }

  onscreen() {
    this._onscreen = true;
    this._offscreen = false;
    const event = new CustomEvent('onscreen');
    this.dispatchEvent(event);
  }

  offscreen() {
    this._onscreen = false;
    this._offscreen = true;
    const event = new CustomEvent('offscreen');
    this.dispatchEvent(event);
  }

}

if (typeof window !== 'undefined') {

  Figure.isScrolling = false;
  let timeout;
  const resetTimer = () => {
    Figure.isScrolling = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      Figure.isScrolling = false;
      Figure.runReadyQueue();
    }, 500);
  };
  window.addEventListener('scroll', resetTimer, true);

}

const T$10 = Template('d-interstitial', `
<style>

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: white;

  opacity: 1;
  visibility: visible;

  display: flex;
  flex-flow: column;
  justify-content: center;
  z-index: 2147483647 /* MaxInt32 */

}

.overlay.transparent {
  background: hsla(0, 0%, 100%, 0.7);
  transition: background 1s;
}

.container {
  position: relative;
  left: 25%;
  width: 50%;
}

h1 {
  text-decoration: underline;
  text-decoration-color: hsl(0,100%,40%);
  margin-bottom: 1em;
}

input[type="password"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  -webkit-border-radius: none;
  -moz-border-radius: none;
  -ms-border-radius: none;
  -o-border-radius: none;
  border-radius: none;
  outline: none;

  font-size: 18px;
  background: none;
  width: 25%;
  padding: 10px;
  border: none;
  border-bottom: solid 2px #999;
  transition: border .3s;
}

input[type="password"]:focus {
  border-bottom: solid 2px #333;
}

input[type="password"].wrong {
  border-bottom: solid 2px hsl(0,100%,40%);
}

p small {
  color: #888;
}

</style>

<div class="overlay">
  <div class="container">
    <h1>This article is in review.</h1>
    <p>Do not share this URL, or the contents of this article. Thank you!</p>
    <input id="interstitial-password-input" type="password" name="password" autofocus/>
    <p><small>Enter the password we shared with you as part of the review process to view the article.</small></p>
  </div>
</div>
`);

class Interstitial extends T$10(HTMLElement) {

  connectedCallback() {
    const passwordInput = this.root.querySelector('#interstitial-password-input');
    passwordInput.oninput = (event) => this.passwordChanged(event);
    setTimeout(() => {
      this.article = document.querySelector('d-article');
      this.article.style = 'filter: blur(15px)';
      const overlay = this.root.querySelector('.overlay');
      overlay.classList.add('transparent');
    }, 500);
  }

  passwordChanged(event) {
    const entered = event.target.value;
    if (entered === this.password) {
      console.log('Correct password entered.');
      event.target.classList.add('right');
      this.article.style = '';
      this.parentElement.removeChild(this);
    }
  }

}

var logo = "<svg viewBox=\"-607 419 64 64\">\n  <path d=\"M-573.4,478.9c-8,0-14.6-6.4-14.6-14.5s14.6-25.9,14.6-40.8c0,14.9,14.6,32.8,14.6,40.8S-565.4,478.9-573.4,478.9z\"/>\n</svg>\n";

const T$11 = Template('distill-header', `
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
    ${logo}
  </a>
  <span class='name'>
    Distill
  </span>
</div>
`);

// <div class="nav">
//   <a href="/faq">About</a>
//   <a href="https://github.com/distillpub">GitHub</a>
//   <!-- https://twitter.com/distillpub -->
// </div>

class DistillHeader extends T$11(HTMLElement) {

}

const styles$1 = `
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
`;

function appendixTemplate(frontMatter) {
  return `
  ${styles$1}

  <h3 id="updates-and-corrections">Updates and Corrections</h3>
  <p><a href="">View all changes</a> to this article since it was first published. If you see mistakes or want to suggest changes, please <a href="${frontMatter.githubUrl + '/issues/new'}">create an issue on GitHub</a>. </p>

  <h3 id="reuse">Reuse</h3>
  <p>Diagrams and text are licensed under Creative Commons Attribution <a href="https://creativecommons.org/licenses/by/2.0/">CC-BY 2.0</a> with the <a class="github" href="${frontMatter.githubUrl}">source available on GitHub</a>, unless noted otherwise. The figures that have been reused from other sources don’t fall under this license and can be recognized by a note in their caption: “Figure from …”.</p>

  <h3 id="citation">Citation</h3>
  <p>For attribution in academic contexts, please cite this work as</p>
  <pre class="citation short">${frontMatter.concatenatedAuthors}, "${frontMatter.title}", Distill, ${frontMatter.publishedYear}.</pre>
  <p>BibTeX citation</p>
  <pre class="citation long">${serializeFrontmatterToBibtex(frontMatter)}</pre>
  `;
}

class DistillAppendix extends HTMLElement {

  static get is() { return 'distill-appendix'; }

  set frontMatter(frontMatter) {
    this.innerHTML = appendixTemplate(frontMatter);
  }

}

const T$12 = Template('distill-footer', `
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
  ${logo}
  Distill
</a> is dedicated to clear explanations of machine learning
</div>
`);

class DistillFooter extends T$12(HTMLElement) {

}

/* Static styles and other modules */
makeStyleTag(document);

/* Components */
const components = [
  Abstract, Appendix, Article, Bibliography, Byline, Cite, CitationList, Code,
  Footnote, FootnoteList, FrontMatter$1, DMath, References, TOC, Figure,
  Interstitial,
];

/* Distill website specific components */
const distillComponents = [
  DistillHeader, DistillAppendix, DistillFooter,
];

function defineComponents() {
  const allComponents = components.concat(distillComponents);
  for (const component of allComponents) {
    customElements.define(component.is, component);
  }
}

defineComponents();

})));
//# sourceMappingURL=template.v2.js.map
