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

  var elt = document.getElementById("6262d6a9-7d27-4ff7-9719-5fb5c4ae72d8");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '6262d6a9-7d27-4ff7-9719-5fb5c4ae72d8' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "5aee7614-ac1b-4325-8ed4-50b42e2f6fe2", "tags": []}, "id": "5aee7614-ac1b-4325-8ed4-50b42e2f6fe2"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "074487fd-f85c-46c2-afcf-8ad3cb03fac3"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "909f1f24-4d83-4d45-b345-c64f1be46f15"}, "plot": {"type": "Plot", "id": "22a556c4-1da8-44d6-a0d0-fb6c96ca39c2"}, "id": "fcb8a9a2-1112-4664-9050-1307a1b66afb"}, "id": "fcb8a9a2-1112-4664-9050-1307a1b66afb"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "5aee7614-ac1b-4325-8ed4-50b42e2f6fe2"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "22a556c4-1da8-44d6-a0d0-fb6c96ca39c2"}, "dimension": 1, "id": "61b3fa75-d55a-439e-a46f-a81c50226ff6"}, "id": "61b3fa75-d55a-439e-a46f-a81c50226ff6"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"r": [0.23333333333333336, 0.275, 0.3166666666666667, 0.35833333333333334, 0.4, 0.4416666666666667, 0.48333333333333334, 0.525, 0.5666666666666667], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0]}, "doc": null, "id": "082df605-0c6d-471a-8d2a-22636fc2b363", "column_names": ["r", "y", "x"]}, "id": "082df605-0c6d-471a-8d2a-22636fc2b363"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "d1765202-876c-42b9-bd18-15aafb9af971"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "f952b27e-7020-4d80-b50f-da0b6fe4ede2"}, "id": "22a556c4-1da8-44d6-a0d0-fb6c96ca39c2", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "448f26cc-de57-43a6-95a2-1f7ec4c4f7f8"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "96387c62-ee83-40bd-81ef-23f4101e7785"}, "renderers": [{"type": "GlyphRenderer", "id": "522e8672-1c63-4692-9021-fddfa7f48094"}, {"type": "LinearAxis", "id": "fcb8a9a2-1112-4664-9050-1307a1b66afb"}, {"type": "LinearAxis", "id": "d1765202-876c-42b9-bd18-15aafb9af971"}, {"type": "Grid", "id": "8c25bff3-463f-49f7-9659-6352215d79a3"}, {"type": "Grid", "id": "61b3fa75-d55a-439e-a46f-a81c50226ff6"}], "below": [{"type": "LinearAxis", "id": "fcb8a9a2-1112-4664-9050-1307a1b66afb"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "22a556c4-1da8-44d6-a0d0-fb6c96ca39c2"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "909f1f24-4d83-4d45-b345-c64f1be46f15", "tags": []}, "id": "909f1f24-4d83-4d45-b345-c64f1be46f15"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "0e68d316-b1e0-409d-9f9f-daea4a24b479", "tags": []}, "id": "0e68d316-b1e0-409d-9f9f-daea4a24b479"}, {"type": "AnnularWedge", "attributes": {"y": {"field": "y"}, "end_angle": {"units": "rad", "value": 4.1}, "outer_radius": {"units": "data", "field": "r"}, "x": {"field": "x"}, "inner_radius": {"units": "data", "value": 0.2}, "start_angle": {"units": "rad", "value": 0.6}, "fill_color": {"value": "#8888ee"}, "tags": [], "doc": null, "id": "71b57ccd-7dae-487c-a8b7-7deb8d2c4c6f"}, "id": "71b57ccd-7dae-487c-a8b7-7deb8d2c4c6f"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "082df605-0c6d-471a-8d2a-22636fc2b363"}, "tags": [], "glyph": {"type": "AnnularWedge", "id": "71b57ccd-7dae-487c-a8b7-7deb8d2c4c6f"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "522e8672-1c63-4692-9021-fddfa7f48094"}, "id": "522e8672-1c63-4692-9021-fddfa7f48094"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "f952b27e-7020-4d80-b50f-da0b6fe4ede2", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "f952b27e-7020-4d80-b50f-da0b6fe4ede2"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "96387c62-ee83-40bd-81ef-23f4101e7785", "tags": [], "geometries": []}, "id": "96387c62-ee83-40bd-81ef-23f4101e7785"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "074487fd-f85c-46c2-afcf-8ad3cb03fac3"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "22a556c4-1da8-44d6-a0d0-fb6c96ca39c2"}, "dimension": 0, "id": "8c25bff3-463f-49f7-9659-6352215d79a3"}, "id": "8c25bff3-463f-49f7-9659-6352215d79a3"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "074487fd-f85c-46c2-afcf-8ad3cb03fac3", "tags": []}, "id": "074487fd-f85c-46c2-afcf-8ad3cb03fac3"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "448f26cc-de57-43a6-95a2-1f7ec4c4f7f8", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "448f26cc-de57-43a6-95a2-1f7ec4c4f7f8"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "5aee7614-ac1b-4325-8ed4-50b42e2f6fe2"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "0e68d316-b1e0-409d-9f9f-daea4a24b479"}, "plot": {"type": "Plot", "id": "22a556c4-1da8-44d6-a0d0-fb6c96ca39c2"}, "id": "d1765202-876c-42b9-bd18-15aafb9af971"}, "id": "d1765202-876c-42b9-bd18-15aafb9af971"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("6262d6a9-7d27-4ff7-9719-5fb5c4ae72d8", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("6262d6a9-7d27-4ff7-9719-5fb5c4ae72d8", all_models);
    });
  }

}(this));