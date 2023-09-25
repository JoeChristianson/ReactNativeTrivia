function camelCaseToTitleCase(input: string): string {
    // Split the string based on word boundaries using a regex pattern
    return input
        .replace(/([a-z])([A-Z])/g, '$1 $2')  // add space between camelCased words
        .replace(/([A-Za-z])([0-9])/g, '$1 $2')  // add space before a number
        .replace(/([0-9])([A-Za-z])/g, '$1 $2')  // add space after a number
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  // capitalize each word
        .join(' ');
}

export default camelCaseToTitleCase