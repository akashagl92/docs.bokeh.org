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

  var elt = document.getElementById("60368382-01fe-486b-9014-c1f9333f7c5f");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '60368382-01fe-486b-9014-c1f9333f7c5f' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "12e7ffc6-1074-40a2-b6e2-f1422c276c8d", "type": "Plot", "attributes": {"tool_events": {"id": "b08ecedb-a72a-4498-9fd0-868021315512", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "6e2ea7e3-bcd0-4ba8-9632-95d717dc6a8b", "type": "GlyphRenderer"}, {"id": "d3a94258-6540-4fd0-9669-5c3bbf01a54e", "type": "LinearAxis"}, {"id": "2eab8113-2398-49db-a4b2-913c5c8c9911", "type": "LinearAxis"}, {"id": "7b5e33e5-d25d-4dfc-ad01-57588afebe81", "type": "Grid"}, {"id": "f146e319-a8ef-407c-bc2b-29f94fc50f0a", "type": "Grid"}], "left": [{"id": "2eab8113-2398-49db-a4b2-913c5c8c9911", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "4fc8dc97-2b11-4465-80f5-bc93e57914a5", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "12e7ffc6-1074-40a2-b6e2-f1422c276c8d", "y_range": {"id": "470d3837-43c1-49ca-938f-63132495a4a8", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "d3a94258-6540-4fd0-9669-5c3bbf01a54e", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "4fc8dc97-2b11-4465-80f5-bc93e57914a5", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "0399f8c2-8565-4aa9-9647-214414a179a8", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "4fc8dc97-2b11-4465-80f5-bc93e57914a5", "doc": null, "tags": []}}, {"id": "220a3913-4508-46db-9b21-24ed2d4a3b33", "type": "BasicTicker", "attributes": {"id": "220a3913-4508-46db-9b21-24ed2d4a3b33", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "a1db0804-0307-4a2a-a320-2f686c6c64a2", "type": "BasicTicker", "attributes": {"id": "a1db0804-0307-4a2a-a320-2f686c6c64a2", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "6e2ea7e3-bcd0-4ba8-9632-95d717dc6a8b", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "0399f8c2-8565-4aa9-9647-214414a179a8", "type": "ColumnDataSource"}, "id": "6e2ea7e3-bcd0-4ba8-9632-95d717dc6a8b", "glyph": {"id": "9dc22dab-2b04-494e-bccb-86f87d5b63bc", "type": "Ray"}, "tags": [], "doc": null}}, {"id": "b08ecedb-a72a-4498-9fd0-868021315512", "type": "ToolEvents", "attributes": {"geometries": [], "id": "b08ecedb-a72a-4498-9fd0-868021315512", "doc": null, "tags": []}}, {"id": "2eab8113-2398-49db-a4b2-913c5c8c9911", "type": "LinearAxis", "attributes": {"id": "2eab8113-2398-49db-a4b2-913c5c8c9911", "formatter": {"id": "d498bcf7-014b-4324-a1b4-e1c025a0bbdf", "type": "BasicTickFormatter"}, "plot": {"id": "12e7ffc6-1074-40a2-b6e2-f1422c276c8d", "type": "Plot"}, "ticker": {"id": "a1db0804-0307-4a2a-a320-2f686c6c64a2", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "0399f8c2-8565-4aa9-9647-214414a179a8", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"l": [15.0, 17.5, 20.0, 22.5, 25.0, 27.5, 30.0, 32.5, 35.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["l", "y", "x"], "id": "0399f8c2-8565-4aa9-9647-214414a179a8", "doc": null, "tags": []}}, {"id": "2616e4a0-7e7c-47c2-876b-4095eede8c0d", "type": "BasicTickFormatter", "attributes": {"id": "2616e4a0-7e7c-47c2-876b-4095eede8c0d", "doc": null, "tags": []}}, {"id": "d498bcf7-014b-4324-a1b4-e1c025a0bbdf", "type": "BasicTickFormatter", "attributes": {"id": "d498bcf7-014b-4324-a1b4-e1c025a0bbdf", "doc": null, "tags": []}}, {"id": "9dc22dab-2b04-494e-bccb-86f87d5b63bc", "type": "Ray", "attributes": {"tags": [], "line_width": {"value": 3, "units": "data"}, "y": {"field": "y", "units": "data"}, "doc": null, "id": "9dc22dab-2b04-494e-bccb-86f87d5b63bc", "angle": {"value": -2.0, "units": "data"}, "line_color": {"value": "#fb8072"}, "x": {"field": "x", "units": "data"}, "length": {"field": "l", "units": "screen"}}}, {"id": "d3a94258-6540-4fd0-9669-5c3bbf01a54e", "type": "LinearAxis", "attributes": {"id": "d3a94258-6540-4fd0-9669-5c3bbf01a54e", "formatter": {"id": "2616e4a0-7e7c-47c2-876b-4095eede8c0d", "type": "BasicTickFormatter"}, "plot": {"id": "12e7ffc6-1074-40a2-b6e2-f1422c276c8d", "type": "Plot"}, "ticker": {"id": "220a3913-4508-46db-9b21-24ed2d4a3b33", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "7b5e33e5-d25d-4dfc-ad01-57588afebe81", "type": "Grid", "attributes": {"id": "7b5e33e5-d25d-4dfc-ad01-57588afebe81", "plot": {"id": "12e7ffc6-1074-40a2-b6e2-f1422c276c8d", "type": "Plot"}, "dimension": 0, "ticker": {"id": "220a3913-4508-46db-9b21-24ed2d4a3b33", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "470d3837-43c1-49ca-938f-63132495a4a8", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "0399f8c2-8565-4aa9-9647-214414a179a8", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "470d3837-43c1-49ca-938f-63132495a4a8", "doc": null, "tags": []}}, {"id": "f146e319-a8ef-407c-bc2b-29f94fc50f0a", "type": "Grid", "attributes": {"id": "f146e319-a8ef-407c-bc2b-29f94fc50f0a", "plot": {"id": "12e7ffc6-1074-40a2-b6e2-f1422c276c8d", "type": "Plot"}, "dimension": 1, "ticker": {"id": "a1db0804-0307-4a2a-a320-2f686c6c64a2", "type": "BasicTicker"}, "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("60368382-01fe-486b-9014-c1f9333f7c5f", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("60368382-01fe-486b-9014-c1f9333f7c5f", all_models);
    });
  }

}(this));