
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
  };var element = document.getElementById("9710571d-f304-4be1-930a-3063f2ed48ce");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '9710571d-f304-4be1-930a-3063f2ed48ce' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"8ae4841e-f36a-4841-9797-40b10e81cb1e": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "DataRange1d", "id": "9346e7a1-3206-4159-a4a2-ec78cb733420", "attributes": {"callback": null}}, {"type": "DiamondCross", "id": "6a4bc165-1ff3-42f1-9836-4b40a6120a44", "attributes": {"line_color": {"value": "#386cb0"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "sizes"}, "fill_color": {"value": null}}}, {"type": "Grid", "id": "394cb64c-7905-42d7-a980-cee6a60d63f7", "attributes": {"ticker": {"type": "BasicTicker", "id": "d9695a7a-e5f1-4478-97be-49a20bcca5dd"}, "plot": {"type": "Plot", "id": "2ff4c936-e6ee-4f9e-883e-aa8af3e1d06d"}}}, {"type": "GlyphRenderer", "id": "438bd763-f126-4248-9aa2-d953a5f098f3", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "6e592557-ca31-44c5-88e0-91f06bdbde8b"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "DiamondCross", "id": "6a4bc165-1ff3-42f1-9836-4b40a6120a44"}}}, {"type": "LinearAxis", "id": "0da0a1e0-9083-47cb-82b2-c9effaf5fe4b", "attributes": {"ticker": {"type": "BasicTicker", "id": "2b480274-bba3-4734-92da-70472754582b"}, "formatter": {"type": "BasicTickFormatter", "id": "09f2d5da-29bc-45a7-8f91-fb26b119ce09"}, "plot": {"type": "Plot", "id": "2ff4c936-e6ee-4f9e-883e-aa8af3e1d06d"}}}, {"type": "ToolEvents", "id": "23da7156-448a-48f3-a604-f109d176aa04", "attributes": {}}, {"type": "Plot", "id": "2ff4c936-e6ee-4f9e-883e-aa8af3e1d06d", "attributes": {"y_range": {"type": "DataRange1d", "id": "9346e7a1-3206-4159-a4a2-ec78cb733420"}, "renderers": [{"type": "GlyphRenderer", "id": "438bd763-f126-4248-9aa2-d953a5f098f3"}, {"type": "LinearAxis", "id": "c23f109b-2138-4c26-92f1-bf916a1a2303"}, {"type": "LinearAxis", "id": "0da0a1e0-9083-47cb-82b2-c9effaf5fe4b"}, {"type": "Grid", "id": "394cb64c-7905-42d7-a980-cee6a60d63f7"}, {"type": "Grid", "id": "202204ca-6ba5-43e1-886d-e599c636e37f"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "0da0a1e0-9083-47cb-82b2-c9effaf5fe4b"}], "x_range": {"type": "DataRange1d", "id": "710135d6-e874-4013-a181-d26995db31b9"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "c23f109b-2138-4c26-92f1-bf916a1a2303"}], "tool_events": {"type": "ToolEvents", "id": "23da7156-448a-48f3-a604-f109d176aa04"}, "toolbar_location": null}}, {"type": "ColumnDataSource", "id": "6e592557-ca31-44c5-88e0-91f06bdbde8b", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "sizes", "y"], "callback": null}}, {"type": "BasicTickFormatter", "id": "09f2d5da-29bc-45a7-8f91-fb26b119ce09", "attributes": {}}, {"type": "DataRange1d", "id": "710135d6-e874-4013-a181-d26995db31b9", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "d9695a7a-e5f1-4478-97be-49a20bcca5dd", "attributes": {}}, {"type": "BasicTicker", "id": "2b480274-bba3-4734-92da-70472754582b", "attributes": {}}, {"type": "LinearAxis", "id": "c23f109b-2138-4c26-92f1-bf916a1a2303", "attributes": {"ticker": {"type": "BasicTicker", "id": "d9695a7a-e5f1-4478-97be-49a20bcca5dd"}, "formatter": {"type": "BasicTickFormatter", "id": "d991d03d-7e4a-4069-82e6-74f786730a89"}, "plot": {"type": "Plot", "id": "2ff4c936-e6ee-4f9e-883e-aa8af3e1d06d"}}}, {"type": "Grid", "id": "202204ca-6ba5-43e1-886d-e599c636e37f", "attributes": {"ticker": {"type": "BasicTicker", "id": "2b480274-bba3-4734-92da-70472754582b"}, "dimension": 1, "plot": {"type": "Plot", "id": "2ff4c936-e6ee-4f9e-883e-aa8af3e1d06d"}}}, {"type": "BasicTickFormatter", "id": "d991d03d-7e4a-4069-82e6-74f786730a89", "attributes": {}}], "root_ids": ["2ff4c936-e6ee-4f9e-883e-aa8af3e1d06d"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "8ae4841e-f36a-4841-9797-40b10e81cb1e", "modelid": "2ff4c936-e6ee-4f9e-883e-aa8af3e1d06d", "elementid": "9710571d-f304-4be1-930a-3063f2ed48ce"}];
          
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