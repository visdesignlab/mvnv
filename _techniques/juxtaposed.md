---
layout: technique
# The quotes make the : possible, otherwise you can do it without quotes
title: "Juxtaposed"
category: ""
key: juxtaposed
# node-link | tabular | implicit | coordinated 
type: coordinated

description : In the context of MCV visualization, juxtaposed views separate the topology visualization from the attribute visualization into two or more views. Links between the topology and the attributes are not encoded and typically are revealed through interaction by linking and brushing.

abstract : abstract

# The shortname is used for auto-generated titels
shortname: juxtaposed
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: juxtaposed.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
# icon: node-link.png

examples:
     - guo_flow_2009_2
     - pienta_vigor:_2018
papers:
     -  guo_flow_2009
     - pienta_vigor:_2018
     - abello_matrix_2004
     - heer_vizster:_2005
     - stasko_jigsaw:_2008
     - bezerianos_graphdice:_2010
     - viau_flowvizmenu_2010
     -  ko_analyzing_2014
     - plaisant_information_1998
     


optimal: Optimized for networks with several, heterogenous, node or attributes. Also ideal for layered networks and trees.
good: Supports medium networks, as well as tasks on clusters and subnetworks.     
adequate: Not ideal for large or dense networks, as well as tasks on neighbors and paths.


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
          few: 3
          several: 3
     edge_attr_type: 
          homogeneous: 3
          heterogeneous: 3
     structure: 
          single: 2
          neighbor: 1
          path: 1
          cluster: 2
          network: 2

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Reccommended Usage

Juxtaposed MCVs are recommended for large networks and/or very large numbers or heterogeneous types of node
and link attributes. Since each view can optimize for
either topology or attributes without concern for the other, the independent
analysis of attributes or topology is generally well supported.
Linking and brushing can reintroduce the connection, but
require interaction, and even then matches between specific items
in a large brushed set are difficult to identify. Consequently, juxtaposed
views do not support the tasks on our topological structures
well.
