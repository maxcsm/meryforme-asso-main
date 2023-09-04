import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from 'src/providers/authentication.service';

import { ReturnPage } from './return/return.page';
import { LoginPage } from './login/login.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appClient = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Profil', url: '/profil', icon: 'person' },
  ];

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Profil', url: '/profil', icon: 'person' },
    { title: 'Clients', url: '/customers', icon: 'person' },
    { title: 'Factures', url: '/invoices', icon: 'document-text' },
    { title: 'Abonnements', url: '/appointements', icon: 'document' },
    { title: 'Activités', url: '/products', icon: 'document' },
  ];
  public labels = ['Divers'];
  firstname: any;
  lastname: any;
  role: any;
  constructor(   
    private platform: Platform,
    // private splashScreen: SplashScreen,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    private authenticationService: AuthenticationService,
    public menu: MenuController,
    private storage: Storage
  
) {

    this.initializeApp();
  }



  initializeApp() {


    this.menu.enable(false);
   // this.menu.enable(false, 'menu1');

    this.platform.ready().then(() => {
   // this.router.navigate(['/login']);     
        
  
    });
  }



  async logout() {


    const alert = await this.alertController.create({
      header: 'Déconnexion',
      subHeader: '',
      message: 'Voulez-vous vraiment déconnecter ?',
      buttons: [{
        text: 'Ok',
        cssClass: 'primary',
        handler: (blah) => {
          console.log('Confirm Ok: blah');
     
          this.authenticationService.logout();
           setTimeout(() => { 
       
           
          this.menu.enable(false);
           this.router.navigateByUrl('/login');
         }, 1000); 
        }
      },
      {
        text: 'Annuler',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }
    ]
    });

    await alert.present();
  }
}
