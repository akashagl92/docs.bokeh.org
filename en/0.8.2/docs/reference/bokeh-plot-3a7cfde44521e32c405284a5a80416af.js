(function(global) {
  if (typeof (window._bokeh_onload_callbacks) === "undefined"){
    window._bokeh_onload_callbacks = [];
  }
  function load_lib(url, callback){
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading){
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", new Date());
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", new Date());
    window._bokeh_is_loading = true;
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = function(){
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.js"

  var elt = document.getElementById("af399c15-6506-4fd1-8607-da3cc8ad4937");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'af399c15-6506-4fd1-8607-da3cc8ad4937' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "181f0c45-53e5-4134-bb06-fd98b99c3fd8", "type": "LinearAxis", "attributes": {"id": "181f0c45-53e5-4134-bb06-fd98b99c3fd8", "formatter": {"id": "675ab61b-64b2-472a-8ee7-8ad910dc2a48", "type": "BasicTickFormatter"}, "plot": {"id": "0995d9e8-d7bc-4230-828d-ea5515f27eab", "type": "Plot"}, "ticker": {"id": "5c398229-a953-4a1e-822a-40cf32947386", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "0d773a64-e012-4dcd-b0ed-f448445560d1", "type": "BasicTicker", "attributes": {"id": "0d773a64-e012-4dcd-b0ed-f448445560d1", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "28cfa110-97ae-4e9a-bcf4-d3a39eded7e0", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["sizes", "y", "x"], "id": "28cfa110-97ae-4e9a-bcf4-d3a39eded7e0", "doc": null, "tags": []}}, {"id": "5c398229-a953-4a1e-822a-40cf32947386", "type": "BasicTicker", "attributes": {"id": "5c398229-a953-4a1e-822a-40cf32947386", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "1e2db71c-e7e2-4f81-9e76-f081ff349027", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "28cfa110-97ae-4e9a-bcf4-d3a39eded7e0", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "1e2db71c-e7e2-4f81-9e76-f081ff349027", "doc": null, "tags": []}}, {"id": "675ab61b-64b2-472a-8ee7-8ad910dc2a48", "type": "BasicTickFormatter", "attributes": {"id": "675ab61b-64b2-472a-8ee7-8ad910dc2a48", "doc": null, "tags": []}}, {"id": "8e4927f2-96e1-4493-9d54-d99f953ef325", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "28cfa110-97ae-4e9a-bcf4-d3a39eded7e0", "type": "ColumnDataSource"}, "id": "8e4927f2-96e1-4493-9d54-d99f953ef325", "glyph": {"id": "799e1d7d-07fb-467a-8ea8-88db97124d43", "type": "Asterisk"}, "tags": [], "doc": null}}, {"id": "029770cf-4be3-4d38-ba7e-fe5b75480663", "type": "BasicTickFormatter", "attributes": {"id": "029770cf-4be3-4d38-ba7e-fe5b75480663", "doc": null, "tags": []}}, {"id": "9bbdce7f-c369-462f-a760-87c5c9ba3c40", "type": "Grid", "attributes": {"id": "9bbdce7f-c369-462f-a760-87c5c9ba3c40", "plot": {"id": "0995d9e8-d7bc-4230-828d-ea5515f27eab", "type": "Plot"}, "dimension": 0, "ticker": {"id": "5c398229-a953-4a1e-822a-40cf32947386", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "1b663008-d27a-43af-896f-876440ce8aed", "type": "ToolEvents", "attributes": {"geometries": [], "id": "1b663008-d27a-43af-896f-876440ce8aed", "doc": null, "tags": []}}, {"id": "62fbff66-bf8a-4e18-acad-87a679181e96", "type": "LinearAxis", "attributes": {"id": "62fbff66-bf8a-4e18-acad-87a679181e96", "formatter": {"id": "029770cf-4be3-4d38-ba7e-fe5b75480663", "type": "BasicTickFormatter"}, "plot": {"id": "0995d9e8-d7bc-4230-828d-ea5515f27eab", "type": "Plot"}, "ticker": {"id": "0d773a64-e012-4dcd-b0ed-f448445560d1", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "c3d2168f-b035-4f5c-bc2d-3d8967537c5b", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "28cfa110-97ae-4e9a-bcf4-d3a39eded7e0", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "c3d2168f-b035-4f5c-bc2d-3d8967537c5b", "doc": null, "tags": []}}, {"id": "799e1d7d-07fb-467a-8ea8-88db97124d43", "type": "Asterisk", "attributes": {"line_width": {"value": 2, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "799e1d7d-07fb-467a-8ea8-88db97124d43", "fill_color": null, "line_color": {"value": "#f0027f"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "size": {"field": "sizes", "units": "screen"}}}, {"id": "359d2ce1-6d6d-4544-ae4e-c7588d5d4a0a", "type": "Grid", "attributes": {"id": "359d2ce1-6d6d-4544-ae4e-c7588d5d4a0a", "plot": {"id": "0995d9e8-d7bc-4230-828d-ea5515f27eab", "type": "Plot"}, "dimension": 1, "ticker": {"id": "0d773a64-e012-4dcd-b0ed-f448445560d1", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "0995d9e8-d7bc-4230-828d-ea5515f27eab", "type": "Plot", "attributes": {"tool_events": {"id": "1b663008-d27a-43af-896f-876440ce8aed", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "8e4927f2-96e1-4493-9d54-d99f953ef325", "type": "GlyphRenderer"}, {"id": "181f0c45-53e5-4134-bb06-fd98b99c3fd8", "type": "LinearAxis"}, {"id": "62fbff66-bf8a-4e18-acad-87a679181e96", "type": "LinearAxis"}, {"id": "9bbdce7f-c369-462f-a760-87c5c9ba3c40", "type": "Grid"}, {"id": "359d2ce1-6d6d-4544-ae4e-c7588d5d4a0a", "type": "Grid"}], "left": [{"id": "62fbff66-bf8a-4e18-acad-87a679181e96", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "1e2db71c-e7e2-4f81-9e76-f081ff349027", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "0995d9e8-d7bc-4230-828d-ea5515f27eab", "y_range": {"id": "c3d2168f-b035-4f5c-bc2d-3d8967537c5b", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "181f0c45-53e5-4134-bb06-fd98b99c3fd8", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("af399c15-6506-4fd1-8607-da3cc8ad4937", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("af399c15-6506-4fd1-8607-da3cc8ad4937", all_models);
    });
  }

}(this));