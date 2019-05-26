export default function compose<F extends (...args: any[]) => any, G extends (arg: ReturnType<F>) => any>(
    f: F,
    g: G
): (...args: Parameters<F>) => ReturnType<G> {
    return function() {
        return g(f(arguments));
    };
}

function sayHello(name: string, shouldCapitalize: boolean): string {
    return 'Hello, ' + shouldCapitalize ? name.toUpperCase() : name + '!';
}

function countLength(str: string): number {
    return str.length;
}

//const aa = compose(
//  sayHello,
//  countLength
//);
//console.log(aa("str", true));
