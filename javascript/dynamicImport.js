// dynamic export
async function calc(){
    const math = await import("./math.js");
    console.log(math.add(10, 20));
}

console.log("Result: ");
calc();