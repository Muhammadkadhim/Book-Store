export const delimiter = (text, limit) => {
    if (typeof text === 'string' && typeof limit === 'number') {
        if (text.length <= limit) {
            return text;
        } else {
            return `${text.substr(0, limit)}...`;
        }
    } else {
        return '';
    }
};
