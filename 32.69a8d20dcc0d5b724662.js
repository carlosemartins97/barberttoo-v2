(self.webpackChunkbarberttoo_v2=self.webpackChunkbarberttoo_v2||[]).push([[32],{2032:(n,o,i)=>{"use strict";i.r(o),i.d(o,{FuncionariosModule:()=>b});var t=i(8583),e=i(4330),a=i(7716),c=i(1534),r=i(9976),s=i(4212),d=i(8832);const l=function(n){return{open:n}};let g=(()=>{class n{constructor(){this.isCollapsed=!0,this.faAngleDown=r.gc2}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-card-funcionarios"]],inputs:{funcionario:"funcionario"},decls:16,vars:10,consts:[[1,"card-funcionarios"],["type","button","aria-controls","collapseExample",1,"card-funcionarios__collapse",3,"click"],[1,"card-funcionarios__header"],[1,"card-funcionarios__details"],[3,"icon","fixedWidth","ngClass"],[1,"card-funcionarios__body",3,"ngbCollapse","ngbCollapseChange"],["collapse","ngbCollapse"]],template:function(n,o){if(1&n){const n=a.EpF();a.TgZ(0,"div",0),a.TgZ(1,"button",1),a.NdJ("click",function(){return a.CHM(n),a.MAs(8).toggle()}),a.TgZ(2,"div",2),a.TgZ(3,"h2"),a._uU(4),a.qZA(),a.TgZ(5,"div",3),a._UZ(6,"fa-icon",4),a.qZA(),a.qZA(),a.qZA(),a.TgZ(7,"div",5,6),a.NdJ("ngbCollapseChange",function(n){return o.isCollapsed=n}),a.TgZ(9,"div"),a.TgZ(10,"h3"),a._uU(11,"Contato"),a.qZA(),a.TgZ(12,"p"),a._uU(13),a.qZA(),a.TgZ(14,"p"),a._uU(15),a.qZA(),a.qZA(),a.qZA(),a.qZA()}2&n&&(a.xp6(1),a.uIk("aria-expanded",!o.isCollapsed),a.xp6(3),a.Oqu(o.funcionario.nm_Funcionario),a.xp6(2),a.Q6J("icon",o.faAngleDown)("fixedWidth",!0)("ngClass",a.VKq(8,l,!o.isCollapsed)),a.xp6(1),a.Q6J("ngbCollapse",o.isCollapsed),a.xp6(6),a.Oqu(o.funcionario.ds_Email),a.xp6(2),a.Oqu(o.funcionario.cd_Celular))},directives:[s.BN,t.mk,d._D],styles:['@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");.card-funcionarios[_ngcontent-%COMP%]{width:100%;border-radius:8px;border:2px solid #c6932b;padding:16px;background:#fff}.card-funcionarios__collapse[_ngcontent-%COMP%]{width:100%;border:none;background:none}.card-funcionarios__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:row;align-items:center}.card-funcionarios__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;color:#c6932b;font-weight:700;margin:0 0 8px}@media (min-width: 1140px){.card-funcionarios__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;margin-bottom:0}.card-funcionarios__details[_ngcontent-%COMP%]{display:block;width:auto}}.card-funcionarios__details[_ngcontent-%COMP%]     fa-icon>svg{transition:all .3s}.card-funcionarios__details[_ngcontent-%COMP%]     fa-icon.open>svg{transform:rotate(180deg)}.card-funcionarios__body[_ngcontent-%COMP%]{color:#0d1117;padding-top:8px}.card-funcionarios__body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .card-funcionarios__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:18px;margin:0}']}),n})();var u=i(9047);function p(n,o){1&n&&(a.TgZ(0,"p"),a._uU(1,"Lista de todos os funcion\xe1rios presentes do estabelecimento. Qualquer d\xfavida, sinta-se a vontade para entrar em contato diretamente com eles."),a.qZA())}function f(n,o){1&n&&(a.TgZ(0,"p"),a._uU(1,"Infelizmente n\xe3o existe nenhum funcion\xe1rio cadastrado no momento. Por favor, volte mais tarde."),a.qZA())}function _(n,o){1&n&&a._UZ(0,"app-card-funcionarios",7),2&n&&a.Q6J("funcionario",o.$implicit)}function h(n,o){1&n&&(a.TgZ(0,"div",8),a._UZ(1,"app-loader"),a.qZA())}const m=[{path:"",component:(()=>{class n{constructor(n){this.funcionariosService=n,this.funcionarios=[],this.loading=!1}ngOnInit(){this.getFuncionarios()}getFuncionarios(){this.loading=!0,this.funcionariosService.getFuncionarios().then(n=>{this.funcionarios=n,this.loading=!1,console.log(n)}).catch(n=>{console.log(n),this.loading=!1})}}return n.\u0275fac=function(o){return new(o||n)(a.Y36(c.a))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-funcionarios"]],decls:11,vars:4,consts:[[1,"funcionarios"],[1,"funcionarios__header"],[4,"ngIf"],[1,"funcionarios__body"],[1,"grid"],[3,"funcionario",4,"ngFor","ngForOf"],["class","loader",4,"ngIf"],[3,"funcionario"],[1,"loader"]],template:function(n,o){1&n&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div"),a.TgZ(3,"h1"),a._uU(4,"Funcion\xe1rios"),a.qZA(),a.YNc(5,p,2,0,"p",2),a.YNc(6,f,2,0,"p",2),a.qZA(),a.qZA(),a.TgZ(7,"div",3),a.TgZ(8,"div",4),a.YNc(9,_,1,1,"app-card-funcionarios",5),a.qZA(),a.YNc(10,h,2,0,"div",6),a.qZA(),a.qZA()),2&n&&(a.xp6(5),a.Q6J("ngIf",o.funcionarios.length>0&&!o.loading),a.xp6(1),a.Q6J("ngIf",0===o.funcionarios.length&&!o.loading),a.xp6(3),a.Q6J("ngForOf",o.funcionarios),a.xp6(1),a.Q6J("ngIf",o.loading))},directives:[t.O5,t.sg,g,u.R],styles:['@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");.funcionarios[_ngcontent-%COMP%]{padding:16px}.funcionarios__header[_ngcontent-%COMP%]{margin-bottom:32px;display:flex;justify-content:space-between;flex-direction:column}@media (min-width: 1140px){.funcionarios__header[_ngcontent-%COMP%]{align-items:center;flex-direction:row}}.funcionarios__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#c6932b}.funcionarios__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.funcionarios__body[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-gap:32px;gap:32px}@media (min-width: 1140px){.funcionarios__body[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}.funcionarios__body[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{margin-top:32px}']}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[e.Bz.forChild(m)],e.Bz]}),n})();var Z=i(665),x=i(4466),O=i(129);let b=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[t.ez,C,Z.UX,s.uH,x.m,d.IJ,O.yI.forChild()]]}),n})()}}]);