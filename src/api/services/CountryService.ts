import axios from 'axios';
import { Service } from 'typedi';

@Service()
export class CountryService {

  public async getCountries(): Promise<any[]> {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countries = response.data.map((country: any) => {
      return {
        name: country.name.common,
        currencies: Object.keys(country.currencies).map((key) => country.currencies[key].name),
      };
    });
    return countries;
  }

}
