import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
 
  constructor(private http: HttpClient) { }
  ConsultaCep(cep:string){
    //var validacep = /^[0-9]{8}$/;
    let endereco = {
      rua: null,
      bairro: null,
      cidade: null
    }
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
   this.http.get("https://viacep.com.br/ws/"+ cep +"/json/?callback=?",{headers:reqHeader}).subscribe(dados =>{
     console.log(dados) 
  /*  if (!("erro" in dados)) {
      //Atualiza os campos com os valores da consulta.
      endereco.rua = dados.logradouro
      endereco.bairro = dados.bairro
      endereco.cidade = dados.localidade
      
  } //end if.
  else {
      //CEP pesquisado não foi encontrado.
      alert("CEP não encontrado.");
  }*/
 
});
      return endereco
  }
}
