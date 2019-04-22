# Primary ports kata

- This kata is **not** about developing an hexagonal architecture
- The architecture is already delivered
- This kata is about experiencing the benefits of the architecture

## Concepts

- [Concepts as flash cards](./docs/flash-cards.pdf)
- RSVP and flipped classroom
- [Developed with Marp](https://github.com/marp-team/marp)

## Readings

- [Original Blog post](https://web.archive.org/web/20090327032122/alistair.cockburn.us/Hexagonal+architecture)
- [Best book about ports and adapters](https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627)


## Deliberate practice

### Acoplamiento: ¿qué afecta a qué?

Implementar validación:

- afecta a puertos y adaptadores 
- ver qué al refactorizarla no hay que cambiar test

Implementar nueva feature: la división

- no afecta adaptadores 

Implementar autenticación web

- afecta solo a adaptador web

### Features and architecture are decoupled

- evolve web adapter without developing new features
- develop new features
- check that automatically exposed throw ports, without adding new lines to adapters
- web framework only in one file, console framework only in one file

### Easier end-to-end testing

- test logic without testing delivery mechanism
- test delivery mechanism without testing logic

### More realistic example

- add error management
- add web auth
- add persistence repo (secondary port)
