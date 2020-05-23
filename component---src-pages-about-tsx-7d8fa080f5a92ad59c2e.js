(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{155:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),o=t(170),r=t(188),l=t(530),c=t(175),s=t.n(c),p=t(75),d=t.n(p),m=t(159),A=t(160),h=m.c.ul.withConfig({displayName:"SocialProfilestyle__SocialProfileWrapper",componentId:"sc-112vm24-0"})(["\n  display: inline-flex;\n"]),b=m.c.div.withConfig({displayName:"SocialProfilestyle__Tooltip",componentId:"sc-112vm24-1"})(["\n  position: absolute;\n  background-color: #fff;\n  pointer-events: none;\n  padding: 0.4rem 0.8rem;\n  border-radius: 3px;\n  color: #333;\n  font-size: 13px;\n  bottom: 90%;\n  left: 50%;\n  opacity: 0;\n  white-space: nowrap;\n  visibility: hidden;\n  z-index: 999;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\n  transform: translate3d(-50%, 0, 0);\n  transition: 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);\n\n  &:after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-top: 6px solid #fff;\n    border-right: 6px solid transparent;\n    border-left: 6px solid transparent;\n    bottom: -6px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"]),x=m.c.li.withConfig({displayName:"SocialProfilestyle__SocialProfileItem",componentId:"sc-112vm24-2"})(["\n  list-style: none;\n  position: relative;\n  margin-right: 20px;\n  &:last-child {\n    margin-right: 0;\n  }\n  &:hover {\n    "," {\n      opacity: 1;\n      visibility: visible;\n      bottom: calc(100% + 5px);\n    }\n  }\n\n  a {\n    color: ",";\n    font-size: 22px;\n    padding: 0.2em;\n    display: block;\n    svg {\n      display: block;\n    }\n  }\n"],b,Object(A.a)("colors.textColor","#292929")),u=function(n){var e=n.items,t=d()(n,["items"]);return a.createElement(h,t,e.map(function(n,e){return a.createElement(x,{key:e},a.createElement("a",{href:n.url,"aria-label":"social profile"},n.icon||"icon"),a.createElement(b,null,n.tooltip||"Social Link"))}))},g=t(164),f=m.c.div.withConfig({displayName:"style__AboutWrapper",componentId:"bqj3ho-0"})(["\n  position: relative;\n  padding: 90px 75px 0 75px;\n  @media (max-width: 990px) {\n    padding: 80px 45px 30px 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 25px 0 25px;\n  }\n"]),w=m.c.div.withConfig({displayName:"style__AboutPageTitle",componentId:"bqj3ho-1"})(["\n  margin-bottom: 45px;\n  @media (max-width: 767px) {\n    margin-bottom: 30px;\n  }\n  h2 {\n    font-size: 30px;\n    font-weight: 700;\n    color: ",";\n    line-height: 1.53;\n    margin-bottom: 10px;\n    @media (max-width: 990px) {\n      font-size: 26px;\n    }\n    @media (max-width: 767px) {\n      font-size: 22px;\n      margin-bottom: 10px;\n    }\n  }\n"],Object(A.a)("colors.textColor","#292929")),y=m.c.div.withConfig({displayName:"style__AboutImage",componentId:"bqj3ho-2"})(["\n  margin-bottom: 90px;\n  @media (max-width: 990px) {\n    margin-bottom: 60px;\n  }\n  @media (max-width: 767px) {\n    margin-bottom: 40px;\n  }\n"]),j=m.c.div.withConfig({displayName:"style__AboutDetails",componentId:"bqj3ho-3"})(["\n  width: 870px;\n  max-width: 100%;\n  margin: 0 auto;\n\n  h2 {\n    font-size: 21px;\n    font-weight: 500;\n    color: ",";\n    margin-bottom: 40px;\n    @media (max-width: 990px) {\n      margin-bottom: 30px;\n    }\n    @media (max-width: 767px) {\n      font-size: 18px;\n      margin-bottom: 25px;\n    }\n  }\n"],Object(A.a)("colors.textColor","#292929")),E=m.c.div.withConfig({displayName:"style__SocialProfiles",componentId:"bqj3ho-4"})(['\n  margin-top: 60px;\n  position: relative;\n  @media (max-width: 767px) {\n    margin-top: 40px;\n  }\n\n  &:before {\n    content: "";\n    width: 30px;\n    height: 1px;\n    background: #292929;\n    display: block;\n    margin-bottom: 60px;\n    @media (max-width: 767px) {\n      margin-bottom: 40px;\n    }\n  }\n']),v=[{icon:a.createElement(g.c,null),url:"https://www.facebook.com/redqinc/",tooltip:"Facebook"},{icon:a.createElement(g.d,null),url:"https://www.instagram.com/redqinc/",tooltip:"Instagram"},{icon:a.createElement(g.h,null),url:"https://twitter.com/redqinc",tooltip:"Twitter"},{icon:a.createElement(g.e,null),url:"https://www.linkedin.com/company/redqinc/",tooltip:"Linked In"}],C=function(n){var e=l.data;return a.createElement(f,null,a.createElement(w,null,a.createElement("h2",null,"Acerca de Comunidad TI"),a.createElement("p",null,"Comunidad TI es formado por un grupo de ingenierios que trabajan con compañias de software.")),a.createElement(y,null,a.createElement(s.a,{fluid:e.avatar.childImageSharp.fluid,alt:"author"})),a.createElement(j,null,a.createElement("h2",null,"Hey there, what’s up?"),a.createElement("p",null,"RedQ Team is a creative agency specializing in building scalable, high-performance web & mobile application. Our main concern is creating more value into the application so that can help our customers to grow their business."),a.createElement("p",null,"RedQ Team is a creative agency specializing in building scalable, high-performance web & mobile application. Our main concern is creating more value into the application so that can help our customers to grow their business."),a.createElement(E,null,a.createElement(u,{items:v}))))};e.default=function(){return i.a.createElement(o.a,null,i.a.createElement(r.a,{title:"About Us",description:"StoryHub is a beautiful Gatsby Blog theme designed to showcase your work in style. Perfect for designers, artists, photographers and developers to use for their portfolio website."}),i.a.createElement(C,null))}},165:function(n,e,t){"use strict";t(33);var a=t(75),i=t.n(a),o=t(0),r=t.n(o),l=t(159),c=t(160),s=Object(l.c)("button").withConfig({displayName:"Buttonstyle__ButtonStyle",componentId:"sc-15xwm8q-0"})(["\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  background-color: ",";\n  height: ","px;\n  width: ",";\n  font-family: ",";\n  font-size: ","px;\n  font-weight: ",";\n  text-decoration: none;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 27px;\n  padding-right: 27px;\n  border: 0;\n  transition: all 0.3s ease;\n  span.btn-text {\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n  span.btn-icon {\n    display: flex;\n    > div {\n      display: flex !important;\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &.disabled {\n    color: ",";\n    background-color: ",";\n    border-color: ",";\n\n    &:hover {\n      color: ",";\n      background-color: ",";\n      border-color: ",";\n    }\n  }\n\n  &.is-loading {\n    .btn-text {\n      padding-left: 8px;\n      padding-right: 8px;\n    }\n  }\n"],Object(c.a)("colors.white","#fff"),Object(c.a)("colors.black","#292929"),Object(c.a)("heights.2","44"),function(n){return n.fullwidth?"100%":"auto"},Object(c.a)("fontFamily.0","'Fira Sans', sans-serif"),Object(c.a)("fontSizes.3","15"),Object(c.a)("fontWeights.4","500"),Object(c.a)("inactiveColor","#767676"),Object(c.a)("inactiveBG","#e6e6e6"),Object(c.a)("inactiveBG","#e6e6e6"),Object(c.a)("inactiveColor","#767676"),Object(c.a)("inactiveBG","#e6e6e6"),Object(c.a)("inactiveBG","#e6e6e6"));s.displayName="ButtonStyle";var p=s,d=function(n){var e=n.type,t=n.title,a=n.icon,o=n.disabled,l=n.iconPosition,c=n.onClick,s=n.loader,d=n.isLoading,m=n.className,A=n.fullwidth,h=n.style,b=i()(n,["type","title","icon","disabled","iconPosition","onClick","loader","isLoading","className","fullwidth","style"]),x=["button"];o&&x.push("disabled"),d&&x.push("is-loading"),m&&x.push(m);var u=1==d?r.a.createElement(r.a.Fragment,null,s||"loading...."):a&&r.a.createElement("span",{className:"btn-icon"},a),g=l||"right";return r.a.createElement(p,Object.assign({type:e,className:x.join(" "),disabled:o,"icon-position":g,onClick:c,fullwidth:A,style:h},b),"left"===g&&u,t&&!d&&r.a.createElement("span",{className:"btn-text"},t),"right"===g&&u,d&&r.a.createElement(function(){return r.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 100 100",className:"loading-icon",style:{marginLeft:5}},r.a.createElement("circle",{cx:"50",cy:"50",fill:"none","ng-attr-stroke":"{{config.color}}","ng-attr-stroke-width":"{{config.width}}","ng-attr-r":"{{config.radius}}","ng-attr-stroke-dasharray":"{{config.dasharray}}",stroke:"#ffffff",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",transform:"rotate(196.993 50 50)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})))},null))};d.defaultProps={disabled:!1,isLoading:!1,type:"button"};e.a=d},166:function(n,e,t){"use strict";t(33),t(35),t(214);var a=t(75),i=t.n(a),o=t(0),r=t.n(o),l=t(159),c=t(160),s=l.c.div.withConfig({displayName:"Inputstyle__InputWrapper",componentId:"rh8jfb-0"})(["\n  position: relative;\n  > div {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: space-between;\n\n    > label {\n      color: ",";\n      font-size: ","px;\n      line-height: ",";\n      font-weight: ",";\n    }\n  }\n\n  .notification {\n    display: block;\n    color: #d8000c;\n    font-size: 14px;\n    padding-top: 0.5em;\n  }\n\n  .inner-wrap {\n    width: 100%;\n    margin-top: ","px;\n    box-sizing: border-box;\n    position: relative;\n\n    &:only-child {\n      margin: 0;\n    }\n\n    input,\n    textarea,\n    input[type='text'],\n    input[type='email'],\n    input[type='number'],\n    input[type='password'] {\n      appearance: none;\n      width: 100%;\n      height: ","px;\n      border: 1px solid ",";\n      color: ",";\n      font-size: ","px;\n      line-height: ",";\n      font-weight: ",";\n      padding: 0 ","px;\n      box-sizing: border-box;\n      border-radius: 0;\n      transition: border-color 0.25s ease;\n\n      &:hover,\n      &:focus {\n        outline: 0;\n      }\n\n      &:focus {\n        border-color: ",";\n      }\n\n      &::placeholder {\n        color: ",";\n      }\n    }\n\n    input[type='number'] {\n      &::-webkit-inner-spin-button,\n      &::-webkit-outer-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n      }\n    }\n\n    textarea {\n      height: auto;\n      min-height: ","px;\n      padding-top: ","px;\n      resize: none;\n    }\n  }\n\n  &.disabled {\n    .inner-wrap {\n      cursor: not-allowed;\n      opacity: 0.6;\n    }\n  }\n\n  &.with-search-icon {\n    .inner-wrap {\n      position: relative;\n\n      .search-icon {\n        width: ","px;\n        height: 100%;\n        font-size: ","px;\n        color: ",";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        position: absolute;\n        top: 0;\n        left: 0;\n\n        &.right {\n          right: 0;\n          left: auto;\n        }\n      }\n\n      .icon-left {\n        padding-left: ","px;\n      }\n\n      .icon-right {\n        padding-right: ","px;\n      }\n    }\n  }\n\n  &.is-material {\n    label {\n      position: absolute;\n      left: 15px;\n      color: ",";\n      font-weight: 400;\n      top: 3px;\n      transition: all 0.2s ease;\n    }\n\n    input,\n    textarea,\n    input[type='text'],\n    input[type='email'],\n    input[type='number'],\n    input[type='password'] {\n      border-radius: 0;\n      border-top: 0;\n      border-left: 0;\n      border-right: 0;\n      padding-left: 15px;\n      padding-right: 15px;\n      height: auto;\n      background: transparent;\n      border-color: ",";\n    }\n\n    textarea {\n      min-height: 40px;\n      padding-bottom: 0;\n    }\n\n    .highlight {\n      position: absolute;\n      height: 1px;\n      top: auto;\n      left: 50%;\n      bottom: 0;\n      width: 0;\n      pointer-events: none;\n      transition: all 0.2s ease;\n    }\n\n    /* If input has icon then these styel */\n    &.icon-left,\n    &.icon-right {\n      .field-wrapper {\n        flex-direction: row-reverse;\n        > .input-icon {\n          width: auto;\n        }\n        > input {\n          flex: 1;\n        }\n      }\n    }\n\n    /* When icon position in left */\n    &.icon-left {\n      .field-wrapper {\n        > input {\n          padding-left: 20px;\n        }\n      }\n      label {\n        top: -15px;\n        font-size: 12px;\n      }\n    }\n\n    /* When icon position in right */\n    &.icon-right {\n      .field-wrapper {\n        > input {\n          padding-right: 20px;\n        }\n      }\n    }\n\n    /* Material input focus style */\n    &.is-focus {\n      input {\n        border-color: ",";\n      }\n\n      label {\n        top: -10px;\n        font-size: 12px;\n        color: ",";\n      }\n\n      .highlight {\n        width: 100%;\n        height: 2px;\n        left: 0;\n      }\n    }\n  }\n"],Object(c.a)("colors.textColor","#292929"),Object(c.a)("fontSizes.3","15"),Object(c.a)("lineHeights.normal","1"),Object(c.a)("fontWeights.4","500"),Object(c.a)("space.4","15"),Object(c.a)("heights.2","44"),Object(c.a)("colors.borderColor","#DBDBDB"),Object(c.a)("colors.textColor","#292929"),Object(c.a)("fontSizes.3","15"),Object(c.a)("lineHeights.normalText","1.5"),Object(c.a)("fontWeights.3","400"),Object(c.a)("space.4","15"),Object(c.a)("colors.textColor","#292929"),Object(c.a)("colors.textColor","#292929"),Object(c.a)("heights.9","230"),Object(c.a)("space.4","15"),Object(c.a)("widths.2","45"),Object(c.a)("fontSizes.3","15"),Object(c.a)("colors.textColor","#292929"),Object(c.a)("space.9","50"),Object(c.a)("space.9","50"),Object(c.a)("colors.inactiveColor","#767676"),Object(c.a)("colors.textColor","#292929"),Object(c.a)("colors.inactiveIcon","#ebebeb"),Object(c.a)("colors.textColor","#484848"));e.a=function(n){var e,t,a=n.type,o=n.label,l=n.style,c=n.disabled,p=n.className,d=n.secondaryComponent,m=n.containerStyle,A=n.name,h=n.placeholder,b=n.value,x=n.onChange,u=n.onBlur,g=n.onFocus,f=n.notification,w=n.required,y=n.ariaLabel,j=i()(n,["type","label","style","disabled","className","secondaryComponent","containerStyle","name","placeholder","value","onChange","onBlur","onFocus","notification","required","ariaLabel"]),E=["field-wrapper"];p&&E.push(p),c&&E.push("disabled"),o&&(e=o.replace(/\s+/g,"_").toLowerCase());var v=o&&r.a.createElement("label",{htmlFor:e},o),C=f&&r.a.createElement("div",{className:"notification"},f);switch(a){case"textarea":t=r.a.createElement("div",{className:"inner-wrap"},r.a.createElement("textarea",Object.assign({id:e,name:A,disabled:c,style:l,value:b,onChange:x,onBlur:u,onFocus:g,placeholder:h,required:w,"aria-label":A||y},j)));break;default:t=r.a.createElement("div",{className:"inner-wrap"},r.a.createElement("input",Object.assign({type:a,id:e,disabled:c,style:l,name:A,value:b,onChange:x,onBlur:u,onFocus:g,placeholder:h,required:w,"aria-label":A||y},j)))}return r.a.createElement(s,{className:""+E.join(" "),style:m},v||d?r.a.createElement("div",null,v," ",d):"",t,C)}},169:function(n,e,t){n.exports=t.p+"static/newsletter-bg-9150812fbf17b9d7e990630713e65296.webp"},170:function(n,e,t){"use strict";var a=t(0),i=t.n(a),o=t(206),r=t.n(o),l=t(159),c=t(207),s=t.n(c),p=t(189),d=(t(33),t(213)),m=t.n(d),A=t(166),h=t(165),b=t(160),x=t(169),u=t.n(x),g=l.c.div.withConfig({displayName:"newsletterstyle__NewsletterWrapper",componentId:"sc-1marw3n-0"})(["\n  margin: 0 auto;\n  padding: 30px;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 3px;\n  margin-top: 120px;\n\n  @media (min-width: 990px) {\n    width: 900px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  }\n  @media (min-width: 1400px) {\n    width: 1170px;\n  }\n  @media (max-width: 990px) {\n    width: calc(100% - 90px);\n    margin-top: 90px;\n    padding: 25px;\n  }\n  @media (max-width: 575px) {\n    width: calc(100% - 50px);\n    margin-top: 60px;\n    padding: 15px;\n  }\n"],u.a),f=l.c.div.withConfig({displayName:"newsletterstyle__NewsletterInnerWrapper",componentId:"sc-1marw3n-1"})(["\n  background: #fff;\n  padding: 90px;\n  height: 100%;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  @media (max-width: 1200px) {\n    padding: 70px 50px;\n  }\n  @media (max-width: 990px) {\n    padding: 50px 40px;\n  }\n  @media (max-width: 575px) {\n    padding: 30px;\n  }\n"]),w=l.c.h1.withConfig({displayName:"newsletterstyle__NewsletterTitle",componentId:"sc-1marw3n-2"})(["\n  font-size: 30px;\n  color: ",";\n  font-weight: ",";\n  margin-bottom: 20px;\n  font-family: ",";\n  @media (max-width: 1200px) {\n    font-size: 26px;\n  }\n  @media (max-width: 990px) {\n    font-size: 21px;\n    margin-bottom: 10px;\n  }\n  @media (max-width: 575px) {\n    font-size: 18px;\n  }\n"],Object(b.a)("colors.textColor","#292929"),Object(b.a)("fontWeights.6","700"),Object(b.a)("fontFamily.0","'Fira Sans',sans-serif")),y=l.c.p.withConfig({displayName:"newsletterstyle__NewsletterDescription",componentId:"sc-1marw3n-3"})(["\n  font-size: ","px;\n  line-height: ",";\n  font-weight: ",";\n  color: ",";\n  margin: 0;\n  @media (max-width: 1200px) {\n    font-size: 14px;\n  }\n  @media (max-width: 575px) {\n    font-size: 13px;\n  }\n"],Object(b.a)("fontSizes.3","15"),Object(b.a)("lineHeights.text","2"),Object(b.a)("fontWeights.3","400"),Object(b.a)("colors.textColor","#292929")),j=l.c.form.withConfig({displayName:"newsletterstyle__NewsletterInputWrapper",componentId:"sc-1marw3n-4"})(["\n  display: flex;\n  align-items: flex-end;\n  width: 570px;\n  max-width: 100%;\n  margin-top: 90px;\n  min-height: 44px;\n  @media (max-width: 1200px) {\n    margin-top: 90px;\n  }\n  @media (max-width: 990px) {\n    margin-top: 70px;\n  }\n  @media (max-width: 575px) {\n    margin-top: 60px;\n    display: block;\n  }\n\n  .field-wrapper {\n    flex-grow: 1;\n    margin-right: 15px;\n    @media (max-width: 575px) {\n      margin-right: 0;\n      margin-bottom: 15px;\n    }\n    .inner-wrap {\n      input {\n        border-width: 0 0 1px 0;\n        border-color: ",";\n      }\n    }\n  }\n  .button {\n    @media (max-width: 575px) {\n      width: 100%;\n      height: 42px;\n    }\n  }\n"],Object(b.a)("colors.textColor","#292929")),E=l.c.div.withConfig({displayName:"newsletterstyle__ErrorMessage",componentId:"sc-1marw3n-5"})(["\n  width: 570px;\n  max-width: 100%;\n  margin-top: 10px;\n  text-align: justify;\n  font-size: 13px;\n\n  > span {\n    color: #d8000c;\n  }\n  a {\n    color: ",";\n  }\n"],Object(b.a)("colors.primary","#039be5")),v=l.c.div.withConfig({displayName:"newsletterstyle__SuccessMessage",componentId:"sc-1marw3n-6"})(["\n  font-size: 22px;\n  line-height: 1.7;\n  text-align: center;\n  width: 100%;\n\n  @media (max-width: 990px) {\n    font-size: 18px;\n  }\n  @media (max-width: 575px) {\n    font-size: 16px;\n  }\n"]),C=function(n){var e=Object.assign({},n),t=Object(a.useState)(""),o=t[0],r=t[1],l=Object(a.useState)(),c=l[0],s=l[1],p=Object(a.useState)(),d=p[0],b=p[1];return i.a.createElement(g,e,i.a.createElement(f,null,i.a.createElement(w,null,"Recibe en tu correo los últimos artículos."),i.a.createElement(y,null,"Suscríbete y mantente al tanto."),i.a.createElement(j,{onSubmit:function(n){n.preventDefault(),m()(o).then(function(n){var e=n.msg;if("success"!==n.result)throw e;s(e),b(""),r("")}).catch(function(n){b(n),s(""),r("")})}},c?i.a.createElement(v,null,"Gracias por suscribirte! 🙂"):i.a.createElement(i.a.Fragment,null,i.a.createElement(A.a,{type:"email",name:"email",placeholder:"Tú correo electrónico aquí",onChange:function(n){r(n.target.value)},value:o,required:!0}),i.a.createElement(h.a,{title:"Suscribirme",type:"submit"}))),d&&i.a.createElement(E,{dangerouslySetInnerHTML:{__html:"<span>*</span>Ocurrió un error. Intenta nuevamente."}})))},O=t(190),N=t(164),k=l.c.div.withConfig({displayName:"scrollUpButtonstyle__ScrollUpButtonWrapper",componentId:"p5ntld-0"})(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  background-color: ",";\n  color: #fff;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);\n  transition: 0.15s ease-in-out;\n  @media (max-width: 767px) {\n    display: none;\n  }\n  &:hover {\n    background-color: ",";\n  }\n"],Object(b.a)("colors.primary"),Object(b.a)("colors.primaryHover")),B=function(n){return i.a.createElement(k,n,i.a.createElement(N.k,null))},z=t(187),I={transparent:"transparent",black:"#292929",white:"#ffffff",textColor:"#292929",lightTextColor:"#757575",inactiveField:"#F7F7F7",inactiveColor:"#767676",inactiveBG:"#e6e6e6",borderColor:"#DBDBDB",lightBorderColor:"#ededed",primary:"#039be5",primaryHover:"#00b0ff"},S={breakpoints:[576,768,991,1220],space:[0,5,8,10,15,20,25,30,40,50,60,70,75,80,90,100,120],fontSizes:[10,12,14,15,16,18,24,30,36,48,80,96],fontWeights:[100,200,300,400,500,600,700,800,900],fontFamily:["'Fira Sans',sans-serif","'Poppins', sans-serif"],lineHeights:{normal:1,normalText:1.5,title:2,text:2},letterSpacings:{normal:"normal",tracked:"0.1em",tight:"-0.05em",mega:"0.25em"},borders:[0,"1px solid","2px solid","3px solid","4px solid","5px solid","6px solid"],radius:[3,4,5,10,20,30,60,120,"50%"],widths:[36,40,45,48,54,70,81,128,256],heights:[36,40,44,48,50,55,70,80,120,230],maxWidths:[16,32,64,128,256,512,768,1024,1536],colors:I,colorStyles:{primary:{color:I.primary,backgroundColor:I.primary,borderColor:I.primary,"&:hover":{backgroundColor:I.primaryHover,borderColor:I.primaryHover}}}};e.a=function(n){var e=n.children;return i.a.createElement(l.a,{theme:S},i.a.createElement(i.a.Fragment,null,i.a.createElement(z.a,null),i.a.createElement(r.a,{top:0,innerZ:9999,activeClass:"nav-sticky"},i.a.createElement(p.a,null)),e,i.a.createElement(C,null),i.a.createElement(O.a,null,"Copyright © ",(new Date).getFullYear(),i.a.createElement("a",{href:"https://comunidadti.com/"}," Comunidad TI.")),i.a.createElement(s.a,{showUnder:300,duration:700,easing:"easeInOutCubic",style:{bottom:30,right:20}},i.a.createElement(B,null))))}},530:function(n){n.exports={data:{avatar:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGuAD//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAEFAl//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAE/IV//2gAMAwEAAgADAAAAEPPP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAFhAAAwAAAAAAAAAAAAAAAAAAACCB/9oACAEBAAE/ECr/AP/Z",aspectRatio:1.84375,src:"/static/09cd2e8bdcdbbbab11c1193a6e6101b9/fe1fc/about.jpg",srcSet:"/static/09cd2e8bdcdbbbab11c1193a6e6101b9/ff422/about.jpg 443w,\n/static/09cd2e8bdcdbbbab11c1193a6e6101b9/8a5b2/about.jpg 885w,\n/static/09cd2e8bdcdbbbab11c1193a6e6101b9/fe1fc/about.jpg 1770w",sizes:"(max-width: 1770px) 100vw, 1770px"}}},site:{siteMetadata:{author:"Hector Yeomans",about:"Nuestra objetivo principal es compartir el conocimiento. Los artículos que encontrarás aquí\n    estan relacionados con el desarrollo de aplicaciones Web."}}}}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-7d8fa080f5a92ad59c2e.js.map