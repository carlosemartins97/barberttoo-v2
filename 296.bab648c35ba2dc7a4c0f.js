(self.webpackChunkbarberttoo_v2=self.webpackChunkbarberttoo_v2||[]).push([[296],{3296:(t,e,o)=>{"use strict";o.r(e),o.d(e,{FaturamentoModule:()=>y});var n=o(8583),a=o(4330);function i(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function s(t){i(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===r(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function c(t){i(1,arguments);var e=s(t),o=e.getDate();return o}var g=o(7716),l=o(3141),_=o(8907),d=o(2577),u=o(9047);function h(t,e){if(1&t&&(g.TgZ(0,"div",6),g.TgZ(1,"p",7),g._uU(2,"N\xfamero total de atendimentos realizados neste m\xeas:"),g.qZA(),g.TgZ(3,"p",15),g._uU(4),g.qZA(),g.qZA()),2&t){const t=g.oxw(2);g.xp6(4),g.Oqu(t.atendimentosTotal)}}function m(t,e){if(1&t&&(g.TgZ(0,"div",6),g.TgZ(1,"p",7),g._uU(2,"Saldo total deste m\xeas:"),g.qZA(),g.TgZ(3,"p",15),g._uU(4),g.qZA(),g.qZA()),2&t){const t=g.oxw(2);g.xp6(4),g.hij("R$ ",t.saldoTotal,"")}}const p=function(t,e){return{"money--green":t,"money--red":e}};function f(t,e){if(1&t&&(g.TgZ(0,"div",4),g.TgZ(1,"div",5),g.TgZ(2,"div",6),g.TgZ(3,"p",7),g._uU(4,"Compara\xe7\xe3o entre hoje e ontem."),g.qZA(),g.TgZ(5,"div",8),g.TgZ(6,"div",9),g.TgZ(7,"p",10),g.TgZ(8,"span"),g._uU(9,"ontem"),g.qZA(),g.TgZ(10,"span",11),g._uU(11),g.qZA(),g.qZA(),g.TgZ(12,"p",12),g.TgZ(13,"span"),g._uU(14,"hoje"),g.qZA(),g.TgZ(15,"span",11),g._uU(16),g.qZA(),g.qZA(),g.qZA(),g.TgZ(17,"p",13),g.TgZ(18,"span"),g._uU(19,"at\xe9 o momento voc\xea est\xe1 com um balan\xe7o de:"),g.qZA(),g.TgZ(20,"span",14),g._uU(21),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(22,"div",6),g.TgZ(23,"p",7),g._uU(24,"Compara\xe7\xe3o entre o m\xeas atual e m\xeas passado."),g.qZA(),g.TgZ(25,"div",8),g.TgZ(26,"div",9),g.TgZ(27,"p",10),g.TgZ(28,"span"),g._uU(29,"m\xeas anterior"),g.qZA(),g.TgZ(30,"span",11),g._uU(31),g.qZA(),g.qZA(),g.TgZ(32,"p",12),g.TgZ(33,"span"),g._uU(34,"m\xeas atual"),g.qZA(),g.TgZ(35,"span",11),g._uU(36),g.qZA(),g.qZA(),g.qZA(),g.TgZ(37,"p",13),g.TgZ(38,"span"),g._uU(39,"at\xe9 o momento voc\xea est\xe1 com um balan\xe7o de:"),g.qZA(),g.TgZ(40,"span",14),g._uU(41),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(42,"div",6),g.TgZ(43,"p",7),g._uU(44,"Total de atendimentos realizados por voc\xea este m\xeas:"),g.qZA(),g.TgZ(45,"p",15),g._uU(46),g.qZA(),g.qZA(),g.TgZ(47,"div",6),g.TgZ(48,"p",7),g._uU(49,"Maior servi\xe7o prestado este m\xeas:"),g.qZA(),g.TgZ(50,"p",15),g._uU(51),g.qZA(),g.qZA(),g.YNc(52,h,5,1,"div",16),g.YNc(53,m,5,1,"div",16),g.qZA(),g.qZA()),2&t){const t=g.oxw();g.xp6(11),g.hij("R$ ",t.lucroDiaAnterior.toFixed(2),""),g.xp6(5),g.hij("R$ ",t.lucroDiaAtual.toFixed(2),""),g.xp6(4),g.Q6J("ngClass",g.WLB(12,p,t.lucroDiaAtual-t.lucroDiaAnterior>=0,t.lucroDiaAtual-t.lucroDiaAnterior<0)),g.xp6(1),g.hij("R$ ",(t.lucroDiaAtual-t.lucroDiaAnterior).toFixed(2),""),g.xp6(10),g.hij("R$ ",t.lucroMesPassado.toFixed(2),""),g.xp6(5),g.hij("R$ ",t.lucroMesAtual.toFixed(2),""),g.xp6(4),g.Q6J("ngClass",g.WLB(15,p,t.lucroMesAtual-t.lucroMesPassado>=0,t.lucroMesAtual-t.lucroMesPassado<0)),g.xp6(1),g.hij("R$ ",(t.lucroMesAtual-t.lucroMesPassado).toFixed(2),""),g.xp6(5),g.Oqu(t.agendamentosInMonth),g.xp6(5),g.Oqu(t.servicoMaisRealizado),g.xp6(1),g.Q6J("ngIf",t.isADM),g.xp6(1),g.Q6J("ngIf",t.isADM)}}function Z(t,e){1&t&&(g.TgZ(0,"div",17),g._UZ(1,"app-loader"),g.qZA())}const M=[{path:"",component:(()=>{class t{constructor(t,e,o){this.historicoService=t,this.servicosService=e,this.userService=o,this.loading=!1,this.agendamentosInMonth=0,this.servicoMaisRealizado="Nenhum servi\xe7o realizado at\xe9 o momento.",this.historicoMesAtual=[],this.historicoMesPassado=[],this.lucroMesPassado=0,this.lucroMesAtual=0,this.lucroDiaAnterior=0,this.lucroDiaAtual=0,this.saldoTotal=0,this.atendimentosTotal=0}ngOnInit(){this.isADM="ROLE_ADM"===this.userService.retornaUserRole(),this.getHistoricoMesAtual()}getHistoricoMesAtual(){this.loading=!0,this.historicoService.getHistoricoMesAtual().then(t=>{console.log(t),console.log("============="),this.historicoMesAtual=t,this.agendamentosInMonth=t.length,this.lucroMesAtual=this.getLucro(t),this.getServicoMaisRealizado(t)}).catch(t=>{console.log(t),this.loading=!1})}getServicoMaisRealizado(t){const e=[];t.forEach(t=>{const o=t.servico.id,n=e.filter(t=>t.id===o);0===n.length?e.push({id:o,qnt:1}):n.find(t=>t.id===o&&(t.qnt+=1))}),console.log(e);let o,n=0;e.forEach(t=>{t.qnt>n&&(n=t.qnt)&&(o=t.id)}),o?this.servicosService.getServiceById(o).then(t=>{this.servicoMaisRealizado=t.nm_servico,this.getHistoricoMesPassado()}).catch(t=>{console.log(t),this.loading=!1}):this.getHistoricoMesPassado()}getHistoricoMesPassado(){this.loading=!0;const t=function(t){return i(1,arguments),s(t).getMonth()}(new Date);this.historicoService.getHistoricoByDate(0,t).then(t=>{this.lucroMesPassado=this.getLucro(t),this.getComparacaoEntreDias()}).catch(t=>{console.log(t),this.loading=!1})}getComparacaoEntreDias(){const t=c(new Date),e=c(new Date((n=(o=new Date).getFullYear(),a=o.getMonth(),i=o.getDate(),(r=new Date(0)).setFullYear(n,a,i-1),r.setHours(0,0,0,0),r)));var o,n,a,i,r;let s=0,g=0;this.historicoMesAtual.forEach(o=>{c(new Date(o.dt_Realizado))===t&&(s+=o.vl_Pago),c(new Date(o.dt_Realizado))===e&&(g+=o.vl_Pago)}),this.lucroDiaAnterior=g,this.lucroDiaAtual=s,this.isADM?this.getHistoricoTotal():this.loading=!1}getHistoricoTotal(){this.historicoService.getHistoricoTotal().then(t=>{this.saldoTotal=this.getLucro(t),this.atendimentosTotal=t.length,this.loading=!1}).catch(t=>{console.log(t),alert("Houve um erro ao completar a requisi\xe7\xe3o do ADM."),this.loading=!1})}getLucro(t){let e=0;return t.forEach(t=>{e+=t.vl_Pago}),e}}return t.\u0275fac=function(e){return new(e||t)(g.Y36(l.l),g.Y36(_.B),g.Y36(d.K))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-faturamento"]],decls:9,vars:2,consts:[[1,"faturamento"],[1,"faturamento__header"],["class","faturamento__body",4,"ngIf"],["class","loading",4,"ngIf"],[1,"faturamento__body"],[1,"grid"],[1,"grid__chart"],[1,"grid__chart__title"],[1,"grid__chart__card"],[1,"grid__chart__values"],[1,"grid__chart__values--previous"],[1,"money"],[1,"grid__chart__values--next"],[1,"grid__chart__total"],[1,"money",3,"ngClass"],[1,"money","money--big"],["class","grid__chart",4,"ngIf"],[1,"loading"]],template:function(t,e){1&t&&(g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.TgZ(2,"div"),g.TgZ(3,"h1"),g._uU(4,"Faturamento"),g.qZA(),g.TgZ(5,"p"),g._uU(6,"Informa\xe7\xf5es sobre ganhos e lucros."),g.qZA(),g.qZA(),g.qZA(),g.YNc(7,f,54,18,"div",2),g.YNc(8,Z,2,0,"div",3),g.qZA()),2&t&&(g.xp6(7),g.Q6J("ngIf",!e.loading),g.xp6(1),g.Q6J("ngIf",e.loading))},directives:[n.O5,n.mk,u.R],styles:['@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");.faturamento[_ngcontent-%COMP%]{padding:16px}.faturamento__header[_ngcontent-%COMP%]{margin-bottom:32px;display:flex;justify-content:space-between;flex-direction:column}@media (min-width: 1140px){.faturamento__header[_ngcontent-%COMP%]{align-items:center;flex-direction:row}}.faturamento__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#c6932b}.faturamento__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.faturamento__body[_ngcontent-%COMP%]{overflow:auto}.faturamento__body[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:32px;gap:32px}@media screen and (max-width: 1023px){.faturamento__body[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}.faturamento__body[_ngcontent-%COMP%]   .grid__chart[_ngcontent-%COMP%]{background:#e5e5e5;border:2px solid #c6932b;border-radius:8px;display:flex;flex-direction:column;align-items:center;color:#0d1117;padding:32px}.faturamento__body[_ngcontent-%COMP%]   .grid__chart__title[_ngcontent-%COMP%]{font-weight:700;text-align:center}.faturamento__body[_ngcontent-%COMP%]   .grid__chart__card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.faturamento__body[_ngcontent-%COMP%]   .grid__chart__values[_ngcontent-%COMP%]{display:flex;grid-gap:32px;gap:32px}.faturamento__body[_ngcontent-%COMP%]   .grid__chart__values--next[_ngcontent-%COMP%], .faturamento__body[_ngcontent-%COMP%]   .grid__chart__values--previous[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center}.faturamento__body[_ngcontent-%COMP%]   .grid__chart__values--next[_ngcontent-%COMP%]   .money[_ngcontent-%COMP%], .faturamento__body[_ngcontent-%COMP%]   .grid__chart__values--previous[_ngcontent-%COMP%]   .money[_ngcontent-%COMP%]{color:#c6932b}.faturamento__body[_ngcontent-%COMP%]   .grid__chart__total[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center}.faturamento__body[_ngcontent-%COMP%]   .grid__chart[_ngcontent-%COMP%]   .money[_ngcontent-%COMP%]{font-weight:700;font-size:1.2rem;display:flex;height:100%;align-items:center}.faturamento__body[_ngcontent-%COMP%]   .grid__chart[_ngcontent-%COMP%]   .money--green[_ngcontent-%COMP%]{color:#008f00}.faturamento__body[_ngcontent-%COMP%]   .grid__chart[_ngcontent-%COMP%]   .money--red[_ngcontent-%COMP%]{color:#e54033}.faturamento__body[_ngcontent-%COMP%]   .grid__chart[_ngcontent-%COMP%]   .money--big[_ngcontent-%COMP%]{font-size:2rem;text-align:center}.faturamento__body[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{margin-top:32px}']}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[a.Bz.forChild(M)],a.Bz]}),t})();var v=o(4466);let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[n.ez,A,v.m]]}),t})()}}]);