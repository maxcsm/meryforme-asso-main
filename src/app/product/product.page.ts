import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild } from '@angular/core';
import { NavController, LoadingController, PopoverController, AlertController, ToastController, IonModal } from '@ionic/angular';
import { RedditService } from 'src/providers/reddit-service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { OverlayEventDetail } from '@ionic/core/components';
import { runInThisContext } from 'vm';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  @ViewChild(IonModal)
  formgroup!: FormGroup;
  validations_form!: FormGroup;
  datestart: Date= new Date();

  modal!: IonModal;
  private file!: File;
  public editorValue: string = '';

  table: string="products";
  view:boolean=true;
  push: boolean=false;
  data: any;
  posts: any;
  image:string="";

  url: string="";
  edit:boolean=false;
  edit2:boolean=false;
  id: any;
  files: any;


  title: string="";
  content: string="";
  price: any;
  age_max!: number;
  age_min!: number;
  autorisation_parentale: any;
  intervenant: any;
  nb_free: any;
  nb_places: any;

  constructor(
    public navCtrl: NavController, 
    public popoverCtrl: PopoverController,
    public alertController: AlertController,
    private route: ActivatedRoute,
    public loadingController:LoadingController,  
    public redditService:RedditService, 
    private router: Router,  
    public toastCtrl: ToastController) {

   }

  ngOnInit() {
   this.route.params.subscribe(params => {
      this.id= params['id']; 
      this.getdata(); 
     });
   }

     async getdata() {
      this.redditService.getByid(this.table, this.id).subscribe(data=>{
        console.log(data);
          this.posts = [data];
          this.title = this.posts[0].title;
          this.content = this.posts[0].content;
          this.url = this.posts[0].url;
          this.image = this.posts[0].image;
          this.price = this.posts[0].price;
          this.age_max=this.posts[0].age_max;
          this.age_min=this.posts[0].age_min;
          this.autorisation_parentale = this.posts[0].autorisation_parentale;
          console.log(this.autorisation_parentale);
          this.intervenant = this.posts[0].intervenant;
          this.nb_free = this.posts[0].nb_free;
          this.nb_places = this.posts[0].nb_places;
        })
     }

     async  doSave() {
     var data = {
      id:this.id,
     // salutation: this.salutation,
      title: this.title,
      content: this.content,
      url: this.url,
      image: this.image,
      price:this.price,
      age_min:this.age_min,
      age_max:this.age_max,
      autorisation_parentale:this.autorisation_parentale,
      nb_places:this.nb_places,
      nb_free:this.nb_free,
      intervenant:this.intervenant
    }
    console.log(data); 
    this.redditService.update(this.table,this.id,data) 
    .toPromise()
    .then((response) =>{
    console.log(response);
    setTimeout(() => { 
    this.router.navigateByUrl('/products');
    }, 600);       
    })}
          
    

 cancel() {
  this.modal.dismiss(null, 'cancel');
}



onFileChange(event:any) {
  this.file = event.target.files[0];
  console.log(this.file);
  this.submitForm()
;}

async submitForm() {
  let formData = new FormData();
  formData.append("image", this.file, this.file.name);
  formData.append("title", "Image ");
  console.log(formData); 
  this.redditService.uploadFormData(formData) 
  .toPromise()
  .then((response) =>
  { console.log(response);
    this.image=""+response.image;
    console.log(this.image); 
    setTimeout(() => { 
   }, 500); 
  })
}

  async editpage() {
    this.edit=!this.edit;
   }

  async editpage2() {
    this.edit2=!this.edit2;
  }



   onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
    }
  }


}