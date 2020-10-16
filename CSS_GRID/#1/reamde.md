# Anotações

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