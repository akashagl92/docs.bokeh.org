
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
  };var element = document.getElementById("ac414f2f-3315-463b-a0f3-cebaef219b40");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ac414f2f-3315-463b-a0f3-cebaef219b40' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"295a5fed-72f7-43c8-848e-ea9fb9b4a278": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Line", "id": "8a08b087-0dae-4dbb-8993-f4b0ec63a437", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 3}, "x": {"field": "x"}, "y": {"field": "y"}}}, {"type": "Grid", "id": "bb196169-e7ef-4e86-93a9-c5946981ef32", "attributes": {"ticker": {"type": "LogTicker", "id": "8fbe45d2-c57e-420d-b5eb-9077f8419342"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "d2462483-2ec2-44a3-8d01-da5065115ea9"}}}, {"type": "Line", "id": "b5682e54-3165-448b-9c85-909d7dbdc180", "attributes": {"line_color": {"value": "orange"}, "x": {"field": "x"}, "line_dash": [4, 4], "y": {"field": "y"}}}, {"type": "ToolEvents", "id": "a30a062e-9951-4b64-bd84-6d9496f95c6b", "attributes": {}}, {"type": "GlyphRenderer", "id": "66b17ce6-02a9-435b-a4ba-a976d68feb8a", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "2c944509-3661-40da-8f8f-abcd7ff3fc20"}, "nonselection_glyph": {"type": "Circle", "id": "40671d3d-b4e1-4777-8d0c-e6e2e9d09686"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "e80b6f18-bffc-4c74-b0c5-580b0a96b6b5"}}}, {"type": "ColumnDataSource", "id": "2c944509-3661-40da-8f8f-abcd7ff3fc20", "attributes": {"data": {"x": [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0], "y": [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0]}, "column_names": ["x", "y"], "callback": null}}, {"type": "ColumnDataSource", "id": "90766c6b-727a-46c8-b3c1-3b409272c9a3", "attributes": {"data": {"x": [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0], "y": [1.2589254117941673, 3.1622776601683795, 10.0, 31.622776601683793, 100.0, 316.22776601683796, 1000.0]}, "column_names": ["x", "y"], "callback": null}}, {"type": "Circle", "id": "fd9f9242-a7e1-4c7a-a86f-7e0d69eb6da8", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 6, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "Line", "id": "06e18c38-2f40-4de7-9cf4-78c5cd491ca3", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 3}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "y": {"field": "y"}}}, {"type": "ColumnDataSource", "id": "5e81faf5-b817-4764-94d5-e7980a1f0cda", "attributes": {"data": {"x": [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0], "y": [1.023292992280754, 1.7782794100389228, 10.0, 177.82794100389228, 10000.0, 1778279.410038923, 1000000000.0]}, "column_names": ["x", "y"], "callback": null}}, {"type": "Line", "id": "6ba2f77e-7611-475b-aaa6-35c6372d6fe8", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "y": {"field": "y"}}}, {"type": "Plot", "id": "d2462483-2ec2-44a3-8d01-da5065115ea9", "attributes": {"x_range": {"type": "DataRange1d", "id": "9cb6a1ae-b75e-4946-925b-8e2facc250fc"}, "left": [{"type": "LogAxis", "id": "2f64c4c3-6c0f-4627-987b-4931c3de75e3"}], "renderers": [{"type": "LinearAxis", "id": "9d598930-50a5-467e-896b-06c229a58c5e"}, {"type": "Grid", "id": "260bc12c-3efc-411f-a4de-6594a480f7fa"}, {"type": "LogAxis", "id": "2f64c4c3-6c0f-4627-987b-4931c3de75e3"}, {"type": "Grid", "id": "bb196169-e7ef-4e86-93a9-c5946981ef32"}, {"type": "BoxAnnotation", "id": "79d9c97c-7da5-400e-9567-c9c1383775e2"}, {"type": "Legend", "id": "0e93140f-df04-4a0b-88a7-a7f8ea949ba3"}, {"type": "GlyphRenderer", "id": "cde27029-fb8b-4393-a93f-c886a220522b"}, {"type": "GlyphRenderer", "id": "66b17ce6-02a9-435b-a4ba-a976d68feb8a"}, {"type": "GlyphRenderer", "id": "3f8c48df-9d3b-4bfc-81f3-db14980f1211"}, {"type": "GlyphRenderer", "id": "099bb547-cc50-4423-98f3-eb98b2d2e041"}, {"type": "GlyphRenderer", "id": "18205892-88b4-4e9e-82f2-bc00665ed995"}, {"type": "GlyphRenderer", "id": "c46a0259-ca74-43a6-ad84-38d9b7d84451"}], "y_range": {"type": "Range1d", "id": "8d9421dc-22d9-4e88-a7e4-8e01debf9358"}, "y_mapper_type": "log", "tools": [{"type": "PanTool", "id": "7260a2ef-a03e-4669-a86b-80464001b155"}, {"type": "BoxZoomTool", "id": "9f7db1b2-8c36-4620-b54e-bc0cd1dd2ec8"}, {"type": "ResetTool", "id": "f0501c8b-2998-4897-960a-f9bda762846b"}, {"type": "PreviewSaveTool", "id": "e7fddb0c-7899-4674-9bd7-97cc7f21bab6"}], "below": [{"type": "LinearAxis", "id": "9d598930-50a5-467e-896b-06c229a58c5e"}], "tool_events": {"type": "ToolEvents", "id": "a30a062e-9951-4b64-bd84-6d9496f95c6b"}, "title": "log axis example"}, "subtype": "Figure"}, {"type": "GlyphRenderer", "id": "18205892-88b4-4e9e-82f2-bc00665ed995", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "acf8dc61-dff2-4b9d-879c-97b225e938f8"}, "nonselection_glyph": {"type": "Circle", "id": "fd9f9242-a7e1-4c7a-a86f-7e0d69eb6da8"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "5b1fcfac-f624-4ac4-9dbc-79d880ccf921"}}}, {"type": "Line", "id": "6576d7a8-aebc-4ae0-b015-5149b20e2a13", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "line_dash": [4, 4], "line_alpha": {"value": 0.1}, "y": {"field": "y"}}}, {"type": "BasicTicker", "id": "b880acdc-1f96-47bb-a662-84a8ee882cd1", "attributes": {}}, {"type": "ColumnDataSource", "id": "acf8dc61-dff2-4b9d-879c-97b225e938f8", "attributes": {"data": {"x": [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0], "y": [1.2589254117941673, 3.1622776601683795, 10.0, 31.622776601683793, 100.0, 316.22776601683796, 1000.0]}, "column_names": ["y", "x"], "callback": null}}, {"type": "Grid", "id": "260bc12c-3efc-411f-a4de-6594a480f7fa", "attributes": {"ticker": {"type": "BasicTicker", "id": "b880acdc-1f96-47bb-a662-84a8ee882cd1"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d2462483-2ec2-44a3-8d01-da5065115ea9"}}}, {"type": "BoxAnnotation", "id": "79d9c97c-7da5-400e-9567-c9c1383775e2", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "GlyphRenderer", "id": "cde27029-fb8b-4393-a93f-c886a220522b", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "c1a65835-2253-4922-af40-32c583423313"}, "nonselection_glyph": {"type": "Line", "id": "ebd3b5d2-0bc0-4d1c-9ce0-6b92ee3aab55"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "6ba2f77e-7611-475b-aaa6-35c6372d6fe8"}}}, {"type": "Line", "id": "d1174d7e-603f-40d4-93fa-5a96df91c7b4", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "y": {"field": "y"}}}, {"type": "LogTickFormatter", "id": "82e260b7-ae40-4702-9350-7e03706a585c", "attributes": {"ticker": null}}, {"type": "Line", "id": "f95325ed-a58c-43cd-8b89-d403fd57fade", "attributes": {"line_color": {"value": "red"}, "x": {"field": "x"}, "y": {"field": "y"}}}, {"type": "ResetTool", "id": "f0501c8b-2998-4897-960a-f9bda762846b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d2462483-2ec2-44a3-8d01-da5065115ea9"}}}, {"type": "LogTicker", "id": "8fbe45d2-c57e-420d-b5eb-9077f8419342", "attributes": {"num_minor_ticks": 10}}, {"type": "ColumnDataSource", "id": "fe2fda4c-a552-42ab-97cd-73d728c08c75", "attributes": {"data": {"x": [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0], "y": [0.010000000000000002, 0.25, 1.0, 2.25, 4.0, 6.25, 9.0]}, "column_names": ["x", "y"], "callback": null}}, {"type": "Circle", "id": "5b1fcfac-f624-4ac4-9dbc-79d880ccf921", "attributes": {"line_color": {"value": "red"}, "x": {"field": "x"}, "size": {"value": 6, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "red"}}}, {"type": "Circle", "id": "e80b6f18-bffc-4c74-b0c5-580b0a96b6b5", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 8, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "white"}}}, {"type": "ColumnDataSource", "id": "c1a65835-2253-4922-af40-32c583423313", "attributes": {"data": {"x": [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0], "y": [0.1, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0]}, "column_names": ["x", "y"], "callback": null}}, {"type": "LinearAxis", "id": "9d598930-50a5-467e-896b-06c229a58c5e", "attributes": {"ticker": {"type": "BasicTicker", "id": "b880acdc-1f96-47bb-a662-84a8ee882cd1"}, "formatter": {"type": "BasicTickFormatter", "id": "cb6ee774-2a5d-4883-9e4d-3c10ee15a663"}, "axis_label": "sections", "plot": {"type": "Plot", "subtype": "Figure", "id": "d2462483-2ec2-44a3-8d01-da5065115ea9"}}}, {"type": "PreviewSaveTool", "id": "e7fddb0c-7899-4674-9bd7-97cc7f21bab6", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d2462483-2ec2-44a3-8d01-da5065115ea9"}}}, {"type": "GlyphRenderer", "id": "3f8c48df-9d3b-4bfc-81f3-db14980f1211", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "fe2fda4c-a552-42ab-97cd-73d728c08c75"}, "nonselection_glyph": {"type": "Line", "id": "06e18c38-2f40-4de7-9cf4-78c5cd491ca3"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "8a08b087-0dae-4dbb-8993-f4b0ec63a437"}}}, {"type": "DataRange1d", "id": "9cb6a1ae-b75e-4946-925b-8e2facc250fc", "attributes": {"callback": null}}, {"type": "Line", "id": "ebd3b5d2-0bc0-4d1c-9ce0-6b92ee3aab55", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "y": {"field": "y"}}}, {"type": "Range1d", "id": "8d9421dc-22d9-4e88-a7e4-8e01debf9358", "attributes": {"start": 0.001, "end": 100000000000, "callback": null}}, {"type": "BoxZoomTool", "id": "9f7db1b2-8c36-4620-b54e-bc0cd1dd2ec8", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "79d9c97c-7da5-400e-9567-c9c1383775e2"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d2462483-2ec2-44a3-8d01-da5065115ea9"}}}, {"type": "PanTool", "id": "7260a2ef-a03e-4669-a86b-80464001b155", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d2462483-2ec2-44a3-8d01-da5065115ea9"}}}, {"type": "LogAxis", "id": "2f64c4c3-6c0f-4627-987b-4931c3de75e3", "attributes": {"ticker": {"type": "LogTicker", "id": "8fbe45d2-c57e-420d-b5eb-9077f8419342"}, "formatter": {"type": "LogTickFormatter", "id": "82e260b7-ae40-4702-9350-7e03706a585c"}, "axis_label": "particles", "plot": {"type": "Plot", "subtype": "Figure", "id": "d2462483-2ec2-44a3-8d01-da5065115ea9"}}}, {"type": "GlyphRenderer", "id": "099bb547-cc50-4423-98f3-eb98b2d2e041", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "90766c6b-727a-46c8-b3c1-3b409272c9a3"}, "nonselection_glyph": {"type": "Line", "id": "d1174d7e-603f-40d4-93fa-5a96df91c7b4"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "f95325ed-a58c-43cd-8b89-d403fd57fade"}}}, {"type": "BasicTickFormatter", "id": "cb6ee774-2a5d-4883-9e4d-3c10ee15a663", "attributes": {}}, {"type": "GlyphRenderer", "id": "c46a0259-ca74-43a6-ad84-38d9b7d84451", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "5e81faf5-b817-4764-94d5-e7980a1f0cda"}, "nonselection_glyph": {"type": "Line", "id": "6576d7a8-aebc-4ae0-b015-5149b20e2a13"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "b5682e54-3165-448b-9c85-909d7dbdc180"}}}, {"type": "Legend", "id": "0e93140f-df04-4a0b-88a7-a7f8ea949ba3", "attributes": {"legends": [["y=x", [{"type": "GlyphRenderer", "id": "cde27029-fb8b-4393-a93f-c886a220522b"}, {"type": "GlyphRenderer", "id": "66b17ce6-02a9-435b-a4ba-a976d68feb8a"}]], ["y=x^2", [{"type": "GlyphRenderer", "id": "3f8c48df-9d3b-4bfc-81f3-db14980f1211"}]], ["y=10^x", [{"type": "GlyphRenderer", "id": "099bb547-cc50-4423-98f3-eb98b2d2e041"}, {"type": "GlyphRenderer", "id": "18205892-88b4-4e9e-82f2-bc00665ed995"}]], ["y=10^x^2", [{"type": "GlyphRenderer", "id": "c46a0259-ca74-43a6-ad84-38d9b7d84451"}]]], "plot": {"type": "Plot", "subtype": "Figure", "id": "d2462483-2ec2-44a3-8d01-da5065115ea9"}}}, {"type": "Circle", "id": "40671d3d-b4e1-4777-8d0c-e6e2e9d09686", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 8, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}], "root_ids": ["d2462483-2ec2-44a3-8d01-da5065115ea9"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "295a5fed-72f7-43c8-848e-ea9fb9b4a278", "modelid": "d2462483-2ec2-44a3-8d01-da5065115ea9", "elementid": "ac414f2f-3315-463b-a0f3-cebaef219b40"}];
          
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