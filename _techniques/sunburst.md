---
layout: technique
# The quotes make the : possible, otherwise you can do it without quotes
title: "Inner Nodes + Leaves"
category: "Implicit"
key: sunburst
# node-link | tabular | implicit | coordinated | hybrid | smallMultiples
type: implicit

description : desc.

# Node-link diagrams are the most common graphical representation of networks. In a node-link diagram, the nodes are drawn as point marks and the links as line/curve marks connecting the nodes. Node link layouts are the subject of its own field of study -- graph drawing -- and countless algorithms for node-link layouts have been developed.

abstract : abstract

# The shortname is used for auto-generated titels
shortname: sunBurst
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: sunBurst.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
# icon: node-link.png

papers:
     -  okoe_node-link_2018
     -  jankun-kelly_moiregraphs:_2003

scores:
     task1: 2
     task2: 2
     task3: 1

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Reccommended Usage

On-node/edge encoding supports the integration of topology and attribute-based tasks well, and supports all kinds of MVN tasks on all structures. On-node/edge encoding is easily understood by most users, and works well for sparse complex networks, layered networks, and trees. However, it comes with scalability trade-offs. Even for a modest number of nodes in a node-link layout, node size has to be limited; hence little space is available to encode attributes. When details about nodes are shown, as for example in MoireGraphs {% cite jankun-kelly_moiregraphs:_2003 %}, the number of nodes that can be displayed simultaneously is limited. We recommend on-node layouts when only a few (usually under 5) attributes on the nodes are shown. On-node encoding generally works well for networks with different node types. On-edge encoding is even more limited than on-node encoding. First, most node-link layouts guarantee that nodes do not overlap; however edges commonly cross even in fairly sparse networks, interfering with on-edge encoding. Second, the nature of the link mark as a slim line limits the discriminability of any modulation of the visual channel. We recommend on-edge encoding for a single numerical or categorical attribute only.  


