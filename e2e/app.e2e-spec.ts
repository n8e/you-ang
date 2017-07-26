import { YouangPage } from './app.po';

describe('you-ang App', () => {
  let page: YouangPage;

  beforeEach(() => {
    page = new YouangPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
