"use strict";(self["webpackChunkcrm_system"]=self["webpackChunkcrm_system"]||[]).push([[922],{2922:function(i,e,t){t.r(e),t.d(e,{default:function(){return J}});var a=t(3396);const n=(0,a._)("div",{class:"page-title"},[(0,a._)("h3",null,"Категории")],-1),l={key:1,class:"row"},s={key:1,class:"center"};function r(i,e,t,r,d,o){const m=(0,a.up)("Loader"),u=(0,a.up)("CategoryCreate"),c=(0,a.up)("CategoryEdit");return(0,a.wg)(),(0,a.iD)("div",null,[n,(0,a._)("section",null,[d.loading?((0,a.wg)(),(0,a.j4)(m,{key:0})):((0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(u,{onCreateCategory:o.addCategory},null,8,["onCreateCategory"]),d.categories.length?((0,a.wg)(),(0,a.j4)(c,{key:d.categories.length+d.updateCount,categories:d.categories,onCategoryUpdate:o.categoryUpdate},null,8,["categories","onCategoryUpdate"])):((0,a.wg)(),(0,a.iD)("div",s,"Категорий пока нет, создайте их!"))]))])])}t(7658);var d=t(9242),o=t(7139);const m={class:"col s12 m6"},u=(0,a._)("div",{class:"page-subtitle"},[(0,a._)("h4",null,"Создать")],-1),c={class:"input-field"},v=(0,a._)("label",{for:"name"},"Название",-1),h={key:0,class:"helper-text invalid"},$={class:"input-field"},g=(0,a._)("label",{for:"limit"},"Лимит",-1),p={key:0,class:"helper-text invalid"},y={key:1,class:"helper-text invalid"},C=(0,a._)("button",{class:"btn waves-effect waves-light",type:"submit"},[(0,a.Uk)(" Создать "),(0,a._)("i",{class:"material-icons right"},"send")],-1);function _(i,e,t,n,l,s){return(0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("div",null,[u,(0,a._)("form",{onSubmit:e[2]||(e[2]=(0,d.iM)(((...i)=>s.submitHandler&&s.submitHandler(...i)),["prevent"]))},[(0,a._)("div",c,[(0,a.wy)((0,a._)("input",{id:"name",type:"text","onUpdate:modelValue":e[0]||(e[0]=i=>l.name=i),class:(0,o.C_)({invalid:1==n.v$.name.required.$invalid&&1==n.v$.name.$dirty})},null,2),[[d.nr,l.name,void 0,{trim:!0}]]),v,1==n.v$.name.required.$invalid&&1==n.v$.name.$dirty?((0,a.wg)(),(0,a.iD)("span",h," Введите название ")):(0,a.kq)("",!0)]),(0,a._)("div",$,[(0,a.wy)((0,a._)("input",{id:"limit",type:"number","onUpdate:modelValue":e[1]||(e[1]=i=>l.limit=i),class:(0,o.C_)({invalid:1==n.v$.limit.required.$invalid&&1==n.v$.limit.$dirty||1==n.v$.limit.minValue.$invalid&&1==n.v$.limit.$dirty})},null,2),[[d.nr,l.limit,void 0,{number:!0}]]),g,1==n.v$.limit.required.$invalid&&1==n.v$.limit.$dirty?((0,a.wg)(),(0,a.iD)("span",p," Установите лимит")):1==n.v$.limit.minValue.$invalid?((0,a.wg)(),(0,a.iD)("span",y," Лимит должен быть больше 0")):(0,a.kq)("",!0)]),C],32)])])}var w=t(4219),b=t(5420),f=(t(5797),{setup(){return{v$:(0,w.Xw)()}},data(){return{name:"",limit:""}},validations(){return{name:{required:b.C1},limit:{required:b.C1,minValue:(0,b.uv)(1)}}},methods:{async submitHandler(){if(0==this.v$.name.required.$invalid&&0==this.v$.limit.required.$invalid&&0==this.v$.limit.minValue.$invalid)try{const i=await this.$store.dispatch("createCategory",{name:this.name,limit:this.limit});this.$message(`Вы создали категорию "${this.name}"✔️`),this.v$.$reset(),this.name="",this.limit="",this.v$.$reset(),this.$emit("createCategory",i)}catch(i){console.log("ошибка в создании категории CATCREATE")}else this.v$.$touch()}}}),q=t(89);const k=(0,q.Z)(f,[["render",_]]);var D=k;const V={class:"col s12 m6"},U=(0,a._)("div",{class:"page-subtitle"},[(0,a._)("h4",null,"Редактировать")],-1),x={class:"input-field"},H=["value"],E=(0,a._)("label",null,"Выберите категорию",-1),A={class:"input-field"},T=(0,a._)("label",{for:"name"},"Название",-1),F={key:0,class:"helper-text invalid"},j={class:"input-field"},S=(0,a._)("label",{for:"limit"},"Лимит",-1),Z={key:0,class:"helper-text invalid"},R={key:1,class:"helper-text invalid"},X=(0,a._)("button",{class:"btn waves-effect waves-light",type:"submit"},[(0,a.Uk)(" Обновить "),(0,a._)("i",{class:"material-icons right"},"send")],-1);function z(i,e,t,n,l,s){return(0,a.wg)(),(0,a.iD)("div",V,[(0,a._)("div",null,[U,(0,a._)("form",{onSubmit:e[3]||(e[3]=(0,d.iM)(((...i)=>s.submitHandler&&s.submitHandler(...i)),["prevent"]))},[(0,a._)("div",x,[(0,a.wy)((0,a._)("select",{ref:"select","onUpdate:modelValue":e[0]||(e[0]=e=>i.currenCategory=e)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.categories,(i=>((0,a.wg)(),(0,a.iD)("option",{key:i.id,value:i.id},(0,o.zw)(i.name),9,H)))),128))],512),[[d.bM,i.currenCategory]]),E]),(0,a._)("div",A,[(0,a.wy)((0,a._)("input",{id:"name",type:"text","onUpdate:modelValue":e[1]||(e[1]=e=>i.name=e),class:(0,o.C_)({invalid:1==n.v$.name.required.$invalid&&1==n.v$.name.$dirty})},null,2),[[d.nr,i.name,void 0,{trim:!0}]]),T,1==n.v$.name.required.$invalid&&1==n.v$.name.$dirty?((0,a.wg)(),(0,a.iD)("span",F," Введите название ")):(0,a.kq)("",!0)]),(0,a._)("div",j,[(0,a.wy)((0,a._)("input",{id:"limit",type:"number","onUpdate:modelValue":e[2]||(e[2]=e=>i.limit=e),class:(0,o.C_)({invalid:1==n.v$.limit.required.$invalid&&1==n.v$.limit.$dirty||1==n.v$.limit.minValue.$invalid})},null,2),[[d.nr,i.limit,void 0,{number:!0}]]),S,1==n.v$.limit.required.$invalid&&1==n.v$.limit.$dirty?((0,a.wg)(),(0,a.iD)("span",Z," Установите лимит")):1==n.v$.limit.minValue.$invalid?((0,a.wg)(),(0,a.iD)("span",R," Лимит должен быть больше 0")):(0,a.kq)("",!0)]),X],32)])])}var I={setup(){return{v$:(0,w.Xw)()}},props:{categories:{type:Array,required:!0}},data:()=>({select:null,name:"",limit:" ",currenCategory:null}),validations(){return{name:{required:b.C1},limit:{required:b.C1,minValue:(0,b.uv)(1)}}},watch:{currenCategory(i){const{name:e,limit:t}=this.categories.find((e=>e.id===i));this.name=e,this.limit=t}},created(){const{id:i,name:e,limit:t}=this.categories[0];this.currenCategory=i,this.name=e,this.limit=t},methods:{async submitHandler(){if(0==this.v$.name.required.$invalid&&0==this.v$.limit.required.$invalid&&0==this.v$.limit.minValue.$invalid)try{await this.$store.dispatch("updateCategory",{name:this.name,limit:this.limit,id:this.currenCategory});const i={name:this.name,limit:this.limit,id:this.currenCategory};this.$emit("categoryUpdate",i),this.$message(` Категория"${this.name}" успешно обновлена ✔️`),this.v$.$reset()}catch(i){console.log("ошибка в редактирвании категории CATCREATE"),console.log(i)}else this.v$.$touch()}},mounted(){M.updateTextFields(),this.select=M.FormSelect.init(this.$refs.select)},destroyed(){this.select&&this.select.destroy&&this.select.destroy()}};const K=(0,q.Z)(I,[["render",z]]);var L=K,W=t(4870),Y=t(6007),B={name:"category",setup(){const i=(0,W.qj)({title:"Categories",description:"aboba"});(0,Y.u)({title:(0,a.Fl)((()=>i.title)),meta:[{name:"description",content:(0,a.Fl)((()=>i.description))}]})},components:{CategoryCreate:D,CategoryEdit:L},data(){return{categories:[],loading:!0,updateCount:0}},methods:{addCategory(i){this.categories.push(i)},categoryUpdate(i){const e=this.categories.findIndex((e=>e.id===i.id));this.categories[e].name=i.name,this.categories[e].limit=i.limit,this.updateCount++}},async mounted(){this.categories=await this.$store.dispatch("fetchCategories"),this.loading=!1}};const G=(0,q.Z)(B,[["render",r]]);var J=G}}]);
//# sourceMappingURL=922.b705297b.js.map