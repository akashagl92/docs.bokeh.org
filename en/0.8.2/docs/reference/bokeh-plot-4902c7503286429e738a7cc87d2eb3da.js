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

  var elt = document.getElementById("5415e034-0a75-4376-8d2a-ee9af0adf515");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5415e034-0a75-4376-8d2a-ee9af0adf515' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "0a1a0c3b-2828-49e4-ba78-8df78538860b", "type": "BasicTickFormatter", "attributes": {"id": "0a1a0c3b-2828-49e4-ba78-8df78538860b", "doc": null, "tags": []}}, {"id": "7d641780-4af6-4e1e-9acf-fb84e6a39ad6", "type": "LinearAxis", "attributes": {"id": "7d641780-4af6-4e1e-9acf-fb84e6a39ad6", "formatter": {"id": "b38f4937-71f6-47f2-a13c-8a245bd452a7", "type": "BasicTickFormatter"}, "plot": {"id": "0c7589c1-7852-425e-9c73-d2014a35555d", "type": "Plot"}, "ticker": {"id": "eef97428-e28b-45e3-925f-9cbc39dc6ff4", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "c9420a0e-5428-4c90-a597-fb4f77d51690", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["sizes", "y", "x"], "id": "c9420a0e-5428-4c90-a597-fb4f77d51690", "doc": null, "tags": []}}, {"id": "73e67757-14a5-4e89-be63-8098fafbe200", "type": "SquareCross", "attributes": {"line_width": {"value": 2, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "73e67757-14a5-4e89-be63-8098fafbe200", "fill_color": null, "line_color": {"value": "#7fc97f"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "size": {"field": "sizes", "units": "screen"}}}, {"id": "6e69f763-9184-4b2e-b066-f4887e4e8dbe", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "c9420a0e-5428-4c90-a597-fb4f77d51690", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "6e69f763-9184-4b2e-b066-f4887e4e8dbe", "doc": null, "tags": []}}, {"id": "b38f4937-71f6-47f2-a13c-8a245bd452a7", "type": "BasicTickFormatter", "attributes": {"id": "b38f4937-71f6-47f2-a13c-8a245bd452a7", "doc": null, "tags": []}}, {"id": "5fa33686-0ed6-4552-9c21-9b44e58d7f4b", "type": "ToolEvents", "attributes": {"geometries": [], "id": "5fa33686-0ed6-4552-9c21-9b44e58d7f4b", "doc": null, "tags": []}}, {"id": "0c7589c1-7852-425e-9c73-d2014a35555d", "type": "Plot", "attributes": {"tool_events": {"id": "5fa33686-0ed6-4552-9c21-9b44e58d7f4b", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "46522c5e-b53f-4cfa-9dab-94b075bbc743", "type": "GlyphRenderer"}, {"id": "7d641780-4af6-4e1e-9acf-fb84e6a39ad6", "type": "LinearAxis"}, {"id": "2743c715-2a6c-44ed-a6b1-fdb83ece027f", "type": "LinearAxis"}, {"id": "30d93fa3-25ec-420c-b9a5-2814d9f66757", "type": "Grid"}, {"id": "fb66cfe8-dc97-4cb5-ab49-8c27d8777d07", "type": "Grid"}], "left": [{"id": "2743c715-2a6c-44ed-a6b1-fdb83ece027f", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "f2d264f3-b38d-47c6-a500-75d6ddd18542", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "0c7589c1-7852-425e-9c73-d2014a35555d", "y_range": {"id": "6e69f763-9184-4b2e-b066-f4887e4e8dbe", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "7d641780-4af6-4e1e-9acf-fb84e6a39ad6", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "13346fde-2292-4ec5-91f5-6d8be4e76858", "type": "BasicTicker", "attributes": {"id": "13346fde-2292-4ec5-91f5-6d8be4e76858", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "2743c715-2a6c-44ed-a6b1-fdb83ece027f", "type": "LinearAxis", "attributes": {"id": "2743c715-2a6c-44ed-a6b1-fdb83ece027f", "formatter": {"id": "0a1a0c3b-2828-49e4-ba78-8df78538860b", "type": "BasicTickFormatter"}, "plot": {"id": "0c7589c1-7852-425e-9c73-d2014a35555d", "type": "Plot"}, "ticker": {"id": "13346fde-2292-4ec5-91f5-6d8be4e76858", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "30d93fa3-25ec-420c-b9a5-2814d9f66757", "type": "Grid", "attributes": {"id": "30d93fa3-25ec-420c-b9a5-2814d9f66757", "plot": {"id": "0c7589c1-7852-425e-9c73-d2014a35555d", "type": "Plot"}, "dimension": 0, "ticker": {"id": "eef97428-e28b-45e3-925f-9cbc39dc6ff4", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "fb66cfe8-dc97-4cb5-ab49-8c27d8777d07", "type": "Grid", "attributes": {"id": "fb66cfe8-dc97-4cb5-ab49-8c27d8777d07", "plot": {"id": "0c7589c1-7852-425e-9c73-d2014a35555d", "type": "Plot"}, "dimension": 1, "ticker": {"id": "13346fde-2292-4ec5-91f5-6d8be4e76858", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "46522c5e-b53f-4cfa-9dab-94b075bbc743", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "c9420a0e-5428-4c90-a597-fb4f77d51690", "type": "ColumnDataSource"}, "id": "46522c5e-b53f-4cfa-9dab-94b075bbc743", "glyph": {"id": "73e67757-14a5-4e89-be63-8098fafbe200", "type": "SquareCross"}, "tags": [], "doc": null}}, {"id": "eef97428-e28b-45e3-925f-9cbc39dc6ff4", "type": "BasicTicker", "attributes": {"id": "eef97428-e28b-45e3-925f-9cbc39dc6ff4", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "f2d264f3-b38d-47c6-a500-75d6ddd18542", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "c9420a0e-5428-4c90-a597-fb4f77d51690", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "f2d264f3-b38d-47c6-a500-75d6ddd18542", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("5415e034-0a75-4376-8d2a-ee9af0adf515", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("5415e034-0a75-4376-8d2a-ee9af0adf515", all_models);
    });
  }

}(this));