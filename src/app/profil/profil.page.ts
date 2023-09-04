import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild } from '@angular/core';
import { NavController, LoadingController, PopoverController, AlertController, ToastController, IonModal } from '@ionic/angular';
import { RedditService } from 'src/providers/reddit-service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayEventDetail } from '@ionic/core/components';
import { runInThisContext } from 'vm';

import { LocalService } from 'src/providers/local.service';
  
@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  
    @ViewChild(IonModal)
    modal!: IonModal;

    public editorValue: string = '';
    table: string="products";
    table1: string="users";
    table3: string="appointements";
    table2: string="projects_byuser";
    table4: string="appointementByUser";
    table5: string="getlocation";
    table6: string="saveappointement";
    table7: string="invoices";
    table8: string="invoicesByUser";
    table10: string="quotesByUser";
    table11: string="return";
    
    view:boolean=true;
    push: boolean=false;
    data: any;
    posts: any;
    image:string="";
    title: string="";
    url: string="";
    urlrewiting: string="";
    meta: string="";
    keyword: string="";
    keywords: any;
    deadlineTask: any;
    postdata: any;
    events: any;
    priority: any;
  
    firstname: any;
    lastname: any;
    email: any;
    user: any;
    namebank: any;
    dombank: any;
    iban: any;
    rib: any;
    bic: any;
    profilid: any;
    profilId: any;
  
    edit:boolean=false;
    edit2:boolean=false;
    edit3:boolean=false;
    edit4:boolean=false;
    edit5:boolean=false;
    edit6:boolean=false;

    segType: string = 'info';
    indicatif : string = '+33';
    phone: any;
    address: any;
    number:any = '';
    complement: any;
    city: any;
    cp: any;
    complemement: any;
    postall: any;
   
    name: any;
    contactList: any;
    partnerId: any;
    phonenew: any;
    firstnamenew: any;
    lastnamenew: any;
    emailnew: any;
    editcontactId: any;
    statuscontactedit: any;
    emailcontactedit: any;
    lastnamecontactedit: any;
    firstnamecontactedit: any;
    statuspartenaire: boolean=false;
    daycreatedAt: any;
    formaddphonetocontact:  boolean=false;

    contactId: any;
    addphone: any;
    indicatifnew:  string = '+33';
    addindicatif: string = '+33';
    phoneId: any;
    phonenumbertype: string = 'MOBILE';
    addtypephone:string = 'MOBILE';
    phonenumbertypenew:string = 'MOBILE';

    clientId: any;
    siren: any;
    id: any;
    files: any;
    formgroup!: FormGroup;
    validations_form!: FormGroup;
    datestart: Date= new Date();
    content: string="";
    iduser: any;
    phone_mobile: any;
    phone_number: any;
    company: any;
    notes: any;
    country: any;
    state: any;
    salutation: any;
    customer_type: any;
    shipping_cp: any;
    shipping_address: any;
    shipping_city: any;
    shipping_state: any;
    shipping_country: any;
    shipping_phone: any;
    billing_phone: any;
    tva_number: any;
    siret_number: any;
    role: any;
    client: boolean=false;
    listappointements: any;
    lat: any;
    lng: any;
    userstech: any;
    iduserselected: any;
    listinvoices: any;
    listquotes: any;
   
    catresult: any=[];
    page: number | undefined;
    per_page: number | undefined;
    order_id: string | undefined;
    order_by: string | undefined;
    category: string | undefined;
    status: string | undefined;
    filter: string | undefined;
    products: any;

  moyendepaiement: any;
  lastname_activite: any;
  firstname_activite: any;
  birthdate_activite: any;

  onStep3Form!: FormGroup;
  idinvoice: any;
  urlcheckout: string="";
  token: any;
  reponseToken: any;
  totalprice: number=0;
  amount1: number=0;
  amount2:number=0;
  amount3: number=0;
  priceTotal=0;
  nbselect=0;
  checkoutIntentId: any;

    constructor(
      private localStore: LocalService,
      public navCtrl: NavController, 
      public formBuilder: FormBuilder,
      public popoverCtrl: PopoverController,
      public alertController: AlertController,
      private route: ActivatedRoute,
      public LoadingController:LoadingController,  
      public redditService:RedditService, 
      private router: Router,  
      public toastCtrl: ToastController,) {
  
     }


    ngOnInit() {

      this.firstname_activite="";
      this.lastname_activite="";
      this.birthdate_activite="";
      this.moyendepaiement="";
      this.idinvoice="";
      this.edit3=false;
      this.catresult=[];

       this.onStep3Form = this.formBuilder.group({
        moyen: [[], [Validators.required, Validators.minLength(1)]],
        firstname_activite: ['', [Validators.required, Validators.minLength(1)]],
        lastname_activite: ['', [Validators.required, Validators.minLength(1)]],
        birthdate_activite: ['', [Validators.required, Validators.minLength(5)]]

       })
    
      this.iduser = this.localStore.getItem('iduser');
      console.log("--------IDUSER-------"); 
      console.log(this.iduser); 
      this.role = this.localStore.getItem('role');
      this.getdata(); 
      this.getAppointementsByUser();
      this.getInvoicesByUser();
      //this.getAllproducts();
       
     }
  

     

     doSavePaiement(){

      var data = JSON.stringify({ 
          checkoutIntentId: this.checkoutIntentId,
          userid: this.iduser,
          code: 0
      });
    
      this.redditService.addPost(this.table11, data)  
      .subscribe((response) => {
        console.log(response); 
        this.totalprice=0;
      })
      }

  

  async goPaiement() {
    this.redditService.gettokenhelloasso().subscribe(data=>{
      console.log(JSON.parse(data));
      this.reponseToken =JSON.parse(data);
      this.token=this.reponseToken.access_token;
      console.log(this.token);
    })       
   }


   async goPaiement1() {
    this.totalprice= this.totalprice*100
    console.log(this.totalprice); 
 
    var data2 = JSON.stringify({ 
      
        "totalAmount": this.totalprice,
        "initialAmount": this.totalprice,
        "itemName": "Adhésion MéryForme",
        "backUrl": "https://www.inscription.meryforme.fr/",
        "errorUrl": "https://www.inscription.meryforme.fr/",
        "returnUrl": "https://www.inscription.meryforme.fr/",
        "containsDonation": false,
        "payer": {
          "firstName":this.firstname,
          "lastName": this.lastname,
          "email": this.email
        },
        "trackingParameter": this.iduser
      }); 
     
     this.redditService.sendPaiementHelloasso(this.token, data2)
       .subscribe(async (response) => {
         console.log(response);
         console.log(response.redirectUrl);

         this.checkoutIntentId=response.id;
         this.urlcheckout="response.redirectUrl";
         window.open(response.redirectUrl, 'location=yes');
       //  this.doSavePaiement();
         this.editpage4();
         },
         (error) => { // observer.error() brings you here
          console.log(error); 
        });
   }







   async goPaiement2() {
   
    this.totalprice= this.totalprice*100
    console.log(this.totalprice); 
 
    var data2 = JSON.stringify({ 
      "totalAmount": this.totalprice,
      "initialAmount": this.totalprice,
      "itemName": "Adhésion MéryForme",
      "backUrl": "https://www.inscription.meryforme.fr/",
      "errorUrl": "https://www.inscription.meryforme.fr/",
      "returnUrl":  "https://www.inscription.meryforme.fr/",
      "containsDonation": false,
      "payer": {
        "firstName":this.firstname,
        "lastName": this.lastname,
        "email": this.email
      },
      "trackingParameter": this.iduser
    }); 
     
     this.redditService.sendPaiementHelloasso(this.token, data2)
       .subscribe(async (response) => {
         console.log(response);
         window.open(response.redirectUrl, 'location=yes');
         this.editpage5();


         setTimeout(() => { 
          this.totalprice=0;
          }, 400); 

         })
   
       
   }




   async goPaiement3() {

    this.totalprice= this.totalprice*100;
    this.amount3= this.totalprice/3
    this.amount3 = Math.floor( this.amount3);
    // this.password2=Md5.hashStr(this.password);
    console.log( this.amount3);
 
    var data2 = JSON.stringify({ 
      
        "totalAmount": this.totalprice,
        "initialAmount": this.amount3,
        "itemName": "Adhésion MéryForme",
        "backUrl": "https://www.inscription.meryforme.fr/",
        "errorUrl": "https://www.inscription.meryforme.fr/",
        "returnUrl":  "https://www.inscription.meryforme.fr/",
        "containsDonation": false,
        "terms": [
          {
            "amount": this.amount3,
            "date": "2023-09-26T00:00:00+02:00"
          },
          {
            "amount": this.amount3,
            "date": "2023-10-26T00:00:00+02:00"
          }
        ],
        "trackingParameter": this.iduser,
        "metadata": {
          "reference": this.iduser,
          "libelle": "Adhésion MéryForme 3X",
          "userId": this.iduser,

        },
      
      }); 
     
     this.redditService.sendPaiementHelloasso(this.token, data2)
     .subscribe(async (response) => {
       console.log(response);
       window.open(response.redirectUrl, 'location=yes');
       this.editpage5()

       setTimeout(() => { 
        this.totalprice=0;
        this.amount3=0;
        }, 400); 
       })
   
       
   }


   async goPaiement4() {
    setTimeout(() => { 
    this.getAppointementsByUser();    
     // this.getInvoicesByUser();  
     // this.editpage3();
     this.edit3=!this.edit3;
     this.edit5=!this.edit5;
      this.idinvoice="";
     }, 2000); 
   }  
   
   
      
   async  doSaveUser() {
    var data = {
     id:this.id,
     salutation: this.salutation,
     firstname: this.firstname,
     lastname: this.lastname,
     address: this.address,
     cp:this.cp,
     city: this.city,
     state: this.state,
     country: this.country,
     phone_mobile: this.phone_mobile,
     phone_number: this.phone_number,
     company: this.company,
     customer_type: this.customer_type,
     notes: this.notes,
     lat:this.lat, 
     lng:this.lng
   }
   console.log(data); 


   this.redditService.update(this.table1,this.iduser,data) 
   .toPromise()
   .then(async (response) =>
   {console.log(response);
   setTimeout(() => { 
   this.editpage();
   this.getdata();
   }, 400); 
          
 })}
         

 async getdata() {
  this.redditService.getByid(this.table1, this.iduser).subscribe(data=>{
    console.log(data);
      this.posts = data;

      this.role= data[0].role;
      if(data[0].role==1){  this.client= true  }; 
      this.salutation= data[0].salutation;
      this.firstname = data[0].firstname;
      this.lastname = data[0].lastname;
      this.address = data[0].address;
      this.cp = data[0].cp;
      this.city = data[0].city;
      this.state = data[0].state;
      this.country= data[0].country;            
      this.phone_mobile = data[0].phone_mobile;
      this.phone_number = data[0].phone_number;
      this.company = data[0].company;
      this.customer_type = data[0].customer_type;
      this.notes = data[0].notes;

      this.shipping_address = data[0].shipping_address;
      this.shipping_cp = data[0].shipping_cp;
      this.shipping_city = data[0].shipping_city;
      this.shipping_state = data[0].shipping_state;
      this.shipping_country= data[0].shipping_country;            
      this.shipping_phone= data[0].shipping_phone;
      this.billing_phone = data[0].billing_phone;
      this.tva_number= data[0].tva_number;
      this.siret_number= data[0].siret_number;
      this.lat= data[0].lat;
      this.lng= data[0].lng;
  
    })
 }


async getAppointementsByUser() {
  this.redditService.getByid(this.table4, this.iduser).subscribe(data=>{
      this.listappointements = data;
  })
 }


async getInvoicesByUser() {
this.redditService.getByid(this.table8, this.iduser).subscribe(data=>{
this.listinvoices = data; 
})
}


cancel() {
  this.modal.dismiss(null, 'cancel');
}


onWillDismiss(event: Event) {
  const ev = event as CustomEvent<OverlayEventDetail<string>>;
  if (ev.detail.role === 'confirm') {
  }
}

async doCreatedInvoice(){

  const loader = await this.LoadingController.create({
  message: 'Enregistrement' });
  loader.present();
  var data = JSON.stringify({ 
    CustomerID: this.iduser,
    ItemPrice : 0.00,
    Quantity:0.00, 
    ItemName:"Facture", 
    ItemDesc:"Abonnement",
    ItemTotal:0.00,
    ItemTax1:0.00,
    InvoiceStatus:0
    });

     console.log(data);
    this.redditService.addPost(this.table7,data)  
    .subscribe(async (response) => {
    this.idinvoice=response.id; 
    this.totalprice=0; 



    this.catresult.forEach( (value: any) => {
    var data = JSON.stringify({ 
      start_at: this.datestart,
      state: 3,
      user_id: this.iduser,
      title:value.title+"  "+"Abonnement 2023/2024",
      content:value.content+" - "+value.price+" €"+" - "+value.intervenant,
      id: value.id,
      idproduct: value.id,
      firstname_activite: this.firstname_activite,
      lastname_activite: this.lastname_activite,
      birthdate_activite: this.birthdate_activite,
      moyendepaiement:JSON.stringify(this.moyendepaiement),
      price:value.price,
      idinvoice:this.idinvoice
      });

    console.log(data); 

     this.totalprice=this.totalprice+value.price;
      this.redditService.addPost(this.table3,data).subscribe(async (response) => {
       console.log(response); 
      })
    }); 





    setTimeout(() => { 
      loader.dismiss();

      this.goPaiement();  
      this.edit5=true;
      this.edit6=false;
      this.edit3=false;
      this.idinvoice="";
     }, 2000); 

    })
  }
  

async getAllproducts(){
  this.page=1;
  this.per_page=100;
  this.order_id="id"
  this.order_by="ASC";
  this.category="";
  this.status="";
  this.filter="";
  this.redditService.getDataBypage(this.page,this.table,this.per_page,this.order_id,this.order_by,this.category,this.status,this.filter).subscribe(data => {
  this.products=data.data;
  console.log(this.products);
})
}  

searchTech(){
    this.getAllproducts();
}

async add(event: any,item: any) {
    this.catresult.push(item); 
    setTimeout(() => { 
      this.nbselect==this.catresult.length;
     }, 1000); 
    this.edit6=true;
    this.modal.dismiss(null, 'cancel');
}

async editpage() {
    this.edit=!this.edit;
}

async editpage2() {
    this.edit2=!this.edit2;
}

async editpage3() {
    this.edit3=!this.edit3;
    this.catresult=[];
}

async editpage4() {
  this.edit4=!this.edit4;
  this.goPaiement();
}

async editpage4close() {
this.edit4=!this.edit4;
this.priceTotal=0;
}


async editpage5() {
this.edit5=!this.edit5;
setTimeout(() => { 
  this.getAppointementsByUser();
 }, 1000); 

}




}

