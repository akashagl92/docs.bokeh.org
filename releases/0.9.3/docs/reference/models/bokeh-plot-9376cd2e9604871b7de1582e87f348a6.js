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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.js"

  var elt = document.getElementById("2c57a6e1-11d8-4acc-afcd-7629b27b95a3");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2c57a6e1-11d8-4acc-afcd-7629b27b95a3' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"r": [0.16666666666666666, 0.19999999999999998, 0.23333333333333334, 0.26666666666666666, 0.3, 0.3333333333333333, 0.36666666666666664, 0.4, 0.43333333333333335], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0]}, "doc": null, "id": "eab8b515-0d32-4668-8a56-104901b31ad8", "column_names": ["r", "y", "x"]}, "id": "eab8b515-0d32-4668-8a56-104901b31ad8"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "b02e61a8-a448-42e4-9d5a-29e6277441a9"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "3fc5bd7b-8e70-40a5-adb5-267b405e0de3"}, "id": "f8eb5bd9-3f5d-406e-a5b1-45c9ddc53fe7", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "76d8acc1-ffcc-4e78-b6a3-bb8cedaee242"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "fd0135ce-dabe-469d-8a51-1ad725475ef2"}, "renderers": [{"type": "GlyphRenderer", "id": "50fd8007-188c-4627-86c0-b11717c65dbf"}, {"type": "LinearAxis", "id": "e884bc2e-d308-4847-86e9-465547cc57f6"}, {"type": "LinearAxis", "id": "b02e61a8-a448-42e4-9d5a-29e6277441a9"}, {"type": "Grid", "id": "3c27afb7-3a9a-4b5f-8a12-6b833af688ae"}, {"type": "Grid", "id": "c799c60c-c2f6-4222-b004-27b845ba2ab6"}], "below": [{"type": "LinearAxis", "id": "e884bc2e-d308-4847-86e9-465547cc57f6"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "f8eb5bd9-3f5d-406e-a5b1-45c9ddc53fe7"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "14d3aee2-a39e-4af3-9a88-d7f19ce6fd7f", "tags": []}, "id": "14d3aee2-a39e-4af3-9a88-d7f19ce6fd7f"}, {"type": "Wedge", "attributes": {"start_angle": {"units": "rad", "value": 0.6}, "y": {"field": "y"}, "end_angle": {"units": "rad", "value": 4.1}, "fill_color": {"value": "#B3DE69"}, "tags": [], "doc": null, "radius": {"units": "data", "field": "r"}, "x": {"field": "x"}, "id": "8966ab33-45d2-466b-af5d-00c0222693c4"}, "id": "8966ab33-45d2-466b-af5d-00c0222693c4"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "7d661613-a778-4493-9ec0-9b3db21da4ad", "tags": []}, "id": "7d661613-a778-4493-9ec0-9b3db21da4ad"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "76d8acc1-ffcc-4e78-b6a3-bb8cedaee242", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "76d8acc1-ffcc-4e78-b6a3-bb8cedaee242"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "28231d77-a618-4b0b-b7a1-09b8dc1b44fb"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "c4558a99-f20e-4693-ad1e-2f583f19ba7f"}, "plot": {"type": "Plot", "id": "f8eb5bd9-3f5d-406e-a5b1-45c9ddc53fe7"}, "id": "e884bc2e-d308-4847-86e9-465547cc57f6"}, "id": "e884bc2e-d308-4847-86e9-465547cc57f6"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "28231d77-a618-4b0b-b7a1-09b8dc1b44fb", "tags": []}, "id": "28231d77-a618-4b0b-b7a1-09b8dc1b44fb"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "14d3aee2-a39e-4af3-9a88-d7f19ce6fd7f"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "f8eb5bd9-3f5d-406e-a5b1-45c9ddc53fe7"}, "dimension": 1, "id": "c799c60c-c2f6-4222-b004-27b845ba2ab6"}, "id": "c799c60c-c2f6-4222-b004-27b845ba2ab6"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "3fc5bd7b-8e70-40a5-adb5-267b405e0de3", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "3fc5bd7b-8e70-40a5-adb5-267b405e0de3"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "14d3aee2-a39e-4af3-9a88-d7f19ce6fd7f"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "7d661613-a778-4493-9ec0-9b3db21da4ad"}, "plot": {"type": "Plot", "id": "f8eb5bd9-3f5d-406e-a5b1-45c9ddc53fe7"}, "id": "b02e61a8-a448-42e4-9d5a-29e6277441a9"}, "id": "b02e61a8-a448-42e4-9d5a-29e6277441a9"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "28231d77-a618-4b0b-b7a1-09b8dc1b44fb"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "f8eb5bd9-3f5d-406e-a5b1-45c9ddc53fe7"}, "dimension": 0, "id": "3c27afb7-3a9a-4b5f-8a12-6b833af688ae"}, "id": "3c27afb7-3a9a-4b5f-8a12-6b833af688ae"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "c4558a99-f20e-4693-ad1e-2f583f19ba7f", "tags": []}, "id": "c4558a99-f20e-4693-ad1e-2f583f19ba7f"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "fd0135ce-dabe-469d-8a51-1ad725475ef2", "tags": [], "geometries": []}, "id": "fd0135ce-dabe-469d-8a51-1ad725475ef2"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "eab8b515-0d32-4668-8a56-104901b31ad8"}, "tags": [], "glyph": {"type": "Wedge", "id": "8966ab33-45d2-466b-af5d-00c0222693c4"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "50fd8007-188c-4627-86c0-b11717c65dbf"}, "id": "50fd8007-188c-4627-86c0-b11717c65dbf"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("2c57a6e1-11d8-4acc-afcd-7629b27b95a3", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("2c57a6e1-11d8-4acc-afcd-7629b27b95a3", all_models);
    });
  }

}(this));