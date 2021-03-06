ral / 24092009
# Primary ports kata

- This kata is **not** about implementing an hexagonal architecture
- There is an architecture already in place
- This kata is about having a first-hand experience of the benefits and trade-offs of the architecture

## Concepts

- You can use them as flash cards, RSVP or Flipped classrom
- [Concepts](./docs/flash-cards.pdf)
- [You can edit the markdown with Marp](https://github.com/marp-team/marp)

## Reading list

- [The original post that started it all](https://web.archive.org/web/20090327032122/alistair.cockburn.us/Hexagonal+architecture)
- [A book we like about ports and adapters](https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627)

## Pamplona craftsmen timing

INTRODUCCIÓN Y PRIMERA PARTE
   -  El ostíon: 15 mins: clonar repo,  npm install, levantar web/consola, pedir implementar la división sin explicar absolutamente nada.
   - hands off:  15 mins: ¿menuda ostia eh? Explicación del código, cómo está organizado, qué habría que hacer para implementar la división.
    - hands on: 10 mins: implementar la división. 
    - hands off: 20 mins: arquitectura en tres capas versus un adaptador por request. En ambos casos: controlador --> servicio --> repositorio. En éste ejercicio rompemos con esa idea. Contar cosas de las notas que pongo más abajo.

SEGUNDA PARTE:
    - hands on: 15 mins: Ejercicio2: implementar validación
    - hands on: 15 mins: Ejercicio 3: implementar cambio en las urls web
    - nota: si hay gente que va rápido, ofrecerles implementar los "extra exercises" del README

CIERRE:
     - repasar bondades y comparar ventajas desventajas de cada implementación
     - pedir feedback

## Deliberate practice exercises

### Add a new feature: division

- Hint: don't forget about writing tests!
- Check: there's no need to change the delivery. New features are automatically delivered though the web and console adapters

### Add validation: division by zero is not allowed

- Hint: the adapters should _adapt_ the error accordingly e.g web responds with a 4xx status code
- Check: By using the _outside-in_ mindset, tests don't need to know the specifics about the validation implementation and they can focus exclusively on its visible effects.

### Change the web route pattern from `vertical/feature` to `vertical-feature`

- Check: changing all the web urls only requires changing one line of code

### Free exploration ideas

Here are some ideas to try by yourself:

- Implement authentication inside your hexagon
- Log the request history with a secondary port e.g. `RequestLogRepository`
- Change the primary port so that you can avoid exposing particular features in your adapters
- Segregate requests into queries and commands
  - Do you see any relation between _Ports and Adapters_ and [_CQRS_](https://martinfowler.com/bliki/CQRS.html)?
  - Once you've done that, can you think of new delivery strategies you can follow?

## Discussion

_Ports and Adapters_: features and architecture are decoupled so:

- [ ] I can develop features without having to be aware of the architecture, and viceversa
- [ ] I can test features without worrying about how they're delivered

Compare these options:

- _Classic_ layered architecture
- _Ports and Adapters_ with one adapter for each feature
- _Ports and Adapters_ with one primary port for all features

About dependencies:

- Dependency inversion? Inversion of Control? DIP?
- [DIP in the Wild](https://martinfowler.com/articles/dipInTheWild.html)

