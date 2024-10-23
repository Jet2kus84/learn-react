import { React } from 'react'
import TableOfContents from './TableOfContents';
import Profile from './Profile';

const HappyCodeMsg = () => {
    return (
        <>
            <div>
                <h1>Hi, coding in react is super fun</h1>
                <h2>Happy Coding!</h2>
            </div>
            <div>
                <hr></hr>
            </div>

            <div>
                <TableOfContents />
            </div>

            <div>
                <hr></hr>
            </div>

            <div>
                <Profile />
            </div>
        </>
    );
};

export default HappyCodeMsg;