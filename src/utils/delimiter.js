export const delimiter = (text, limit) => {
    if (text && limit) {
        if (text.length <= limit) {
            return text;
        } else {
            return `${text.substr(0, limit)}...`;
        }
    } else {
        return '';
    }
};
