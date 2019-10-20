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

  var elt = document.getElementById("c7f4fa56-7092-4e22-8b7e-99ab858f310f");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c7f4fa56-7092-4e22-8b7e-99ab858f310f' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "dee22a45-357b-4ba9-945c-8188fd92c049", "tags": []}, "id": "dee22a45-357b-4ba9-945c-8188fd92c049"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "cb8fa15d-7b52-40c2-8081-c7058cfdd9ec"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "1dbead71-e990-4ad2-8ad7-8cb4e46a70eb"}, "plot": {"type": "Plot", "id": "40622ef6-5873-47a7-8b79-4d62f08c98c8"}, "id": "7b725dee-ba0e-4da2-a860-522ea690e9bc"}, "id": "7b725dee-ba0e-4da2-a860-522ea690e9bc"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "1dbead71-e990-4ad2-8ad7-8cb4e46a70eb", "tags": []}, "id": "1dbead71-e990-4ad2-8ad7-8cb4e46a70eb"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "dee22a45-357b-4ba9-945c-8188fd92c049"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "28bf5f5e-ef96-41f9-9592-8b119e51a6c1"}, "plot": {"type": "Plot", "id": "40622ef6-5873-47a7-8b79-4d62f08c98c8"}, "id": "8fa9a256-3598-45e5-8356-e5a28d5e0ce5"}, "id": "8fa9a256-3598-45e5-8356-e5a28d5e0ce5"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "8fa9a256-3598-45e5-8356-e5a28d5e0ce5"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "8a20bb37-e73e-426a-88ab-4a7c67a48bb9"}, "id": "40622ef6-5873-47a7-8b79-4d62f08c98c8", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "20602c43-b4de-4e7d-a7b6-8f4dd65d0160"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "f58f0951-5583-4658-bbdb-b893771fc65f"}, "renderers": [{"type": "GlyphRenderer", "id": "43eb9e9c-5224-49b6-86cd-47b989aa620f"}, {"type": "LinearAxis", "id": "7b725dee-ba0e-4da2-a860-522ea690e9bc"}, {"type": "LinearAxis", "id": "8fa9a256-3598-45e5-8356-e5a28d5e0ce5"}, {"type": "Grid", "id": "f193f305-5fa2-49c8-9362-2bbb34acbd87"}, {"type": "Grid", "id": "346a4479-3649-4b73-a86b-40acb33d9e3e"}], "below": [{"type": "LinearAxis", "id": "7b725dee-ba0e-4da2-a860-522ea690e9bc"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "40622ef6-5873-47a7-8b79-4d62f08c98c8"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "dee22a45-357b-4ba9-945c-8188fd92c049"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "40622ef6-5873-47a7-8b79-4d62f08c98c8"}, "dimension": 1, "id": "346a4479-3649-4b73-a86b-40acb33d9e3e"}, "id": "346a4479-3649-4b73-a86b-40acb33d9e3e"}, {"type": "X", "attributes": {"y": {"field": "y"}, "fill_color": null, "size": {"units": "screen", "field": "sizes"}, "line_width": {"value": 2}, "line_color": {"value": "#fdae6b"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "4cf777ff-0603-4210-b3c1-b61340828c74"}, "id": "4cf777ff-0603-4210-b3c1-b61340828c74"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "8a20bb37-e73e-426a-88ab-4a7c67a48bb9", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "8a20bb37-e73e-426a-88ab-4a7c67a48bb9"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "b89186d1-e821-439a-afce-9af12fc2bf8d"}, "tags": [], "glyph": {"type": "X", "id": "4cf777ff-0603-4210-b3c1-b61340828c74"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "43eb9e9c-5224-49b6-86cd-47b989aa620f"}, "id": "43eb9e9c-5224-49b6-86cd-47b989aa620f"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "20602c43-b4de-4e7d-a7b6-8f4dd65d0160", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "20602c43-b4de-4e7d-a7b6-8f4dd65d0160"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "28bf5f5e-ef96-41f9-9592-8b119e51a6c1", "tags": []}, "id": "28bf5f5e-ef96-41f9-9592-8b119e51a6c1"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "cb8fa15d-7b52-40c2-8081-c7058cfdd9ec", "tags": []}, "id": "cb8fa15d-7b52-40c2-8081-c7058cfdd9ec"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "doc": null, "id": "b89186d1-e821-439a-afce-9af12fc2bf8d", "column_names": ["y", "x", "sizes"]}, "id": "b89186d1-e821-439a-afce-9af12fc2bf8d"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "cb8fa15d-7b52-40c2-8081-c7058cfdd9ec"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "40622ef6-5873-47a7-8b79-4d62f08c98c8"}, "dimension": 0, "id": "f193f305-5fa2-49c8-9362-2bbb34acbd87"}, "id": "f193f305-5fa2-49c8-9362-2bbb34acbd87"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "f58f0951-5583-4658-bbdb-b893771fc65f", "tags": [], "geometries": []}, "id": "f58f0951-5583-4658-bbdb-b893771fc65f"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("c7f4fa56-7092-4e22-8b7e-99ab858f310f", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("c7f4fa56-7092-4e22-8b7e-99ab858f310f", all_models);
    });
  }

}(this));