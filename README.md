# Markup example. Landing page.

> [!NOTE]
> This markup shows an example of using sass together with the ecss approach. It was actually implemented around beginning of 2021 for the portfolio. I did a refactoring of it in the end of 2023. If you consider my repositories as my portfolio - please take a look at more modern markups in my profile which using scss, BEM and mobile-first approach.

TWIG | SASS | ECSS

Webpack5 config - https://github.com/ekunitsa/webpack5

Figma - https://www.figma.com/file/fGcXIuVSaPBMO4UcDsPZD4 (from free sources, layout in russian language)

Result url - https://github.ekunitsa.com/markup-example-sass-ecss/

# For start
- npm i
- npm run start

# СSS methodology - ECSS
Documentation: https://ecss.benfrain.com/

With some nuances:
- camelCase;
- desktop first;
- "is-" handle states;
- At the time when I developed this layout - I worked in a company where several sites could be under one admin panel (multi-site). That's why we used the prefix as a unique site identifier. Here I kept this logic when developing. "gst-" is a unique site identifier which means "German Standard".
