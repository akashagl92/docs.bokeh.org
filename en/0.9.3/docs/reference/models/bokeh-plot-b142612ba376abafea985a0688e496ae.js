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

  var elt = document.getElementById("895965a0-3986-4c7f-9aa7-fe436c1b757b");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '895965a0-3986-4c7f-9aa7-fe436c1b757b' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "04b63305-d210-4d9f-898a-8e02a336509d", "tags": []}, "id": "04b63305-d210-4d9f-898a-8e02a336509d"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "ec6a4791-1a75-493d-8e0a-9025f0d072d5", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "ec6a4791-1a75-493d-8e0a-9025f0d072d5"}, {"type": "Patches", "attributes": {"xs": {"field": "xs"}, "fill_color": {"value": "#fb9a99"}, "ys": {"field": "ys"}, "tags": [], "doc": null, "id": "0bddbcd3-45f8-43db-8a06-7672e870c566"}, "id": "0bddbcd3-45f8-43db-8a06-7672e870c566"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "74c22d87-2050-46f6-a1e3-e7a2fd99783f"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "1f4c0879-32d8-4e0a-83da-322b47492f70"}, "plot": {"type": "Plot", "id": "cae08610-2dfc-49ba-8377-dfa422bf00a8"}, "id": "365c903a-cb4d-4214-914f-9ddd610ce09e"}, "id": "365c903a-cb4d-4214-914f-9ddd610ce09e"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "4e53dab9-c2e8-4b9c-b4c9-3d8bc408ecc2"}, "tags": [], "glyph": {"type": "Patches", "id": "0bddbcd3-45f8-43db-8a06-7672e870c566"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "a58f78e3-9df2-4aa4-a47c-932e98669b20"}, "id": "a58f78e3-9df2-4aa4-a47c-932e98669b20"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "04b63305-d210-4d9f-898a-8e02a336509d"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "cae08610-2dfc-49ba-8377-dfa422bf00a8"}, "dimension": 0, "id": "c6c2e59a-4269-443b-b052-6c74d16f9d50"}, "id": "c6c2e59a-4269-443b-b052-6c74d16f9d50"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"xs": [[-2.09, -2.12, -2.0, -1.88, -1.91], [-1.599, -1.6320000000000001, -1.5, -1.3679999999999999, -1.401], [-1.108, -1.144, -1.0, -0.856, -0.892], [-0.617, -0.656, -0.5, -0.344, -0.383], [-0.126, -0.16799999999999998, 0.0, 0.16799999999999998, 0.126], [0.365, 0.32, 0.5, 0.6799999999999999, 0.635], [0.856, 0.808, 1.0, 1.192, 1.144], [1.347, 1.296, 1.5, 1.704, 1.653], [1.838, 1.784, 2.0, 2.216, 2.162]], "ys": [[3.9, 4.02, 4.1, 4.02, 3.9], [2.14, 2.272, 2.36, 2.272, 2.14], [0.88, 1.024, 1.12, 1.024, 0.88], [0.12, 0.276, 0.38, 0.276, 0.12], [-0.13999999999999999, 0.027999999999999997, 0.13999999999999999, 0.027999999999999997, -0.13999999999999999], [0.09999999999999998, 0.28, 0.4, 0.28, 0.09999999999999998], [0.84, 1.032, 1.1600000000000001, 1.032, 0.84], [2.08, 2.284, 2.42, 2.284, 2.08], [3.82, 4.036, 4.18, 4.036, 3.82]]}, "doc": null, "id": "4e53dab9-c2e8-4b9c-b4c9-3d8bc408ecc2", "column_names": ["xs", "ys"]}, "id": "4e53dab9-c2e8-4b9c-b4c9-3d8bc408ecc2"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "4a71c27b-7290-4af7-9f44-5687c45cee93", "tags": []}, "id": "4a71c27b-7290-4af7-9f44-5687c45cee93"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "04b63305-d210-4d9f-898a-8e02a336509d"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "4a71c27b-7290-4af7-9f44-5687c45cee93"}, "plot": {"type": "Plot", "id": "cae08610-2dfc-49ba-8377-dfa422bf00a8"}, "id": "643e44c4-d680-4143-bb36-1ad76c8c65b3"}, "id": "643e44c4-d680-4143-bb36-1ad76c8c65b3"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "74c22d87-2050-46f6-a1e3-e7a2fd99783f", "tags": []}, "id": "74c22d87-2050-46f6-a1e3-e7a2fd99783f"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "1f4c0879-32d8-4e0a-83da-322b47492f70", "tags": []}, "id": "1f4c0879-32d8-4e0a-83da-322b47492f70"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "cbed38d9-d09d-4eba-9bf4-0c3d2fa3efe6", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "cbed38d9-d09d-4eba-9bf4-0c3d2fa3efe6"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "c72bffc8-736a-4d69-ba84-70efb090be6d", "tags": [], "geometries": []}, "id": "c72bffc8-736a-4d69-ba84-70efb090be6d"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "365c903a-cb4d-4214-914f-9ddd610ce09e"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "ec6a4791-1a75-493d-8e0a-9025f0d072d5"}, "id": "cae08610-2dfc-49ba-8377-dfa422bf00a8", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "cbed38d9-d09d-4eba-9bf4-0c3d2fa3efe6"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "c72bffc8-736a-4d69-ba84-70efb090be6d"}, "renderers": [{"type": "GlyphRenderer", "id": "a58f78e3-9df2-4aa4-a47c-932e98669b20"}, {"type": "LinearAxis", "id": "643e44c4-d680-4143-bb36-1ad76c8c65b3"}, {"type": "LinearAxis", "id": "365c903a-cb4d-4214-914f-9ddd610ce09e"}, {"type": "Grid", "id": "c6c2e59a-4269-443b-b052-6c74d16f9d50"}, {"type": "Grid", "id": "1c2b2ceb-a9f7-4abf-a778-682780739982"}], "below": [{"type": "LinearAxis", "id": "643e44c4-d680-4143-bb36-1ad76c8c65b3"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "cae08610-2dfc-49ba-8377-dfa422bf00a8"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "74c22d87-2050-46f6-a1e3-e7a2fd99783f"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "cae08610-2dfc-49ba-8377-dfa422bf00a8"}, "dimension": 1, "id": "1c2b2ceb-a9f7-4abf-a778-682780739982"}, "id": "1c2b2ceb-a9f7-4abf-a778-682780739982"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("895965a0-3986-4c7f-9aa7-fe436c1b757b", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("895965a0-3986-4c7f-9aa7-fe436c1b757b", all_models);
    });
  }

}(this));