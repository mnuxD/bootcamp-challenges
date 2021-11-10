# CSS-DINER CHALLENGE

![screen](https://github.com/mnuxD/bootcamp-challenges/blob/main/css-diner/Captura-css-diner.png?raw=true)

1. `plate`
2. `bento`
3. `#fancy`
4. `plate apple`
5. `#fancy pickle`
6. `.small`
7. `orange.small`
8. `bento orange.small`
9. `plate, bento`
10. `*`
11. `plate *`
12. `plate + apple`
13. `bento ~ pickle`
14. `plate > apple`
15. `plate :first-child`
16. `plate :only-child`
17. `.small:last-child`
18. `:nth-child(3)`
19. `bento:nth-last-child(3)`
20. `apple:first-of-type`
21. `:nth-of-type(even)`
22. `:nth-of-type(2n+3)`
23. `plate apple:only-of-type`
24. `.small:last-of-type`
25. `bento:empty`
26. `:not(plate, .small)`
27. `[for]`
28. `plate[for]`
29. `[for="Vitaly"]`
30. `[for^="Sa"]`
31. `[for$="ato"]`
32. `[for*="obb"]`


## Selectores:

`.class -- .class1.class2 -- .class1 .class2 --  #id -- *  -- element  -- element.class  -- element,element --  element element  -- element>element --  element+element --  element1~element2 --
[attribute] --  [attribute=value]  -- [attribute~=value]  --  [attribute|=value] --   [attribute^=value]  --  [attribute$=value]  --  [attribute*=value]  --  :active --  ::after --  ::before --
:checked --   :default --   :disabled  -- :empty   -- :enabled   -- :first-child  --  ::first-letter  --  ::first-line  --  :first-of-type  --  :focus --   :fullscreen --  :hover  -- :in-range --
:indeterminate  --  :invalid  --  :lang(language) --  :last-child --  :last-of-type --  :link  -- ::marker  --  :not(selector) --   :nth-child(n) --  :nth-last-child(n) --   :nth-last-of-type(n) --
:nth-of-type(n)  -- :only-of-type --   :only-child  -- :optional  -- :out-of-range --  ::placeholder --  :read-only  --  :read-write --  :required --  :root --  ::selection --   :target --  :valid  --  :visited`


## Especificidad
"La especificidad es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento y, por lo tanto, serán aplicados." MDN Web Docs.

En CSS muchas veces existen conflictos debido a que se han aplicado diferentes estilos a un mismo elemento, la determina que estilo tiene más "peso" y es ese el que termina siendo aplicado.

La especificidad se calcula mediante la jerarquia en la que son aplicados los estilos. 

### Estilos inline
En el mayor rango se encuentran los estilos inline, es decir los que son definidos en el documento html, aunque esto es considerado una mala práctica.

### Selectores de ID
Luego se encuentran los selectores que utilizan un ID, el hecho de que los ID son únicos hace que tengan una alta jerarquia.

### Clases, atributos y pseudo-clases
A continuacion se encuentran los selectores de clases, atributos y pseudo-clases.

### Elementos y pseudo-elementos
Estos selectores son los últimos en la jerarquía de selectores


## Calculando la especificidad
Numéricamente, la especificidad se calcula utilizando el siguiente esquema:

![especificidad](https://cms-assets.tutsplus.com/uploads/users/30/posts/34141/image/spec-02.svg)

En este ejemplo se aplicó un estilo inline por lo que la especificidad recibe un valor de 1000. Si fuese un selector ID la especificidad seria 0100.

## La ultima regla manda
Si se aplican 2 o mas selectores del mismo nivel para un mismo elemento con diferentes estilos, se terminarán aplicando los estilos aplicados por el ultimo selector. 


