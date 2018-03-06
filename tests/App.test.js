import { Selector } from 'testcafe';

fixture `App test`
  .page `http://localhost:3000/`;

const statusSelector = Selector('p.is-status');
const noteSelector = Selector('p.is-note');
const logSelector = Selector('p.is-log');

test('resolves when success button is clicked', async t => {
  const currentDate = new Date().toISOString().split('T')[0];

  await t
    .click('button.do-success')
    .expect(statusSelector.innerText).contains('Loading...')
    .expect(noteSelector.innerText).contains(`Output: ${currentDate}`);
});

test('rejects when failure button is clicked', async t => {
  await t
    .click('button.do-failure')
    .expect(statusSelector.innerText).contains('Loading...')
    .expect(logSelector.innerText).contains('Error: Boom!');
});
