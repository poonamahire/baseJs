import { FirstloginModule } from './firstlogin.module';

describe('FirstloginModule', () => {
  let firstloginModule: FirstloginModule;

  beforeEach(() => {
    firstloginModule = new FirstloginModule();
  });

  it('should create an instance', () => {
    expect(firstloginModule).toBeTruthy();
  });
});
