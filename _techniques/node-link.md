---
layout: technique
# The quotes make the : possible, otherwise you can do it without quotes
title: "Topology Driven"
category: "Node-Link"
key: node-link
# node-link | tabular | implicit | coordinated | hybrid 
type: node-link

description : Topology driven layouts prioritize the topology of the network over the attributes of the nodes and edges. The most common node-link layouts, such as force-directed layouts, spectral layouts, or orthogonal layouts fall into this class, or more specifically into the free layouts as described by Schulz and Schumann. Trees are also commonly drawn as topology driven node-link layouts.


# Node-link diagrams are the most common graphical representation of networks. In a node-link diagram, the nodes are drawn as point marks and the links as line/curve marks connecting the nodes. Node link layouts are the subject of its own field of study -- graph drawing -- and countless algorithms for node-link layouts have been developed.

abstract : abstract

# The shortname is used for auto-generated titels
shortname: NodeLink
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: topology-driven.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
# icon: node-link.png

papers:
     -  okoe_node-link_2018
     -  jankun-kelly_moiregraphs:_2003

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
          few: 2
          several: 1
     node_attr_type: 
          homog: 3
          hetero: 2
     edge_attr_size: 
          few: 2
          several: 1
     edge_attr_type: 
          homog: 3
          hetero: 1
     structure: 
          single: 3
          neighbors: 3
          paths: 2
          clusters: 2
          network: 2


examples:
 - image: "abyss-explorer.png"
   caption: "Abyss-Explorer"
   #bunch of properties...
 - image: "on-edge.png"
   caption: "On Edge Encoding"
   #bunch of properties...
 - image: "on-node.png"
   caption: "On Node Encoding"
   #bunch of properties...


# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Reccommended Usage

On-node/edge encoding supports the integration of topology and attribute-based tasks well, and supports all kinds of MVN tasks on all structures. On-node/edge encoding is easily understood by most users, and works well for sparse complex networks, layered networks, and trees. However, it comes with scalability trade-offs. Even for a modest number of nodes in a node-link layout, node size has to be limited; hence little space is available to encode attributes. When details about nodes are shown, as for example in MoireGraphs , the number of nodes that can be displayed simultaneously is limited. We recommend on-node layouts when only a few (usually under 5) attributes on the nodes are shown. On-node encoding generally works well for networks with different node types. On-edge encoding is even more limited than on-node encoding. First, most node-link layouts guarantee that nodes do not overlap; however edges commonly cross even in fairly sparse networks, interfering with on-edge encoding. Second, the nature of the link mark as a slim line limits the discriminability of any modulation of the visual channel. We recommend on-edge encoding for a single numerical or categorical attribute only.  


