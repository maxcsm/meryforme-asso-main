"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6152],{6152:(E,v,c)=>{c.r(v),c.d(v,{InvoicePageModule:()=>b});var g=c(6895),p=c(433),u=c(5035),m=c(4126),a=c(655),e=c(8256),f=c(1053);function h(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",20)(1,"ion-button",21),e._uU(2,"T\xe9l\xe9charger PDF "),e.qZA(),e.TgZ(3,"ion-button",22),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.invoicesend())}),e._uU(4,"Envoyer par email "),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(1),e.MGl("href","https://www.api.meryforme.fr/api/invoice/",t.InvoiceID,"")}}function I(o,i){1&o&&(e.TgZ(0,"ion-badge",23),e._uU(1," Annul\xe9e "),e.qZA())}function T(o,i){1&o&&(e.TgZ(0,"ion-badge",24),e._uU(1," Pay\xe9e "),e.qZA())}function Z(o,i){1&o&&(e.TgZ(0,"ion-badge",25),e._uU(1," Verifi\xe9e "),e.qZA())}function x(o,i){1&o&&(e.TgZ(0,"ion-badge",23),e._uU(1," A valider "),e.qZA())}function P(o,i){if(1&o&&(e.TgZ(0,"ion-col",11),e._uU(1," Client : "),e.TgZ(2,"b"),e._uU(3),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"b"),e._uU(6),e.qZA(),e._UZ(7,"br"),e.TgZ(8,"b"),e._uU(9),e.qZA(),e._UZ(10,"br"),e.TgZ(11,"b"),e._uU(12),e.qZA(),e._UZ(13,"br"),e.TgZ(14,"b"),e._uU(15),e.qZA(),e._UZ(16,"br"),e._uU(17," T\xe9l\xe9phone : "),e.TgZ(18,"b"),e._uU(19),e.qZA(),e._UZ(20,"br"),e._uU(21," E-mail : "),e.TgZ(22,"b"),e._uU(23),e.qZA(),e._UZ(24,"br"),e.qZA()),2&o){const t=i.$implicit;e.xp6(3),e.hij(" id: ",t.id,""),e.xp6(3),e.hij(" ",t.company,""),e.xp6(3),e.lnq(" ",t.salutation," ",t.firstname," ",t.lastname,""),e.xp6(3),e.hij(" ",t.address," "),e.xp6(3),e.AsE(" ",t.cp," ",t.city,""),e.xp6(4),e.hij(" ",t.phone_mobile," "),e.xp6(4),e.hij(" ",t.email," ")}}function w(o,i){if(1&o&&(e.TgZ(0,"ion-row"),e.YNc(1,P,25,10,"ion-col",26),e.TgZ(2,"ion-col",10)(3,"ion-item",27),e._uU(4),e.qZA()(),e.TgZ(5,"ion-col",10)(6,"ion-item",27),e._uU(7),e.qZA()(),e._UZ(8,"ion-col",10),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.user),e.xp6(3),e.hij(" ",t.ItemTax1,"% "),e.xp6(3),e.hij(" ",t.DueDate," ")}}function y(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-row",28)(1,"ion-col",11),e._uU(2," Client : "),e.TgZ(3,"b"),e._uU(4),e.qZA(),e._UZ(5,"br"),e.TgZ(6,"b"),e._uU(7),e.qZA(),e.TgZ(8,"b"),e._uU(9),e.qZA()(),e.TgZ(10,"ion-col",10)(11,"ion-item",27)(12,"ion-label",29),e._uU(13," TVA "),e.qZA(),e.TgZ(14,"ion-input",30),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.ItemTax1=n)}),e.qZA()()(),e.TgZ(15,"ion-col",10)(16,"ion-item",27)(17,"ion-label",29),e._uU(18," Date limite "),e.qZA(),e.TgZ(19,"ion-input",31),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.DueDate=n)}),e.qZA()()(),e.TgZ(20,"ion-col",10)(21,"ion-button",32),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.SaveInvoiceSetting())}),e._UZ(22,"ion-icon",33),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(4),e.AsE(" ",t.firstname," ",t.lastname,""),e.xp6(3),e.hij(" ",t.company,""),e.xp6(2),e.hij(" ",t.city,""),e.xp6(5),e.Q6J("ngModel",t.ItemTax1),e.xp6(5),e.Q6J("ngModel",t.DueDate)}}function j(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-button",32),e.NdJ("click",function(n){e.CHM(t);const l=e.oxw(2).$implicit,s=e.oxw();return e.KtG(s.saveItem(n,l))}),e._UZ(1,"ion-icon",33),e.qZA()}}function A(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-row",35)(1,"ion-col",10)(2,"ion-item",36)(3,"ion-textarea",37),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw(2);return e.KtG(l.ItemName=n)}),e.qZA()()(),e.TgZ(4,"ion-col",11)(5,"ion-item",36)(6,"ion-textarea",37),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw(2);return e.KtG(l.ItemDesc=n)}),e.qZA()()(),e.TgZ(7,"ion-col",12)(8,"ion-item",38)(9,"ion-label",29),e._uU(10,"Quantit\xe9"),e.qZA(),e.TgZ(11,"ion-input",30),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw(2);return e.KtG(l.ItemQuantity=n)}),e.qZA()()(),e.TgZ(12,"ion-col",12)(13,"ion-item",38)(14,"ion-label",29),e._uU(15,"Prix Unit\xe9"),e.qZA(),e.TgZ(16,"ion-input",30),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw(2);return e.KtG(l.ItemTotal=n)}),e.qZA()()(),e.TgZ(17,"ion-col",12),e._uU(18),e.qZA(),e.TgZ(19,"ion-col",12),e.YNc(20,j,2,0,"ion-button",39),e.qZA()()}if(2&o){const t=e.oxw().$implicit,r=e.oxw();e.xp6(3),e.Q6J("autoGrow",!0)("ngModel",r.ItemName),e.xp6(3),e.Q6J("autoGrow",!0)("ngModel",r.ItemDesc),e.xp6(5),e.Q6J("ngModel",r.ItemQuantity),e.xp6(5),e.Q6J("ngModel",r.ItemTotal),e.xp6(2),e.hij(" ",t.ItemTotal," \u20ac "),e.xp6(2),e.Q6J("ngIf",r.editnumber==t.id)}}function O(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-button",45),e.NdJ("click",function(n){e.CHM(t);const l=e.oxw(2).$implicit,s=e.oxw();return e.KtG(s.editItem(n,l))}),e._UZ(1,"ion-icon",46),e.qZA()}}function U(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-row")(1,"ion-col",10),e._uU(2),e.qZA(),e.TgZ(3,"ion-col",11),e._UZ(4,"div",40),e.qZA(),e.TgZ(5,"ion-col",12),e._uU(6," 1 "),e.qZA(),e.TgZ(7,"ion-col",12),e._uU(8),e.qZA(),e.TgZ(9,"ion-col",10),e._uU(10),e.qZA(),e.TgZ(11,"ion-col",41),e.YNc(12,O,2,0,"ion-button",42),e.TgZ(13,"ion-button",43),e.NdJ("click",function(n){e.CHM(t);const l=e.oxw().$implicit,s=e.oxw();return e.KtG(s.deleteItem(n,l))}),e._UZ(14,"ion-icon",44),e.qZA()()()}if(2&o){const t=e.oxw().$implicit,r=e.oxw();e.xp6(2),e.hij(" ",t.title," "),e.xp6(2),e.Q6J("innerHTML",t.content,e.oJD),e.xp6(4),e.hij(" ",t.price," "),e.xp6(2),e.hij(" ",t.price," "),e.xp6(2),e.Q6J("ngIf",r.editnumber!==t.id&&0==r.editnumber)}}function M(o,i){if(1&o&&(e.TgZ(0,"ion-list"),e.YNc(1,A,21,8,"ion-row",34),e.YNc(2,U,15,5,"ion-row",7),e.qZA()),2&o){const t=i.$implicit,r=e.oxw();e.xp6(1),e.Q6J("ngIf",r.editnumber==t.id),e.xp6(1),e.Q6J("ngIf",r.editnumber!==t.id)}}function C(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-button",47),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.valide())}),e._uU(1," Valider "),e.qZA()}}function S(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-button",48),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.editPage())}),e._uU(1," Modifier le statut "),e.qZA()}}function q(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-button",48),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.editPage())}),e._uU(1," Modifier le statut "),e.qZA()}}function D(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-button",48),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.editPage())}),e._uU(1," Modifier le statut "),e.qZA()}}function J(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-list")(1,"ion-select",49),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.InvoiceStatus=n)}),e.TgZ(2,"ion-select-option",50),e._uU(3," Valid\xe9e "),e.qZA(),e.TgZ(4,"ion-select-option",51),e._uU(5," Pay\xe9e "),e.qZA(),e.TgZ(6,"ion-select-option",52),e._uU(7," Annul\xe9e "),e.qZA()(),e.TgZ(8,"ion-button",47),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.updateSatut())}),e._uU(9," Enregistrer "),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngModel",t.InvoiceStatus)}}class _{constructor(i,t,r,n,l,s,k,Q){Object.defineProperty(this,"navCtrl",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(this,"popoverCtrl",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"alertController",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"route",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"loadingController",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(this,"redditService",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(this,"router",{enumerable:!0,configurable:!0,writable:!0,value:k}),Object.defineProperty(this,"toastCtrl",{enumerable:!0,configurable:!0,writable:!0,value:Q}),Object.defineProperty(this,"editorValue",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"config",{enumerable:!0,configurable:!0,writable:!0,value:{placeholder:"",tabsize:2,height:200,uploadImagePath:"/api/upload",toolbar:[["misc",["codeview","undo","redo"]],["style",["bold","italic","underline","clear"]],["font",["bold","italic","underline","strikethrough","superscript","subscript","clear"]],["fontsize",["fontname","fontsize","color"]],["para",["style","ul","ol","paragraph","height"]]],fontNames:["Helvetica","Arial","Arial Black","Comic Sans MS","Courier New","Times"]}}),Object.defineProperty(this,"table",{enumerable:!0,configurable:!0,writable:!0,value:"invoices"}),Object.defineProperty(this,"table2",{enumerable:!0,configurable:!0,writable:!0,value:"projects_byuser/"}),Object.defineProperty(this,"table3",{enumerable:!0,configurable:!0,writable:!0,value:"invoiceid"}),Object.defineProperty(this,"table5",{enumerable:!0,configurable:!0,writable:!0,value:"updateInvoiceId"}),Object.defineProperty(this,"table6",{enumerable:!0,configurable:!0,writable:!0,value:"invoicesend"}),Object.defineProperty(this,"table7",{enumerable:!0,configurable:!0,writable:!0,value:"addItemInvoice"}),Object.defineProperty(this,"table8",{enumerable:!0,configurable:!0,writable:!0,value:"updateAllprice"}),Object.defineProperty(this,"table9",{enumerable:!0,configurable:!0,writable:!0,value:"invoices"}),Object.defineProperty(this,"table10",{enumerable:!0,configurable:!0,writable:!0,value:"users"}),Object.defineProperty(this,"view",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"push",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"posts",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"priority",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"firstname",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastname",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"email",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"user",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"namebank",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dombank",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"iban",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rib",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bic",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"profilid",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"profilId",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"edit2",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"editnumber",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"ItemName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"iditem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ItemDesc",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ItemPrice",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ItemTotal",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ItemQuantity",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"Quantity",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"idinvoiceuser",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"InvoiceID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ItemTax1",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"company",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"DueDate",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"postsTotal",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"city",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"InvoiceStatus",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"items",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"SubTotal",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"valuePrice",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"invoice",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}ngOnInit(){this.route.params.subscribe(i=>{this.id=i.id,this.getdata()})}getdata(){return(0,a.mG)(this,void 0,void 0,function*(){this.redditService.getByid(this.table,this.id).subscribe(i=>{this.posts=[i][0],console.log(this.posts),this.items=this.posts.items,this.invoice=this.posts.invoice,this.idinvoiceuser=this.invoice.CustomerID,this.InvoiceID=this.invoice.InvoiceID,this.ItemTax1=this.invoice.ItemTax1,this.DueDate=this.invoice.DueDate,this.InvoiceStatus=this.invoice.InvoiceStatus,this.getTotal(),this.getuser()})})}getTotal(){return(0,a.mG)(this,void 0,void 0,function*(){this.SubTotal=0,this.items.forEach(i=>{this.valuePrice=i.price,this.SubTotal=this.SubTotal+this.valuePrice}),console.log(this.SubTotal)})}getuser(){return(0,a.mG)(this,void 0,void 0,function*(){this.redditService.getByid(this.table10,this.idinvoiceuser).subscribe(i=>{this.user=i})})}valide(){return(0,a.mG)(this,void 0,void 0,function*(){this.redditService.update(this.table,this.id,{InvoiceStatus:1,SubTotal:this.SubTotal,Total:this.SubTotal}).subscribe(t=>(0,a.mG)(this,void 0,void 0,function*(){console.log(t),setTimeout(()=>{this.getdata()},1e3)}))})}updateSatut(){return(0,a.mG)(this,void 0,void 0,function*(){this.redditService.update(this.table,this.id,{InvoiceStatus:this.InvoiceStatus,SubTotal:this.SubTotal,Total:this.SubTotal}).subscribe(t=>(0,a.mG)(this,void 0,void 0,function*(){console.log(t),setTimeout(()=>{this.editPage(),this.getdata()},1e3)}))})}editPage(){return(0,a.mG)(this,void 0,void 0,function*(){this.edit=!this.edit})}doSaveItem(){return(0,a.mG)(this,void 0,void 0,function*(){this.editnumber=0,this.getdata()})}editItem(i,t){return(0,a.mG)(this,void 0,void 0,function*(){console.log(t.id),this.editnumber=t.id,this.ItemName=t.ItemName,this.ItemDesc=t.ItemDesc,this.ItemTotal=t.ItemTotal,this.ItemQuantity=t.Quantity})}saveItem(i,t){return(0,a.mG)(this,void 0,void 0,function*(){this.iditem=t.id,this.redditService.updateinvoice(this.table5,this.iditem,{ItemName:this.ItemName,ItemDesc:this.ItemDesc,ItemTotal:this.ItemTotal,Quantity:this.ItemQuantity,InvoiceID:this.InvoiceID}).toPromise().then(n=>{this.updateAllprice(),setTimeout(()=>{this.getdata(),this.editnumber=0},600)})})}updateAllprice(){return(0,a.mG)(this,void 0,void 0,function*(){this.redditService.updateByid(this.table8,{InvoiceID:this.InvoiceID,ItemTax1:this.ItemTax1,DueDate:this.DueDate,InvoiceStatus:this.InvoiceStatus}).subscribe(t=>(0,a.mG)(this,void 0,void 0,function*(){setTimeout(()=>{this.getdata()},1e3)}))})}update(){return(0,a.mG)(this,void 0,void 0,function*(){this.redditService.updateByid(this.table8,{InvoiceID:this.InvoiceID,ItemTax1:this.ItemTax1,DueDate:this.DueDate,InvoiceStatus:this.InvoiceStatus}).subscribe(t=>(0,a.mG)(this,void 0,void 0,function*(){setTimeout(()=>{this.getdata()},1e3)}))})}editInvoiceSetting(){return(0,a.mG)(this,void 0,void 0,function*(){this.edit2=!this.edit2,console.log(this.edit2)})}SaveInvoiceSetting(){return(0,a.mG)(this,void 0,void 0,function*(){this.update(),this.edit2=!this.edit2,console.log(this.edit2)})}invoicesend(){return(0,a.mG)(this,void 0,void 0,function*(){const i=yield this.loadingController.create({message:"Envoi en cours"});i.present(),console.log(this.id),this.redditService.sendByid(this.table6,this.id).toPromise().then(t=>{console.log(t),setTimeout(()=>{this.getdata(),setTimeout(()=>{i.dismiss()},1300)},400)})})}addItem(){return(0,a.mG)(this,void 0,void 0,function*(){var i=JSON.stringify({InvoiceID:this.InvoiceID,CustomerID:this.idinvoiceuser,ItemPrice:1,Quantity:1,ItemName:"Nouveau produit",ItemDesc:"Description",ItemTotal:1,ItemTax1:this.ItemTax1,InvoiceStatus:"Overdue",DueDate:this.DueDate});this.redditService.addPost(this.table7,i).subscribe(t=>(0,a.mG)(this,void 0,void 0,function*(){console.log(t),setTimeout(()=>{this.getdata()},1e3)}))})}deleteItem(i,t){return(0,a.mG)(this,void 0,void 0,function*(){this.iditem=t.id,yield(yield this.alertController.create({header:"Supprimer",message:"Voulez-vous vraiment ? ",buttons:[{text:"Annuler",role:"cancel",cssClass:"secondary",handler:n=>{}},{text:"Oui",handler:()=>{this.redditService.delete(this.table9,this.iditem).toPromise().then(n=>{console.log(n),this.updateAllprice(),setTimeout(()=>{this.getdata()},500)})}}]})).present()})}}Object.defineProperty(_,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(i){return new(i||_)(e.Y36(u.SH),e.Y36(u.Dh),e.Y36(u.Br),e.Y36(m.gz),e.Y36(u.HT),e.Y36(f.I),e.Y36(m.F0),e.Y36(u.yF))}}),Object.defineProperty(_,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:e.Xpm({type:_,selectors:[["app-invoice"]],decls:69,vars:21,consts:[["color","secondary"],["slot","start","color","primary"],["color","primary"],["class","item-note","slot","end",4,"ngIf"],["color","light","slot","start",4,"ngIf"],["color","success","slot","start",4,"ngIf"],["color","primary","slot","start",4,"ngIf"],[4,"ngIf"],["display","none",4,"ngIf"],["padding",""],["size","2"],["size","6"],["size","1"],[4,"ngFor","ngForOf"],["color","primary","size","small",2,"display","none",3,"click"],["name","add-circle-outline"],["size","8"],["size","10"],["color","primary","expand","block",3,"click",4,"ngIf"],["color","primary","expand","block","fill","outline",3,"click",4,"ngIf"],["slot","end",1,"item-note"],["color","danger","size","medium","target","_blank",3,"href"],["color","success","size","medium",3,"click"],["color","light","slot","start"],["color","success","slot","start"],["color","primary","slot","start"],["size","6",4,"ngFor","ngForOf"],["fill","outline"],["display","none"],["position","floating"],["placeholder","Enter text","type","number",3,"ngModel","ngModelChange"],["type","date",3,"ngModel","ngModelChange"],["color","success","size","small",3,"click"],["name","save-outline"],["style","padding-top: 3px;",4,"ngIf"],[2,"padding-top","3px"],[1,"roundedInput"],[3,"autoGrow","ngModel","ngModelChange"],["fill","outline",1,"roundedInput"],["color","success","size","small",3,"click",4,"ngIf"],[3,"innerHTML"],["size","1",2,"display","none"],["color","primary","size","small",3,"click",4,"ngIf"],["ion-button","","outline","","item-end","","size","small","color","secondary",3,"click"],["name","trash-outline"],["color","primary","size","small",3,"click"],["name","create-outline"],["color","primary","expand","block",3,"click"],["color","primary","expand","block","fill","outline",3,"click"],["label","Default label","placeholder","Choisir","multiple","false","okText","Ok","cancelText","Annuler",3,"ngModel","ngModelChange"],["value","1",1,"select-full-width"],["value","2",1,"select-full-width"],["value","3",1,"select-full-width"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA(),e.TgZ(4,"ion-title",2),e._uU(5," Facture "),e.qZA()()(),e.TgZ(6,"ion-content")(7,"ion-item"),e._uU(8),e.YNc(9,h,5,1,"div",3),e.qZA(),e.TgZ(10,"ion-item"),e.YNc(11,I,2,0,"ion-badge",4),e.YNc(12,T,2,0,"ion-badge",5),e.YNc(13,Z,2,0,"ion-badge",6),e.YNc(14,x,2,0,"ion-badge",4),e.qZA(),e.YNc(15,w,9,3,"ion-row",7),e.YNc(16,y,23,6,"ion-row",8),e.TgZ(17,"ion-grid",9)(18,"ion-row")(19,"ion-col",10)(20,"b"),e._uU(21,"Element"),e.qZA()(),e.TgZ(22,"ion-col",11)(23,"b"),e._uU(24,"Description"),e.qZA()(),e.TgZ(25,"ion-col",12)(26,"b"),e._uU(27,"Quantit\xe9"),e.qZA()(),e.TgZ(28,"ion-col",12)(29,"b"),e._uU(30,"Prix"),e.qZA()(),e.TgZ(31,"ion-col",10)(32,"b"),e._uU(33,"Total"),e.qZA()()(),e.YNc(34,M,3,2,"ion-list",13),e.TgZ(35,"ion-row")(36,"ion-col",10)(37,"ion-button",14),e.NdJ("click",function(){return t.addItem()}),e._UZ(38,"ion-icon",15),e._uU(39," Ajouter "),e.qZA()(),e._UZ(40,"ion-col",16),e.TgZ(41,"ion-col",12)(42,"b"),e._uU(43,"Sous Total"),e.qZA()(),e.TgZ(44,"ion-col",12)(45,"b"),e._uU(46),e.qZA()()(),e.TgZ(47,"ion-row"),e._UZ(48,"ion-col",17),e.TgZ(49,"ion-col",12)(50,"b"),e._uU(51),e.ALo(52,"number"),e.qZA()(),e.TgZ(53,"ion-col",12)(54,"b"),e._uU(55),e.qZA()()(),e.TgZ(56,"ion-row"),e._UZ(57,"ion-col",17),e.TgZ(58,"ion-col",12)(59,"b"),e._uU(60,"Total"),e.qZA()(),e.TgZ(61,"ion-col",12)(62,"b"),e._uU(63),e.qZA()()(),e.YNc(64,C,2,0,"ion-button",18),e.YNc(65,S,2,0,"ion-button",19),e.YNc(66,q,2,0,"ion-button",19),e.YNc(67,D,2,0,"ion-button",19),e.YNc(68,J,10,1,"ion-list",7),e.qZA()()),2&i&&(e.xp6(8),e.hij(" Facture_ID :",t.InvoiceID," "),e.xp6(1),e.Q6J("ngIf",t.InvoiceStatus>"0"),e.xp6(2),e.Q6J("ngIf","3"==t.InvoiceStatus),e.xp6(1),e.Q6J("ngIf","2"==t.InvoiceStatus),e.xp6(1),e.Q6J("ngIf","1"==t.InvoiceStatus),e.xp6(1),e.Q6J("ngIf","0"==t.InvoiceStatus),e.xp6(1),e.Q6J("ngIf",!t.edit2),e.xp6(1),e.Q6J("ngIf",t.edit2),e.xp6(18),e.Q6J("ngForOf",t.items),e.xp6(12),e.hij("",t.SubTotal," \u20ac"),e.xp6(5),e.hij("TVA ",e.xi3(52,18,t.ItemTax1,"1.0-1")," %"),e.xp6(4),e.hij("",t.ItemTax1," \u20ac"),e.xp6(8),e.hij("",t.SubTotal," \u20ac"),e.xp6(1),e.Q6J("ngIf",0==t.InvoiceStatus),e.xp6(1),e.Q6J("ngIf",1==t.InvoiceStatus),e.xp6(1),e.Q6J("ngIf",2==t.InvoiceStatus),e.xp6(1),e.Q6J("ngIf",3==t.InvoiceStatus),e.xp6(1),e.Q6J("ngIf",t.edit))},dependencies:[g.sg,g.O5,p.JJ,p.On,u.oU,u.yp,u.YG,u.Sm,u.wI,u.W2,u.jY,u.Gu,u.gu,u.pK,u.Ie,u.Q$,u.q_,u.Nd,u.t9,u.n0,u.g2,u.wd,u.sr,u.as,u.QI,u.j9,u.cs,g.JJ],styles:[".divider-blue[_ngcontent-%COMP%]{height:100px;border-radius:10px;background-color:#737474;padding-top:20px;text-align:center}.list-md[_ngcontent-%COMP%]{padding-top:20px;border-radius:10px;box-shadow:1px 1px 1px 2px #d7d7d7}h2[_ngcontent-%COMP%]{color:#fff}ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .roundedInput[_ngcontent-%COMP%]{--border-color: gray;--border-radius: 5px;--border-width: 2px;--box-shadow: 2px gray;--highlight-height: 0;--background: #f8f9fa;padding-right:10px}ion-textarea.custom-textarea[_ngcontent-%COMP%]{--background: #373737;--color: #fff;--padding-end: 10px;--padding-start: 10px;--placeholder-color: #ddd;--placeholder-opacity: .8}ion-modal[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{height:90%}.sc-ion-alert-md[_ngcontent-%COMP%]   .alert-radio-label.sc-ion-alert-md[_ngcontent-%COMP%]{color:#2f2f2f}"]})});const N=[{path:"",component:_}];class d{}Object.defineProperty(d,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(i){return new(i||d)}}),Object.defineProperty(d,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:e.oAB({type:d})}),Object.defineProperty(d,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:e.cJS({imports:[m.Bz.forChild(N),m.Bz]})});var G=c(8375);class b{}Object.defineProperty(b,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:function(i){return new(i||b)}}),Object.defineProperty(b,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:e.oAB({type:b})}),Object.defineProperty(b,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:e.cJS({imports:[g.ez,p.u5,u.Pc,d,G.OI]})})}}]);