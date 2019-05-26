import uniqBy from './uniqBy';
import identity from './identity';

export default function uniq<T>(array: T[]): T[] {
    return uniqBy(array, identity);
}
