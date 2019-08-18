
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
  };var element = document.getElementById("fb3234a2-fb95-448a-a773-51372a5b6445");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'fb3234a2-fb95-448a-a773-51372a5b6445' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"ea6cf890-6f8b-4740-a1f8-27135974fa25": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "4b8190af-acf6-40e6-b863-4028795ebbdb", "attributes": {"ticker": {"type": "BasicTicker", "id": "b3d6e422-f00e-402d-a502-a7a49564d329"}, "formatter": {"type": "BasicTickFormatter", "id": "5fa33fa4-ef39-4001-8141-b7118acbc0c5"}, "plot": {"type": "Plot", "id": "665f2653-6aa4-4226-8446-6137a2953e08"}}}, {"type": "Plot", "id": "665f2653-6aa4-4226-8446-6137a2953e08", "attributes": {"y_range": {"type": "DataRange1d", "id": "ee3774f1-855e-4c07-b83a-5ebe8acfbb54"}, "renderers": [{"type": "GlyphRenderer", "id": "2f1f8253-1c8a-4862-8baa-34c20a16c5b3"}, {"type": "LinearAxis", "id": "db1f709f-ab06-4e26-9120-f6ada84fdeef"}, {"type": "LinearAxis", "id": "4b8190af-acf6-40e6-b863-4028795ebbdb"}, {"type": "Grid", "id": "72bf4845-6181-4db7-8c10-2f260351fad5"}, {"type": "Grid", "id": "fa504b9d-daa6-4cb3-9b3a-76a1cac972be"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "4b8190af-acf6-40e6-b863-4028795ebbdb"}], "x_range": {"type": "DataRange1d", "id": "fae0ed12-9897-48d8-a112-d960bf217270"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "db1f709f-ab06-4e26-9120-f6ada84fdeef"}], "tool_events": {"type": "ToolEvents", "id": "dee27239-8145-42dd-89e3-f24c5e18f7b3"}, "toolbar_location": null}}, {"type": "BasicTickFormatter", "id": "5fa33fa4-ef39-4001-8141-b7118acbc0c5", "attributes": {}}, {"type": "ColumnDataSource", "id": "5b1b8381-258e-4767-9d42-f4d80ffef01b", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "text": ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "text", "y"], "callback": null}}, {"type": "Text", "id": "436f8f23-17d2-4d18-9793-dbdb1b93ed20", "attributes": {"x": {"field": "x"}, "y": {"field": "y"}, "text_color": {"value": "#96deb3"}, "angle": {"value": 0.3, "units": "rad"}}}, {"type": "GlyphRenderer", "id": "2f1f8253-1c8a-4862-8baa-34c20a16c5b3", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "5b1b8381-258e-4767-9d42-f4d80ffef01b"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Text", "id": "436f8f23-17d2-4d18-9793-dbdb1b93ed20"}}}, {"type": "BasicTicker", "id": "9cee1574-703f-4cc6-8b61-986bb688fa5b", "attributes": {}}, {"type": "DataRange1d", "id": "ee3774f1-855e-4c07-b83a-5ebe8acfbb54", "attributes": {"callback": null}}, {"type": "Grid", "id": "72bf4845-6181-4db7-8c10-2f260351fad5", "attributes": {"ticker": {"type": "BasicTicker", "id": "9cee1574-703f-4cc6-8b61-986bb688fa5b"}, "plot": {"type": "Plot", "id": "665f2653-6aa4-4226-8446-6137a2953e08"}}}, {"type": "BasicTicker", "id": "b3d6e422-f00e-402d-a502-a7a49564d329", "attributes": {}}, {"type": "BasicTickFormatter", "id": "a1b0af9d-edc6-4f4f-bb96-2e0e86e2cc07", "attributes": {}}, {"type": "ToolEvents", "id": "dee27239-8145-42dd-89e3-f24c5e18f7b3", "attributes": {}}, {"type": "Grid", "id": "fa504b9d-daa6-4cb3-9b3a-76a1cac972be", "attributes": {"ticker": {"type": "BasicTicker", "id": "b3d6e422-f00e-402d-a502-a7a49564d329"}, "dimension": 1, "plot": {"type": "Plot", "id": "665f2653-6aa4-4226-8446-6137a2953e08"}}}, {"type": "DataRange1d", "id": "fae0ed12-9897-48d8-a112-d960bf217270", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "db1f709f-ab06-4e26-9120-f6ada84fdeef", "attributes": {"ticker": {"type": "BasicTicker", "id": "9cee1574-703f-4cc6-8b61-986bb688fa5b"}, "formatter": {"type": "BasicTickFormatter", "id": "a1b0af9d-edc6-4f4f-bb96-2e0e86e2cc07"}, "plot": {"type": "Plot", "id": "665f2653-6aa4-4226-8446-6137a2953e08"}}}], "root_ids": ["665f2653-6aa4-4226-8446-6137a2953e08"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "ea6cf890-6f8b-4740-a1f8-27135974fa25", "modelid": "665f2653-6aa4-4226-8446-6137a2953e08", "elementid": "fb3234a2-fb95-448a-a773-51372a5b6445"}];
          
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