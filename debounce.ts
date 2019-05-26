export default function debounce<F extends (...args: any[]) => any>(
    func: F,
    wait: number
): (...args: Parameters<F>) => void {
    let timeoutId: number;

    return function(this: unknown, ...args: any[]) {
        //clearTimeout(timeoutId);
        //timeoutId = setTimeout(() => {
        //    func.apply(this, args);
        //}, wait);
    };
}

function sum(a: number, b: number): number {
    return a + b;
}

const aa = debounce(sum, 100);

// console.log(aa);
