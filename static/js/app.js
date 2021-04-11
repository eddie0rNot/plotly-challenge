var sampleData = "data/samples.json";

function unpack(rows,index) {
  return rows.map(function(row){
    return row[index];
  });
}

d3.json(sampleData).then(function(samples){
  var data = samples.samples[0];
    console.log(data);
  
  data.sort(function(a,b){
    return parseFloat(b.otu_ids) - parseFloat(a.otu_ids);

  });

data = data.slice(0,10);

data = data.reverse();

var trace1 = {
  type: "bar",
  x: data.map(row => row.sample_values),
  y: data.map(row => row.otu_ids),
  orientation: 'h'
};

var chartData = [trace1];

Plotly.newPlot("bar",chartData);
});
