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
  mostrarError: boolean = false
  textError: string = ''

  constructor(private acortadorUrlService: AcortadorUrlService) {}

  ngOnInit(): void {
  }

  procesarURL() {

    //Validando si la URL es vacia

    if (this.nombreURL === '') {
      this.mostrarError = true
      this.textError = 'Por favor Ingrese una url'
      
      //Mostrando Error por 4 segundos
      setTimeout(() => {
        this.mostrarError = false
      }, 4000 );
      
      return
    }

    this.urlProcesado = false
    this.loading = true

    setTimeout(() => {
      this.obtenerUrlAcortado();
    }, 3000);
  }

  obtenerUrlAcortado() {
    this.acortadorUrlService.getUrlAcortador(this.nombreURL).subscribe(data => {
      this.loading = false;
      this.urlProcesado = true;
      this.urlAcortado = data.link;
    })
  }


}



