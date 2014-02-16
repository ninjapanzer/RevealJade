RevealJade
==========

Jade based utilities for creating a RevealJS presentation

## About

This is an implementation of [Reveal.js](https://github.com/hakimel/reveal.js) that simplifes the creation of presentations by treating it as a bower dependency and allowing allowing you to generate you presentation markdown with Jade.

To further simply markup this also includes some common slide style mixins. All slides also accept Jade blocks so they are intended to be loose or unnessecary to use.


## Setup

1. Clone Repo
2. Install NodeJS ~0.10 if you don't have it
3. `npm install -g grunt bower`
4. `npm install`
5. `bower install`
6. `grunt serve`
7. Checkout the example page at localhost:8000/example
8. Create a new folder and put your index.jade in there
9. include header and footer like in the example
10. Enjoy!