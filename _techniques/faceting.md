---
layout: technique
# The quotes make the : possible, otherwise you can do it without quotes
title: "Faceting"
category: "Node-Link"
key: faceting
# node-link | tabular | implicit | coordinated | hybrid 
type: node-link

description : Description

abstract : abstract

# The shortname is used for auto-generated titels
shortname: Faceting
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: faceting.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
# icon: node-link.png

papers:
     -  okoe_node-link_2018
     -  jankun-kelly_moiregraphs:_2003

scores:
     size: 
          small: 3
          medium: 1
          large: 1
     type: 
          sparse: 3
          dense: 1
          layered: 3
          trees: 1
     node_attr_size: 
          few: 3
          several: 1
     node_attr_type: 
          homog: 3
          hetero: 3
     edge_attr_size: 
          few: 2
          several: 1
     edge_attr_type: 
          homog: 2
          hetero: 1
     structure: 
          single: 3
          neighbors: 2
          paths: 1
          clusters: 1
          network: 1

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Reccommended Usage

Rec Usage
