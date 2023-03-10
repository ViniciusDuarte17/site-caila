import styled from "styled-components";
import { motion } from "framer-motion";



export const Container = styled.div`
    max-width: 500px;

`

export const Carousel = styled(motion.div)`
    cursor: grab;
    overflow: hidden;

`
export const InnerCarousel = styled(motion.div)`
    display: flex;

`

export const CarouselItem = styled(motion.div)`
    min-height: 300px;
    min-width: 350px;
    padding:14px;

`

export const Img = styled.img`
    width: 100%;
    height: 90%;
    border-radius: 10px;
    pointer-events: none;
`