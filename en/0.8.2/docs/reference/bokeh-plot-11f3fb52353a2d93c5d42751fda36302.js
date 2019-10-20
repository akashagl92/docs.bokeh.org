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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.js"

  var elt = document.getElementById("14b973e5-4740-40a0-87b7-4af09b8647f2");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '14b973e5-4740-40a0-87b7-4af09b8647f2' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "2874d730-a8ba-4f37-bfdf-b911e936c32f", "type": "BasicTicker", "attributes": {"id": "2874d730-a8ba-4f37-bfdf-b911e936c32f", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "8c7b8a8b-1aa2-424f-89e5-a02784029a98", "type": "LinearAxis", "attributes": {"id": "8c7b8a8b-1aa2-424f-89e5-a02784029a98", "formatter": {"id": "df83e12e-5a02-497d-ba42-8c4770b396b0", "type": "BasicTickFormatter"}, "plot": {"id": "13e4d603-7250-46c8-9859-f574a936ab1d", "type": "Plot"}, "ticker": {"id": "5b23fc87-b27b-482d-80f3-9abc2621e9a4", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "df83e12e-5a02-497d-ba42-8c4770b396b0", "type": "BasicTickFormatter", "attributes": {"id": "df83e12e-5a02-497d-ba42-8c4770b396b0", "doc": null, "tags": []}}, {"id": "18437f9b-c1ba-4d51-8684-44cd5e382a41", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "92b390f2-fbc7-4c22-864a-a492938b157f", "type": "ColumnDataSource"}, "id": "18437f9b-c1ba-4d51-8684-44cd5e382a41", "glyph": {"id": "4eccb93e-ff36-4689-86c6-8d4dd5ec69f5", "type": "X"}, "tags": [], "doc": null}}, {"id": "4eccb93e-ff36-4689-86c6-8d4dd5ec69f5", "type": "X", "attributes": {"line_width": {"value": 2, "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "4eccb93e-ff36-4689-86c6-8d4dd5ec69f5", "fill_color": null, "line_color": {"value": "#fdae6b"}, "x": {"field": "x", "units": "data"}, "doc": null, "tags": [], "size": {"field": "sizes", "units": "screen"}}}, {"id": "f02e263c-4cbb-4828-8109-7f483a4b4259", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "92b390f2-fbc7-4c22-864a-a492938b157f", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "f02e263c-4cbb-4828-8109-7f483a4b4259", "doc": null, "tags": []}}, {"id": "442d7c3c-9abb-4dbe-9de1-cb1e2ee8aef0", "type": "LinearAxis", "attributes": {"id": "442d7c3c-9abb-4dbe-9de1-cb1e2ee8aef0", "formatter": {"id": "44bfe888-da00-4fc1-adf2-0b805d624b7b", "type": "BasicTickFormatter"}, "plot": {"id": "13e4d603-7250-46c8-9859-f574a936ab1d", "type": "Plot"}, "ticker": {"id": "2874d730-a8ba-4f37-bfdf-b911e936c32f", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "376f06d1-5fca-4111-970d-32874260e818", "type": "ToolEvents", "attributes": {"geometries": [], "id": "376f06d1-5fca-4111-970d-32874260e818", "doc": null, "tags": []}}, {"id": "44bfe888-da00-4fc1-adf2-0b805d624b7b", "type": "BasicTickFormatter", "attributes": {"id": "44bfe888-da00-4fc1-adf2-0b805d624b7b", "doc": null, "tags": []}}, {"id": "5b23fc87-b27b-482d-80f3-9abc2621e9a4", "type": "BasicTicker", "attributes": {"id": "5b23fc87-b27b-482d-80f3-9abc2621e9a4", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "13e4d603-7250-46c8-9859-f574a936ab1d", "type": "Plot", "attributes": {"tool_events": {"id": "376f06d1-5fca-4111-970d-32874260e818", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "18437f9b-c1ba-4d51-8684-44cd5e382a41", "type": "GlyphRenderer"}, {"id": "442d7c3c-9abb-4dbe-9de1-cb1e2ee8aef0", "type": "LinearAxis"}, {"id": "8c7b8a8b-1aa2-424f-89e5-a02784029a98", "type": "LinearAxis"}, {"id": "76ebad54-5745-4559-963a-5b953962df4f", "type": "Grid"}, {"id": "b0adc57e-eca0-4455-9ba0-1d7334066b1a", "type": "Grid"}], "left": [{"id": "8c7b8a8b-1aa2-424f-89e5-a02784029a98", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "f02e263c-4cbb-4828-8109-7f483a4b4259", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "13e4d603-7250-46c8-9859-f574a936ab1d", "y_range": {"id": "00ce1c05-e635-47c5-93e6-0213c9f4ef38", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "442d7c3c-9abb-4dbe-9de1-cb1e2ee8aef0", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "76ebad54-5745-4559-963a-5b953962df4f", "type": "Grid", "attributes": {"id": "76ebad54-5745-4559-963a-5b953962df4f", "plot": {"id": "13e4d603-7250-46c8-9859-f574a936ab1d", "type": "Plot"}, "dimension": 0, "ticker": {"id": "2874d730-a8ba-4f37-bfdf-b911e936c32f", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "b0adc57e-eca0-4455-9ba0-1d7334066b1a", "type": "Grid", "attributes": {"id": "b0adc57e-eca0-4455-9ba0-1d7334066b1a", "plot": {"id": "13e4d603-7250-46c8-9859-f574a936ab1d", "type": "Plot"}, "dimension": 1, "ticker": {"id": "5b23fc87-b27b-482d-80f3-9abc2621e9a4", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "92b390f2-fbc7-4c22-864a-a492938b157f", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["sizes", "y", "x"], "id": "92b390f2-fbc7-4c22-864a-a492938b157f", "doc": null, "tags": []}}, {"id": "00ce1c05-e635-47c5-93e6-0213c9f4ef38", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "92b390f2-fbc7-4c22-864a-a492938b157f", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "00ce1c05-e635-47c5-93e6-0213c9f4ef38", "doc": null, "tags": []}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("14b973e5-4740-40a0-87b7-4af09b8647f2", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("14b973e5-4740-40a0-87b7-4af09b8647f2", all_models);
    });
  }

}(this));