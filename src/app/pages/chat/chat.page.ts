import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
	selector: 'app-chat',
	templateUrl: './chat.page.html',
	styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
	lista: any[];
	mensagem: string;

	constructor(private nav: NavController){ 
		this.lista = [];
	}
	
	ngOnInit() {}
	
	enviar(){
		let m = {
			texto: this.mensagem,
			data: new Date()
		};

		this.lista.push(m);
		this.mensagem = "";
	}

	voltar(){
		this.nav.navigateBack("/home");
	}
}
