import { Selector } from 'testcafe';

export default class HomePage {
  successButton = 'button.do-success';
  failureButton = 'button.do-failure';

  logSelector = Selector('p.is-log');
  noteSelector = Selector('p.is-note');
  statusSelector = Selector('p.is-status');
}
