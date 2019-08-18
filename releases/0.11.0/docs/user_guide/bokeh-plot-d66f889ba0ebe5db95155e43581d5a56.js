
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
  };var element = document.getElementById("de35eab5-39bc-4d46-ace4-7140b8db8914");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'de35eab5-39bc-4d46-ace4-7140b8db8914' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"97b23a31-1218-420e-8241-0e70bcfbf5e1": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ToolEvents", "id": "e8c7ea78-4d2b-4401-bb7e-0ae9958ee74c", "attributes": {}}, {"type": "Grid", "id": "36b885cd-2e2e-4aa5-81d8-f0e454dbd109", "attributes": {"ticker": {"type": "BasicTicker", "id": "f9e8c6b4-3386-42cd-863d-5ab281943c3a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c5876a34-3075-4d95-849b-51c3f2eda611"}}}, {"type": "DataRange1d", "id": "6f85bffd-d968-451d-9d97-1e2dfd13cf8d", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "d13e8df7-42f1-42fb-bee4-d960b4026d33", "attributes": {}}, {"type": "Circle", "id": "5dbbceda-ef3e-4e08-9fd2-e72a60203e20", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "BasicTickFormatter", "id": "53ed2478-e340-4a64-85b5-2494c16059b5", "attributes": {}}, {"type": "Circle", "id": "36008102-580b-485c-8055-9afde0b508b2", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "LinearAxis", "id": "c275bbee-d526-4a3f-8f84-5dd4f42a46e7", "attributes": {"ticker": {"type": "BasicTicker", "id": "d13e8df7-42f1-42fb-bee4-d960b4026d33"}, "formatter": {"type": "BasicTickFormatter", "id": "bb2d52c2-7a3b-496e-880f-699df6de8304"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c5876a34-3075-4d95-849b-51c3f2eda611"}}}, {"type": "DataRange1d", "id": "74813cb7-e048-49d4-b8dd-e854271ef5c5", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "f9e8c6b4-3386-42cd-863d-5ab281943c3a", "attributes": {}}, {"type": "LinearAxis", "id": "b3214641-8c27-4f4c-ba45-fbfb698ec0eb", "attributes": {"ticker": {"type": "BasicTicker", "id": "f9e8c6b4-3386-42cd-863d-5ab281943c3a"}, "formatter": {"type": "BasicTickFormatter", "id": "53ed2478-e340-4a64-85b5-2494c16059b5"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c5876a34-3075-4d95-849b-51c3f2eda611"}}}, {"type": "GlyphRenderer", "id": "9e011712-ad7d-45b0-87b0-8426088deff5", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "74f7607c-ffc9-4f4e-ae9f-2f23e5f4a760"}, "nonselection_glyph": {"type": "Circle", "id": "5dbbceda-ef3e-4e08-9fd2-e72a60203e20"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "36008102-580b-485c-8055-9afde0b508b2"}}}, {"type": "Grid", "id": "6105b422-4711-4cf1-9f4f-ddaeb9c55127", "attributes": {"ticker": {"type": "BasicTicker", "id": "d13e8df7-42f1-42fb-bee4-d960b4026d33"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "c5876a34-3075-4d95-849b-51c3f2eda611"}}}, {"type": "ColumnDataSource", "id": "74f7607c-ffc9-4f4e-ae9f-2f23e5f4a760", "attributes": {"data": {"desc": ["A", "b", "C", "d", "E"], "y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5], "imgs": ["http://bokeh.pydata.org/static/snake.jpg", "http://bokeh.pydata.org/static/snake2.png", "http://bokeh.pydata.org/static/snake3D.png", "http://bokeh.pydata.org/static/snake4_TheRevenge.png", "http://bokeh.pydata.org/static/snakebite.jpg"]}, "column_names": ["desc", "imgs", "x", "y"], "callback": null}}, {"type": "BasicTickFormatter", "id": "bb2d52c2-7a3b-496e-880f-699df6de8304", "attributes": {}}, {"type": "HoverTool", "id": "574b21ff-246c-41a3-a0b9-bf92899df261", "attributes": {"tooltips": "\n        <div>\n            <div>\n                <img\n                    src=\"@imgs\" height=\"42\" alt=\"@imgs\" width=\"42\"\n                    style=\"float: left; margin: 0px 15px 15px 0px;\"\n                    border=\"2\"\n                ></img>\n            </div>\n            <div>\n                <span style=\"font-size: 17px; font-weight: bold;\">@desc</span>\n                <span style=\"font-size: 15px; color: #966;\">[$index]</span>\n            </div>\n            <div>\n                <span style=\"font-size: 15px;\">Location</span>\n                <span style=\"font-size: 10px; color: #696;\">($x, $y)</span>\n            </div>\n        </div>\n        ", "callback": null, "plot": {"type": "Plot", "subtype": "Figure", "id": "c5876a34-3075-4d95-849b-51c3f2eda611"}}}, {"type": "Plot", "id": "c5876a34-3075-4d95-849b-51c3f2eda611", "attributes": {"tools": [{"type": "HoverTool", "id": "574b21ff-246c-41a3-a0b9-bf92899df261"}], "plot_width": 400, "x_range": {"type": "DataRange1d", "id": "74813cb7-e048-49d4-b8dd-e854271ef5c5"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "b3214641-8c27-4f4c-ba45-fbfb698ec0eb"}, {"type": "Grid", "id": "36b885cd-2e2e-4aa5-81d8-f0e454dbd109"}, {"type": "LinearAxis", "id": "c275bbee-d526-4a3f-8f84-5dd4f42a46e7"}, {"type": "Grid", "id": "6105b422-4711-4cf1-9f4f-ddaeb9c55127"}, {"type": "GlyphRenderer", "id": "9e011712-ad7d-45b0-87b0-8426088deff5"}], "y_range": {"type": "DataRange1d", "id": "6f85bffd-d968-451d-9d97-1e2dfd13cf8d"}, "left": [{"type": "LinearAxis", "id": "c275bbee-d526-4a3f-8f84-5dd4f42a46e7"}], "below": [{"type": "LinearAxis", "id": "b3214641-8c27-4f4c-ba45-fbfb698ec0eb"}], "tool_events": {"type": "ToolEvents", "id": "e8c7ea78-4d2b-4401-bb7e-0ae9958ee74c"}, "title": "Mouse over the dots"}, "subtype": "Figure"}], "root_ids": ["c5876a34-3075-4d95-849b-51c3f2eda611"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "97b23a31-1218-420e-8241-0e70bcfbf5e1", "modelid": "c5876a34-3075-4d95-849b-51c3f2eda611", "elementid": "de35eab5-39bc-4d46-ace4-7140b8db8914"}];
          
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