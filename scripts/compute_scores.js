function render_technique(technique) {

  

  // console.log('here',site,technique)
  // d3.select('.paper-list-block')
  // .append('a')
  // .attr('href',site.baseurl+technique.url)
  // .append('img')
  // .attr('alt',technique.shortname + screenshot)
  // .attr('class','paper-image-small')
  // .attr('src',site.baseurl + '/assets/images/techniques/' + technique.image)
  let newItem = d3.select('.publication-content-right')
   
    .append('div')
    .attr('class','paper-list-block');

  newItem
    .append('p')
    .attr('class', 'pubs')
    .append('span')
    .attr('class', 'paper-title')
    .append('a')
    .text(technique.title);

  newItem
    .append('p')
    .text(technique.description);

    newItem.append('div')
    .attr('class', 'miniCard')


  //       <div class="paper-list-block">
  //   <a href="{{ site.baseurl }}{{ technique.url }}"><img alt="{{ technique.shortname }} screenshot" class="paper-image-small"
  //       src="{{ site.baseurl }}/assets/images/techniques/{{ technique.image }}"></a>
  //   <p class="pubs">

  //     <span class="paper-title"><a href="{{ site.baseurl }}{{ technique.url }}">{{ technique.title }}</a></span><br />
  //     {{ technique.description }} <a href="{{ site.baseurl }}{{ technique.url }}">More...</a>
  //   </p>
  // </div>


}



{/* <p>

<span class="tag score-three  ">Large <br></span>
<span class="tag score-two ">Sparse</span>
<span class="tag score-one ">Several Node Attr.</span>
<span class="tag score-two ">Homo. Node Attr.</span>
<span class="tag score-three ">Few Edge Attr.</span>
<span class="tag ">Hetero Edge Attr.</span>
<br/>

<div class="field is-grouped is-grouped-multiline">
<div class="control">
<div class="tags has-addons">
<span class="tag score-three">Large</span>
<span class="tag "><i class="fas fa-star fa-xs"></i><i class="fas fa-star fa-xs"></i><i class="fas fa-star fa-xs"></i></span>
</div>
</div>

<div class="control">
<div class="tags has-addons">
<span class="tag score-two ">Sparse</span>
<span class="tag "><i class="fas fa-star fa-xs"></i><i class="fas fa-star fa-xs"></i></span>
</div>
</div>

<div class="control">
<div class="tags has-addons">
<span class="tag score-one">Several Node Attr.</span>
<span class="tag "><i class="fas fa-star fa-xs"></i></span>
</div>
</div>


<div class="control">
<div class="tags has-addons">
<span class="tag ">Hetero. Node Attr.</span>
</div>
</div>




</div>


</p> */}