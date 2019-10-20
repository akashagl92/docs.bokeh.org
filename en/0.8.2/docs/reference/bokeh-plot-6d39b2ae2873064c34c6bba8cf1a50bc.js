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

  var elt = document.getElementById("a470aaaf-c550-47c1-8b87-32ead13c51b5");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a470aaaf-c550-47c1-8b87-32ead13c51b5' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "468f4843-3e62-438d-aac3-e159b570750d", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"r": [0.23333333333333336, 0.275, 0.3166666666666667, 0.35833333333333334, 0.4, 0.4416666666666667, 0.48333333333333334, 0.525, 0.5666666666666667], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["r", "y", "x"], "id": "468f4843-3e62-438d-aac3-e159b570750d", "doc": null, "tags": []}}, {"id": "85ad2e6b-8616-4af4-b6e4-d47eae0b7796", "type": "BasicTickFormatter", "attributes": {"id": "85ad2e6b-8616-4af4-b6e4-d47eae0b7796", "doc": null, "tags": []}}, {"id": "ef664891-39f9-43ab-97fa-798ef07479b5", "type": "BasicTicker", "attributes": {"id": "ef664891-39f9-43ab-97fa-798ef07479b5", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "1d0e650f-af03-497c-942d-9ecd8c52c52b", "type": "LinearAxis", "attributes": {"id": "1d0e650f-af03-497c-942d-9ecd8c52c52b", "formatter": {"id": "6bad2fc4-798a-46ad-8bdb-8c5eae5df0da", "type": "BasicTickFormatter"}, "plot": {"id": "718aad70-c122-4a90-bcee-011652971fd7", "type": "Plot"}, "ticker": {"id": "a78cd7a3-c3ed-4d0f-a473-dc8adb42a8bb", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "6bad2fc4-798a-46ad-8bdb-8c5eae5df0da", "type": "BasicTickFormatter", "attributes": {"id": "6bad2fc4-798a-46ad-8bdb-8c5eae5df0da", "doc": null, "tags": []}}, {"id": "718aad70-c122-4a90-bcee-011652971fd7", "type": "Plot", "attributes": {"tool_events": {"id": "e828e073-7469-4cae-b67c-0aa35ec38a35", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "90921816-86ed-4c53-90cc-1d283d2bcce7", "type": "GlyphRenderer"}, {"id": "1d0e650f-af03-497c-942d-9ecd8c52c52b", "type": "LinearAxis"}, {"id": "4272874a-0330-4531-aeb4-2503473002fb", "type": "LinearAxis"}, {"id": "ab6ee86a-650f-4c2d-a879-7887e8ab957a", "type": "Grid"}, {"id": "7132b81b-1a19-457a-9970-451ac4abf984", "type": "Grid"}], "left": [{"id": "4272874a-0330-4531-aeb4-2503473002fb", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "e1c68091-2e0f-4909-a638-04570c13532d", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "718aad70-c122-4a90-bcee-011652971fd7", "y_range": {"id": "df1f9caa-2efb-4e24-8ca6-27ae88081088", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "1d0e650f-af03-497c-942d-9ecd8c52c52b", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "a78cd7a3-c3ed-4d0f-a473-dc8adb42a8bb", "type": "BasicTicker", "attributes": {"id": "a78cd7a3-c3ed-4d0f-a473-dc8adb42a8bb", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "df1f9caa-2efb-4e24-8ca6-27ae88081088", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "468f4843-3e62-438d-aac3-e159b570750d", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "df1f9caa-2efb-4e24-8ca6-27ae88081088", "doc": null, "tags": []}}, {"id": "0522050d-fa19-45cd-8f56-e09cc750bfff", "type": "AnnularWedge", "attributes": {"fill_color": {"value": "#8888ee"}, "start_angle": {"value": 0.6, "units": "data"}, "x": {"field": "x", "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "0522050d-fa19-45cd-8f56-e09cc750bfff", "outer_radius": {"field": "r", "units": "data"}, "end_angle": {"value": 4.1, "units": "data"}, "inner_radius": {"value": 0.2, "units": "data"}, "doc": null, "tags": []}}, {"id": "4272874a-0330-4531-aeb4-2503473002fb", "type": "LinearAxis", "attributes": {"id": "4272874a-0330-4531-aeb4-2503473002fb", "formatter": {"id": "85ad2e6b-8616-4af4-b6e4-d47eae0b7796", "type": "BasicTickFormatter"}, "plot": {"id": "718aad70-c122-4a90-bcee-011652971fd7", "type": "Plot"}, "ticker": {"id": "ef664891-39f9-43ab-97fa-798ef07479b5", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "e828e073-7469-4cae-b67c-0aa35ec38a35", "type": "ToolEvents", "attributes": {"geometries": [], "id": "e828e073-7469-4cae-b67c-0aa35ec38a35", "doc": null, "tags": []}}, {"id": "7132b81b-1a19-457a-9970-451ac4abf984", "type": "Grid", "attributes": {"id": "7132b81b-1a19-457a-9970-451ac4abf984", "plot": {"id": "718aad70-c122-4a90-bcee-011652971fd7", "type": "Plot"}, "dimension": 1, "ticker": {"id": "ef664891-39f9-43ab-97fa-798ef07479b5", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "ab6ee86a-650f-4c2d-a879-7887e8ab957a", "type": "Grid", "attributes": {"id": "ab6ee86a-650f-4c2d-a879-7887e8ab957a", "plot": {"id": "718aad70-c122-4a90-bcee-011652971fd7", "type": "Plot"}, "dimension": 0, "ticker": {"id": "a78cd7a3-c3ed-4d0f-a473-dc8adb42a8bb", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "e1c68091-2e0f-4909-a638-04570c13532d", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "468f4843-3e62-438d-aac3-e159b570750d", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "e1c68091-2e0f-4909-a638-04570c13532d", "doc": null, "tags": []}}, {"id": "90921816-86ed-4c53-90cc-1d283d2bcce7", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "468f4843-3e62-438d-aac3-e159b570750d", "type": "ColumnDataSource"}, "id": "90921816-86ed-4c53-90cc-1d283d2bcce7", "glyph": {"id": "0522050d-fa19-45cd-8f56-e09cc750bfff", "type": "AnnularWedge"}, "tags": [], "doc": null}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("a470aaaf-c550-47c1-8b87-32ead13c51b5", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("a470aaaf-c550-47c1-8b87-32ead13c51b5", all_models);
    });
  }

}(this));