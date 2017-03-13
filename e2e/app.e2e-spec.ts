import { WebComponentsPage } from './app.po';

describe('web-components App', () => {
  let page: WebComponentsPage;

  beforeEach(() => {
    page = new WebComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
