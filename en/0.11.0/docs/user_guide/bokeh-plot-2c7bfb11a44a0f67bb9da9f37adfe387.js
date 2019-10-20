
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
  };var element = document.getElementById("c37f15d0-310c-4ece-b67e-64a526507200");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c37f15d0-310c-4ece-b67e-64a526507200' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"6ad84459-6181-4295-a9d1-d619439f82f8": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "Grid", "id": "8dbf15cc-8a35-4026-b8e0-cbd6b70fc8d6", "attributes": {"ticker": {"type": "BasicTicker", "id": "38702899-2c5b-42e2-bbb8-79da9c218f61"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "a294ba14-65fb-4bb7-90f1-a2735e91be6e"}}}, {"type": "DataRange1d", "id": "41ebfb8b-ec31-4229-afe6-5fc00e2d69d8", "attributes": {"callback": null}}, {"type": "ColumnDataSource", "id": "2a39e00d-0224-4790-966d-86349acd592e", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "BasicTicker", "id": "38702899-2c5b-42e2-bbb8-79da9c218f61", "attributes": {}}, {"type": "ResetTool", "id": "fa1429d0-1ea8-403a-a751-943cc9f8c798", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a294ba14-65fb-4bb7-90f1-a2735e91be6e"}}}, {"type": "ToolEvents", "id": "e6e6b2b5-27a1-46eb-9329-fb53da179f5e", "attributes": {}}, {"type": "PrintfTickFormatter", "id": "561f0237-fa1c-40c6-8cb2-11ab3457d229", "attributes": {"format": "%5.3f mu"}}, {"type": "LinearAxis", "id": "27aa653b-d6bc-49a6-91ec-0104bbb8a568", "attributes": {"ticker": {"type": "BasicTicker", "id": "38702899-2c5b-42e2-bbb8-79da9c218f61"}, "formatter": {"type": "PrintfTickFormatter", "id": "561f0237-fa1c-40c6-8cb2-11ab3457d229"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a294ba14-65fb-4bb7-90f1-a2735e91be6e"}}}, {"type": "HelpTool", "id": "31203aba-7d6e-46f6-807e-cbeded34995c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a294ba14-65fb-4bb7-90f1-a2735e91be6e"}}}, {"type": "GlyphRenderer", "id": "066f0b11-2ba5-49cf-8a62-79db6d7e9ed3", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "2a39e00d-0224-4790-966d-86349acd592e"}, "nonselection_glyph": {"type": "Circle", "id": "a49244e5-bc7f-435d-8d4a-38042ce547e9"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "96ef72f7-9cd6-40b9-99c0-b18110a8964a"}}}, {"type": "WheelZoomTool", "id": "4ddf3716-5c1e-44e9-9ccb-cb9538ebfb0e", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a294ba14-65fb-4bb7-90f1-a2735e91be6e"}}}, {"type": "LinearAxis", "id": "fbb74bf3-10a3-4485-b7e9-93d3474474c4", "attributes": {"ticker": {"type": "BasicTicker", "id": "e5141971-1b38-42a7-abc2-050a54768811"}, "formatter": {"type": "PrintfTickFormatter", "id": "6921698e-8673-4059-b0a5-935fe6923f4a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a294ba14-65fb-4bb7-90f1-a2735e91be6e"}}}, {"type": "BasicTicker", "id": "e5141971-1b38-42a7-abc2-050a54768811", "attributes": {}}, {"type": "BoxZoomTool", "id": "b260f736-f281-4ff4-b362-5cba46178720", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "2b4a966c-110b-4297-aabc-f1ab42ac57a7"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a294ba14-65fb-4bb7-90f1-a2735e91be6e"}}}, {"type": "Circle", "id": "a49244e5-bc7f-435d-8d4a-38042ce547e9", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ResizeTool", "id": "8235412d-d49b-4ec5-a84b-ec199665b004", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a294ba14-65fb-4bb7-90f1-a2735e91be6e"}}}, {"type": "PreviewSaveTool", "id": "9e88bf92-e694-4645-b4dd-8c7e58a49d1e", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a294ba14-65fb-4bb7-90f1-a2735e91be6e"}}}, {"type": "Circle", "id": "96ef72f7-9cd6-40b9-99c0-b18110a8964a", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "PanTool", "id": "02a41e6e-ab14-4824-97a8-4eddcfd27d11", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "a294ba14-65fb-4bb7-90f1-a2735e91be6e"}}}, {"type": "Plot", "id": "a294ba14-65fb-4bb7-90f1-a2735e91be6e", "attributes": {"tools": [{"type": "PanTool", "id": "02a41e6e-ab14-4824-97a8-4eddcfd27d11"}, {"type": "WheelZoomTool", "id": "4ddf3716-5c1e-44e9-9ccb-cb9538ebfb0e"}, {"type": "BoxZoomTool", "id": "b260f736-f281-4ff4-b362-5cba46178720"}, {"type": "PreviewSaveTool", "id": "9e88bf92-e694-4645-b4dd-8c7e58a49d1e"}, {"type": "ResizeTool", "id": "8235412d-d49b-4ec5-a84b-ec199665b004"}, {"type": "ResetTool", "id": "fa1429d0-1ea8-403a-a751-943cc9f8c798"}, {"type": "HelpTool", "id": "31203aba-7d6e-46f6-807e-cbeded34995c"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "51060356-676e-4777-b91c-94728d624a10"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "fbb74bf3-10a3-4485-b7e9-93d3474474c4"}, {"type": "Grid", "id": "99abb145-1163-41d4-a38c-4f571bd9f375"}, {"type": "LinearAxis", "id": "27aa653b-d6bc-49a6-91ec-0104bbb8a568"}, {"type": "Grid", "id": "8dbf15cc-8a35-4026-b8e0-cbd6b70fc8d6"}, {"type": "BoxAnnotation", "id": "2b4a966c-110b-4297-aabc-f1ab42ac57a7"}, {"type": "GlyphRenderer", "id": "066f0b11-2ba5-49cf-8a62-79db6d7e9ed3"}], "left": [{"type": "LinearAxis", "id": "27aa653b-d6bc-49a6-91ec-0104bbb8a568"}], "below": [{"type": "LinearAxis", "id": "fbb74bf3-10a3-4485-b7e9-93d3474474c4"}], "tool_events": {"type": "ToolEvents", "id": "e6e6b2b5-27a1-46eb-9329-fb53da179f5e"}, "x_range": {"type": "DataRange1d", "id": "41ebfb8b-ec31-4229-afe6-5fc00e2d69d8"}}, "subtype": "Figure"}, {"type": "Grid", "id": "99abb145-1163-41d4-a38c-4f571bd9f375", "attributes": {"ticker": {"type": "BasicTicker", "id": "e5141971-1b38-42a7-abc2-050a54768811"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "a294ba14-65fb-4bb7-90f1-a2735e91be6e"}}}, {"type": "PrintfTickFormatter", "id": "6921698e-8673-4059-b0a5-935fe6923f4a", "attributes": {"format": "%4.1e"}}, {"type": "BoxAnnotation", "id": "2b4a966c-110b-4297-aabc-f1ab42ac57a7", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "DataRange1d", "id": "51060356-676e-4777-b91c-94728d624a10", "attributes": {"callback": null}}], "root_ids": ["a294ba14-65fb-4bb7-90f1-a2735e91be6e"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "6ad84459-6181-4295-a9d1-d619439f82f8", "modelid": "a294ba14-65fb-4bb7-90f1-a2735e91be6e", "elementid": "c37f15d0-310c-4ece-b67e-64a526507200"}];
          
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