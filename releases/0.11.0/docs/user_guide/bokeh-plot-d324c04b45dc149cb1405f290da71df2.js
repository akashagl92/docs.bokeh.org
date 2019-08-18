
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
  };var element = document.getElementById("64a5d734-c5f5-493a-973b-d8430d301d0b");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '64a5d734-c5f5-493a-973b-d8430d301d0b' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"553fed77-6f59-48f5-909f-4772ed7e47ea": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "CategoricalTickFormatter", "id": "a7360d2a-ac30-46a2-a30f-5891bccf7aab", "attributes": {}}, {"type": "Grid", "id": "51a2f192-7589-46eb-912c-773e0a839988", "attributes": {"ticker": {"type": "BasicTicker", "id": "652036e9-64bf-4f84-b291-1a20abdc50e5"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Chart", "id": "67374da4-f87c-45ef-ab15-dd9c5b94e198"}}}, {"type": "ColumnDataSource", "id": "c8ef232c-bb45-4e6e-895a-7535e82e17dc", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["white"], "cyl": [6], "y": [828.9], "width": [0.8], "height": [1657.8], "x": ["6"], "line_alpha": [1.0], "chart_index": [{"cyl": 6}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "CategoricalTicker", "id": "edb788f7-1e1e-48ea-96a2-98d293704507", "attributes": {}}, {"type": "WheelZoomTool", "id": "1bfc91c1-2b4f-484a-a3e2-bc4870cd4b5b", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "67374da4-f87c-45ef-ab15-dd9c5b94e198"}}}, {"type": "ColumnDataSource", "id": "b59dbd67-f6f9-4941-9d10-618cfbaa2f17", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["white"], "cyl": [8], "y": [770.5999999999999], "width": [0.8], "height": [1541.1999999999998], "x": ["8"], "line_alpha": [1.0], "chart_index": [{"cyl": 8}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "Rect", "id": "446bbc70-1d13-4d78-b3b5-289fd9ed9fe5", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "GlyphRenderer", "id": "0a1e4608-d6a3-469d-bf1b-a46b027ada95", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "aeff0677-1932-4932-a2cd-0a86969e66c5"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "180ba7da-3d77-401a-9ef9-ad25a9cd56d4"}}}, {"type": "ColumnDataSource", "id": "a47eea7a-6562-49ab-9ea2-2fffb9c7d9d5", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["white"], "cyl": [3], "y": [41.1], "width": [0.8], "height": [82.2], "x": ["3"], "line_alpha": [1.0], "chart_index": [{"cyl": 3}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "Rect", "id": "572e3bf9-b333-4b1b-8630-f9a6b30c5433", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "Rect", "id": "b7231254-7a77-41a2-b12d-b2aef4e9ba9f", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "ToolEvents", "id": "d11ff95d-35f0-4af1-82f9-422b92d0772e", "attributes": {}}, {"type": "ColumnDataSource", "id": "aeff0677-1932-4932-a2cd-0a86969e66c5", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["white"], "cyl": [4], "y": [2913.75], "width": [0.8], "height": [5827.5], "x": ["4"], "line_alpha": [1.0], "chart_index": [{"cyl": 4}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "BoxAnnotation", "id": "26661280-b31b-416b-abe2-2195b62a1caf", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "652036e9-64bf-4f84-b291-1a20abdc50e5", "attributes": {}}, {"type": "BoxZoomTool", "id": "18830842-16d6-4099-85b6-059f9c5be3cb", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "26661280-b31b-416b-abe2-2195b62a1caf"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "67374da4-f87c-45ef-ab15-dd9c5b94e198"}}}, {"type": "Range1d", "id": "a1fe4ac2-0f4f-43d5-943c-eb88906f235a", "attributes": {"end": 6118.875, "callback": null}}, {"type": "CategoricalAxis", "id": "2578022e-8be1-4f7d-a29b-314883a31c74", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "edb788f7-1e1e-48ea-96a2-98d293704507"}, "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "a7360d2a-ac30-46a2-a30f-5891bccf7aab"}, "axis_label": "Cyl", "plot": {"type": "Plot", "subtype": "Chart", "id": "67374da4-f87c-45ef-ab15-dd9c5b94e198"}}}, {"type": "Plot", "id": "67374da4-f87c-45ef-ab15-dd9c5b94e198", "attributes": {"y_range": {"type": "Range1d", "id": "a1fe4ac2-0f4f-43d5-943c-eb88906f235a"}, "width": 400, "legend": null, "yscale": "auto", "tools": [{"type": "PanTool", "id": "4cd5ead2-d63e-4a55-aea2-08677fe100c6"}, {"type": "WheelZoomTool", "id": "1bfc91c1-2b4f-484a-a3e2-bc4870cd4b5b"}, {"type": "BoxZoomTool", "id": "18830842-16d6-4099-85b6-059f9c5be3cb"}, {"type": "PreviewSaveTool", "id": "00bf0d59-4b12-4e6a-b59c-69d8f3906083"}, {"type": "ResizeTool", "id": "9055bfb9-e527-4871-95e7-5ab92160b77f"}, {"type": "ResetTool", "id": "4963d540-a284-4d0f-bda3-a99486ce3eb4"}, {"type": "HelpTool", "id": "f57c53bc-7f5b-452f-879f-1cdd3cd83162"}], "xgrid": false, "title": "Total MPG by CYL", "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "fa0c6890-02a6-4252-b408-000f7f309246"}], "x_range": {"type": "FactorRange", "id": "60b37dc3-6d08-4418-a808-8ca372012864"}, "y_mapper_type": "auto", "xscale": "auto", "below": [{"type": "CategoricalAxis", "id": "2578022e-8be1-4f7d-a29b-314883a31c74"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "d11ff95d-35f0-4af1-82f9-422b92d0772e"}, "renderers": [{"type": "BoxAnnotation", "id": "26661280-b31b-416b-abe2-2195b62a1caf"}, {"type": "GlyphRenderer", "id": "26834b76-4f66-4eff-822b-33581135a7af"}, {"type": "GlyphRenderer", "id": "0a1e4608-d6a3-469d-bf1b-a46b027ada95"}, {"type": "GlyphRenderer", "id": "143f2fcd-c863-4282-a1ec-3de7c77ffc8d"}, {"type": "GlyphRenderer", "id": "957395bc-c794-4e45-b5c7-e0fd30a513c0"}, {"type": "GlyphRenderer", "id": "282dbb70-3b20-4850-b99c-3d37af919c51"}, {"type": "CategoricalAxis", "id": "2578022e-8be1-4f7d-a29b-314883a31c74"}, {"type": "LinearAxis", "id": "fa0c6890-02a6-4252-b408-000f7f309246"}, {"type": "Grid", "id": "51a2f192-7589-46eb-912c-773e0a839988"}]}, "subtype": "Chart"}, {"type": "BasicTickFormatter", "id": "c4743403-03cd-4bb6-a3c0-bad1098c9441", "attributes": {}}, {"type": "FactorRange", "id": "60b37dc3-6d08-4418-a808-8ca372012864", "attributes": {"factors": ["3", "4", "5", "6", "8"], "callback": null}}, {"type": "GlyphRenderer", "id": "957395bc-c794-4e45-b5c7-e0fd30a513c0", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "c8ef232c-bb45-4e6e-895a-7535e82e17dc"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "c9a1c778-d3dd-41aa-bcdf-7e53d7aea163"}}}, {"type": "GlyphRenderer", "id": "143f2fcd-c863-4282-a1ec-3de7c77ffc8d", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "5ab92869-16ad-4520-995e-7ead1ca46c17"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "572e3bf9-b333-4b1b-8630-f9a6b30c5433"}}}, {"type": "ResizeTool", "id": "9055bfb9-e527-4871-95e7-5ab92160b77f", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "67374da4-f87c-45ef-ab15-dd9c5b94e198"}}}, {"type": "HelpTool", "id": "f57c53bc-7f5b-452f-879f-1cdd3cd83162", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "67374da4-f87c-45ef-ab15-dd9c5b94e198"}}}, {"type": "Rect", "id": "c9a1c778-d3dd-41aa-bcdf-7e53d7aea163", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "PanTool", "id": "4cd5ead2-d63e-4a55-aea2-08677fe100c6", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "67374da4-f87c-45ef-ab15-dd9c5b94e198"}}}, {"type": "ColumnDataSource", "id": "5ab92869-16ad-4520-995e-7ead1ca46c17", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["white"], "cyl": [5], "y": [41.05], "width": [0.8], "height": [82.1], "x": ["5"], "line_alpha": [1.0], "chart_index": [{"cyl": 5}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "ResetTool", "id": "4963d540-a284-4d0f-bda3-a99486ce3eb4", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "67374da4-f87c-45ef-ab15-dd9c5b94e198"}}}, {"type": "LinearAxis", "id": "fa0c6890-02a6-4252-b408-000f7f309246", "attributes": {"ticker": {"type": "BasicTicker", "id": "652036e9-64bf-4f84-b291-1a20abdc50e5"}, "formatter": {"type": "BasicTickFormatter", "id": "c4743403-03cd-4bb6-a3c0-bad1098c9441"}, "axis_label": "Sum( Mpg )", "plot": {"type": "Plot", "subtype": "Chart", "id": "67374da4-f87c-45ef-ab15-dd9c5b94e198"}}}, {"type": "Rect", "id": "180ba7da-3d77-401a-9ef9-ad25a9cd56d4", "attributes": {"line_color": {"field": "line_color"}, "width": {"units": "data", "field": "width"}, "y": {"field": "y"}, "height": {"units": "data", "field": "height"}, "x": {"field": "x"}, "fill_color": {"field": "color"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "PreviewSaveTool", "id": "00bf0d59-4b12-4e6a-b59c-69d8f3906083", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "67374da4-f87c-45ef-ab15-dd9c5b94e198"}}}, {"type": "GlyphRenderer", "id": "26834b76-4f66-4eff-822b-33581135a7af", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "a47eea7a-6562-49ab-9ea2-2fffb9c7d9d5"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "446bbc70-1d13-4d78-b3b5-289fd9ed9fe5"}}}, {"type": "GlyphRenderer", "id": "282dbb70-3b20-4850-b99c-3d37af919c51", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "b59dbd67-f6f9-4941-9d10-618cfbaa2f17"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "b7231254-7a77-41a2-b12d-b2aef4e9ba9f"}}}], "root_ids": ["67374da4-f87c-45ef-ab15-dd9c5b94e198"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "553fed77-6f59-48f5-909f-4772ed7e47ea", "modelid": "67374da4-f87c-45ef-ab15-dd9c5b94e198", "elementid": "64a5d734-c5f5-493a-973b-d8430d301d0b"}];
          
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