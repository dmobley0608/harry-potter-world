(this["webpackJsonpharry-potter-world"]=this["webpackJsonpharry-potter-world"]||[]).push([[0],{298:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(73),i=a.n(s),l=(a(79),a(7)),o=a(8),c=a(10),m=a(9),u=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).getWeather=function(){fetch("https://api.weatherapi.com/v1/current.json?key=914d4e0e50314ecf960105744202708&q=30507",{method:"post"}).then((function(e){return e.json()})).then((function(t){e.setState({temp:Math.round(t.current.temp_f),weathericon:t.current.condition.icon})}))},e.state={temp:null,weathericon:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getWeather()}},{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("img",{alt:"",src:this.state.weathericon}),r.a.createElement("p",null,this.state.temp,"\xb0 F"))}}]),a}(r.a.Component),d=(a(80),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"weather"},r.a.createElement(u,null)),r.a.createElement("div",{className:"clock"},r.a.createElement("h4",null))),"register"===this.props.route?r.a.createElement("nav",null,r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"10em"}},r.a.createElement("h4",{onClick:function(){e.props.onRouteChange("signIn")},className:"signInLink"},"Sign In"))):"home"===this.props.route?r.a.createElement("nav",null,r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"6em"}},r.a.createElement("h4",{onClick:function(){e.props.onRouteChange("signIn")},className:"signInLink"},"Sign Out"))):r.a.createElement("div",null))}}]),a}(r.a.Component)),h=(a(81),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"wallpaper"})}}]),a}(r.a.Component)),p=(a(82),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"center"},r.a.createElement("p",{className:"dmc"},"\xa9 DMC Solutions 2020 All Rights Reserved")))}}]),a}(r.a.Component)),g=(a(83),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("https://guarded-temple-33031.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.id&&(n.props.loadUser(e),n.props.onRouteChange("home")),"user not found"===e?n.setState({loginError:"User not found. Please Register."}):"wrong credentials"===e&&n.setState({loginError:"Incorrect Password"})}))},n.state={signInEmail:"",signInPassword:"",loginError:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return r.a.createElement("article",{className:" card"},r.a.createElement("div",{className:"signInPhoto"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1598943421302-521e169bc602?ixlib=rb-1.2.1",style:{width:"10em",borderRadius:"1em"},alt:""})),r.a.createElement("form",null,r.a.createElement("div",{style:{padding:".5rem"}},r.a.createElement("div",{style:{display:"table",width:"100%",marginTop:".25rem"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("h4",{style:{paddingRight:".5em"}},"Email: "),r.a.createElement("input",{onChange:this.onEmailChange,autoComplete:"off",type:"text",style:{height:"1em",padding:".25rem",borderRadius:".25rem"}})),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("h4",{style:{paddingRight:".5em"}},"Password: "),r.a.createElement("input",{onChange:this.onPasswordChange,autoComplete:"off",type:"password",style:{height:"1em",padding:".25rem",borderRadius:".25rem"}})),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("p",{onClick:this.onSubmitSignIn,value:"Sign In",className:"button"},"Sign In")),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("p",{onClick:function(){return e("register")},className:"button"},"Register")),r.a.createElement("div",{style:{marginBottom:"0",color:"whitesmoke"}},r.a.createElement("p",null,this.state.loginError))))))}}]),a}(r.a.Component)),f=(a(84),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onFirstNameChange=function(e){n.setState({firstName:e.target.value})},n.onLastNameChange=function(e){n.setState({lastName:e.target.value}),console.log(n.state.lastName)},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onPassword2Change=function(e){n.setState({password2:e.target.value})},n.onSubmitSignIn=function(){n.state.password===n.state.password2?fetch("https://guarded-temple-33031.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,firstName:n.state.firstName,lastName:n.state.lastName})}).then((function(e){return e.json()})).then((function(e){e.id&&(console.log(n.state.password+"="+n.state.password2),n.props.loadUser(e),n.props.onRouteChange("home"))})):n.setState({passmessage:"Passwords not the same"})},n.state={email:"",password:"",password2:"",firstName:"",lastName:"",passmessage:""},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("article",{className:" register"},r.a.createElement("div",{className:"signInPhoto"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-1.2.1",style:{maxWidth:"7em",borderRadius:"1em"},alt:""})),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",paddingLeft:"7em"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"}},r.a.createElement("div",{style:{paddingRight:"1em",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("h4",{style:{paddingRight:".5em"}},"First Name: "),r.a.createElement("input",{onChange:this.onFirstNameChange,type:"text",style:{height:"1em",padding:".25rem",borderRadius:".25rem"}})),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("h4",{style:{paddingRight:".5em"}},"Last Name: "),r.a.createElement("input",{onChange:this.onLastNameChange,type:"text",style:{height:"1em",padding:".25rem",borderRadius:".25rem"}}))),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",marginLeft:"2em",marginRight:""}},r.a.createElement("h4",{style:{paddingRight:".5em"}},"Email: "),r.a.createElement("input",{onChange:this.onEmailChange,type:"text",style:{height:"1em",padding:".25rem",borderRadius:".25rem"}})),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingRight:"2em"}},r.a.createElement("h4",{style:{paddingRight:".5em"}},"Password: "),r.a.createElement("input",{onChange:this.onPasswordChange,type:"text",style:{height:"1em",padding:".25rem",borderRadius:".25rem"}})),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("h4",{style:{paddingRight:".5em"}},"Confirm Password: "),r.a.createElement("input",{onChange:this.onPassword2Change,type:"text",style:{height:"1em",padding:".25rem",borderRadius:".25rem"}})))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("input",{className:"button",onClick:this.onSubmitSignIn,type:"submit",value:"Create User"})),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("p",null,this.state.passmessage)))}}]),a}(r.a.Component)),E=(a(85),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=(new Date).getHours();return r.a.createElement("div",null,e<=11?r.a.createElement("div",{className:"welcome"},r.a.createElement("p",null,"Good Morning, ",this.props.user.firstName,"!")):12===e?r.a.createElement("div",{className:"welcome"},r.a.createElement("p",null,"Lunch Time, ",this.props.user.firstName,"!")):e>12&&e<17?r.a.createElement("div",{className:"welcome"},r.a.createElement("p",null,"Good Afternoon, ",this.props.user.firstName,"!")):e>=17&&e<20?r.a.createElement("div",{className:"welcome"},r.a.createElement("p",null,"Good Evening, ",this.props.user.firstName,"!")):e>=21?r.a.createElement("div",{className:"welcome"},r.a.createElement("p",null,"Bed Time, ",this.props.user.firstName,"!")):r.a.createElement("div",{className:"welcome"},r.a.createElement("p",null,"Welcome, ",this.props.user.firstName,"!")))}}]),a}(r.a.Component)),y=(a(41),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).getQuote=function(){fetch("http://10.0.1.140:3001/potter").then((function(e){return e.json()})).then((function(t){e.setState({imgURL:t.imgURL,author:t.name,quote:t.quote})}))},e.state={imgURL:"",author:"",quote:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getQuote()}},{key:"render",value:function(){var e=this,t=this.state,a=t.imgURL,n=t.author,s=t.quote;return r.a.createElement("article",{className:" quote-card quote-card-animation",onAnimationIteration:function(){e.getQuote()},style:{height:"350px"}},r.a.createElement("div",{className:"signInPhoto"},r.a.createElement("img",{src:a,style:{maxWidth:"80px",borderRadius:"1em"},alt:""})),r.a.createElement("div",{style:{padding:".5rem"}},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h4",null,"~",n,"~ "),r.a.createElement("div",null,r.a.createElement("h4",null,'"',s,'"'))))))}}]),a}(r.a.Component)),v=a(39),C=a.n(v),b=(a(298),{route:"signIn",user:{id:"",firstName:"",lastName:"",email:"",joined:Date()}}),j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,firstName:t.firstname,lastName:t.lastname,email:t.email,joined:t.joined}})},e.onRouteChange=function(t){"signOut"===t?e.setState(b):e.setState({route:t})},e.state=b,e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.user;return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(d,{route:this.state.route,onRouteChange:this.onRouteChange}),r.a.createElement(p,null),"home"===this.state.route?r.a.createElement("div",null,r.a.createElement(E,{user:e}),r.a.createElement(y,null)):"signIn"===this.state.route?r.a.createElement("div",null,r.a.createElement(g,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}),r.a.createElement(C.a,{className:"particles"})):r.a.createElement("div",null,r.a.createElement(f,{onRouteChange:this.onRouteChange,loadUser:this.loadUser}),r.a.createElement(C.a,{className:"particles"})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,a){},74:function(e,t,a){e.exports=a(299)},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.bfea39ba.chunk.js.map