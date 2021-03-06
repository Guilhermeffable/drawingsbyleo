/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDrawing = /* GraphQL */ `
    mutation CreateDrawing(
        $input: CreateDrawingInput!
        $condition: ModelDrawingConditionInput
    ) {
        createDrawing(input: $input, condition: $condition) {
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
export const updateDrawing = /* GraphQL */ `
    mutation UpdateDrawing(
        $input: UpdateDrawingInput!
        $condition: ModelDrawingConditionInput
    ) {
        updateDrawing(input: $input, condition: $condition) {
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
export const deleteDrawing = /* GraphQL */ `
    mutation DeleteDrawing(
        $input: DeleteDrawingInput!
        $condition: ModelDrawingConditionInput
    ) {
        deleteDrawing(input: $input, condition: $condition) {
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
