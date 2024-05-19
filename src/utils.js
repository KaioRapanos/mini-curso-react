export const getImageUrl = (path) =>{
    return import.meta.resolve(`./assets/${path}`);
};