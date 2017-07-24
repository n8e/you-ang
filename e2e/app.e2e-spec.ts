import { PostaPage } from './app.po';

describe('posta App', () => {
  let page: PostaPage;

  beforeEach(() => {
    page = new PostaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
