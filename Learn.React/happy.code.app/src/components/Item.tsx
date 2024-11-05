
export default function Item({ name, isPacked }) {
    let itemContent = name;

    //JSX can be written in JavaScript/TypeScript by 
    //writing the JSX in parentheses() and then using 
    //curly braces{ } to write JavaScript/TypeScript code
    if (isPacked) {
        itemContent = (<del>{name} &#x2714; </del>);
    }

    return (
        <li className="item">
            {itemContent}
        </li>
    );
}