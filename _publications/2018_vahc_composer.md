---
layout: publication
# Quotes make the : possible, otherwise you can type this without quotes
title: "Composer: Visual Cohort Analysis of Patient Outcomes"
# Keys must be unique to each paper, see section below for more details
key: 2018_vahc_composer
# Select one of the options below
type: paper 
# use this if this paper was previously a preprint and you need to preserve the old URL
# redirect_from: /publications/2017_preprint_lineage
# Uncomment the line below for publications which should only appear on a personal webpage
# personal: y

# Auto-generates titles and alt-descriptors
shortname: Composer
# Add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/publications/
image: 2018_vahc_composer.png
# Add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/publications/
image_large: 2018_vahc_composer_teaser.png

# Authors in the "database" can be used with just their person "key"
authors:
- rogers
- Nicholas Spina
- Ashley Neese
- Rachel Hess
- Darrel Brodke
- lex

# Include a shortened name for the journal or conference/proceedings
journal-short: VAHC 2018
year: 2018

# Create BibTeX info, using one of the entry choices
# Articles have a "journal", and inproceedings have a "booktitle"
# Preprints are articles with the location of preprint mentioned in "journal"
# You can remove fields you don't need, or else leave them blank
# Try to include a DOI, or use the publisher URL below
# Specify new BibTeX fields by adding a new key and value inside "bib:"
bibentry: inproceedings
bib:
  journal:
  booktitle: Workshop on Visual Analytics in Healthcare at AMIA (VAHC 2018), to appear
  editor: 
  publisher:
  address: 
  doi: 
  url: 
  volume: 
  number: 
  pages:
  month: 
  pmcid: 

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
#award: EuroVis 2016 Honorable Mention Award

# Provide a link to the publisher's webpage if no DOI is available
publisherURL: https://www.visualanalyticshealthcare.org/proceedings.html

# Link to an official preprint server
preprint_server: https://arxiv.org/abs/1809.08177

# Links to a project hosted on VDL, or else externally on your own site
project: 
#external-project: https://pathfinder.caleydoapp.org/

# Video entry and preview video
#video: 2016_eurovis_pathfinder_video
#preview-video: 2016_eurovis_pathfinder_video_preview

# Provide a preprint and supplement pdf
pdf: 2018_vahc_composer.pdf
#supplement: 2016_eurovis_pathfinder_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
#supplements:
#- name: Vials Conference Talk Slides
  # Use link instead of abslink if you want to link to the master directory
 # abslink: http://vials.io/talk/
  # Defaults to a download icon, use this if you want a link-out icon
  #linksym: true

# Link to the repository where the code is hosted
code: https://github.com/visdesignlab/Composer/

abstract: "
Visual cohort analysis utilizing electronic health record (EHR) data has become an important tool in clinical assessment of patient outcomes. In this paper, we introduce Composer, a visual analysis tool for orthopaedic surgeons to compare changes in physical functions of a patient cohort following various spinal procedures. The goal of our project is to help researchers analyze outcomes of procedures and facilitate informed decision-making about treatment options between patient and clinician. With Composer, analysts can dynamically define a patient cohort using demographic information, clinical parameters, and events in patient medical histories and then analyze patient-reported outcome scores for the cohort over time, as well as compare it to other cohorts. We describe a usage scenario for use of the tool in a clinical setting.
"

# After the ---, you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---

# Acknowledgements

This project is funded by the Orthopaedic Research Center and NSF IIS 1751238.