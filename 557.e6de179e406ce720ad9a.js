(self.webpackChunkbarberttoo_v2=self.webpackChunkbarberttoo_v2||[]).push([[557],{7557:(n,t,o)=>{"use strict";o.r(t),o.d(t,{HomeModule:()=>f});var e=o(8583),i=o(4330),r=o(665),a=o(7716),c=o(7990),g=o(9047);function l(n,t){1&n&&(a.TgZ(0,"span"),a._uU(1,"Insira um e-mail v\xe1lido."),a.qZA())}function s(n,t){1&n&&(a.TgZ(0,"span"),a._uU(1,"A senha deve conter no m\xednimo 8 caract\xe9res."),a.qZA())}function m(n,t){1&n&&a._UZ(0,"app-loader")}const p=function(){return["register"]},d=[{path:"",pathMatch:"full",component:(()=>{class n{constructor(n,t){this.auth=n,this.router=t,this.loginForm=new r.cw({email:new r.NI("",[r.kI.required,r.kI.email,r.kI.maxLength(100)]),password:new r.NI("",[r.kI.required,r.kI.minLength(8)])}),this.loading=!1}ngOnInit(){}onSubmit(){this.loginForm.valid&&(this.loading=!0,this.auth.login(this.loginForm.value).subscribe({next:n=>{console.log(n),this.router.navigate(["app"]),this.loading=!1},error:n=>{console.log(n),this.loading=!1}}))}getForm(){return this.loginForm.controls}}return n.\u0275fac=function(t){return new(t||n)(a.Y36(c.e),a.Y36(i.F0))},n.\u0275cmp=a.Xpm({type:n,selectors:[["ng-component"]],decls:25,vars:7,consts:[[1,"home"],[1,"home__logo"],["src","assets/images/logo/logo.png","alt","Logo BARBERTTOO"],[3,"formGroup","ngSubmit"],[1,"label-float"],["type","text","placeholder"," ","name","email","id","email","formControlName","email"],[1,"error-msg"],[4,"ngIf"],["type","password","placeholder"," ","name","password","id","password","formControlName","password"],[1,"submit-container"],[1,"no-account"],[3,"routerLink"]],template:function(n,t){1&n&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a._UZ(2,"img",2),a.qZA(),a.TgZ(3,"form",3),a.NdJ("ngSubmit",function(){return t.onSubmit()}),a.TgZ(4,"div",4),a._UZ(5,"input",5),a.TgZ(6,"label"),a._uU(7,"E-mail:"),a.qZA(),a.TgZ(8,"div",6),a.YNc(9,l,2,0,"span",7),a.qZA(),a.qZA(),a.TgZ(10,"div",4),a._UZ(11,"input",8),a.TgZ(12,"label"),a._uU(13,"Senha:"),a.qZA(),a.TgZ(14,"div",6),a.YNc(15,s,2,0,"span",7),a.qZA(),a.qZA(),a.TgZ(16,"div",9),a.TgZ(17,"button"),a._uU(18),a.YNc(19,m,1,0,"app-loader",7),a.qZA(),a.qZA(),a.TgZ(20,"div",10),a.TgZ(21,"p"),a._uU(22," N\xe3o possui conta? "),a.TgZ(23,"a",11),a._uU(24,"Cadastre-se"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.xp6(3),a.Q6J("formGroup",t.loginForm),a.xp6(6),a.Q6J("ngIf",t.getForm().email.touched&&t.getForm().email.errors),a.xp6(6),a.Q6J("ngIf",t.getForm().password.touched&&t.getForm().password.errors),a.xp6(3),a.hij(" ",t.loading?"":"entrar"," "),a.xp6(1),a.Q6J("ngIf",t.loading),a.xp6(4),a.Q6J("routerLink",a.DdM(6,p)))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,e.O5,i.yS,g.R],styles:['@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");.home[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;height:100vh;max-width:1140px;margin:0 auto}@media (min-width: 768px){.home[_ngcontent-%COMP%]{flex-direction:row;align-items:center}}.home__logo[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin-bottom:32px}@media (min-width: 768px){.home__logo[_ngcontent-%COMP%]{max-width:600px}}.home__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 auto;height:200px}@media (min-width: 768px){.home__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:unset;width:100%;max-width:250px}}.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;padding:0 16px}@media (min-width: 768px){.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:0 32px;max-width:600px}}.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]{position:relative;height:56px;background:#c9d1d94d;border-radius:4px;margin-bottom:32px;box-shadow:1px 4px 10px #0006}.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%]{display:block;padding-left:16px;font-size:12px;color:#e54033;font-weight:200;margin-top:3px}.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:6px 16px 0;color:#fff;border:0;width:100%;outline:none;min-width:180px;font-size:16px;transition:all .3s ease-out;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;-webkit-appearance:none;border-radius:0;height:100%;background:#0000}.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-bottom:2px solid #c6932b}.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#0000}.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding-left:16px;pointer-events:none;position:absolute;top:0;left:0;margin-top:18px;transition:all .3s ease-out;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;color:#fff}.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], .home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{font-size:12px;margin-top:6px;color:#c6932b}.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-container[_ngcontent-%COMP%]{width:100%}.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#c6932b;color:#fff;font-weight:700;text-align:center;width:100%;height:48px;border-radius:4px;text-transform:uppercase}.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .no-account[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:8px}.home[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .no-account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#c6932b;font-weight:700}']}),n})()}];let u=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[i.Bz.forChild(d)],i.Bz]}),n})();var h=o(4212),_=o(4466);let f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[e.ez,u,h.uH,r.UX,_.m]]}),n})()}}]);