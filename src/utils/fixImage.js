export default function fixImage(path) {
    if (!path) return null;
    const pathPrefix = "/static/";

    if(path.startsWith(pathPrefix)) {
        let newPath = path.slice(pathPrefix.length);
        return newPath;
    }
}