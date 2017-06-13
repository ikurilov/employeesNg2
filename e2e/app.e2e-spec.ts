import { Employees2Page } from './app.po';

describe('employees2 App', () => {
  let page: Employees2Page;

  beforeEach(() => {
    page = new Employees2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
