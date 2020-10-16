# Anotações sobre os estudos de CSS e SASS

## Responsividade no CSS

Viewport : Referente à visualização do dispositivo

## CSS Strategies

## Layout

Layout Fixo:

`px` - Pixel

Layout Fluido:

`%`- Porcentagem
`auto` - Automático
`vh` - Viewport height
`vw` - Viewport width

- Pode-se definir uma largura em porcentagem e depois definir um tamanho fixo máximo para o elemento.

  width: 90%;
  max-width: 980px;

---

## Textos

Definir estratégias de texto fluido, definir um tamanho de fonte em porcentagem para o root, e depois usar o rem nos elementos, de modo que se adaptarão em relação às resoluções.

Texto Fixo
`1px `= 0.75pt
`16px` = 12pt;

Texto fluidos
`em`- Valor multiplicado pelo pai
`rem` - Valor multiplicado pelo root

## Viewports

Definir a tag META do viewport do dispositivo, para depois aplicar as estratégias da responsividade.

- Media Queries

Podemos definir os pontos de quebra para screen, print. Diretamente no html ou no css.

```css
@media (max-width: 320px) {
  #form h3 {
    font-size: 2rem;
  }
}
```

## Imagens

Tag `<picture>` pode alterar o src de acordo com a definição.

Dar preferências para imagens SVG

# CSS GRID

## GRID System

- Bidimensional
- Divisão entre linhas e colunas

---

## GRID vs Flexbox

- GRID: Duas dimensões (Linhas e Colunas)
- Flexbox: Uma dimensão (Linha ou Colunas)

## Propiedades

fr : Fração, equivale a 1 fatia flex

Ao definir onde ficará cada elemento dentro do grid, atentar para as delimitações das linhas virtuais. Início e fim.

```css
header {
  background-color: aquamarine;
  height: 100px;

  /* Forma I
  grid-column-start: 1;
  grid-column-end: 3;
   */

  grid-column: 1/3; /* Forma II */
}
```

Pode-se usar o grid-template-areas e definir todas as áreas de uma só vez;

## Alinhamentos do GRID

`justify-content`
`align-content`
`justify-items`
`align-content`
`justify-self`
`align-self`

- Justify(X) & Align(Y) : content

  Alinha o próprio grid em relação ao espaço fora do grid.

# SASS

## Alterar configurações do plugin:

Plugin 'live-sass':

```json
"liveSassCompile.settings.formats":
[
  {
    "format": "compressed",
    "extensionName": ".css",
    "savePath": null
  }
]
```

## Observações

- Partials:

  Usar '\_' no nome do arquivo informamos ao SASS que ele será compilado mais tarde, quando for importado por algum arquivo.

- Encadeamento;

  Pode-se agrupar os seletores em um mesmo bloco, quando fazem referência ao mesmo pai.

  ```scss
  header {
    background-color: $primary-color;

    .container {
      @extend .flexCenter; //Herança
      justify-content: space-between;

      @include boundaries(false); //Mixin

      margin: auto;
    }
  }
  ```

- Mixins

  Agrupamento de propiedades CSS que podem ser incluídas em vários pontos do código;

  ```scss
  @mixin boundaries($isAuto: true) {
    width: 90%;
    max-width: 980px;

    @if (isAuto) {
      margin: auto;
    }
  }
  ```

- Funções

  Pode-se criar funções para realizarem algo específico

  ```scss
  @function setTextColor($color) {
    @if lightness($color) > 70 {
      @return #333;
    } @else {
      @return #000;
    }
  }
  ```

- Herança;

  Pode-se incluir um trecho pré-definido em outras partes do css.

  ```scss
  .flexCenter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    @extend .flexCenter;
  }
  ```

- Laços de repetição, condicionais

  - Laço for to | through

    ```scss
    // 'to' : Não inclusivo | 'through' : inclusivo
    @for $i from 1 through 4 {
      .text-#{$i} {
        font-size: 5px * $i;
      }
    }
    ```

  - Laço for each

    ```scss
    //Arrai de cores
    $colors: (
      color: blue,
      color2: green,
      color3: black,
    );

    //Chave & Valor
    @each $key, $color in $colors {
      .#{$color}-text {
        color: darken($color, $amount: 10);
      }
    }
    ```

  - if

    ```scss
    @mixin text-effect($val) {
      @if $val == danger {
        color: red;
      } @else if $val == alert {
        color: yellow;
      } @else {
        color: black;
      }
    }
    ```

# Box Model

Os elementos são tidos como caixas ao serem renderizados pelo browser.

# Notas importantes

Formas de organizar o código CSS:

- Semântica

  Escolher nomenclaturas que façam sentido e que permitam um entendimento claro. Em classes por exemplo, que sejam genéricas, para que possam ser reusadas.

- Modularizar elementos

  Quebrar o design em pequenos componentes que facilitem a manutenção e identificação.

- Nomes apropriados

  Uso de convenções de nomes traz mais organização para os códigos CSS.

  O BEM (Block Element Modifier), consiste em separar os nomes em blocos, elementos e modificadores de estado.

  ```css
  .block {
  }
  .block__element {
  }
  .block--modifier {
  }
  ```

  ```html
  <div class="”search”">
    <input type="”search__btn" search__btn--active” />
  </div>
  ```

- Responsabilidades únicas

  No contexto do CSS, o princípio de responsabilidade única se aplica a pedaços de código, classes e modulos devem ser organizados em arquivos separados por exemplo:

  ```md
  components
    |- carousel
    |- |- carousel.css
    |- |- carousel.partial.html
    |- |- carousel.js
    |- nav
    |- |- nav.css
    |- |- nav.partial.html
    |- |- nav.js
  ```
