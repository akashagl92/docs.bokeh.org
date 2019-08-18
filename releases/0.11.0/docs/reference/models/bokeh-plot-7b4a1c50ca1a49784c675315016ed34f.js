
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
  };var element = document.getElementById("52249902-0882-4c22-9d64-b79b22513c04");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '52249902-0882-4c22-9d64-b79b22513c04' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"124dfd7f-6254-4989-8cdc-40082d696484": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "1d57263e-3c43-4efa-b61c-c46a5b960a76", "attributes": {"ticker": {"type": "BasicTicker", "id": "4c1eaf44-bc36-4275-8274-f496589e74f5"}, "formatter": {"type": "BasicTickFormatter", "id": "a1b8c052-d928-47df-b63f-9c0e74ad7a71"}, "plot": {"type": "Plot", "id": "e342f5fd-10b1-4b2a-9068-c194fb01e157"}}}, {"type": "Plot", "id": "e342f5fd-10b1-4b2a-9068-c194fb01e157", "attributes": {"y_range": {"type": "DataRange1d", "id": "9c2b7aa4-810a-4358-b028-089483f4be48"}, "renderers": [{"type": "GlyphRenderer", "id": "8ac0b814-6904-4ca7-946e-ed7d1855b80a"}, {"type": "LinearAxis", "id": "7829f8e7-927c-491c-867e-f38b256ca4fb"}, {"type": "LinearAxis", "id": "1d57263e-3c43-4efa-b61c-c46a5b960a76"}, {"type": "Grid", "id": "d69674ca-67aa-4fac-8170-bbb307a2cca8"}, {"type": "Grid", "id": "d598fcfb-96c1-4d4f-aa29-4967caaf5054"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "1d57263e-3c43-4efa-b61c-c46a5b960a76"}], "x_range": {"type": "DataRange1d", "id": "b6d71a88-c833-41a7-801d-ab15adc7531e"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "7829f8e7-927c-491c-867e-f38b256ca4fb"}], "tool_events": {"type": "ToolEvents", "id": "be897a3e-00b9-43b7-a30e-1df345cd41b7"}, "toolbar_location": null}}, {"type": "DataRange1d", "id": "9c2b7aa4-810a-4358-b028-089483f4be48", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "be107f7b-ac47-4000-8ef4-9d15bd878085", "attributes": {}}, {"type": "BasicTickFormatter", "id": "beee7819-a43e-4b23-976e-6559b3b39531", "attributes": {}}, {"type": "ToolEvents", "id": "be897a3e-00b9-43b7-a30e-1df345cd41b7", "attributes": {}}, {"type": "ColumnDataSource", "id": "06161603-eedb-4936-b842-0ad48b73e534", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "y"], "callback": null}}, {"type": "Oval", "id": "e2815528-7590-4150-a3c3-990a1ef007b2", "attributes": {"width": {"value": 0.4, "units": "data"}, "y": {"field": "y"}, "angle": {"value": -0.7, "units": "rad"}, "height": {"value": 0.6, "units": "data"}, "x": {"field": "x"}, "fill_color": {"value": "#1d91d0"}}}, {"type": "Grid", "id": "d69674ca-67aa-4fac-8170-bbb307a2cca8", "attributes": {"ticker": {"type": "BasicTicker", "id": "be107f7b-ac47-4000-8ef4-9d15bd878085"}, "plot": {"type": "Plot", "id": "e342f5fd-10b1-4b2a-9068-c194fb01e157"}}}, {"type": "LinearAxis", "id": "7829f8e7-927c-491c-867e-f38b256ca4fb", "attributes": {"ticker": {"type": "BasicTicker", "id": "be107f7b-ac47-4000-8ef4-9d15bd878085"}, "formatter": {"type": "BasicTickFormatter", "id": "beee7819-a43e-4b23-976e-6559b3b39531"}, "plot": {"type": "Plot", "id": "e342f5fd-10b1-4b2a-9068-c194fb01e157"}}}, {"type": "GlyphRenderer", "id": "8ac0b814-6904-4ca7-946e-ed7d1855b80a", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "06161603-eedb-4936-b842-0ad48b73e534"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Oval", "id": "e2815528-7590-4150-a3c3-990a1ef007b2"}}}, {"type": "BasicTicker", "id": "4c1eaf44-bc36-4275-8274-f496589e74f5", "attributes": {}}, {"type": "BasicTickFormatter", "id": "a1b8c052-d928-47df-b63f-9c0e74ad7a71", "attributes": {}}, {"type": "DataRange1d", "id": "b6d71a88-c833-41a7-801d-ab15adc7531e", "attributes": {"callback": null}}, {"type": "Grid", "id": "d598fcfb-96c1-4d4f-aa29-4967caaf5054", "attributes": {"ticker": {"type": "BasicTicker", "id": "4c1eaf44-bc36-4275-8274-f496589e74f5"}, "dimension": 1, "plot": {"type": "Plot", "id": "e342f5fd-10b1-4b2a-9068-c194fb01e157"}}}], "root_ids": ["e342f5fd-10b1-4b2a-9068-c194fb01e157"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "124dfd7f-6254-4989-8cdc-40082d696484", "modelid": "e342f5fd-10b1-4b2a-9068-c194fb01e157", "elementid": "52249902-0882-4c22-9d64-b79b22513c04"}];
          
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