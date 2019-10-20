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

  var elt = document.getElementById("9d2c4d93-cd6d-4752-ac77-13e8c7050547");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '9d2c4d93-cd6d-4752-ac77-13e8c7050547' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "b7a7b3ae-c3f5-48aa-8d3c-bc118585b8c9"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "5282512a-b6ee-4643-99ad-395d487a66a8"}, "ticker": {"type": "BasicTicker", "id": "ce9a757e-8027-4935-8e26-a1212eba5732"}, "id": "cd1b9dcf-8dbd-4756-9123-29f1afa573f4"}, "type": "LinearAxis", "id": "cd1b9dcf-8dbd-4756-9123-29f1afa573f4"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "ae80aa02-3493-487a-bdd5-4d13683df20f"}, "type": "ToolEvents", "id": "ae80aa02-3493-487a-bdd5-4d13683df20f"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "ce9a757e-8027-4935-8e26-a1212eba5732"}, "type": "BasicTicker", "id": "ce9a757e-8027-4935-8e26-a1212eba5732"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "011bbda9-5413-42e9-ad06-7a151608f3a9"}, "tags": [], "doc": null, "selection_glyph": null, "id": "ff7aa6b3-d8b0-4965-805e-b186c5f9b3ec", "glyph": {"type": "MultiLine", "id": "4384ade4-d67d-4015-931a-7c576353d2db"}}, "type": "GlyphRenderer", "id": "ff7aa6b3-d8b0-4965-805e-b186c5f9b3ec"}, {"attributes": {"plot": {"type": "Plot", "id": "b7a7b3ae-c3f5-48aa-8d3c-bc118585b8c9"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "7125b944-78e0-4057-95d1-c0bdded975b6"}, "id": "d55407ee-2d82-47c5-8e7b-71133fb69a89"}, "type": "Grid", "id": "d55407ee-2d82-47c5-8e7b-71133fb69a89"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "576ec948-5531-4527-a2e6-fe24620335b9"}, "type": "DataRange1d", "id": "576ec948-5531-4527-a2e6-fe24620335b9"}, {"attributes": {"column_names": ["xs", "ys"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"xs": [[-2.09, -2.12, -2.0, -1.88, -1.91], [-1.599, -1.6320000000000001, -1.5, -1.3679999999999999, -1.401], [-1.108, -1.144, -1.0, -0.856, -0.892], [-0.617, -0.656, -0.5, -0.344, -0.383], [-0.126, -0.16799999999999998, 0.0, 0.16799999999999998, 0.126], [0.365, 0.32, 0.5, 0.6799999999999999, 0.635], [0.856, 0.808, 1.0, 1.192, 1.144], [1.347, 1.296, 1.5, 1.704, 1.653], [1.838, 1.784, 2.0, 2.216, 2.162]], "ys": [[3.9, 4.02, 4.1, 4.02, 3.9], [2.14, 2.272, 2.36, 2.272, 2.14], [0.88, 1.024, 1.12, 1.024, 0.88], [0.12, 0.276, 0.38, 0.276, 0.12], [-0.13999999999999999, 0.027999999999999997, 0.13999999999999999, 0.027999999999999997, -0.13999999999999999], [0.09999999999999998, 0.28, 0.4, 0.28, 0.09999999999999998], [0.84, 1.032, 1.1600000000000001, 1.032, 0.84], [2.08, 2.284, 2.42, 2.284, 2.08], [3.82, 4.036, 4.18, 4.036, 3.82]]}, "id": "011bbda9-5413-42e9-ad06-7a151608f3a9"}, "type": "ColumnDataSource", "id": "011bbda9-5413-42e9-ad06-7a151608f3a9"}, {"attributes": {"doc": null, "id": "5c7fd33c-2ebf-40c3-8adf-0d0981e18ef0", "tags": []}, "type": "BasicTickFormatter", "id": "5c7fd33c-2ebf-40c3-8adf-0d0981e18ef0"}, {"attributes": {"plot": {"type": "Plot", "id": "b7a7b3ae-c3f5-48aa-8d3c-bc118585b8c9"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "ce9a757e-8027-4935-8e26-a1212eba5732"}, "id": "e4c73bdf-f4e2-4d43-9b74-f1a6420b508e"}, "type": "Grid", "id": "e4c73bdf-f4e2-4d43-9b74-f1a6420b508e"}, {"attributes": {"line_color": {"value": "#8073ac"}, "line_width": {"value": 2}, "tags": [], "doc": null, "xs": {"field": "xs"}, "ys": {"field": "ys"}, "id": "4384ade4-d67d-4015-931a-7c576353d2db"}, "type": "MultiLine", "id": "4384ade4-d67d-4015-931a-7c576353d2db"}, {"attributes": {"doc": null, "id": "5282512a-b6ee-4643-99ad-395d487a66a8", "tags": []}, "type": "BasicTickFormatter", "id": "5282512a-b6ee-4643-99ad-395d487a66a8"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "98c54640-2564-4b96-a38e-e526a8058373"}, "type": "DataRange1d", "id": "98c54640-2564-4b96-a38e-e526a8058373"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "7125b944-78e0-4057-95d1-c0bdded975b6"}, "type": "BasicTicker", "id": "7125b944-78e0-4057-95d1-c0bdded975b6"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "576ec948-5531-4527-a2e6-fe24620335b9"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "ff7aa6b3-d8b0-4965-805e-b186c5f9b3ec"}, {"type": "LinearAxis", "id": "b4911ece-1a18-44e8-84d4-14122c41229d"}, {"type": "LinearAxis", "id": "cd1b9dcf-8dbd-4756-9123-29f1afa573f4"}, {"type": "Grid", "id": "d55407ee-2d82-47c5-8e7b-71133fb69a89"}, {"type": "Grid", "id": "e4c73bdf-f4e2-4d43-9b74-f1a6420b508e"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "ae80aa02-3493-487a-bdd5-4d13683df20f"}, "h_symmetry": false, "tools": [], "id": "b7a7b3ae-c3f5-48aa-8d3c-bc118585b8c9", "title": null, "y_range": {"type": "DataRange1d", "id": "98c54640-2564-4b96-a38e-e526a8058373"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "b4911ece-1a18-44e8-84d4-14122c41229d"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "cd1b9dcf-8dbd-4756-9123-29f1afa573f4"}]}, "type": "Plot", "id": "b7a7b3ae-c3f5-48aa-8d3c-bc118585b8c9"}, {"attributes": {"plot": {"type": "Plot", "id": "b7a7b3ae-c3f5-48aa-8d3c-bc118585b8c9"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "5c7fd33c-2ebf-40c3-8adf-0d0981e18ef0"}, "ticker": {"type": "BasicTicker", "id": "7125b944-78e0-4057-95d1-c0bdded975b6"}, "id": "b4911ece-1a18-44e8-84d4-14122c41229d"}, "type": "LinearAxis", "id": "b4911ece-1a18-44e8-84d4-14122c41229d"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("9d2c4d93-cd6d-4752-ac77-13e8c7050547", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("9d2c4d93-cd6d-4752-ac77-13e8c7050547", all_models);
    });
  }

}(this));