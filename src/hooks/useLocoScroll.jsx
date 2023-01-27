import {useEffect} from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

export default function useLocoScroll(start) {
    useEffect(() => {
        
        if (!start) return;
        const scrollEl = document.querySelector('[mainContainer]');
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            multiplier: 1,
            class: 'is-reveal',
            // smoothMobile: true,
            // getDirection: true,
            // lerp: 0.1,
        });
    }, [start]);
}
