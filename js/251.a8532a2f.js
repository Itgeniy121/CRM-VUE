"use strict";(self["webpackChunkcrm_system"]=self["webpackChunkcrm_system"]||[]).push([[251],{9251:function(i,e,s){s.r(e),s.d(e,{default:function(){return U}});var a=s(3396),t=s(9242),l=s(7139);const r={class:"card-content"},n=(0,a._)("span",{class:"card-title"},"Домашняя бухгалтерия",-1),d={class:"input-field"},o=(0,a._)("label",{for:"email"},"Email",-1),m={key:0,class:"helper-text invalid"},u={key:1,class:"helper-text invalid"},c={class:"input-field"},v=(0,a._)("label",{for:"password"},"Пароль",-1),p={key:0,class:"helper-text invalid"},$={key:1,class:"helper-text invalid"},w={class:"card-action"},h=(0,a._)("div",null,[(0,a._)("button",{class:"btn waves-effect waves-light auth-submit",type:"submit"},[(0,a.Uk)(" Войти "),(0,a._)("i",{class:"material-icons right"},"send")])],-1),y={class:"center"};function g(i,e,s,g,_,f){const b=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("form",{class:"card auth-card",onSubmit:e[2]||(e[2]=(0,t.iM)(((...i)=>f.OnSubmit&&f.OnSubmit(...i)),["prevent"]))},[(0,a._)("div",r,[n,(0,a._)("div",d,[(0,a.wy)((0,a._)("input",{id:"email",type:"text","onUpdate:modelValue":e[0]||(e[0]=i=>_.email=i),class:(0,l.C_)({invalid:1==g.v$.email.required.$invalid&&1==g.v$.email.$dirty||1==g.v$.email.email.$invalid&&1==g.v$.email.$dirty})},null,2),[[t.nr,_.email,void 0,{trim:!0}]]),o,1==g.v$.email.required.$invalid&&1==g.v$.email.$dirty?((0,a.wg)(),(0,a.iD)("small",m,"Введите email")):1==g.v$.email.email.$invalid&&1==g.v$.email.$dirty?((0,a.wg)(),(0,a.iD)("small",u,"Введите корректный email")):(0,a.kq)("",!0)]),(0,a._)("div",c,[(0,a.wy)((0,a._)("input",{id:"password",type:"password","onUpdate:modelValue":e[1]||(e[1]=i=>_.password=i),class:(0,l.C_)({invalid:1==g.v$.password.required.$invalid&&1==g.v$.password.$dirty||1==g.v$.password.minLength.$invalid&&1==g.v$.password.$dirty})},null,2),[[t.nr,_.password,void 0,{trim:!0}]]),v,1==g.v$.password.required.$invalid&&1==g.v$.password.$dirty?((0,a.wg)(),(0,a.iD)("small",p,"Введите пароль")):_.password.length<=5&&1==g.v$.password.$dirty?((0,a.wg)(),(0,a.iD)("small",$,"Пароль должен содержать больше 5 символов")):(0,a.kq)("",!0)])]),(0,a._)("div",w,[h,(0,a._)("p",y,[(0,a.Uk)(" Нет аккаунта? "),(0,a.Wm)(b,{to:"/register"},{default:(0,a.w5)((()=>[(0,a.Uk)("Зарегистрироваться")])),_:1})])])],32)}s(7658);var _=s(4219),f=s(5420),b=s(6270),k=s(4870),q=s(6007),C={name:"login",setup(){const i=(0,k.qj)({title:"Login",description:"aboba"});return(0,q.u)({title:(0,a.Fl)((()=>i.title)),meta:[{name:"description",content:(0,a.Fl)((()=>i.description))}]}),{v$:(0,_.Xw)()}},data(){return{email:"",password:""}},validations(){return{email:{required:f.C1,email:f.Do},password:{required:f.C1,minLength:(0,f.Ei)(6)}}},mounted(){b.Z[this.$route.query.message]&&this.$message(b.Z[this.$route.query.message])},methods:{async OnSubmit(){if(0==this.v$.email.email.$invalid&&0==this.v$.email.required.$invalid&&0==this.v$.password.required.$invalid&&this.password.length>5){const e={email:this.email,password:this.password};try{await this.$store.dispatch("login",e),this.$router.push("/")}catch(i){console.log("error")}}else this.v$.$touch(),console.log("uncorrect information")}}},D=s(89);const x=(0,D.Z)(C,[["render",g]]);var U=x}}]);
//# sourceMappingURL=251.a8532a2f.js.map