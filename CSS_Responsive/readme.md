# Responsividade no CSS

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

`<picture>`

Usar imagens SVG

