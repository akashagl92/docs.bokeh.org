
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
  };var element = document.getElementById("905f9333-76d3-48b7-8bce-c950a4697662");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '905f9333-76d3-48b7-8bce-c950a4697662' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"cb87cbe0-7c8d-4230-b7b0-f373501b6c12": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "1bb8434b-ecc1-4057-b186-6b2860a88d23", "attributes": {"ticker": {"type": "BasicTicker", "id": "206d92e3-6b27-42bf-8650-a00664d9858f"}, "formatter": {"type": "BasicTickFormatter", "id": "7c3647ff-48e5-47dc-9e0d-aa76a0ea0ea9"}, "plot": {"type": "Plot", "id": "3d197a77-f2e2-4daa-bc41-c99f6b67c706"}}}, {"type": "Grid", "id": "8a82192a-e840-46f5-be80-1eb588ff18a7", "attributes": {"ticker": {"type": "BasicTicker", "id": "206d92e3-6b27-42bf-8650-a00664d9858f"}, "dimension": 1, "plot": {"type": "Plot", "id": "3d197a77-f2e2-4daa-bc41-c99f6b67c706"}}}, {"type": "ToolEvents", "id": "c07c63d2-449c-4ecb-8fa3-2c2bd7cc5c7b", "attributes": {}}, {"type": "GlyphRenderer", "id": "7f836c3c-0748-4813-a18e-812ff7920e59", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "bee0f39c-d650-488c-bf27-f7b9d4d481d2"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "SquareX", "id": "092dffce-ad08-45e7-bbc8-3b11fed304f4"}}}, {"type": "LinearAxis", "id": "677467cd-4f32-475f-8e38-a18ddb860463", "attributes": {"ticker": {"type": "BasicTicker", "id": "dae013a7-9dca-4108-b05a-4a31b721edea"}, "formatter": {"type": "BasicTickFormatter", "id": "314cbfbb-c1f1-4f90-bcdd-fa8028dff004"}, "plot": {"type": "Plot", "id": "3d197a77-f2e2-4daa-bc41-c99f6b67c706"}}}, {"type": "BasicTickFormatter", "id": "314cbfbb-c1f1-4f90-bcdd-fa8028dff004", "attributes": {}}, {"type": "ColumnDataSource", "id": "bee0f39c-d650-488c-bf27-f7b9d4d481d2", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "sizes", "y"], "callback": null}}, {"type": "SquareX", "id": "092dffce-ad08-45e7-bbc8-3b11fed304f4", "attributes": {"line_color": {"value": "#fdae6b"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "sizes"}, "fill_color": {"value": null}}}, {"type": "Plot", "id": "3d197a77-f2e2-4daa-bc41-c99f6b67c706", "attributes": {"y_range": {"type": "DataRange1d", "id": "b2bf807e-7893-4cee-99aa-c9d9eab5d31d"}, "renderers": [{"type": "GlyphRenderer", "id": "7f836c3c-0748-4813-a18e-812ff7920e59"}, {"type": "LinearAxis", "id": "677467cd-4f32-475f-8e38-a18ddb860463"}, {"type": "LinearAxis", "id": "1bb8434b-ecc1-4057-b186-6b2860a88d23"}, {"type": "Grid", "id": "08141fda-5a74-429c-81d6-c8593d032b95"}, {"type": "Grid", "id": "8a82192a-e840-46f5-be80-1eb588ff18a7"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "1bb8434b-ecc1-4057-b186-6b2860a88d23"}], "x_range": {"type": "DataRange1d", "id": "8b7e626d-64d8-4bb8-bb19-1ca0945962f7"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "677467cd-4f32-475f-8e38-a18ddb860463"}], "tool_events": {"type": "ToolEvents", "id": "c07c63d2-449c-4ecb-8fa3-2c2bd7cc5c7b"}, "toolbar_location": null}}, {"type": "Grid", "id": "08141fda-5a74-429c-81d6-c8593d032b95", "attributes": {"ticker": {"type": "BasicTicker", "id": "dae013a7-9dca-4108-b05a-4a31b721edea"}, "plot": {"type": "Plot", "id": "3d197a77-f2e2-4daa-bc41-c99f6b67c706"}}}, {"type": "DataRange1d", "id": "b2bf807e-7893-4cee-99aa-c9d9eab5d31d", "attributes": {"callback": null}}, {"type": "DataRange1d", "id": "8b7e626d-64d8-4bb8-bb19-1ca0945962f7", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "7c3647ff-48e5-47dc-9e0d-aa76a0ea0ea9", "attributes": {}}, {"type": "BasicTicker", "id": "dae013a7-9dca-4108-b05a-4a31b721edea", "attributes": {}}, {"type": "BasicTicker", "id": "206d92e3-6b27-42bf-8650-a00664d9858f", "attributes": {}}], "root_ids": ["3d197a77-f2e2-4daa-bc41-c99f6b67c706"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "cb87cbe0-7c8d-4230-b7b0-f373501b6c12", "modelid": "3d197a77-f2e2-4daa-bc41-c99f6b67c706", "elementid": "905f9333-76d3-48b7-8bce-c950a4697662"}];
          
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