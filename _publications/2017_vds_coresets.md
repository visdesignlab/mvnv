---
layout: publication
# The quotes make the : possible, otherwise you can do it without quotes
title: "Visualization of Big Spatial Data using Coresets for Kernel Density Estimates"
key: 2017_vds_coresets
type: paper

# The shortname is used for auto-generated titles
shortname: Coresets
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2017_vds_coresets.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- Yan Zheng
- Yi Ou
- lex
- Jeff M. Phillips

journal-short: VDS'17
year: 2017

bibentry: inproceedings
bib:
  booktitle: IEEE Symposium on Visualization in Data Science (VDS '17), to appear
  doi: 
  publisher: IEEE

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
#award: Honorable Mention Award

# Use if this paper is linked to an internal project. This will link to the project site
project:

# Use this if you have an external project website
#external-project: http://github.com/visdesignlab/graffinity

# The reference to the video entry
video: 
# The reference to the preview video entry
#preview-video: 2016_eurovis_clue_video_preview

# the prerint
pdf: 2017_vds_coresets.pdf
# A supplement PDF
supplement:

# Extra supplements, such as talk slides, data sets, etc.
supplements:
#- name: Vials Conference Talk Slides
#  # use link instead of abslink if you want to link to the master directory
#  abslink: http://vials.io/talk/
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hostet
code: https://github.com/SayingsOlly/kernel_vis_d3

# Link to an official preprint server
preprint_server: https://arxiv.org/abs/1709.04453

abstract: "
<p>The size of large, geo-located datasets has reached scales where visualization of all data points is inefficient. Random sampling is a method to reduce the size of a dataset, yet it can introduce unwanted errors. We describe a method for subsampling of spatial data suitable for creating kernel density estimates from very large data and demonstrate that it results in less error than random sampling. We also introduce a method to ensure that thresholding of low values based on sampled data does not omit any regions above the desired threshold when working with sampled data. We demonstrate the effectiveness of our approach using both, artificial and real-world large geospatial datasets.</p>"

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---


# Acknowledgements
Thanks to support by NSF CCF-1350888, IIS-1251019, ACI-1443046, CNS-1514520, CNS-1564287 and NIH U01 CA198935.
