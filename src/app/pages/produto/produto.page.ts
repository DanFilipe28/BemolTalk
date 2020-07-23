import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
  perguntas: string[] = [
		"SmartPhone Motorola E4 ",
		"Iphone X ",
		"XIAOMI Megatron 346GB ",
		"SmartPhone Motorola E4 ",
		"Iphone X ",
		"XIAOMI Megatron 346GB ",
		"SmartPhone Motorola E4 ",
		"Iphone X ",
		"XIAOMI Megatron 346GB "
	];

	respostas: string[] = [
		"Celular com as atualizações da NASA",
		"A mais nova tendêcia capitalista do momento",
		"Você não perderia essa novidade por nada , a mais nova tecnologia do século XXI",
		"Celular com as atualizações da NASA",
		"A mais nova tendêcia capitalista do momento",
		"Você não perderia essa novidade por nada , a mais nova tecnologia do século XXI",
		"Celular com as atualizações da NASA",
		"A mais nova tendêcia capitalista do momento",
		"Você não perderia essa novidade por nada , a mais nova tecnologia do século XXI"
	];

	faq: any[] = [];

  constructor(private nav:NavController) {
    this.gerarFAQ();
   }

 

  ngOnInit() {

  }

  gerarFAQ(){
		for(let i=0;i<this.perguntas.length;i++){
			let faq = {
				pergunta: this.perguntas[i],
				resposta: this.respostas[i]
			}

			this.faq.push(faq);
		}
	}
  voltar(){
    this.nav.navigateForward("/home")
  }
}
