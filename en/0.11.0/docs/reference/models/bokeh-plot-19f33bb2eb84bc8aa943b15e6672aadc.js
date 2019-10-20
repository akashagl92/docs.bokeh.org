
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
  };var element = document.getElementById("bb47137e-5ba4-4464-9f8a-a6e1ce546981");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'bb47137e-5ba4-4464-9f8a-a6e1ce546981' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"d030ac94-91af-490b-bea8-251fa1f61e2e": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ToolEvents", "id": "c0c33401-db88-490e-807f-92e083363fa9", "attributes": {}}, {"type": "Grid", "id": "3fbd4f96-54a1-41b2-9694-fedaaba2f163", "attributes": {"ticker": {"type": "BasicTicker", "id": "44318239-4fc9-46f2-9197-397e9ad37b54"}, "dimension": 1, "plot": {"type": "Plot", "id": "22930131-6a98-4151-bb88-60d441154cbf"}}}, {"type": "LinearAxis", "id": "cc62faeb-a770-4816-b130-381bbf123e9b", "attributes": {"ticker": {"type": "BasicTicker", "id": "6d01141e-def8-40a3-a43a-93712efc4142"}, "formatter": {"type": "BasicTickFormatter", "id": "70caf6e0-aff7-4cb3-9a26-e5b3ff4aad4f"}, "plot": {"type": "Plot", "id": "22930131-6a98-4151-bb88-60d441154cbf"}}}, {"type": "DataRange1d", "id": "8d04a6f8-574c-4e2b-8ec5-d69519e3e98e", "attributes": {"callback": null}}, {"type": "BasicTickFormatter", "id": "70caf6e0-aff7-4cb3-9a26-e5b3ff4aad4f", "attributes": {}}, {"type": "Plot", "id": "22930131-6a98-4151-bb88-60d441154cbf", "attributes": {"y_range": {"type": "DataRange1d", "id": "8d04a6f8-574c-4e2b-8ec5-d69519e3e98e"}, "renderers": [{"type": "GlyphRenderer", "id": "c81d45aa-f7ad-4588-8357-04e316b56b85"}, {"type": "LinearAxis", "id": "cc62faeb-a770-4816-b130-381bbf123e9b"}, {"type": "LinearAxis", "id": "5161078a-9564-4c67-bec3-d8a0c3ec13fd"}, {"type": "Grid", "id": "0fd50bc6-789c-4586-84ec-2e7f527fcd1a"}, {"type": "Grid", "id": "3fbd4f96-54a1-41b2-9694-fedaaba2f163"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "5161078a-9564-4c67-bec3-d8a0c3ec13fd"}], "x_range": {"type": "DataRange1d", "id": "ede584d1-35a9-4470-8277-6781056f0b31"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "cc62faeb-a770-4816-b130-381bbf123e9b"}], "tool_events": {"type": "ToolEvents", "id": "c0c33401-db88-490e-807f-92e083363fa9"}, "toolbar_location": null}}, {"type": "BasicTicker", "id": "6d01141e-def8-40a3-a43a-93712efc4142", "attributes": {}}, {"type": "Grid", "id": "0fd50bc6-789c-4586-84ec-2e7f527fcd1a", "attributes": {"ticker": {"type": "BasicTicker", "id": "6d01141e-def8-40a3-a43a-93712efc4142"}, "plot": {"type": "Plot", "id": "22930131-6a98-4151-bb88-60d441154cbf"}}}, {"type": "BasicTicker", "id": "44318239-4fc9-46f2-9197-397e9ad37b54", "attributes": {}}, {"type": "Triangle", "id": "fb311c05-b630-4099-a566-5b6ca1fef749", "attributes": {"line_color": {"value": "#99d594"}, "line_width": {"value": 2}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"units": "screen", "field": "sizes"}, "fill_color": {"value": null}}}, {"type": "DataRange1d", "id": "ede584d1-35a9-4470-8277-6781056f0b31", "attributes": {"callback": null}}, {"type": "GlyphRenderer", "id": "c81d45aa-f7ad-4588-8357-04e316b56b85", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "14546199-e0d4-456d-abb7-0179d4f7fe52"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Triangle", "id": "fb311c05-b630-4099-a566-5b6ca1fef749"}}}, {"type": "ColumnDataSource", "id": "14546199-e0d4-456d-abb7-0179d4f7fe52", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "sizes", "y"], "callback": null}}, {"type": "LinearAxis", "id": "5161078a-9564-4c67-bec3-d8a0c3ec13fd", "attributes": {"ticker": {"type": "BasicTicker", "id": "44318239-4fc9-46f2-9197-397e9ad37b54"}, "formatter": {"type": "BasicTickFormatter", "id": "b513dd71-89b4-4667-8132-81a2b4a9e7e4"}, "plot": {"type": "Plot", "id": "22930131-6a98-4151-bb88-60d441154cbf"}}}, {"type": "BasicTickFormatter", "id": "b513dd71-89b4-4667-8132-81a2b4a9e7e4", "attributes": {}}], "root_ids": ["22930131-6a98-4151-bb88-60d441154cbf"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "d030ac94-91af-490b-bea8-251fa1f61e2e", "modelid": "22930131-6a98-4151-bb88-60d441154cbf", "elementid": "bb47137e-5ba4-4464-9f8a-a6e1ce546981"}];
          
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