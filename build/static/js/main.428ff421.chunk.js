(this["webpackJsonpluca-codev-portfolio"]=this["webpackJsonpluca-codev-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},,,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(2),i=t.n(n),a=t(9),s=t.n(a),l=(t(16),t(11)),o=(t(17),t(0)),r=function(e){return Object(o.jsx)("li",{className:e.className,children:Object(o.jsx)("a",{href:e.href,children:e.name})})},d=(t(19),t(3)),j=t(4),b=function(e){return Object(o.jsxs)("div",{className:e.containerStyle,children:[Object(o.jsx)("a",{href:"https://github.com/LucaCoDevil",children:Object(o.jsx)(d.a,{className:e.styleIcon,icon:j.b,size:"2x"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/luca-codevilla-3b379419a/",children:Object(o.jsx)(d.a,{className:e.styleIcon,icon:j.e,size:"2x"})})]})},m=function(e){return Object(n.useEffect)((function(){var e=document.getElementById("navbar"),c=e.getBoundingClientRect().y;window.addEventListener("scroll",(function(){e.getBoundingClientRect().y<=0&&document.getElementById("navbar").classList.add("blah"),window.pageYOffset<=c&&document.getElementById("navbar").classList.remove("blah")}))})),Object(o.jsxs)("nav",{id:"navbar",children:[Object(o.jsxs)("ul",{className:"item-list",children:[Object(o.jsx)(r,{className:"nav-item",name:"HOME",href:"#landing-container"}),Object(o.jsx)(r,{className:"nav-item",name:"PORTFOLIO",href:"#portfolio-container"}),Object(o.jsx)(r,{className:"nav-item",name:"BIO",href:"#bio-container"}),Object(o.jsx)(r,{className:"nav-item",name:"CONTACT",href:"#contact-container"})]}),Object(o.jsx)(b,{containerStyle:"nav-container_icon",styleIcon:"nav-icon"})]})},u=(t(25),function(e){return Object(n.useEffect)((function(){var e=document.getElementById("button"),c=e.getBoundingClientRect().y;window.addEventListener("scroll",(function(){e.getBoundingClientRect().y>=0&&e.classList.add("fixed"),window.pageYOffset<=c&&e.classList.remove("fixed")}))})),Object(o.jsx)("div",{className:"button-container",id:"button",children:Object(o.jsxs)("button",{className:"button-toggle",onClick:e.onClick,children:[Object(o.jsx)("div",{className:"button-toggle_line"}),Object(o.jsx)("div",{className:"button-toggle_line"}),Object(o.jsx)("div",{className:"button-toggle_line"})]})})}),p=function(e){return Object(o.jsxs)("div",{id:"landing",children:[Object(o.jsx)("div",{className:"clip01"}),Object(o.jsx)("div",{className:"clip02"}),Object(o.jsxs)("div",{id:"landing-container",children:[Object(o.jsx)("h1",{className:"main-header",children:"Luca Codevilla"}),Object(o.jsx)("h4",{className:"main-description",children:"Full-stack web developer"})]}),Object(o.jsx)(m,{}),Object(o.jsx)(u,{onClick:e.handleClick})]})},O=function(e){return Object(o.jsxs)("div",{className:"col",onClick:function(){window.open(e.projectURL)},children:[Object(o.jsx)("img",{className:"card-img",src:e.imgURL,alt:e.alt}),Object(o.jsxs)("div",{className:"card-middle",children:[Object(o.jsx)("p",{className:"card-description",children:e.description}),Object(o.jsx)("a",{className:"card-link",href:e.projectURL,children:"View project"})]})]})},h=(t(26),t.p+"static/media/keeper.757d0466.png"),x=t.p+"static/media/dailyjournal.5cabbfbe.png",f=t.p+"static/media/signup.64a2324f.png";var v=function(){var e="Keeper is a dynamically loaded note taking webApp built with the MERN stack technologies.",c="Daily Journal is a Blog based webApp where one can create and manage blog posts.",t="Email Form is a Mailchimp newsletter sign up page used to add the user to an email list.";function i(e,c){var t,n,i;for(n=document.getElementsByClassName("tabcontent"),t=0;t<n.length;t++)n[t].style.display="none";for(document.getElementById(c).style.display="block",i=document.getElementsByClassName("tablinks"),t=0;t<i.length;t++)i[t].className=i[t].className.replace(" active","");e.currentTarget.className+=" active"}return Object(n.useEffect)((function(){document.getElementById("defaultOpen").click()})),Object(o.jsxs)("div",{id:"portfolio-container",children:[Object(o.jsx)("h2",{children:"PORTFOLIO"}),Object(o.jsxs)("div",{id:"container",children:[Object(o.jsxs)("div",{className:"tab",children:[Object(o.jsx)("button",{className:"tablinks",onClick:function(e){i(e,"All")},id:"defaultOpen",children:"ALL"}),Object(o.jsx)("button",{className:"tablinks",onClick:function(e){i(e,"Reactjs")},children:"REACT-JS"}),Object(o.jsx)("button",{className:"tablinks",onClick:function(e){i(e,"Javascript")},children:"JAVASCRIPT"})]}),Object(o.jsx)("div",{id:"All",className:"tabcontent",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(O,{imgURL:h,projectURL:"https://luca-codev-keeper.herokuapp.com/",alt:"Keeper project",description:e}),Object(o.jsx)(O,{imgURL:x,projectURL:"https://luca-codev-dailyjournal.herokuapp.com/",alt:"Daily Journal project",description:c}),Object(o.jsx)(O,{imgURL:f,projectURL:"https://lucacodev-emailform.herokuapp.com",alt:"Email form project",description:t})]})}),Object(o.jsx)("div",{id:"Reactjs",className:"tabcontent",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)(O,{imgURL:h,projectURL:"https://luca-codev-keeper.herokuapp.com/",alt:"Keeper project",description:e})})}),Object(o.jsx)("div",{id:"Javascript",className:"tabcontent",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(O,{imgURL:x,projectURL:"https://luca-codev-dailyjournal.herokuapp.com/",alt:"Daily Journal project",description:c}),Object(o.jsx)(O,{imgURL:f,projectURL:"https://lucacodev-emailform.herokuapp.com",alt:"Email form project",description:t})]})})]})]})},N=(t(27),t(8)),g=t.p+"static/media/p001c001.2c8d48c0.JPG",k=function(){return Object(o.jsxs)("div",{id:"bio-container",children:[Object(o.jsx)("h2",{children:"BIO"}),Object(o.jsxs)("div",{id:"info-container",children:[Object(o.jsxs)("div",{id:"left-bio",children:[Object(o.jsx)("img",{id:"portrait-img",src:g,alt:"Portrait"}),Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsxs)("div",{className:"left-text",children:[Object(o.jsx)("h3",{children:"Who am I? "}),Object(o.jsx)("p",{className:"bio-description",children:"I\u2019m a full-stack web developer, primarily focusing on the MERN (MongoDB, ExpressJS ReactJS, NodeJS) stack. I enjoy creating easily used, fluid webApps while incorporating a fully functional back-end component. I also have a hard driven passion for writing dynamically loaded, efficient code that allows for an enjoyable user experience."})]}),Object(o.jsx)("a",{className:"bio-btn",href:"https://www.linkedin.com/in/luca-codevilla-3b379419a/",children:"Learn more!"})]})]}),Object(o.jsx)("div",{id:"right-bio",children:Object(o.jsxs)("div",{id:"inner-rb",children:[Object(o.jsx)(d.a,{className:"skill-icon",icon:j.c,size:"3x"}),Object(o.jsx)(d.a,{className:"skill-icon",icon:j.f,size:"3x"}),Object(o.jsx)(d.a,{className:"skill-icon",icon:j.a,size:"3x"}),Object(o.jsx)(d.a,{className:"skill-icon",icon:j.d,size:"3x"}),Object(o.jsx)(d.a,{className:"skill-icon",icon:N.b,size:"3x"}),Object(o.jsx)(d.a,{className:"skill-icon",icon:N.a,size:"3x"}),Object(o.jsx)(d.a,{className:"skill-icon",icon:j.g,size:"3x"})]})})]})]})},y=t(10),w=t.n(y),E=(t(30),function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),c=e.REACT_APP_SERVICE_ID,t=e.REACT_APP_TEMPLATE_ID,n=e.REACT_APP_USER_ID;return Object(o.jsxs)("div",{id:"contact-container",children:[Object(o.jsx)("h2",{style:{color:"#dbdbdb",borderColor:"#dbdbdb"},children:"CONTACT"}),Object(o.jsx)("div",{className:"form-align",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),w.a.sendForm(c,t,e.target,n).then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},className:"form-controller",children:[Object(o.jsx)("input",{type:"text",className:"input-controller",placeholder:"Name",name:"user_name"}),Object(o.jsx)("input",{type:"email",className:"input-controller",placeholder:"Email",name:"user_email"}),Object(o.jsx)("textarea",{cols:"50",className:"input-controller",placeholder:"Message",rows:"8",name:"message"}),Object(o.jsx)("button",{type:"submit",className:"submit-btn",children:"Submit"})]})})]})}),R=(t(31),function(e){var c="slide-drawer";return e.show&&(c="slide-drawer open"),Object(o.jsxs)("nav",{className:c,children:[Object(o.jsx)("div",{}),Object(o.jsxs)("ul",{className:"mobile-nav",children:[Object(o.jsx)(r,{className:"mobile-link",name:"Home",href:"#landing-container"}),Object(o.jsx)(r,{className:"mobile-link",name:"My work",href:"#portfolio-container"}),Object(o.jsx)(r,{className:"mobile-link",name:"Bio",href:"#bio-container"}),Object(o.jsx)(r,{className:"mobile-link",name:"Contact",href:"#contact-container"})]}),Object(o.jsx)(b,{containerStyle:"mobile-container_icon",styleIcon:"mobile-icons"})]})}),C=(t(32),function(e){return Object(o.jsx)("div",{className:"backdrop",onClick:e.click,children:" "})});function L(){var e,c=Object(n.useState)(!1),t=Object(l.a)(c,2),i=t[0],a=t[1];return i&&(e=Object(o.jsx)(C,{click:function(){a(!1)}})),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(p,{handleClick:function(){a((function(e){return!i}))}}),Object(o.jsx)(R,{show:i}),e,Object(o.jsx)(v,{}),Object(o.jsx)(k,{}),Object(o.jsx)(E,{})]})}var I=document.getElementById("root");s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(L,{})}),I)}],[[33,1,2]]]);
//# sourceMappingURL=main.428ff421.chunk.js.map