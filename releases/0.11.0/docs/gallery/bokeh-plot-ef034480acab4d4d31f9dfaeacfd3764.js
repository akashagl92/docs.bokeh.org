
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
  };var element = document.getElementById("aee770dd-9666-4b84-925c-4f87097361c3");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'aee770dd-9666-4b84-925c-4f87097361c3' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"16954c66-4d6c-4837-a3c9-5dfe88a25815": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "GlyphRenderer", "id": "0c852c7e-c19a-467f-930c-352bef3313e6", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "d3d4e0a7-4383-4aec-b443-757cf31a02bc"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "b5849499-f1c6-4c37-a38b-e03f0c200dea"}}}, {"type": "BasicTicker", "id": "9842cb84-6777-408e-a910-0a7b229278ee", "attributes": {}}, {"type": "PreviewSaveTool", "id": "d8570947-afbb-4e90-b446-ea7ba88fe58d", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "93f5b0a7-8a25-49fb-9146-0bab7624b164"}}}, {"type": "Legend", "id": "c906b528-bcc8-4e97-8d54-dd4d6eba5510", "attributes": {"legends": [["stamp", [{"type": "GlyphRenderer", "id": "75e5a863-76e4-4ee5-b0cf-20def00f7adc"}]], ["postcard", [{"type": "GlyphRenderer", "id": "0c852c7e-c19a-467f-930c-352bef3313e6"}]]], "location": "top_left", "plot": {"type": "Plot", "subtype": "Chart", "id": "93f5b0a7-8a25-49fb-9146-0bab7624b164"}}}, {"type": "Line", "id": "0b1f4f7c-4f6e-441a-988d-6fcf9cd49068", "attributes": {"line_color": {"value": "#5ab738"}, "line_width": {"value": 2}, "line_dash": [6], "x": {"field": "x_values"}, "y": {"field": "y_values"}}}, {"type": "Line", "id": "b5849499-f1c6-4c37-a38b-e03f0c200dea", "attributes": {"line_color": {"value": "#f22c40"}, "line_width": {"value": 2}, "x": {"field": "x_values"}, "y": {"field": "y_values"}}}, {"type": "BasicTickFormatter", "id": "ec946a0c-0be2-4d84-bb31-fa5e5b9c7301", "attributes": {}}, {"type": "Plot", "id": "93f5b0a7-8a25-49fb-9146-0bab7624b164", "attributes": {"y_range": {"type": "Range1d", "id": "854075d2-d865-4800-920f-9a158ec47708"}, "width": 400, "legend": true, "yscale": "auto", "tools": [{"type": "PanTool", "id": "e39dffc5-e396-4448-b2b7-cd191a515e43"}, {"type": "WheelZoomTool", "id": "4ec852c6-a6a6-4b86-9031-9908d77fa3bf"}, {"type": "BoxZoomTool", "id": "b3c88012-f5c5-45b5-a946-604f4ec29db7"}, {"type": "PreviewSaveTool", "id": "d8570947-afbb-4e90-b446-ea7ba88fe58d"}, {"type": "ResizeTool", "id": "bd9467c3-a457-40a3-9934-953b9cdc8cd6"}, {"type": "ResetTool", "id": "8e72a3dd-4424-4573-a239-e0bcd0647d84"}, {"type": "HelpTool", "id": "fba9966d-baca-4126-bc34-4bbf6d95dd2e"}], "title": "U.S. Postage Rates (1999-2015)", "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "50622780-3b75-4ee3-bafb-3ca05dacbb16"}], "x_range": {"type": "Range1d", "id": "0ca50bde-13bc-4250-84df-7052e0786d5f"}, "y_mapper_type": "auto", "xscale": "auto", "below": [{"type": "LinearAxis", "id": "4e5a4484-827e-4f20-adfb-17ed01dbcd2b"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "08802708-7ba2-4715-8398-a98a76d56f97"}, "renderers": [{"type": "BoxAnnotation", "id": "4bd65a6c-ae8c-44ad-a6ed-15141608573c"}, {"type": "GlyphRenderer", "id": "75e5a863-76e4-4ee5-b0cf-20def00f7adc"}, {"type": "GlyphRenderer", "id": "0c852c7e-c19a-467f-930c-352bef3313e6"}, {"type": "Legend", "id": "c906b528-bcc8-4e97-8d54-dd4d6eba5510"}, {"type": "LinearAxis", "id": "4e5a4484-827e-4f20-adfb-17ed01dbcd2b"}, {"type": "LinearAxis", "id": "50622780-3b75-4ee3-bafb-3ca05dacbb16"}, {"type": "Grid", "id": "82e97e6e-c530-49a9-9581-803a4c13051b"}, {"type": "Grid", "id": "bede270e-f096-477d-994a-94a5ce9912e7"}]}, "subtype": "Chart"}, {"type": "BasicTickFormatter", "id": "32d8bb4a-499f-4c8f-b667-efe8c3fc962b", "attributes": {}}, {"type": "BasicTicker", "id": "56bfc0f5-255c-468e-9fcb-88b2277f93a7", "attributes": {}}, {"type": "Grid", "id": "82e97e6e-c530-49a9-9581-803a4c13051b", "attributes": {"ticker": {"type": "BasicTicker", "id": "9842cb84-6777-408e-a910-0a7b229278ee"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "93f5b0a7-8a25-49fb-9146-0bab7624b164"}}}, {"type": "BoxZoomTool", "id": "b3c88012-f5c5-45b5-a946-604f4ec29db7", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "4bd65a6c-ae8c-44ad-a6ed-15141608573c"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "93f5b0a7-8a25-49fb-9146-0bab7624b164"}}}, {"type": "ResetTool", "id": "8e72a3dd-4424-4573-a239-e0bcd0647d84", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "93f5b0a7-8a25-49fb-9146-0bab7624b164"}}}, {"type": "Grid", "id": "bede270e-f096-477d-994a-94a5ce9912e7", "attributes": {"ticker": {"type": "BasicTicker", "id": "56bfc0f5-255c-468e-9fcb-88b2277f93a7"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Chart", "id": "93f5b0a7-8a25-49fb-9146-0bab7624b164"}}}, {"type": "GlyphRenderer", "id": "75e5a863-76e4-4ee5-b0cf-20def00f7adc", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "0d11153b-77ee-4fd8-8549-c6ef8d1115d4"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "0b1f4f7c-4f6e-441a-988d-6fcf9cd49068"}}}, {"type": "ResizeTool", "id": "bd9467c3-a457-40a3-9934-953b9cdc8cd6", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "93f5b0a7-8a25-49fb-9146-0bab7624b164"}}}, {"type": "PanTool", "id": "e39dffc5-e396-4448-b2b7-cd191a515e43", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "93f5b0a7-8a25-49fb-9146-0bab7624b164"}}}, {"type": "Range1d", "id": "854075d2-d865-4800-920f-9a158ec47708", "attributes": {"start": 0.171, "end": 0.519, "callback": null}}, {"type": "ColumnDataSource", "id": "d3d4e0a7-4383-4aec-b443-757cf31a02bc", "attributes": {"data": {"x_values": [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16], "y_values": [0.2, 0.2, 0.2, 0.2, 0.21, 0.21, 0.23, 0.23, 0.23, 0.23, 0.23, 0.23, 0.23, 0.23, 0.24, 0.24, 0.26, 0.26, 0.27, 0.27, 0.28, 0.28, 0.28, 0.28, 0.29, 0.29, 0.32, 0.32, 0.33, 0.33, 0.34, 0.34, 0.35], "chart_index": ["None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None"]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "HelpTool", "id": "fba9966d-baca-4126-bc34-4bbf6d95dd2e", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "93f5b0a7-8a25-49fb-9146-0bab7624b164"}}}, {"type": "LinearAxis", "id": "50622780-3b75-4ee3-bafb-3ca05dacbb16", "attributes": {"ticker": {"type": "BasicTicker", "id": "56bfc0f5-255c-468e-9fcb-88b2277f93a7"}, "formatter": {"type": "BasicTickFormatter", "id": "32d8bb4a-499f-4c8f-b667-efe8c3fc962b"}, "axis_label": "Rate per ounce", "plot": {"type": "Plot", "subtype": "Chart", "id": "93f5b0a7-8a25-49fb-9146-0bab7624b164"}}}, {"type": "BoxAnnotation", "id": "4bd65a6c-ae8c-44ad-a6ed-15141608573c", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ToolEvents", "id": "08802708-7ba2-4715-8398-a98a76d56f97", "attributes": {}}, {"type": "Range1d", "id": "0ca50bde-13bc-4250-84df-7052e0786d5f", "attributes": {"start": -1.6, "end": 17.6, "callback": null}}, {"type": "LinearAxis", "id": "4e5a4484-827e-4f20-adfb-17ed01dbcd2b", "attributes": {"ticker": {"type": "BasicTicker", "id": "9842cb84-6777-408e-a910-0a7b229278ee"}, "formatter": {"type": "BasicTickFormatter", "id": "ec946a0c-0be2-4d84-bb31-fa5e5b9c7301"}, "axis_label": "index", "plot": {"type": "Plot", "subtype": "Chart", "id": "93f5b0a7-8a25-49fb-9146-0bab7624b164"}}}, {"type": "ColumnDataSource", "id": "0d11153b-77ee-4fd8-8549-c6ef8d1115d4", "attributes": {"data": {"x_values": [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16], "y_values": [0.33, 0.33, 0.33, 0.33, 0.34, 0.34, 0.37, 0.37, 0.37, 0.37, 0.37, 0.37, 0.37, 0.37, 0.39, 0.39, 0.41, 0.41, 0.42, 0.42, 0.44, 0.44, 0.44, 0.44, 0.44, 0.44, 0.45, 0.45, 0.46, 0.46, 0.49, 0.49, 0.49], "chart_index": ["None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None"]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "WheelZoomTool", "id": "4ec852c6-a6a6-4b86-9031-9908d77fa3bf", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "93f5b0a7-8a25-49fb-9146-0bab7624b164"}}}], "root_ids": ["93f5b0a7-8a25-49fb-9146-0bab7624b164"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "16954c66-4d6c-4837-a3c9-5dfe88a25815", "modelid": "93f5b0a7-8a25-49fb-9146-0bab7624b164", "elementid": "aee770dd-9666-4b84-925c-4f87097361c3"}];
          
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