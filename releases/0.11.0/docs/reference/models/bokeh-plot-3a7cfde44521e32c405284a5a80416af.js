
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
  };var element = document.getElementById("f9a4172e-84f0-4e3d-a8c2-0e0807230746");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'f9a4172e-84f0-4e3d-a8c2-0e0807230746' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"423b887a-68bb-4ea0-8677-671a8f2ae6d5": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Asterisk", "id": "f6cef5f8-7c5a-4a9b-a681-327d401b3b01", "attributes": {"line_color": {"value": "#f0027f"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "sizes"}, "fill_color": {"value": null}}}, {"type": "BasicTicker", "id": "aaffef8b-bb47-44e4-9682-328f37687a6b", "attributes": {}}, {"type": "DataRange1d", "id": "b576257d-099a-4707-b348-c531342271b6", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "a992dceb-9e80-4c81-90e6-5af11fe20e6c", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "2b0cc974-0dfe-4434-b965-ea128399bd06"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Asterisk", "id": "f6cef5f8-7c5a-4a9b-a681-327d401b3b01"}}}, {"type": "LinearAxis", "id": "111fccbc-67a7-4bf8-9c03-3579cbf15d7c", "attributes": {"ticker": {"type": "BasicTicker", "id": "a90a40db-001e-41c0-b06d-46ec71f9cef1"}, "formatter": {"type": "BasicTickFormatter", "id": "6262913a-72f7-4392-a12e-9bd9ef975476"}, "plot": {"type": "Plot", "id": "595e83a2-3eed-4e42-a3ed-45057e3a120b"}}}, {"type": "ColumnDataSource", "id": "2b0cc974-0dfe-4434-b965-ea128399bd06", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "sizes", "y"], "callback": null}}, {"type": "BasicTicker", "id": "a90a40db-001e-41c0-b06d-46ec71f9cef1", "attributes": {}}, {"type": "LinearAxis", "id": "a59324ff-88ba-49db-920e-0f39fdca1ddd", "attributes": {"ticker": {"type": "BasicTicker", "id": "aaffef8b-bb47-44e4-9682-328f37687a6b"}, "formatter": {"type": "BasicTickFormatter", "id": "40432847-4101-4826-9c88-59e0c9676453"}, "plot": {"type": "Plot", "id": "595e83a2-3eed-4e42-a3ed-45057e3a120b"}}}, {"type": "BasicTickFormatter", "id": "40432847-4101-4826-9c88-59e0c9676453", "attributes": {}}, {"type": "DataRange1d", "id": "85b19b05-6ad4-492c-bdfb-ecc39ce75dd3", "attributes": {"callback": null}}, {"type": "ToolEvents", "id": "27954ef2-b10c-4254-83a1-89659a480d9b", "attributes": {}}, {"type": "Grid", "id": "50884f9b-56bd-4b21-8f92-1174fe41b4e4", "attributes": {"ticker": {"type": "BasicTicker", "id": "aaffef8b-bb47-44e4-9682-328f37687a6b"}, "dimension": 1, "plot": {"type": "Plot", "id": "595e83a2-3eed-4e42-a3ed-45057e3a120b"}}}, {"type": "BasicTickFormatter", "id": "6262913a-72f7-4392-a12e-9bd9ef975476", "attributes": {}}, {"type": "Plot", "id": "595e83a2-3eed-4e42-a3ed-45057e3a120b", "attributes": {"y_range": {"type": "DataRange1d", "id": "b576257d-099a-4707-b348-c531342271b6"}, "renderers": [{"type": "GlyphRenderer", "id": "a992dceb-9e80-4c81-90e6-5af11fe20e6c"}, {"type": "LinearAxis", "id": "111fccbc-67a7-4bf8-9c03-3579cbf15d7c"}, {"type": "LinearAxis", "id": "a59324ff-88ba-49db-920e-0f39fdca1ddd"}, {"type": "Grid", "id": "a1bb6032-fa44-420f-b3ce-c6019be5bf2d"}, {"type": "Grid", "id": "50884f9b-56bd-4b21-8f92-1174fe41b4e4"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "a59324ff-88ba-49db-920e-0f39fdca1ddd"}], "x_range": {"type": "DataRange1d", "id": "85b19b05-6ad4-492c-bdfb-ecc39ce75dd3"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "111fccbc-67a7-4bf8-9c03-3579cbf15d7c"}], "tool_events": {"type": "ToolEvents", "id": "27954ef2-b10c-4254-83a1-89659a480d9b"}, "toolbar_location": null}}, {"type": "Grid", "id": "a1bb6032-fa44-420f-b3ce-c6019be5bf2d", "attributes": {"ticker": {"type": "BasicTicker", "id": "a90a40db-001e-41c0-b06d-46ec71f9cef1"}, "plot": {"type": "Plot", "id": "595e83a2-3eed-4e42-a3ed-45057e3a120b"}}}], "root_ids": ["595e83a2-3eed-4e42-a3ed-45057e3a120b"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "423b887a-68bb-4ea0-8677-671a8f2ae6d5", "modelid": "595e83a2-3eed-4e42-a3ed-45057e3a120b", "elementid": "f9a4172e-84f0-4e3d-a8c2-0e0807230746"}];
          
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