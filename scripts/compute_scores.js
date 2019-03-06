function compute_scores(allScores) {
        //set techniqueScore to 0;

     let allTechniques =[];


      Object.keys(allScores).map(technique=>allTechniques.push(
        {key:technique,value:0,description:allScores[technique].description,title:allScores[technique].title}));

      d3.select('#wizard_panel').selectAll('input:checked').filter(function(d){
        return d3.select(this).attr('type') === 'radio'
      }).each(function(c){
        let category = d3.select(this).attr('name');
        let value = d3.select(this).attr('label');

      Object.keys(allScores).map(technique=>{
        let item = allTechniques.find(v=>v.key === technique);
        // console.log('item',item)
         item.value =  allScores[technique][category][value] ? item.value + allScores[technique][category][value] : item.value });      
      });

    return allTechniques
    
    }

    function render_technique(technique){

      // console.log('here',site,technique)
      // d3.select('.paper-list-block')
      // .append('a')
      // .attr('href',site.baseurl+technique.url)
      // .append('img')
      // .attr('alt',technique.shortname + screenshot)
      // .attr('class','paper-image-small')
      // .attr('src',site.baseurl + '/assets/images/techniques/' + technique.image)
      let newItem =  d3.select('.publication-content-right')
      .append('div')
      .attr('class','paper-list-block');

      newItem
      .append('p')
      .attr('class','pubs')
      .append('span')
      .attr('class','paper-title')
      .append('a')
      .text(technique.title);

      newItem
      .append('p')
      .text(technique.description);


//       <div class="paper-list-block">
//   <a href="{{ site.baseurl }}{{ technique.url }}"><img alt="{{ technique.shortname }} screenshot" class="paper-image-small"
//       src="{{ site.baseurl }}/assets/images/techniques/{{ technique.image }}"></a>
//   <p class="pubs">

//     <span class="paper-title"><a href="{{ site.baseurl }}{{ technique.url }}">{{ technique.title }}</a></span><br />
//     {{ technique.description }} <a href="{{ site.baseurl }}{{ technique.url }}">More...</a>
//   </p>
// </div>


    }