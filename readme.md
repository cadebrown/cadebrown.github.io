# cadebrown.github.io ([https://cade.site](https://cade.site))

This is my custom Jekyll theme for [cade.site](https://cade.site), meant to be easily editable, clean, responsive, and performant. Includes math and code formatting, as well as multiple themes with a selector (it's easy to add your own too!)


## Setup

First, you'll need to install the [Jekyll stack](https://jekyllrb.com/docs/installation/). Follow that link and find your platform

Then, [fork the GitHub repo](https://github.com/cadebrown/cadebrown.github.io/fork)

The first time you clone the repo on your machine, run:

```shell
$ bundle install
... a bunch of versions ...
Bundle complete! 7 Gemfile dependencies, 32 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
```

Then, to serve locally, run:

```shell
$ bundle exec jekyll serve
...
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

Then, navigate to `localhost:4000` in your browser

  * give `--drafts` to also include draft posts
  * give `--host 0.0.0.0` to serve to your local network

## Customizing

Feel free to copy this Jekyll theme! (full source is on [the GitHub repo](https://github.com/cadebrown/cadebrown.github.io))

The website (and most of the content) is licensed under the [KPL](https://kata.tools/kpl). (all I ask is that you give me an attribution/link somewhere on your blog)

### Code Structure

All the modular components are in `_includes`, for example:

  * `_includes/post-desc.html`: post description card generator (i.e. thumbnail and exerpt)

All the custom themes and styling are in `css/main.css`

  * to change the font from monospace to something less 1337, change the `:root` rules at the top of the file
  * to add a theme, follow the comments for an existing theme, change the name, and also edit `_layouts/default.html` (comments will explain everything)


### Software

This blog has a lot of builtin integrations with common tools. here's a quick list:

  * [kramdown](https://kramdown.gettalong.org/syntax.html): for parsing `.md` (markdown) files
  * [Disqus](https://disqus.com/): for comments
  * [Prism.js](https://prismjs.com/): for code highlighting
    * [example: shell/commandline highlighting](https://github.com/cadebrown/cadebrown.github.io/blob/main/_posts/2021-09-28-diy-regex-engine.md)
    * [example: tree/directory view](https://prismjs.com/plugins/treeview/)
    * [example: pretty 'diff' output](https://prismjs.com/plugins/diff-highlight/)
    * if you're not satisfied with my Prism config, [use their wizard](https://prismjs.com/download.html)
    * to add more languages, add them in the [js/components](./js/components) folder (TODO: example of this)
  * [KaTeX](https://www.katex.org/): for math formatting (LaTeX-like, and much faster than MathJax)
    * to use it in a post, use `\( x^2 + x + 5 \)` (for inline), or `$$ x^2 + x + 5 $$` (for block mode)
  * [git.io](https://git.io/): for URL shortening (useful for gists)
  * [GitHub Buttons](https://buttons.github.io/): the style is included in the head element, so just paste the element!
  * Google Analytics: for analyzing your web traffic

Most configuration options for software are available in:

  * `_config.yml`: this is where links/usernames/default settings go
  * individual page front matter (i.e. between `---`s at the start of the file), which can override those defaults
  * `_includes/head.html`: this is where you could customize versions/loading order of script tags and whatnot


### Tips

Here are some tips for better performance/integration with your site:

  * use `.webp` files for images ([use `cwebp` if possible](https://developers.google.com/speed/webp/docs/cwebp))
  * to check your images, use [imagemagick](https://imagemagick.org/script/identify.php)
    * for example, `for f in files/*; do identify -format '%f %wx%y\n' $f; done` and look for any abnormally large images that could be made smaller
  * specify only the software you need for a file with the `use_*` settings (see `_config.yml` for specifics)
    * by default, posts use KaTeX and Prism.js, while most pages *don't even load them in*

