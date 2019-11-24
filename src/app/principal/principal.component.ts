import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  constructor(private servico: ServicoService) { }

  public imagesUrl;

  ngOnInit() {
    this.imagesUrl = [
      '../assets/imagens/CF-3.png',
      '../assets/imagens/CF-1.png',
      '../assets/imagens/ELP.png',
      '../assets/imagens/Porta Bag Dian E1 e E2.png',
      '../assets/imagens/Porta Bag Tras E1 e E2.png',
      '../assets/imagens/Porta Pax Dian.png',
      '../assets/imagens/Porta Pax Tras.png',
      '../assets/imagens/Porta Serv Dian.png',
      '../assets/imagens/Porta Serv Tras.png'
    ];
  }
}
