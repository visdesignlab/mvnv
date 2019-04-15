---
layout: technique
# The quotes make the : possible, otherwise you can do it without quotes
title: "Adjacency Matrix"
category: "Tabular"
key: adj-matrix
# node-link | tabular | implicit | coordinated | hybrid 
type: tabular

description : Topology driven layouts prioritize the topology of the network over the attributes of the nodes and edges. The most common node-link layouts, such as force-directed layouts, spectral layouts, or orthogonal layouts fall into this class, or more specifically into the free layouts as described by Schulz and Schumann. Trees are also commonly drawn as topology driven node-link layouts.


abstract : abstract

# The shortname is used for auto-generated titels
shortname: AdjMatrix
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: adj-matrix.png
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
          sparse: 2
          dense: 3
          layered: 2
          trees: 1
     node_attr_size: 
          few: 2
          several: 3
     node_attr_type: 
          homogeneous: 3
          heterogeneous: 2
     edge_attr_size: 
          few: 3
          several: 2
     edge_attr_type: 
          homogeneous: 3
          heterogeneous: 2
     structure: 
          single: 3
          neighbor: 3
          path: 1
          cluster: 3
          network: 2

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Reccommended Usage

Recommended when...


