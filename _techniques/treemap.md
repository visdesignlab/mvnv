---
layout: technique
# The quotes make the : possible, otherwise you can do it without quotes
title: "Implicit - Leaves Only"
category: "Implicit"
key: treemap
# node-link | tabular | implicit | coordinated | hybrid | smallMultiples
type: implicit

description : Leaf-centric layouts are those that only or predominantly allocate screen space for the leaves of a multivariate tree and encode the hierarchy by inclusion/nesting. The classical example of this type of layout is the Treemap, originally proposed by Johnson and Shneiderman.

# Node-link diagrams are the most common graphical representation of networks. In a node-link diagram, the nodes are drawn as point marks and the links as line/curve marks connecting the nodes. Node link layouts are the subject of its own field of study -- graph drawing -- and countless algorithms for node-link layouts have been developed.

abstract : abstract

# The shortname is used for auto-generated titels
shortname: treeMap
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: treemap.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
# icon: node-link.png

examples:
     - slingsby_configuring_2009
     - balzer_voronoi_2005

papers:
     -  schulz_design_2011
     - bruls_squarified_2000
     -  balzer_voronoi_2005
     - slingsby_configuring_2009
     - fekete_interactive_2002

optimal: Optimized for tree structures and tasks on single nodes and subnetworks. 
good: Suports medium and large networks with over 1000 nodes, as well as tasks on neighbors.
adequate: Not ideal for several, heterogenous node attributes or tasks on paths.
bad: Does not support edge attributes or non-tree like networks, as well as tasks on clusters.  


scores:
     size: 
          small: 3
          medium: 2
          large: 2
     type: 
          sparse: 0
          dense: 0
          layered: 0
          trees: 3
     node_attr_size: 
          few: 3
          several: 1
     node_attr_type: 
          homogeneous: 3
          heterogeneous: 1
     edge_attr_size: 
          few: 0
          several: 0
     edge_attr_type: 
          homogeneous: 0
          heterogeneous: 0
     structure: 
          single: 3
          neighbor: 2
          path: 1
          cluster: 0
          network: 3

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Reccommended Usage

Leaf-centric implicit layouts are well
suited for analyzing trees with an important numerical attribute on
the leaves. Because this layout assigns most, if not all, display space
to the leaves of a tree, and the hierarchical structure groups small
elements, it is more scalable than implicit layouts that also visualize
inner nodes (see Table 2). Treemaps have been used to visualize
up to a million items. Path-related tasks can be difficult because
the tree structure is often only implied.

