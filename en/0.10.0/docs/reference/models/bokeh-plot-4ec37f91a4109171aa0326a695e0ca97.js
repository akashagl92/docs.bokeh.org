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

  var elt = document.getElementById("91f355dc-2e8a-4781-82cc-1ef27b737ab0");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '91f355dc-2e8a-4781-82cc-1ef27b737ab0' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "3b01316d-e80b-45ec-b995-85368769389f"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "e875727f-6115-4b55-aa40-1ef7d111608e"}, "ticker": {"type": "BasicTicker", "id": "c2101e2c-0cef-4bce-ad6b-5ae66027d014"}, "id": "a7666cd2-15d9-4778-a697-11e8544b2d6a"}, "type": "LinearAxis", "id": "a7666cd2-15d9-4778-a697-11e8544b2d6a"}, {"attributes": {"plot": {"type": "Plot", "id": "3b01316d-e80b-45ec-b995-85368769389f"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "6a925815-dfe8-4337-9944-e74da4728ebe"}, "id": "12ffbb71-4777-477e-b8fa-936ce2a04468"}, "type": "Grid", "id": "12ffbb71-4777-477e-b8fa-936ce2a04468"}, {"attributes": {"doc": null, "id": "81366514-ffec-4e39-a0eb-e7ba6aca3414", "tags": []}, "type": "BasicTickFormatter", "id": "81366514-ffec-4e39-a0eb-e7ba6aca3414"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "c2101e2c-0cef-4bce-ad6b-5ae66027d014"}, "type": "BasicTicker", "id": "c2101e2c-0cef-4bce-ad6b-5ae66027d014"}, {"attributes": {"plot": {"type": "Plot", "id": "3b01316d-e80b-45ec-b995-85368769389f"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "c2101e2c-0cef-4bce-ad6b-5ae66027d014"}, "id": "7ddb74b5-248b-49ae-96d2-0f7571b17511"}, "type": "Grid", "id": "7ddb74b5-248b-49ae-96d2-0f7571b17511"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "6b8fd4eb-6887-4353-97b9-faa7acdbdfa7"}, "type": "ToolEvents", "id": "6b8fd4eb-6887-4353-97b9-faa7acdbdfa7"}, {"attributes": {"doc": null, "id": "e875727f-6115-4b55-aa40-1ef7d111608e", "tags": []}, "type": "BasicTickFormatter", "id": "e875727f-6115-4b55-aa40-1ef7d111608e"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "7a201b27-62f9-40e7-b7be-23536c09cfc3"}, "type": "DataRange1d", "id": "7a201b27-62f9-40e7-b7be-23536c09cfc3"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "7a201b27-62f9-40e7-b7be-23536c09cfc3"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "579fdc09-b24b-46cb-b023-924b288a71ee"}, {"type": "LinearAxis", "id": "e49c2bc4-788f-41c6-abd5-94fba200ba86"}, {"type": "LinearAxis", "id": "a7666cd2-15d9-4778-a697-11e8544b2d6a"}, {"type": "Grid", "id": "12ffbb71-4777-477e-b8fa-936ce2a04468"}, {"type": "Grid", "id": "7ddb74b5-248b-49ae-96d2-0f7571b17511"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "6b8fd4eb-6887-4353-97b9-faa7acdbdfa7"}, "h_symmetry": false, "tools": [], "id": "3b01316d-e80b-45ec-b995-85368769389f", "title": null, "y_range": {"type": "DataRange1d", "id": "53e3a985-9530-4aea-af75-2554b0e56973"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "e49c2bc4-788f-41c6-abd5-94fba200ba86"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "a7666cd2-15d9-4778-a697-11e8544b2d6a"}]}, "type": "Plot", "id": "3b01316d-e80b-45ec-b995-85368769389f"}, {"attributes": {"column_names": ["y", "x", "sizes"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "id": "1f0fabe6-bd62-4b21-8f4b-f56b2dcb7c71"}, "type": "ColumnDataSource", "id": "1f0fabe6-bd62-4b21-8f4b-f56b2dcb7c71"}, {"attributes": {"plot": {"type": "Plot", "id": "3b01316d-e80b-45ec-b995-85368769389f"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "81366514-ffec-4e39-a0eb-e7ba6aca3414"}, "ticker": {"type": "BasicTicker", "id": "6a925815-dfe8-4337-9944-e74da4728ebe"}, "id": "e49c2bc4-788f-41c6-abd5-94fba200ba86"}, "type": "LinearAxis", "id": "e49c2bc4-788f-41c6-abd5-94fba200ba86"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "6a925815-dfe8-4337-9944-e74da4728ebe"}, "type": "BasicTicker", "id": "6a925815-dfe8-4337-9944-e74da4728ebe"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "53e3a985-9530-4aea-af75-2554b0e56973"}, "type": "DataRange1d", "id": "53e3a985-9530-4aea-af75-2554b0e56973"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "1f0fabe6-bd62-4b21-8f4b-f56b2dcb7c71"}, "tags": [], "doc": null, "selection_glyph": null, "id": "579fdc09-b24b-46cb-b023-924b288a71ee", "glyph": {"type": "Diamond", "id": "b83fccd9-32bc-4159-8fc1-71c2aad13f65"}}, "type": "GlyphRenderer", "id": "579fdc09-b24b-46cb-b023-924b288a71ee"}, {"attributes": {"line_color": {"value": "#1c9099"}, "line_width": {"value": 2}, "fill_color": null, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "b83fccd9-32bc-4159-8fc1-71c2aad13f65", "size": {"units": "screen", "field": "sizes"}}, "type": "Diamond", "id": "b83fccd9-32bc-4159-8fc1-71c2aad13f65"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("91f355dc-2e8a-4781-82cc-1ef27b737ab0", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("91f355dc-2e8a-4781-82cc-1ef27b737ab0", all_models);
    });
  }

}(this));