import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Query {
    countries: [countries]
  }

  type countries {
    id: ID!
    country: String
    year: String
    area: Int
    population: Int
  }

  type Mutation {
    createCountry(
      country: String
      year: String
      area: Int
      population: Int
    ): countries
  }
`;
