import { FlagSModule } from './flag-s.module';

describe('FlagSModule', () => {
  let flagSModule: FlagSModule;

  beforeEach(() => {
    flagSModule = new FlagSModule();
  });

  it('should create an instance', () => {
    expect(flagSModule).toBeTruthy();
  });
});
