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

  var elt = document.getElementById("de3b436a-66d8-4a08-b7ff-e6f15be403a2");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'de3b436a-66d8-4a08-b7ff-e6f15be403a2' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "ac216171-346e-4442-b9c5-25f1e78cdf32", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "857605e8-b64e-490b-ba6a-9c1299949b15", "type": "ColumnDataSource"}, "id": "ac216171-346e-4442-b9c5-25f1e78cdf32", "glyph": {"id": "0a3709cd-4141-463f-84f9-d9ca2ce91a43", "type": "CircleCross"}, "tags": [], "doc": null}}, {"id": "857605e8-b64e-490b-ba6a-9c1299949b15", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["sizes", "y", "x"], "id": "857605e8-b64e-490b-ba6a-9c1299949b15", "doc": null, "tags": []}}, {"id": "1ff829f4-31be-4752-a136-2c609e47ba92", "type": "Grid", "attributes": {"id": "1ff829f4-31be-4752-a136-2c609e47ba92", "plot": {"id": "d3b364f6-b685-4d3a-bfc1-867f7efe0e23", "type": "Plot"}, "dimension": 1, "ticker": {"id": "ac6a6c95-acf1-4311-9e8a-532bcf8b861a", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "d3b364f6-b685-4d3a-bfc1-867f7efe0e23", "type": "Plot", "attributes": {"tool_events": {"id": "4fcc21ef-7606-430a-9153-102f69f8873b", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "ac216171-346e-4442-b9c5-25f1e78cdf32", "type": "GlyphRenderer"}, {"id": "0bd3f831-a722-42da-82cd-4bf50af0cd85", "type": "LinearAxis"}, {"id": "4fc312b4-73a5-4dd3-b825-1e534770a53f", "type": "LinearAxis"}, {"id": "be83b1d6-d05b-4dc3-a43e-1fef3cf88232", "type": "Grid"}, {"id": "1ff829f4-31be-4752-a136-2c609e47ba92", "type": "Grid"}], "left": [{"id": "4fc312b4-73a5-4dd3-b825-1e534770a53f", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "530420a6-82e0-4768-8abe-034b7b1f4669", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "d3b364f6-b685-4d3a-bfc1-867f7efe0e23", "y_range": {"id": "8040eb0b-bca6-4a67-b9b5-ada83a924b12", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "0bd3f831-a722-42da-82cd-4bf50af0cd85", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "0bd3f831-a722-42da-82cd-4bf50af0cd85", "type": "LinearAxis", "attributes": {"id": "0bd3f831-a722-42da-82cd-4bf50af0cd85", "formatter": {"id": "7fbfa4d2-b9b9-4853-b37a-b22ba770023a", "type": "BasicTickFormatter"}, "plot": {"id": "d3b364f6-b685-4d3a-bfc1-867f7efe0e23", "type": "Plot"}, "ticker": {"id": "8f965fc4-2a3e-42bc-b408-ddc3de263c5c", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "0a3709cd-4141-463f-84f9-d9ca2ce91a43", "type": "CircleCross", "attributes": {"line_width": {"value": 2, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "0a3709cd-4141-463f-84f9-d9ca2ce91a43", "fill_color": null, "line_color": {"value": "#fb8072"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "size": {"field": "sizes", "units": "screen"}}}, {"id": "7fbfa4d2-b9b9-4853-b37a-b22ba770023a", "type": "BasicTickFormatter", "attributes": {"id": "7fbfa4d2-b9b9-4853-b37a-b22ba770023a", "doc": null, "tags": []}}, {"id": "530420a6-82e0-4768-8abe-034b7b1f4669", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "857605e8-b64e-490b-ba6a-9c1299949b15", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "530420a6-82e0-4768-8abe-034b7b1f4669", "doc": null, "tags": []}}, {"id": "4fc312b4-73a5-4dd3-b825-1e534770a53f", "type": "LinearAxis", "attributes": {"id": "4fc312b4-73a5-4dd3-b825-1e534770a53f", "formatter": {"id": "640d1cb8-e9ee-41e3-80a2-5ba19d0619fd", "type": "BasicTickFormatter"}, "plot": {"id": "d3b364f6-b685-4d3a-bfc1-867f7efe0e23", "type": "Plot"}, "ticker": {"id": "ac6a6c95-acf1-4311-9e8a-532bcf8b861a", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "8f965fc4-2a3e-42bc-b408-ddc3de263c5c", "type": "BasicTicker", "attributes": {"id": "8f965fc4-2a3e-42bc-b408-ddc3de263c5c", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "be83b1d6-d05b-4dc3-a43e-1fef3cf88232", "type": "Grid", "attributes": {"id": "be83b1d6-d05b-4dc3-a43e-1fef3cf88232", "plot": {"id": "d3b364f6-b685-4d3a-bfc1-867f7efe0e23", "type": "Plot"}, "dimension": 0, "ticker": {"id": "8f965fc4-2a3e-42bc-b408-ddc3de263c5c", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "ac6a6c95-acf1-4311-9e8a-532bcf8b861a", "type": "BasicTicker", "attributes": {"id": "ac6a6c95-acf1-4311-9e8a-532bcf8b861a", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "4fcc21ef-7606-430a-9153-102f69f8873b", "type": "ToolEvents", "attributes": {"geometries": [], "id": "4fcc21ef-7606-430a-9153-102f69f8873b", "doc": null, "tags": []}}, {"id": "8040eb0b-bca6-4a67-b9b5-ada83a924b12", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "857605e8-b64e-490b-ba6a-9c1299949b15", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "8040eb0b-bca6-4a67-b9b5-ada83a924b12", "doc": null, "tags": []}}, {"id": "640d1cb8-e9ee-41e3-80a2-5ba19d0619fd", "type": "BasicTickFormatter", "attributes": {"id": "640d1cb8-e9ee-41e3-80a2-5ba19d0619fd", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("de3b436a-66d8-4a08-b7ff-e6f15be403a2", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("de3b436a-66d8-4a08-b7ff-e6f15be403a2", all_models);
    });
  }

}(this));