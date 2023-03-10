import {useState, useEffect, useRef} from "react";

import * as S from "./styled";

import img1 from "../../assets/profissional.png"
import img2 from "../../assets/Exemplo.png"
import img3 from "../../assets/profissional.png"

export const Slied: React.FC = () => {

  const imagens = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3},
  ];

  const carousel = useRef<HTMLDivElement>(null) 
  const [width, setWidth] = useState(0)

  useEffect( () => { 

    if(carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
    
  }, [])
 

  return(
      <S.Container>
        <S.Carousel ref={carousel} whileTap={{cursor: 'grabbing'}}>
          <S.InnerCarousel
            drag='x'
            dragConstraints={{right:0, left: -width}}
            initial={ {x: 100}}
            animate={ {x: 0 }}
            transition={ { duration: 1.2}}
          >
            {imagens.map( img => (
              <S.CarouselItem key={img.id}>
                <S.Img src={img.src} alt="texto alternativo" />
              </S.CarouselItem>
            ))}
          </S.InnerCarousel>
        </S.Carousel>
        </S.Container>
  )
}