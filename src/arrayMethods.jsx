const ArrayMethods = () => {
    const array = [1, 2, 3, 4, 5];
    let fact = 1, n = 1;
    while (n <= 5) {
        fact = fact * n;
        n++;
    }
    console.log(fact);
    const str="Umesh"
    return (
        <>
            {
                array.reduce((a, i) => a * i)
            }
            <h1>{str.split("").reverse().join("")}</h1>
        </>
    )
}
export default ArrayMethods;