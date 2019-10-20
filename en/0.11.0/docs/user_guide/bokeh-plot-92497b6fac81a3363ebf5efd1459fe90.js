
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
  };var element = document.getElementById("9f0ed3be-d4c0-4dac-8fec-87e8aeae9d3a");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '9f0ed3be-d4c0-4dac-8fec-87e8aeae9d3a' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"aac12378-7f75-4c22-ae48-2dc82a4b1f6f": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "334787e1-0f69-438b-9bcd-2769afb5228b", "attributes": {"ticker": {"type": "BasicTicker", "id": "429a8f61-b6bc-442d-b88b-2f89ab6c4f29"}, "formatter": {"type": "NumeralTickFormatter", "id": "f78f8599-4f1e-41d4-b34a-814180474693"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "750e2e82-d91a-4298-a27a-51bf7c8f02cf"}}}, {"type": "DataRange1d", "id": "9fe1ec99-1d29-4fba-a392-95b1f380f807", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "429a8f61-b6bc-442d-b88b-2f89ab6c4f29", "attributes": {}}, {"type": "ToolEvents", "id": "4cda5392-5df0-4558-bbb7-8913cd5188d8", "attributes": {}}, {"type": "ColumnDataSource", "id": "3ae76b5c-a720-47e9-8558-48350bcbb50a", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "BasicTicker", "id": "b68b002b-c04e-4a33-9fc8-f9dfb16557a8", "attributes": {}}, {"type": "WheelZoomTool", "id": "bb8313d4-cff4-45e8-9b6a-65a8304a4da9", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "750e2e82-d91a-4298-a27a-51bf7c8f02cf"}}}, {"type": "Grid", "id": "691446ae-fd1b-408f-96db-c0895e93d13d", "attributes": {"ticker": {"type": "BasicTicker", "id": "429a8f61-b6bc-442d-b88b-2f89ab6c4f29"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "750e2e82-d91a-4298-a27a-51bf7c8f02cf"}}}, {"type": "Plot", "id": "750e2e82-d91a-4298-a27a-51bf7c8f02cf", "attributes": {"tools": [{"type": "PanTool", "id": "ac258ed4-c995-43a8-bf91-a8c2695d69f4"}, {"type": "WheelZoomTool", "id": "bb8313d4-cff4-45e8-9b6a-65a8304a4da9"}, {"type": "BoxZoomTool", "id": "630f732d-7657-4caf-8917-979e30048425"}, {"type": "PreviewSaveTool", "id": "6040f41b-e76e-4be9-8e52-ae66cac326fb"}, {"type": "ResizeTool", "id": "99cd7c8d-144c-4fe5-80cd-a5c70d974635"}, {"type": "ResetTool", "id": "c02bb592-a940-4d4f-9434-de313450e841"}, {"type": "HelpTool", "id": "5d445ebd-9821-4b9f-a750-c5794b31aadf"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "f8bc1b07-b542-42e6-836f-3c1bf7276799"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "334787e1-0f69-438b-9bcd-2769afb5228b"}, {"type": "Grid", "id": "691446ae-fd1b-408f-96db-c0895e93d13d"}, {"type": "LinearAxis", "id": "0bdcb2eb-5951-4548-ba71-3ba9e267c82d"}, {"type": "Grid", "id": "003dd955-f4af-4a2c-af9c-be16778847e0"}, {"type": "BoxAnnotation", "id": "c24d0533-dc15-48a3-b326-e2e6d003ab00"}, {"type": "GlyphRenderer", "id": "087677f8-7440-437a-9663-8ff884482fc4"}], "left": [{"type": "LinearAxis", "id": "0bdcb2eb-5951-4548-ba71-3ba9e267c82d"}], "below": [{"type": "LinearAxis", "id": "334787e1-0f69-438b-9bcd-2769afb5228b"}], "tool_events": {"type": "ToolEvents", "id": "4cda5392-5df0-4558-bbb7-8913cd5188d8"}, "x_range": {"type": "DataRange1d", "id": "9fe1ec99-1d29-4fba-a392-95b1f380f807"}}, "subtype": "Figure"}, {"type": "DataRange1d", "id": "f8bc1b07-b542-42e6-836f-3c1bf7276799", "attributes": {"callback": null}}, {"type": "BoxAnnotation", "id": "c24d0533-dc15-48a3-b326-e2e6d003ab00", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "NumeralTickFormatter", "id": "bb01320c-edd0-4495-8491-e736e4917377", "attributes": {"format": "$0.00"}}, {"type": "Circle", "id": "b2abac25-297d-41d1-80ab-c34e96e84e1a", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "BoxZoomTool", "id": "630f732d-7657-4caf-8917-979e30048425", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "c24d0533-dc15-48a3-b326-e2e6d003ab00"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "750e2e82-d91a-4298-a27a-51bf7c8f02cf"}}}, {"type": "HelpTool", "id": "5d445ebd-9821-4b9f-a750-c5794b31aadf", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "750e2e82-d91a-4298-a27a-51bf7c8f02cf"}}}, {"type": "Circle", "id": "35beeaa7-fc80-46f6-8fdf-d6d5d0908417", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "PanTool", "id": "ac258ed4-c995-43a8-bf91-a8c2695d69f4", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "750e2e82-d91a-4298-a27a-51bf7c8f02cf"}}}, {"type": "GlyphRenderer", "id": "087677f8-7440-437a-9663-8ff884482fc4", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "3ae76b5c-a720-47e9-8558-48350bcbb50a"}, "nonselection_glyph": {"type": "Circle", "id": "b2abac25-297d-41d1-80ab-c34e96e84e1a"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "35beeaa7-fc80-46f6-8fdf-d6d5d0908417"}}}, {"type": "LinearAxis", "id": "0bdcb2eb-5951-4548-ba71-3ba9e267c82d", "attributes": {"ticker": {"type": "BasicTicker", "id": "b68b002b-c04e-4a33-9fc8-f9dfb16557a8"}, "formatter": {"type": "NumeralTickFormatter", "id": "bb01320c-edd0-4495-8491-e736e4917377"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "750e2e82-d91a-4298-a27a-51bf7c8f02cf"}}}, {"type": "NumeralTickFormatter", "id": "f78f8599-4f1e-41d4-b34a-814180474693", "attributes": {"format": "0.0%"}}, {"type": "Grid", "id": "003dd955-f4af-4a2c-af9c-be16778847e0", "attributes": {"ticker": {"type": "BasicTicker", "id": "b68b002b-c04e-4a33-9fc8-f9dfb16557a8"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "750e2e82-d91a-4298-a27a-51bf7c8f02cf"}}}, {"type": "ResetTool", "id": "c02bb592-a940-4d4f-9434-de313450e841", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "750e2e82-d91a-4298-a27a-51bf7c8f02cf"}}}, {"type": "ResizeTool", "id": "99cd7c8d-144c-4fe5-80cd-a5c70d974635", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "750e2e82-d91a-4298-a27a-51bf7c8f02cf"}}}, {"type": "PreviewSaveTool", "id": "6040f41b-e76e-4be9-8e52-ae66cac326fb", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "750e2e82-d91a-4298-a27a-51bf7c8f02cf"}}}], "root_ids": ["750e2e82-d91a-4298-a27a-51bf7c8f02cf"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "aac12378-7f75-4c22-ae48-2dc82a4b1f6f", "modelid": "750e2e82-d91a-4298-a27a-51bf7c8f02cf", "elementid": "9f0ed3be-d4c0-4dac-8fec-87e8aeae9d3a"}];
          
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