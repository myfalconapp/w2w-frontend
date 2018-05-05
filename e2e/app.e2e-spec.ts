import { WhyToWaitPage } from './app.po';

describe('why-to-wait App', () => {
  let page: WhyToWaitPage;

  beforeEach(() => {
    page = new WhyToWaitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
