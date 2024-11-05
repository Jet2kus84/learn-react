import {React} from 'react'

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function TodoList() {
    const width = 100;
    const height = 100;

    return (
        <>
            <div style={person.theme}>
                <h1>{person.name}</h1>
                <img
                    className="avatar"
                    src="https://i.imgur.com/7vQD0fPs.jpg"
                    alt="Gregorio Y. Zara"
                    width={width}
                    height={height}
                />

                <ul style={{
                    backgroundColor: 'black',
                    color: 'pink'
                }}>
                    <li>Improve the videophone</li>
                    <li>Prepare aeronautics lectures</li>
                    <li>Work on fthe alcohol-fuelled engine</li>
                </ul>
            </div>
        </>
    )
}