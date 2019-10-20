
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
  };var element = document.getElementById("069b289c-de11-4043-84d9-4c3d26cc1d85");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '069b289c-de11-4043-84d9-4c3d26cc1d85' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"77aa52de-2fb1-4931-86f9-565aa23588bb": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BasicTicker", "id": "f28acf40-f175-449b-a5a6-3301be5af407", "attributes": {}}, {"type": "Grid", "id": "692e8cea-7f1b-4dee-8ddb-61a2f3917ea9", "attributes": {"ticker": {"type": "BasicTicker", "id": "f28acf40-f175-449b-a5a6-3301be5af407"}, "plot": {"type": "Plot", "id": "73c1eccb-8fdb-497a-9441-25780cd34d46"}}}, {"type": "ToolEvents", "id": "07c6dc3e-6974-4e26-b0e9-488f895a413e", "attributes": {}}, {"type": "BasicTickFormatter", "id": "1312ea70-0806-445f-9453-0f840488959c", "attributes": {}}, {"type": "DataRange1d", "id": "566b0742-5198-4520-ad6e-b8748b6727a4", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "d0e49602-5863-49f5-ba59-1b97d8e03d83", "attributes": {}}, {"type": "Plot", "id": "73c1eccb-8fdb-497a-9441-25780cd34d46", "attributes": {"y_range": {"type": "DataRange1d", "id": "566b0742-5198-4520-ad6e-b8748b6727a4"}, "renderers": [{"type": "GlyphRenderer", "id": "4cb49899-ccb0-447f-ac76-104ee52863f1"}, {"type": "LinearAxis", "id": "d5283a0d-4785-4ec0-890e-624eada7d728"}, {"type": "LinearAxis", "id": "96c8b348-6366-4041-933e-71ee257c57ea"}, {"type": "Grid", "id": "692e8cea-7f1b-4dee-8ddb-61a2f3917ea9"}, {"type": "Grid", "id": "da053588-7551-4af2-8615-fa075aaeb4b0"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "96c8b348-6366-4041-933e-71ee257c57ea"}], "x_range": {"type": "DataRange1d", "id": "ea587887-70b9-452e-95df-980e80e8fd1d"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "d5283a0d-4785-4ec0-890e-624eada7d728"}], "tool_events": {"type": "ToolEvents", "id": "07c6dc3e-6974-4e26-b0e9-488f895a413e"}, "toolbar_location": null}}, {"type": "DataRange1d", "id": "ea587887-70b9-452e-95df-980e80e8fd1d", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "d5283a0d-4785-4ec0-890e-624eada7d728", "attributes": {"ticker": {"type": "BasicTicker", "id": "f28acf40-f175-449b-a5a6-3301be5af407"}, "formatter": {"type": "BasicTickFormatter", "id": "d288bcd3-cfeb-4650-b3f2-a4743b359354"}, "plot": {"type": "Plot", "id": "73c1eccb-8fdb-497a-9441-25780cd34d46"}}}, {"type": "Annulus", "id": "bf7541c4-cc58-4715-8935-0affe3382de6", "attributes": {"x": {"field": "x"}, "y": {"field": "y"}, "outer_radius": {"value": 0.4, "units": "data"}, "inner_radius": {"value": 0.2, "units": "data"}, "fill_color": {"value": "#7fc97f"}}}, {"type": "Grid", "id": "da053588-7551-4af2-8615-fa075aaeb4b0", "attributes": {"ticker": {"type": "BasicTicker", "id": "d0e49602-5863-49f5-ba59-1b97d8e03d83"}, "dimension": 1, "plot": {"type": "Plot", "id": "73c1eccb-8fdb-497a-9441-25780cd34d46"}}}, {"type": "LinearAxis", "id": "96c8b348-6366-4041-933e-71ee257c57ea", "attributes": {"ticker": {"type": "BasicTicker", "id": "d0e49602-5863-49f5-ba59-1b97d8e03d83"}, "formatter": {"type": "BasicTickFormatter", "id": "1312ea70-0806-445f-9453-0f840488959c"}, "plot": {"type": "Plot", "id": "73c1eccb-8fdb-497a-9441-25780cd34d46"}}}, {"type": "GlyphRenderer", "id": "4cb49899-ccb0-447f-ac76-104ee52863f1", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "2e49621f-913d-44e5-a799-fbc5d2d035f5"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Annulus", "id": "bf7541c4-cc58-4715-8935-0affe3382de6"}}}, {"type": "BasicTickFormatter", "id": "d288bcd3-cfeb-4650-b3f2-a4743b359354", "attributes": {}}, {"type": "ColumnDataSource", "id": "2e49621f-913d-44e5-a799-fbc5d2d035f5", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "y"], "callback": null}}], "root_ids": ["73c1eccb-8fdb-497a-9441-25780cd34d46"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "77aa52de-2fb1-4931-86f9-565aa23588bb", "modelid": "73c1eccb-8fdb-497a-9441-25780cd34d46", "elementid": "069b289c-de11-4043-84d9-4c3d26cc1d85"}];
          
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