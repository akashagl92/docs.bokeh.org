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

  var elt = document.getElementById("d7a5cce3-6049-4503-afd7-074272473a84");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'd7a5cce3-6049-4503-afd7-074272473a84' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "20af10d2-6fde-4cbf-aa8c-fb2cce4a42ef", "tags": []}, "id": "20af10d2-6fde-4cbf-aa8c-fb2cce4a42ef"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "3572e336-c2c2-4413-a9ff-b649b543c591"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "576cf965-84c5-4f47-b244-1931c9af5d61"}, "id": "c54e2333-298d-4e28-8366-2160a509016e", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "352dc733-1479-4856-bbc2-cdbc4e734144"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "d3916e1c-6f70-4de7-ae29-48291aa3495a"}, "renderers": [{"type": "GlyphRenderer", "id": "894f829b-5b91-4a4d-91be-564a1f4ba2e4"}, {"type": "LinearAxis", "id": "6c700706-68ea-48a4-abe5-5fa4e95e4033"}, {"type": "LinearAxis", "id": "3572e336-c2c2-4413-a9ff-b649b543c591"}, {"type": "Grid", "id": "032ff95c-419f-4d47-b7c9-664f42f02b13"}, {"type": "Grid", "id": "7ea8dad6-836f-469c-8934-859ebd857c8e"}], "below": [{"type": "LinearAxis", "id": "6c700706-68ea-48a4-abe5-5fa4e95e4033"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "c54e2333-298d-4e28-8366-2160a509016e"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "911f9867-0bfb-4894-8ce2-ef6c56dcb3eb"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "0fa68163-8c3a-49da-bd4f-e05bc62c601f"}, "plot": {"type": "Plot", "id": "c54e2333-298d-4e28-8366-2160a509016e"}, "id": "6c700706-68ea-48a4-abe5-5fa4e95e4033"}, "id": "6c700706-68ea-48a4-abe5-5fa4e95e4033"}, {"type": "MultiLine", "attributes": {"xs": {"field": "xs"}, "ys": {"field": "ys"}, "tags": [], "line_color": {"value": "#8073ac"}, "doc": null, "id": "703c8e74-2aae-4311-b647-70023a78e1cc", "line_width": {"value": 2}}, "id": "703c8e74-2aae-4311-b647-70023a78e1cc"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "8efc2506-b743-4435-a560-122200fb0b16"}, "tags": [], "glyph": {"type": "MultiLine", "id": "703c8e74-2aae-4311-b647-70023a78e1cc"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "894f829b-5b91-4a4d-91be-564a1f4ba2e4"}, "id": "894f829b-5b91-4a4d-91be-564a1f4ba2e4"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "911f9867-0bfb-4894-8ce2-ef6c56dcb3eb"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "c54e2333-298d-4e28-8366-2160a509016e"}, "dimension": 0, "id": "032ff95c-419f-4d47-b7c9-664f42f02b13"}, "id": "032ff95c-419f-4d47-b7c9-664f42f02b13"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "20af10d2-6fde-4cbf-aa8c-fb2cce4a42ef"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "7de54132-763f-4baf-8443-a8d69678e10d"}, "plot": {"type": "Plot", "id": "c54e2333-298d-4e28-8366-2160a509016e"}, "id": "3572e336-c2c2-4413-a9ff-b649b543c591"}, "id": "3572e336-c2c2-4413-a9ff-b649b543c591"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "576cf965-84c5-4f47-b244-1931c9af5d61", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "576cf965-84c5-4f47-b244-1931c9af5d61"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "911f9867-0bfb-4894-8ce2-ef6c56dcb3eb", "tags": []}, "id": "911f9867-0bfb-4894-8ce2-ef6c56dcb3eb"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"xs": [[-2.09, -2.12, -2.0, -1.88, -1.91], [-1.599, -1.6320000000000001, -1.5, -1.3679999999999999, -1.401], [-1.108, -1.144, -1.0, -0.856, -0.892], [-0.617, -0.656, -0.5, -0.344, -0.383], [-0.126, -0.16799999999999998, 0.0, 0.16799999999999998, 0.126], [0.365, 0.32, 0.5, 0.6799999999999999, 0.635], [0.856, 0.808, 1.0, 1.192, 1.144], [1.347, 1.296, 1.5, 1.704, 1.653], [1.838, 1.784, 2.0, 2.216, 2.162]], "ys": [[3.9, 4.02, 4.1, 4.02, 3.9], [2.14, 2.272, 2.36, 2.272, 2.14], [0.88, 1.024, 1.12, 1.024, 0.88], [0.12, 0.276, 0.38, 0.276, 0.12], [-0.13999999999999999, 0.027999999999999997, 0.13999999999999999, 0.027999999999999997, -0.13999999999999999], [0.09999999999999998, 0.28, 0.4, 0.28, 0.09999999999999998], [0.84, 1.032, 1.1600000000000001, 1.032, 0.84], [2.08, 2.284, 2.42, 2.284, 2.08], [3.82, 4.036, 4.18, 4.036, 3.82]]}, "doc": null, "id": "8efc2506-b743-4435-a560-122200fb0b16", "column_names": ["xs", "ys"]}, "id": "8efc2506-b743-4435-a560-122200fb0b16"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "20af10d2-6fde-4cbf-aa8c-fb2cce4a42ef"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "c54e2333-298d-4e28-8366-2160a509016e"}, "dimension": 1, "id": "7ea8dad6-836f-469c-8934-859ebd857c8e"}, "id": "7ea8dad6-836f-469c-8934-859ebd857c8e"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "d3916e1c-6f70-4de7-ae29-48291aa3495a", "tags": [], "geometries": []}, "id": "d3916e1c-6f70-4de7-ae29-48291aa3495a"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "352dc733-1479-4856-bbc2-cdbc4e734144", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "352dc733-1479-4856-bbc2-cdbc4e734144"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "0fa68163-8c3a-49da-bd4f-e05bc62c601f", "tags": []}, "id": "0fa68163-8c3a-49da-bd4f-e05bc62c601f"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "7de54132-763f-4baf-8443-a8d69678e10d", "tags": []}, "id": "7de54132-763f-4baf-8443-a8d69678e10d"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("d7a5cce3-6049-4503-afd7-074272473a84", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("d7a5cce3-6049-4503-afd7-074272473a84", all_models);
    });
  }

}(this));