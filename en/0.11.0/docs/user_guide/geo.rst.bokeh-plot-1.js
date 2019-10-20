
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
  }

  function run_callbacks() {
    window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
    delete window._bokeh_onload_callbacks
    console.info("Bokeh: all callbacks have finished");
  }

  function load_libs(js_urls, callback) {
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading > 0) {
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
      return null;
    }
    if (js_urls == null || js_urls.length === 0) {
      run_callbacks();
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
    window._bokeh_is_loading = js_urls.length;
    for (var i = 0; i < js_urls.length; i++) {
      var url = js_urls[i];
      var s = document.createElement('script');
      s.src = url;
      s.async = false;
      s.onreadystatechange = s.onload = function() {
        window._bokeh_is_loading--;
        if (window._bokeh_is_loading === 0) {
          console.log("Bokeh: all BokehJS libraries loaded");
          run_callbacks()
        }
      };
      s.onerror = function() {
        console.warn("failed to load library " + url);
      };
      console.log("Bokeh: injecting script tag for BokehJS library: ", url);
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };var element = document.getElementById("c917d019-02e6-4d83-bdf8-74d794d31f01");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c917d019-02e6-4d83-bdf8-74d794d31f01' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"03339ae0-f161-4468-b772-5bbb91867574": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BoxSelectTool", "id": "f36dd116-3991-4612-9cca-00e1b6369aaa", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "2c7aef1a-5892-4619-960c-ddc75d6b419f"}, "callback": null, "plot": {"type": "GMapPlot", "id": "2b122559-bfeb-46a9-8851-7554cea531a5"}}}, {"type": "WheelZoomTool", "id": "abd9b983-cf4d-4048-b48d-f31db77d02ff", "attributes": {"plot": {"type": "GMapPlot", "id": "2b122559-bfeb-46a9-8851-7554cea531a5"}}}, {"type": "DataRange1d", "id": "5f98d2a2-bc4f-4363-8970-dda9f7b12cec", "attributes": {"callback": null}}, {"type": "PanTool", "id": "b4bf8e22-839c-4a02-bf18-0f690450b2e0", "attributes": {"plot": {"type": "GMapPlot", "id": "2b122559-bfeb-46a9-8851-7554cea531a5"}}}, {"type": "DataRange1d", "id": "de9d6bb5-56bc-43fe-90e2-910b2f274d31", "attributes": {"callback": null}}, {"type": "Circle", "id": "26c79bbf-5caf-4cf7-aeee-c2e18354548d", "attributes": {"line_color": {"value": null}, "y": {"field": "lat"}, "x": {"field": "lon"}, "size": {"value": 15, "units": "screen"}, "fill_color": {"value": "blue"}, "fill_alpha": {"value": 0.8}}}, {"type": "ToolEvents", "id": "857b6178-7f5d-4e3c-b083-5a7010991ac1", "attributes": {}}, {"type": "GlyphRenderer", "id": "000546db-b406-4356-b1a0-9176f5ba723f", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "053941e9-4b7a-4f24-a2c1-fc87157a0243"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "26c79bbf-5caf-4cf7-aeee-c2e18354548d"}}}, {"type": "ColumnDataSource", "id": "053941e9-4b7a-4f24-a2c1-fc87157a0243", "attributes": {"data": {"lon": [-97.7, -97.74, -97.78], "lat": [30.29, 30.2, 30.29]}, "column_names": ["lon", "lat"], "callback": null}}, {"type": "GMapPlot", "id": "2b122559-bfeb-46a9-8851-7554cea531a5", "attributes": {"x_range": {"type": "DataRange1d", "id": "5f98d2a2-bc4f-4363-8970-dda9f7b12cec"}, "renderers": [{"type": "GlyphRenderer", "id": "000546db-b406-4356-b1a0-9176f5ba723f"}, {"type": "BoxAnnotation", "id": "2c7aef1a-5892-4619-960c-ddc75d6b419f"}], "y_range": {"type": "DataRange1d", "id": "de9d6bb5-56bc-43fe-90e2-910b2f274d31"}, "tool_events": {"type": "ToolEvents", "id": "857b6178-7f5d-4e3c-b083-5a7010991ac1"}, "map_options": {"zoom": 11, "map_type": "roadmap", "lat": 30.29, "lng": -97.73}, "tools": [{"type": "PanTool", "id": "b4bf8e22-839c-4a02-bf18-0f690450b2e0"}, {"type": "WheelZoomTool", "id": "abd9b983-cf4d-4048-b48d-f31db77d02ff"}, {"type": "BoxSelectTool", "id": "f36dd116-3991-4612-9cca-00e1b6369aaa"}], "title": "Austin"}}, {"type": "BoxAnnotation", "id": "2c7aef1a-5892-4619-960c-ddc75d6b419f", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}], "root_ids": ["2b122559-bfeb-46a9-8851-7554cea531a5"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "03339ae0-f161-4468-b772-5bbb91867574", "modelid": "2b122559-bfeb-46a9-8851-7554cea531a5", "elementid": "c917d019-02e6-4d83-bdf8-74d794d31f01"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
    }
  ];

  function run_inline_js() {
    for (var i = 0; i < inline_js.length; i++) {
      inline_js[i](window.Bokeh);
    }
  }

  if (window._bokeh_is_loading === 0) {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    run_inline_js();
  } else {
    load_libs(js_urls, function() {
      console.log("Bokeh: BokehJS plotting callback run at", now());
      run_inline_js();
    });
  }
}(this));