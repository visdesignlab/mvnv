function compute_scores(allScores){

  d3.select('#recommendations').style('visibility','visible');

  //create a list of key/value pairs to use in the scores
  let activeOptions = d3.selectAll('.is-active').data();   

  Object.keys(allScores).map(technique => {
    allScores[technique].totalScore = 0;
    activeOptions.map(option=>{
      let score = allScores[technique][option.category][option.option];
      // console.log(technique,option.category,option.option,score);
      allScores[technique].totalScore = allScores[technique].totalScore + score;
    })
     let score = activeOptions.length > 0 ? allScores[technique].totalScore / activeOptions.length : allScores[technique].totalScore;
     allScores[technique].averageScore = Math.round( score * 10) / 10
  })

  let scoreArray = Object.keys(allScores).map(key=>{
    return [key,allScores[key].averageScore]
  }).sort((a,b)=>{
    if (b[1] <a[1]){
      return -1
    }

    if (b[1] === a[1]){
      if (b[0] > a[0]){
        return -1
      } else {
        return 1
      }
    }

    if (b[1] >a[1]){
      return 1
    }
  })

  console.log('allScores_computed',scoreArray)

  render_techniques(scoreArray,allScores);
}

function render_techniques(techniques,info) {

   let cards = d3.selectAll('.techniqueCard').data(techniques);

  //  cards.select('h4').select('span').text(d=>info[d[0]].title)


   cards.select('h4').select('span').html(d=>'<a href="' + info[d[0]].baseUrl + info[d[0]].url + '">' + info[d[0]].title + '</a>');

   cards.select('.totalScore')
   .classed('score-three',d=>d[1]>=2.5)
   .classed('score-two',d=>(d[1]>=2 & d[1]<2.5))
   .classed('score-one',d=>(d[1]>=1 & d[1]<2))
   .classed('score-zero',d=>(d[1]>=0 & d[1]<1))

   cards.select('.totalScore')
   .text(d=>d[1])

  cards.select('img').property('src',d=>'/mvnv/assets/images/techniques/icons/' + info[d[0]].image);

  cards.select('.moreLink').html(d=>'<a href="' + info[d[0]].baseUrl + info[d[0]].url + '"> More... </a>');


   cards.select('.techniqueDescription').text(d=>info[d[0]].description)

   cards.select('.optimal').text(d=>info[d[0]].optimal)
   cards.select('.good').text(d=>info[d[0]].good)
   cards.select('.adequate').text(d=>info[d[0]].adequate)
   cards.select('.bad')
   .text(d=>info[d[0]].bad)

   //only show this for techniques that actually have a 0 score.
   cards.select('.scoreZero')
   .style('display',d=> info[d[0]].bad.length === 0 ?  'none' : 'block');
  //  let strengthTags = cards.select('.strengthTags').selectAll('tag').data();


  //  <span class="tag is-success  ">Large <br></span>


   

   //description info[d[0]].description

   //strengths  info[d[0]].strengths

   //weaknesses info[d[0]].weaknesses

   //limitations info[d[0]].limitations

   
  console.log('info ', info)


  //  let cardsEnter = cards.enter().append('div').attr('class','box techniqueCard');

  //  let article = cardsEnter.append('article').attr('class','media');

  //  article 
  //  .append('div').attr('class','media-left')
  //  .append('figure').attr('class','image is-96x96')
  //  .append('img');
  //  //data driven src attribute

  //  let content = article
  //  .append('div').attr('class','media-content')
  //  .append('div').attr('class','content');


  //  //card header
  // let header = content.append('h4');
  // header.append('span'); //data driven header;
  // header.append('div')
  
  // //info icon
  // content.append('p')
  // .append('span')
  // .attr('class','icon has-text-info tooltip')
  // .attr('data-tooltip','Technique Description');

  // content.append('p')
  // .append('span')
  // .attr('class','description') //data driven text goes here;



}


