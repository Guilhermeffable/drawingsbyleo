import { firebase } from './firebase';

const storageRef = firebase.storage().ref();

export const listImages = async () => {
    return storageRef.child('').listAll();
};

export const getImageUrl = async () => {
    const urls = [];

    const images = await listImages();

    images.items.map((image) =>
        storageRef
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
                urls.push(url);
            })
    );

    return urls;
};
