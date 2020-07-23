import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import {LoginServiceService} from '../login/login-service.service';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public wavesPosition: number = 0;
  private wavesDifference: number = 100;
  cep:string
  rua:string
  bairro:string
  cidade:string
  constructor(public Keyboard:Keyboard,private service:LoginServiceService, private nav:NavController) { }
  
  ngOnInit(){}

  segmentChanged(event: any) {
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }
 }

  ValidaCep(event:any){
    this.cep = event.target.value 
    if (this.cep.length===8){
      let endereco = this.service.ConsultaCep(this.cep)
      this.rua = endereco.rua
      this.bairro = endereco.bairro
      this.cidade = endereco.cidade
    }
  }
  sair(){
    
    this.nav.navigateBack("/login")
  }

  chat(){
    this.nav.navigateForward("/chat")
  
  }
  servico(){
    this.nav.navigateForward("/produto")
  }

  faq(){
    this.nav.navigateForward("/faq")
  }

}
