
// function name always PascalCasing
function Message() {

    // this syntax is called JSX: JavaScript XML
    const name = 'leo';
    if (name) {
        return <h1>Hello {name}</h1>;
    } else {
         return <h1>Hello World</h1>;
    }
}

export default Message;