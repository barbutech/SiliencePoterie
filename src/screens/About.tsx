import {Stack, Typography} from "@mui/material";
import marlene1 from "../assets/marlene1.jpg";
import marlene2 from "../assets/marlene2.jpg";
import marlene3 from "../assets/marlene3.jpg";
import {Colors} from "../constants/Corlors.constant";

export const About = () => {
  return <Stack>
    <Stack>
      <Stack direction="row">
        <img height={"900px"} src={marlene1} alt="profilPicture"/>
        <Stack px="10%" bgcolor={Colors.secondary} justifyContent="center">
          <Typography textAlign="justify">
            {`Ancienne collaboratrice dans l’audiovisuel publique, Marlène s’est finalement lancée à temps plein dans le travail de la céramique en 2020.
              Passionnée depuis toujours par les arts plastiques : peinture, pastels secs, fusains, création de meubles en carton, modelage, elle se forme au tournage à l’école d’Aubagne.
              Fortement inspirée par le travail de Giacometti, elle crée pour sa part des sculptures alliant art du mouvement et de la fixité inhérente aux matériaux.
               Artiste éclectique, elle réalise également des objets utilitaires. A la recherche d’effets et de matières où le mélange de la terre, des couleurs et des oxydes reste le maître mot.`}
          </Typography>
        </Stack>
      </Stack>
      <Stack bgcolor={Colors.primary} direction="row" flex={1}>
        <img src={marlene2} height={"700px"}/>
        <Stack flex={1} justifyContent="center" alignItems="center">
          <Typography>
            {`"J'aime ce que je fais et c'est pour ça que je le fais bien"`}
          </Typography>
        </Stack>
        <img src={marlene3} height={"700px"}/>
      </Stack>
    </Stack>
  </Stack>
}