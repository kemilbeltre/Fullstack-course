# Anecdotes


## Notes:



About the ```reduce()``` method (from "JavaScript: The Definitive Guide" by David Flanagan):

```reduce()``` takes two arguments. The first is the function that performs the reduction operation. The task of this reduction function is to somehow combine or reduce two values into a single value, and to return that reduced value.

Functions used with ```reduce()``` are different than the functions used with ```forEach()``` and ```map()```. The familiar value, index, and array values are passed as the second, third, and fourth arguments. The first argument is the accumulated result of the reduction so far. On the first call to the function, this first argument is the initial value you passed as the second argument to ```reduce()```. On subsequent calls, it is the value returned by the previous invocation of the function.

When you invoke ```reduce()``` with no initial value, it uses the first element of the array as the initial value. This means that the first call to the reduction function will have the first and second array elements as its first and second arguments.