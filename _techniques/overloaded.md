---
layout: technique
# The quotes make the : possible, otherwise you can do it without quotes
title: "Overloaded"
category: ""
key: overloaded
# node-link | tabular | implicit | coordinated 
type: coordinated

description : Overloaded views are those that display two encodings on top of each other. We distinguish overloading from on-node encoding in that it encodes shared properties of nodes by overlaying a visual feature on the whole view.

abstract : abstract

# The shortname is used for auto-generated titels
shortname: overloaded
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: overloaded.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
# icon: node-link.png

papers:
     -  okoe_node-link_2018
     -  jankun-kelly_moiregraphs:_2003

optimal: Optimized for networks with few, homogeneous, node attributes. Also ideal for layered networks, trees, and tasks on single nodes, neighbors, and clusters.
good: Supports tasks on clusters and subnetworks.    
adequate: Not ideal for encoding edge attributes of any type, as well as severl heterogeneous node attributes.   

scores:
     size: 
          small: 3
          medium: 2
          large: 1
     type: 
          sparse: 3
          dense: 1
          layered: 3
          trees: 3
     node_attr_size: 
          few: 3
          several: 1
     node_attr_type: 
          homogeneous: 3
          heterogeneous: 1
     edge_attr_size: 
          few: 1
          several: 1
     edge_attr_type: 
          homogeneous: 1
          heterogeneous: 1
     structure: 
          single: 3
          neighbor: 3
          path: 2
          cluster: 3
          network: 2

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Reccommended Usage

Overloaded views are well suited for display
sets, groupings, or clusters on top of an existing representation
of the topology of the network. Overloading works best if the
grouped elements are also in spatial proximity in the underlying
topology representation, which is commonly the case when visualizing
cluster membership. The major limitation of this approach is
the limited number of concurrent attributes it supports. While encoding
one or two attributes simultaneously is possible, encoding
more than two attributes with overloading can lead to clutter. We hence recommend overloading for the particular use
case of visualizing set-memberships or clusters on top of node-link
diagrams.

