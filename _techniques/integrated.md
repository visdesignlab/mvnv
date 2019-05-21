---
layout: technique
# The quotes make the : possible, otherwise you can do it without quotes
title: "Integrated"
category: "Coordinated Views"
key: integrated
# node-link | tabular | implicit | coordinated | hybrid 
type: coordinated

description : Unlike juxtaposed views, in integrated views the topology and the attribute visualizations are laid out with the other view in mind. Typically, integrated MCVs have an unambiguous spatial relationship between the topological features and their attributes.


abstract : abstract

# The shortname is used for auto-generated titels
shortname: integrated
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: integrated.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
# icon: node-link.png

examples:
     - meyer_pathline:_2010
     - nobre_juniper:_2019
     - naquin_circus:_2014

papers:
     - kerzner_graffinity:_2017
      - meyer_pathline:_2010
     - nobre_juniper:_2019
     - naquin_circus:_2014
     - krzywinski_circos:_2009
     -  meyer_mizbee:_2009
     - partl_enroute:_2012
     - dunne_graphtrail:_2012
     - partl_enroute:_2013
     -  partl_pathfinder:_2016
     - eisen_cluster_1998
     -  seo_interactively_2002 
     -  lee_det._2008
     - nobre_lineage:_2019



optimal: Optimized for networks with several, heterogenous, node attributes. Also ideal for tasks on single nodes, neighbors, and paths.
good: Supports edge attributes both homogeneous and heterogeneous, and tasks on subnetworks.    
adequate: Not ideal for large networks, or tasks on clusters. 

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
          several: 3
     node_attr_type: 
          homogeneous: 3
          heterogeneous: 3
     edge_attr_size: 
          few: 2
          several: 2
     edge_attr_type: 
          homogeneous: 3
          heterogeneous: 3
     structure: 
          single: 3
          neighbor: 3
          path: 3
          cluster: 1
          network: 2

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Reccommended Usage

Integrated MCV approaches are exceptionally
good at integrating complex attribute vectors of various types
with topology, if the topology can be represented sensibly in a linear
layout. Integration is easily achieved for tabular approaches
such as adjacency matrices, trees, and cases where a linear ordering
is natural, such as when using genome coordinates. For general
networks, integrated MCVs can usually not visualize more complex
topology, but they can be very useful if the network can be
linearized, e.g., using spanning trees or user-selected paths. Compared
to juxtaposed views, integrated views excel at tasks related to
paths, neighborhoods, and when used with matrices, clusters (see
Table 2). One drawback of integrated views is scalability with respect
to the number of nodes and density.
