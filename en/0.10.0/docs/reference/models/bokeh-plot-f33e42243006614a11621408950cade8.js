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

  var elt = document.getElementById("15999e61-064d-44b1-8db3-5cde48f089d1");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '15999e61-064d-44b1-8db3-5cde48f089d1' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"column_names": ["y", "x", "sizes"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "id": "17576556-8870-4331-8434-3eea6b433e36"}, "type": "ColumnDataSource", "id": "17576556-8870-4331-8434-3eea6b433e36"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "96a6bba1-402b-43ce-91de-1415242858f8"}, "type": "BasicTicker", "id": "96a6bba1-402b-43ce-91de-1415242858f8"}, {"attributes": {"plot": {"type": "Plot", "id": "c0ad50dc-1933-4373-b404-1d2901f6486d"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "18bf5736-d07e-42ac-a81d-7e0712c4214a"}, "ticker": {"type": "BasicTicker", "id": "96a6bba1-402b-43ce-91de-1415242858f8"}, "id": "b96e1aef-0ad3-4fd9-84dc-d2462c13f545"}, "type": "LinearAxis", "id": "b96e1aef-0ad3-4fd9-84dc-d2462c13f545"}, {"attributes": {"plot": {"type": "Plot", "id": "c0ad50dc-1933-4373-b404-1d2901f6486d"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "c3401056-f8e2-41d9-b05f-c19d891180a7"}, "id": "6d89f04c-1601-463b-9730-7263d5b6c785"}, "type": "Grid", "id": "6d89f04c-1601-463b-9730-7263d5b6c785"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "948f8445-90b3-41a6-b742-6f6f0764dec1"}, "type": "DataRange1d", "id": "948f8445-90b3-41a6-b742-6f6f0764dec1"}, {"attributes": {"plot": {"type": "Plot", "id": "c0ad50dc-1933-4373-b404-1d2901f6486d"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "96a6bba1-402b-43ce-91de-1415242858f8"}, "id": "06a24066-a0c6-463b-a98d-738442c17c97"}, "type": "Grid", "id": "06a24066-a0c6-463b-a98d-738442c17c97"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "c3401056-f8e2-41d9-b05f-c19d891180a7"}, "type": "BasicTicker", "id": "c3401056-f8e2-41d9-b05f-c19d891180a7"}, {"attributes": {"plot": {"type": "Plot", "id": "c0ad50dc-1933-4373-b404-1d2901f6486d"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "b9ae427d-7175-4d0f-9814-a48ecd26070f"}, "ticker": {"type": "BasicTicker", "id": "c3401056-f8e2-41d9-b05f-c19d891180a7"}, "id": "8b6a3647-b491-4a2a-a134-6e00b96cd230"}, "type": "LinearAxis", "id": "8b6a3647-b491-4a2a-a134-6e00b96cd230"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "aea6301d-d41d-443b-9d90-edf03f1b837f"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "383962c7-82ee-4003-a4af-f6a836119c82"}, {"type": "LinearAxis", "id": "b96e1aef-0ad3-4fd9-84dc-d2462c13f545"}, {"type": "LinearAxis", "id": "8b6a3647-b491-4a2a-a134-6e00b96cd230"}, {"type": "Grid", "id": "06a24066-a0c6-463b-a98d-738442c17c97"}, {"type": "Grid", "id": "6d89f04c-1601-463b-9730-7263d5b6c785"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "1d7b98af-51a3-405c-a79e-9a912e17f377"}, "h_symmetry": false, "tools": [], "id": "c0ad50dc-1933-4373-b404-1d2901f6486d", "title": null, "y_range": {"type": "DataRange1d", "id": "948f8445-90b3-41a6-b742-6f6f0764dec1"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "b96e1aef-0ad3-4fd9-84dc-d2462c13f545"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "8b6a3647-b491-4a2a-a134-6e00b96cd230"}]}, "type": "Plot", "id": "c0ad50dc-1933-4373-b404-1d2901f6486d"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "17576556-8870-4331-8434-3eea6b433e36"}, "tags": [], "doc": null, "selection_glyph": null, "id": "383962c7-82ee-4003-a4af-f6a836119c82", "glyph": {"type": "Cross", "id": "abe78bc6-3493-44c4-98b0-551e9602d205"}}, "type": "GlyphRenderer", "id": "383962c7-82ee-4003-a4af-f6a836119c82"}, {"attributes": {"line_color": {"value": "#e6550d"}, "line_width": {"value": 2}, "fill_color": null, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "abe78bc6-3493-44c4-98b0-551e9602d205", "size": {"units": "screen", "field": "sizes"}}, "type": "Cross", "id": "abe78bc6-3493-44c4-98b0-551e9602d205"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "aea6301d-d41d-443b-9d90-edf03f1b837f"}, "type": "DataRange1d", "id": "aea6301d-d41d-443b-9d90-edf03f1b837f"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "1d7b98af-51a3-405c-a79e-9a912e17f377"}, "type": "ToolEvents", "id": "1d7b98af-51a3-405c-a79e-9a912e17f377"}, {"attributes": {"doc": null, "id": "18bf5736-d07e-42ac-a81d-7e0712c4214a", "tags": []}, "type": "BasicTickFormatter", "id": "18bf5736-d07e-42ac-a81d-7e0712c4214a"}, {"attributes": {"doc": null, "id": "b9ae427d-7175-4d0f-9814-a48ecd26070f", "tags": []}, "type": "BasicTickFormatter", "id": "b9ae427d-7175-4d0f-9814-a48ecd26070f"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("15999e61-064d-44b1-8db3-5cde48f089d1", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("15999e61-064d-44b1-8db3-5cde48f089d1", all_models);
    });
  }

}(this));