import { Module, Global } from '@nestjs/common';
import { ConfigurationService } from './configuration/configuration/configuration.service';
import { MapperService } from './mapper/mapper/mapper.service';

@Global()
@Module({
  providers: [ConfigurationService, MapperService],
  exports:[ConfigurationService,MapperService]
})
export class SharedModule {
  
}
