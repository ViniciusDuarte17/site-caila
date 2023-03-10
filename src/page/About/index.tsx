import { Footer } from "../../components/Footer";
import { Slied } from "../../components/Slied";
import * as S from "./styled";

export const About = () => {

  return (
    <S.Container>
      <S.SectionOne>
        <S.H1>Sobre-me</S.H1>
        <S.P>Conheceça quem está por trás disso</S.P>
      </S.SectionOne>

      <S.SectionTwo>

        <S.DivOneColumn>
          <S.H2>Caila Rocha | Falando um pouco da minha trajetória </S.H2>

          <p>
            Eliane Vilarim começou a sua trajetória há 10 anos quando trabalhava
            de vendedora em uma grande loja de cosméticos e perfumaria de um
            Shopping Center. Lá, para agradar as clientes, oferecia o serviço de
            limpeza da sobrancelha.
          </p>

          <p>
           Eliane Vilarim começou a sua trajetória há 10 anos quando trabalhava
            de vendedora em uma grande loja de cosméticos e perfumaria de um
            Shopping Center. Lá, para agradar as clientes, oferecia o serviço de
            limpeza da sobrancelha.
          </p>
          <p>
           Eliane Vilarim começou a sua trajetória há 10 anos quando trabalhava
            de vendedora em uma grande loja de cosméticos e perfumaria de um
            Shopping Center. Lá, para agradar as clientes, oferecia o serviço de
            limpeza da sobrancelha.
          </p>
        </S.DivOneColumn>

        <div>
        <Slied />
        </div>
      </S.SectionTwo>
      <Footer />
    </S.Container>
  );
};
