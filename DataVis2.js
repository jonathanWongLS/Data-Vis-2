var vis1 = "js/global_air_pollution.vg.json"
var vis2 = "js/mismanaged_plastic_waste.vg.json"
var vis3 = "js/change_in_mean_sea_levels.vg.json"
var vis4 = "js/number_of_natural_disaster_events.vg.json"
var vis5 = "js/annual_anomalies_global_avg_surface_temp.vg.json"

vegaEmbed("#vis1", vis1).then(function(result) {}).catch(console.error);
vegaEmbed("#vis2", vis2).then(function(result) {}).catch(console.error);
vegaEmbed("#vis3", vis3).then(function(result) {}).catch(console.error);
vegaEmbed("#vis4", vis4).then(function(result) {}).catch(console.error);
vegaEmbed("#vis5", vis5).then(function(result) {}).catch(console.error);
