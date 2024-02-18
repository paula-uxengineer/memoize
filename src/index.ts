let countWithoutMemoize = 0; // counter for calls to fibonacci without memoization
let countWithMemoize = 0; //counter for calls to fibonacci with memoization"

function fibonacci(num: number): number {
    countWithoutMemoize++; 

    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

const fibWithoutMemoize = (num: number) => {
    const result = fibonacci(num);

    console.log("Calls without memoize:", countWithoutMemoize);

    countWithoutMemoize = 0; // resetting the counter

    return result;
};

console.log(`Result without memoize: ${fibWithoutMemoize(8)}`);

function memoize(f: (num: number) => number): (num: number) => number {
    let cache: { [key: string]: number } = {};

    return (num: number) => {
        if (!(num in cache)) {
            countWithMemoize++; 
            cache[num] = f(num);
        }

        return cache[num];
    };
}

const fibWithMemoize = memoize((num: number) => {
    const result = fibonacci(num);

    console.log("Calls with memoize:", countWithMemoize);

    countWithMemoize = 0; // resetting the counter
    
    return result;
});

console.log(`Result with memoize: ${fibWithMemoize(8)}`);
