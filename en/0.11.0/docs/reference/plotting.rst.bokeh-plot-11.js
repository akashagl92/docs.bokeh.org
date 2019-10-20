
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
  };var element = document.getElementById("8826cb72-1e3c-4db0-9587-82d95d9a1b9c");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8826cb72-1e3c-4db0-9587-82d95d9a1b9c' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"6135cc71-96c2-47af-bcd1-4a7030c33eca": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ColumnDataSource", "id": "84176742-a7c7-419e-beae-d83635b03e33", "attributes": {"data": {"x": [1, 2, 3], "y": [1, 2, 3]}, "column_names": ["y", "x"], "callback": null}}, {"type": "BasicTicker", "id": "cf7ff34b-ff4b-42e8-aae6-896361cd20bb", "attributes": {}}, {"type": "HelpTool", "id": "aaa74f17-193f-4941-a6fa-97eb0ee7f403", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3f78e4ec-057a-4f75-a026-ce47602af5b6"}}}, {"type": "WheelZoomTool", "id": "b1b161ab-220e-4559-8d61-d40ca6e63164", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3f78e4ec-057a-4f75-a026-ce47602af5b6"}}}, {"type": "PanTool", "id": "b0359ab1-5d10-492e-9857-2356180978ed", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3f78e4ec-057a-4f75-a026-ce47602af5b6"}}}, {"type": "BoxZoomTool", "id": "e4a4c84e-884e-4103-b0ea-88af01a5533b", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "df36edf4-bc7f-4fd1-9132-6e8760edea59"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "3f78e4ec-057a-4f75-a026-ce47602af5b6"}}}, {"type": "DataRange1d", "id": "fb6f16ae-2f6b-457a-8de7-e486520f2705", "attributes": {"callback": null}}, {"type": "BoxAnnotation", "id": "df36edf4-bc7f-4fd1-9132-6e8760edea59", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "DataRange1d", "id": "535689a9-b0bb-4614-8175-9e843eb73373", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "d8c84235-df25-4aed-90ac-79404a2d98da", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "84176742-a7c7-419e-beae-d83635b03e33"}, "nonselection_glyph": {"type": "Oval", "id": "f6f670d7-71b9-4022-9750-fb9437dfe006"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Oval", "id": "23c1a7c9-9aae-4035-b71e-fa9d48276eb2"}}}, {"type": "ResizeTool", "id": "b2f0399c-cfb4-45f3-adae-9c47f6780441", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3f78e4ec-057a-4f75-a026-ce47602af5b6"}}}, {"type": "BasicTicker", "id": "26bfb511-b918-4e5b-b58e-64d05f9dff92", "attributes": {}}, {"type": "LinearAxis", "id": "66bc8deb-bcd8-4ac5-848b-577ac6203de7", "attributes": {"ticker": {"type": "BasicTicker", "id": "cf7ff34b-ff4b-42e8-aae6-896361cd20bb"}, "formatter": {"type": "BasicTickFormatter", "id": "9941d873-a065-43ba-9bba-1f0e6c15ba57"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "3f78e4ec-057a-4f75-a026-ce47602af5b6"}}}, {"type": "Plot", "id": "3f78e4ec-057a-4f75-a026-ce47602af5b6", "attributes": {"tools": [{"type": "PanTool", "id": "b0359ab1-5d10-492e-9857-2356180978ed"}, {"type": "WheelZoomTool", "id": "b1b161ab-220e-4559-8d61-d40ca6e63164"}, {"type": "BoxZoomTool", "id": "e4a4c84e-884e-4103-b0ea-88af01a5533b"}, {"type": "PreviewSaveTool", "id": "f37ab8d8-013e-45c9-8161-a3635cb84da9"}, {"type": "ResizeTool", "id": "b2f0399c-cfb4-45f3-adae-9c47f6780441"}, {"type": "ResetTool", "id": "d7ac0dd3-6c2e-443a-b117-9ea43a917c60"}, {"type": "HelpTool", "id": "aaa74f17-193f-4941-a6fa-97eb0ee7f403"}], "plot_width": 300, "y_range": {"type": "DataRange1d", "id": "fb6f16ae-2f6b-457a-8de7-e486520f2705"}, "plot_height": 300, "renderers": [{"type": "LinearAxis", "id": "66bc8deb-bcd8-4ac5-848b-577ac6203de7"}, {"type": "Grid", "id": "f3a039f4-0056-4360-9c52-5f69709c2b56"}, {"type": "LinearAxis", "id": "59cfa683-21c3-48e5-9045-ef4645bc1c79"}, {"type": "Grid", "id": "1bba92d9-3cb7-4940-b7e8-e37c7c5b85e1"}, {"type": "BoxAnnotation", "id": "df36edf4-bc7f-4fd1-9132-6e8760edea59"}, {"type": "GlyphRenderer", "id": "d8c84235-df25-4aed-90ac-79404a2d98da"}], "left": [{"type": "LinearAxis", "id": "59cfa683-21c3-48e5-9045-ef4645bc1c79"}], "below": [{"type": "LinearAxis", "id": "66bc8deb-bcd8-4ac5-848b-577ac6203de7"}], "tool_events": {"type": "ToolEvents", "id": "eacae9bd-45ca-43c3-a1e0-452661bbd246"}, "x_range": {"type": "DataRange1d", "id": "535689a9-b0bb-4614-8175-9e843eb73373"}}, "subtype": "Figure"}, {"type": "Grid", "id": "f3a039f4-0056-4360-9c52-5f69709c2b56", "attributes": {"ticker": {"type": "BasicTicker", "id": "cf7ff34b-ff4b-42e8-aae6-896361cd20bb"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "3f78e4ec-057a-4f75-a026-ce47602af5b6"}}}, {"type": "PreviewSaveTool", "id": "f37ab8d8-013e-45c9-8161-a3635cb84da9", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3f78e4ec-057a-4f75-a026-ce47602af5b6"}}}, {"type": "ToolEvents", "id": "eacae9bd-45ca-43c3-a1e0-452661bbd246", "attributes": {}}, {"type": "Grid", "id": "1bba92d9-3cb7-4940-b7e8-e37c7c5b85e1", "attributes": {"ticker": {"type": "BasicTicker", "id": "26bfb511-b918-4e5b-b58e-64d05f9dff92"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "3f78e4ec-057a-4f75-a026-ce47602af5b6"}}}, {"type": "LinearAxis", "id": "59cfa683-21c3-48e5-9045-ef4645bc1c79", "attributes": {"ticker": {"type": "BasicTicker", "id": "26bfb511-b918-4e5b-b58e-64d05f9dff92"}, "formatter": {"type": "BasicTickFormatter", "id": "84c8df8b-4b86-497a-946d-082b5ea757da"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "3f78e4ec-057a-4f75-a026-ce47602af5b6"}}}, {"type": "Oval", "id": "f6f670d7-71b9-4022-9750-fb9437dfe006", "attributes": {"line_color": {"value": "#1f77b4"}, "width": {"value": 0.2, "units": "data"}, "y": {"field": "y"}, "angle": {"value": -0.7, "units": "rad"}, "height": {"value": 0.4, "units": "data"}, "x": {"field": "x"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ResetTool", "id": "d7ac0dd3-6c2e-443a-b117-9ea43a917c60", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "3f78e4ec-057a-4f75-a026-ce47602af5b6"}}}, {"type": "BasicTickFormatter", "id": "9941d873-a065-43ba-9bba-1f0e6c15ba57", "attributes": {}}, {"type": "Oval", "id": "23c1a7c9-9aae-4035-b71e-fa9d48276eb2", "attributes": {"line_color": {"value": "#1D91C0"}, "width": {"value": 0.2, "units": "data"}, "y": {"field": "y"}, "angle": {"value": -0.7, "units": "rad"}, "height": {"value": 0.4, "units": "data"}, "x": {"field": "x"}, "fill_color": {"value": "#1D91C0"}}}, {"type": "BasicTickFormatter", "id": "84c8df8b-4b86-497a-946d-082b5ea757da", "attributes": {}}], "root_ids": ["3f78e4ec-057a-4f75-a026-ce47602af5b6"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "6135cc71-96c2-47af-bcd1-4a7030c33eca", "modelid": "3f78e4ec-057a-4f75-a026-ce47602af5b6", "elementid": "8826cb72-1e3c-4db0-9587-82d95d9a1b9c"}];
          
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