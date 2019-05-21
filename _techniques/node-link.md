---
layout: technique
# The quotes make the : possible, otherwise you can do it without quotes
title: "On-Node/On-Edge Encoding"
category: "Node-Link"
key: node-link
# node-link | tabular | implicit | coordinated | hybrid 
type: node-link

description : On-node and on-edge encoding refers to modifying the visual appearance (size, color) of a node or an edge or embedding marks (bar charts, line charts, etc.) in a node or an edge in a node-link diagram.

abstract : abstract

# The shortname is used for auto-generated titels
shortname: NodeLink
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: topology-driven.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
# icon: node-link.png

examples:
     - neuweger_visualizing_2009
     - jankun-kelly_moiregraphs:_2003
     - nielsen_abyss-explorer:_2009
     # - schoffel_user_2016

papers:
     -  auber_multiscale_2003
     -  dunne_motif_2013
     -  gehlenborg_visualization_2010
     -  heer_vizster:_2005
     -  neuweger_visualizing_2009
     - ghani_improving_2011
     - jankun-kelly_moiregraphs:_2003
     - jusufi_network_2010
     - westenberg_visualizing_2008
     - junker_vanted:_2006
     - katz_sashimi_2013,guo_flow_2009
     - guo_flow_2009
     - xu_user_2012
     - schwank_visualizing_2016
     - schoffel_user_2016
     - ko_analyzing_2014
     - nielsen_abyss-explorer:_2009
     - holten_extended_2011
     - elzen_multivariate_2014

optimal: Optimized for layered networks and trees. Also ideal for tasks on single nodes or immediate neighbors.
good: Supports tasks on paths, clusters, and subnetworks.     
adequate: Not ideal for large or dense networks, as well as encoding several or heterogeneous edge attributes.
    

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
          homogeneous: 3
          heterogeneous: 2
     edge_attr_size: 
          few: 2
          several: 1
     edge_attr_type: 
          homogeneous: 3
          heterogeneous: 1
     structure: 
          single: 3
          neighbor: 3
          path: 2
          cluster: 2
          network: 2


# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Reccommended Usage

On-node/edge encoding supports the integration of topology and attribute-based tasks well, and supports all kinds of MVN tasks on all structures. On-node/edge encoding is easily understood by most users, and works well for sparse complex networks, layered networks, and trees. However, it comes with scalability trade-offs. Even for a modest number of nodes in a node-link layout, node size has to be limited; hence little space is available to encode attributes. When details about nodes are shown, as for example in MoireGraphs , the number of nodes that can be displayed simultaneously is limited. We recommend on-node layouts when only a few (usually under 5) attributes on the nodes are shown. On-node encoding generally works well for networks with different node types. On-edge encoding is even more limited than on-node encoding. First, most node-link layouts guarantee that nodes do not overlap; however edges commonly cross even in fairly sparse networks, interfering with on-edge encoding. Second, the nature of the link mark as a slim line limits the discriminability of any modulation of the visual channel. We recommend on-edge encoding for a single numerical or categorical attribute only.  


