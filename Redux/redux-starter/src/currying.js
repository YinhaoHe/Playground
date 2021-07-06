function add(a) {
    return function(b) {
        return a + b;
    };
}

const add1 = add(1);
add1(5); // return 6

// A good way to use Currying
const add2 = a => b => a + b;
// With currying
add(1)(5); //add(1, 5)
// N => 1