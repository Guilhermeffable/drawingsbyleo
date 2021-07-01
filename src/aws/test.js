import { SetS3Config } from './services';
import Storage from '@aws-amplify/storage';

export const uploadFile = async () => {
    try {
        await Storage.put('text.txt', 'Hello');
    } catch (err) {
        console.error(err);
    }
};
