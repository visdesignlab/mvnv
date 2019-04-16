---
layout: technique
# The quotes make the : possible, otherwise you can do it without quotes
title: "Adjacency Matrix"
category: "Tabular"
key: adj-matrix
# node-link | tabular | implicit | coordinated | hybrid 
type: tabular

description : Adjacency matrices encode nodes as rows and columns, wherease the presence/absence of an edge between two nodes is encoded in the cell where the nodes rows and columns intersect. 

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

optimal: Optimized for small and dense networks. Is well suited for several node attributes, preferably of homogenous types.  
good: Supports several edge attributes, and heterogenous node or edge attributes. Can be used for layered or sparse networks.   
adequate: Not ideal for tasks on paths and for visualizing trees. 
bad:

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

Adjacency matrices are one of the most versatile approaches with regard to visualizing multiple attributes for nodes and edges. Alper et al. studied the efficacy of edge-attribute encodings by comparing edge-weight encodings on node-link diagrams to different edge-weight encodings in the cells of adjacency matrices. They conclude that in-cell encoding in adjacency matrices outperformed on-edge encoding on node-link diagrams for effectively displaying edge weights for their study subjects. Adjacency matrices require quadratic screen space with respect to the number of nodes; hence, the size of the network that can be visualized without aggregation is limited. Matrices reserve space for every possible edge, and, thus, dense and even completely connected networks are an ideal fit for matrices. Matrices are well suited for tasks involving all the topological structures we discuss, except for paths assuming an appropriate seriation method was applied. Overloaded approaches such as visually superimposing the paths directly on the adjacency matrix can aid in path-related tasks. Trees and layered networks can technically be visualized with an adjacency matrix, but the sparsity of these networks suggests that they are not a good fit. Overall, adjacency matrices are recommended for smaller, complex and dense networks with rich node and/or edge attributes, for all tasks except for those involving paths.


