import identity from './identity'

function SameValueZero(x: unknown, y: unknown): boolean {
    return x === y || (x !== x && y !== y);
}

function uniqBy<T>(array: T[], iteratee: (arg: T) => unknown = identity): T[] {
    const iteratees = array.map(iteratee);
    const result = [];

    for (let i = 0; i < iteratees.length; i++) {
        for (let k = i; k < iteratees.length; k++) {
            if (SameValueZero(iteratees[i], iteratees[k])) {
                result.push(array[i]);

                break;
            }
        }
    }

    return result;
}
