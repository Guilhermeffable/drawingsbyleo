import Amplify from '@aws-amplify/core';
import { Storage, API, graphqlOperation } from 'aws-amplify';

import { v4 as uuid } from 'uuid';

import {
    createDrawing as CreateDrawing,
    deleteDrawing as DeleteDrawing
} from '../graphql/mutations';
import { listDrawings as ListDrawings } from '../graphql/queries';
import config from '../aws-exports';

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config;

export function configureAmplify() {
    Amplify.configure(config);
}

export const listDrawings = async () => {
    const drawings = await API.graphql(graphqlOperation(ListDrawings));

    const drawingswithKey = drawings.data.listDrawings.items.filter(
        (drawing) => drawing.key !== null
    );

    return drawingswithKey;
};

export const createDrawing = async (file) => {
    const fileName = file.name.split('.')[0];
    const extension = file.name.split('.')[1];

    if (file) {
        const { type: mimeType } = file;
        const key = `images/${uuid()}${fileName}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
        const inputData = { name: fileName, image: url, key: key };
        try {
            await Storage.put(key, file, {
                contentType: mimeType
            });
            await API.graphql(
                graphqlOperation(CreateDrawing, { input: inputData })
            );
        } catch (err) {
            console.log('error: ', err);
        }
    }
};

export const deleteDrawing = async (image) => {
    const inputData = { id: image.id };

    try {
        await Storage.remove(image.key);

        await API.graphql(
            graphqlOperation(DeleteDrawing, { input: inputData })
        );
    } catch (error) {
        console.error(error);
    }
};
