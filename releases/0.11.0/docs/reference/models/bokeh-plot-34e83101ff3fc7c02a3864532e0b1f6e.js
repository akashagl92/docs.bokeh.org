
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
  };var element = document.getElementById("47ca0677-2476-46e9-a2fa-c197cbf99b3d");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '47ca0677-2476-46e9-a2fa-c197cbf99b3d' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"dc459277-7fbb-4eed-b1a8-9a06ce208814": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "GlyphRenderer", "id": "4e9fe86b-ada8-497d-963c-85f9b149a0e5", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "55adf8ed-fcad-48f9-9352-a89bd4456aa8"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Square", "id": "67fe005d-99c9-4275-9f41-48e6b84d2817"}}}, {"type": "Square", "id": "67fe005d-99c9-4275-9f41-48e6b84d2817", "attributes": {"x": {"field": "x"}, "size": {"units": "screen", "field": "sizes"}, "y": {"field": "y"}, "fill_color": {"value": "#74add1"}}}, {"type": "LinearAxis", "id": "142a7cba-49b5-429d-a349-dc36c3d6d96c", "attributes": {"ticker": {"type": "BasicTicker", "id": "beaf62c3-43bd-47d5-baf8-2c71885baa88"}, "formatter": {"type": "BasicTickFormatter", "id": "1b05d3ed-15b7-4ace-8909-bb2839f31135"}, "plot": {"type": "Plot", "id": "96f2471b-051d-4cb6-a902-bf23e5ab2c93"}}}, {"type": "DataRange1d", "id": "f3a45a31-5497-4ddc-bdbb-f9ba7b26e4fa", "attributes": {"callback": null}}, {"type": "BasicTicker", "id": "beaf62c3-43bd-47d5-baf8-2c71885baa88", "attributes": {}}, {"type": "Plot", "id": "96f2471b-051d-4cb6-a902-bf23e5ab2c93", "attributes": {"y_range": {"type": "DataRange1d", "id": "fd8454d9-85a8-47e6-87a4-69e417db5773"}, "renderers": [{"type": "GlyphRenderer", "id": "4e9fe86b-ada8-497d-963c-85f9b149a0e5"}, {"type": "LinearAxis", "id": "142a7cba-49b5-429d-a349-dc36c3d6d96c"}, {"type": "LinearAxis", "id": "9ef4bbad-237b-4c2d-933d-022baab90b5d"}, {"type": "Grid", "id": "ebc73d65-28b1-4dc1-bfdf-0c8a905fe540"}, {"type": "Grid", "id": "484744d5-fe5e-41f7-bcac-faa5d312e961"}], "plot_width": 300, "title": null, "min_border": 0, "left": [{"type": "LinearAxis", "id": "9ef4bbad-237b-4c2d-933d-022baab90b5d"}], "x_range": {"type": "DataRange1d", "id": "f3a45a31-5497-4ddc-bdbb-f9ba7b26e4fa"}, "h_symmetry": false, "plot_height": 300, "below": [{"type": "LinearAxis", "id": "142a7cba-49b5-429d-a349-dc36c3d6d96c"}], "tool_events": {"type": "ToolEvents", "id": "10242935-b948-42a8-9cbb-40c456e1c488"}, "toolbar_location": null}}, {"type": "BasicTicker", "id": "d9b11c71-7956-43d0-b812-63abf7ad7f25", "attributes": {}}, {"type": "Grid", "id": "ebc73d65-28b1-4dc1-bfdf-0c8a905fe540", "attributes": {"ticker": {"type": "BasicTicker", "id": "beaf62c3-43bd-47d5-baf8-2c71885baa88"}, "plot": {"type": "Plot", "id": "96f2471b-051d-4cb6-a902-bf23e5ab2c93"}}}, {"type": "Grid", "id": "484744d5-fe5e-41f7-bcac-faa5d312e961", "attributes": {"ticker": {"type": "BasicTicker", "id": "d9b11c71-7956-43d0-b812-63abf7ad7f25"}, "dimension": 1, "plot": {"type": "Plot", "id": "96f2471b-051d-4cb6-a902-bf23e5ab2c93"}}}, {"type": "LinearAxis", "id": "9ef4bbad-237b-4c2d-933d-022baab90b5d", "attributes": {"ticker": {"type": "BasicTicker", "id": "d9b11c71-7956-43d0-b812-63abf7ad7f25"}, "formatter": {"type": "BasicTickFormatter", "id": "db5b4533-5cf4-4193-98f3-5a0954f80b71"}, "plot": {"type": "Plot", "id": "96f2471b-051d-4cb6-a902-bf23e5ab2c93"}}}, {"type": "BasicTickFormatter", "id": "db5b4533-5cf4-4193-98f3-5a0954f80b71", "attributes": {}}, {"type": "DataRange1d", "id": "fd8454d9-85a8-47e6-87a4-69e417db5773", "attributes": {"callback": null}}, {"type": "ToolEvents", "id": "10242935-b948-42a8-9cbb-40c456e1c488", "attributes": {}}, {"type": "ColumnDataSource", "id": "55adf8ed-fcad-48f9-9352-a89bd4456aa8", "attributes": {"data": {"x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["x", "sizes", "y"], "callback": null}}, {"type": "BasicTickFormatter", "id": "1b05d3ed-15b7-4ace-8909-bb2839f31135", "attributes": {}}], "root_ids": ["96f2471b-051d-4cb6-a902-bf23e5ab2c93"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "dc459277-7fbb-4eed-b1a8-9a06ce208814", "modelid": "96f2471b-051d-4cb6-a902-bf23e5ab2c93", "elementid": "47ca0677-2476-46e9-a2fa-c197cbf99b3d"}];
          
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