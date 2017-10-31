import { ViCarePage } from './app.po';

describe('vi-care App', () => {
  let page: ViCarePage;

  beforeEach(() => {
    page = new ViCarePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
