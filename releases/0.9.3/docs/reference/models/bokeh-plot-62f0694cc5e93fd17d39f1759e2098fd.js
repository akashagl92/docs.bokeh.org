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

  var elt = document.getElementById("ce572f74-f747-4b1f-a6e2-a192f49b3f07");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ce572f74-f747-4b1f-a6e2-a192f49b3f07' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "8b650773-94cd-4567-9973-416a778b5f38", "tags": []}, "id": "8b650773-94cd-4567-9973-416a778b5f38"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "4431fdc4-d5f3-4306-bfcd-bd71804b9571"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "07974e2e-6d0e-4395-ad11-24c889f4f170"}, "id": "f38327bf-725a-4e23-98bd-eb6adaffe6ef", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "7c7f23a2-45d3-4c7d-a2c9-556019366e0b"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "09e2b87f-fd8c-4359-991c-fe58e5dee61f"}, "renderers": [{"type": "GlyphRenderer", "id": "c9143a22-dd79-4f6c-a11e-eacd2db8c67a"}, {"type": "LinearAxis", "id": "28bcb74a-0106-45d6-be38-47a7fe611573"}, {"type": "LinearAxis", "id": "4431fdc4-d5f3-4306-bfcd-bd71804b9571"}, {"type": "Grid", "id": "2d4a485b-efbd-48df-a39b-ef47e213eb23"}, {"type": "Grid", "id": "3f171fea-8540-4c2f-9e6d-8dc63d0258f6"}], "below": [{"type": "LinearAxis", "id": "28bcb74a-0106-45d6-be38-47a7fe611573"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "f38327bf-725a-4e23-98bd-eb6adaffe6ef"}, {"type": "Annulus", "attributes": {"y": {"field": "y"}, "fill_color": {"value": "#7fc97f"}, "outer_radius": {"units": "data", "value": 0.4}, "tags": [], "doc": null, "x": {"field": "x"}, "id": "1d063941-249a-4688-a030-2442b55d3f4e", "inner_radius": {"units": "data", "value": 0.2}}, "id": "1d063941-249a-4688-a030-2442b55d3f4e"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "68827b3c-ef3a-4847-842b-a202bed1a231"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "f38327bf-725a-4e23-98bd-eb6adaffe6ef"}, "dimension": 0, "id": "2d4a485b-efbd-48df-a39b-ef47e213eb23"}, "id": "2d4a485b-efbd-48df-a39b-ef47e213eb23"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "7c7f23a2-45d3-4c7d-a2c9-556019366e0b", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "7c7f23a2-45d3-4c7d-a2c9-556019366e0b"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "0587d7f2-d629-49af-a202-407323236626", "tags": []}, "id": "0587d7f2-d629-49af-a202-407323236626"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "0587d7f2-d629-49af-a202-407323236626"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "8b650773-94cd-4567-9973-416a778b5f38"}, "plot": {"type": "Plot", "id": "f38327bf-725a-4e23-98bd-eb6adaffe6ef"}, "id": "4431fdc4-d5f3-4306-bfcd-bd71804b9571"}, "id": "4431fdc4-d5f3-4306-bfcd-bd71804b9571"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0]}, "doc": null, "id": "d82e24b6-4e8c-48b8-82ba-5d2265f6a57b", "column_names": ["y", "x"]}, "id": "d82e24b6-4e8c-48b8-82ba-5d2265f6a57b"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "68827b3c-ef3a-4847-842b-a202bed1a231", "tags": []}, "id": "68827b3c-ef3a-4847-842b-a202bed1a231"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "68827b3c-ef3a-4847-842b-a202bed1a231"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "f0dcb2dc-02f6-4031-92b4-a758a9aa9ee2"}, "plot": {"type": "Plot", "id": "f38327bf-725a-4e23-98bd-eb6adaffe6ef"}, "id": "28bcb74a-0106-45d6-be38-47a7fe611573"}, "id": "28bcb74a-0106-45d6-be38-47a7fe611573"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "f0dcb2dc-02f6-4031-92b4-a758a9aa9ee2", "tags": []}, "id": "f0dcb2dc-02f6-4031-92b4-a758a9aa9ee2"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "09e2b87f-fd8c-4359-991c-fe58e5dee61f", "tags": [], "geometries": []}, "id": "09e2b87f-fd8c-4359-991c-fe58e5dee61f"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "d82e24b6-4e8c-48b8-82ba-5d2265f6a57b"}, "tags": [], "glyph": {"type": "Annulus", "id": "1d063941-249a-4688-a030-2442b55d3f4e"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "c9143a22-dd79-4f6c-a11e-eacd2db8c67a"}, "id": "c9143a22-dd79-4f6c-a11e-eacd2db8c67a"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "0587d7f2-d629-49af-a202-407323236626"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "f38327bf-725a-4e23-98bd-eb6adaffe6ef"}, "dimension": 1, "id": "3f171fea-8540-4c2f-9e6d-8dc63d0258f6"}, "id": "3f171fea-8540-4c2f-9e6d-8dc63d0258f6"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "07974e2e-6d0e-4395-ad11-24c889f4f170", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "07974e2e-6d0e-4395-ad11-24c889f4f170"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("ce572f74-f747-4b1f-a6e2-a192f49b3f07", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("ce572f74-f747-4b1f-a6e2-a192f49b3f07", all_models);
    });
  }

}(this));