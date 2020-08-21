import gql from "graphql-tag";

export const QUERY_LAUNCH_LIST = gql`
    query LauchList {
        launches {
        flight_number
        mission_name
        launch_year
    }
  }
`;