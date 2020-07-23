import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { LoginServiceService } from './login-service.service';
import { File } from '@ionic-native/file/ngx'
import { NavController } from '@ionic/angular'
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;
  @ViewChild(IonSlides) slides: IonSlides;
  public wavesPosition: number = 0;
  private wavesDifference: number = 100;
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;
  presentLoading: any;

  constructor(public Keyboard: Keyboard,
    private service: LoginServiceService,
    private nav: NavController,
    private loadingCrtl: LoadingController,
    private toastCrtl: ToastController,
    private authService: AuthService,
    public http:HttpClientModule

  ) { }

  ngOnInit() {

  }

  segmentChanged(event: any) {
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }
  }

  BuscaCep(){
    
  }


  async login() {
      await this.presentLoadingWithOptions();
    try {
      await this.authService.login(this.userLogin);
      this.nav.navigateForward("/home")
      } catch (error) {
        console.error(error);
  
        this.presentToast(error.message); 
      } finally {
        this.loading.dismiss();
      }
    //this.nav.navigateForward("/home")
  }

  async register() {
    await this.presentLoadingWithOptions();
    try {
    await this.authService.register(this.userRegister);
    } catch (error) {
      console.error(error);

      this.presentToast(error.message); 
    } finally {
      this.loading.dismiss();
    }

  }
  async presentLoadingWithOptions() {
    this.loading = await this.loadingCrtl.create({
      message: 'Por Favor, aguarde...',
    });
    return await this.loading.present();
  }
  async presentToast(message:string) {
    const toast = await this.toastCrtl.create({ message,duration: 2000});
    toast.present();
  }

  
}
