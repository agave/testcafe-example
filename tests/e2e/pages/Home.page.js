import { Selector } from 'testcafe';

export default class HomePage {
  constructor() {
    this.successButton = 'button.do-success';
    this.failureButton = 'button.do-failure';

    this.logSelector = Selector('p.is-log');
    this.noteSelector = Selector('p.is-note');
    this.statusSelector = Selector('p.is-status');
  }
}
