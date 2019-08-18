
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
  };var element = document.getElementById("81eaf883-cc00-4545-9194-453be488d412");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '81eaf883-cc00-4545-9194-453be488d412' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"11cd628e-5f07-47ef-a3c8-225bfe268453": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "GlyphRenderer", "id": "a12e2ec3-1768-498d-9a7f-a0c4a103dbd6", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "96dcf059-e74d-4e90-bb9a-eb195ac9aa8f"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "InvertedTriangle", "id": "5cf533f9-2556-4c19-b039-be34d133f108"}}}, {"type": "LinearAxis", "id": "36c2d85a-cc8a-4c06-b615-818a1f5de9fe", "attributes": {"ticker": {"type": "BasicTicker", "id": "9126eebc-792a-4602-82dc-c459fd279fb0"}, "formatter": {"type": "BasicTickFormatter", "id": "0503a055-684b-44db-97e8-cf52abb5e8c8"}, "plot": {"type": "Plot", "id": "252fee89-7a42-47e6-b999-6afd603a757b"}}}, {"type": "Grid", "id": "49ed2d1a-acdf-492f-8143-9b9770c14978", "attributes": {"ticker": {"type": "BasicTicker", "id": "9126eebc-792a-4602-82dc-c459fd279fb0"}, "plot": {"type": "Plot", "id": "252fee89-7a42-47e6-b999-6afd603a757b"}}}, {"type": "BasicTickFormatter", "id": "0503a055-684b-44db-97e8-cf52abb5e8c8", "attributes": {}}, {"type": "DataRange1d", "id": "731721ae-c230-4e0d-b4fe-b9a233c544d0", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "6bd0f3fb-6730-49fa-924a-925f06f1365f", "attributes": {}}, {"type": "Grid", "id": "34c075bc-b0b5-4320-b4b7-a89f1307ce7f", "attributes": {"ticker": {"type": "BasicTicker", "id": "a935d266-c42d-4c87-b6f4-18bdb894d34b"}, "dimension": 1, "plot": {"type": "Plot", "id": "252fee89-7a42-47e6-b999-6afd603a757b"}}}, {"type": "LinearAxis", "id": "96d7226e-8ecd-4b1b-ae2b-e95244bebc6f", "attributes": {"ticker": {"type": "BasicTicker", "id": "a935d266-c42d-4c87-b6f4-18bdb894d34b"}, "formatter": {"type": "BasicTickFormatter", "id": "6bd0f3fb-6730-49fa-924a-925f06f1365f"}, "plot": {"type": "Plot", "id": "252fee89-7a42-47e6-b999-6afd603a757b"}}}, {"type": "Plot", "id": "252fee89-7a42-47e6-b999-6afd603a757b", "attributes": {"y_range": {"type": "DataRange1d", "id": "731721ae-c230-4e0d-b4fe-b9a233c544d0"}, "renderers": [{"type": "GlyphRenderer", "id": "a12e2ec3-1768-498d-9a7f-a0c4a103dbd6"}, {"type": "LinearAxis", "id": "36c2d85a-cc8a-4c06-b615-818a1f5de9fe"}, {"type": "LinearAxis", "id": "96d7226e-8ecd-4b1b-ae2b-e95244bebc6f"}, {"type": "Grid", "id": "49ed2d1a-acdf-492f-8143-9b9770c14978"}, {"type": "Grid", "id": "34c075bc-b0b5-4320-b4b7-a89f1307ce7f"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "96d7226e-8ecd-4b1b-ae2b-e95244bebc6f"}], "x_range": {"type": "DataRange1d", "id": "12679d04-dd65-46d4-affd-461851f5960f"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "36c2d85a-cc8a-4c06-b615-818a1f5de9fe"}], "tool_events": {"type": "ToolEvents", "id": "4b7fae28-d1bd-4b2d-8e79-37cc7b375c7e"}, "toolbar_location": null}}, {"type": "InvertedTriangle", "id": "5cf533f9-2556-4c19-b039-be34d133f108", "attributes": {"line_color": {"value": "#de2d26"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "sizes"}, "fill_color": {"value": null}}}, {"type": "DataRange1d", "id": "12679d04-dd65-46d4-affd-461851f5960f", "attributes": {"callback": null}}, {"type": "ToolEvents", "id": "4b7fae28-d1bd-4b2d-8e79-37cc7b375c7e", "attributes": {}}, {"type": "BasicTicker", "id": "9126eebc-792a-4602-82dc-c459fd279fb0", "attributes": {}}, {"type": "ColumnDataSource", "id": "96dcf059-e74d-4e90-bb9a-eb195ac9aa8f", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "sizes", "y"], "callback": null}}, {"type": "BasicTicker", "id": "a935d266-c42d-4c87-b6f4-18bdb894d34b", "attributes": {}}], "root_ids": ["252fee89-7a42-47e6-b999-6afd603a757b"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "11cd628e-5f07-47ef-a3c8-225bfe268453", "modelid": "252fee89-7a42-47e6-b999-6afd603a757b", "elementid": "81eaf883-cc00-4545-9194-453be488d412"}];
          
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