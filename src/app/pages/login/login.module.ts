import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import {File} from '@ionic-native/file/ngx'
import { Keyboard } from '@ionic-native/keyboard/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,


  
  
  ],
  declarations: [LoginPage],
  providers:[
  File,
  Keyboard
  ] 

})
export class LoginPageModule {}
