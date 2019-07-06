const compose = (...functions) => (component) => {
    return functions.reduceRight((prevResult, f) => {
        return f(prevResult);
    }, component);
}

export default compose;
