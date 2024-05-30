'use client'

import React, {useState} from 'react';
import {Slider} from './Slider/Slider';
import Client1 from "./img/client1.png";
import Client2 from "./img/client2.png";
import Client3 from "./img/client3.png";
import Client4 from "./img/client4.png";


export const Testimonial = () => {
    const testimonial = [
        {
            id: 1, src: Client1, comment: 'I like Furniking.com and as compared to other company it`s polices and\n' +
                '          customers support is very good easy to reach., also many time they\n' +
                '          unable to delivered. The ultricies are pregnant while the quis is\n' +
                '          suspended. Risus commodo viverra maecenas accumsan lacus vel\n' +
                '          facilisist amet.', name: 'Angelina Joly', profession: 'Co-founder'
        },
        {
            id: 2, src: Client2, comment: 'The ultricies are pregnant while the quis is\n' +
                '          suspended. Risus commodo viverra maecenas accumsan lacus vel\n' +
                '          facilisist amet.', name: 'Akula White', profession: 'Founder'
        },
        {
            id: 3, src: Client3, comment: 'I like Furniking.com and as compared to other company it`s polices and\n' +
                '          customers support is very good easy to reach., also many time they\n' +
                '          unable to delivered.', name: 'Brednden Pit', profession: 'Akter'
        },
        {
            id: 4, src: Client4, comment: 'Risus commodo viverra maecenas accumsan lacus vel\n' +
                '          facilisist amet.', name: 'Ivan Nedugin', profession: 'Joker'
        },
    ]

    const [slideIndex, setSlideIndex] = useState<number>(0);

    const turnLeft = () => {
        if (!slideIndex) {
            setSlideIndex(testimonial.length - 1);
            return;
        }
        setSlideIndex(slideIndex - 1);
    };

    const turnRight = () => {
        setSlideIndex((prev) => {
            if (testimonial.length - 1 === prev) {
                return 0;
            }
            return prev + 1;
        });
    };

    return (
        <div className="flex flex-wrap gap-7 items-center justify-center mt-[90px]">
            <Slider data={testimonial} turnRight={turnRight} turnLeft={turnLeft} currentIndex={slideIndex}/>
        </div>
    );
};
