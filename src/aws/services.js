import Amplify from '@aws-amplify/core';
import { Storage, API, graphqlOperation } from 'aws-amplify';

import { v4 as uuid } from 'uuid';

import {
    createDrawing as CreateDrawing,
    deleteDrawing as DeleteDrawing
} from '../graphql/mutations';
import { listDrawings as ListDrawings } from '../graphql/queries';

console.log(process.env.NODE_ENV);

let config;

if (process.env.NODE_ENV !== 'production') {
    config = {
        'aws_project_region': process.env.REACT_APP_AWS_PROJECT_REGION,
        'aws_appsync_graphqlEndpoint':
            process.env.REACT_APP_AWS_APPSYNC_GRAPHQLENDPOINT,
        'aws_appsync_region': process.env.REACT_APP_AWS_APPSYNC_REGION,
        'aws_appsync_authenticationType':
            process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATIONTYPE,
        'aws_appsync_apiKey': process.env.REACT_APP_AWS_APPSYNC_APIKEY,
        'aws_cognito_identity_pool_id':
            process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
        'aws_cognito_region': process.env.REACT_APP_AWS_COGNITO_REGION,
        'aws_user_pools_id': process.env.REACT_APP_AWS_USER_POOLS_ID,
        'aws_user_pools_web_client_id':
            process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
        ' oauth': {},
        'aws_user_files_s3_bucket':
            process.env.REACT_APP_AWS_USER_FILES_S3_BUCKET,
        'aws_user_files_s3_bucket_region':
            process.env.REACT_APP_AWS_USER_FILES_S3_BUCKET_REGION
    };
} else {
    console.log(process.env.AWS_USER_FILES_S3_BUCKET);

    config = {
        'aws_project_region': process.env.REACT_APP_AWS_PROJECT_REGION,
        'aws_appsync_graphqlEndpoint':
            process.env.REACT_APP_AWS_APPSYNC_GRAPHQLENDPOINT,
        'aws_appsync_region': process.env.REACT_APP_AWS_APPSYNC_REGION,
        'aws_appsync_authenticationType':
            process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATIONTYPE,
        'aws_appsync_apiKey': process.env.REACT_APP_AWS_APPSYNC_APIKEY,
        'aws_cognito_identity_pool_id':
            process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
        'aws_cognito_region': process.env.REACT_APP_AWS_COGNITO_REGION,
        'aws_user_pools_id': process.env.REACT_APP_AWS_USER_POOLS_ID,
        'aws_user_pools_web_client_id':
            process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
        ' oauth': {},
        'aws_user_files_s3_bucket':
            process.env.REACT_APP_AWS_USER_FILES_S3_BUCKET,
        'aws_user_files_s3_bucket_region':
            process.env.REACT_APP_AWS_USER_FILES_S3_BUCKET_REGION
    };
}

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config;

export function configureAmplify() {
    Amplify.configure(config);
}

export const listDrawings = async () => {
    const drawings = await API.graphql(graphqlOperation(ListDrawings));
    console.log(drawings);
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
