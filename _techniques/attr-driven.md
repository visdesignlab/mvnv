---
layout: technique
# The quotes make the : possible, otherwise you can do it without quotes
title: "Attribute Driven Positioning"
category: "Node-Link"
key: attr-driven
# node-link | tabular | implicit | coordinated | hybrid 
type: node-link

description : Attribute-driven positioning (fixed layouts) assigns node or edge positions according to one or more attribute values.

abstract : abstract

# The shortname is used for auto-generated titels
shortname: Attr-Driven
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: attr-driven.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
# icon: node-link.png

papers:
     -  okoe_node-link_2018
     -  jankun-kelly_moiregraphs:_2003

optimal: Optimized for small and sparse networks. Is well suited for few node attributes, particular of homogenous types.  
good: Supports few edge attributes, but only if of homogenous types. Can be used for tasks on neighbors and networks.   
adequate: Not ideal for tasks on paths, clusters, and for large, dense, layered or tree networks. 

scores:
     size: 
          small: 3
          medium: 1
          large: 1
     type: 
          sparse: 3
          dense: 1
          layered: 1
          trees: 1
     node_attr_size: 
          few: 3
          several: 1
     node_attr_type: 
          homogeneous: 3
          heterogeneous: 1
     edge_attr_size: 
          few: 2
          several: 1
     edge_attr_type: 
          homogeneous: 2
          heterogeneous: 1
     structure: 
          single: 3
          neighbor: 2
          path: 1
          cluster: 1
          network: 2
# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Reccommended Usage

Attribute-driven positioning is well suited for cases where the value of a single node attribute or the relationships between two node attributes are the most important feature in a network dataset, but it does not lend itself well to visualizing the topology of the network. Even simple structures such as neighborhoods can be difficult to spot. Complex structures such as paths or clusters can be hidden completely. Unlike attribute-driven faceting, the technique is well suited for quantitative attributes. The technique works mostly for homogeneous networks since it relies on common node attributes for positioning.
Due to the placement driven by attributes, nodes can occlude each
other (although jitter was suggested to address that), and
edge crossings are much more likely than, e.g., in a force-directed
layout. Hence, attribute-driven positioning is not well suited for
dense networks or for visualizing edge attributes. We recommend
attribute-driven positioning for smaller, sparse networks where relationships
between node attributes are paramount to the analysis
task, and topological features only provide context.

