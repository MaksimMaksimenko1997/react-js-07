(this["webpackJsonphw-7"]=this["webpackJsonphw-7"]||[]).push([[0],{17:function(t,e,n){t.exports={wrapper:"Filter_wrapper__1GDCW",label:"Filter_label__3UNR1",input:"Filter_input__3Myp4"}},21:function(t,e,n){t.exports={section:"Container_section__2HreQ",heading:"Container_heading__1bvv3"}},32:function(t,e,n){t.exports=n(61)},60:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var a,c,r=n(0),o=n.n(r),u=n(11),l=n.n(u),i=n(5),s=n(14),b=n(1),m=n(8),f=n(3),p=n(2),d=Object(b.b)("contacts/fetchContactsRequest"),h=Object(b.b)("contacts/fetchContactsSuccess"),j=Object(b.b)("contacts/fetchContactsError"),O=Object(b.b)("contacts/addContactRequest"),v=Object(b.b)("contacts/addContactSuccess"),_=Object(b.b)("contacts/addContactError"),C=Object(b.b)("contacts/deleteContactRequest"),E=Object(b.b)("contacts/deleteContactSuccess"),g=Object(b.b)("contacts/deleteContactError"),y=Object(b.b)("contacts/changeFilter"),N=Object(b.c)([],(a={},Object(f.a)(a,h,(function(t,e){return e.payload})),Object(f.a)(a,v,(function(t,e){var n=e.payload;return[].concat(Object(s.a)(t),[n])})),Object(f.a)(a,E,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),F=Object(b.c)(!1,(c={},Object(f.a)(c,d,(function(){return!0})),Object(f.a)(c,h,(function(){return!1})),Object(f.a)(c,j,(function(){return!1})),Object(f.a)(c,O,(function(){return!0})),Object(f.a)(c,v,(function(){return!1})),Object(f.a)(c,_,(function(){return!1})),Object(f.a)(c,C,(function(){return!0})),Object(f.a)(c,E,(function(){return!1})),Object(f.a)(c,g,(function(){return!1})),c)),w=Object(b.c)("",Object(f.a)({},y,(function(t,e){return e.payload}))),k=Object(b.c)(null,{}),S=Object(p.c)({contacts:N,filter:w,loading:F,error:k}),x=Object(s.a)(Object(b.d)({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})),L=Object(b.a)({reducer:{contacts:S},middleware:x,devTools:!1}),P=n(12),I=n(13),D=n(16),M=n(15),R=n(6),A=function(t){return t.contacts.loading},q=function(t){return t.contacts.contacts},G=function(t){return t.contacts.filter},J=Object(R.a)([q,G],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),Q=n(10),T=n.n(Q);T.a.defaults.baseURL="http://localhost:4040";var U=n(7),z=n.n(U),B=function(t){Object(D.a)(n,t);var e=Object(M.a)(n);function n(){var t;Object(P.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name,a=t.props,c=a.contacts,r=a.onSubmit;if(c.some((function(t){return t.name.toLowerCase()===n.toLowerCase()})))return alert("".concat(n," Already exists")),void t.reset();r(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(I.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return o.a.createElement("form",{className:z.a.form,onSubmit:this.handleSubmit},o.a.createElement("label",{className:z.a.label,htmlFor:"name"},"Name"),o.a.createElement("input",{id:"name",type:"text",onChange:this.handleChange,className:z.a.input,name:"name",value:e,placeholder:"Name",autoComplete:"off",autoFocus:!0}),o.a.createElement("label",{className:z.a.label,htmlFor:"number"},"Number"),o.a.createElement("input",{id:"number",type:"text",onChange:this.handleChange,className:z.a.input,name:"number",value:n,placeholder:"Phone number",autoComplete:"off"}),o.a.createElement("button",{type:"submit",className:z.a.btn},"Add contact"))}}]),n}(r.Component),H=Object(i.b)((function(t){return{contacts:q(t)}}),(function(t){return{onSubmit:function(e){var n=e.name,a=e.number;return t(function(t){var e=t.name,n=t.number;return function(t){var a={name:e,number:n};t(O()),T.a.post("/contacts",a).then((function(e){var n=e.data;return t(v(n))})).catch((function(e){return t(_(e))}))}}({name:n,number:a}))}}}))(B),V=n(17),W=n.n(V),K=function(t){var e=t.filter,n=t.onChange;return o.a.createElement("div",{className:W.a.wrapper},o.a.createElement("label",{className:W.a.label},"Find by Name",o.a.createElement("input",{className:W.a.input,type:"text",value:e,onChange:n})))};K.defaultProps={filter:""};var X=Object(i.b)((function(t){return{filter:G(t)}}),(function(t){return{onChange:function(e){return t(y(e.target.value))}}}))(K),Y=n(9),Z=n.n(Y),$=Object(i.b)(null,(function(t){return{onDelete:function(e){return t((n=e,function(t){t(C()),T.a.delete("/contacts/".concat(n)).then((function(){return t(E(n))})).catch((function(e){return t(g(e))}))}));var n}}}))((function(t){var e=t.name,n=t.number,a=t.id,c=t.onDelete;return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,e," : ",n),o.a.createElement("button",{type:"button",className:Z.a.close,onClick:function(){return c(a)}},"+"))})),tt=Object(i.b)((function(t){return{contacts:J(t)}}))((function(t){var e=t.contacts;return o.a.createElement(o.a.Fragment,null,e&&o.a.createElement("ul",{className:Z.a.list},e.map((function(t){return o.a.createElement("li",{className:Z.a.item,key:t.id},o.a.createElement($,t))}))))})),et=n(21),nt=n.n(et),at=function(t){var e=t.title,n=t.children;return o.a.createElement("section",{className:nt.a.section},e&&o.a.createElement("h2",{className:nt.a.heading},e),n)};at.defaultProps={title:""};var ct=at,rt=function(t){Object(D.a)(n,t);var e=Object(M.a)(n);function n(){return Object(P.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ct,{title:"Phonebook"},o.a.createElement(H,null)),o.a.createElement(ct,{title:"Contacts"},o.a.createElement(X,null),this.props.isLoadingContacts&&o.a.createElement("h2",null," Loading contacts..."),o.a.createElement(tt,null)))}}]),n}(r.Component),ot=Object(i.b)((function(t){return{isLoadingContacts:A(t)}}),(function(t){return{fetchContacts:function(){return t((function(t){t(d()),T.a.get("/contacts").then((function(e){var n=e.data;return t(h(n))})).catch((function(e){return t(j(e))}))}))}}}))(rt);n(60);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:L},o.a.createElement(ot,null))),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"InputForm_form__3ffM5",label:"InputForm_label__1QmS7",input:"InputForm_input__Mlt_h",btn:"InputForm_btn__Vsh7g"}},9:function(t,e,n){t.exports={list:"Phonebook_list__3CIg8",item:"Phonebook_item__2yGu8",close:"Phonebook_close__s7a4s"}}},[[32,1,2]]]);
//# sourceMappingURL=main.590d8a5d.chunk.js.map