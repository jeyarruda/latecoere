import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';


@Component({
  selector: 'air-modules',
  templateUrl: './air-modules.component.html',
  styleUrls: ['./air-modules.component.css']
})
export class AirModulesComponent implements OnInit {

  constructor(private servico: ServicoService) { }

  ngOnInit() {
  }

}
