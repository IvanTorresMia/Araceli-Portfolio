(this["webpackJsonparaceli-portfolio"]=this["webpackJsonparaceli-portfolio"]||[]).push([[0],{22:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var i=t(0),c=t(1),n=t.n(c),s=t(15),r=t.n(s),l=(t(22),t(9)),d=t(2);var o=function(){return Object(i.jsx)("header",{className:"Nav",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark",children:[Object(i.jsx)("a",{className:"navbar-brand my-header text relative",href:"/",children:"Araceli Mia"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(l.b,{to:"/AboutMe",className:"/AboutMe"===window.location.pathname?"nav-link active":"nav-link",children:"About Me"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"/Contact",children:"Contact"})})]})})]})})})},j=function(){return Object(i.jsx)("div",{className:"hero",children:Object(i.jsxs)("div",{className:"row hero-row",children:[Object(i.jsxs)("div",{className:"col real-col",children:[Object(i.jsx)("h1",{children:"Vivir Saludable"}),Object(i.jsx)("h3",{children:"Solo quiero alludarte a aser decisiones para mejorar tu futuro"}),Object(i.jsx)("button",{className:"btn btn-dark",children:"Contactame"}),Object(i.jsx)("button",{className:"btn btn-dark",children:"Productos"})]}),Object(i.jsx)("div",{className:"col fake-col"})]})})},b=Object(c.createContext)([]),m=function(e){var a=e.img,t=e.title,c=e.description,n=e.name;return Object(i.jsxs)("div",{className:"product-cards fade-in",children:[Object(i.jsx)("div",{className:"img-con",children:Object(i.jsx)("img",{src:a,alt:n})}),Object(i.jsxs)("div",{className:"card-info",children:[Object(i.jsx)("h3",{children:t}),Object(i.jsx)("p",{children:c})]}),Object(i.jsx)("div",{className:"Card-footer",children:Object(i.jsx)("p",{children:n})})]})},u=function(){var e=Object(c.useContext)(b);return Object(c.useEffect)((function(){var e=document.querySelectorAll(".cards-container");window.addEventListener("scroll",(function(){e.forEach((function(e){e.getBoundingClientRect().top<window.innerHeight-50&&e.classList.add("fade-in-up")}))}))}),[]),Object(i.jsx)("div",{className:"card-background",children:Object(i.jsxs)("div",{className:"container products-container",children:[Object(i.jsx)("h2",{children:"Ejemplos de Productos"}),Object(i.jsx)("div",{className:"row cards-container",children:e.map((function(e,a){return Object(i.jsx)(m,{img:e.img,description:e.description,name:e.name,title:e.title},a)}))})]})})},h=t.p+"static/media/cbdoil.07eca349.jpg",x=t.p+"static/media/painlessoil.6e0ef879.jpg",O=t.p+"static/media/producto-1.586c9082.jpg",p=[{img:h,title:"CBD OIL 5000",name:"ETERNAL",description:"alluda con blah blah blah"},{img:x,title:"PAINLESS OIL",name:"ETERNAL",description:"alluda con blah blah blah"},{img:O,title:"CBD OIL 7000",name:"ETERNAL",description:"alluda con blah blah blah"},{img:h,title:"CBD OIL 5000",name:"ETERNAL",description:"alluda con blah blah blah"},{img:x,title:"PAINLESS OIL",name:"ETERNAL",description:"alluda con blah blah blah"},{img:O,title:"CBD OIL 7000",name:"ETERNAL",description:"alluda con blah blah blah"}],v=function(e){var a=e.img,t=e.name,c=e.testimony;return Object(i.jsxs)("div",{className:"testi-cards",children:[Object(i.jsx)("img",{src:a,alt:t}),Object(i.jsx)("p",{children:c}),Object(i.jsx)("h4",{children:t})]})},f=[{img:t.p+"static/media/person1.2a805193.jpg",name:"Leslie Crandall",testimony:"I struggled with things like anxiety and other stuff now I feel great"},{img:t.p+"static/media/person2.c368d18a.jpg",name:"Sarah Smith",testimony:"I struggled with things like anxiety and other stuff now I feel great"},{img:t.p+"static/media/person3.07c256bc.jpg",name:"Jake Gabriel",testimony:"I struggled with things like anxiety and other stuff now I feel great"}],g=function(){return Object(i.jsxs)("div",{className:"testimonials",children:[Object(i.jsx)("h2",{children:"Lo Que Dise la Gente"}),Object(i.jsx)("div",{className:"testi-card-con",children:f.map((function(e,a){return Object(i.jsx)(v,{img:e.img,name:e.name,testimony:e.testimony})}))})]})};var N=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(j,{}),Object(i.jsx)(b.Provider,{value:p,children:Object(i.jsx)(u,{})}),Object(i.jsx)(g,{})]})},w=t.p+"static/media/araceli2.1a008707.jpg",L=function(){return Object(c.useEffect)((function(){document.querySelectorAll(".fade-in").forEach((function(e){e.getBoundingClientRect().top<window.innerHeight-50&&e.classList.add("fade-in-up")}))}),[]),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"about-me row",children:[Object(i.jsx)("div",{className:"col aboutme-section",children:Object(i.jsxs)("div",{className:"Card",children:[Object(i.jsx)("div",{className:"card-header",children:Object(i.jsx)("h2",{className:"fade-in",children:"Quien Soy?"})}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("p",{className:"card-text fade-in",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga?"}),Object(i.jsx)("button",{className:"btn btn-dark",children:"facebook"})]})]})}),Object(i.jsxs)("div",{className:"col img-container",children:[Object(i.jsx)("img",{className:"fade-in",src:w,alt:"about me"}),Object(i.jsx)("h3",{className:"card-title fade-in",children:"Araceli Mia"}),Object(i.jsx)("p",{className:"fade-in",children:"Vendedora De Productos"})]})]})})},E=function(){return Object(i.jsxs)("div",{className:"about-me-header",children:[Object(i.jsx)("h1",{children:" Siempre eh sido motivada"}),Object(i.jsxs)("h3",{children:["Desde peque\xf1a e batallado con ansiedad y estress,",Object(i.jsx)("span",{className:"span1",children:" estos productos"})," ",Object(i.jsx)("span",{className:"span2",children:"alludan!"})]})]})},k=function(){return Object(i.jsxs)("div",{className:"about-me-hero",children:[Object(i.jsx)("h1",{children:'" \u201cIt is health that is the real wealth, and not pieces of gold and silver\u201d'}),Object(i.jsx)("h4",{children:"Mahatma Gandhi"})]})},q=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(E,{}),Object(i.jsx)(L,{}),Object(i.jsx)(k,{})]})},I=function(){return Object(i.jsx)("div",{className:"footer",children:Object(i.jsx)("h2",{children:"Footer"})})};t(28);var y=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(l.a,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(d.a,{exact:!0,path:"/",component:N}),Object(i.jsx)(d.a,{path:"/AboutMe",component:q}),Object(i.jsx)(I,{})]})})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(a){var t=a.getCLS,i=a.getFID,c=a.getFCP,n=a.getLCP,s=a.getTTFB;t(e),i(e),c(e),n(e),s(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),A()}},[[29,1,2]]]);
//# sourceMappingURL=main.3a959902.chunk.js.map