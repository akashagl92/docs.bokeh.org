
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
  };var element = document.getElementById("ad97bc18-1dd5-47cf-aa62-76040a2442dd");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ad97bc18-1dd5-47cf-aa62-76040a2442dd' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"ea395a2a-28ca-41e6-b21b-377826473e4d": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "PreviewSaveTool", "id": "5e7e57bb-625e-4d3c-8a5c-a5c196eb9dff", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "529c7775-5601-424a-8698-4704db9fed94"}}}, {"type": "BasicTickFormatter", "id": "f004f3f4-0c39-4d7b-aedc-598460cc4791", "attributes": {}}, {"type": "BoxZoomTool", "id": "8c221224-6b9b-47c0-934c-0b735114af05", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "febf3356-0b36-43de-bb64-fb73ee39f8c6"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "529c7775-5601-424a-8698-4704db9fed94"}}}, {"type": "ResizeTool", "id": "1a956fd9-38af-4ab9-a7c4-0d1a133c7df8", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "529c7775-5601-424a-8698-4704db9fed94"}}}, {"type": "ColumnDataSource", "id": "c58e1568-4b1d-4030-8f2f-8160ec53c149", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["x", "y"], "callback": null}}, {"type": "Annulus", "id": "884117c8-70c9-4876-8b7d-a15a46d64fba", "attributes": {"line_color": {"value": "#7FC97F"}, "outer_radius": {"value": 0.5, "units": "data"}, "y": {"field": "y"}, "x": {"field": "x"}, "inner_radius": {"value": 0.2, "units": "data"}, "fill_color": {"value": "#7FC97F"}}}, {"type": "BasicTickFormatter", "id": "afdb567f-3a52-423f-9803-051db86b329a", "attributes": {}}, {"type": "BasicTicker", "id": "739bb929-aee4-45e6-a082-250913d70085", "attributes": {}}, {"type": "Annulus", "id": "42cb4bcf-afaf-4435-8a6d-f92595a8d2dd", "attributes": {"line_color": {"value": "#1f77b4"}, "outer_radius": {"value": 0.5, "units": "data"}, "y": {"field": "y"}, "x": {"field": "x"}, "fill_alpha": {"value": 0.1}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "inner_radius": {"value": 0.2, "units": "data"}}}, {"type": "ResetTool", "id": "f2be089d-a965-43a4-9664-eb457a8b2668", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "529c7775-5601-424a-8698-4704db9fed94"}}}, {"type": "LinearAxis", "id": "58e82182-1859-4745-8ba1-cfcada0c9bec", "attributes": {"ticker": {"type": "BasicTicker", "id": "e165b94e-ecff-48ca-8634-f270b22702be"}, "formatter": {"type": "BasicTickFormatter", "id": "f004f3f4-0c39-4d7b-aedc-598460cc4791"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "529c7775-5601-424a-8698-4704db9fed94"}}}, {"type": "LinearAxis", "id": "0b20ccdf-50f6-4d64-9f04-7f8785e4d988", "attributes": {"ticker": {"type": "BasicTicker", "id": "739bb929-aee4-45e6-a082-250913d70085"}, "formatter": {"type": "BasicTickFormatter", "id": "afdb567f-3a52-423f-9803-051db86b329a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "529c7775-5601-424a-8698-4704db9fed94"}}}, {"type": "Plot", "id": "529c7775-5601-424a-8698-4704db9fed94", "attributes": {"tools": [{"type": "PanTool", "id": "fa3fb570-0d57-443e-a14f-ff9e848663c2"}, {"type": "WheelZoomTool", "id": "83bbafda-fa9d-4ea4-8cee-5a89aee56c3b"}, {"type": "BoxZoomTool", "id": "8c221224-6b9b-47c0-934c-0b735114af05"}, {"type": "PreviewSaveTool", "id": "5e7e57bb-625e-4d3c-8a5c-a5c196eb9dff"}, {"type": "ResizeTool", "id": "1a956fd9-38af-4ab9-a7c4-0d1a133c7df8"}, {"type": "ResetTool", "id": "f2be089d-a965-43a4-9664-eb457a8b2668"}, {"type": "HelpTool", "id": "ed05e727-92da-4a8f-bfb8-338936b6cb2a"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "ad986e42-b82d-4957-8c3c-097018c51036"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "0b20ccdf-50f6-4d64-9f04-7f8785e4d988"}, {"type": "Grid", "id": "349ac749-a87a-42e0-8bf1-fba3ab66d181"}, {"type": "LinearAxis", "id": "58e82182-1859-4745-8ba1-cfcada0c9bec"}, {"type": "Grid", "id": "66642cfb-4f16-4626-b554-8ecad2a6db28"}, {"type": "BoxAnnotation", "id": "febf3356-0b36-43de-bb64-fb73ee39f8c6"}, {"type": "GlyphRenderer", "id": "18325db2-de44-4888-a9e7-74b9108ab617"}], "left": [{"type": "LinearAxis", "id": "58e82182-1859-4745-8ba1-cfcada0c9bec"}], "below": [{"type": "LinearAxis", "id": "0b20ccdf-50f6-4d64-9f04-7f8785e4d988"}], "tool_events": {"type": "ToolEvents", "id": "d8b80291-15d4-4cca-a67b-8c1940c46ff2"}, "x_range": {"type": "DataRange1d", "id": "307824e1-c7c0-44f3-a92f-be002d75ded8"}}, "subtype": "Figure"}, {"type": "Grid", "id": "349ac749-a87a-42e0-8bf1-fba3ab66d181", "attributes": {"ticker": {"type": "BasicTicker", "id": "739bb929-aee4-45e6-a082-250913d70085"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "529c7775-5601-424a-8698-4704db9fed94"}}}, {"type": "BasicTicker", "id": "e165b94e-ecff-48ca-8634-f270b22702be", "attributes": {}}, {"type": "GlyphRenderer", "id": "18325db2-de44-4888-a9e7-74b9108ab617", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "c58e1568-4b1d-4030-8f2f-8160ec53c149"}, "nonselection_glyph": {"type": "Annulus", "id": "42cb4bcf-afaf-4435-8a6d-f92595a8d2dd"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Annulus", "id": "884117c8-70c9-4876-8b7d-a15a46d64fba"}}}, {"type": "Grid", "id": "66642cfb-4f16-4626-b554-8ecad2a6db28", "attributes": {"ticker": {"type": "BasicTicker", "id": "e165b94e-ecff-48ca-8634-f270b22702be"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "529c7775-5601-424a-8698-4704db9fed94"}}}, {"type": "ToolEvents", "id": "d8b80291-15d4-4cca-a67b-8c1940c46ff2", "attributes": {}}, {"type": "PanTool", "id": "fa3fb570-0d57-443e-a14f-ff9e848663c2", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "529c7775-5601-424a-8698-4704db9fed94"}}}, {"type": "DataRange1d", "id": "ad986e42-b82d-4957-8c3c-097018c51036", "attributes": {"callback": null}}, {"type": "HelpTool", "id": "ed05e727-92da-4a8f-bfb8-338936b6cb2a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "529c7775-5601-424a-8698-4704db9fed94"}}}, {"type": "BoxAnnotation", "id": "febf3356-0b36-43de-bb64-fb73ee39f8c6", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "DataRange1d", "id": "307824e1-c7c0-44f3-a92f-be002d75ded8", "attributes": {"callback": null}}, {"type": "WheelZoomTool", "id": "83bbafda-fa9d-4ea4-8cee-5a89aee56c3b", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "529c7775-5601-424a-8698-4704db9fed94"}}}], "root_ids": ["529c7775-5601-424a-8698-4704db9fed94"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "ea395a2a-28ca-41e6-b21b-377826473e4d", "modelid": "529c7775-5601-424a-8698-4704db9fed94", "elementid": "ad97bc18-1dd5-47cf-aa62-76040a2442dd"}];
          
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