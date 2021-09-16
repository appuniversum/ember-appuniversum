import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class extends Controller {
  @tracked selectedProvince = null;

  provinces = [
    { label: 'Antwerpen' },
    { label: 'Limburg' },
    { label: 'Oost-vlaanderen' },
    { label: 'Vlaams-Brabant' },
    { label: 'West-Vlaanderen' },
  ];
}
