
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
  };var element = document.getElementById("249b4c5e-8351-4447-8e5f-918f8bd83782");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '249b4c5e-8351-4447-8e5f-918f8bd83782' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"7666d158-9559-4f42-8838-5b764fb0afdf": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "WheelZoomTool", "id": "bd38506d-2f32-430b-93d1-a71b40e42567", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "384babc8-127c-4483-9efb-c28b716ca715"}}}, {"type": "HelpTool", "id": "27c084cd-dfec-4aa8-9a01-5dd8a53cd6c7", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "384babc8-127c-4483-9efb-c28b716ca715"}}}, {"type": "Range1d", "id": "b14406bf-35e3-4be7-b8b9-7cf681832027", "attributes": {"start": -1.3, "end": 14.3, "callback": null}}, {"type": "Grid", "id": "26fdaeba-d291-4654-9638-041c1c2464ae", "attributes": {"ticker": {"type": "BasicTicker", "id": "262d815a-64ad-46e4-9004-1b3f051e6271"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Chart", "id": "384babc8-127c-4483-9efb-c28b716ca715"}}}, {"type": "BasicTicker", "id": "382c2461-ab0e-46a7-8800-2ecb41fbae9c", "attributes": {}}, {"type": "PanTool", "id": "6c84c8d9-8eb8-47fe-9247-d9ce3995cd70", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "384babc8-127c-4483-9efb-c28b716ca715"}}}, {"type": "LinearAxis", "id": "0296cddb-b155-4e15-abec-454e6a983cc0", "attributes": {"ticker": {"type": "BasicTicker", "id": "382c2461-ab0e-46a7-8800-2ecb41fbae9c"}, "formatter": {"type": "BasicTickFormatter", "id": "eced3cd4-d66e-4aed-809a-abf7298cc000"}, "axis_label": "time", "plot": {"type": "Plot", "subtype": "Chart", "id": "384babc8-127c-4483-9efb-c28b716ca715"}}}, {"type": "BasicTickFormatter", "id": "eced3cd4-d66e-4aed-809a-abf7298cc000", "attributes": {}}, {"type": "Legend", "id": "2e457bac-9304-45b1-a25d-e0e669419705", "attributes": {"legends": [["jython", [{"type": "GlyphRenderer", "id": "3cb1549f-4cfa-48fc-aef3-cc0cea18653f"}]], ["pypy", [{"type": "GlyphRenderer", "id": "db5d4203-cd4c-4cf1-a1e6-6dc96b54d502"}]], ["python", [{"type": "GlyphRenderer", "id": "7f7bc860-bfc2-4834-ae12-e13f20afc7aa"}]]], "location": "top_left", "plot": {"type": "Plot", "subtype": "Chart", "id": "384babc8-127c-4483-9efb-c28b716ca715"}}}, {"type": "ColumnDataSource", "id": "42ae5b7e-05ca-46f7-9ff0-e5f0e3d260b8", "attributes": {"data": {"x_values": [[0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13]], "series": ["python"], "y_values": [[0.0, 2.0, 3.0, 7.0, 5.0, 26.0, 221.0, 44.0, 233.0, 254.0, 265.0, 266.0, 267.0, 120.0, 111.0, 0.0]], "chart_index": [{"series": "python"}]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "ToolEvents", "id": "731ba61e-ef5e-47e7-a085-3b207bdbb9ff", "attributes": {}}, {"type": "Patches", "id": "3dd84d71-0ca2-4557-879f-1516b52b08fd", "attributes": {"line_color": {"value": "#f22c40"}, "ys": {"field": "y_values"}, "xs": {"field": "x_values"}, "fill_color": {"value": "#f22c40"}, "fill_alpha": {"value": 0.8}}}, {"type": "ResetTool", "id": "0e79d4ad-0ef5-468e-95d6-8a64ee379c1c", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "384babc8-127c-4483-9efb-c28b716ca715"}}}, {"type": "LinearAxis", "id": "0450ff94-5364-4647-a890-114995486d8b", "attributes": {"ticker": {"type": "BasicTicker", "id": "262d815a-64ad-46e4-9004-1b3f051e6271"}, "formatter": {"type": "BasicTickFormatter", "id": "19b74684-40e1-4a55-8895-4d0a84d9d03c"}, "axis_label": "memory", "plot": {"type": "Plot", "subtype": "Chart", "id": "384babc8-127c-4483-9efb-c28b716ca715"}}}, {"type": "Grid", "id": "8267007f-fdeb-441d-8550-35d5b282c319", "attributes": {"ticker": {"type": "BasicTicker", "id": "382c2461-ab0e-46a7-8800-2ecb41fbae9c"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "384babc8-127c-4483-9efb-c28b716ca715"}}}, {"type": "BasicTicker", "id": "262d815a-64ad-46e4-9004-1b3f051e6271", "attributes": {}}, {"type": "Range1d", "id": "7bb3cf3d-dd5a-41fe-a4fe-991e176043cc", "attributes": {"start": -26.700000000000003, "end": 293.7, "callback": null}}, {"type": "PreviewSaveTool", "id": "74ee7bb6-8e6f-4ecd-ba12-133b345c614e", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "384babc8-127c-4483-9efb-c28b716ca715"}}}, {"type": "BoxZoomTool", "id": "fcd59870-db13-4988-b429-15402f637cbf", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "b31a2c18-74b8-4917-80dd-773a0e2cbf8b"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "384babc8-127c-4483-9efb-c28b716ca715"}}}, {"type": "GlyphRenderer", "id": "db5d4203-cd4c-4cf1-a1e6-6dc96b54d502", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "0497592c-a747-4ab8-b6e8-40e567af1061"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Patches", "id": "87f4cf95-7a5b-4708-9238-f76459b60aab"}}}, {"type": "Plot", "id": "384babc8-127c-4483-9efb-c28b716ca715", "attributes": {"y_range": {"type": "Range1d", "id": "7bb3cf3d-dd5a-41fe-a4fe-991e176043cc"}, "width": 400, "legend": "top_left", "yscale": "auto", "tools": [{"type": "PanTool", "id": "6c84c8d9-8eb8-47fe-9247-d9ce3995cd70"}, {"type": "WheelZoomTool", "id": "bd38506d-2f32-430b-93d1-a71b40e42567"}, {"type": "BoxZoomTool", "id": "fcd59870-db13-4988-b429-15402f637cbf"}, {"type": "PreviewSaveTool", "id": "74ee7bb6-8e6f-4ecd-ba12-133b345c614e"}, {"type": "ResizeTool", "id": "eb7c3932-28ac-4438-82de-3a6ab9b22e6d"}, {"type": "ResetTool", "id": "0e79d4ad-0ef5-468e-95d6-8a64ee379c1c"}, {"type": "HelpTool", "id": "27c084cd-dfec-4aa8-9a01-5dd8a53cd6c7"}], "title": "Area Chart", "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "0450ff94-5364-4647-a890-114995486d8b"}], "x_range": {"type": "Range1d", "id": "b14406bf-35e3-4be7-b8b9-7cf681832027"}, "y_mapper_type": "auto", "xscale": "auto", "below": [{"type": "LinearAxis", "id": "0296cddb-b155-4e15-abec-454e6a983cc0"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "731ba61e-ef5e-47e7-a085-3b207bdbb9ff"}, "renderers": [{"type": "BoxAnnotation", "id": "b31a2c18-74b8-4917-80dd-773a0e2cbf8b"}, {"type": "GlyphRenderer", "id": "3cb1549f-4cfa-48fc-aef3-cc0cea18653f"}, {"type": "GlyphRenderer", "id": "db5d4203-cd4c-4cf1-a1e6-6dc96b54d502"}, {"type": "GlyphRenderer", "id": "7f7bc860-bfc2-4834-ae12-e13f20afc7aa"}, {"type": "Legend", "id": "2e457bac-9304-45b1-a25d-e0e669419705"}, {"type": "LinearAxis", "id": "0296cddb-b155-4e15-abec-454e6a983cc0"}, {"type": "LinearAxis", "id": "0450ff94-5364-4647-a890-114995486d8b"}, {"type": "Grid", "id": "8267007f-fdeb-441d-8550-35d5b282c319"}, {"type": "Grid", "id": "26fdaeba-d291-4654-9638-041c1c2464ae"}]}, "subtype": "Chart"}, {"type": "BoxAnnotation", "id": "b31a2c18-74b8-4917-80dd-773a0e2cbf8b", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "GlyphRenderer", "id": "3cb1549f-4cfa-48fc-aef3-cc0cea18653f", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "9a7e8093-2b36-4907-87a5-0618be184ee3"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Patches", "id": "3dd84d71-0ca2-4557-879f-1516b52b08fd"}}}, {"type": "BasicTickFormatter", "id": "19b74684-40e1-4a55-8895-4d0a84d9d03c", "attributes": {}}, {"type": "ColumnDataSource", "id": "0497592c-a747-4ab8-b6e8-40e567af1061", "attributes": {"data": {"x_values": [[0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13]], "series": ["pypy"], "y_values": [[0.0, 12.0, 33.0, 47.0, 15.0, 126.0, 121.0, 144.0, 233.0, 254.0, 225.0, 226.0, 267.0, 110.0, 130.0, 0.0]], "chart_index": [{"series": "pypy"}]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "ResizeTool", "id": "eb7c3932-28ac-4438-82de-3a6ab9b22e6d", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "384babc8-127c-4483-9efb-c28b716ca715"}}}, {"type": "ColumnDataSource", "id": "9a7e8093-2b36-4907-87a5-0618be184ee3", "attributes": {"data": {"x_values": [[0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13]], "series": ["jython"], "y_values": [[0.0, 22.0, 43.0, 10.0, 25.0, 26.0, 101.0, 114.0, 203.0, 194.0, 215.0, 201.0, 227.0, 139.0, 160.0, 0.0]], "chart_index": [{"series": "jython"}]}, "column_names": ["x_values", "y_values"], "callback": null}}, {"type": "Patches", "id": "ad95af09-1d07-42a3-8fde-4b24ffdadab7", "attributes": {"line_color": {"value": "#407ee7"}, "ys": {"field": "y_values"}, "xs": {"field": "x_values"}, "fill_color": {"value": "#407ee7"}, "fill_alpha": {"value": 0.8}}}, {"type": "GlyphRenderer", "id": "7f7bc860-bfc2-4834-ae12-e13f20afc7aa", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "42ae5b7e-05ca-46f7-9ff0-e5f0e3d260b8"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Patches", "id": "ad95af09-1d07-42a3-8fde-4b24ffdadab7"}}}, {"type": "Patches", "id": "87f4cf95-7a5b-4708-9238-f76459b60aab", "attributes": {"line_color": {"value": "#5ab738"}, "ys": {"field": "y_values"}, "xs": {"field": "x_values"}, "fill_color": {"value": "#5ab738"}, "fill_alpha": {"value": 0.8}}}], "root_ids": ["384babc8-127c-4483-9efb-c28b716ca715"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "7666d158-9559-4f42-8838-5b764fb0afdf", "modelid": "384babc8-127c-4483-9efb-c28b716ca715", "elementid": "249b4c5e-8351-4447-8e5f-918f8bd83782"}];
          
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