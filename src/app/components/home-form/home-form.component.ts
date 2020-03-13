import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  getReglamentoPDF() {
    const pdfUrl = '../../../assets/REGLAMENTO.pdf';
    const pdfName = 'REGLAMENTO';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
  getListaBuenaFePDF(){
    const pdfUrl = '../../../assets/Lista\ de\ buena\ fe.pdf';
    const pdfName = 'Lista de buena fe';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
  getMapa(){
    const jpegUrl = '../../../assets/mapa.jpeg';
    const jpegName = 'Mapa Canchas';
    FileSaver.saveAs(jpegUrl, jpegName);
  }
  

}
