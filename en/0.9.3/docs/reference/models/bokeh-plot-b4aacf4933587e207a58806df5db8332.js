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

  var elt = document.getElementById("c5e4dcc8-7da1-4abd-a8b9-5d85eefbc77d");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c5e4dcc8-7da1-4abd-a8b9-5d85eefbc77d' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "CircleX", "attributes": {"y": {"field": "y"}, "fill_color": null, "size": {"units": "screen", "field": "sizes"}, "line_color": {"value": "#dd1c77"}, "tags": [], "doc": null, "x": {"field": "x"}, "id": "cc64704c-5a82-48cb-b9b6-841aa2131e02"}, "id": "cc64704c-5a82-48cb-b9b6-841aa2131e02"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "5e74cf63-fef1-42d5-9d4c-15d184e8c8d3", "tags": []}, "id": "5e74cf63-fef1-42d5-9d4c-15d184e8c8d3"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "8efdf6ad-9a93-41da-bed0-46ccb74a7c78"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "a5df6b7a-931d-457c-8ae0-d6ca145aa7dc"}, "dimension": 1, "id": "94907ed5-f570-4e22-80c8-5daf2192908e"}, "id": "94907ed5-f570-4e22-80c8-5daf2192908e"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "98018e9f-5015-48c2-a49b-2a19cc77b8cb", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "98018e9f-5015-48c2-a49b-2a19cc77b8cb"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "f1085bf2-1dde-472e-a4ab-d0f43f886da9", "tags": []}, "id": "f1085bf2-1dde-472e-a4ab-d0f43f886da9"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "f1085bf2-1dde-472e-a4ab-d0f43f886da9"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "46d4965b-3dab-4509-a1aa-bbca681d50df"}, "plot": {"type": "Plot", "id": "a5df6b7a-931d-457c-8ae0-d6ca145aa7dc"}, "id": "e44584ed-5908-4e9c-95a8-132a8b4a049b"}, "id": "e44584ed-5908-4e9c-95a8-132a8b4a049b"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "54bd049f-71c8-4ae8-9027-cfa9528e912f"}, "tags": [], "glyph": {"type": "CircleX", "id": "cc64704c-5a82-48cb-b9b6-841aa2131e02"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "b0e6270e-b262-4d77-aa46-bf649c840939"}, "id": "b0e6270e-b262-4d77-aa46-bf649c840939"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "8efdf6ad-9a93-41da-bed0-46ccb74a7c78", "tags": []}, "id": "8efdf6ad-9a93-41da-bed0-46ccb74a7c78"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "f1085bf2-1dde-472e-a4ab-d0f43f886da9"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "a5df6b7a-931d-457c-8ae0-d6ca145aa7dc"}, "dimension": 0, "id": "12ccdcf6-f6b0-4569-945a-626ae052159d"}, "id": "12ccdcf6-f6b0-4569-945a-626ae052159d"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "b673277a-d3a1-4cdb-935e-13faad1433a3"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "cda255f9-56cf-4232-89b3-e498cd5fba22"}, "id": "a5df6b7a-931d-457c-8ae0-d6ca145aa7dc", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "98018e9f-5015-48c2-a49b-2a19cc77b8cb"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "fdc98d71-6b2f-4265-9d71-6b1cc3373f10"}, "renderers": [{"type": "GlyphRenderer", "id": "b0e6270e-b262-4d77-aa46-bf649c840939"}, {"type": "LinearAxis", "id": "e44584ed-5908-4e9c-95a8-132a8b4a049b"}, {"type": "LinearAxis", "id": "b673277a-d3a1-4cdb-935e-13faad1433a3"}, {"type": "Grid", "id": "12ccdcf6-f6b0-4569-945a-626ae052159d"}, {"type": "Grid", "id": "94907ed5-f570-4e22-80c8-5daf2192908e"}], "below": [{"type": "LinearAxis", "id": "e44584ed-5908-4e9c-95a8-132a8b4a049b"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "a5df6b7a-931d-457c-8ae0-d6ca145aa7dc"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "cda255f9-56cf-4232-89b3-e498cd5fba22", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "cda255f9-56cf-4232-89b3-e498cd5fba22"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "fdc98d71-6b2f-4265-9d71-6b1cc3373f10", "tags": [], "geometries": []}, "id": "fdc98d71-6b2f-4265-9d71-6b1cc3373f10"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "8efdf6ad-9a93-41da-bed0-46ccb74a7c78"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "5e74cf63-fef1-42d5-9d4c-15d184e8c8d3"}, "plot": {"type": "Plot", "id": "a5df6b7a-931d-457c-8ae0-d6ca145aa7dc"}, "id": "b673277a-d3a1-4cdb-935e-13faad1433a3"}, "id": "b673277a-d3a1-4cdb-935e-13faad1433a3"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "46d4965b-3dab-4509-a1aa-bbca681d50df", "tags": []}, "id": "46d4965b-3dab-4509-a1aa-bbca681d50df"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "doc": null, "id": "54bd049f-71c8-4ae8-9027-cfa9528e912f", "column_names": ["y", "x", "sizes"]}, "id": "54bd049f-71c8-4ae8-9027-cfa9528e912f"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("c5e4dcc8-7da1-4abd-a8b9-5d85eefbc77d", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("c5e4dcc8-7da1-4abd-a8b9-5d85eefbc77d", all_models);
    });
  }

}(this));