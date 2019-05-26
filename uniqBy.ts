function SameValueZero(x: unknown, y: unknown): boolean {
    return x === y || (x !== x && y !== y);
}

export default function uniqBy<T>(array: T[], iteratee: (arg: T) => unknown): T[] {
    const iteratees = array.map(iteratee);
    const result: T[] = [];
    const resultIteratees: unknown[] = [];

    for (let i = 0; i < iteratees.length; i++) {
        let matched = false;

        for (let k = 0; k < resultIteratees.length; k++) {
            if (SameValueZero(iteratees[i], resultIteratees[k])) {
                matched = true;
                break;
            }
        }

        if (matched === false) {
            resultIteratees.push(iteratees[i]);
            result.push(array[i]);
        }
    }

    return result;
}
