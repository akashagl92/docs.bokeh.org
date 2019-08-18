
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
  };var element = document.getElementById("d42ca450-3a43-4fda-9d9d-f09829dbc9e7");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'd42ca450-3a43-4fda-9d9d-f09829dbc9e7' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"55e3396f-a566-4641-bc3e-38ec2a88ea6d": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "5547fbc0-fef4-49c4-9d8b-c829df2bf4a2", "attributes": {"ticker": {"type": "BasicTicker", "id": "1782e1fb-0422-4fff-b39b-d0bd16aaab7b"}, "formatter": {"type": "BasicTickFormatter", "id": "488803be-b04b-429e-9b50-ab362fd10a74"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1b6ecd4f-9a84-4ed6-ad4d-88f39913d3fb"}}}, {"type": "LinearAxis", "id": "dd98a70f-235b-47f8-b823-49bbfc0ace14", "attributes": {"ticker": {"type": "BasicTicker", "id": "97283916-acf9-46bd-835c-57c4e70327fe"}, "formatter": {"type": "BasicTickFormatter", "id": "570eacd8-c785-468c-8d3f-e01fab6975aa"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1b6ecd4f-9a84-4ed6-ad4d-88f39913d3fb"}}}, {"type": "BasicTicker", "id": "1782e1fb-0422-4fff-b39b-d0bd16aaab7b", "attributes": {}}, {"type": "GlyphRenderer", "id": "8287bff0-3a11-4ea0-a1c2-e4288251abba", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "61d2431f-eea4-43e9-8bba-394fa52dea54"}, "nonselection_glyph": {"type": "Circle", "id": "17facfaf-c535-4368-956d-183395521c3a"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "3b381d11-ab21-4206-9465-4a7fa63decaf"}}}, {"type": "BasicTickFormatter", "id": "488803be-b04b-429e-9b50-ab362fd10a74", "attributes": {}}, {"type": "BasicTickFormatter", "id": "570eacd8-c785-468c-8d3f-e01fab6975aa", "attributes": {}}, {"type": "ColumnDataSource", "id": "61d2431f-eea4-43e9-8bba-394fa52dea54", "attributes": {"data": {"desc": ["A", "b", "C", "d", "E"], "x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["desc", "x", "y"], "callback": null}}, {"type": "BasicTicker", "id": "97283916-acf9-46bd-835c-57c4e70327fe", "attributes": {}}, {"type": "DataRange1d", "id": "f78aa8ce-78e2-4939-8cf3-8bbf147b9cf6", "attributes": {"callback": null}}, {"type": "Grid", "id": "e67a8673-4603-4678-9fe3-8c77465b71f9", "attributes": {"ticker": {"type": "BasicTicker", "id": "1782e1fb-0422-4fff-b39b-d0bd16aaab7b"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "1b6ecd4f-9a84-4ed6-ad4d-88f39913d3fb"}}}, {"type": "Plot", "id": "1b6ecd4f-9a84-4ed6-ad4d-88f39913d3fb", "attributes": {"tools": [{"type": "HoverTool", "id": "69c39d76-ea2c-4375-aae9-511ac1811e8c"}], "plot_width": 400, "x_range": {"type": "DataRange1d", "id": "0bf97693-e146-43e0-955c-8d6a9839515b"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "dd98a70f-235b-47f8-b823-49bbfc0ace14"}, {"type": "Grid", "id": "3be9a645-f855-4584-a5a7-fd7938517acf"}, {"type": "LinearAxis", "id": "5547fbc0-fef4-49c4-9d8b-c829df2bf4a2"}, {"type": "Grid", "id": "e67a8673-4603-4678-9fe3-8c77465b71f9"}, {"type": "GlyphRenderer", "id": "8287bff0-3a11-4ea0-a1c2-e4288251abba"}], "y_range": {"type": "DataRange1d", "id": "f78aa8ce-78e2-4939-8cf3-8bbf147b9cf6"}, "left": [{"type": "LinearAxis", "id": "5547fbc0-fef4-49c4-9d8b-c829df2bf4a2"}], "below": [{"type": "LinearAxis", "id": "dd98a70f-235b-47f8-b823-49bbfc0ace14"}], "tool_events": {"type": "ToolEvents", "id": "70f8af60-79b3-4036-b1c1-ac7465794932"}, "title": "Mouse over the dots"}, "subtype": "Figure"}, {"type": "Grid", "id": "3be9a645-f855-4584-a5a7-fd7938517acf", "attributes": {"ticker": {"type": "BasicTicker", "id": "97283916-acf9-46bd-835c-57c4e70327fe"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "1b6ecd4f-9a84-4ed6-ad4d-88f39913d3fb"}}}, {"type": "HoverTool", "id": "69c39d76-ea2c-4375-aae9-511ac1811e8c", "attributes": {"tooltips": [["index", "$index"], ["(x,y)", "($x, $y)"], ["desc", "@desc"]], "callback": null, "plot": {"type": "Plot", "subtype": "Figure", "id": "1b6ecd4f-9a84-4ed6-ad4d-88f39913d3fb"}}}, {"type": "DataRange1d", "id": "0bf97693-e146-43e0-955c-8d6a9839515b", "attributes": {"callback": null}}, {"type": "Circle", "id": "3b381d11-ab21-4206-9465-4a7fa63decaf", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "Circle", "id": "17facfaf-c535-4368-956d-183395521c3a", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ToolEvents", "id": "70f8af60-79b3-4036-b1c1-ac7465794932", "attributes": {}}], "root_ids": ["1b6ecd4f-9a84-4ed6-ad4d-88f39913d3fb"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "55e3396f-a566-4641-bc3e-38ec2a88ea6d", "modelid": "1b6ecd4f-9a84-4ed6-ad4d-88f39913d3fb", "elementid": "d42ca450-3a43-4fda-9d9d-f09829dbc9e7"}];
          
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