import { JsonController, Get } from 'routing-controllers';
import { CountryService } from '../services/CountryService';

@JsonController('/countries')
export class CountryController {

    constructor(
        private countryService: CountryService
    ) { }


/**
 *
 * @returns countries' name along with their currencies
 */
  @Get()
  public async getCountries(): Promise<any[]> {
    const countries = await this.countryService.getCountries();
    return countries;
  }

}
