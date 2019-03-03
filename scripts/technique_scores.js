    function technique_scores(scores,labels) {
        console.log('labels',labels)
        let data = [];

    // let scores = JSON.parse(('{{page.scores}}'.replace(/=>/g, ':')));

    let panelWidth = d3.select('.scores').style('width').replace('px', '');
    let panelHeight = d3.select('.scores').style('height').replace('px', '');

    let tasks = [];
    Object.keys(scores).map((key)=>{
      let label = labels[key];
      tasks.push({
        type:'category',
        label:label,
        multiLine:label.trim().indexOf(' ') != -1,
        children:Object.keys(scores[key]).length
      });
      Object.keys(scores[key]).map(task=>{
        tasks.push({type:'task',category:key, label:task,value:Number(scores[key][task])})
      })
     });

    let groups = d3.select(".scores")
      .selectAll('g')
      .data(tasks);

    let groupsEnter = groups.enter().append('g')
    groups = groupsEnter.merge(groups);

    groups.filter(d=>d.type === 'task')
    .append('rect').attr('class', 'scoreRect')

    groups.filter(d=>d.type === 'task')
    .append('text').text(d=>d.value)
    .attr('class','scoreText')
    
    let rectSize = d3.select('.scoreRect').style('width').replace('px', '') ;

    let yScale = d3.scaleLinear().domain([0, tasks.length]).range([0, panelHeight])

    groups
      .attr('transform', (d, i) => 'translate(' + 40 + ',' + yScale(i) + ')')
 
    groups.select('.scoreRect')
       .attr('y',-rectSize/2)
      .attr('class',function(d) {return d3.select(this).attr('class') + ' ' + 'score_' + d.value});
 
    groups.filter(d=>!d.multiLine) //select single word labels
      .append('text')
      .text(d=>d.label)

    let multiLine = groups.filter(d=>d.multiLine) //select multiword labels
      
      multiLine.append('text')
      .text(d=>d.label.split(' ')[0])
      .classed('first',true)

      multiLine.append('text')
      .text(d=>d.label.split(' ')[1])

      groups.selectAll('text')
      .attr('class',function(d) {
        let className;
        if (d3.select(this).classed('scoreText')) {
          className =  'scoreText';
        } else {
          className =  d3.select(this).attr('class') ? d3.select(this).attr('class') + ' ' + d.type : d.type
        }
        return className;
      });
        

    d3.selectAll('.task,.scoreText')
    .attr('dominant-baseline','middle')
    .attr('x', function(d){return d3.select(this).classed('task') ? rectSize *2 : -20});

    d3.selectAll('.scoreText')
    .attr('text-anchor','middle')

    groups.selectAll('.category')
    .attr('transform','rotate(90,0,0)')
    .attr('dominant-baseline','baseline')
    .attr('text-anchor','middle')
    .attr('x', (d)=>{return d.children*rectSize/2 + Number(rectSize)})
    .attr('y', function(d){return d3.select(this).classed('first') ? -160 : -140})
    }