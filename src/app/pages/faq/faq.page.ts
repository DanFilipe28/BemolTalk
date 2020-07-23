import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'
@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FAQPage implements OnInit {
  perguntas: string[] = [
		"Onde eu encontro o horário de funcionamento das lojas, farmácias e loterias?",
		"Se eu não quiser ir na loja, posso comprar por telefone?",
		"Onde consigo parar minhas prestações?",
		"Onde eu encontro o horário de funcionamento das lojas, farmácias e loterias?",
		"Se eu não quiser ir na loja, posso comprar por telefone?",
		"Onde consigo parar minhas prestações?",
		"Onde eu encontro o horário de funcionamento das lojas, farmácias e loterias?",
		"Se eu não quiser ir na loja, posso comprar por telefone?",
		"Onde consigo parar minhas prestações?"
	];

	respostas: string[] = [
		"Você pode acessar todos os horários de funcionamento das lojas, farmácias e loterias acessando esse link: <link aqui>",
		"Sim, você pode usar os nossos números de televenda",
		"Você pode pagar seus carnês nos caixas das lojas Bemol e Bemol Farma, no site www.bemol.com.br e nos postos de pagamento Drive-Thru",
		"Você pode acessar todos os horários de funcionamento das lojas, farmácias e loterias acessando esse link: <link aqui>",
		"Sim, você pode usar os nossos números de televenda",
		"Você pode pagar seus carnês nos caixas das lojas Bemol e Bemol Farma, no site www.bemol.com.br e nos postos de pagamento Drive-Thru",
		"Você pode acessar todos os horários de funcionamento das lojas, farmácias e loterias acessando esse link: <link aqui>",
		"Sim, você pode usar os nossos números de televenda",
		"Você pode pagar seus carnês nos caixas das lojas Bemol e Bemol Farma, no site www.bemol.com.br e nos postos de pagamento Drive-Thru"
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
