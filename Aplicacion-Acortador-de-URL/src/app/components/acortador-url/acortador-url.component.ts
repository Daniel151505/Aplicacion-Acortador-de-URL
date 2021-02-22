import { Component, OnInit } from '@angular/core';
import { AcortadorUrlService } from 'src/app/services/acortador-url.service';

@Component({
  selector: 'app-acortador-url',
  templateUrl: './acortador-url.component.html',
  styleUrls: ['./acortador-url.component.css']
})
export class AcortadorUrlComponent implements OnInit {

  nombreURL: string = ''
  urlAcortado: string = ''
  urlProcesado: boolean = false
  loading: boolean = false

  constructor(private acortadorUrlService: AcortadorUrlService) {}

  ngOnInit(): void {
  }

  procesarURL() {
    this.urlProcesado = false
    this.loading = true

    setTimeout(() => {
      this.obtenerUrlAcortado()
    }, 3000);
  }

  obtenerUrlAcortado(){
     this.acortadorUrlService.getUrlAcortador(this.nombreURL).subscribe(data => {
      this.loading = false
      this.urlProcesado = true
      this.urlAcortado = data.link
    })
  }

}
