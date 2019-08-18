
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
  };var element = document.getElementById("480a54ec-77e9-4056-9cc2-3ff6960f582d");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '480a54ec-77e9-4056-9cc2-3ff6960f582d' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"9649f60b-09e8-4895-8723-26a23f88ff15": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "DataRange1d", "id": "b544e565-beac-4506-9d13-356bcf38632e", "attributes": {"callback": null}}, {"type": "Plot", "id": "5ec82593-fe7a-4b74-8a5a-f207a44742ea", "attributes": {"y_range": {"type": "DataRange1d", "id": "b8e8c474-8d0d-47bd-9ae4-376b471c0307"}, "renderers": [{"type": "GlyphRenderer", "id": "a2034a2c-af75-4908-95c9-395e2e41d25d"}, {"type": "LinearAxis", "id": "cf189ada-d5bf-4238-aaaa-3c17f2381cfb"}, {"type": "LinearAxis", "id": "a67906d5-18fe-4e0e-9c5d-5ae1d3c26d53"}, {"type": "Grid", "id": "f2843e23-1216-43bf-ac37-1c3fff73da8f"}, {"type": "Grid", "id": "e36e88f8-1781-423e-a755-1dc03ff7f416"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "a67906d5-18fe-4e0e-9c5d-5ae1d3c26d53"}], "x_range": {"type": "DataRange1d", "id": "b544e565-beac-4506-9d13-356bcf38632e"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "cf189ada-d5bf-4238-aaaa-3c17f2381cfb"}], "tool_events": {"type": "ToolEvents", "id": "c24f822f-3af0-4e27-b190-c6251c36cf99"}, "toolbar_location": null}}, {"type": "BasicTicker", "id": "55d7c706-5972-4936-bf8c-4876fc93a415", "attributes": {}}, {"type": "BasicTickFormatter", "id": "06457b50-5e4d-401b-91d1-11b5fb0def5b", "attributes": {}}, {"type": "ToolEvents", "id": "c24f822f-3af0-4e27-b190-c6251c36cf99", "attributes": {}}, {"type": "LinearAxis", "id": "cf189ada-d5bf-4238-aaaa-3c17f2381cfb", "attributes": {"ticker": {"type": "BasicTicker", "id": "55d7c706-5972-4936-bf8c-4876fc93a415"}, "formatter": {"type": "BasicTickFormatter", "id": "06457b50-5e4d-401b-91d1-11b5fb0def5b"}, "plot": {"type": "Plot", "id": "5ec82593-fe7a-4b74-8a5a-f207a44742ea"}}}, {"type": "Quad", "id": "e568b250-c4de-4837-add1-f0a9273da572", "attributes": {"right": {"field": "right"}, "left": {"field": "left"}, "top": {"field": "top"}, "bottom": {"field": "bottom"}, "fill_color": {"value": "#b3de69"}}}, {"type": "BasicTicker", "id": "e6865c72-05ce-48b8-82d1-d60a45a6518e", "attributes": {}}, {"type": "BasicTickFormatter", "id": "60f645c4-be82-40d9-b29f-0ea5067b6edc", "attributes": {}}, {"type": "DataRange1d", "id": "b8e8c474-8d0d-47bd-9ae4-376b471c0307", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "a67906d5-18fe-4e0e-9c5d-5ae1d3c26d53", "attributes": {"ticker": {"type": "BasicTicker", "id": "e6865c72-05ce-48b8-82d1-d60a45a6518e"}, "formatter": {"type": "BasicTickFormatter", "id": "60f645c4-be82-40d9-b29f-0ea5067b6edc"}, "plot": {"type": "Plot", "id": "5ec82593-fe7a-4b74-8a5a-f207a44742ea"}}}, {"type": "ColumnDataSource", "id": "fb86567b-af1f-41c3-841c-fd4a9fa3c91e", "attributes": {"data": {"right": [-0.8999999999999999, -0.8625, -0.6000000000000001, -0.1875, 0.3, 0.7875, 1.2, 1.4625000000000001, 1.5], "left": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "top": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "bottom": [4.1, 2.525, 1.4, 0.725, 0.5, 0.725, 1.4, 2.525, 4.1]}, "column_names": ["right", "top", "bottom", "left"], "callback": null}}, {"type": "Grid", "id": "e36e88f8-1781-423e-a755-1dc03ff7f416", "attributes": {"ticker": {"type": "BasicTicker", "id": "e6865c72-05ce-48b8-82d1-d60a45a6518e"}, "dimension": 1, "plot": {"type": "Plot", "id": "5ec82593-fe7a-4b74-8a5a-f207a44742ea"}}}, {"type": "Grid", "id": "f2843e23-1216-43bf-ac37-1c3fff73da8f", "attributes": {"ticker": {"type": "BasicTicker", "id": "55d7c706-5972-4936-bf8c-4876fc93a415"}, "plot": {"type": "Plot", "id": "5ec82593-fe7a-4b74-8a5a-f207a44742ea"}}}, {"type": "GlyphRenderer", "id": "a2034a2c-af75-4908-95c9-395e2e41d25d", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "fb86567b-af1f-41c3-841c-fd4a9fa3c91e"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Quad", "id": "e568b250-c4de-4837-add1-f0a9273da572"}}}], "root_ids": ["5ec82593-fe7a-4b74-8a5a-f207a44742ea"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "9649f60b-09e8-4895-8723-26a23f88ff15", "modelid": "5ec82593-fe7a-4b74-8a5a-f207a44742ea", "elementid": "480a54ec-77e9-4056-9cc2-3ff6960f582d"}];
          
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