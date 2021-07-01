/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDrawing = /* GraphQL */ `
  query GetDrawing($id: ID!) {
    getDrawing(id: $id) {
      id
      name
      description
      image
      key
      createdAt
      updatedAt
    }
  }
`;
export const listDrawings = /* GraphQL */ `
  query ListDrawings(
    $filter: ModelDrawingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrawings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        key
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
