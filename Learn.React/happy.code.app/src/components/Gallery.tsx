import { React } from 'react'
import Profile from './Profile';
import Avatar from './Avatar';

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
            <Avatar />
        </section>
    );
}