export default function isReadable(value: any): boolean {
    if (value === undefined) {
        return false;
    } else if (value === null) {
        return false;
    } else if (typeof value === 'function') {
        return false;
    } else if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) {
        return false;
    } else {
        return true;
    }
}