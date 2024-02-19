let countWithoutMemoize = 0; // counter for calls to fibonacci without memoization
let countWithMemoize = 0; //counter for calls to fibonacci with memoization"

//0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 -> position
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 -> fibonacci

interface Cache {
    [key: string]: number 
}

export function fibonacci(num: number): number {
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

    countWithoutMemoize = 0;

    return result;
};


export function memoize(func: (num: number) => number): (num: number) => number | string {
    const cache: Cache = {};
    
    return (num: number) => {
        if (!(num in cache)) {
            countWithMemoize++; 
            cache[num] = func(num);

            console.log('Cache:', cache);
            return "Recordering in the cache: " + num;

        }else{
            console.log('Cache:', cache);
            return "Already in the cache: " + num;
        }
        
    };
}

export const fibWithMemoize = memoize((num: number) => {
    const result = fibonacci(num);
    
    console.log("Record cache: ", countWithMemoize);
    
    countWithMemoize = 0;
    
    return result;
});

console.log("Result without memoize: ", fibWithoutMemoize(7));


console.log(fibWithMemoize(7));
console.log('----------------');
console.log(fibWithMemoize(7));
console.log('----------------');
console.log(fibWithMemoize(8));
console.log('----------------');
console.log(fibWithMemoize(7));