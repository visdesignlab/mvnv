---
layout: technique
# The quotes make the : possible, otherwise you can do it without quotes
title: "Quilts"
category: "Tabular"
key: quilts
# node-link | tabular | implicit | coordinated | hybrid 
type: tabular

description : A quilt is a tabular layout optimized for layered networks. Quilts are similar to an adjacency matrix in that nodes are represented as either rows or columns, and edges are shown in the cells at the intersection of the source and target nodes.


abstract : abstract

# The shortname is used for auto-generated titels
shortname: Quilts
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: quilts.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
# icon: node-link.png

examples:
     - bezerianos_geneaquilts:_2010
     - bezerianos_geneaquilts:_2010_2

papers:
     -  bae_developing_2011
     -  bezerianos_geneaquilts:_2010
     -  watson_visualizing_2008

optimal: Optimized for networks with several node or edge attributes. Also ideal for tasks on single nodes and neighbors.
good: Supports tasks on paths, clusters, and sub-networks.    
adequate: Not ideal for networks with more than 100 nodes, or dense networks. 

scores:
     size: 
          small: 3
          medium: 1
          large: 1
     type: 
          sparse: 3
          dense: 1
          layered: 3
          trees: 3
     node_attr_size: 
          few: 3
          several: 3
     node_attr_type: 
          homogeneous: 3
          heterogeneous: 3
     edge_attr_size: 
          few: 3
          several: 3
     edge_attr_type: 
          homogeneous: 3
          heterogeneous: 2
     structure: 
          single: 3
          neighbor: 3
          path: 2
          cluster: 2
          network: 2

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Reccommended Usage

Quilts are well suited for layered networks
or k-partite networks where all partitions have connections to at
most two layers. For these kinds of networks, quilts require less
screen-space than matrices and have similar favorable properties
in terms of attributes (see Table 2). Links between nonconsecutive
layers, however, can be problematic to integrate. Albeit the class of
networks suitable for quilts is small, they support all relevant tasks
on these well.


