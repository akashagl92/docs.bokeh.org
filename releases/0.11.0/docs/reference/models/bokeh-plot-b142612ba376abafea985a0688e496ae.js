
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
  };var element = document.getElementById("4a8cdee0-01e0-4478-96a0-5adaa23974a7");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '4a8cdee0-01e0-4478-96a0-5adaa23974a7' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"9d86a201-766c-43b6-9352-cea20901ac56": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "bfd9bba9-333a-4556-b783-2018a7020a1a", "attributes": {"ticker": {"type": "BasicTicker", "id": "d5b140ac-d579-4c7c-9e49-a4bc14dd1db6"}, "formatter": {"type": "BasicTickFormatter", "id": "7dd83033-a923-452f-9501-0a71f0c31066"}, "plot": {"type": "Plot", "id": "02dafdc3-cea9-401c-bac1-4252c681858e"}}}, {"type": "BasicTickFormatter", "id": "7dd83033-a923-452f-9501-0a71f0c31066", "attributes": {}}, {"type": "DataRange1d", "id": "6e55a243-1683-4263-9d7b-8cb6d0fdada6", "attributes": {"callback": null}}, {"type": "DataRange1d", "id": "293d3b88-1226-4c69-b49c-6e2362faea24", "attributes": {"callback": null}}, {"type": "ColumnDataSource", "id": "bc6b51f5-2a7c-4975-b4b8-80c9f7fcd8dc", "attributes": {"data": {"ys": [[3.9, 4.02, 4.1, 4.02, 3.9], [2.14, 2.272, 2.36, 2.272, 2.14], [0.88, 1.024, 1.12, 1.024, 0.88], [0.12, 0.276, 0.38, 0.276, 0.12], [-0.13999999999999999, 0.027999999999999997, 0.13999999999999999, 0.027999999999999997, -0.13999999999999999], [0.09999999999999998, 0.28, 0.4, 0.28, 0.09999999999999998], [0.84, 1.032, 1.1600000000000001, 1.032, 0.84], [2.08, 2.284, 2.42, 2.284, 2.08], [3.82, 4.036, 4.18, 4.036, 3.82]], "xs": [[-2.09, -2.12, -2.0, -1.88, -1.91], [-1.599, -1.6320000000000001, -1.5, -1.3679999999999999, -1.401], [-1.108, -1.144, -1.0, -0.856, -0.892], [-0.617, -0.656, -0.5, -0.344, -0.383], [-0.126, -0.16799999999999998, 0.0, 0.16799999999999998, 0.126], [0.365, 0.32, 0.5, 0.6799999999999999, 0.635], [0.856, 0.808, 1.0, 1.192, 1.144], [1.347, 1.296, 1.5, 1.704, 1.653], [1.838, 1.784, 2.0, 2.216, 2.162]]}, "column_names": ["ys", "xs"], "callback": null}}, {"type": "GlyphRenderer", "id": "a1f34960-0ff7-4032-9d24-cf749669d043", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "bc6b51f5-2a7c-4975-b4b8-80c9f7fcd8dc"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Patches", "id": "26fde457-976f-4568-a757-a85aac4da770"}}}, {"type": "Grid", "id": "f79b249b-77e9-4c28-8cb0-cfab0fb32f57", "attributes": {"ticker": {"type": "BasicTicker", "id": "b5f7c796-a04b-417f-861e-f69d6ee5261e"}, "plot": {"type": "Plot", "id": "02dafdc3-cea9-401c-bac1-4252c681858e"}}}, {"type": "ToolEvents", "id": "b112f5f6-8f4a-41c3-944a-f33c7e39f9b4", "attributes": {}}, {"type": "BasicTickFormatter", "id": "d9c3db34-3824-4d96-ba22-1f94b06f2126", "attributes": {}}, {"type": "Plot", "id": "02dafdc3-cea9-401c-bac1-4252c681858e", "attributes": {"y_range": {"type": "DataRange1d", "id": "293d3b88-1226-4c69-b49c-6e2362faea24"}, "renderers": [{"type": "GlyphRenderer", "id": "a1f34960-0ff7-4032-9d24-cf749669d043"}, {"type": "LinearAxis", "id": "7679998c-9e54-4939-9afc-17e1e4278c71"}, {"type": "LinearAxis", "id": "bfd9bba9-333a-4556-b783-2018a7020a1a"}, {"type": "Grid", "id": "f79b249b-77e9-4c28-8cb0-cfab0fb32f57"}, {"type": "Grid", "id": "347ae872-7bb9-4453-a50d-69771e840bab"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "bfd9bba9-333a-4556-b783-2018a7020a1a"}], "x_range": {"type": "DataRange1d", "id": "6e55a243-1683-4263-9d7b-8cb6d0fdada6"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "7679998c-9e54-4939-9afc-17e1e4278c71"}], "tool_events": {"type": "ToolEvents", "id": "b112f5f6-8f4a-41c3-944a-f33c7e39f9b4"}, "toolbar_location": null}}, {"type": "Patches", "id": "26fde457-976f-4568-a757-a85aac4da770", "attributes": {"ys": {"field": "ys"}, "xs": {"field": "xs"}, "fill_color": {"value": "#fb9a99"}}}, {"type": "Grid", "id": "347ae872-7bb9-4453-a50d-69771e840bab", "attributes": {"ticker": {"type": "BasicTicker", "id": "d5b140ac-d579-4c7c-9e49-a4bc14dd1db6"}, "dimension": 1, "plot": {"type": "Plot", "id": "02dafdc3-cea9-401c-bac1-4252c681858e"}}}, {"type": "LinearAxis", "id": "7679998c-9e54-4939-9afc-17e1e4278c71", "attributes": {"ticker": {"type": "BasicTicker", "id": "b5f7c796-a04b-417f-861e-f69d6ee5261e"}, "formatter": {"type": "BasicTickFormatter", "id": "d9c3db34-3824-4d96-ba22-1f94b06f2126"}, "plot": {"type": "Plot", "id": "02dafdc3-cea9-401c-bac1-4252c681858e"}}}, {"type": "BasicTicker", "id": "b5f7c796-a04b-417f-861e-f69d6ee5261e", "attributes": {}}, {"type": "BasicTicker", "id": "d5b140ac-d579-4c7c-9e49-a4bc14dd1db6", "attributes": {}}], "root_ids": ["02dafdc3-cea9-401c-bac1-4252c681858e"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "9d86a201-766c-43b6-9352-cea20901ac56", "modelid": "02dafdc3-cea9-401c-bac1-4252c681858e", "elementid": "4a8cdee0-01e0-4478-96a0-5adaa23974a7"}];
          
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