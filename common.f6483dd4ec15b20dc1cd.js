(self.webpackChunkbarberttoo_v2=self.webpackChunkbarberttoo_v2||[]).push([[592],{7990:(t,e,o)=>{"use strict";o.d(e,{e:()=>c});var n=o(8307),r=o(7716),i=o(1841),a=o(2577);let c=(()=>{class t{constructor(t,e){this.http=t,this.userService=e,this.apiURL="https://sistema-barbertoo.herokuapp.com"}login(t){return this.http.post(`${this.apiURL}/login`,{login:t.email,password:t.password}).pipe((0,n.b)(t=>{const e=t.id,o=t.profile;this.userService.salvaToken(t.token),this.userService.salvaUserId(e),this.userService.salvaUserRole(o)}))}register(t){const e="("+t.phone.substring(0,2)+") "+t.phone.substring(2,7)+"-"+t.phone.substring(7,11),o=t.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4");return console.log(o),console.log(e),this.http.post(`${this.apiURL}/cliente/create`,{nm_Cliente:t.name,ds_Email:t.email,cd_Cpf:o,dt_BirthDate:t.date,cd_Celular:e,cd_Password:t.password})}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(i.eN),r.LFG(a.K))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},1595:(t,e,o)=>{"use strict";o.d(e,{M:()=>c});var n=o(689),r=o(2340),i=o(7716),a=o(1841);let c=(()=>{class t{constructor(t){this.http=t}getAgendamentos(t){return this.http.get(`${r.N.baseUrl}/agendamento/cliente/${t}`).toPromise()}getAgendamentosFuncionario(t){return this.http.get(`${r.N.baseUrl}/agendamento/funcionario/${t}`).toPromise()}getAgendamentoById(t){return this.http.get(`${r.N.baseUrl}/agendamento/parcial/${t}`).toPromise()}createAgendamento(t,e){const o={cliente:Number(e),funcionario:Number(t.funcionario),servico:Number(t.servico),dt_Agendamento:(0,n.TG)(t.hour,t.date)};return console.log(o),this.http.post(`${r.N.baseUrl}/agendamento/create`,o).toPromise()}deleteAgendamento(t){return this.http.delete(`${r.N.baseUrl}/agendamento/${t}`).toPromise()}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(a.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},3141:(t,e,o)=>{"use strict";o.d(e,{l:()=>a});var n=o(2340),r=o(7716),i=o(1841);let a=(()=>{class t{constructor(t){this.http=t}createHistoric(t){return this.http.post(`${n.N.baseUrl}/historico/create`,t).toPromise()}getClienteHistoricById(t){return this.http.get(`${n.N.baseUrl}/historico/cliente/${t}`).toPromise()}getFuncionarioHistoricById(t){return this.http.get(`${n.N.baseUrl}/historico/funcionario/${t}`).toPromise()}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(i.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},8907:(t,e,o)=>{"use strict";o.d(e,{B:()=>a});var n=o(2340),r=o(7716),i=o(1841);let a=(()=>{class t{constructor(t){this.http=t}getServices(){return this.http.get(`${n.N.baseUrl}/servico`).toPromise()}getServiceById(t){return this.http.get(`${n.N.baseUrl}/servico/${t}`).toPromise()}updateService(t){return this.http.put(`${n.N.baseUrl}/servico`,t).toPromise()}createService(t){return this.http.post(`${n.N.baseUrl}/servico/create`,t).toPromise()}deleteService(t){return this.http.delete(`${n.N.baseUrl}/servico/${t}`).toPromise()}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(i.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},5271:(t,e,o)=>{"use strict";o.d(e,{F:()=>d});var n=o(7716),r=o(8832),i=o(8583);const a=["content"];function c(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"div",6),n.TgZ(1,"h4",7),n._uU(2),n.qZA(),n.TgZ(3,"button",8),n.NdJ("click",function(){return n.CHM(t),n.oxw().$implicit.dismiss("Cross click")}),n.qZA(),n.qZA()}if(2&t){const t=n.oxw(2);n.xp6(2),n.Oqu(t.title)}}function s(t,e){if(1&t){const t=n.EpF();n.YNc(0,c,4,1,"div",1),n.TgZ(1,"div",2),n.Hsn(2),n.qZA(),n.TgZ(3,"div",3),n.TgZ(4,"button",4),n.NdJ("click",function(){return n.CHM(t).$implicit.close("Save click")}),n._uU(5,"Fechar"),n.qZA(),n.TgZ(6,"button",5),n.NdJ("click",function(){return n.CHM(t),n.oxw().action()}),n._uU(7),n.qZA(),n.qZA()}if(2&t){const t=n.oxw();n.Q6J("ngIf",t.title),n.xp6(6),n.Gre("",t.color," botao"),n.xp6(1),n.Oqu(t.actionText)}}const l=["*"];let d=(()=>{class t{constructor(t,e){this.modalService=t,this.modalConfig=e,this.closeResult="",this.actionText="Excluir",this.color="red",this.actionClicked=new n.vpe,e.centered=!0}ngOnInit(){this.modalConfig.modalDialogClass=`alert-modal ${this.modalClass}`}open(){this.modalService.open(this.content,{ariaLabelledBy:"modal-basic-title"}).result.then(t=>{this.closeResult=`Closed with: ${t}`},t=>{})}action(){this.actionClicked.emit("clicked")}ngOnDestroy(){this.modalConfig.modalDialogClass="alert-modal"}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(r.FF),n.Y36(r.NM))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-alert-modal"]],viewQuery:function(t,e){if(1&t&&n.Gf(a,5,n.Rgc),2&t){let t;n.iGM(t=n.CRH())&&(e.content=t.first)}},inputs:{modalClass:"modalClass",title:"title",text:"text",actionText:"actionText",color:"color"},outputs:{actionClicked:"actionClicked"},ngContentSelectors:l,decls:2,vars:0,consts:[["content",""],["class","modal-header",4,"ngIf"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"fechar","botao",3,"click"],["type","button",3,"click"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"]],template:function(t,e){1&t&&(n.F$t(),n.YNc(0,s,8,5,"ng-template",null,0,n.W1O))},directives:[i.O5],styles:['@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");  .alert-modal{color:#0d1117}  .alert-modal .modal-footer,   .alert-modal .modal-header{border:unset}  .alert-modal .modal-footer .botao,   .alert-modal .modal-header .botao{height:36px;border:none;font-size:14px;font-weight:400;padding:12px;display:flex;align-items:center;justify-content:center;border-radius:8px;opacity:1}  .alert-modal .modal-footer .botao.fechar,   .alert-modal .modal-header .botao.fechar{background:#015b7e;color:#fff}  .alert-modal .modal-footer .botao.red,   .alert-modal .modal-header .botao.red{background:#e54033;color:#fff}  .alert-modal .modal-footer .botao.amarelo,   .alert-modal .modal-header .botao.amarelo{background:#c6932b;color:#fff}  .alert-modal .modal-footer .botao.verde,   .alert-modal .modal-header .botao.verde{background:#04d361;color:#fff}  .alert-modal .modal-body{padding:16px 16px 12px}']}),t})()},285:(t,e,o)=>{"use strict";o.d(e,{Y:()=>l});var n=o(9976),r=o(7716),i=o(4330),a=o(4212);const c=function(){return["../"]},s=["*"];let l=(()=>{class t{constructor(){this.faArrowLeft=n.acZ}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-card-skeleton"]],inputs:{route:"route",title:"title"},ngContentSelectors:s,decls:9,vars:4,consts:[[1,"card-container","details"],[1,"card-container__content"],[1,"card-container__back","back",3,"routerLink"],[1,"icon",3,"icon"],[1,"card-container__title"],[1,"card-container__card"]],template:function(t,e){1&t&&(r.F$t(),r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"a",2),r._UZ(3,"fa-icon",3),r._uU(4," Voltar "),r.qZA(),r.TgZ(5,"h1",4),r._uU(6),r.qZA(),r.TgZ(7,"div",5),r.Hsn(8),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(2),r.Q6J("routerLink",r.DdM(3,c)),r.xp6(1),r.Q6J("icon",e.faArrowLeft),r.xp6(3),r.Oqu(e.title))},directives:[i.yS,a.BN],styles:['@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");.card-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;height:100%}.card-container__content[_ngcontent-%COMP%]{padding:16px}@media (min-width: 768px){.card-container__content[_ngcontent-%COMP%]{padding:0}}.card-container__title[_ngcontent-%COMP%]{color:#c6932b;font-size:24px}@media (min-width: 1140px){.card-container__title[_ngcontent-%COMP%]{font-size:30px}}.card-container__back[_ngcontent-%COMP%]{color:#fff;text-transform:uppercase;margin-bottom:8px;display:flex;font-size:14px}.card-container__back[_ngcontent-%COMP%]:hover{color:#fff}.card-container__card[_ngcontent-%COMP%]{background:#fff;color:#0d1117;border-radius:12px;padding:16px;border:2px solid #c6932b}@media (min-width: 768px){.card-container__card[_ngcontent-%COMP%]{padding:24px}}.back[_ngcontent-%COMP%]     fa-icon{margin-right:8px;color:#c6932b}']}),t})()},9389:(t,e,o)=>{"use strict";o.d(e,{S:()=>d});var n=o(7716),r=o(8832),i=o(8583);const a=["content"];function c(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"div",5),n.TgZ(1,"h4",6),n._uU(2,"Profile update"),n.qZA(),n.TgZ(3,"button",7),n.NdJ("click",function(){return n.CHM(t),n.oxw().$implicit.dismiss("Cross click")}),n.qZA(),n.qZA()}}function s(t,e){if(1&t&&(n.TgZ(0,"div",8),n.TgZ(1,"span"),n._uU(2),n.qZA(),n.qZA()),2&t){const t=n.oxw(2);n.xp6(2),n.Oqu(t.text)}}function l(t,e){if(1&t){const t=n.EpF();n.YNc(0,c,4,0,"div",1),n.YNc(1,s,3,1,"div",2),n.TgZ(2,"div",3),n.TgZ(3,"button",4),n.NdJ("click",function(){return n.CHM(t).$implicit.dismiss("Cross click")}),n._uU(4,"Fechar"),n.qZA(),n.qZA()}if(2&t){const t=n.oxw();n.Q6J("ngIf",t.title),n.xp6(1),n.Q6J("ngIf",t.text)}}let d=(()=>{class t{constructor(t,e){this.modalService=t,this.modalConfig=e,this.closeResult="",this.actionClicked=new n.vpe,e.modalDialogClass="info-modal",e.centered=!0}ngOnInit(){}open(){this.modalService.open(this.content,{ariaLabelledBy:"modal-basic-title"}).result.then(t=>{this.closeResult=`Closed with: ${t}`},t=>{this.actionClicked.emit("clicked"),this.modalService.dismissAll()})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(r.FF),n.Y36(r.NM))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-info-modal"]],viewQuery:function(t,e){if(1&t&&n.Gf(a,5,n.Rgc),2&t){let t;n.iGM(t=n.CRH())&&(e.content=t.first)}},inputs:{title:"title",text:"text"},outputs:{actionClicked:"actionClicked"},decls:2,vars:0,consts:[["content",""],["class","modal-header",4,"ngIf"],["class","modal-body",4,"ngIf"],[1,"modal-footer"],["type","button",1,"close",3,"click"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"]],template:function(t,e){1&t&&n.YNc(0,l,5,2,"ng-template",null,0,n.W1O)},directives:[i.O5],styles:['@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");  .info-modal{color:#0d1117}  .info-modal .modal-footer,   .info-modal .modal-header{border:unset}  .info-modal .modal-footer .close,   .info-modal .modal-header .close{height:24px;background:#015b7e;color:#fff;border:none;font-size:14px;font-weight:400;padding:12px;display:flex;align-items:center;justify-content:center;border-radius:8px;opacity:1}  .info-modal .modal-body{padding:16px 16px 12px}']}),t})()},8210:(t,e,o)=>{"use strict";function n(t){return t.substring(0,5)+"-"+t.substring(5)}o.d(e,{h:()=>n})},689:(t,e,o)=>{"use strict";function n(t){let e=new Date(t);return e.getDate()+" "+["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][e.getMonth()].substring(0,3)+"."}function r(t,e){if(t)return`${e.getFullYear()}-${e.getMonth()+1<=9?"0"+(e.getMonth()+1):e.getMonth()+1}-${e.getDate()<=9?"0"+e.getDate():e.getDate()}`;{const t=(new Date).getTime()+86400+6e4*new Date(String(e)).getTimezoneOffset(),o=new Date(t+-108e5);return`${o.getFullYear()}-${o.getMonth()+1}-${o.getDate()<=31?o.getDate()+1:o.getDate()}`}}function i(t){let e=new Date(t).getMinutes(),o=new Date(t).getHours();return o<=9?0===e?`0${o}:${e}0`:`0${o}:${e}`:0===e?`${o}:${e}0`:`${o}:${e}`}function a(t,e){return e+" "+t+":00"}o.d(e,{tw:()=>n,L9:()=>r,gN:()=>i,TG:()=>a})},5853:(t,e,o)=>{"use strict";function n(t){return"("+t.substring(0,2)+") "+t.substring(2,7)+"-"+t.substring(7,11)}o.d(e,{C:()=>n})},2825:(t,e,o)=>{"use strict";o.d(e,{w:()=>n});class n{constructor(){}static ValidaCpf(t){const e=t.value;let o,n=0;const r=new RegExp("[0-9]{11}");if("00000000000"!=e&&"11111111111"!=e&&"22222222222"!=e&&"33333333333"!=e&&"44444444444"!=e&&"55555555555"!=e&&"66666666666"!=e&&"77777777777"!=e&&"88888888888"!=e&&"99999999999"!=e&&r.test(e)){for(let t=1;t<=9;t++)n+=parseInt(e.substring(t-1,t))*(11-t);if(o=10*n%11,10!=o&&11!=o||(o=0),o!=parseInt(e.substring(9,10)))return{cpfInvalido:!0};n=0;for(let t=1;t<=10;t++)n+=parseInt(e.substring(t-1,t))*(12-t);return o=10*n%11,10!=o&&11!=o||(o=0),o!=parseInt(e.substring(10,11))?{cpfInvalido:!0}:null}return{cpfInvalido:!0}}static validateFullName(t){return/^[a-zA-Z]+ [a-zA-Z]+$/.test(t.value)?null:{fullNameInvalid:!0}}static validatePhone(t){return/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(t.value)?null:{phoneInvalid:!0}}}}}]);