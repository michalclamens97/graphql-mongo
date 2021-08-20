import { Countries } from "./models/countries";
export const resolvers = {
  Query: {
    countries: () => Countries.find(),
  },

  Mutation: {
    createCountry: async (_, { country, year, area, population }) => {
      const countries = new Countries({
        country: country,
        year: year,
        area: area,
        population: population,
      });
      await countries.save();
      return countries;
    },
  },
};
