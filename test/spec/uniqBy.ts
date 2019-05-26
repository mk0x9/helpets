import uniqBy from '../../uniqBy';
import identity from '../../identity';

it('test uniqBy', () => {
    const a = 'a';

    const arr = [1, 1, 2, 1, 3, 4];

    expect(uniqBy(arr, identity)).toEqual([1, 2, 3, 4]);
});

//export interface Dog {
//    type: 'dog';
//    favoriteHuman: string;
//}
/*
export interface Cat {
    type: 'cat';
    nemesis: string;
}

interface X {
    type: 'ke';
}

export type Animal = Cat | Dog | X;

const assertNever = (obj: never): never => {
    throw 'This should not happen';
};

const doYourThing = (animal: Animal) =>
    animal.type === 'dog'
        ? `So good to see ${animal.favoriteHuman} again`
        : animal.type === 'cat'
        ? `I'm planning to kill ${animal.nemesis} at some point`
        : assertNever(animal);
        */

// Conditional: if `T` extends `U`, then returns `True` type, otherwise `False` type
//type If<T, U, True, False> = [T] extends [U] ? True : False;

// If `T` is defined (not `never`), then resulting type is equivalent to `Yep`, otherwise to `Nope`.
//type IfDef<T, Yep, Nope> = If<T, never, Nope, Yep>;

// Makes keys `K` required:
//type With<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> & { [P in K]-?: T[P] };

// For typelevel tests:
//const assertType = <T>(expect: IfDef<T, T, never>): T => expect;

/*
 * Actual usage
 */

//// Our tested type which makes its parts optional or required, depending on passed parameters:
//type ComponentProps<Routes extends string, Permissions extends string> = IfDef<
//    Routes,
/*    { routes: Record<Routes, string> },
    { routes?: never }
> &
    IfDef<Permissions, { permissions: Record<Permissions, boolean> }, { permissions?: never }>;

// Code of the test using `jest`:
type Routes = 'goHere' | 'orHere';
type Permissions = 'permissionToDo' | 'permissionToBe';
type Props1 = ComponentProps<Routes, Permissions>;
type Props2 = { foo: 'bar' | 'baz'; routes: Routes; permissions: Permissions };

type Assertion1 = If<Props2, Props1, true, never>;*/
