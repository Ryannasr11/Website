const findAllByKey: any = (obj: any, keyToFind: string) => {
    return Object.entries(obj).reduce(
        (acc: any, [key, value]) =>
            key === keyToFind
                ? acc.concat(value)
                : typeof value === 'object'
                ? acc.concat(findAllByKey(value, keyToFind))
                : acc,
        [],
    );
};

export default findAllByKey;
