(this["webpackJsonpmovie-app-2021"]=this["webpackJsonpmovie-app-2021"]||[]).push([[0],{38:function(e,t,s){},58:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(0),c=s.n(n),i=s(29),r=s.n(i),o=(s(38),s(8)),l=s(2),j=s(17),m=s.n(j),d=s(30),u=s(11),h=s(12),b=s(14),v=s(13),p=s(31),O=s.n(p);s(58);var x=function(e){var t=e.year,s=e.genres,n=e.title,c=e.summary,i=e.posters;return Object(a.jsx)("div",{className:"movie",children:Object(a.jsxs)(o.b,{to:{pathname:"/movie-detail",state:{year:t,genres:s,title:n,summary:c,posters:i}},children:[Object(a.jsx)("img",{src:i,alt:n,title:n}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("h3",{className:"movie__title",children:n}),Object(a.jsx)("h5",{className:"movie__year",children:t}),Object(a.jsx)("ul",{className:"movie__genres",children:s.map((function(e,t){return Object(a.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(a.jsxs)("p",{className:"movie__summary",children:[c.slice(0,180),"..."]})]})]})})},_=(s(64),function(e){Object(b.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(u.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var s,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(x,{id:e.id,year:e.year,title:e.title,genres:e.genres,summary:e.summary,posters:e.medium_cover_image},e.id)}))})})}}]),s}(c.a.Component));s(65);var f=function(e){return console.log(e),Object(a.jsxs)("div",{className:"about__container",children:[Object(a.jsx)("span",{children:'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'}),Object(a.jsx)("span",{children:"- George Orwell, 1984"})]})};s(66);var y=function(){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(o.b,{to:"/",children:"Home"}),Object(a.jsx)(o.b,{to:"/about",children:"About"})]})},g=(s(67),function(e){Object(b.a)(s,e);var t=Object(v.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(a.jsxs)("div",{className:"detail__container",children:[Object(a.jsx)("img",{src:e.state.posters,alt:e.state.title,title:e.state.title}),Object(a.jsxs)("div",{className:"detail__data",children:[Object(a.jsx)("h3",{className:"detail__title",children:e.state.title}),Object(a.jsx)("h5",{className:"detail__year",children:e.state.year}),Object(a.jsx)("ul",{className:"detail__genres",children:e.state.genres.map((function(e,t){return Object(a.jsx)("li",{className:"detail__genre",children:e},t)}))}),Object(a.jsx)("p",{className:"detail__summary",children:e.state.summary})]})]}):null}}]),s}(c.a.Component));var N=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(y,{}),Object(a.jsx)(l.a,{path:"/",exact:!0,component:_}),Object(a.jsx)(l.a,{path:"/about",component:f}),Object(a.jsx)(l.a,{path:"/movie-detail",component:g})]})};r.a.render(Object(a.jsx)(N,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.9def95aa.chunk.js.map