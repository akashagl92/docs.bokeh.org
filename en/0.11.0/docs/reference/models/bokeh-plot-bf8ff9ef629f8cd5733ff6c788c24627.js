
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
  };var element = document.getElementById("cd7ca92a-5b7d-46d6-a616-988ab3e41ba6");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'cd7ca92a-5b7d-46d6-a616-988ab3e41ba6' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"cc79a030-da4e-4804-8ba1-6e5ccc0372e9": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "df9dbdb4-b3ef-4432-b795-9facb343ccb0", "attributes": {"ticker": {"type": "BasicTicker", "id": "1e000ab4-bb72-4766-99e7-d57609641c1a"}, "formatter": {"type": "BasicTickFormatter", "id": "becae8e7-b92d-49fe-a0a1-7e8eae614400"}, "plot": {"type": "Plot", "id": "32b76ec9-75cc-4cb5-87fa-50cce847e18e"}}}, {"type": "LinearAxis", "id": "1e601e91-ec42-4396-9f24-553980c79cd3", "attributes": {"ticker": {"type": "BasicTicker", "id": "cc780a0d-f69d-477a-8421-91dd2e63ea2c"}, "formatter": {"type": "BasicTickFormatter", "id": "52818f26-d09e-4549-a044-b68fb17ef8c9"}, "plot": {"type": "Plot", "id": "32b76ec9-75cc-4cb5-87fa-50cce847e18e"}}}, {"type": "BasicTicker", "id": "1e000ab4-bb72-4766-99e7-d57609641c1a", "attributes": {}}, {"type": "Range1d", "id": "e283090a-6aed-4ffc-b53e-7e773b61f5b7", "attributes": {"start": -100, "end": 200, "callback": null}}, {"type": "Grid", "id": "063aa771-2b41-4b65-a8de-c6a09619feb4", "attributes": {"ticker": {"type": "BasicTicker", "id": "cc780a0d-f69d-477a-8421-91dd2e63ea2c"}, "plot": {"type": "Plot", "id": "32b76ec9-75cc-4cb5-87fa-50cce847e18e"}}}, {"type": "BasicTickFormatter", "id": "52818f26-d09e-4549-a044-b68fb17ef8c9", "attributes": {}}, {"type": "GlyphRenderer", "id": "a8c5cf79-8e25-4416-bf36-4932672cc4b6", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "e6ae7425-287c-47d8-ba97-8f6710c8c13a"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "ImageURL", "id": "7947d344-afd8-4b67-8118-8a8e1ade9e0c"}}}, {"type": "GlyphRenderer", "id": "3f17308b-526e-48ca-96c8-673937c2d26c", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "e6ae7425-287c-47d8-ba97-8f6710c8c13a"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "ImageURL", "id": "117841fd-56a9-42c7-b8d4-88261e0cd31c"}}}, {"type": "GlyphRenderer", "id": "6321ed92-7223-4440-b533-a5c50ce8fd0e", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "e6ae7425-287c-47d8-ba97-8f6710c8c13a"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "ImageURL", "id": "441fd79e-c3ca-4142-96e9-2ce6966740bf"}}}, {"type": "Range1d", "id": "214bf49d-ae7d-4238-8709-9f435d371014", "attributes": {"start": -100, "end": 200, "callback": null}}, {"type": "BasicTicker", "id": "cc780a0d-f69d-477a-8421-91dd2e63ea2c", "attributes": {}}, {"type": "ImageURL", "id": "7947d344-afd8-4b67-8118-8a8e1ade9e0c", "attributes": {"x": {"field": "x2"}, "url": {"field": "url"}, "w": {"value": 20, "units": "data"}, "y": {"field": "y2"}, "h": {"value": 20, "units": "data"}}}, {"type": "ColumnDataSource", "id": "e6ae7425-287c-47d8-ba97-8f6710c8c13a", "attributes": {"data": {"y2": [0.0, 50.0, 100.0, 150.0, 200.0], "url": ["http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png"], "x1": [0.0, 37.5, 75.0, 112.5, 150.0], "y1": [0.0, 37.5, 75.0, 112.5, 150.0], "x2": [-50.0, 0.0, 50.0, 100.0, 150.0], "w1": [10.0, 20.0, 30.0, 40.0, 50.0], "h1": [10.0, 20.0, 30.0, 40.0, 50.0]}, "column_names": ["y2", "x1", "url", "y1", "x2", "w1", "h1"], "callback": null}}, {"type": "ImageURL", "id": "441fd79e-c3ca-4142-96e9-2ce6966740bf", "attributes": {"x": {"value": 200}, "url": {"value": "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png"}, "y": {"value": -100}, "anchor": "bottom_right"}}, {"type": "ToolEvents", "id": "13af10c5-63f2-4a68-8a0d-aef883998a43", "attributes": {}}, {"type": "BasicTickFormatter", "id": "becae8e7-b92d-49fe-a0a1-7e8eae614400", "attributes": {}}, {"type": "ImageURL", "id": "117841fd-56a9-42c7-b8d4-88261e0cd31c", "attributes": {"url": {"field": "url"}, "y": {"field": "y1"}, "x": {"field": "x1"}, "w": {"units": "data", "field": "w1"}, "anchor": "center", "h": {"units": "data", "field": "h1"}}}, {"type": "Grid", "id": "7432d327-4cb0-4583-a691-a4d3acf7cb78", "attributes": {"ticker": {"type": "BasicTicker", "id": "1e000ab4-bb72-4766-99e7-d57609641c1a"}, "dimension": 1, "plot": {"type": "Plot", "id": "32b76ec9-75cc-4cb5-87fa-50cce847e18e"}}}, {"type": "Plot", "id": "32b76ec9-75cc-4cb5-87fa-50cce847e18e", "attributes": {"y_range": {"type": "Range1d", "id": "214bf49d-ae7d-4238-8709-9f435d371014"}, "renderers": [{"type": "GlyphRenderer", "id": "3f17308b-526e-48ca-96c8-673937c2d26c"}, {"type": "GlyphRenderer", "id": "a8c5cf79-8e25-4416-bf36-4932672cc4b6"}, {"type": "GlyphRenderer", "id": "6321ed92-7223-4440-b533-a5c50ce8fd0e"}, {"type": "LinearAxis", "id": "1e601e91-ec42-4396-9f24-553980c79cd3"}, {"type": "LinearAxis", "id": "df9dbdb4-b3ef-4432-b795-9facb343ccb0"}, {"type": "Grid", "id": "063aa771-2b41-4b65-a8de-c6a09619feb4"}, {"type": "Grid", "id": "7432d327-4cb0-4583-a691-a4d3acf7cb78"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "df9dbdb4-b3ef-4432-b795-9facb343ccb0"}], "x_range": {"type": "Range1d", "id": "e283090a-6aed-4ffc-b53e-7e773b61f5b7"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "1e601e91-ec42-4396-9f24-553980c79cd3"}], "tool_events": {"type": "ToolEvents", "id": "13af10c5-63f2-4a68-8a0d-aef883998a43"}, "toolbar_location": null}}], "root_ids": ["32b76ec9-75cc-4cb5-87fa-50cce847e18e"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "cc79a030-da4e-4804-8ba1-6e5ccc0372e9", "modelid": "32b76ec9-75cc-4cb5-87fa-50cce847e18e", "elementid": "cd7ca92a-5b7d-46d6-a616-988ab3e41ba6"}];
          
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