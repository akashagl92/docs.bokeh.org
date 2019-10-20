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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.js"

  var elt = document.getElementById("8192c802-65dc-40c3-8c48-87a5c1b2b2a3");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8192c802-65dc-40c3-8c48-87a5c1b2b2a3' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "3d4c7b6b-9f7a-4937-9628-c80b72343a94"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "e0b26f78-8ef5-48f0-b153-17cdfef00fc5"}, "id": "9d9a8481-98bd-4e55-b611-dbd13d8424b5"}, "type": "Grid", "id": "9d9a8481-98bd-4e55-b611-dbd13d8424b5"}, {"attributes": {"doc": null, "id": "abba2875-6c79-4981-88e3-307ef459b2e7", "tags": []}, "type": "BasicTickFormatter", "id": "abba2875-6c79-4981-88e3-307ef459b2e7"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "d2fbff5e-a6a4-4b58-b169-07b0b49445a6"}, "type": "BasicTicker", "id": "d2fbff5e-a6a4-4b58-b169-07b0b49445a6"}, {"attributes": {"plot": {"type": "Plot", "id": "3d4c7b6b-9f7a-4937-9628-c80b72343a94"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "abba2875-6c79-4981-88e3-307ef459b2e7"}, "ticker": {"type": "BasicTicker", "id": "d2fbff5e-a6a4-4b58-b169-07b0b49445a6"}, "id": "d0d11242-87af-49b5-a167-1cf01e2653ba"}, "type": "LinearAxis", "id": "d0d11242-87af-49b5-a167-1cf01e2653ba"}, {"attributes": {"doc": null, "id": "d4d92891-dc83-474d-8269-53593b35a847", "tags": []}, "type": "BasicTickFormatter", "id": "d4d92891-dc83-474d-8269-53593b35a847"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "ed1ad26e-22f9-447e-8d63-8f3d8e0f89e6"}, "type": "ToolEvents", "id": "ed1ad26e-22f9-447e-8d63-8f3d8e0f89e6"}, {"attributes": {"column_names": ["y", "x", "sizes"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "id": "c25511bb-edf2-4bee-8575-2b0a3822a639"}, "type": "ColumnDataSource", "id": "c25511bb-edf2-4bee-8575-2b0a3822a639"}, {"attributes": {"line_color": {"value": "#7fc97f"}, "line_width": {"value": 2}, "fill_color": null, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "2c2ea04b-a39f-4114-af9a-3d40b520994d", "size": {"units": "screen", "field": "sizes"}}, "type": "SquareCross", "id": "2c2ea04b-a39f-4114-af9a-3d40b520994d"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "c61c9e12-3b60-4780-b605-233216d2254d"}, "type": "DataRange1d", "id": "c61c9e12-3b60-4780-b605-233216d2254d"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "c61c9e12-3b60-4780-b605-233216d2254d"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "8f5532f6-2f0a-492d-9ade-3599382c850b"}, {"type": "LinearAxis", "id": "b7a84fe8-1314-4e9f-90e2-72643d7789e6"}, {"type": "LinearAxis", "id": "d0d11242-87af-49b5-a167-1cf01e2653ba"}, {"type": "Grid", "id": "9d9a8481-98bd-4e55-b611-dbd13d8424b5"}, {"type": "Grid", "id": "70c103c2-9999-45d5-bc2c-1a9c85dbc664"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "ed1ad26e-22f9-447e-8d63-8f3d8e0f89e6"}, "h_symmetry": false, "tools": [], "id": "3d4c7b6b-9f7a-4937-9628-c80b72343a94", "title": null, "y_range": {"type": "DataRange1d", "id": "1de485ac-7276-4b32-b00c-72b45f532a9b"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "b7a84fe8-1314-4e9f-90e2-72643d7789e6"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "d0d11242-87af-49b5-a167-1cf01e2653ba"}]}, "type": "Plot", "id": "3d4c7b6b-9f7a-4937-9628-c80b72343a94"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "c25511bb-edf2-4bee-8575-2b0a3822a639"}, "tags": [], "doc": null, "selection_glyph": null, "id": "8f5532f6-2f0a-492d-9ade-3599382c850b", "glyph": {"type": "SquareCross", "id": "2c2ea04b-a39f-4114-af9a-3d40b520994d"}}, "type": "GlyphRenderer", "id": "8f5532f6-2f0a-492d-9ade-3599382c850b"}, {"attributes": {"plot": {"type": "Plot", "id": "3d4c7b6b-9f7a-4937-9628-c80b72343a94"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "d2fbff5e-a6a4-4b58-b169-07b0b49445a6"}, "id": "70c103c2-9999-45d5-bc2c-1a9c85dbc664"}, "type": "Grid", "id": "70c103c2-9999-45d5-bc2c-1a9c85dbc664"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "e0b26f78-8ef5-48f0-b153-17cdfef00fc5"}, "type": "BasicTicker", "id": "e0b26f78-8ef5-48f0-b153-17cdfef00fc5"}, {"attributes": {"plot": {"type": "Plot", "id": "3d4c7b6b-9f7a-4937-9628-c80b72343a94"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "d4d92891-dc83-474d-8269-53593b35a847"}, "ticker": {"type": "BasicTicker", "id": "e0b26f78-8ef5-48f0-b153-17cdfef00fc5"}, "id": "b7a84fe8-1314-4e9f-90e2-72643d7789e6"}, "type": "LinearAxis", "id": "b7a84fe8-1314-4e9f-90e2-72643d7789e6"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "1de485ac-7276-4b32-b00c-72b45f532a9b"}, "type": "DataRange1d", "id": "1de485ac-7276-4b32-b00c-72b45f532a9b"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("8192c802-65dc-40c3-8c48-87a5c1b2b2a3", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("8192c802-65dc-40c3-8c48-87a5c1b2b2a3", all_models);
    });
  }

}(this));