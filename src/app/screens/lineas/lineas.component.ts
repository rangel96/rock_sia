import { Component } from '@angular/core';

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.component.html',
  styleUrls: ['./lineas.component.scss']
})
export class LineasComponent {

  folderList = [
    { name: 'Vida', fileCount: 11 },
    { name: 'Gastos médicos mayores', fileCount: 5 },
    { name: 'Autos', fileCount: 10 },
    { name: 'Hogar', fileCount: 12 },
    { name: 'Accidentes personales', fileCount: 5 },
    { name: 'Asistencias AARCO', fileCount: 12 },
    { name: 'AARCO go', fileCount: 5 },
  ];

  documentList = [
    {
      title: 'Asegurómetro líneas personales',
      subtitle: 'Aquí encontrarás el Ranking de Aseguradoras. Consúltalo.',
      date: '11/01/22'
    }, {
      title: 'Tiempos de respuesta',
      subtitle: 'Tiempos de respuesta (Líneas Personales)',
      date: '22/08/21'
    }, {
      title: 'Nuevo sitio personalizado',
      subtitle: 'Tiempos de respuesta (Líneas Personales)',
      date: '22/08/21'
    }, {
      title: 'Tiempos de respuesta',
      subtitle: 'Tiempos de respuesta (Líneas Personales)',
      date: '22/08/21'
    },
  ];

}
