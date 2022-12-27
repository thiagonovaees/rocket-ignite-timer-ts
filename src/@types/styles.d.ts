import "styled-components";
import { darkTheme } from "../styles/themes/darkTheme";

//Criando a tipagem de acordo com as propriedades do objeto darkTheme
type ThemeType = typeof darkTheme;

//Sobre escrevendo a typagem do styled-components para adicionar as propriedades do tema criado;
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
