---
layout: technique
# The quotes make the : possible, otherwise you can do it without quotes
title: "Implicit - Inner Nodes + Leaves"
category: "Implicit"
key: sunburst
# node-link | tabular | implicit | coordinated | hybrid | smallMultiples
type: implicit

description : Implicit layouts such as Sunburst and Icicle Plots show both the whole backbone of the tree with the intermediate nodes and the leafs. The hierarchy is encoded by adjacency, i.e a child node is adjacent to its root. The root-child relationship is encoded by the order (inner-to-outer for Sunburst, for example).

# Node-link diagrams are the most common graphical representation of networks. In a node-link diagram, the nodes are drawn as point marks and the links as line/curve marks connecting the nodes. Node link layouts are the subject of its own field of study -- graph drawing -- and countless algorithms for node-link layouts have been developed.

abstract : abstract

# The shortname is used for auto-generated titels
shortname: sunBurst
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: sunburst.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
# icon: node-link.png

examples:
     - sunburst_alex
     - beck_asymmetric_2014
papers:
     -  andrews_information_1998
     -  stasko_focus+context_2000
     - kruskal_icicle_1983
     -  beck_asymmetric_2014
     - schulz_design_2011



optimal: Optimized for trees and tasks on single nodes, neighbors, paths, and subnetworks. 
good: Suports medium networks, up to 1000 nodes.   
adequate: Not ideal for several, heterogenous node attributes, as well as large networks with over 1000 nodes.
bad: Does not support edge attributes or non-tree like networks, as well as tasks on clusters.  


scores:
     size: 
          small: 3
          medium: 2
          large: 1
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
          neighbor: 3
          path: 3
          cluster: 0
          network: 3

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Reccommended Usage

Implicit tree layouts for inner nodes and
leaves are well suited for tree datasets with numerical attributes
at the leaves and potentially a secondary attribute at inner nodes
and/or leaves. In contrast to leaves-only layouts, these layouts support
finding neighbors and paths between nodes well (see Table 2).
The layouts scale well with regard to the number of nodes; however,
deep hierarchies tend to use plenty of of space. Various intuitive interactions are available, such as successively revealing leaves on
demand, to deal with deeper trees. Overall, we recommend implicit
tree layouts for inner nodes and leaves for tree datasets where one
numerical leaf attribute is dominant, and the tree topology plays an
important role. 


