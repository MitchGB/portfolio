import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 50, delay: number = 0) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const execute = () => {
            let i = 0;

            if (speed === 0) {
                setDisplayText(text);
                return;
            } else {
                const typingInterval = setInterval(() => {
                    if (i < text.length) {
                        setDisplayText(prevText => prevText + text.charAt(i));
                        i++;
                    } else {
                        clearInterval(typingInterval);
                    }
                }, speed);

                return () => {
                    clearInterval(typingInterval);
                };
            }
        }

        setDisplayText("");
        setTimeout(execute, delay);
    }, [text, speed]);

    return displayText;
};