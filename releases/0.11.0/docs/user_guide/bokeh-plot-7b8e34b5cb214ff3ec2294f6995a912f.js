
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
  };var element = document.getElementById("2d0ec105-ffa5-4b07-8012-6b62016b4f38");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2d0ec105-ffa5-4b07-8012-6b62016b4f38' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"f52b9406-14b2-4e2f-89a4-4dcee5fdd5b7": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "BoxZoomTool", "id": "eb7dd388-2d19-443f-8b87-18ec63a9e058", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "73773d47-47c8-4573-a334-e76c5a2ec442"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9e319e0d-3041-492a-827e-27f693f0fd80"}}}, {"type": "ResizeTool", "id": "f7a549f5-e676-48e5-a834-92cccccc1295", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9e319e0d-3041-492a-827e-27f693f0fd80"}}}, {"type": "DataRange1d", "id": "10ca47ec-3a89-4304-93c1-faa09f518b58", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "5e8c36a4-43a3-40cc-8c16-57cdace61371", "attributes": {"ticker": {"type": "BasicTicker", "id": "2df5abea-7a4e-49b0-b959-f912a85df46d"}, "major_label_orientation": "vertical", "formatter": {"type": "BasicTickFormatter", "id": "49dd2bea-abfd-4dcb-8bd8-9bbcc370d4cb"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9e319e0d-3041-492a-827e-27f693f0fd80"}}}, {"type": "ToolEvents", "id": "a035c059-9574-4969-96a1-6b131fba2a88", "attributes": {}}, {"type": "ColumnDataSource", "id": "69eed2d6-7f9a-4497-a556-d3589f1a9ff1", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "GlyphRenderer", "id": "c4d79488-beec-465b-991a-24dcffbfd46e", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "69eed2d6-7f9a-4497-a556-d3589f1a9ff1"}, "nonselection_glyph": {"type": "Circle", "id": "d89655a4-f8f8-4bff-85b3-26f1afb7d089"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "53b003b6-6a16-4f78-a938-5c6f366bc0c3"}}}, {"type": "Circle", "id": "53b003b6-6a16-4f78-a938-5c6f366bc0c3", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "Grid", "id": "ff354fe2-c94f-45f3-b3d6-844c4402cc9e", "attributes": {"ticker": {"type": "BasicTicker", "id": "8e6428db-d385-4687-9a9c-822f0cc2362b"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9e319e0d-3041-492a-827e-27f693f0fd80"}}}, {"type": "ResetTool", "id": "84e9733f-a39f-4497-965d-d9ffb670fb8e", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9e319e0d-3041-492a-827e-27f693f0fd80"}}}, {"type": "BasicTickFormatter", "id": "f832ada0-2322-493a-bdde-cc2fdbb33f66", "attributes": {}}, {"type": "BasicTicker", "id": "8e6428db-d385-4687-9a9c-822f0cc2362b", "attributes": {}}, {"type": "Circle", "id": "d89655a4-f8f8-4bff-85b3-26f1afb7d089", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "PanTool", "id": "7dfb0f25-85ae-4692-b032-cefcf96182e6", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9e319e0d-3041-492a-827e-27f693f0fd80"}}}, {"type": "BasicTickFormatter", "id": "49dd2bea-abfd-4dcb-8bd8-9bbcc370d4cb", "attributes": {}}, {"type": "PreviewSaveTool", "id": "cf8eb96d-f24b-4ec5-b883-5a6999c720a3", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9e319e0d-3041-492a-827e-27f693f0fd80"}}}, {"type": "Plot", "id": "9e319e0d-3041-492a-827e-27f693f0fd80", "attributes": {"tools": [{"type": "PanTool", "id": "7dfb0f25-85ae-4692-b032-cefcf96182e6"}, {"type": "WheelZoomTool", "id": "21f90de0-1e19-4733-a773-0f982572002f"}, {"type": "BoxZoomTool", "id": "eb7dd388-2d19-443f-8b87-18ec63a9e058"}, {"type": "PreviewSaveTool", "id": "cf8eb96d-f24b-4ec5-b883-5a6999c720a3"}, {"type": "ResizeTool", "id": "f7a549f5-e676-48e5-a834-92cccccc1295"}, {"type": "ResetTool", "id": "84e9733f-a39f-4497-965d-d9ffb670fb8e"}, {"type": "HelpTool", "id": "617d2120-da83-49e7-89ee-22fe063aae97"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "c7943bb5-a891-4f36-8fc9-4c701577664d"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "ec6d75ac-f298-48cc-a4cd-a9260cc5c090"}, {"type": "Grid", "id": "ff354fe2-c94f-45f3-b3d6-844c4402cc9e"}, {"type": "LinearAxis", "id": "5e8c36a4-43a3-40cc-8c16-57cdace61371"}, {"type": "Grid", "id": "3385c3c8-8afc-41c0-9a18-6ec9bf76eaaf"}, {"type": "BoxAnnotation", "id": "73773d47-47c8-4573-a334-e76c5a2ec442"}, {"type": "GlyphRenderer", "id": "c4d79488-beec-465b-991a-24dcffbfd46e"}], "left": [{"type": "LinearAxis", "id": "5e8c36a4-43a3-40cc-8c16-57cdace61371"}], "below": [{"type": "LinearAxis", "id": "ec6d75ac-f298-48cc-a4cd-a9260cc5c090"}], "tool_events": {"type": "ToolEvents", "id": "a035c059-9574-4969-96a1-6b131fba2a88"}, "x_range": {"type": "DataRange1d", "id": "10ca47ec-3a89-4304-93c1-faa09f518b58"}}, "subtype": "Figure"}, {"type": "LinearAxis", "id": "ec6d75ac-f298-48cc-a4cd-a9260cc5c090", "attributes": {"ticker": {"type": "BasicTicker", "id": "8e6428db-d385-4687-9a9c-822f0cc2362b"}, "major_label_orientation": 0.7853981633974483, "formatter": {"type": "BasicTickFormatter", "id": "f832ada0-2322-493a-bdde-cc2fdbb33f66"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "9e319e0d-3041-492a-827e-27f693f0fd80"}}}, {"type": "BoxAnnotation", "id": "73773d47-47c8-4573-a334-e76c5a2ec442", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "2df5abea-7a4e-49b0-b959-f912a85df46d", "attributes": {}}, {"type": "DataRange1d", "id": "c7943bb5-a891-4f36-8fc9-4c701577664d", "attributes": {"callback": null}}, {"type": "Grid", "id": "3385c3c8-8afc-41c0-9a18-6ec9bf76eaaf", "attributes": {"ticker": {"type": "BasicTicker", "id": "2df5abea-7a4e-49b0-b959-f912a85df46d"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "9e319e0d-3041-492a-827e-27f693f0fd80"}}}, {"type": "HelpTool", "id": "617d2120-da83-49e7-89ee-22fe063aae97", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9e319e0d-3041-492a-827e-27f693f0fd80"}}}, {"type": "WheelZoomTool", "id": "21f90de0-1e19-4733-a773-0f982572002f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "9e319e0d-3041-492a-827e-27f693f0fd80"}}}], "root_ids": ["9e319e0d-3041-492a-827e-27f693f0fd80"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "f52b9406-14b2-4e2f-89a4-4dcee5fdd5b7", "modelid": "9e319e0d-3041-492a-827e-27f693f0fd80", "elementid": "2d0ec105-ffa5-4b07-8012-6b62016b4f38"}];
          
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