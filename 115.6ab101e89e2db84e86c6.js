(self.webpackChunkbarberttoo_v2=self.webpackChunkbarberttoo_v2||[]).push([[115],{9115:(n,e,t)=>{"use strict";t.r(e),t.d(e,{DashboardModule:()=>k});var o=t(8583),a=t(665),i=t(4212),r=t(4466),c=t(8832),d=t(129),g=t(4330),l=t(7716),s=t(1595),p=t(2577),m=t(9976),_=t(5271),f=t(689),u=t(3141),h=t(9047);function C(n,e){if(1&n&&l._UZ(0,"fa-icon",27),2&n){const n=l.oxw();l.Q6J("icon",n.faCheck)("fixedWidth",!0)}}function O(n,e){1&n&&l._UZ(0,"app-loader")}function b(n,e){1&n&&(l.TgZ(0,"span"),l._uU(1,"Insira um nome completo"),l.qZA())}function Z(n,e){if(1&n&&(l.TgZ(0,"div",15),l._UZ(1,"input",28),l.TgZ(2,"label",29),l._uU(3,"Novo pre\xe7o:"),l.qZA(),l.TgZ(4,"div",24),l.YNc(5,b,2,0,"span",4),l.qZA(),l.qZA()),2&n){const n=l.oxw();l.xp6(5),l.Q6J("ngIf",n.getForm().price.touched&&n.getForm().price.errors||n.getForm().price.errors&&n.submitted)}}function P(n,e){1&n&&(l.TgZ(0,"span"),l._uU(1,"Escolha a forma de pagamento"),l.qZA())}function x(n,e){if(1&n&&(l.TgZ(0,"strong"),l._uU(1),l.qZA()),2&n){const n=l.oxw();l.xp6(1),l.hij(" R$ ",n.getForm().price.value.toFixed(2),"")}}function M(n,e){if(1&n&&(l.TgZ(0,"strong"),l._uU(1),l.qZA()),2&n){const n=l.oxw();l.xp6(1),l.hij("R$ ",n.agendamento.servico.vl_preco.toFixed(2),"")}}let v=(()=>{class n{constructor(n,e,t){this.modalService=n,this.agendamentoService=e,this.historicoService=t,this.deleteClicked=new l.vpe,this.submitted=!1,this.loading=!1,this.faCheck=m.LEp,this.form=new a.cw({ds_Pagamento:new a.NI("",[a.kI.required]),newPrice:new a.NI(""),price:new a.NI("")})}ngOnInit(){var n;this.dataAgendamento=(0,f.tw)(this.agendamento.dt_Agendamento),null===(n=this.form.get("price"))||void 0===n||n.setValue(this.agendamento.servico.vl_preco)}openAlertModal(){this.modal.open()}getForm(){return this.form.controls}onDelete(){var n,e,t;if(this.submitted=!0,this.form.valid){this.modalService.dismissAll(),this.loading=!0;const o=this.agendamento.dt_Agendamento.indexOf("T"),a={dt_Realizado:`${this.agendamento.dt_Agendamento.substring(0,o)} ${this.agendamento.dt_Agendamento.substring(o+1)}`,vl_Pago:(null===(n=this.form.get("newPrice"))||void 0===n?void 0:n.value)?null===(e=this.form.get("price"))||void 0===e?void 0:e.value:this.agendamento.servico.vl_preco,ds_Pagamento:null===(t=this.form.get("ds_Pagamento"))||void 0===t?void 0:t.value,cliente:this.agendamento.cliente.id,funcionario:this.agendamento.funcionario.id,servico:this.agendamento.servico.id};this.historicoService.createHistoric(a).then(n=>{this.agendamentoService.deleteAgendamento(this.agendamento.id).then(n=>{this.deleteClicked.emit("refresh"),this.loading=!1}).catch(n=>{console.log(n),this.loading=!1})}).catch(n=>{alert("Erro ao concluir agendamento."),console.log(n),this.loading=!1})}}}return n.\u0275fac=function(e){return new(e||n)(l.Y36(c.FF),l.Y36(s.M),l.Y36(u.l))},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-card-agendamento-dashboard"]],viewQuery:function(n,e){if(1&n&&l.Gf(_.F,5),2&n){let n;l.iGM(n=l.CRH())&&(e.modal=n.first)}},inputs:{agendamento:"agendamento"},outputs:{deleteClicked:"deleteClicked"},decls:71,vars:22,consts:[[1,"cards"],[1,"cards__header"],[1,"delete",3,"click"],[3,"icon","fixedWidth",4,"ngIf"],[4,"ngIf"],[1,"cards__body"],[1,"cards__content"],[1,"cards__date"],[1,"cards__info"],["title","Aten\xe7\xe3o!","color","amarelo","actionText","Concluir",3,"actionClicked"],[1,"form",3,"formGroup","ngSubmit"],[1,"checkbox"],["type","checkbox","name","newPrice","id","newPrice","formControlName","newPrice"],["for","newPrice"],["class","label-float",4,"ngIf"],[1,"label-float"],["type","text","placeholder"," ","name","pagamento","id","pagamento","formControlName","ds_Pagamento"],["value","CREDITO"],["value","DEBITO"],["value","DINHEIRO"],["value","CHEQUE"],["value","BOLETO"],["value","VOUCHER"],["value","PIX"],[1,"error-msg"],[4,"ngIf","ngIfElse"],["elseBlock",""],[3,"icon","fixedWidth"],["type","number","placeholder"," ","name","price","id","price","formControlName","price"],["for","price"]],template:function(n,e){if(1&n&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"h2"),l._uU(3),l.qZA(),l.TgZ(4,"button",2),l.NdJ("click",function(){return e.openAlertModal()}),l.YNc(5,C,1,2,"fa-icon",3),l.YNc(6,O,1,0,"app-loader",4),l.qZA(),l.qZA(),l.TgZ(7,"div",5),l.TgZ(8,"div",6),l.TgZ(9,"span",7),l._uU(10),l.qZA(),l.TgZ(11,"div",8),l.TgZ(12,"p"),l._uU(13,"Hor\xe1rio: "),l.TgZ(14,"strong"),l._uU(15),l.ALo(16,"date"),l.qZA(),l.qZA(),l.TgZ(17,"p"),l._uU(18,"Cliente: "),l.TgZ(19,"strong"),l._uU(20),l.qZA(),l.qZA(),l.TgZ(21,"p"),l._uU(22,"Contato: "),l.TgZ(23,"strong"),l._uU(24),l.qZA(),l._uU(25," ou "),l.TgZ(26,"strong"),l._uU(27),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(28,"app-alert-modal",9),l.NdJ("actionClicked",function(){return e.onDelete()}),l.TgZ(29,"p"),l._uU(30," Voc\xea est\xe1 prestes a dar como conclu\xeddo o agendamento da data "),l.TgZ(31,"strong"),l._uU(32),l.ALo(33,"date"),l.qZA(),l._uU(34," para o servi\xe7o de "),l.TgZ(35,"strong"),l._uU(36),l.qZA(),l._uU(37," do cliente "),l.TgZ(38,"strong"),l._uU(39),l.qZA(),l.qZA(),l.TgZ(40,"form",10),l.NdJ("ngSubmit",function(){return e.onDelete()}),l.TgZ(41,"div",11),l._UZ(42,"input",12),l.TgZ(43,"label",13),l._uU(44,"Atribuir novo pre\xe7o?"),l.qZA(),l.qZA(),l.YNc(45,Z,6,1,"div",14),l.TgZ(46,"div",15),l.TgZ(47,"select",16),l.TgZ(48,"option",17),l._uU(49,"Cr\xe9dito"),l.qZA(),l.TgZ(50,"option",18),l._uU(51,"D\xe9bito"),l.qZA(),l.TgZ(52,"option",19),l._uU(53,"Dinheiro"),l.qZA(),l.TgZ(54,"option",20),l._uU(55,"Cheque"),l.qZA(),l.TgZ(56,"option",21),l._uU(57,"Boleto"),l.qZA(),l.TgZ(58,"option",22),l._uU(59,"Voucher"),l.qZA(),l.TgZ(60,"option",23),l._uU(61,"Pix"),l.qZA(),l.qZA(),l.TgZ(62,"label"),l._uU(63,"Forma de pagamento:"),l.qZA(),l.TgZ(64,"div",24),l.YNc(65,P,2,0,"span",4),l.qZA(),l.qZA(),l.TgZ(66,"p"),l._uU(67," Total: "),l.YNc(68,x,2,1,"strong",25),l.YNc(69,M,2,1,"ng-template",null,26,l.W1O),l.qZA(),l.qZA(),l.qZA()),2&n){const n=l.MAs(70);l.xp6(3),l.Oqu(e.agendamento.servico.nm_servico),l.xp6(2),l.Q6J("ngIf",!e.loading),l.xp6(1),l.Q6J("ngIf",e.loading),l.xp6(4),l.Oqu(e.dataAgendamento),l.xp6(5),l.Oqu(l.xi3(16,16,e.agendamento.dt_Agendamento,"HH:mm")),l.xp6(5),l.Oqu(e.agendamento.cliente.nm_Cliente),l.xp6(4),l.Oqu(e.agendamento.cliente.cd_Celular),l.xp6(3),l.Oqu(e.agendamento.cliente.ds_Email),l.xp6(5),l.Oqu(l.xi3(33,19,e.agendamento.dt_Agendamento,"dd/MM/yy")),l.xp6(4),l.Oqu(e.agendamento.servico.nm_servico),l.xp6(3),l.Oqu(e.agendamento.cliente.nm_Cliente),l.xp6(1),l.Q6J("formGroup",e.form),l.xp6(5),l.Q6J("ngIf",e.getForm().newPrice.value),l.xp6(20),l.Q6J("ngIf",e.getForm().ds_Pagamento.touched&&e.getForm().ds_Pagamento.errors||e.getForm().ds_Pagamento.errors&&e.submitted),l.xp6(3),l.Q6J("ngIf",e.getForm().newPrice.value)("ngIfElse",n)}},directives:[o.O5,_.F,a._Y,a.JL,a.sg,a.Wl,a.JJ,a.u,a.EJ,a.YN,a.Kr,i.BN,h.R,a.wV,a.Fj],pipes:[o.uU],styles:['@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");.cards[_ngcontent-%COMP%]{background:#fff;border-radius:8px;color:#0d1117;padding:16px;border:2px solid #c6932b}.cards__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.cards__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:21px;line-height:31px;color:#c6932b;position:relative}.cards__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{content:"";width:48px;height:1px;background:#0d1117;position:absolute;left:0;bottom:0}.cards__header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#c6932b;border-radius:50%;height:28px;width:28px;transition:all .3s}.cards__header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     fa-icon{color:#fff}.cards__header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cards__body[_ngcontent-%COMP%], .cards__content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.cards__content[_ngcontent-%COMP%]{align-items:center;justify-content:space-between}@media (min-width: 768px){.cards__content[_ngcontent-%COMP%]{flex-direction:row}}.cards__date[_ngcontent-%COMP%]{font-size:28px;line-height:38px;width:100%;display:block}.cards__info[_ngcontent-%COMP%]{margin-top:8px;width:100%;grid-gap:16px;gap:16px}.cards__info[_ngcontent-%COMP%], .cards__info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;flex-direction:column}.cards__info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;line-height:18px}@media (min-width: 768px){.cards__info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:block}}.cards__detalhes[_ngcontent-%COMP%]{background:#015b7e;display:flex;justify-content:center;margin-top:16px;border-radius:8px}.cards__detalhes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;display:block;text-align:center;width:100%;padding:8px}form.form[_ngcontent-%COMP%]{width:100%;max-width:480px;display:flex;flex-direction:column;grid-gap:16px;gap:16px}form.form[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:8px;color:#0d1117;cursor:pointer}form.form[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{cursor:pointer}form.form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]{position:relative;height:56px;background:#0d1117;border-radius:4px;box-shadow:1px 4px 10px #0006}form.form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%]{display:block;padding-left:16px;font-size:12px;color:#e54033;font-weight:200;margin-top:3px}form.form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], form.form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:6px 16px 0;color:#fff;border:0;width:100%;outline:none;min-width:180px;font-size:16px;transition:all .3s ease-out;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;-webkit-appearance:none;border-radius:0;height:100%;background:#0000}form.form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, form.form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{border-bottom:2px solid #c6932b}form.form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, form.form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder{color:#0000}form.form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding-left:16px;pointer-events:none;position:absolute;top:0;left:0;margin-top:18px;transition:all .3s ease-out;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;color:#fff}form.form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], form.form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%], form.form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], form.form[_ngcontent-%COMP%]   .label-float[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{font-size:12px;margin-top:6px;color:#c6932b}form.form[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{color:#0d1117}']}),n})();function A(n,e){if(1&n&&(l.TgZ(0,"p"),l._uU(1,"Voc\xea tem um total de "),l.TgZ(2,"strong"),l._uU(3),l.qZA(),l._uU(4),l.qZA()),2&n){const n=l.oxw();l.xp6(3),l.Oqu(n.agendamentos.length),l.xp6(1),l.hij(" ",n.agendamentos.length>1?"agendamentos":"agendamento"," para hoje ")}}function q(n,e){1&n&&(l.TgZ(0,"p"),l._uU(1,"N\xe3o existe nenhum agendamento marcado para o dia de hoje."),l.qZA())}function T(n,e){if(1&n){const n=l.EpF();l.TgZ(0,"app-card-agendamento-dashboard",7),l.NdJ("deleteClicked",function(){return l.CHM(n),l.oxw().getAgendamentosByAtendente()}),l.qZA()}2&n&&l.Q6J("agendamento",e.$implicit)}function w(n,e){1&n&&(l.TgZ(0,"div",8),l._UZ(1,"app-loader"),l.qZA())}const U=[{path:"",component:(()=>{class n{constructor(n,e){this.agendamentoService=n,this.userService=e,this.agendamentos=[],this.loading=!1}ngOnInit(){this.id=this.userService.retornaUserId(),this.getAgendamentosByAtendente()}getAgendamentosByAtendente(){this.loading=!0,this.agendamentoService.getAgendamentosFuncionario(Number(this.id)).then(n=>{console.log(n),this.agendamentos=n,this.loading=!1}).catch(n=>{console.log(n),this.loading=!1,alert("N\xe3o foi poss\xedvel completar sua requisi\xe7\xe3o! Tente novamente mais tarde.")})}}return n.\u0275fac=function(e){return new(e||n)(l.Y36(s.M),l.Y36(p.K))},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-dashboard"]],decls:11,vars:4,consts:[[1,"dashboard"],[1,"dashboard__header"],[4,"ngIf"],[1,"dashboard__body"],[1,"grid"],[3,"agendamento","deleteClicked",4,"ngFor","ngForOf"],["class","loader",4,"ngIf"],[3,"agendamento","deleteClicked"],[1,"loader"]],template:function(n,e){1&n&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div"),l.TgZ(3,"h1"),l._uU(4,"Dashboard"),l.qZA(),l.YNc(5,A,5,2,"p",2),l.YNc(6,q,2,0,"p",2),l.qZA(),l.qZA(),l.TgZ(7,"div",3),l.TgZ(8,"div",4),l.YNc(9,T,1,1,"app-card-agendamento-dashboard",5),l.qZA(),l.YNc(10,w,2,0,"div",6),l.qZA(),l.qZA()),2&n&&(l.xp6(5),l.Q6J("ngIf",e.agendamentos.length>0&&!e.loading),l.xp6(1),l.Q6J("ngIf",0===e.agendamentos.length&&!e.loading),l.xp6(3),l.Q6J("ngForOf",e.agendamentos),l.xp6(1),l.Q6J("ngIf",e.loading))},directives:[o.O5,o.sg,v,h.R],styles:['@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");.dashboard[_ngcontent-%COMP%]{padding:16px}.dashboard__header[_ngcontent-%COMP%]{margin-bottom:32px;display:flex;justify-content:space-between;flex-direction:column}@media (min-width: 1140px){.dashboard__header[_ngcontent-%COMP%]{align-items:center;flex-direction:row}}.dashboard__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#c6932b}.dashboard__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.dashboard__body[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-gap:32px;gap:32px}@media (min-width: 1140px){.dashboard__body[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}.dashboard__body[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{margin-top:32px}']}),n})()}];let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[g.Bz.forChild(U)],g.Bz]}),n})(),k=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[o.ez,y,a.UX,i.uH,r.m,c.IJ,d.yI.forChild()]]}),n})()}}]);