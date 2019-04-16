# Primary ports kata

- This kata is **not** about developing an hexagonal architecture
- The architecture is already delivered
- This kata is about experiencing the benefits of the architecture

## Concepts (flash cards, flipped classroom)

- Hexagonal: In hexagonal architecture there are six...
- Ports and adapters
- Three layers architecture
- Three layers versus Ports and adapters
- Primary Ports
- Secondary Ports

## Readings

- [Original Blog post](https://web.archive.org/web/20090327032122/alistair.cockburn.us/Hexagonal+architecture)
- [Best book about ports and adapters](https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627)


## Deliberate practice

### Features and architecture are decoupled

- evolve web adapter without developing new features
- develop new features 
- check that automatically exposed throw ports.
- web framework only in one file
- console framework only in one file

### Easier end-to-end testing

- test logic without testing delivery mechanism
- test delivery mechanism without testing logic

### More realistic example

- add error management
- add web auth
- add persistence repo (secondary port)

