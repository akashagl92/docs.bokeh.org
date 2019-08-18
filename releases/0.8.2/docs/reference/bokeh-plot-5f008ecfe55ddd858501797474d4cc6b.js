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

  var elt = document.getElementById("760520ad-efc3-4a0c-8fd6-1b3512dbe35b");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '760520ad-efc3-4a0c-8fd6-1b3512dbe35b' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "c1c7ed00-6338-4476-ab21-a20aa8f2f551", "type": "Grid", "attributes": {"id": "c1c7ed00-6338-4476-ab21-a20aa8f2f551", "plot": {"id": "8b24dab9-c924-4c2f-95a7-c9e10b6c3cda", "type": "Plot"}, "dimension": 1, "ticker": {"id": "23cc9e45-fec2-48a3-adbd-922149d3b0e0", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "655be64f-4b4a-4c2c-b5c7-0bdcf03126ae", "type": "SquareX", "attributes": {"line_width": {"value": 2, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "655be64f-4b4a-4c2c-b5c7-0bdcf03126ae", "fill_color": null, "line_color": {"value": "#fdae6b"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "size": {"field": "sizes", "units": "screen"}}}, {"id": "73ffe84b-a408-48b6-a8b1-bb3d971ffee3", "type": "BasicTicker", "attributes": {"id": "73ffe84b-a408-48b6-a8b1-bb3d971ffee3", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "1c9d1b80-32cb-46ba-8ada-0d917c3c0987", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "650c18af-70cc-4281-9cc9-413cc700d4c9", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "1c9d1b80-32cb-46ba-8ada-0d917c3c0987", "doc": null, "tags": []}}, {"id": "8b24dab9-c924-4c2f-95a7-c9e10b6c3cda", "type": "Plot", "attributes": {"tool_events": {"id": "f6970614-a089-4ae8-b04f-9efd9c3032b7", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "dab63ef9-a2dc-46c7-a4e1-674e4ccf127d", "type": "GlyphRenderer"}, {"id": "c51551cd-d38a-4723-9825-0a062baa3dbe", "type": "LinearAxis"}, {"id": "9068388e-81f0-48c3-b878-fb6131a0315d", "type": "LinearAxis"}, {"id": "e2b9ba45-6365-4196-ad0e-9a7ad9971eec", "type": "Grid"}, {"id": "c1c7ed00-6338-4476-ab21-a20aa8f2f551", "type": "Grid"}], "left": [{"id": "9068388e-81f0-48c3-b878-fb6131a0315d", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "f088f8a8-1da4-4895-be71-b8ba7c8fb32f", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "8b24dab9-c924-4c2f-95a7-c9e10b6c3cda", "y_range": {"id": "1c9d1b80-32cb-46ba-8ada-0d917c3c0987", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "c51551cd-d38a-4723-9825-0a062baa3dbe", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "f55336d3-2a35-4bc4-b1ea-a04c327ecbb1", "type": "BasicTickFormatter", "attributes": {"id": "f55336d3-2a35-4bc4-b1ea-a04c327ecbb1", "doc": null, "tags": []}}, {"id": "e2b9ba45-6365-4196-ad0e-9a7ad9971eec", "type": "Grid", "attributes": {"id": "e2b9ba45-6365-4196-ad0e-9a7ad9971eec", "plot": {"id": "8b24dab9-c924-4c2f-95a7-c9e10b6c3cda", "type": "Plot"}, "dimension": 0, "ticker": {"id": "73ffe84b-a408-48b6-a8b1-bb3d971ffee3", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "eb9c5593-7673-44da-9176-a91f214d216a", "type": "BasicTickFormatter", "attributes": {"id": "eb9c5593-7673-44da-9176-a91f214d216a", "doc": null, "tags": []}}, {"id": "650c18af-70cc-4281-9cc9-413cc700d4c9", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["sizes", "y", "x"], "id": "650c18af-70cc-4281-9cc9-413cc700d4c9", "doc": null, "tags": []}}, {"id": "f088f8a8-1da4-4895-be71-b8ba7c8fb32f", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "650c18af-70cc-4281-9cc9-413cc700d4c9", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "f088f8a8-1da4-4895-be71-b8ba7c8fb32f", "doc": null, "tags": []}}, {"id": "9068388e-81f0-48c3-b878-fb6131a0315d", "type": "LinearAxis", "attributes": {"id": "9068388e-81f0-48c3-b878-fb6131a0315d", "formatter": {"id": "eb9c5593-7673-44da-9176-a91f214d216a", "type": "BasicTickFormatter"}, "plot": {"id": "8b24dab9-c924-4c2f-95a7-c9e10b6c3cda", "type": "Plot"}, "ticker": {"id": "23cc9e45-fec2-48a3-adbd-922149d3b0e0", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "dab63ef9-a2dc-46c7-a4e1-674e4ccf127d", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "650c18af-70cc-4281-9cc9-413cc700d4c9", "type": "ColumnDataSource"}, "id": "dab63ef9-a2dc-46c7-a4e1-674e4ccf127d", "glyph": {"id": "655be64f-4b4a-4c2c-b5c7-0bdcf03126ae", "type": "SquareX"}, "tags": [], "doc": null}}, {"id": "23cc9e45-fec2-48a3-adbd-922149d3b0e0", "type": "BasicTicker", "attributes": {"id": "23cc9e45-fec2-48a3-adbd-922149d3b0e0", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "c51551cd-d38a-4723-9825-0a062baa3dbe", "type": "LinearAxis", "attributes": {"id": "c51551cd-d38a-4723-9825-0a062baa3dbe", "formatter": {"id": "f55336d3-2a35-4bc4-b1ea-a04c327ecbb1", "type": "BasicTickFormatter"}, "plot": {"id": "8b24dab9-c924-4c2f-95a7-c9e10b6c3cda", "type": "Plot"}, "ticker": {"id": "73ffe84b-a408-48b6-a8b1-bb3d971ffee3", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "f6970614-a089-4ae8-b04f-9efd9c3032b7", "type": "ToolEvents", "attributes": {"geometries": [], "id": "f6970614-a089-4ae8-b04f-9efd9c3032b7", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("760520ad-efc3-4a0c-8fd6-1b3512dbe35b", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("760520ad-efc3-4a0c-8fd6-1b3512dbe35b", all_models);
    });
  }

}(this));