
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
  };var element = document.getElementById("f6aaa043-43a4-41a0-a52e-ff2b5f3ce120");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f6aaa043-43a4-41a0-a52e-ff2b5f3ce120' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"62d847e9-6967-4ece-9c50-7d6164ce69b6": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "DataRange1d", "id": "1c277ffc-97df-470f-9878-1c2c53efa33f", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "b66fa8ad-962f-4d71-831b-f077ab15b4a7", "attributes": {}}, {"type": "LinearAxis", "id": "e2433f2c-42df-4d49-b927-aa8db8643f47", "attributes": {"ticker": {"type": "BasicTicker", "id": "d79421ef-5dc6-4843-a453-4e6defa6f679"}, "formatter": {"type": "BasicTickFormatter", "id": "6273e5b0-2bad-4d87-abaf-9a30f3c14175"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1f5b9163-b713-4a6c-a235-eb4479897c74"}}}, {"type": "BasicTicker", "id": "1f6f8dec-e94e-43ca-b32e-ce040efd8591", "attributes": {}}, {"type": "GlyphRenderer", "id": "e6cd001f-af8e-4f5c-972a-bd630d81aeaf", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "87b23e26-840c-41ca-81e3-993540e218e8"}, "nonselection_glyph": {"type": "Circle", "id": "1f1b1a88-4dc9-48a7-8dd1-d0766bbc92a2"}, "selection_glyph": {"type": "Circle", "id": "cc44516a-8689-4860-8c91-5431f361778d"}, "hover_glyph": null, "glyph": {"type": "Circle", "id": "0bc1c806-8930-4b54-b7f9-edd9fde62f8e"}}}, {"type": "Circle", "id": "cc44516a-8689-4860-8c91-5431f361778d", "attributes": {"line_color": {"value": null}, "fill_color": {"value": "firebrick"}}}, {"type": "Circle", "id": "1f1b1a88-4dc9-48a7-8dd1-d0766bbc92a2", "attributes": {"line_color": {"value": "firebrick"}, "fill_color": {"value": "blue"}, "fill_alpha": {"value": 0.2}}}, {"type": "LinearAxis", "id": "20c1e4fd-6af6-4062-b7cd-19e55f1a2097", "attributes": {"ticker": {"type": "BasicTicker", "id": "1f6f8dec-e94e-43ca-b32e-ce040efd8591"}, "formatter": {"type": "BasicTickFormatter", "id": "b66fa8ad-962f-4d71-831b-f077ab15b4a7"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1f5b9163-b713-4a6c-a235-eb4479897c74"}}}, {"type": "ColumnDataSource", "id": "87b23e26-840c-41ca-81e3-993540e218e8", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "TapTool", "id": "bab9b4d9-c021-42b9-ac36-66ea1b4d9bd8", "attributes": {"callback": null, "plot": {"type": "Plot", "subtype": "Figure", "id": "1f5b9163-b713-4a6c-a235-eb4479897c74"}}}, {"type": "BasicTicker", "id": "d79421ef-5dc6-4843-a453-4e6defa6f679", "attributes": {}}, {"type": "Grid", "id": "f035fe9d-e626-44c4-b442-629e27613225", "attributes": {"ticker": {"type": "BasicTicker", "id": "1f6f8dec-e94e-43ca-b32e-ce040efd8591"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1f5b9163-b713-4a6c-a235-eb4479897c74"}}}, {"type": "BasicTickFormatter", "id": "6273e5b0-2bad-4d87-abaf-9a30f3c14175", "attributes": {}}, {"type": "ToolEvents", "id": "22973e4e-28fd-404f-8f07-aa9e26c41b3c", "attributes": {}}, {"type": "Grid", "id": "2f46c8ac-a111-4cb5-91e8-a49e0c933786", "attributes": {"ticker": {"type": "BasicTicker", "id": "d79421ef-5dc6-4843-a453-4e6defa6f679"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "1f5b9163-b713-4a6c-a235-eb4479897c74"}}}, {"type": "Plot", "id": "1f5b9163-b713-4a6c-a235-eb4479897c74", "attributes": {"tools": [{"type": "TapTool", "id": "bab9b4d9-c021-42b9-ac36-66ea1b4d9bd8"}], "plot_width": 400, "x_range": {"type": "DataRange1d", "id": "1c277ffc-97df-470f-9878-1c2c53efa33f"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "20c1e4fd-6af6-4062-b7cd-19e55f1a2097"}, {"type": "Grid", "id": "f035fe9d-e626-44c4-b442-629e27613225"}, {"type": "LinearAxis", "id": "e2433f2c-42df-4d49-b927-aa8db8643f47"}, {"type": "Grid", "id": "2f46c8ac-a111-4cb5-91e8-a49e0c933786"}, {"type": "GlyphRenderer", "id": "e6cd001f-af8e-4f5c-972a-bd630d81aeaf"}], "y_range": {"type": "DataRange1d", "id": "8400c41a-2448-4c36-92cb-78c3666bf31b"}, "left": [{"type": "LinearAxis", "id": "e2433f2c-42df-4d49-b927-aa8db8643f47"}], "below": [{"type": "LinearAxis", "id": "20c1e4fd-6af6-4062-b7cd-19e55f1a2097"}], "tool_events": {"type": "ToolEvents", "id": "22973e4e-28fd-404f-8f07-aa9e26c41b3c"}, "title": "Select a circle"}, "subtype": "Figure"}, {"type": "Circle", "id": "0bc1c806-8930-4b54-b7f9-edd9fde62f8e", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 50, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "DataRange1d", "id": "8400c41a-2448-4c36-92cb-78c3666bf31b", "attributes": {"callback": null}}], "root_ids": ["1f5b9163-b713-4a6c-a235-eb4479897c74"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "62d847e9-6967-4ece-9c50-7d6164ce69b6", "modelid": "1f5b9163-b713-4a6c-a235-eb4479897c74", "elementid": "f6aaa043-43a4-41a0-a52e-ff2b5f3ce120"}];
          
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