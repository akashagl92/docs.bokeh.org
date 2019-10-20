
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
  };var element = document.getElementById("1e61678e-42fe-44af-a633-ef29ee2611de");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1e61678e-42fe-44af-a633-ef29ee2611de' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"3d518e96-4810-42f5-b961-c643fe259331": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "WheelZoomTool", "id": "69e6297b-bcd6-40b4-be7c-fb8696a2ae38", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "146bcda4-42d8-44ca-9f4c-bb9ae9a071d1"}}}, {"type": "Grid", "id": "81da2816-25bd-4b8d-8e97-12e1531752f1", "attributes": {"ticker": {"type": "BasicTicker", "id": "69a6b22a-444b-4204-8a6d-dda937c78826"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "146bcda4-42d8-44ca-9f4c-bb9ae9a071d1"}}}, {"type": "LinearAxis", "id": "65b3b8d0-5038-4e43-be60-f118da7305fb", "attributes": {"ticker": {"type": "BasicTicker", "id": "f77e1d24-1237-4282-8a0c-44d1ef0dc75f"}, "formatter": {"type": "BasicTickFormatter", "id": "3897bbb5-eb6f-4777-9f4b-bfac6bb0ddac"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "146bcda4-42d8-44ca-9f4c-bb9ae9a071d1"}}}, {"type": "BasicTicker", "id": "6ac6dd22-f9d0-45f6-bea1-fd7194063b7d", "attributes": {}}, {"type": "PreviewSaveTool", "id": "d48f82bc-81d9-4e5f-b73a-946166586d32", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "146bcda4-42d8-44ca-9f4c-bb9ae9a071d1"}}}, {"type": "Plot", "id": "2b9a00e2-c622-4cf2-90d1-015f331b8a02", "attributes": {"tools": [{"type": "PanTool", "id": "6ec50183-6064-4dd4-8019-3b2b54b5d280"}, {"type": "WheelZoomTool", "id": "9c4e8a9a-fed1-43e7-8609-f6959e81d033"}, {"type": "BoxZoomTool", "id": "14bccceb-e8ca-4f1e-a3b3-956de01dfb17"}, {"type": "PreviewSaveTool", "id": "a8ff3da4-8046-4802-bf35-13a3d67ae6b6"}, {"type": "ResizeTool", "id": "6aaa7d00-861e-4684-8f92-e8c7bf1f56c5"}, {"type": "ResetTool", "id": "84d3049a-cca7-4f8b-8635-5569c602de83"}, {"type": "HelpTool", "id": "8a7558c9-8ba5-4c94-95eb-4b9a716ec06d"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "cd760a00-5ae0-4d0c-909d-f133f5c58370"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "c424f416-9e30-407e-93ee-1d125c026bb2"}, {"type": "Grid", "id": "b7d7485c-130f-40c0-a067-616ac8549b37"}, {"type": "LinearAxis", "id": "9746a176-e703-4323-9004-5aff55b93bda"}, {"type": "Grid", "id": "411a6b1a-7044-4a9f-a6ca-42c5d62e3713"}, {"type": "BoxAnnotation", "id": "33c14052-0a35-436c-9087-0e540e6639e6"}, {"type": "GlyphRenderer", "id": "2839cd25-2a39-4ac1-ab03-9b09e3aac708"}], "left": [{"type": "LinearAxis", "id": "9746a176-e703-4323-9004-5aff55b93bda"}], "below": [{"type": "LinearAxis", "id": "c424f416-9e30-407e-93ee-1d125c026bb2"}], "tool_events": {"type": "ToolEvents", "id": "89cdb91c-8f2a-4d19-8f45-c6f757e3de8b"}, "x_range": {"type": "DataRange1d", "id": "490d98c2-43d1-40a0-b4aa-6cb27d7825e6"}}, "subtype": "Figure"}, {"type": "Grid", "id": "027fde1b-5039-444b-bfe1-66c47e9be847", "attributes": {"ticker": {"type": "BasicTicker", "id": "f77e1d24-1237-4282-8a0c-44d1ef0dc75f"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "146bcda4-42d8-44ca-9f4c-bb9ae9a071d1"}}}, {"type": "BasicTicker", "id": "69a6b22a-444b-4204-8a6d-dda937c78826", "attributes": {}}, {"type": "ResizeTool", "id": "6aaa7d00-861e-4684-8f92-e8c7bf1f56c5", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2b9a00e2-c622-4cf2-90d1-015f331b8a02"}}}, {"type": "BasicTickFormatter", "id": "3897bbb5-eb6f-4777-9f4b-bfac6bb0ddac", "attributes": {}}, {"type": "PanTool", "id": "6ec50183-6064-4dd4-8019-3b2b54b5d280", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2b9a00e2-c622-4cf2-90d1-015f331b8a02"}}}, {"type": "ColumnDataSource", "id": "8db802bf-c4e1-4680-95f4-31d4b65eb519", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [6, 7, 2, 4, 5]}, "column_names": ["x", "y"], "callback": null}}, {"type": "DataRange1d", "id": "490d98c2-43d1-40a0-b4aa-6cb27d7825e6", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "84c5a0d1-af54-4460-b1ce-7ec4abdc6926", "attributes": {}}, {"type": "BasicTicker", "id": "f77e1d24-1237-4282-8a0c-44d1ef0dc75f", "attributes": {}}, {"type": "PreviewSaveTool", "id": "a8ff3da4-8046-4802-bf35-13a3d67ae6b6", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2b9a00e2-c622-4cf2-90d1-015f331b8a02"}}}, {"type": "BasicTickFormatter", "id": "fc99b37e-ef98-4bba-8882-45a1d6487b53", "attributes": {}}, {"type": "Line", "id": "87f181dd-56df-473e-ac2a-9255b474ba09", "attributes": {"line_color": {"value": "navy"}, "line_width": {"value": 3}, "x": {"field": "x"}, "line_alpha": {"value": 0.5}, "y": {"field": "y"}}}, {"type": "DataRange1d", "id": "cd760a00-5ae0-4d0c-909d-f133f5c58370", "attributes": {"callback": null}}, {"type": "Line", "id": "de8816ad-c76c-4a13-bce8-07be1f071958", "attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 3}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "y": {"field": "y"}}}, {"type": "DataRange1d", "id": "e31872d9-e2c4-47f5-bc07-05ee96388879", "attributes": {"callback": null}}, {"type": "Grid", "id": "b7d7485c-130f-40c0-a067-616ac8549b37", "attributes": {"ticker": {"type": "BasicTicker", "id": "6ac6dd22-f9d0-45f6-bea1-fd7194063b7d"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "2b9a00e2-c622-4cf2-90d1-015f331b8a02"}}}, {"type": "BoxZoomTool", "id": "14bccceb-e8ca-4f1e-a3b3-956de01dfb17", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "33c14052-0a35-436c-9087-0e540e6639e6"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "2b9a00e2-c622-4cf2-90d1-015f331b8a02"}}}, {"type": "HelpTool", "id": "eccdb973-6179-4443-8807-e19d3c97ff19", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "146bcda4-42d8-44ca-9f4c-bb9ae9a071d1"}}}, {"type": "BoxZoomTool", "id": "68217161-02ea-497c-9ee2-79046524fc07", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "d0a04461-c6c3-47a2-bfb1-9cdf969ff3a2"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "146bcda4-42d8-44ca-9f4c-bb9ae9a071d1"}}}, {"type": "Tabs", "id": "41935ec6-4ccb-47d3-9bdb-006f79c4b1cc", "attributes": {"callback": null, "tabs": [{"type": "Panel", "id": "ec39f704-9aeb-4964-9105-4e192cd57750"}, {"type": "Panel", "id": "150fa513-9163-4bb1-9500-c6214d369ed4"}]}}, {"type": "Panel", "id": "150fa513-9163-4bb1-9500-c6214d369ed4", "attributes": {"child": {"type": "Plot", "subtype": "Figure", "id": "146bcda4-42d8-44ca-9f4c-bb9ae9a071d1"}, "title": "line"}}, {"type": "Grid", "id": "411a6b1a-7044-4a9f-a6ca-42c5d62e3713", "attributes": {"ticker": {"type": "BasicTicker", "id": "2b20f533-47ca-443a-a3e3-c32baa39e06e"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "2b9a00e2-c622-4cf2-90d1-015f331b8a02"}}}, {"type": "WheelZoomTool", "id": "9c4e8a9a-fed1-43e7-8609-f6959e81d033", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2b9a00e2-c622-4cf2-90d1-015f331b8a02"}}}, {"type": "Plot", "id": "146bcda4-42d8-44ca-9f4c-bb9ae9a071d1", "attributes": {"tools": [{"type": "PanTool", "id": "0d50c30d-c0cb-4f43-b0c8-0d523c8ebf5f"}, {"type": "WheelZoomTool", "id": "69e6297b-bcd6-40b4-be7c-fb8696a2ae38"}, {"type": "BoxZoomTool", "id": "68217161-02ea-497c-9ee2-79046524fc07"}, {"type": "PreviewSaveTool", "id": "d48f82bc-81d9-4e5f-b73a-946166586d32"}, {"type": "ResizeTool", "id": "e1a5f8f8-1ae8-40dd-b202-f6450ce24428"}, {"type": "ResetTool", "id": "a3d96b2b-fab6-4827-b536-dcdcff85eac1"}, {"type": "HelpTool", "id": "eccdb973-6179-4443-8807-e19d3c97ff19"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "c663a41c-7acc-4bee-b9e9-4a3178a6751c"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "65b3b8d0-5038-4e43-be60-f118da7305fb"}, {"type": "Grid", "id": "027fde1b-5039-444b-bfe1-66c47e9be847"}, {"type": "LinearAxis", "id": "c4f80095-86dd-4be1-8a45-8c9b942614b4"}, {"type": "Grid", "id": "81da2816-25bd-4b8d-8e97-12e1531752f1"}, {"type": "BoxAnnotation", "id": "d0a04461-c6c3-47a2-bfb1-9cdf969ff3a2"}, {"type": "GlyphRenderer", "id": "4cf37163-b61d-4ba5-b3ad-5a42656cc8b7"}], "left": [{"type": "LinearAxis", "id": "c4f80095-86dd-4be1-8a45-8c9b942614b4"}], "below": [{"type": "LinearAxis", "id": "65b3b8d0-5038-4e43-be60-f118da7305fb"}], "tool_events": {"type": "ToolEvents", "id": "d23c1364-ece0-455d-9551-a66d6dc1b3cd"}, "x_range": {"type": "DataRange1d", "id": "e31872d9-e2c4-47f5-bc07-05ee96388879"}}, "subtype": "Figure"}, {"type": "Circle", "id": "d13ed5fb-470f-44f7-bb86-2e5f45fdd99d", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ToolEvents", "id": "d23c1364-ece0-455d-9551-a66d6dc1b3cd", "attributes": {}}, {"type": "BoxAnnotation", "id": "d0a04461-c6c3-47a2-bfb1-9cdf969ff3a2", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ResetTool", "id": "a3d96b2b-fab6-4827-b536-dcdcff85eac1", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "146bcda4-42d8-44ca-9f4c-bb9ae9a071d1"}}}, {"type": "GlyphRenderer", "id": "4cf37163-b61d-4ba5-b3ad-5a42656cc8b7", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "8db802bf-c4e1-4680-95f4-31d4b65eb519"}, "nonselection_glyph": {"type": "Line", "id": "de8816ad-c76c-4a13-bce8-07be1f071958"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Line", "id": "87f181dd-56df-473e-ac2a-9255b474ba09"}}}, {"type": "ToolEvents", "id": "89cdb91c-8f2a-4d19-8f45-c6f757e3de8b", "attributes": {}}, {"type": "ColumnDataSource", "id": "a92c2fd6-cf6e-449b-b514-ebd9f47491ca", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [6, 7, 2, 4, 5]}, "column_names": ["x", "y"], "callback": null}}, {"type": "Panel", "id": "ec39f704-9aeb-4964-9105-4e192cd57750", "attributes": {"child": {"type": "Plot", "subtype": "Figure", "id": "2b9a00e2-c622-4cf2-90d1-015f331b8a02"}, "title": "circle"}}, {"type": "ResizeTool", "id": "e1a5f8f8-1ae8-40dd-b202-f6450ce24428", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "146bcda4-42d8-44ca-9f4c-bb9ae9a071d1"}}}, {"type": "ResetTool", "id": "84d3049a-cca7-4f8b-8635-5569c602de83", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2b9a00e2-c622-4cf2-90d1-015f331b8a02"}}}, {"type": "LinearAxis", "id": "c4f80095-86dd-4be1-8a45-8c9b942614b4", "attributes": {"ticker": {"type": "BasicTicker", "id": "69a6b22a-444b-4204-8a6d-dda937c78826"}, "formatter": {"type": "BasicTickFormatter", "id": "84c5a0d1-af54-4460-b1ce-7ec4abdc6926"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "146bcda4-42d8-44ca-9f4c-bb9ae9a071d1"}}}, {"type": "PanTool", "id": "0d50c30d-c0cb-4f43-b0c8-0d523c8ebf5f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "146bcda4-42d8-44ca-9f4c-bb9ae9a071d1"}}}, {"type": "HelpTool", "id": "8a7558c9-8ba5-4c94-95eb-4b9a716ec06d", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "2b9a00e2-c622-4cf2-90d1-015f331b8a02"}}}, {"type": "BasicTickFormatter", "id": "a282b6dd-48bf-4ef5-b0e9-697fb4efbad2", "attributes": {}}, {"type": "GlyphRenderer", "id": "2839cd25-2a39-4ac1-ab03-9b09e3aac708", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "a92c2fd6-cf6e-449b-b514-ebd9f47491ca"}, "nonselection_glyph": {"type": "Circle", "id": "d13ed5fb-470f-44f7-bb86-2e5f45fdd99d"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "b3ffcc47-76de-4b6b-bc77-8a2714a470a1"}}}, {"type": "LinearAxis", "id": "c424f416-9e30-407e-93ee-1d125c026bb2", "attributes": {"ticker": {"type": "BasicTicker", "id": "6ac6dd22-f9d0-45f6-bea1-fd7194063b7d"}, "formatter": {"type": "BasicTickFormatter", "id": "fc99b37e-ef98-4bba-8882-45a1d6487b53"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "2b9a00e2-c622-4cf2-90d1-015f331b8a02"}}}, {"type": "BoxAnnotation", "id": "33c14052-0a35-436c-9087-0e540e6639e6", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "2b20f533-47ca-443a-a3e3-c32baa39e06e", "attributes": {}}, {"type": "LinearAxis", "id": "9746a176-e703-4323-9004-5aff55b93bda", "attributes": {"ticker": {"type": "BasicTicker", "id": "2b20f533-47ca-443a-a3e3-c32baa39e06e"}, "formatter": {"type": "BasicTickFormatter", "id": "a282b6dd-48bf-4ef5-b0e9-697fb4efbad2"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "2b9a00e2-c622-4cf2-90d1-015f331b8a02"}}}, {"type": "Circle", "id": "b3ffcc47-76de-4b6b-bc77-8a2714a470a1", "attributes": {"line_color": {"value": "navy"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.5}, "fill_color": {"value": "navy"}, "fill_alpha": {"value": 0.5}}}, {"type": "DataRange1d", "id": "c663a41c-7acc-4bee-b9e9-4a3178a6751c", "attributes": {"callback": null}}], "root_ids": ["2b9a00e2-c622-4cf2-90d1-015f331b8a02", "146bcda4-42d8-44ca-9f4c-bb9ae9a071d1", "41935ec6-4ccb-47d3-9bdb-006f79c4b1cc"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "3d518e96-4810-42f5-b961-c643fe259331", "modelid": "41935ec6-4ccb-47d3-9bdb-006f79c4b1cc", "elementid": "1e61678e-42fe-44af-a633-ef29ee2611de"}];
          
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