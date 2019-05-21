---
layout: technique
# The quotes make the : possible, otherwise you can do it without quotes
title: "BioFabric"
category: "Tabular"
key: bioFabric
# node-link | tabular | implicit | coordinated | hybrid 
type: tabular

description : Biofabric is a tabular layout that places each node in a row of the table and draws edges between the nodes in columns.


abstract : abstract

# The shortname is used for auto-generated titels
shortname: bioFabric
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: bioFabric.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
# icon: node-link.png
examples:
     - longabaugh_combing_2012



papers:
     -  longabaugh_combing_2012

optimal: Optimized for showing node and edge attributes since it supports several attributes and of heterogeneous types. 
good: Supports tasks on subnetworks and layered networks.   
adequate: Not ideal for tasks on neighbors, paths,clusters, or for graphs with over 100 nodes. 



scores:
     size: 
          small: 3
          medium: 1
          large: 1
     type: 
          sparse: 3
          dense: 3
          layered: 2
          trees: 1
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
          heterogeneous: 3
     structure: 
          single: 3
          neighbor: 1
          path: 1
          cluster: 1
          network: 2

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Reccommended Usage

Biofabric is unique in that it can be used to
visualize rich edge attributes and node attributes at the same time,
while also making it possible to align these attribute visualizations
on the same scale. It therefore has the potential to visualize large
attribute datasets and also heterogeneous node types. Biofabric is
about equally scalable to an adjacency matrix in terms of nodes,
but less scalable with respect to the density of the network. Biofabric
is not well studied with respect to users’ ability to detect
topological features, but BioFabric is likely slightly more difficult
for discovering neighbors and clusters than matrices. Overall, we
recommend BioFabric for small, sparse networks with many nodes
and rich edge attributes.


