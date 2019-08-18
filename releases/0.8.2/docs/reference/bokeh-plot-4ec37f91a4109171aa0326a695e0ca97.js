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

  var elt = document.getElementById("f5657e4d-c71d-4a7a-939b-7e1332233c81");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f5657e4d-c71d-4a7a-939b-7e1332233c81' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "7bc98f29-df9e-467d-8a1a-6e2dc0e454a6", "type": "Grid", "attributes": {"id": "7bc98f29-df9e-467d-8a1a-6e2dc0e454a6", "plot": {"id": "21d7ed7a-42d3-40c9-980e-13a553a43aee", "type": "Plot"}, "dimension": 1, "ticker": {"id": "d5c1b46f-75a6-40e4-a341-288213421d49", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "70067d51-0c47-4e7b-a3c8-34510457fb4e", "type": "Diamond", "attributes": {"line_width": {"value": 2, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "70067d51-0c47-4e7b-a3c8-34510457fb4e", "fill_color": null, "line_color": {"value": "#1c9099"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "size": {"field": "sizes", "units": "screen"}}}, {"id": "30cb045a-5766-48df-9feb-1b6dada70eb2", "type": "Grid", "attributes": {"id": "30cb045a-5766-48df-9feb-1b6dada70eb2", "plot": {"id": "21d7ed7a-42d3-40c9-980e-13a553a43aee", "type": "Plot"}, "dimension": 0, "ticker": {"id": "89a51743-279c-4602-b431-633606acd9b6", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "d8f4ff84-aa27-489a-ab2b-a245a666cfea", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["sizes", "y", "x"], "id": "d8f4ff84-aa27-489a-ab2b-a245a666cfea", "doc": null, "tags": []}}, {"id": "deb20e19-3ca0-413e-befe-e224f8be7ec7", "type": "BasicTickFormatter", "attributes": {"id": "deb20e19-3ca0-413e-befe-e224f8be7ec7", "doc": null, "tags": []}}, {"id": "76151fe2-2d78-4ea2-a5c5-f315fbfea512", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "d8f4ff84-aa27-489a-ab2b-a245a666cfea", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "76151fe2-2d78-4ea2-a5c5-f315fbfea512", "doc": null, "tags": []}}, {"id": "f147b1db-49cf-4db6-aec4-00b5d53296c0", "type": "LinearAxis", "attributes": {"id": "f147b1db-49cf-4db6-aec4-00b5d53296c0", "formatter": {"id": "4dbab5c1-bd87-44af-aa68-ee653a3bb615", "type": "BasicTickFormatter"}, "plot": {"id": "21d7ed7a-42d3-40c9-980e-13a553a43aee", "type": "Plot"}, "ticker": {"id": "89a51743-279c-4602-b431-633606acd9b6", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "d5c1b46f-75a6-40e4-a341-288213421d49", "type": "BasicTicker", "attributes": {"id": "d5c1b46f-75a6-40e4-a341-288213421d49", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "e70bb31f-5296-423d-869c-80ef71e76043", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "d8f4ff84-aa27-489a-ab2b-a245a666cfea", "type": "ColumnDataSource"}, "id": "e70bb31f-5296-423d-869c-80ef71e76043", "glyph": {"id": "70067d51-0c47-4e7b-a3c8-34510457fb4e", "type": "Diamond"}, "tags": [], "doc": null}}, {"id": "ea422169-9efa-499a-aa2f-bf71d360eaed", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "d8f4ff84-aa27-489a-ab2b-a245a666cfea", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "ea422169-9efa-499a-aa2f-bf71d360eaed", "doc": null, "tags": []}}, {"id": "21d7ed7a-42d3-40c9-980e-13a553a43aee", "type": "Plot", "attributes": {"tool_events": {"id": "0a1ae5a3-69c1-400d-9cf2-e8bb88a9a7a3", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "e70bb31f-5296-423d-869c-80ef71e76043", "type": "GlyphRenderer"}, {"id": "f147b1db-49cf-4db6-aec4-00b5d53296c0", "type": "LinearAxis"}, {"id": "8cd9fc71-2d50-4f7e-931a-719b00ca1e64", "type": "LinearAxis"}, {"id": "30cb045a-5766-48df-9feb-1b6dada70eb2", "type": "Grid"}, {"id": "7bc98f29-df9e-467d-8a1a-6e2dc0e454a6", "type": "Grid"}], "left": [{"id": "8cd9fc71-2d50-4f7e-931a-719b00ca1e64", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "ea422169-9efa-499a-aa2f-bf71d360eaed", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "21d7ed7a-42d3-40c9-980e-13a553a43aee", "y_range": {"id": "76151fe2-2d78-4ea2-a5c5-f315fbfea512", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "f147b1db-49cf-4db6-aec4-00b5d53296c0", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "8cd9fc71-2d50-4f7e-931a-719b00ca1e64", "type": "LinearAxis", "attributes": {"id": "8cd9fc71-2d50-4f7e-931a-719b00ca1e64", "formatter": {"id": "deb20e19-3ca0-413e-befe-e224f8be7ec7", "type": "BasicTickFormatter"}, "plot": {"id": "21d7ed7a-42d3-40c9-980e-13a553a43aee", "type": "Plot"}, "ticker": {"id": "d5c1b46f-75a6-40e4-a341-288213421d49", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "0a1ae5a3-69c1-400d-9cf2-e8bb88a9a7a3", "type": "ToolEvents", "attributes": {"geometries": [], "id": "0a1ae5a3-69c1-400d-9cf2-e8bb88a9a7a3", "doc": null, "tags": []}}, {"id": "89a51743-279c-4602-b431-633606acd9b6", "type": "BasicTicker", "attributes": {"id": "89a51743-279c-4602-b431-633606acd9b6", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "4dbab5c1-bd87-44af-aa68-ee653a3bb615", "type": "BasicTickFormatter", "attributes": {"id": "4dbab5c1-bd87-44af-aa68-ee653a3bb615", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("f5657e4d-c71d-4a7a-939b-7e1332233c81", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("f5657e4d-c71d-4a7a-939b-7e1332233c81", all_models);
    });
  }

}(this));