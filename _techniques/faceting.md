---
layout: technique
# The quotes make the : possible, otherwise you can do it without quotes
title: "Faceting"
category: "Node-Link"
key: faceting
# node-link | tabular | implicit | coordinated | hybrid 
type: node-link

description : Attribute-driven faceting groups nodes according to one or more attributes and places the elements of a group in a shared region.

abstract : abstract

# The shortname is used for auto-generated titels
shortname: Faceting
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: faceting.png
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
# icon: node-link.png

examples: 
     - shneiderman_network_2006
     - rodrigues_group-in-a-box_2011

papers:
     -  shneiderman_network_2006
     -  barsky_cerebral:_2008
     -  schulz_visual_2008
     -  partl_contour:_2014
     -  pretorius_visual_2008
     -  ghani_visual_2013
     -  ahmed_visualisation_2007
     -  rodrigues_group-in-a-box_2011
     -  aris_designing_2007

optimal: Optimized for networks with few, but homogeneous or heteregenous node attributes. Also ideal for layered sparse or layered graphs.
good: Supports few, homogenous edge attributes, and tasks on neighbors.    
adequate: Not ideal for dense, layered or tree networks. Also, ill suited for tasks on paths or clusters. 


scores:
     size: 
          small: 3
          medium: 1
          large: 1
     type: 
          sparse: 3
          dense: 1
          layered: 3
          trees: 1
     node_attr_size: 
          few: 3
          several: 1
     node_attr_type: 
          homogeneous: 3
          heterogeneous: 3
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
          network: 1

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Reccommended Usage

Attribute-driven faceting is well suited for
networks with different node types or with an important categorical
or set-like attribute. Such faceting is especially useful when the
separation into groups and the study of the interaction within and
between the groups are the subject of the analysis, which is commonly
the case in k-partite and layered networks (see Table 2). Due
to restrictions on the layout, it is slightly less scalable with respect
to the number of nodes and network density than node-link layouts.
Other attributes can be visualized independently of the basic
principle of faceting, so that the scalability with respect to other attributes
depends on these choices. Edge attributes are not supported
by faceting and have to rely on a secondary encoding. Neighborhoods, paths, and clusters are not easily visible if they span different
facets.We recommend attribute faceting for cases where nodes can
be separated into groups easily and where these groups are central
to the analysis.
