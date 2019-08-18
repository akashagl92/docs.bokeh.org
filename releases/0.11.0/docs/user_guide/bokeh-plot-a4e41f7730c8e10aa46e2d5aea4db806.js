
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
  };var element = document.getElementById("0fbe28e3-8997-4053-94f3-c8eb2c67401b");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0fbe28e3-8997-4053-94f3-c8eb2c67401b' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"2c7a2fbe-2fca-4d18-909b-d1ad90d80621": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BoxSelectTool", "id": "a21696fb-2519-4af9-af8f-39db981541ae", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "271190a7-0718-4646-95b8-fccd69bb1fbe"}, "renderers": [{"type": "GlyphRenderer", "id": "0b0aa6dc-b9c0-4045-adec-582d6d1a677f"}], "callback": null, "plot": {"type": "Plot", "subtype": "Figure", "id": "c2694af7-7338-4266-854b-c953e773d450"}}}, {"type": "BoxAnnotation", "id": "271190a7-0718-4646-95b8-fccd69bb1fbe", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Circle", "id": "6c76f359-b1e8-4a46-b9f1-b7d5344d2f42", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "y": {"field": "y0"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "Plot", "id": "c2694af7-7338-4266-854b-c953e773d450", "attributes": {"tools": [{"type": "BoxSelectTool", "id": "a21696fb-2519-4af9-af8f-39db981541ae"}, {"type": "LassoSelectTool", "id": "bc26f456-5227-4018-9a91-19d065c6a6b3"}, {"type": "HelpTool", "id": "accf3877-8f60-4dd2-8086-a3193511cf93"}], "plot_width": 300, "x_range": {"type": "DataRange1d", "id": "056d116f-c800-4a68-ae30-90792216b000"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "b30540cc-28be-43c0-8612-70f42f3feb9d"}, {"type": "Grid", "id": "9859f605-50b9-4fd3-a35b-66d19a1d63e2"}, {"type": "LinearAxis", "id": "262e7b8d-5fbf-4393-917c-6c9e66120c20"}, {"type": "Grid", "id": "847b5b6b-1daf-4b74-b3f2-5a66cd08c599"}, {"type": "BoxAnnotation", "id": "271190a7-0718-4646-95b8-fccd69bb1fbe"}, {"type": "PolyAnnotation", "id": "f5f304df-5752-400b-b915-93493d69f6db"}, {"type": "GlyphRenderer", "id": "0b0aa6dc-b9c0-4045-adec-582d6d1a677f"}], "y_range": {"type": "DataRange1d", "id": "ca4f8ea6-5ecb-4388-991a-1d7869e343cc"}, "left": [{"type": "LinearAxis", "id": "262e7b8d-5fbf-4393-917c-6c9e66120c20"}], "below": [{"type": "LinearAxis", "id": "b30540cc-28be-43c0-8612-70f42f3feb9d"}], "tool_events": {"type": "ToolEvents", "id": "6efdf5ff-bc39-40f9-b315-b7be3d874a82"}, "title": null}, "subtype": "Figure"}, {"type": "ColumnDataSource", "id": "1af60194-e754-4a22-ae38-71e98ca8447f", "attributes": {"data": {"x": [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "y0": [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "y1": [400, 361, 324, 289, 256, 225, 196, 169, 144, 121, 100, 81, 64, 49, 36, 25, 16, 9, 4, 1, 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400]}, "column_names": ["x", "y0", "y1"], "callback": null}}, {"type": "HelpTool", "id": "e498dd5b-eef9-4ceb-8d21-3932af1a0f17", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "221d0bd8-36a2-4c19-b33a-8947e41f535e"}}}, {"type": "LassoSelectTool", "id": "442afbdf-bfda-4c1a-8690-15f0dbe60596", "attributes": {"overlay": {"type": "PolyAnnotation", "id": "1cc25c65-8476-45b6-b7af-468490c5a8f6"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "221d0bd8-36a2-4c19-b33a-8947e41f535e"}}}, {"type": "LinearAxis", "id": "262e7b8d-5fbf-4393-917c-6c9e66120c20", "attributes": {"ticker": {"type": "BasicTicker", "id": "01a26e8b-912d-4a3f-a763-a24a139b9646"}, "formatter": {"type": "BasicTickFormatter", "id": "85bfe13a-30b9-4fc9-a4ed-cdf376e41f6c"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c2694af7-7338-4266-854b-c953e773d450"}}}, {"type": "Circle", "id": "3eb4386f-32df-4af2-a12e-9cefeff589c9", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y0"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "HelpTool", "id": "accf3877-8f60-4dd2-8086-a3193511cf93", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "c2694af7-7338-4266-854b-c953e773d450"}}}, {"type": "LinearAxis", "id": "a3afced7-f7b6-4044-a11e-04efbd725d66", "attributes": {"ticker": {"type": "BasicTicker", "id": "0503a8d7-5fbb-43f9-a3ea-f9efa9a48f1e"}, "formatter": {"type": "BasicTickFormatter", "id": "a295be9d-4d11-41ad-9096-ef6bb29816e7"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "221d0bd8-36a2-4c19-b33a-8947e41f535e"}}}, {"type": "BasicTicker", "id": "47a77da4-a4a7-49fe-bdc0-a3c7d9b4e5be", "attributes": {}}, {"type": "Circle", "id": "bf34dcc8-d527-464b-9b83-c31e10c429d1", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y1"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "GlyphRenderer", "id": "0b0aa6dc-b9c0-4045-adec-582d6d1a677f", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "1af60194-e754-4a22-ae38-71e98ca8447f"}, "nonselection_glyph": {"type": "Circle", "id": "bf34dcc8-d527-464b-9b83-c31e10c429d1"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "bde900f5-6672-45f5-9a59-fb28d5bb58af"}}}, {"type": "BasicTickFormatter", "id": "5ff1f8e2-0d95-4155-b861-a4c17860d536", "attributes": {}}, {"type": "LinearAxis", "id": "b30540cc-28be-43c0-8612-70f42f3feb9d", "attributes": {"ticker": {"type": "BasicTicker", "id": "47a77da4-a4a7-49fe-bdc0-a3c7d9b4e5be"}, "formatter": {"type": "BasicTickFormatter", "id": "5ff1f8e2-0d95-4155-b861-a4c17860d536"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c2694af7-7338-4266-854b-c953e773d450"}}}, {"type": "Plot", "id": "221d0bd8-36a2-4c19-b33a-8947e41f535e", "attributes": {"tools": [{"type": "BoxSelectTool", "id": "5cde8863-6838-44f4-9c42-fdcd9fa35ec0"}, {"type": "LassoSelectTool", "id": "442afbdf-bfda-4c1a-8690-15f0dbe60596"}, {"type": "HelpTool", "id": "e498dd5b-eef9-4ceb-8d21-3932af1a0f17"}], "plot_width": 300, "x_range": {"type": "DataRange1d", "id": "8b24e30c-7098-42c7-8479-05bd99865305"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "a3afced7-f7b6-4044-a11e-04efbd725d66"}, {"type": "Grid", "id": "e2013e99-514c-47cc-bc6c-fd569c8c0970"}, {"type": "LinearAxis", "id": "42988c9c-daf0-466c-b930-b7c4a0880d03"}, {"type": "Grid", "id": "9aa74784-5cdc-45d1-81c6-48cf85dc70eb"}, {"type": "BoxAnnotation", "id": "a99daec0-b655-419b-8279-d6ee6e01a742"}, {"type": "PolyAnnotation", "id": "1cc25c65-8476-45b6-b7af-468490c5a8f6"}, {"type": "GlyphRenderer", "id": "dccba1e9-e536-40e2-bb12-9ebaa1f8d6ec"}], "y_range": {"type": "DataRange1d", "id": "e9342286-49a7-4b8e-ad11-51b3549c747b"}, "left": [{"type": "LinearAxis", "id": "42988c9c-daf0-466c-b930-b7c4a0880d03"}], "below": [{"type": "LinearAxis", "id": "a3afced7-f7b6-4044-a11e-04efbd725d66"}], "tool_events": {"type": "ToolEvents", "id": "8b98941a-3adf-403b-a9c6-e044d449ec64"}, "title": null}, "subtype": "Figure"}, {"type": "BasicTicker", "id": "0503a8d7-5fbb-43f9-a3ea-f9efa9a48f1e", "attributes": {}}, {"type": "BoxAnnotation", "id": "a99daec0-b655-419b-8279-d6ee6e01a742", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "81412da7-0732-4f8d-87c0-e1b844f803ee", "attributes": {}}, {"type": "BasicTicker", "id": "01a26e8b-912d-4a3f-a763-a24a139b9646", "attributes": {}}, {"type": "Grid", "id": "e2013e99-514c-47cc-bc6c-fd569c8c0970", "attributes": {"ticker": {"type": "BasicTicker", "id": "0503a8d7-5fbb-43f9-a3ea-f9efa9a48f1e"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "221d0bd8-36a2-4c19-b33a-8947e41f535e"}}}, {"type": "BasicTickFormatter", "id": "cdbcec37-ca0a-456d-bdc9-1e80f9f4bcee", "attributes": {}}, {"type": "DataRange1d", "id": "ca4f8ea6-5ecb-4388-991a-1d7869e343cc", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "dccba1e9-e536-40e2-bb12-9ebaa1f8d6ec", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "1af60194-e754-4a22-ae38-71e98ca8447f"}, "nonselection_glyph": {"type": "Circle", "id": "3eb4386f-32df-4af2-a12e-9cefeff589c9"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "6c76f359-b1e8-4a46-b9f1-b7d5344d2f42"}}}, {"type": "LassoSelectTool", "id": "bc26f456-5227-4018-9a91-19d065c6a6b3", "attributes": {"overlay": {"type": "PolyAnnotation", "id": "f5f304df-5752-400b-b915-93493d69f6db"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c2694af7-7338-4266-854b-c953e773d450"}}}, {"type": "ToolEvents", "id": "8b98941a-3adf-403b-a9c6-e044d449ec64", "attributes": {}}, {"type": "Grid", "id": "847b5b6b-1daf-4b74-b3f2-5a66cd08c599", "attributes": {"ticker": {"type": "BasicTicker", "id": "01a26e8b-912d-4a3f-a763-a24a139b9646"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "c2694af7-7338-4266-854b-c953e773d450"}}}, {"type": "PolyAnnotation", "id": "1cc25c65-8476-45b6-b7af-468490c5a8f6", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "line_dash": [4, 4], "ys_units": "screen", "plot": null, "xs_units": "screen", "level": "overlay", "line_alpha": {"value": 1.0}, "fill_color": {"value": "lightgrey"}, "fill_alpha": {"value": 0.5}}}, {"type": "Circle", "id": "bde900f5-6672-45f5-9a59-fb28d5bb58af", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "y": {"field": "y1"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "DataRange1d", "id": "e9342286-49a7-4b8e-ad11-51b3549c747b", "attributes": {"callback": null}}, {"type": "ToolEvents", "id": "6efdf5ff-bc39-40f9-b315-b7be3d874a82", "attributes": {}}, {"type": "BasicTickFormatter", "id": "a295be9d-4d11-41ad-9096-ef6bb29816e7", "attributes": {}}, {"type": "BasicTickFormatter", "id": "85bfe13a-30b9-4fc9-a4ed-cdf376e41f6c", "attributes": {}}, {"type": "Grid", "id": "9aa74784-5cdc-45d1-81c6-48cf85dc70eb", "attributes": {"ticker": {"type": "BasicTicker", "id": "81412da7-0732-4f8d-87c0-e1b844f803ee"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "221d0bd8-36a2-4c19-b33a-8947e41f535e"}}}, {"type": "Grid", "id": "9859f605-50b9-4fd3-a35b-66d19a1d63e2", "attributes": {"ticker": {"type": "BasicTicker", "id": "47a77da4-a4a7-49fe-bdc0-a3c7d9b4e5be"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "c2694af7-7338-4266-854b-c953e773d450"}}}, {"type": "PolyAnnotation", "id": "f5f304df-5752-400b-b915-93493d69f6db", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "line_dash": [4, 4], "ys_units": "screen", "plot": null, "xs_units": "screen", "level": "overlay", "line_alpha": {"value": 1.0}, "fill_color": {"value": "lightgrey"}, "fill_alpha": {"value": 0.5}}}, {"type": "GridPlot", "id": "619666f6-537e-4494-b918-00453a49c7a9", "attributes": {"children": [[{"type": "Plot", "subtype": "Figure", "id": "221d0bd8-36a2-4c19-b33a-8947e41f535e"}, {"type": "Plot", "subtype": "Figure", "id": "c2694af7-7338-4266-854b-c953e773d450"}]]}}, {"type": "DataRange1d", "id": "056d116f-c800-4a68-ae30-90792216b000", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "42988c9c-daf0-466c-b930-b7c4a0880d03", "attributes": {"ticker": {"type": "BasicTicker", "id": "81412da7-0732-4f8d-87c0-e1b844f803ee"}, "formatter": {"type": "BasicTickFormatter", "id": "cdbcec37-ca0a-456d-bdc9-1e80f9f4bcee"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "221d0bd8-36a2-4c19-b33a-8947e41f535e"}}}, {"type": "DataRange1d", "id": "8b24e30c-7098-42c7-8479-05bd99865305", "attributes": {"callback": null}}, {"type": "BoxSelectTool", "id": "5cde8863-6838-44f4-9c42-fdcd9fa35ec0", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "a99daec0-b655-419b-8279-d6ee6e01a742"}, "renderers": [{"type": "GlyphRenderer", "id": "dccba1e9-e536-40e2-bb12-9ebaa1f8d6ec"}], "callback": null, "plot": {"type": "Plot", "subtype": "Figure", "id": "221d0bd8-36a2-4c19-b33a-8947e41f535e"}}}], "root_ids": ["619666f6-537e-4494-b918-00453a49c7a9"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "2c7a2fbe-2fca-4d18-909b-d1ad90d80621", "modelid": "619666f6-537e-4494-b918-00453a49c7a9", "elementid": "0fbe28e3-8997-4053-94f3-c8eb2c67401b"}];
          
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