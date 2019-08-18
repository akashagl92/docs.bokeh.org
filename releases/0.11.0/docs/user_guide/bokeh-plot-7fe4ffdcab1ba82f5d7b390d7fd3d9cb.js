
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
  };var element = document.getElementById("cc66b427-a5d9-4b53-8b3f-a90b935cb31e");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'cc66b427-a5d9-4b53-8b3f-a90b935cb31e' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"c38bb547-6f0c-41d2-a4f7-3640c21cabb3": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTickFormatter", "id": "e23d2376-130f-4528-9cf2-87de828aa3ea", "attributes": {}}, {"type": "DataRange1d", "id": "4c1ae4f8-cb0b-4334-83e2-f25136f14900", "attributes": {"callback": null}}, {"type": "Line", "id": "2304119b-4813-4801-94b6-a2e353fb2fb6", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "y": {"field": "y"}}}, {"type": "BasicTicker", "id": "1afb47ba-1a0b-43a8-b59c-d2be0447d236", "attributes": {}}, {"type": "Grid", "id": "1247adfa-7041-4502-9213-1f5cba4ec94f", "attributes": {"ticker": {"type": "BasicTicker", "id": "2f8f34e0-7d3a-4a25-b1fe-e332209001e0"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "42e7c042-29d2-4abb-95f5-f65a1861ffae"}}}, {"type": "ResetTool", "id": "9b12be42-e35b-454c-a366-9b09d0caba02", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "42e7c042-29d2-4abb-95f5-f65a1861ffae"}}}, {"type": "HelpTool", "id": "e3595d8e-8ca4-420e-b7df-cfc6d5d0d915", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "42e7c042-29d2-4abb-95f5-f65a1861ffae"}}}, {"type": "ResizeTool", "id": "1f559cb6-46e9-4d27-ab18-a05964fa7afb", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "42e7c042-29d2-4abb-95f5-f65a1861ffae"}}}, {"type": "BasicTicker", "id": "2f8f34e0-7d3a-4a25-b1fe-e332209001e0", "attributes": {}}, {"type": "LinearAxis", "id": "c6c0abac-598f-4a54-a8fa-8da38426ccc9", "attributes": {"ticker": {"type": "BasicTicker", "id": "1afb47ba-1a0b-43a8-b59c-d2be0447d236"}, "formatter": {"type": "BasicTickFormatter", "id": "cf6185f1-1416-4f42-a134-4e26f4f4b536"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "42e7c042-29d2-4abb-95f5-f65a1861ffae"}}}, {"type": "DataRange1d", "id": "b1ad72da-a7f7-4738-ae40-3f6701d4088b", "attributes": {"callback": null}}, {"type": "Grid", "id": "21587955-29f4-4bbf-bede-78b4a0ee162d", "attributes": {"ticker": {"type": "BasicTicker", "id": "1afb47ba-1a0b-43a8-b59c-d2be0447d236"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "42e7c042-29d2-4abb-95f5-f65a1861ffae"}}}, {"type": "ToolEvents", "id": "5317b056-2a05-414b-8238-a245bb06ea12", "attributes": {}}, {"type": "PanTool", "id": "33f19068-975f-4ded-95d5-942ebaf5db4c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "42e7c042-29d2-4abb-95f5-f65a1861ffae"}}}, {"type": "GlyphRenderer", "id": "acf352d2-e4fc-4d97-8957-141e5998d47d", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "207c8df5-1408-4e52-8e15-e59f70b21c38"}, "nonselection_glyph": {"type": "Line", "id": "2304119b-4813-4801-94b6-a2e353fb2fb6"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "254982b5-e15b-4e46-aead-463fa47b13af"}}}, {"type": "BoxZoomTool", "id": "64503ef2-4112-469c-89bb-b5d690307cdf", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "c1e69c13-875f-4a9a-81c0-d0175f8b7d55"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "42e7c042-29d2-4abb-95f5-f65a1861ffae"}}}, {"type": "Plot", "id": "42e7c042-29d2-4abb-95f5-f65a1861ffae", "attributes": {"tools": [{"type": "PanTool", "id": "33f19068-975f-4ded-95d5-942ebaf5db4c"}, {"type": "WheelZoomTool", "id": "d5a848d9-0ee4-4627-95a6-3964dd41f355"}, {"type": "BoxZoomTool", "id": "64503ef2-4112-469c-89bb-b5d690307cdf"}, {"type": "PreviewSaveTool", "id": "07d1b530-d5b1-416c-9432-1293419df169"}, {"type": "ResizeTool", "id": "1f559cb6-46e9-4d27-ab18-a05964fa7afb"}, {"type": "ResetTool", "id": "9b12be42-e35b-454c-a366-9b09d0caba02"}, {"type": "HelpTool", "id": "e3595d8e-8ca4-420e-b7df-cfc6d5d0d915"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "b1ad72da-a7f7-4738-ae40-3f6701d4088b"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "3dfbcdff-4715-4295-ba85-938466b93410"}, {"type": "Grid", "id": "1247adfa-7041-4502-9213-1f5cba4ec94f"}, {"type": "LinearAxis", "id": "c6c0abac-598f-4a54-a8fa-8da38426ccc9"}, {"type": "Grid", "id": "21587955-29f4-4bbf-bede-78b4a0ee162d"}, {"type": "BoxAnnotation", "id": "c1e69c13-875f-4a9a-81c0-d0175f8b7d55"}, {"type": "GlyphRenderer", "id": "acf352d2-e4fc-4d97-8957-141e5998d47d"}], "left": [{"type": "LinearAxis", "id": "c6c0abac-598f-4a54-a8fa-8da38426ccc9"}], "below": [{"type": "LinearAxis", "id": "3dfbcdff-4715-4295-ba85-938466b93410"}], "tool_events": {"type": "ToolEvents", "id": "5317b056-2a05-414b-8238-a245bb06ea12"}, "x_range": {"type": "DataRange1d", "id": "4c1ae4f8-cb0b-4334-83e2-f25136f14900"}}, "subtype": "Figure"}, {"type": "Line", "id": "254982b5-e15b-4e46-aead-463fa47b13af", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "x": {"field": "x"}, "y": {"field": "y"}}}, {"type": "ColumnDataSource", "id": "207c8df5-1408-4e52-8e15-e59f70b21c38", "attributes": {"data": {"x": [1.0, 2.0, 3.0, "NaN", 4.0, 5.0], "y": [6, 7, 2, 4, 4, 5]}, "column_names": ["x", "y"], "callback": null}}, {"type": "BoxAnnotation", "id": "c1e69c13-875f-4a9a-81c0-d0175f8b7d55", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "LinearAxis", "id": "3dfbcdff-4715-4295-ba85-938466b93410", "attributes": {"ticker": {"type": "BasicTicker", "id": "2f8f34e0-7d3a-4a25-b1fe-e332209001e0"}, "formatter": {"type": "BasicTickFormatter", "id": "e23d2376-130f-4528-9cf2-87de828aa3ea"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "42e7c042-29d2-4abb-95f5-f65a1861ffae"}}}, {"type": "WheelZoomTool", "id": "d5a848d9-0ee4-4627-95a6-3964dd41f355", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "42e7c042-29d2-4abb-95f5-f65a1861ffae"}}}, {"type": "PreviewSaveTool", "id": "07d1b530-d5b1-416c-9432-1293419df169", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "42e7c042-29d2-4abb-95f5-f65a1861ffae"}}}, {"type": "BasicTickFormatter", "id": "cf6185f1-1416-4f42-a134-4e26f4f4b536", "attributes": {}}], "root_ids": ["42e7c042-29d2-4abb-95f5-f65a1861ffae"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "c38bb547-6f0c-41d2-a4f7-3640c21cabb3", "modelid": "42e7c042-29d2-4abb-95f5-f65a1861ffae", "elementid": "cc66b427-a5d9-4b53-8b3f-a90b935cb31e"}];
          
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