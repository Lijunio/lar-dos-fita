(function(e){function t(t){for(var n,c,r=t[0],d=t[1],i=t[2],l=0,b=[];l<r.length;l++)c=r[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);u&&u(t);while(b.length)b.shift()();return s.push.apply(s,i||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,r=1;r<o.length;r++){var d=o[r];0!==a[d]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},a={app:0},s=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Lar-dos-Fita/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=t,r=r.slice();for(var i=0;i<r.length;i++)t(r[i]);var u=d;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},1100:function(e,t,o){e.exports=o.p+"img/background.d000fe94.jpg"},1514:function(e,t,o){},2920:function(e,t,o){},4293:function(e,t,o){"use strict";o("2920")},"4ee1":function(e,t,o){e.exports=o.p+"img/expulso.ca5fb8c8.jpg"},"534d":function(e,t,o){"use strict";o("b85f")},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("7a23");const a={id:"app"};function s(e,t,o,s,c,r){const d=Object(n["v"])("GlobalAudio"),i=Object(n["v"])("router-view");return Object(n["p"])(),Object(n["d"])("div",a,[Object(n["g"])(d,{ref:"globalAudio"},null,512),Object(n["g"])(i,{playAudio:r.playAudio},null,8,["playAudio"])])}const c=e=>(Object(n["s"])("data-v-b10d5106"),e=e(),Object(n["q"])(),e),r={ref:"audioPlayer",autoplay:"",loop:""},d=c(()=>Object(n["e"])("source",{src:"/fita.mp3",type:"audio/mp3"},null,-1));function i(e,t,o,a,s,c){return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["e"])("audio",r,[d,Object(n["f"])(" Your browser does not support the audio element. ")],512)])}var u={name:"GlobalAudio",methods:{playAudio(){this.$refs.audioPlayer.play().then(()=>{console.log("Audio is playing")}).catch(e=>{console.error("Error playing audio:",e)})}},mounted(){console.log("GlobalAudio component mounted")}},l=(o("4293"),o("6b0d")),b=o.n(l);const m=b()(u,[["render",i],["__scopeId","data-v-b10d5106"]]);var p=m,y={name:"App",components:{GlobalAudio:p},methods:{playAudio(){this.$refs.globalAudio.playAudio()}},mounted(){console.log("App component mounted")}};const h=b()(y,[["render",s]]);var g=h,O=o("6605");const j=e=>(Object(n["s"])("data-v-c9b6e4fe"),e=e(),Object(n["q"])(),e),v={class:"container"},f=j(()=>Object(n["e"])("h1",null,[Object(n["f"])("Bem Vindo"),Object(n["e"])("br"),Object(n["f"])("Ao Lar dos Fita")],-1)),k={key:0},w={key:1,class:"buttons"},I=["disabled"],C=["disabled"],P=["disabled"],x={key:2},S={key:3,class:"overlay"},D=j(()=>Object(n["e"])("p",null,"E agora, você teve 10 segundos para se purificar, já está com boas energias?",-1)),A={class:"overlay-buttons"};function q(e,t,o,a,s,c){return Object(n["p"])(),Object(n["d"])("div",v,[f,s.showOverlay?Object(n["c"])("",!0):(Object(n["p"])(),Object(n["d"])("p",k," Você trouxe boas energias para o Lar dos Fita 🧿? ")),s.showOverlay?Object(n["c"])("",!0):(Object(n["p"])(),Object(n["d"])("div",w,[Object(n["e"])("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=e=>c.handleChoice("yes")),disabled:s.isDisabled}," Sim ",8,I),Object(n["e"])("button",{class:"btn btn-danger",onClick:t[1]||(t[1]=e=>c.handleChoice("no")),disabled:s.isDisabled}," Não ",8,C),Object(n["e"])("button",{class:"btn btn-warning",onClick:t[2]||(t[2]=e=>c.handleChoice("stillRemoving")),disabled:s.isDisabled}," Ainda não, mas vou fazer uma reza/oração agora. ",8,P)])),s.showTimer?(Object(n["p"])(),Object(n["d"])("div",x,[Object(n["e"])("p",null,[Object(n["f"])("Você tem "),Object(n["e"])("strong",null,Object(n["y"])(s.timer),1),Object(n["f"])(" para fazer sua reza/oração para papai do céu abençoar todos os integrantes do Lar dos Fita")])])):Object(n["c"])("",!0),s.showOverlay?(Object(n["p"])(),Object(n["d"])("div",S,[D,Object(n["e"])("div",A,[Object(n["e"])("button",{class:"btn btn-primary",onClick:t[3]||(t[3]=e=>c.handleOverlayChoice("yes"))}," Sim "),Object(n["e"])("button",{class:"btn btn-danger",onClick:t[4]||(t[4]=e=>c.handleOverlayChoice("no"))}," Não ")])])):Object(n["c"])("",!0)])}o("14d9");var _=o("1100"),T=o.n(_),$={data(){return{backgroundImage:`url(${T.a})`,showTimer:!1,timer:10,interval:null,showOverlay:!1,isDisabled:!1}},mounted(){document.body.style.backgroundImage=this.backgroundImage,document.body.style.backgroundSize="cover",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundPosition="center",document.body.style.margin="0",document.body.style.padding="0",document.body.style.height="100%",document.body.style.width="100%",document.body.style.overflow="hidden"},beforeUnmount(){document.body.style.backgroundImage=""},methods:{handleChoice(e){this.isDisabled||("yes"===e?this.$router.push("/welcome"):"no"===e?this.$router.push("/expulsion"):"stillRemoving"===e&&(this.isDisabled=!0,this.showTimer=!0,this.startTimer()))},handleOverlayChoice(e){"yes"===e?this.$router.push("/welcome"):"no"===e&&this.$router.push("/expulsion")},startTimer(){this.interval=setInterval(()=>{this.timer-=1,this.timer<=0&&(clearInterval(this.interval),this.timer=10,this.showTimer=!1,this.showOverlay=!0,this.isDisabled=!1)},1e3)}}};o("8351");const z=b()($,[["render",q],["__scopeId","data-v-c9b6e4fe"]]);var M=z,B=o("f7d7"),F=o.n(B);const R=e=>(Object(n["s"])("data-v-7058ba10"),e=e(),Object(n["q"])(),e),L={class:"container"},E={class:"card"},W=R(()=>Object(n["e"])("h2",null,"Bem-vindos ao Lar dos Fita",-1)),U=R(()=>Object(n["e"])("img",{src:F.a,alt:"Bem-vindo"},null,-1)),V=R(()=>Object(n["e"])("p",null,"Você quer conectar ao Wi-Fi?",-1)),N={key:0,class:"message-card"},G=R(()=>Object(n["e"])("p",null,"SSID: Lar dos Fita 🎀",-1)),H=R(()=>Object(n["e"])("p",null,"Senha: Fita@2024",-1)),Q={key:1},Y={key:2,class:"message-card"};function J(e,t,o,a,s,c){return Object(n["p"])(),Object(n["d"])("div",L,[Object(n["e"])("div",E,[W,U,V,s.showWifiDetails?(Object(n["p"])(),Object(n["d"])("div",N,[G,H,Object(n["e"])("button",{class:"btn btn-secondary",onClick:t[0]||(t[0]=(...e)=>c.closePage&&c.closePage(...e))},"Sair")])):(Object(n["p"])(),Object(n["d"])("div",Q,[Object(n["e"])("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=(...e)=>c.promptPassword&&c.promptPassword(...e))},"Sim"),Object(n["e"])("button",{class:"btn btn-danger",onClick:t[2]||(t[2]=e=>c.showWifi(!1))},"Não")])),s.showMessage?(Object(n["p"])(),Object(n["d"])("div",Y,[Object(n["e"])("p",null,Object(n["y"])(s.message),1)])):Object(n["c"])("",!0)])])}var K={data(){return{backgroundImage:`url(${T.a})`,showWifiDetails:!1,showMessage:!1,message:""}},mounted(){document.body.style.backgroundImage=this.backgroundImage,document.body.style.backgroundSize="cover",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundPosition="center",document.body.style.margin="0",document.body.style.padding="0",document.body.style.height="100%",document.body.style.width="100%",document.body.style.overflowY="auto"},beforeUnmount(){document.body.style.backgroundImage=""},methods:{promptPassword(){const e="Tenho apenas um dígito, mas sou maior que zero. Qual número sou eu?\n\nDica:\nSou o começo de tudo, mas não sou o fim.\nSou a base de todos os números, mas sou único.";alert(e);const t=prompt("Qual é a resposta?");"1"===t.toLowerCase()?this.showWifi(!0):alert("Resposta incorreta. Tente novamente.")},showWifi(e){e?(this.showWifiDetails=!0,this.showMessage=!1):(this.message="Ou você é rico para ter um pacote de dados muito grande ou já não é a primeira vez que você vem aqui.",this.showMessage=!0)},closePage(){this.message="Por favor, feche a aba do navegador manualmente. Pois ainda não consigo controlar 100% seu celular, ainda...",this.showMessage=!0}}};o("5bb9");const X=b()(K,[["render",J],["__scopeId","data-v-7058ba10"]]);var Z=X,ee=o("4ee1"),te=o.n(ee);const oe=e=>(Object(n["s"])("data-v-445653aa"),e=e(),Object(n["q"])(),e),ne={class:"container"},ae={class:"card"},se=oe(()=>Object(n["e"])("h2",null,"Você foi...",-1)),ce=oe(()=>Object(n["e"])("img",{src:te.a,alt:"Expulso"},null,-1)),re={key:0},de=oe(()=>Object(n["e"])("p",null,"Quer tentar novamente?",-1));function ie(e,t,o,a,s,c){return Object(n["p"])(),Object(n["d"])("div",ne,[Object(n["e"])("div",ae,[se,ce,s.showButtons?(Object(n["p"])(),Object(n["d"])("div",re,[de,Object(n["e"])("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=e=>c.retry(!0))},"Sim"),Object(n["e"])("button",{class:"btn btn-danger",onClick:t[1]||(t[1]=e=>c.retry(!1))},"Não")])):Object(n["c"])("",!0)])])}var ue={data(){return{backgroundImage:`url(${T.a})`,showButtons:!0,showMessage:!1,message:""}},mounted(){document.body.style.backgroundImage=this.backgroundImage,document.body.style.backgroundSize="cover",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundPosition="center",document.body.style.margin="0",document.body.style.padding="0",document.body.style.height="100%",document.body.style.width="100%",document.body.style.overflowY="auto"},beforeUnmount(){document.body.style.backgroundImage=""},methods:{retry(e){e?this.$router.push("/home"):this.closePage()},closePage(){this.showButtons=!1,setTimeout(()=>{window.close()},3e3)}}};o("534d");const le=b()(ue,[["render",ie],["__scopeId","data-v-445653aa"]]);var be=le;const me=e=>(Object(n["s"])("data-v-13889a9c"),e=e(),Object(n["q"])(),e),pe={class:"container"},ye=me(()=>Object(n["e"])("h1",null,"Você foi convidado para o Lar dos Fita?",-1)),he={class:"buttons"};function ge(e,t,o,a,s,c){return Object(n["p"])(),Object(n["d"])("div",pe,[ye,Object(n["e"])("div",he,[Object(n["e"])("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=e=>c.handleInvitation("yes"))}," Sim "),Object(n["e"])("button",{class:"btn btn-danger",onClick:t[1]||(t[1]=e=>c.handleInvitation("no"))}," Não ")])])}var Oe={props:{playAudio:{type:Function,required:!0}},data(){return{backgroundImage:`url(${T.a})`}},mounted(){document.body.style.backgroundImage=this.backgroundImage,document.body.style.backgroundSize="cover",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundPosition="center",document.body.style.margin="0",document.body.style.padding="0",document.body.style.height="100%",document.body.style.width="100%",document.body.style.overflow="hidden"},beforeUnmount(){document.body.style.backgroundImage=""},methods:{handleInvitation(e){this.playAudio(),"yes"===e?this.$router.push("/home"):"no"===e&&this.$router.push("/not-invited")}}};o("786b");const je=b()(Oe,[["render",ge],["__scopeId","data-v-13889a9c"]]);var ve=je,fe=o("65ed"),ke=o.n(fe);const we=e=>(Object(n["s"])("data-v-4bf22f40"),e=e(),Object(n["q"])(),e),Ie={class:"container"},Ce={ref:"line1",class:"main-text"},Pe={ref:"line2",class:"main-text"},xe={key:0,class:"card"},Se=we(()=>Object(n["e"])("p",null,"Porem já que você teve que subir 4 lances de escada pois temos um bode e por isso ele precisa de espaço, dito isso você poderá mandar mensagem para um dos donos da casa.",-1)),De={key:0,class:"buttons"},Ae={key:1,class:"message-overlay"},qe={class:"message-card"},_e=we(()=>Object(n["e"])("img",{src:ke.a,alt:"Imagem de desculpas",class:"message-image"},null,-1)),Te={class:"justified-message"};function $e(e,t,o,a,s,c){return Object(n["p"])(),Object(n["d"])("div",Ie,[Object(n["e"])("p",Ce,null,512),Object(n["e"])("p",Pe,null,512),s.showOptions?(Object(n["p"])(),Object(n["d"])("div",xe,[Se,s.showButtons?(Object(n["p"])(),Object(n["d"])("div",De,[Object(n["e"])("button",{class:"btn btn-pink",onClick:t[0]||(t[0]=(...e)=>c.contactDanielle&&c.contactDanielle(...e))}," Danielle "),Object(n["e"])("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=(...e)=>c.contactElias&&c.contactElias(...e))}," Elias "),Object(n["e"])("button",{class:"btn btn-danger",onClick:t[2]||(t[2]=(...e)=>c.closePage&&c.closePage(...e))}," Desisto ")])):Object(n["c"])("",!0)])):Object(n["c"])("",!0),s.showMessage?(Object(n["p"])(),Object(n["d"])("div",Ae,[Object(n["e"])("div",qe,[_e,Object(n["e"])("p",Te,Object(n["y"])(s.message),1)])])):Object(n["c"])("",!0)])}var ze={data(){return{backgroundImage:`url(${T.a})`,showOptions:!1,showButtons:!0,showMessage:!1,message:""}},mounted(){document.body.style.backgroundImage=this.backgroundImage,document.body.style.backgroundSize="cover",document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundPosition="center",document.body.style.margin="0",document.body.style.padding="0",document.body.style.height="100%",document.body.style.width="100%",document.body.style.overflow="hidden",this.typeText(this.$refs.line1,"Se você não foi convidado para o lar dos fita, o que veio fazer aqui?",()=>{this.typeText(this.$refs.line2,"Só pode entrar se for convidado.",()=>{setTimeout(()=>{this.showOptions=!0},3e3)})})},methods:{typeText(e,t,o){let n=0;const a=setInterval(()=>{n<t.length?(e.innerHTML+=t[n],n++):(clearInterval(a),o&&o())},100)},contactDanielle(){const e=encodeURIComponent("Dani, pelo amor de Deus, deixa eu entrar na sua casa!!!!!");window.location.href="https://wa.me/5531997077639?text="+e},contactElias(){const e=encodeURIComponent("Elijunio você é o ser mais lindo, mais top, mais perfeito que existe, poderia me convidar para sua mansão? Pelo amor de Deus!!");window.location.href="https://wa.me/5531973112693?text="+e},closePage(){this.showButtons=!1,this.showMessage=!0,this.message="Repense suas atitudes, vá ao BH que é próximo daqui. Compre cerveja e carnes como forma de desculpas. Você estará fazendo duas coisas boas, ajudando o Cruzeiro e trazendo cerveja",setTimeout(()=>{alert("Se você desiste tão fácil assim realmente não é bem vindo kkkkkkk"),this.$router.push("/")},15e3)}},beforeUnmount(){document.body.style.backgroundImage=""}};o("6838");const Me=b()(ze,[["render",$e],["__scopeId","data-v-4bf22f40"]]);var Be=Me;const Fe=[{path:"/",name:"Invitation",component:ve},{path:"/home",name:"Home",component:M},{path:"/welcome",name:"WelcomeCard",component:Z},{path:"/expulsion",name:"ExpulsionCard",component:be},{path:"/not-invited",name:"NotInvited",component:Be}],Re=Object(O["a"])({history:Object(O["b"])("/Lar-dos-Fita/"),routes:Fe});var Le=Re;Object(n["b"])(g).use(Le).mount("#app")},5987:function(e,t,o){},"5bb9":function(e,t,o){"use strict";o("1514")},"65ed":function(e,t,o){e.exports=o.p+"img/churrasco.d097d35f.jpg"},6838:function(e,t,o){"use strict";o("6970")},6970:function(e,t,o){},"786b":function(e,t,o){"use strict";o("9431")},8351:function(e,t,o){"use strict";o("5987")},9431:function(e,t,o){},b85f:function(e,t,o){},f7d7:function(e,t,o){e.exports=o.p+"img/cascaDeBala.a8b2c37b.jpeg"}});
//# sourceMappingURL=app.673ce997.js.map