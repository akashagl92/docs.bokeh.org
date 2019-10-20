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

  var elt = document.getElementById("8c810382-c240-4521-92c6-77dd3a43f30e");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8c810382-c240-4521-92c6-77dd3a43f30e' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "b0447857-ceea-47f7-9ef9-3189d8d1eda8", "type": "BasicTickFormatter", "attributes": {"id": "b0447857-ceea-47f7-9ef9-3189d8d1eda8", "doc": null, "tags": []}}, {"id": "c897a246-d863-470b-a5e4-1e676f2d8fad", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["sizes", "y", "x"], "id": "c897a246-d863-470b-a5e4-1e676f2d8fad", "doc": null, "tags": []}}, {"id": "bec7cbe8-1a11-490b-aa58-0d5ff9df9aaf", "type": "BasicTicker", "attributes": {"id": "bec7cbe8-1a11-490b-aa58-0d5ff9df9aaf", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "0d13208e-39c8-480b-8d5c-c7895f91bf49", "type": "LinearAxis", "attributes": {"id": "0d13208e-39c8-480b-8d5c-c7895f91bf49", "formatter": {"id": "40e37390-1fab-46ee-bd3d-66068fb5e3eb", "type": "BasicTickFormatter"}, "plot": {"id": "8aa2446f-0272-4ed1-be5d-a2bf260bdf7a", "type": "Plot"}, "ticker": {"id": "bec7cbe8-1a11-490b-aa58-0d5ff9df9aaf", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "40e37390-1fab-46ee-bd3d-66068fb5e3eb", "type": "BasicTickFormatter", "attributes": {"id": "40e37390-1fab-46ee-bd3d-66068fb5e3eb", "doc": null, "tags": []}}, {"id": "ee23feb8-1685-4ab4-9b8a-443ab1b1b01d", "type": "Triangle", "attributes": {"line_width": {"value": 2, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "ee23feb8-1685-4ab4-9b8a-443ab1b1b01d", "fill_color": null, "line_color": {"value": "#99d594"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "size": {"field": "sizes", "units": "screen"}}}, {"id": "c25a54dd-c5a9-4387-9d59-50187d05d960", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "c897a246-d863-470b-a5e4-1e676f2d8fad", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "c25a54dd-c5a9-4387-9d59-50187d05d960", "doc": null, "tags": []}}, {"id": "73a1b816-5c1e-45f4-bd0b-0b5f2001e560", "type": "Grid", "attributes": {"id": "73a1b816-5c1e-45f4-bd0b-0b5f2001e560", "plot": {"id": "8aa2446f-0272-4ed1-be5d-a2bf260bdf7a", "type": "Plot"}, "dimension": 1, "ticker": {"id": "bec7cbe8-1a11-490b-aa58-0d5ff9df9aaf", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "d8c456a3-3769-4dd0-9299-c1a3162f3988", "type": "Grid", "attributes": {"id": "d8c456a3-3769-4dd0-9299-c1a3162f3988", "plot": {"id": "8aa2446f-0272-4ed1-be5d-a2bf260bdf7a", "type": "Plot"}, "dimension": 0, "ticker": {"id": "a3018ca3-f0e3-44e7-a5c2-5303cde34b02", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "d8c65f6f-ca92-470e-851b-50885e4bba4c", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "c897a246-d863-470b-a5e4-1e676f2d8fad", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "d8c65f6f-ca92-470e-851b-50885e4bba4c", "doc": null, "tags": []}}, {"id": "8aa2446f-0272-4ed1-be5d-a2bf260bdf7a", "type": "Plot", "attributes": {"tool_events": {"id": "572cb402-ddca-423a-b85e-57280acba1e7", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "f1703f2e-f51e-439b-af4a-cfc118c1d7f4", "type": "GlyphRenderer"}, {"id": "4b0c22d0-eeae-470a-9987-268e489cae55", "type": "LinearAxis"}, {"id": "0d13208e-39c8-480b-8d5c-c7895f91bf49", "type": "LinearAxis"}, {"id": "d8c456a3-3769-4dd0-9299-c1a3162f3988", "type": "Grid"}, {"id": "73a1b816-5c1e-45f4-bd0b-0b5f2001e560", "type": "Grid"}], "left": [{"id": "0d13208e-39c8-480b-8d5c-c7895f91bf49", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "c25a54dd-c5a9-4387-9d59-50187d05d960", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "8aa2446f-0272-4ed1-be5d-a2bf260bdf7a", "y_range": {"id": "d8c65f6f-ca92-470e-851b-50885e4bba4c", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "4b0c22d0-eeae-470a-9987-268e489cae55", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "f1703f2e-f51e-439b-af4a-cfc118c1d7f4", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "c897a246-d863-470b-a5e4-1e676f2d8fad", "type": "ColumnDataSource"}, "id": "f1703f2e-f51e-439b-af4a-cfc118c1d7f4", "glyph": {"id": "ee23feb8-1685-4ab4-9b8a-443ab1b1b01d", "type": "Triangle"}, "tags": [], "doc": null}}, {"id": "a3018ca3-f0e3-44e7-a5c2-5303cde34b02", "type": "BasicTicker", "attributes": {"id": "a3018ca3-f0e3-44e7-a5c2-5303cde34b02", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "572cb402-ddca-423a-b85e-57280acba1e7", "type": "ToolEvents", "attributes": {"geometries": [], "id": "572cb402-ddca-423a-b85e-57280acba1e7", "doc": null, "tags": []}}, {"id": "4b0c22d0-eeae-470a-9987-268e489cae55", "type": "LinearAxis", "attributes": {"id": "4b0c22d0-eeae-470a-9987-268e489cae55", "formatter": {"id": "b0447857-ceea-47f7-9ef9-3189d8d1eda8", "type": "BasicTickFormatter"}, "plot": {"id": "8aa2446f-0272-4ed1-be5d-a2bf260bdf7a", "type": "Plot"}, "ticker": {"id": "a3018ca3-f0e3-44e7-a5c2-5303cde34b02", "type": "BasicTicker"}, "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("8c810382-c240-4521-92c6-77dd3a43f30e", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("8c810382-c240-4521-92c6-77dd3a43f30e", all_models);
    });
  }

}(this));