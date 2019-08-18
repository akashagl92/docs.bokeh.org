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

  var elt = document.getElementById("57c7abeb-1ce7-4340-85df-1e97421aaf9c");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '57c7abeb-1ce7-4340-85df-1e97421aaf9c' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "66ec4418-999c-499d-a365-55ea77f4ed90"}, "type": "DataRange1d", "id": "66ec4418-999c-499d-a365-55ea77f4ed90"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "d7352fe0-0865-49c6-8361-c8ad03435478"}, "type": "DataRange1d", "id": "d7352fe0-0865-49c6-8361-c8ad03435478"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5f9c1f08-67db-4271-9ec9-4ad2799a6882"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "0aee4919-ee2a-43f9-89bb-a18c41305dae"}, "ticker": {"type": "BasicTicker", "id": "d1fdc2df-7cff-4dc9-a884-c9dce56eb341"}, "id": "deee95b4-4217-4372-ab6a-2e4ee8e945ce"}, "type": "LinearAxis", "id": "deee95b4-4217-4372-ab6a-2e4ee8e945ce"}, {"attributes": {"doc": null, "id": "8b248d1b-f5e8-45fc-a167-573c868e6839", "tags": []}, "type": "BasicTickFormatter", "id": "8b248d1b-f5e8-45fc-a167-573c868e6839"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "0b99bae3-6487-4155-924e-539b03600a87"}, "data_source": {"type": "ColumnDataSource", "id": "a49aea35-3e87-4d5e-a132-1e48805ab03f"}, "tags": [], "doc": null, "selection_glyph": null, "id": "ad0d9371-8aae-414d-a97a-7d7e5a11d823", "glyph": {"type": "Circle", "id": "92152658-b63f-4769-a51f-448da809470b"}}, "type": "GlyphRenderer", "id": "ad0d9371-8aae-414d-a97a-7d7e5a11d823"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "0b99bae3-6487-4155-924e-539b03600a87", "size": {"units": "screen", "value": 20}}, "type": "Circle", "id": "0b99bae3-6487-4155-924e-539b03600a87"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5f9c1f08-67db-4271-9ec9-4ad2799a6882"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "8b248d1b-f5e8-45fc-a167-573c868e6839"}, "ticker": {"type": "BasicTicker", "id": "a9e48483-450f-4048-a1e9-903a56866bb8"}, "id": "f8dbb914-8d30-4f00-ba8d-e244bcc40345"}, "type": "LinearAxis", "id": "f8dbb914-8d30-4f00-ba8d-e244bcc40345"}, {"subtype": "Figure", "type": "Plot", "id": "5f9c1f08-67db-4271-9ec9-4ad2799a6882", "attributes": {"x_range": {"type": "DataRange1d", "id": "d7352fe0-0865-49c6-8361-c8ad03435478"}, "right": [], "tags": [], "tools": [{"type": "TapTool", "id": "2ec934b7-c1e2-41af-8385-ef8349c7c65f"}], "title": "Click the Dots", "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "deee95b4-4217-4372-ab6a-2e4ee8e945ce"}, {"type": "Grid", "id": "80a94222-11e6-40c6-bc5b-6e757a3c2cc9"}, {"type": "LinearAxis", "id": "f8dbb914-8d30-4f00-ba8d-e244bcc40345"}, {"type": "Grid", "id": "974c6f50-8589-4465-b447-65764499edd4"}, {"type": "GlyphRenderer", "id": "ad0d9371-8aae-414d-a97a-7d7e5a11d823"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "75e2b73c-2e40-4283-8d07-98b40dd1f875"}, "above": [], "doc": null, "id": "5f9c1f08-67db-4271-9ec9-4ad2799a6882", "y_range": {"type": "DataRange1d", "id": "66ec4418-999c-499d-a365-55ea77f4ed90"}, "below": [{"type": "LinearAxis", "id": "deee95b4-4217-4372-ab6a-2e4ee8e945ce"}], "left": [{"type": "LinearAxis", "id": "f8dbb914-8d30-4f00-ba8d-e244bcc40345"}]}}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "d1fdc2df-7cff-4dc9-a884-c9dce56eb341", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "d1fdc2df-7cff-4dc9-a884-c9dce56eb341"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5f9c1f08-67db-4271-9ec9-4ad2799a6882"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "d1fdc2df-7cff-4dc9-a884-c9dce56eb341"}, "id": "80a94222-11e6-40c6-bc5b-6e757a3c2cc9"}, "type": "Grid", "id": "80a94222-11e6-40c6-bc5b-6e757a3c2cc9"}, {"attributes": {"line_color": {"field": "color"}, "line_alpha": {"value": 1.0}, "fill_color": {"field": "color"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "92152658-b63f-4769-a51f-448da809470b", "size": {"units": "screen", "value": 20}}, "type": "Circle", "id": "92152658-b63f-4769-a51f-448da809470b"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5f9c1f08-67db-4271-9ec9-4ad2799a6882"}, "tags": [], "doc": null, "renderers": [], "id": "2ec934b7-c1e2-41af-8385-ef8349c7c65f", "callback": {"type": "OpenURL", "id": "21b41583-e89c-4b28-8043-c81b5e2a91c2"}, "names": [], "always_active": true}, "type": "TapTool", "id": "2ec934b7-c1e2-41af-8385-ef8349c7c65f"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "75e2b73c-2e40-4283-8d07-98b40dd1f875"}, "type": "ToolEvents", "id": "75e2b73c-2e40-4283-8d07-98b40dd1f875"}, {"attributes": {"column_names": ["color", "y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"color": ["navy", "orange", "olive", "firebrick", "gold"], "y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5]}, "id": "a49aea35-3e87-4d5e-a132-1e48805ab03f"}, "type": "ColumnDataSource", "id": "a49aea35-3e87-4d5e-a132-1e48805ab03f"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "5f9c1f08-67db-4271-9ec9-4ad2799a6882"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "a9e48483-450f-4048-a1e9-903a56866bb8"}, "id": "974c6f50-8589-4465-b447-65764499edd4"}, "type": "Grid", "id": "974c6f50-8589-4465-b447-65764499edd4"}, {"attributes": {"doc": null, "id": "0aee4919-ee2a-43f9-89bb-a18c41305dae", "tags": []}, "type": "BasicTickFormatter", "id": "0aee4919-ee2a-43f9-89bb-a18c41305dae"}, {"attributes": {"tags": [], "url": "http://www.colors.commutercreative.com/@color/", "doc": null, "id": "21b41583-e89c-4b28-8043-c81b5e2a91c2"}, "type": "OpenURL", "id": "21b41583-e89c-4b28-8043-c81b5e2a91c2"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "a9e48483-450f-4048-a1e9-903a56866bb8", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "a9e48483-450f-4048-a1e9-903a56866bb8"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("57c7abeb-1ce7-4340-85df-1e97421aaf9c", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("57c7abeb-1ce7-4340-85df-1e97421aaf9c", all_models);
    });
  }

}(this));