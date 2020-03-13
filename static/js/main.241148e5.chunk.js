(this["webpackJsonpbanking-application"]=this["webpackJsonpbanking-application"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(7),i=a.n(l),r=(a(13),a(14),a(1)),c=a(2),s=a(4),m=a(3),u=a(5),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={active:!1},a.handleClick=function(){a.toggleClass()},a.handleRemoveClass=function(){a.setState({active:!1})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"toggleClass",value:function(){var e=this.state.active;this.setState({active:!e})}},{key:"render",value:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:this.handleClick,className:this.state.active?"hamburger hamburger--active":"hamburger"},o.a.createElement("span",{className:"hamburger__box"},o.a.createElement("span",{className:"hamburger__inner"}))),o.a.createElement("nav",{className:this.state.active?"navigation navigation--active":"navigation"},o.a.createElement("ul",{className:"navigation__list"},o.a.createElement("li",{onClick:this.handleRemoveClass,className:"navigation__item"},o.a.createElement("a",{href:"#myAccount"},"Konto osobiste")),o.a.createElement("li",{onClick:this.handleRemoveClass,className:"navigation__item"},o.a.createElement("a",{href:"#myLoan"},"Kredyt hipoteczny")),o.a.createElement("li",{onClick:this.handleRemoveClass,className:"navigation__item"},o.a.createElement("a",{href:"#myKnow-how"},"Wiedza o finansach")),o.a.createElement("li",{onClick:this.handleRemoveClass,className:"navigation__item"},o.a.createElement("a",{href:"#myNews"},"Aktualno\u015bci")))))}}]),t}(o.a.Component),p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={auth:!1,slide:0,lastScrollY:0},a.handleScroll=function(){var e=a.state.lastScrollY,t=window.scrollY;t>e?a.setState({slide:"-48px"}):a.setState({slide:"0px"}),a.setState({lastScrollY:t})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return o.a.createElement("div",{className:"header__bar",style:{transform:"translate(0, ".concat(this.state.slide,")"),transition:"transform 90ms ease-in-out"}},o.a.createElement(h,null),o.a.createElement("h1",{className:"bank-name"},"Neverland Bank"),o.a.createElement("button",{className:"button-login"},"Zaloguj"))}}]),t}(o.a.Component),d=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={id:a.props.id,header:"",article:"",author:"",url:"",error:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getID",value:function(){this.setState({value:this.props.id})}},{key:"handleLoadArticle",value:function(){var e=this,t=new Request("https://newsapi.org/v2/top-headlines?country=pl&category=business&sortBy=popularity&apiKey=766ac1666a23429191276a3231269f7d");fetch(t).then((function(e){if(e.ok)return e;throw Error("can't load an article")})).then((function(e){return e.json()})).then((function(t){var a=t.articles[e.state.id];console.log(a.title),e.setState((function(e){return{error:!1,header:a.title,article:a.description,author:a.author,url:a.url}}))})).catch((function(t){console.log(t),e.setState((function(e){return{error:!0}}))}))}},{key:"componentDidMount",value:function(){this.handleLoadArticle()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return o.a.createElement("section",{className:"news",id:"myNews"},o.a.createElement("article",{className:"news__container"},o.a.createElement("h3",{className:"news__header"},this.state.header),o.a.createElement("p",{className:"news__item"},this.state.article),o.a.createElement("em",null,this.state.author),o.a.createElement("a",{className:"button-news",href:this.state.url},"Wi\u0119cej")))}}]),t}(o.a.Component);var _=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"header"},o.a.createElement(p,null),o.a.createElement("br",null)),o.a.createElement("section",{className:"presentation"},o.a.createElement("section",{className:"presentation__account",id:"myAccount"},o.a.createElement("div",{className:"presentation__account--picture",alt:"people holding hands"}),o.a.createElement("article",{className:"presentation__account--text-container"},o.a.createElement("h3",null,"Konto osobiste"),o.a.createElement("p",null,"Otw\xf3rz przez internet konto osobiste i otrzymuj na nie wynagrodzenie z tytu\u0142u umowy o prac\u0119. Otrzymaj bonus 200z\u0142 za za\u0142o\u017cenie, oraz dodatkowe 50z\u0142 za ka\u017cd\u0105 polecon\u0105 osob\u0119.")),o.a.createElement("span",{className:"presentation__button--container presentation__account--button-container"},o.a.createElement("button",{className:"presentation__button presentation__button--more"},"Wi\u0119cej"),o.a.createElement("button",{className:"presentation__button presentation__button--open-account"},"Otw\xf3rz konto"))),o.a.createElement("section",{className:"presentation__app"},o.a.createElement("div",{className:"presentation__app--picture",alt:"woman holding smartphone in a hand"}),o.a.createElement("h3",null,"Aplikacja mobilna"),o.a.createElement("p",null,"Pobierz aplikacj\u0119 i wykonuj przelewy. Wyp\u0142acaj got\xf3wk\u0119 nawet bez portfela!"),o.a.createElement("span",{className:"presentation__button--container"},o.a.createElement("button",{className:"presentation__button presentation__button--more"},"Wi\u0119cej"))),o.a.createElement("section",{className:"presentation__mortgage",id:"myLoan"},o.a.createElement("div",{className:"presentation__mortgage--picture",alt:"nice looking apparment"}),o.a.createElement("h3",null,"Kredyt hipoteczny"),o.a.createElement("p",null,"Z\u0142\xf3\u017c wniosek przez internet. Sprawd\u017a swoj\u0105 zdolno\u015b\u0107 kredytow\u0105. Oblicz rat\u0119. Kup wymarzone mieszkanie, dom lub dzia\u0142k\u0119!"),o.a.createElement("span",{className:"presentation__button--container"},o.a.createElement("button",{className:"presentation__button presentation__button--more"},"Wi\u0119cej")))),o.a.createElement("section",{className:"know-how",id:"myKnow-how"},o.a.createElement("h3",null,"Jak sobie radzi\u0107 z finansami? Poznaj nasze sposoby."),o.a.createElement("button",{className:"button-knowledge"},"Wiedza o finansach")),o.a.createElement("h2",{className:"news__big-header"},"Aktualno\u015bci"),o.a.createElement(d,{id:0}),o.a.createElement(d,{id:1}),o.a.createElement(d,{id:2}),o.a.createElement("h6",{className:"news-api-info"},o.a.createElement("em",null,"Artyku\u0142y pobrano z newsapi.org")),o.a.createElement("nav",{className:"footer"},o.a.createElement("section",{className:"footer__navigation"},o.a.createElement("ul",{className:"footer__list"},o.a.createElement("li",{className:"footer__list footer__list--element"},"Konta osobiste"),o.a.createElement("li",{className:"footer__list footer__list--element"},"Kredyt hipoteczny"),o.a.createElement("li",{className:"footer__list footer__list--element"},"Po\u017cyczki"),o.a.createElement("li",{className:"footer__list footer__list--element"},"Wiedza o finansach"))),o.a.createElement("section",{className:"footer__social"},o.a.createElement("ul",{className:"social__list"},o.a.createElement("li",{className:"social__list social__list--link"},"fb"),o.a.createElement("li",{className:"social__list social__list--link"},"email"),o.a.createElement("li",{className:"social__list social__list--link"},"kontakt")))))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(_,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/banking-application",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/banking-application","/service-worker.js");f?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(t,e)}))}}()},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.241148e5.chunk.js.map