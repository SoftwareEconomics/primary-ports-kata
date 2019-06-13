# Primary ports kata

- This kata is **not** about developing an hexagonal architecture
- The architecture is already delivered
- This kata is about experiencing the architecture benefits and trade-offs

## Concepts

- You can use them as flash cards, RSVP or Flipped classrom
- [Concepts](./docs/flash-cards.pdf)
- [You can edit the markdown with Marp](https://github.com/marp-team/marp)

## Readings

- [Original Blog post](https://web.archive.org/web/20090327032122/alistair.cockburn.us/Hexagonal+architecture)
- [Best book about ports and adapters](https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627)


## Deliberate practice

### new feature: division (add tests and implementation)

- check: features are automatically delivered to web and console 

### add validation: division by zero is not allowed

- hint: adapt error reporting to web (response code) and console (color: red)
- check: outside-in thinking. Tests knows nothing about validation implementation. Which are visible effects of validation error?

### Web api change:  "vertical/feature" to "vertical-feature"

- check: changing all url's of your web services changing only one line of code

### Explore: extra exercises

Explore the architecture as you wish. Some ideas:

- Hexagonal Authentication (no web or console).
- Secondary port: store all request in a RequestLogRepository
- All features are explosed to console and web: how can i limit that?
- Divide request in queries and actions (CQRS): what is the relation between Ports and Adapters and CQRS?

## Discuss

Ports and Adapters: features and architecture are decoupled so...

- ... i can develop features without architecture and viceversa
- ... i can test features without bothering about delivery details

Compare three options:

- "classic" layered architecture
- Ports and Adapters with one adapter for each feature
- Ports and Adapters with one primary port for all features

Dependency...

- ... Dependency inversion ?? Inversion of Control ?? DIP ??
- [DIP in the Wild](https://martinfowler.com/articles/dipInTheWild.html)

