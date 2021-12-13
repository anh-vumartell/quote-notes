(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{16:function(e,t,n){e.exports={header:"Header_header__TkoI2",logo:"Header_logo__39okJ",navlist:"Header_navlist__3WGcw",navlist__item:"Header_navlist__item__QQtfc",navbar:"Header_navbar__2sIA2",active:"Header_active__M_qDI",badge:"Header_badge__3dj7m"}},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}));var a,c=n(9),s=n(1),o=n(2);function r(){return Object(s.useContext)(i)}var i=Object(s.createContext)({token:"",isLoggedIn:!1,login:function(e){},logout:function(){}}),l=function(e){var t=Object(s.useState)(null),n=Object(c.a)(t,2),r=n[0],l=n[1],u=Object(s.useState)(),j=Object(c.a)(u,2),b=j[0],d=j[1],h=Boolean(r),O=Object(s.useCallback)((function(){l(null),localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),clearTimeout(a)}),[]);Object(s.useEffect)((function(){r&&(localStorage.getItem("deadLine")-Date.now()<=6e4&&O())}),[r,O]);var m={token:r,isLoggedIn:h,login:function(e,t,n){d(n),l(e),console.log(e),localStorage.setItem("token",e),localStorage.setItem("deadLine",t),a=setTimeout(O,t-Date.now())},logout:O,currentEmail:b};return Object(o.jsx)(i.Provider,{value:m,children:e.children})}},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var a=n(9),c=n(1),s=n(2),o=Object(c.createContext)(),r=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),r=n[0],i=n[1],l=Object(c.useState)(0),u=Object(a.a)(l,2),j={favorites:r,setFavList:i,favCount:u[0],setFavCount:u[1]};return Object(s.jsx)(o.Provider,{value:j,children:e.children})}},31:function(e,t,n){e.exports={item:"QuoteItem_item__2dOvb","col-right":"QuoteItem_col-right__3npJZ",fullscreen:"QuoteItem_fullscreen__14fm-",remove:"QuoteItem_remove__mRXG6","col-left":"QuoteItem_col-left__23vPg"}},32:function(e,t,n){e.exports={auth:"AuthForm_auth__2ZSKH",control:"AuthForm_control__1evQ4",actions:"AuthForm_actions__25Vmz",toggle:"AuthForm_toggle__1Wxr6"}},44:function(e,t,n){"use strict";var a=n(57),c=n.n(a),s=n(2);t.a=function(){return Object(s.jsx)("div",{className:c.a.spinner})}},50:function(e,t,n){"use strict";var a=n(31),c=n.n(a),s=n(14),o=n(56),r=n.n(o),i=n(55),l=n.n(i),u=n(2);t.a=function(e){return Object(u.jsxs)("li",{className:c.a.item,children:[Object(u.jsxs)("figure",{children:[Object(u.jsx)("blockquote",{children:Object(u.jsxs)("p",{children:['"',e.text,'"']})}),Object(u.jsxs)("div",{className:c.a["col-left"],children:[Object(u.jsxs)("figcaption",{children:["by ",e.author]}),Object(u.jsxs)("figcaption",{children:["created at ",e.createdAt]})]})]}),Object(u.jsxs)("div",{className:c.a["col-right"],children:[Object(u.jsx)("div",{onClick:e.onRemove,className:c.a.remove,children:Object(u.jsx)(l.a,{sx:{fontSize:32}})}),Object(u.jsx)("div",{className:c.a.fullscreen,children:Object(u.jsx)(s.b,{to:"/all-quotes/".concat(e.id),children:Object(u.jsx)(r.a,{sx:{fontSize:32}})})})]})]})}},54:function(e,t,n){e.exports={main:"Layout_main__auk_r"}},57:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__289Sr"}},59:function(e,t,n){"use strict";var a=n(52),c=n(48),s=Object(a.a)({apiKey:"AIzaSyAVz31nXxptJDQCXFhrYkZ-HTEC-tZb5FY",authDomain:"quote-notes.firebaseapp.com",databaseURL:"https://quote-notes-default-rtdb.europe-west1.firebasedatabase.app",projectId:"quote-notes",storageBucket:"quote-notes.appspot.com",messagingSenderId:"586707582442",appId:"1:586707582442:web:43d93b65117e71758a8693"}),o=Object(c.a)(s);t.a=o},66:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(51),c=n.n(a),s=n(14),o=n(28),r=n(22),i=(n(66),n(59),n(1)),l=n.n(i),u=n(12),j=n(16),b=n.n(j),d=n(2);var h=function(){var e,t=Object(r.b)(),n=t.isLoggedIn,a=t.logout,c=t.currentEmail,l=Object(i.useContext)(o.a);return e=null!==localStorage.getItem("favQuotes")?JSON.parse(localStorage.getItem("favQuotes")).length:l.favCount,Object(d.jsxs)("header",{className:b.a.header,children:[Object(d.jsx)(s.b,{to:"/home",children:Object(d.jsx)("div",{className:b.a.logo,children:"Quote Notes"})}),Object(d.jsx)("nav",{className:b.a.navbar,children:Object(d.jsxs)("ul",{className:b.a.navlist,children:[Object(d.jsx)("li",{className:b.a.navlist__item,children:Object(d.jsx)(s.c,{activeClassName:b.a.active,to:"/all-quotes",children:"All Quotes"})}),Object(d.jsx)("li",{className:b.a.navlist__item,children:Object(d.jsx)(s.c,{activeClassName:b.a.active,to:"/add-a-quote",children:"Add a Quote"})}),!n&&Object(d.jsx)("li",{className:b.a.navlist__item,children:Object(d.jsx)(s.b,{to:"/auth",children:"Login"})}),n&&Object(d.jsx)("li",{className:b.a.navlist__item,children:Object(d.jsxs)(s.c,{to:"/favorites",activeClassName:b.a.active,children:["Favorites",Object(d.jsx)("span",{className:b.a.badge,children:e})]})}),n&&Object(d.jsx)("li",{className:b.a.navlist__item,children:Object(d.jsxs)("button",{onClick:function(){a()},children:["Logout, ",c]})})]})})]})},O=n(54),m=n.n(O);var x=function(e){return Object(d.jsxs)(i.Fragment,{children:[Object(d.jsx)(h,{}),Object(d.jsx)("main",{className:m.a.main,children:e.children})]})},v=n(50),f=function(e){return 0===e.favorites.length?Object(d.jsx)("p",{children:"No favorite quotes yet! Maybe adding one?"}):e.favorites.map((function(e){return Object(d.jsx)(v.a,{text:e.text,author:e.author,createdAt:e.createdAt},e.id)}))},g=function(e){var t,n=Object(i.useContext)(o.a);t=null!==localStorage.getItem("favQuotes")?JSON.parse(localStorage.getItem("favQuotes")):n.favorites,console.log(t);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"List of favorites"}),Object(d.jsxs)("p",{children:["You have"," ",t.length<=1?"".concat(t.length," favorite quote"):"".concat(t.length," favorite quotes")]}),Object(d.jsx)(f,{favorites:t})," ",0!==t.length&&Object(d.jsx)("button",{className:"btn--minimal",onClick:function(){localStorage.removeItem("favQuotes"),n.setFavList([]),n.setFavCount(0)},children:"Clear list"})]})},p=n(44),_=n(9),S=n(32),I=n.n(S),N=function(){var e=Object(r.b)().login,t=Object(u.g)(),n=Object(i.useState)(!1),a=Object(_.a)(n,2),c=a[0],s=a[1],o=Object(i.useState)(!0),l=Object(_.a)(o,2),j=l[0],b=l[1],h=Object(i.useRef)(),O=Object(i.useRef)();return Object(d.jsxs)("section",{className:I.a.auth,children:[Object(d.jsx)("h1",{children:j?"Login":"Sign Up"}),Object(d.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a,c=h.current.value,o=O.current.value;s(!0),a=j?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVz31nXxptJDQCXFhrYkZ-HTEC-tZb5FY":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVz31nXxptJDQCXFhrYkZ-HTEC-tZb5FY",fetch(a,{method:"POST",body:JSON.stringify({email:c,password:o,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return s(!1),e.ok?e.json():e.json().then((function(e){var t="Authentication failed";throw e&&e.error&&e.error.message&&(t=e.error.message),new Error(t)}))})).then((function(n){console.log(n),e(n.idToken,Date.now()+1e3*+n.expiresIn,n.email),t.push("/")})).catch((function(e){alert(e.message)})),h.current.value="",O.current.value=""},children:[Object(d.jsxs)("div",{className:I.a.control,children:[Object(d.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(d.jsx)("input",{type:"email",id:"email",required:!0,ref:h})]}),Object(d.jsxs)("div",{className:I.a.control,children:[Object(d.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(d.jsx)("input",{type:"password",id:"password",required:!0,ref:O})]}),Object(d.jsxs)("div",{className:I.a.actions,children:[!c&&Object(d.jsx)("button",{children:j?"Login":"Create Account"}),c&&Object(d.jsx)("p",{children:"Sending request..."}),Object(d.jsx)("button",{type:"button",className:I.a.toggle,onClick:function(){b((function(e){return!e}))},children:j?"Create new account":"Login with existing account"})]})]})]})},k=function(){return Object(d.jsx)(N,{})},C=l.a.lazy((function(){return n.e(6).then(n.bind(null,98))})),y=l.a.lazy((function(){return n.e(4).then(n.bind(null,101))})),q=l.a.lazy((function(){return n.e(3).then(n.bind(null,100))})),w=l.a.lazy((function(){return n.e(7).then(n.bind(null,99))})),A=l.a.lazy((function(){return n.e(5).then(n.bind(null,102))}));var F=function(){var e=Object(r.b)().isLoggedIn;return Object(d.jsx)(s.a,{children:Object(d.jsx)(x,{children:Object(d.jsx)(i.Suspense,{fallback:Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(p.a,{})}),children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/",exact:!0,children:Object(d.jsx)(u.a,{to:"/home"})}),Object(d.jsx)(u.b,{path:"/home",children:Object(d.jsx)(C,{})}),!e&&Object(d.jsx)(u.b,{path:"/auth",children:Object(d.jsx)(k,{})}),Object(d.jsx)(u.b,{path:"/all-quotes",exact:!0,children:Object(d.jsx)(A,{})}),Object(d.jsx)(u.b,{path:"/all-quotes/:quoteId",children:Object(d.jsx)(q,{})}),Object(d.jsxs)(u.b,{path:"/add-a-quote",children:[Object(d.jsx)("h1",{children:"Add your own quotes"}),Object(d.jsx)(y,{})]}),Object(d.jsx)(u.b,{path:"/favorites",children:Object(d.jsx)(g,{})}),Object(d.jsx)(u.b,{path:"*",children:Object(d.jsx)(w,{})})]})})})})};c.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(o.b,{children:Object(d.jsx)(s.a,{children:Object(d.jsx)(F,{})})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.a1456fe3.chunk.js.map