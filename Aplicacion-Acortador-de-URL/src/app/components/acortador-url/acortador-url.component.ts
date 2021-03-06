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

    // Validar si la url es vacia ''
    if(this.nombreURL === '') {
     this.error('Por favor ingrese una URL');

      return;
    }

    this.urlProcesado = false;
    this.loading = true;

    setTimeout(() => {
      this.obtenerUrlAcortado();
    }, 4000);

  
  }

  obtenerUrlAcortado() {
    this.acortadorUrlService.getUrlAcortador(this.nombreURL).subscribe(data => {
      this.loading = false;
      this.urlProcesado = true;
      this.urlAcortado = data.link;
    }, error => {
      this.loading = false;
      this.nombreURL = '';
      console.log(error);
      if(error.error.description === 'The value provided is invalid.')  {
        this.error('La URL ingresada es invalida')
      }
    })
  }

  error(valor: string) {
    this.mostrarError = true;
    this.textError = valor;

    // Mostramos error por 4 segundos
    setTimeout(() => {
      this.mostrarError = false;
    }, 4000);
  }
}

