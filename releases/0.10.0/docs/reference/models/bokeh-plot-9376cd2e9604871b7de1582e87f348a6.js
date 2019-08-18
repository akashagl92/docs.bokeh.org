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

  var elt = document.getElementById("5530ed7c-64e9-4b26-bb88-93c3aa43cf22");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5530ed7c-64e9-4b26-bb88-93c3aa43cf22' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "5c3b3284-f733-4e1c-a466-a42571bd1aac"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "bd6ddc2a-aeca-476a-930c-471a88e0c731"}, "ticker": {"type": "BasicTicker", "id": "88df3e59-d197-424f-aecd-ed9679806ee5"}, "id": "f4040458-bb5a-4d81-903e-498c23ad6204"}, "type": "LinearAxis", "id": "f4040458-bb5a-4d81-903e-498c23ad6204"}, {"attributes": {"fill_color": {"value": "#B3DE69"}, "start_angle": {"units": "rad", "value": 0.6}, "doc": null, "tags": [], "end_angle": {"units": "rad", "value": 4.1}, "radius": {"units": "data", "field": "r"}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "c79b8ba7-284e-4732-b4ec-9f3bb1a4836a"}, "type": "Wedge", "id": "c79b8ba7-284e-4732-b4ec-9f3bb1a4836a"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "56b11b3e-29ac-4d22-b5ce-b26421446239"}, "tags": [], "doc": null, "selection_glyph": null, "id": "06dd4b36-551c-4701-9777-5a9100750730", "glyph": {"type": "Wedge", "id": "c79b8ba7-284e-4732-b4ec-9f3bb1a4836a"}}, "type": "GlyphRenderer", "id": "06dd4b36-551c-4701-9777-5a9100750730"}, {"attributes": {"plot": {"type": "Plot", "id": "5c3b3284-f733-4e1c-a466-a42571bd1aac"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "88df3e59-d197-424f-aecd-ed9679806ee5"}, "id": "3fcd6462-c751-40d7-ab5a-b4663e98a160"}, "type": "Grid", "id": "3fcd6462-c751-40d7-ab5a-b4663e98a160"}, {"attributes": {"plot": {"type": "Plot", "id": "5c3b3284-f733-4e1c-a466-a42571bd1aac"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "1850577f-1df7-4a04-a777-318085048b24"}, "ticker": {"type": "BasicTicker", "id": "0c0a76f8-595e-42e6-8851-f784663917b1"}, "id": "e19f29ca-237f-4494-9214-0c0215a38b52"}, "type": "LinearAxis", "id": "e19f29ca-237f-4494-9214-0c0215a38b52"}, {"attributes": {"plot": {"type": "Plot", "id": "5c3b3284-f733-4e1c-a466-a42571bd1aac"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "0c0a76f8-595e-42e6-8851-f784663917b1"}, "id": "24f61394-00d5-4860-94c1-68d85453b68d"}, "type": "Grid", "id": "24f61394-00d5-4860-94c1-68d85453b68d"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "3e9fe0a6-890f-4b1b-8e4d-e84934625145"}, "type": "DataRange1d", "id": "3e9fe0a6-890f-4b1b-8e4d-e84934625145"}, {"attributes": {"column_names": ["y", "x", "r"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "r": [0.16666666666666666, 0.19999999999999998, 0.23333333333333334, 0.26666666666666666, 0.3, 0.3333333333333333, 0.36666666666666664, 0.4, 0.43333333333333335]}, "id": "56b11b3e-29ac-4d22-b5ce-b26421446239"}, "type": "ColumnDataSource", "id": "56b11b3e-29ac-4d22-b5ce-b26421446239"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "3e9fe0a6-890f-4b1b-8e4d-e84934625145"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "06dd4b36-551c-4701-9777-5a9100750730"}, {"type": "LinearAxis", "id": "e19f29ca-237f-4494-9214-0c0215a38b52"}, {"type": "LinearAxis", "id": "f4040458-bb5a-4d81-903e-498c23ad6204"}, {"type": "Grid", "id": "24f61394-00d5-4860-94c1-68d85453b68d"}, {"type": "Grid", "id": "3fcd6462-c751-40d7-ab5a-b4663e98a160"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "404e1b5a-4975-424d-9a2f-6fe9e9f4afe4"}, "h_symmetry": false, "tools": [], "id": "5c3b3284-f733-4e1c-a466-a42571bd1aac", "title": null, "y_range": {"type": "DataRange1d", "id": "94be3822-f3be-4f98-bf98-44a1f72db639"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "e19f29ca-237f-4494-9214-0c0215a38b52"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "f4040458-bb5a-4d81-903e-498c23ad6204"}]}, "type": "Plot", "id": "5c3b3284-f733-4e1c-a466-a42571bd1aac"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "88df3e59-d197-424f-aecd-ed9679806ee5"}, "type": "BasicTicker", "id": "88df3e59-d197-424f-aecd-ed9679806ee5"}, {"attributes": {"doc": null, "id": "bd6ddc2a-aeca-476a-930c-471a88e0c731", "tags": []}, "type": "BasicTickFormatter", "id": "bd6ddc2a-aeca-476a-930c-471a88e0c731"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "0c0a76f8-595e-42e6-8851-f784663917b1"}, "type": "BasicTicker", "id": "0c0a76f8-595e-42e6-8851-f784663917b1"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "94be3822-f3be-4f98-bf98-44a1f72db639"}, "type": "DataRange1d", "id": "94be3822-f3be-4f98-bf98-44a1f72db639"}, {"attributes": {"doc": null, "id": "1850577f-1df7-4a04-a777-318085048b24", "tags": []}, "type": "BasicTickFormatter", "id": "1850577f-1df7-4a04-a777-318085048b24"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "404e1b5a-4975-424d-9a2f-6fe9e9f4afe4"}, "type": "ToolEvents", "id": "404e1b5a-4975-424d-9a2f-6fe9e9f4afe4"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("5530ed7c-64e9-4b26-bb88-93c3aa43cf22", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("5530ed7c-64e9-4b26-bb88-93c3aa43cf22", all_models);
    });
  }

}(this));