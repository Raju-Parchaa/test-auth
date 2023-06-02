import { Test, TestingModule } from '@nestjs/testing';
import { ParchaaAuthService } from './auth.service';

describe('ParchaaAuthService', () => {
  let service: ParchaaAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParchaaAuthService],
    }).compile();

    service = module.get<ParchaaAuthService>(ParchaaAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
