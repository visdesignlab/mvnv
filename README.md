# Companion Website for STAR Report on Multivariate Network Visualization

This website is based on the Vis Design Lab website and built with
[Jekyll](http://jekyllrb.com).


## Setup Jekyll

If you have Ruby on your machine, just install Jekyll and two plugins:

``` shell
$ gem install jekyll
$ gem install jekyll-redirect-from
$ gem install jekyll-scholar
```

Further details on installing Jekyll and its requirements:
https://jekyllrb.com/docs/installation/


### Run Jekyll

``` shell
$ jekyll serve -i
```

Running Jekyll in incremental (`-i`) mode is _significantly_ faster.


### View the Generated Site

``` shell
$ open http://0.0.0.0:4000/
```

## GitHub Pages and Jekyll

Installation instructions above for Jekyll will work for the most part, but you
can also emulate the current GitHub Pages server environment with the following
installation instructions:
https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/


To install the GitHub Pages gem, you may need to install the Ruby DevKit for
your operating system.
