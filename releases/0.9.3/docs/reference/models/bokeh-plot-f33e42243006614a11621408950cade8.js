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

  var elt = document.getElementById("ac8264d8-d265-4e12-83c7-0d24a95c7102");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ac8264d8-d265-4e12-83c7-0d24a95c7102' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "doc": null, "id": "48877f73-5849-44d1-a730-98e6cbfc7c7e", "column_names": ["y", "x", "sizes"]}, "id": "48877f73-5849-44d1-a730-98e6cbfc7c7e"}, {"type": "Cross", "attributes": {"y": {"field": "y"}, "fill_color": null, "size": {"units": "screen", "field": "sizes"}, "line_width": {"value": 2}, "line_color": {"value": "#e6550d"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "c2f9671f-6a54-4ddf-9399-343523c972ed"}, "id": "c2f9671f-6a54-4ddf-9399-343523c972ed"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "dda49db2-f1b5-4ff2-a601-7ac21289954a"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "f768bf39-29d1-494d-935a-091b8105ec73"}, "dimension": 1, "id": "7ec88fb8-0845-447b-a313-fb29329e83c4"}, "id": "7ec88fb8-0845-447b-a313-fb29329e83c4"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "972fe9ed-82af-4b98-aa61-298ff5cce052", "tags": []}, "id": "972fe9ed-82af-4b98-aa61-298ff5cce052"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "dda49db2-f1b5-4ff2-a601-7ac21289954a"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "4468b7c0-d631-4a67-bc8d-c980765fc6d1"}, "plot": {"type": "Plot", "id": "f768bf39-29d1-494d-935a-091b8105ec73"}, "id": "4f144398-4d3e-4a41-9528-53697306f286"}, "id": "4f144398-4d3e-4a41-9528-53697306f286"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "a952c864-2e57-48e5-971a-f055f59bc7d4"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "f768bf39-29d1-494d-935a-091b8105ec73"}, "dimension": 0, "id": "6b5c535d-dd6f-4936-8db0-e323d301157c"}, "id": "6b5c535d-dd6f-4936-8db0-e323d301157c"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "4f144398-4d3e-4a41-9528-53697306f286"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "fffc2342-d112-41b6-bc84-b1f71ee5554a"}, "id": "f768bf39-29d1-494d-935a-091b8105ec73", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "6236ab21-f62e-49c0-948c-e37f09ae9ebe"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "17726fac-01e6-4e64-8a3e-318162440336"}, "renderers": [{"type": "GlyphRenderer", "id": "c300e5de-74c2-4475-a8a7-dc44c7ddfb5d"}, {"type": "LinearAxis", "id": "7476d1b4-87c4-4046-8503-44f57eb2da3e"}, {"type": "LinearAxis", "id": "4f144398-4d3e-4a41-9528-53697306f286"}, {"type": "Grid", "id": "6b5c535d-dd6f-4936-8db0-e323d301157c"}, {"type": "Grid", "id": "7ec88fb8-0845-447b-a313-fb29329e83c4"}], "below": [{"type": "LinearAxis", "id": "7476d1b4-87c4-4046-8503-44f57eb2da3e"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "f768bf39-29d1-494d-935a-091b8105ec73"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "4468b7c0-d631-4a67-bc8d-c980765fc6d1", "tags": []}, "id": "4468b7c0-d631-4a67-bc8d-c980765fc6d1"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "17726fac-01e6-4e64-8a3e-318162440336", "tags": [], "geometries": []}, "id": "17726fac-01e6-4e64-8a3e-318162440336"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "a952c864-2e57-48e5-971a-f055f59bc7d4"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "972fe9ed-82af-4b98-aa61-298ff5cce052"}, "plot": {"type": "Plot", "id": "f768bf39-29d1-494d-935a-091b8105ec73"}, "id": "7476d1b4-87c4-4046-8503-44f57eb2da3e"}, "id": "7476d1b4-87c4-4046-8503-44f57eb2da3e"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "dda49db2-f1b5-4ff2-a601-7ac21289954a", "tags": []}, "id": "dda49db2-f1b5-4ff2-a601-7ac21289954a"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "6236ab21-f62e-49c0-948c-e37f09ae9ebe", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "6236ab21-f62e-49c0-948c-e37f09ae9ebe"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "fffc2342-d112-41b6-bc84-b1f71ee5554a", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "fffc2342-d112-41b6-bc84-b1f71ee5554a"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "a952c864-2e57-48e5-971a-f055f59bc7d4", "tags": []}, "id": "a952c864-2e57-48e5-971a-f055f59bc7d4"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "48877f73-5849-44d1-a730-98e6cbfc7c7e"}, "tags": [], "glyph": {"type": "Cross", "id": "c2f9671f-6a54-4ddf-9399-343523c972ed"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "c300e5de-74c2-4475-a8a7-dc44c7ddfb5d"}, "id": "c300e5de-74c2-4475-a8a7-dc44c7ddfb5d"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("ac8264d8-d265-4e12-83c7-0d24a95c7102", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("ac8264d8-d265-4e12-83c7-0d24a95c7102", all_models);
    });
  }

}(this));