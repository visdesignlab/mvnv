---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "Taggle: Scalable Visualization of Tabular Data through Aggregation"
key: 2017_preprint_taggle
# paper | preprint | poster
type: preprint

# The shortname is used for auto-generated titels
shortname: Taggle
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2017_preprint_taggle.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2017_preprint_taggle_teaser.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- Katarina Furmanova
- gratzl
- Holger Stitz
- Thomas Zichner
- Miroslava Jaresova
- Martin Ennemoser
- lex
- streit

journal-short: arXiv
year: 2017

bibentry: article
bib:
  journal: arXiv preprint
  booktitle: 
  editor: 
  publisher: arXiv:1712.05944
  address: 
  doi: 
  url: 
  volume: 
  number: 
  pages: 
  month: 

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award:

# Use if this paper is linked to an internal project. This will link to the project site
# project: upset

# Use this if you have an external project website
external-project: https://taggle.caleydoapp.org/

# The reference to the video entry
video: 2017_preprint_taggle_video
# The reference to the preview viedo entry
#preview-video:

# the prerint
pdf: 2017_preprint_taggle.pdf
# A supplement PDF
#supplement: 2017_preprint_lineage_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
supplements:
#- name: General UpSet
#  # use link instead of abslink if you want to link to the master directory
#  abslink: http://vials.io/talk/
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hostet
code: https://github.com/caleydo/lineupjs/tree/develop

# Link to an official preprint server
preprint_server: https://arxiv.org/abs/1712.05944

abstract: "
<p>Visualization of tabular data - for both presentation and exploration purposes - is a well-researched area. Although effective visual presentations of complex tables are supported by various plotting libraries, creating such tables is a tedious process and requires scripting skills. In contrast, interactive table visualizations that are designed for exploration purposes either operate at the level of individual rows, where large parts of the table are accessible only via scrolling, or provide a high-level overview that often lacks context-preserving drill-down capabilities. In this work we present Taggle, a novel visualization technique for exploring and presenting large and complex tables that are composed of individual columns of categorical or numerical data and homogeneous matrices. The key contribution of Taggle is the hierarchical aggregation of data subsets, for which the user can also choose suitable visual representations. The aggregation strategy is complemented by the ability to sort hierarchically such that groups of items can be flexibly defined by combining categorical stratifications and by rich data selection and filtering capabilities. We demonstrate the usefulness of Taggle for interactive analysis and presentation of complex genomics data for the purpose of drug discovery.</p>"

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements

We thank Bikram Kawan for his contributions to the initial prototype implementation as well as Christian Haslinger and Andreas Wernitznig for providing valuable conceptual feedback. This work was supported in part by Boehringer Ingelheim Regional Center Vienna, the State of Upper Austria (FFG \#851460), and the US National Institutes of Health (U01 CA198935).
