
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
  };var element = document.getElementById("3bad1bde-fee7-45b1-9ac4-219ae589f6f2");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '3bad1bde-fee7-45b1-9ac4-219ae589f6f2' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"9a23d239-8e9f-43ec-906f-65f4be98867b": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "DataRange1d", "id": "1b82ab73-79ad-44c9-9c5b-f655826a6d61", "attributes": {"callback": null}}, {"type": "Circle", "id": "adc5e245-5629-4960-9781-88cca43aaeb9", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "Grid", "id": "d22f11bb-1b15-4970-8713-35773103ad5c", "attributes": {"ticker": {"type": "BasicTicker", "id": "c2842925-440e-4c98-930e-ab7ae6dcbeb6"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "863c4469-c877-4373-abfc-dd884aca4c24"}}}, {"type": "Grid", "id": "027ff37f-a271-4224-a1c0-fda5ad11228f", "attributes": {"ticker": {"type": "BasicTicker", "id": "d64a09c0-e180-4015-94be-16466a605907"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "863c4469-c877-4373-abfc-dd884aca4c24"}}}, {"type": "LinearAxis", "id": "a33f264a-2379-4b58-9383-e5ae17f4bcec", "attributes": {"ticker": {"type": "BasicTicker", "id": "d64a09c0-e180-4015-94be-16466a605907"}, "formatter": {"type": "BasicTickFormatter", "id": "b5d17a06-7f4e-47dd-a419-e1e41bd5cf6e"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "863c4469-c877-4373-abfc-dd884aca4c24"}}}, {"type": "BoxZoomTool", "id": "410bda71-1664-4b17-a6ab-ad53037ce89a", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "f4f6c903-698f-4277-9e1e-4910fc45f2f6"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "863c4469-c877-4373-abfc-dd884aca4c24"}}}, {"type": "BoxAnnotation", "id": "f4f6c903-698f-4277-9e1e-4910fc45f2f6", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "PanTool", "id": "481d71f2-171a-4d70-886b-c37f62376c28", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "863c4469-c877-4373-abfc-dd884aca4c24"}}}, {"type": "HelpTool", "id": "afdb7ff9-f7d4-4cb3-9667-82d3689d1e12", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "863c4469-c877-4373-abfc-dd884aca4c24"}}}, {"type": "BasicTickFormatter", "id": "b5d17a06-7f4e-47dd-a419-e1e41bd5cf6e", "attributes": {}}, {"type": "BasicTicker", "id": "c2842925-440e-4c98-930e-ab7ae6dcbeb6", "attributes": {}}, {"type": "GlyphRenderer", "id": "a0e50dc2-f6f4-47a1-8375-2bbfb66efe70", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "831aa677-095d-492d-b66b-73979ac0717f"}, "nonselection_glyph": {"type": "Circle", "id": "82c79e97-d65b-4e96-a484-8574e04ce579"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "adc5e245-5629-4960-9781-88cca43aaeb9"}}}, {"type": "ResetTool", "id": "f9535544-0190-48c9-80fd-9f926373fc93", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "863c4469-c877-4373-abfc-dd884aca4c24"}}}, {"type": "ResizeTool", "id": "68eb286b-7f37-4ecc-8bde-4670b7b526dc", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "863c4469-c877-4373-abfc-dd884aca4c24"}}}, {"type": "Plot", "id": "863c4469-c877-4373-abfc-dd884aca4c24", "attributes": {"tools": [{"type": "PanTool", "id": "481d71f2-171a-4d70-886b-c37f62376c28"}, {"type": "WheelZoomTool", "id": "1a2ad65b-0ff6-4f85-a7dc-822afe56c4c8"}, {"type": "BoxZoomTool", "id": "410bda71-1664-4b17-a6ab-ad53037ce89a"}, {"type": "PreviewSaveTool", "id": "0d2673e1-2e81-4318-acec-69c8ed607477"}, {"type": "ResizeTool", "id": "68eb286b-7f37-4ecc-8bde-4670b7b526dc"}, {"type": "ResetTool", "id": "f9535544-0190-48c9-80fd-9f926373fc93"}, {"type": "HelpTool", "id": "afdb7ff9-f7d4-4cb3-9667-82d3689d1e12"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "1b82ab73-79ad-44c9-9c5b-f655826a6d61"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "a33f264a-2379-4b58-9383-e5ae17f4bcec"}, {"type": "Grid", "id": "027ff37f-a271-4224-a1c0-fda5ad11228f"}, {"type": "LinearAxis", "id": "80cd5967-85f0-4492-9d52-cb30719f0741"}, {"type": "Grid", "id": "d22f11bb-1b15-4970-8713-35773103ad5c"}, {"type": "BoxAnnotation", "id": "f4f6c903-698f-4277-9e1e-4910fc45f2f6"}, {"type": "GlyphRenderer", "id": "a0e50dc2-f6f4-47a1-8375-2bbfb66efe70"}], "left": [{"type": "LinearAxis", "id": "80cd5967-85f0-4492-9d52-cb30719f0741"}], "below": [{"type": "LinearAxis", "id": "a33f264a-2379-4b58-9383-e5ae17f4bcec"}], "tool_events": {"type": "ToolEvents", "id": "5b154257-c0b7-4fe2-8fd4-885011e6c767"}, "x_range": {"type": "DataRange1d", "id": "adf3e691-8ed6-4eca-8f25-173218b43ef5"}}, "subtype": "Figure"}, {"type": "ColumnDataSource", "id": "831aa677-095d-492d-b66b-73979ac0717f", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["x", "y"], "callback": null}}, {"type": "LinearAxis", "id": "80cd5967-85f0-4492-9d52-cb30719f0741", "attributes": {"ticker": {"type": "BasicTicker", "id": "c2842925-440e-4c98-930e-ab7ae6dcbeb6"}, "formatter": {"type": "BasicTickFormatter", "id": "ae8d6a1d-d5a2-43cd-82ec-abaf19e11020"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "863c4469-c877-4373-abfc-dd884aca4c24"}}}, {"type": "Circle", "id": "82c79e97-d65b-4e96-a484-8574e04ce579", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "BasicTickFormatter", "id": "ae8d6a1d-d5a2-43cd-82ec-abaf19e11020", "attributes": {}}, {"type": "DataRange1d", "id": "adf3e691-8ed6-4eca-8f25-173218b43ef5", "attributes": {"callback": null}}, {"type": "PreviewSaveTool", "id": "0d2673e1-2e81-4318-acec-69c8ed607477", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "863c4469-c877-4373-abfc-dd884aca4c24"}}}, {"type": "WheelZoomTool", "id": "1a2ad65b-0ff6-4f85-a7dc-822afe56c4c8", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "863c4469-c877-4373-abfc-dd884aca4c24"}}}, {"type": "ToolEvents", "id": "5b154257-c0b7-4fe2-8fd4-885011e6c767", "attributes": {}}, {"type": "BasicTicker", "id": "d64a09c0-e180-4015-94be-16466a605907", "attributes": {}}], "root_ids": ["863c4469-c877-4373-abfc-dd884aca4c24"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "9a23d239-8e9f-43ec-906f-65f4be98867b", "modelid": "863c4469-c877-4373-abfc-dd884aca4c24", "elementid": "3bad1bde-fee7-45b1-9ac4-219ae589f6f2"}];
          
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