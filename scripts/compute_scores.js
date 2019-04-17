function create_panel(allScores){

  let groups = d3.select('#wizard_panel').selectAll('div').data(Object.keys(optionsObject));

let groupsEnter = groups.enter().append('div').attr('class','dataDiv');

//Add Header
let h4 = groupsEnter.append('h4');

h4.append('span').attr('id','header');
h4.append('span').attr('id','icon')
.append('i');

let switchEl = h4.append('span').attr('class','field is-pulled-right');

switchEl.append('input')
.attr('type','checkbox')
.attr('class','switch is-small');

switchEl.append('label');

//Add options
groupsEnter.append('div').attr('class','tabs is-fullwidth is-toggle'); 

let ul = groupsEnter.select('.tabs')
.append('ul');

groups = groupsEnter.merge(groups);

//Set data dependent attributes

groups
.attr('class',d=>'dataDiv data_' + d);

groups.select('.switch')
.attr('id',d=>'switch_'+d);

groups.select('label')
.attr('for',d=>'switch_'+d);

groups.select('#header')
.text(d=>optionsObject[d].label);

groups.select('#icon')
.attr('class','icon tooltip')
.attr('data-tooltip','tooltip info');

groups.select('i')
.attr('class','fas fa-question-circle has-text-grey');


let li = groups.select('ul').selectAll('li').data((d)=>optionsObject[d].options.map(
option=>{return {category:d,option}}));

let liEnter = li.enter().append('li');

liEnter.append('a').append('span');

li = liEnter.merge(li);

li.attr('class',d=> d.category +  ' ' + d.option);

li.select('span').text(d=>d.option);


li.on('click',function(d){

  compute_scores(allScores);
 
let tabGroup = d3.select((this.parentNode).parentNode);
let category = tabGroup.data()[0];

// console.log('clicked', d);
let isSelected = d3.select(this).classed('is-active');

if (category !== 'structure'){
  tabGroup.selectAll('li').classed('is-active',false);
}
d3.select(this).classed('is-active',!isSelected);

//if no elements are selected, set toggle to false;
selectedTabs = tabGroup.selectAll('.is-active');

d3.select('#switch_' + category)
.property('checked',selectedTabs.empty()? false : true);

//highlight all mini panel buttons for active tabs. 
selectedTabs = d3.select('#wizard_panel').selectAll('.is-active').each(function(tab){
  let currentClass = d3.select(this).attr('class').replace('is-active','').trim();
  let miniButtons = d3.selectAll('.button').filter(function(b){
      return d3.select(this).attr('class').includes(currentClass);
   }).classed('is-focused',true);
})



});

d3.selectAll(".switch").on("change", function(d){

let tabGroup = d3.select(((this.parentNode).parentNode).parentNode).select('.tabs');
let category = tabGroup.data()[0];

d3.select(this).property('checked',false); //for now disable turning the toggle on;

// let isOn = d3.select(this).property('checked');

// console.log('d is ',d, 'isOn is', isOn);

// let tabGroup = d3.select(((this.parentNode).parentNode).parentNode).select('.tabs');
// let tabGroup = d3.select('.data_' + d)

// console.log('data1',tabGroup.selectAll('li').data())

tabGroup.selectAll('li')
.classed('is-active',false);

// if (isOn){
//   console.log('datum',tabGroup.select('li').data())

//   // tabGroup.select('li')
//   // .classed('is-active',true);

//   console.log('datum for li',tabGroup.select('li').data())
//   console.log('allData',tabGroup.selectAll('li').data())
// }

compute_scores(allScores);
});

compute_scores(allScores);
}

function create_mini_panel(techniques,allScores){

  let score2class = {
    "1": "score-one",
    "2": "score-two",
    "3": "score-three",
    "0": "score-zero"
  };

  let cards = d3.selectAll('.techniqueCard').data(techniques.map(t=>t[0]));


let groups = cards.select('#mini_wizard_panel').selectAll('div').data(d=>Object.keys(optionsObject).map(k=>{return {'technique':d,'dimension':k}}));

let groupsEnter = groups.enter().append('div');

//Add Header
let h4 = groupsEnter.append('h6');

h4.append('span').attr('id','header');

groups = groupsEnter.merge(groups);

//Set data dependent attributes


groups.select('#header')
.text(d=>optionsObject[d.dimension].shortLabel ? optionsObject[d.dimension].shortLabel : optionsObject[d.dimension].label);


let li = groups.selectAll('a').data((d)=>optionsObject[d.dimension].options.map(
option=>{return {category:d.dimension,option,technique:d.technique}}));

let liEnter = li.enter().append('a');

liEnter.append('a').append('span');

li = liEnter.merge(li);

li.attr('class',d=>{
  let score = allScores[d.technique][d.category][d.option];
  return d.category +  ' ' + d.option + ' ' + score2class[score] + ' button tooltip';
})
.attr('data-tooltip',d=>d.option);

li.text('');
}

function compute_scores(allScores){

  d3.select('#recommendations').style('visibility','visible');

  //create a list of key/value pairs to use in the scores
  let activeOptions = d3.selectAll('.is-active').data(); 
  
  let num2strMap = {
    "1": "ones",
    "2": "twos",
    "3": "threes",
    "0": "zeros"
  };


  Object.keys(allScores).map(technique => {
    allScores[technique].totalScore = 0;
    allScores[technique].threes=[];
    allScores[technique].twos=[];
    allScores[technique].ones=[];
    allScores[technique].zeros=[];

    activeOptions.map(option=>{
      let score = allScores[technique][option.category][option.option];
      // console.log(technique,option.category,option.option,score);
      allScores[technique].totalScore = allScores[technique].totalScore + score;
      allScores[technique][num2strMap[score]].push([option.category,option.option]);
    });
     let score = activeOptions.length > 0 ? allScores[technique].totalScore / activeOptions.length : allScores[technique].totalScore;
     allScores[technique].averageScore = Math.round( score * 10) / 10
  });

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

  // console.log('allScores_computed',scoreArray)

  render_techniques(scoreArray,allScores);
}

function render_techniques(techniques,info) {

   let cards = d3.selectAll('.techniqueCard').data(techniques);

   cards.select('.rec').select('h4').select('span').html(d=>'<a href="' + info[d[0]].baseUrl + info[d[0]].url + '">' + info[d[0]].title + '</a>');

   cards.select('.totalScore')
   .classed('score-three',d=>d[1]>=2.5)
   .classed('score-two',d=>(d[1]>=2 & d[1]<2.5))
   .classed('score-one',d=>(d[1]>=1 & d[1]<2))
   .classed('score-zero',d=>(d[1]>=0 & d[1]<1));

   cards.select('.totalScore')
   .text(d=>d[1]);

  cards.select('img').property('src',d=>'/mvnv/assets/images/techniques/icons/' + info[d[0]].image);

  cards.select('.moreLink').html(d=>'<a href="' + info[d[0]].baseUrl + info[d[0]].url + '"> More... </a>');

  let three = cards.select('.threeTags').selectAll('.tag').data(d=>info[d[0]].threes);

  let threeEnter = three.enter().append('span').attr('class','tag score-three');

  three.exit().remove();

  three = threeEnter.merge(three);

  three.text(d=>{
    let string; 
    if (d[0].includes('node_attr')){
      string = 'Node - ' + d[1];
    } else if (d[0].includes('edge_attr')){
      string = 'Edge - ' + d[1];
    } else {
      string = d[1];
    }
    return string
  });

  let two = cards.select('.twoTags').selectAll('.tag').data(d=>info[d[0]].twos);

  let twoEnter = two.enter().append('span').attr('class','tag score-two')

  two.exit().remove();

  two = twoEnter.merge(two);

  two.text(d=>{
    let string; 
    if (d[0].includes('node_attr')){
      string = 'Node - ' + d[1];
    } else if (d[0].includes('edge_attr')){
      string = 'Edge - ' + d[1];
    } else {
      string = d[1];
    }
    return string
  })

  let one = cards.select('.oneTags').selectAll('.tag').data(d=>info[d[0]].ones);

  let oneEnter = one.enter().append('span').attr('class','tag score-one')

  one.exit().remove();

  one = oneEnter.merge(one);

  one.text(d=>{
    let string; 
    if (d[0].includes('node_attr')){
      string = 'Node - ' + d[1];
    } else if (d[0].includes('edge_attr')){
      string = 'Edge - ' + d[1];
    } else {
      string = d[1];
    }
    return string
  })

  let zero = cards.select('.zeroTags').selectAll('.tag').data(d=>info[d[0]].zeros);

  let zeroEnter = zero.enter().append('span').attr('class','tag score-zero')

  zero.exit().remove();

  zero = zeroEnter.merge(zero);

  zero.text(d=>{
    let string; 
    if (d[0].includes('node_attr')){
      string = 'Node - ' + d[1];
    } else if (d[0].includes('edge_attr')){
      string = 'Edge - ' + d[1];
    } else {
      string = d[1];
    }
    return string
  })


   cards.select('.techniqueDescription').text(d=>info[d[0]].description)

   cards.select('.optimal').text(d=>info[d[0]].optimal)
   cards.select('.good').text(d=>info[d[0]].good)
   cards.select('.adequate').text(d=>info[d[0]].adequate)
   cards.select('.bad')
   .text(d=>info[d[0]].bad)

   //only show this for techniques that actually have a 0 score.
   cards.select('.scoreZero')
   .style('display',d=> info[d[0]].bad.length === 0 ?  'none' : 'block');
  
   create_mini_panel(techniques,info);


}


