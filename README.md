# Implementing Memoization in Fibonacci Calculation

>In this project, memoize is applied to optimize the calculation of Fibonacci numbers, enhancing performance by storing previously computed values for later use.

## :loudspeaker: How it works?

Memoization is a technique used to cache the results of expensive function calls and reuse them when the same inputs occur again. In the context of the Fibonacci sequence calculation, memoization can significantly improve performance by storing previously computed Fibonacci numbers and retrieving them instead of recalculating.
Memoization Method

The provided code snippet demonstrates the implementation of memoization using a cache object to store previously calculated Fibonacci numbers. When calculating a Fibonacci number, the function first checks if the result is already present in the cache. If it is, the function retrieves the result from the cache instead of recalculating it.

### 🕹 Features

* `Memoization Method:` Caches previously computed Fibonacci numbers to improve performance.
* `Optimized Performance:` Prevents redundant calculations by reusing cached results.
* `Error Handling:` Ensures proper error handling for scenarios where memoization fails or encounters unexpected behavior.

## :rocket: Why Memoization?

Memoization offers significant performance improvements in scenarios where expensive computations need to be repeated with the same inputs. Here are some reasons why memoization is beneficial:

### :mag: Characteristics:

1. `Performance Optimization:` Memoization reduces redundant computations by storing and reusing previously calculated results.

2. `Memory Efficiency:` It conserves memory by caching results and avoiding repetitive calculations.

3. `Scalability:` Memoization scales well with repetitive computations, providing consistent performance improvements as the number of calculations increases.

### :ok_woman: Improving Performance

Memoization enhances performance by eliminating redundant computations and improving response times for repeated function calls. By caching previously computed results, memoization ensures faster execution and smoother user experiences.


## :exclamation: Get started

### :computer: Prerequisites

- Node.js (version >= 14)
- npm (version >= 6)
- Typescript
- Jest
- Vite

### :floppy_disk: Installation

1. To get started, you first need to clone the repository:

```bash
git clone [https://github.com/paula-uxengineer/to-do-list.git]
```

2. Next, install the project dependencies:

```bash
npm install
```

### :checkered_flag: How To Start

To start the app in development mode, run the following script:

```bash
npm run dev
```

### :space_invader: Scripts
This project comes with several predefined scripts in the package.json file:

```test```: Runs tests using Jest.

```bash
npm run jest
```

```dev```: Starts the development app with ts-node-dev and allows debugging

```bash
npm run dev
```

### :wrench: Dependencies 

- "react": "^18.2.0",
- "react-dom": "^18.2.0"

### :hammer: Dev Dependencies 

- "@types/react": "^18.2.55",
- "@types/react-dom": "^18.2.19",
- "@typescript-eslint/eslint-plugin": "^6.21.0",
- "@typescript-eslint/parser": "^6.21.0",
- "@vitejs/plugin-react": "^4.2.1",
- "eslint": "^8.56.0",
- "eslint-plugin-react-hooks": "^4.6.0",
- "eslint-plugin-react-refresh": "^0.4.5",
- "typescript": "^5.2.2",
- "vite": "^5.1.0"
- "@types/jest": "^29.5.12",
- "@types/node": "^20.11.16",
- "jest": "^29.7.0",
- "ts-jest": "^29.1.2",
- "typescript": "^5.3.3"

## :unlock: Contributing

Contributions to this project are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes to your branch and submit a pull request.

For bug reports or feature requests, please open an issue on the GitHub repository.

## :mortar_board: License

This project is licensed under the MIT License. See the LICENSE file for more information.
