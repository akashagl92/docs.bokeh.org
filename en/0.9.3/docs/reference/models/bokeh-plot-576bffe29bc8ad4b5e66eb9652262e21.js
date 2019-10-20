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

  var elt = document.getElementById("cc180b60-1e2d-4118-81d7-a0b84a1d6381");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'cc180b60-1e2d-4118-81d7-a0b84a1d6381' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "8f816384-32d0-49f2-acff-9e29f566cd44"}, "tags": [], "glyph": {"type": "InvertedTriangle", "id": "b50a70d2-8560-4cf5-9760-e97d744269f9"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "651a60d4-5c58-4608-96b0-265e3b0fa746"}, "id": "651a60d4-5c58-4608-96b0-265e3b0fa746"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "4d4b169f-4bc7-4eda-baf5-cf677e2ffca2", "tags": [], "geometries": []}, "id": "4d4b169f-4bc7-4eda-baf5-cf677e2ffca2"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "b431e5cd-ea29-4cbb-874f-cfc1fe0e189b", "tags": []}, "id": "b431e5cd-ea29-4cbb-874f-cfc1fe0e189b"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "3ce63468-869e-4991-b810-a7b48ac5622b", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "3ce63468-869e-4991-b810-a7b48ac5622b"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "9d45e7dc-a0b1-40bb-a0d9-8fadfe7eeaab"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "4f73073b-5fe5-4364-9a84-a5e35ce529ca"}, "dimension": 1, "id": "91edfe2e-6bbb-438e-8461-065b0dedc8fb"}, "id": "91edfe2e-6bbb-438e-8461-065b0dedc8fb"}, {"type": "InvertedTriangle", "attributes": {"y": {"field": "y"}, "fill_color": null, "size": {"units": "screen", "field": "sizes"}, "line_width": {"value": 2}, "line_color": {"value": "#de2d26"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "b50a70d2-8560-4cf5-9760-e97d744269f9"}, "id": "b50a70d2-8560-4cf5-9760-e97d744269f9"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "107d1321-3e99-4e5c-8144-2d62d23b02d4"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "b431e5cd-ea29-4cbb-874f-cfc1fe0e189b"}, "plot": {"type": "Plot", "id": "4f73073b-5fe5-4364-9a84-a5e35ce529ca"}, "id": "435ef5f2-f752-46ec-8827-054d5fe77846"}, "id": "435ef5f2-f752-46ec-8827-054d5fe77846"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "518cd2d7-6560-47fc-ac22-95a1a6e2bd63", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "518cd2d7-6560-47fc-ac22-95a1a6e2bd63"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "9d45e7dc-a0b1-40bb-a0d9-8fadfe7eeaab", "tags": []}, "id": "9d45e7dc-a0b1-40bb-a0d9-8fadfe7eeaab"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "doc": null, "id": "8f816384-32d0-49f2-acff-9e29f566cd44", "column_names": ["y", "x", "sizes"]}, "id": "8f816384-32d0-49f2-acff-9e29f566cd44"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "1a2d034b-e0e8-4367-ba4b-4630aa1a4d0f", "tags": []}, "id": "1a2d034b-e0e8-4367-ba4b-4630aa1a4d0f"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "a37aef53-dfe7-4741-bc06-5552f219e725"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "3ce63468-869e-4991-b810-a7b48ac5622b"}, "id": "4f73073b-5fe5-4364-9a84-a5e35ce529ca", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "518cd2d7-6560-47fc-ac22-95a1a6e2bd63"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "4d4b169f-4bc7-4eda-baf5-cf677e2ffca2"}, "renderers": [{"type": "GlyphRenderer", "id": "651a60d4-5c58-4608-96b0-265e3b0fa746"}, {"type": "LinearAxis", "id": "435ef5f2-f752-46ec-8827-054d5fe77846"}, {"type": "LinearAxis", "id": "a37aef53-dfe7-4741-bc06-5552f219e725"}, {"type": "Grid", "id": "ff117796-61b9-4fd2-8b62-9225893b7cbb"}, {"type": "Grid", "id": "91edfe2e-6bbb-438e-8461-065b0dedc8fb"}], "below": [{"type": "LinearAxis", "id": "435ef5f2-f752-46ec-8827-054d5fe77846"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "4f73073b-5fe5-4364-9a84-a5e35ce529ca"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "9d45e7dc-a0b1-40bb-a0d9-8fadfe7eeaab"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "1a2d034b-e0e8-4367-ba4b-4630aa1a4d0f"}, "plot": {"type": "Plot", "id": "4f73073b-5fe5-4364-9a84-a5e35ce529ca"}, "id": "a37aef53-dfe7-4741-bc06-5552f219e725"}, "id": "a37aef53-dfe7-4741-bc06-5552f219e725"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "107d1321-3e99-4e5c-8144-2d62d23b02d4"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "4f73073b-5fe5-4364-9a84-a5e35ce529ca"}, "dimension": 0, "id": "ff117796-61b9-4fd2-8b62-9225893b7cbb"}, "id": "ff117796-61b9-4fd2-8b62-9225893b7cbb"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "107d1321-3e99-4e5c-8144-2d62d23b02d4", "tags": []}, "id": "107d1321-3e99-4e5c-8144-2d62d23b02d4"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("cc180b60-1e2d-4118-81d7-a0b84a1d6381", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("cc180b60-1e2d-4118-81d7-a0b84a1d6381", all_models);
    });
  }

}(this));