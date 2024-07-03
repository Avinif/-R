/// <reference types='cypress' />

import { addFilePage } from '../support/pages/AddFilePage';
import { startPage } from '../support/pages/StartPage';

describe('', () => {
  const filePath = '../support/test_certs/cert.cer';

  it('', () => {
    startPage.VisitStartPage();
    startPage.ClickStartBtn();
    addFilePage.ClickAddBtn();
    addFilePage.AddFile(filePath);

  });
});