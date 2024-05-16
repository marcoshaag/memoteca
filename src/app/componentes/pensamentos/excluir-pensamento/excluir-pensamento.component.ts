import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamentos } from '../pensamento';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamentos: Pensamentos[] = [];

  constructor(
    private Pensamentoservice: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.descobriri);
  }

  descobriri () : void {
    const id = this.route.snapshot.paramMap.get('id')
    this.Pensamentoservice.buscarPorId(parseInt(id!)).subscribe((pensamento) => {

    })
  }

  excluirPensamento(id: number) {
    this.Pensamentoservice.excluir(id).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }


  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
