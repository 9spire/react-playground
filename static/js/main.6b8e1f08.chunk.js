(this["webpackJsonpreact-playground"]=this["webpackJsonpreact-playground"]||[]).push([[0],{88:function(e,t,n){},89:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(29),i=n.n(c),s=(n(88),n(75)),o=n(14),l=(n(89),n(142)),j=n(143),u=n(144),d=n(146),x=n(147),b=n(148),h=n(73),p=n.n(h),f=n(2);function m(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(j.a,{sx:{flexGrow:1},children:Object(f.jsx)(u.a,{position:"static",color:"primary",enableColorOnDark:!0,children:Object(f.jsxs)(d.a,{children:[Object(f.jsx)(x.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:Object(f.jsx)(b.a,{href:"/",underline:"hover",color:"white",children:"React Playground"})}),Object(f.jsx)(x.a,{variant:"p",noWrap:!0,component:"div",sx:{display:{xs:"block"}},children:Object(f.jsx)(b.a,{href:"about",underline:"hover",color:"white",children:"About"})}),Object(f.jsx)(b.a,{href:"https://github.com/9spire/react-playground",target:"_blank",children:Object(f.jsx)(p.a,{sx:{fontSize:20,color:"white",px:2}})})]})})})})}var O=n(21),v=n.n(O),g=n(28),y=n(11),w=n(139),k=n(140),S=function(){var e=Object(r.useState)(),t=Object(y.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),i=Object(y.a)(c,2),s=i[0],o=i[1],l=Object(r.useState)("___"),u=Object(y.a)(l,2),d=u[0],b=u[1];return Object(f.jsxs)(j.a,{sx:{display:"flex",flexDirection:{xs:"column",md:"column"},border:"1px solid #ccc",borderRadius:"5px",m:1,p:1,width:"100%"},children:[Object(f.jsxs)(x.a,{variant:"h2",children:["Hello ",n]}),Object(f.jsxs)(x.a,{variant:"h4",children:["Are you ",d,"?"]}),Object(f.jsx)(w.a,{label:"Name",value:n,defaultValue:"Enter your name",type:"text",onChange:function(e){a(e.target.value),o(e.target.value)},sx:{my:"2rem"},fullWidth:!0,variant:"outlined"}),Object(f.jsx)(k.a,{variant:"contained",onClick:function(){var e="https://api.agify.io?name="+s,t=function(){var t=Object(g.a)(v.a.mark((function t(){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,b(r.age),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("error! "+t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();t()},children:"Guess Your Age"})]})},F=n(16),C=n(149),D=n(150),B=n(151),A=function(){var e=Object(r.useState)(),t=Object(y.a)(e,2),n=t[0],a=t[1],c=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://randomuser.me/api/");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a(n.results[0]),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c()}),[]),n?Object(f.jsxs)(C.a,{sx:{maxWidth:345,m:1},children:[Object(f.jsx)(D.a,{component:"img",height:"140",image:n.picture.large,alt:n.name.first}),Object(f.jsxs)(B.a,{children:[Object(f.jsxs)(x.a,{gutterBottom:!0,variant:"h5",component:"div",children:[n.name.first," ",n.name.last]}),Object(f.jsx)(x.a,{variant:"body2",color:"text.secondary",children:Object(f.jsx)(b.a,{underline:"hover",children:n.email})})]})]}):"No users found"},M=Math.floor(4*Math.random())+1,I=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(j.a,{sx:{display:"flex",flexDirection:{xs:"column",md:"column"},border:"1px solid #ccc",borderRadius:"5px",m:1,p:1,width:"100%"},children:[Object(f.jsx)(x.a,{variant:"h2",sx:{pb:1},children:"Our Team"}),Object(f.jsx)(j.a,{sx:{display:"flex",flexDirection:{xs:"row",md:"row"},width:"100%",justifyContent:"center"},children:Object(F.a)(Array(M)).map((function(){return Object(f.jsx)(A,{},Math.random())}))})]})})},R=function(){var e=Object(r.useState)(),t=Object(y.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://www.boredapi.com/api/activity",e.next=4,fetch("https://www.boredapi.com/api/activity");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,a(n.activity),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(f.jsx)("li",{children:n},Math.random())},W=function(){var e=Object(r.useState)(),t=Object(y.a)(e,2)[1],n=Object(r.useCallback)((function(){return t({})}),[]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(j.a,{sx:{display:"flex",flexDirection:{xs:"column",md:"column"},border:"1px solid #ccc",borderRadius:"5px",m:1,p:1,width:"100%",justifyContent:"space-between"},children:[Object(f.jsx)(x.a,{variant:"h2",children:"Don't be Bored..."}),Object(f.jsx)("ul",{children:Object(F.a)(Array(5)).map((function(){return Object(f.jsx)(R,{},Math.random())}))}),Object(f.jsx)(k.a,{variant:"contained",onClick:n,children:"Load More Activites"})]})})},z=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.a,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},pt:2},children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(S,{}),Object(f.jsx)(W,{})]})}),Object(f.jsx)(j.a,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"}},children:Object(f.jsx)(I,{})})]})},E=function(){var e=Object(r.useState)(),t=Object(y.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.joke);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(j.a,{component:"blockquote",fontSize:"1.25rem",marginBottom:"1rem",border:"1px solid #eee",borderRadius:"5px",padding:"20px",alignContent:"center",children:Object(f.jsx)(j.a,{component:"span",marginBottom:"0",fontWeight:"300",lineHeight:"1.7",fontSize:"1.25rem",fontStyle:"italic",color:"#777777",children:n})})})},P=function(){return Object(f.jsx)(j.a,{sx:{display:"flex",flexDirection:{xs:"column",md:"column"},pt:2},children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(x.a,{variant:"h2",children:"What is this all about?"}),Object(f.jsx)(E,{}),Object(f.jsx)(j.a,{component:"p",marginBottom:"0",lineHeight:"1.5",fontSize:"1rem",children:"In order to be a better developer, it's practice that makes perfect. By creating this small, simple site without a tutorial, armed with search engines and a day-to-day experience, I seek to be better at my job, and have a richer understanding."}),Object(f.jsx)(j.a,{component:"p",marginBottom:"0",lineHeight:"1.5",fontSize:"1rem",children:"Using Create React App, a router, fetching from free APIs, and heavily borrowing from the default Material UI, I am learning to build from the blank .js page."})]})})},H=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m,{}),Object(f.jsx)(l.a,{children:Object(f.jsx)(s.a,{children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",element:Object(f.jsx)(z,{})}),Object(f.jsx)(o.a,{path:"/about",element:Object(f.jsx)(P,{})})]})})})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(H,{})}),document.getElementById("root")),_()}},[[99,1,2]]]);
//# sourceMappingURL=main.6b8e1f08.chunk.js.map