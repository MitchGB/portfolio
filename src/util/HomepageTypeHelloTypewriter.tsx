import { useState, useEffect } from 'react';

//I really don't know what to cal this
/*
[Hi, Hello, Hey]

H
Hi
H

H
He
Hel
Hell
Hello
Hell
Hel
Hel
He
H

H
He
Hey

*/

const states: string[] =
    [
        "H",
        "Hi",
        "Hi",
        "Hi",
        "Hi",
        "Hi",
        "Hi",
        "Hi",
        "Hi",
        "Hi",
        "H",
        "",
        "H",
        "He",
        "Hel",
        "Hell",
        "Hello",
        "Hello",
        "Hello",
        "Hello",
        "Hello",
        "Hello",
        "Hello",
        "Hello",
        "Hello",
        "Hell",
        "Hel",
        "He",
        "He",
        "Hey",
    ]
export const useIterativeTypewriter = () => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {

        let i = 0;

        const typingInterval = setInterval(() => {
            if (i < states.length) {
                setDisplayText(states[i]);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 150);

        return () => {
            clearInterval(typingInterval);
        };


    }, [states, 50]);

    return displayText;
};