RevealJade
==========

[Jade](https://github.com/visionmedia/jade) alternative utilities for creating a [Reveal.js](https://github.com/hakimel/reveal.js) presentation.

## About

This is an implementation of [Reveal.js](https://github.com/hakimel/reveal.js) that simplifes the creation of presentations by treating it as a bower dependency and allowing you to generate you presentation markup with Jade.

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

## Deployment

Reveal Jade is designed to work with GitHub and Unix operating systems by default.

If you have already created a gh-pages branch in your repo you may run the included deployment script at `bin/deploy.sh`.

1. Add your slides to a Github repo
2. `git checkout -b gh-pages`
3. `./bin/deploy.sh`
4. go to `https://<github-username>.github.io/<git-repo-name>` to see your slides (Sometimes takes 10 minutes)

## The Mixins

All slides accept an `attr` object which provides attributes to the elements within the slide like `class` and other RevealJS per slide options.

Slide mixins can be overridden by creating a new jade file in your project with overridden mixin definitions and placing and include in the index.jade after the line `include ./shared/slide_mixins`

### +slide

The basic unit of organization. Almost any contents can be contained within a `+slide`. It accepts a jade block most slides are built off this container.

### +slideGroup

The RevealJS organizational unit which provides vertical columns of slides a `+slideGroup` accepts a jade block of `+slides`.

### +speakerNotes

A special use container that can be nested within any slide that provides it with a Speaker notes container visible when `s` is pressed during the presentation.

### +ulSlide

Takes a `String:`title and `Array:`list arguments to create a slide with an unordered list.

### +olSlide

Takes a `String:`title and `Array:`list arguments to create a slide with an ordered list.

### +titleSlide

A special case slide configured via and object. The default behavior is indicated in index.jade and is default to these values.

```
- var titleData = { title: "Title", subtitle: "Subtitle", author: "Author", twitter: "@Twitter", email: "name@domain.com" }
```

The slide produces
```
h1= titleData.title
    h3= titleData.subtitle
    p
      div.left
        small= titleData.author
      div.left
        small.twitter= titleData.twitter
      div.left
        small.email= titleData.email
    aside.notes
      | Title Slide
```

### +bigTitleSlide

Takes a `String:`title and accepts a jade block to produce a slide with a `<H1>` title.

### +littleTitleSlide

Takes a `String:`title and accepts a jade block to produce a slide with a `<H3>` title.

### +imageSlide

Takes `String:`title, `String:`relative image path, and accepts a jade block to produce a slide with a `<H3>` title and an `img` below it.

### +codeBlockSlide

A basic slide unit which takes a jade block which will be styled with highlight js.

### +codeIncludeSlide

Similar to `+codeBlockSlide` takes `String:`title and accepts a jade block to produce a `+codeBlockSlide` with a title in `<h3>` The intended use to to pass and include to a code file as the block.
