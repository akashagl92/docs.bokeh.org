
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
  };var element = document.getElementById("b9aadf54-d1d5-4a09-8d50-7cee6285f18e");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9aadf54-d1d5-4a09-8d50-7cee6285f18e' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"fb218644-6877-40c6-aa90-ae012d51d607": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "GlyphRenderer", "id": "6ca57a20-b75e-476c-b296-6910ff0b0043", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "167515c3-119f-49e1-a167-152953d3abba"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "48836dd5-bd19-4cec-834f-7b707be6e847"}}}, {"type": "ColumnDataSource", "id": "f3d30894-3a5b-43a8-843e-b0cc3fc66653", "attributes": {"data": {"x": ["apples", "bananas", "pears"], "y": [1, 3, 3], "fruit_count": ["(3.3, 4.5]", "(3.3, 4.5]", "(3.3, 4.5]"], "values": [4, 4, 4], "chart_index": [{"fruit_count": "(3.3, 4.5]"}, {"fruit_count": "(3.3, 4.5]"}, {"fruit_count": "(3.3, 4.5]"}]}, "column_names": ["x", "values", "y"], "callback": null}}, {"type": "GlyphRenderer", "id": "6c459e73-f057-4cca-8e0f-c229d17afbd7", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "f3d30894-3a5b-43a8-843e-b0cc3fc66653"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "0d103c0c-cfef-49e2-a5d7-342874ee5d17"}}}, {"type": "Range1d", "id": "5748e19e-dd87-42b9-8f26-d97ae419d9b0", "attributes": {"start": 0.22999999999999998, "end": 3.77, "callback": null}}, {"type": "WheelZoomTool", "id": "5eaa5d36-8feb-4a44-bb6a-c188d497751a", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "7af1b914-8176-4925-82eb-a6c4dafd32ae"}}}, {"type": "Rect", "id": "be4a2191-5198-4fe2-b8bb-366b714f4297", "attributes": {"line_color": {"value": "#c6dbef"}, "dilate": true, "width": {"value": 0.95, "units": "data"}, "y": {"field": "y"}, "height": {"value": 0.95, "units": "data"}, "x": {"field": "x"}, "fill_color": {"value": "#c6dbef"}}}, {"type": "GlyphRenderer", "id": "e086c4b3-5e2f-4f9e-8daa-2c0c5a5b998d", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "ec59a1b8-e941-4ded-82cf-474119ef690a"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "be4a2191-5198-4fe2-b8bb-366b714f4297"}}}, {"type": "ResizeTool", "id": "2cae2a0c-ebe4-477d-b3b3-9295d21486ba", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "7af1b914-8176-4925-82eb-a6c4dafd32ae"}}}, {"type": "CategoricalTickFormatter", "id": "a0f8dc7f-8ef7-4d65-940f-11869af710cb", "attributes": {}}, {"type": "FactorRange", "id": "ee390f3a-4550-4d2c-88e6-a2d94f6fb255", "attributes": {"factors": ["apples", "bananas", "pears"], "callback": null}}, {"type": "PanTool", "id": "266ead06-e774-46b7-8b0e-ec4b54908530", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "7af1b914-8176-4925-82eb-a6c4dafd32ae"}}}, {"type": "Rect", "id": "2bfc04fa-e028-40a7-84c3-a1d016f69b42", "attributes": {"line_color": {"value": "#08519c"}, "dilate": true, "width": {"value": 0.95, "units": "data"}, "y": {"field": "y"}, "height": {"value": 0.95, "units": "data"}, "x": {"field": "x"}, "fill_color": {"value": "#08519c"}}}, {"type": "Rect", "id": "48836dd5-bd19-4cec-834f-7b707be6e847", "attributes": {"line_color": {"value": "#3182bd"}, "dilate": true, "width": {"value": 0.95, "units": "data"}, "y": {"field": "y"}, "height": {"value": 0.95, "units": "data"}, "x": {"field": "x"}, "fill_color": {"value": "#3182bd"}}}, {"type": "HelpTool", "id": "7e360538-25a1-47ed-8bfc-5da3f89ab607", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "7af1b914-8176-4925-82eb-a6c4dafd32ae"}}}, {"type": "ColumnDataSource", "id": "ec59a1b8-e941-4ded-82cf-474119ef690a", "attributes": {"data": {"x": ["bananas", "bananas"], "y": [1, 2], "fruit_count": ["[1, 2.2]", "[1, 2.2]"], "values": [1, 2], "chart_index": [{"fruit_count": "[1, 2.2]"}, {"fruit_count": "[1, 2.2]"}]}, "column_names": ["x", "values", "y"], "callback": null}}, {"type": "BasicTickFormatter", "id": "de2fb034-e216-42e8-a40a-b99413b38382", "attributes": {}}, {"type": "ResetTool", "id": "e399fe28-c843-42ed-bbdb-3e1862892549", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "7af1b914-8176-4925-82eb-a6c4dafd32ae"}}}, {"type": "CategoricalAxis", "id": "3bce4cf7-bac3-42b5-84a0-936c33119a7f", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "d317b44a-d4c5-453a-9e5a-115eff1a700f"}, "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "a0f8dc7f-8ef7-4d65-940f-11869af710cb"}, "axis_label": "fruit", "plot": {"type": "Plot", "subtype": "Chart", "id": "7af1b914-8176-4925-82eb-a6c4dafd32ae"}}}, {"type": "ColumnDataSource", "id": "722781ff-b1b8-42d1-98f0-16bc428973b6", "attributes": {"data": {"x": ["apples", "pears"], "y": [2, 2], "fruit_count": ["(4.5, 5.7]", "(4.5, 5.7]"], "values": [5, 5], "chart_index": [{"fruit_count": "(4.5, 5.7]"}, {"fruit_count": "(4.5, 5.7]"}]}, "column_names": ["x", "values", "y"], "callback": null}}, {"type": "ToolEvents", "id": "413cf0bc-31f0-4922-a201-2265f8c39d86", "attributes": {}}, {"type": "GlyphRenderer", "id": "219fb642-c37b-4fff-82fd-b8a87f7359e4", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "8e320e09-857d-46f4-9894-ebd6e222fae7"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "2bfc04fa-e028-40a7-84c3-a1d016f69b42"}}}, {"type": "BasicTicker", "id": "c72a0938-ff0e-464c-849a-8ed05acdfe3f", "attributes": {}}, {"type": "ColumnDataSource", "id": "8e320e09-857d-46f4-9894-ebd6e222fae7", "attributes": {"data": {"x": ["apples"], "y": [3], "fruit_count": ["(6.8, 8]"], "values": [8], "chart_index": [{"fruit_count": "(6.8, 8]"}]}, "column_names": ["x", "values", "y"], "callback": null}}, {"type": "BoxAnnotation", "id": "a32f0ee7-e81b-4ca3-bbe9-05d4ede9a7ba", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BoxZoomTool", "id": "d2192c91-9b2d-4193-b9eb-2bc5c6d7cd0f", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "a32f0ee7-e81b-4ca3-bbe9-05d4ede9a7ba"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "7af1b914-8176-4925-82eb-a6c4dafd32ae"}}}, {"type": "CategoricalTicker", "id": "d317b44a-d4c5-453a-9e5a-115eff1a700f", "attributes": {}}, {"type": "Rect", "id": "0d103c0c-cfef-49e2-a5d7-342874ee5d17", "attributes": {"line_color": {"value": "#9ecae1"}, "dilate": true, "width": {"value": 0.95, "units": "data"}, "y": {"field": "y"}, "height": {"value": 0.95, "units": "data"}, "x": {"field": "x"}, "fill_color": {"value": "#9ecae1"}}}, {"type": "GlyphRenderer", "id": "7e904fc4-bc03-4423-8a89-19c1390445c1", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "722781ff-b1b8-42d1-98f0-16bc428973b6"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Rect", "id": "81ee05da-662e-402e-a4de-41acc115b821"}}}, {"type": "ColumnDataSource", "id": "167515c3-119f-49e1-a167-152953d3abba", "attributes": {"data": {"x": ["pears"], "y": [1], "fruit_count": ["(5.7, 6.8]"], "values": [6], "chart_index": [{"fruit_count": "(5.7, 6.8]"}]}, "column_names": ["x", "values", "y"], "callback": null}}, {"type": "LinearAxis", "id": "42fa106c-c267-4c86-bf3f-0e08be43e2b0", "attributes": {"ticker": {"type": "BasicTicker", "id": "c72a0938-ff0e-464c-849a-8ed05acdfe3f"}, "formatter": {"type": "BasicTickFormatter", "id": "de2fb034-e216-42e8-a40a-b99413b38382"}, "axis_label": "sample", "plot": {"type": "Plot", "subtype": "Chart", "id": "7af1b914-8176-4925-82eb-a6c4dafd32ae"}}}, {"type": "Rect", "id": "81ee05da-662e-402e-a4de-41acc115b821", "attributes": {"line_color": {"value": "#6baed6"}, "dilate": true, "width": {"value": 0.95, "units": "data"}, "y": {"field": "y"}, "height": {"value": 0.95, "units": "data"}, "x": {"field": "x"}, "fill_color": {"value": "#6baed6"}}}, {"type": "PreviewSaveTool", "id": "3a516e16-2380-4ff3-99c0-b09d8e91b280", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "7af1b914-8176-4925-82eb-a6c4dafd32ae"}}}, {"type": "Plot", "id": "7af1b914-8176-4925-82eb-a6c4dafd32ae", "attributes": {"y_range": {"type": "Range1d", "id": "5748e19e-dd87-42b9-8f26-d97ae419d9b0"}, "width": 400, "legend": null, "yscale": "auto", "tools": [{"type": "PanTool", "id": "266ead06-e774-46b7-8b0e-ec4b54908530"}, {"type": "WheelZoomTool", "id": "5eaa5d36-8feb-4a44-bb6a-c188d497751a"}, {"type": "BoxZoomTool", "id": "d2192c91-9b2d-4193-b9eb-2bc5c6d7cd0f"}, {"type": "PreviewSaveTool", "id": "3a516e16-2380-4ff3-99c0-b09d8e91b280"}, {"type": "ResizeTool", "id": "2cae2a0c-ebe4-477d-b3b3-9295d21486ba"}, {"type": "ResetTool", "id": "e399fe28-c843-42ed-bbdb-3e1862892549"}, {"type": "HelpTool", "id": "7e360538-25a1-47ed-8bfc-5da3f89ab607"}], "xgrid": false, "title": "Fruits", "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "42fa106c-c267-4c86-bf3f-0e08be43e2b0"}], "x_range": {"type": "FactorRange", "id": "ee390f3a-4550-4d2c-88e6-a2d94f6fb255"}, "y_mapper_type": "auto", "ygrid": false, "xscale": "auto", "below": [{"type": "CategoricalAxis", "id": "3bce4cf7-bac3-42b5-84a0-936c33119a7f"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "413cf0bc-31f0-4922-a201-2265f8c39d86"}, "renderers": [{"type": "BoxAnnotation", "id": "a32f0ee7-e81b-4ca3-bbe9-05d4ede9a7ba"}, {"type": "GlyphRenderer", "id": "219fb642-c37b-4fff-82fd-b8a87f7359e4"}, {"type": "GlyphRenderer", "id": "6ca57a20-b75e-476c-b296-6910ff0b0043"}, {"type": "GlyphRenderer", "id": "7e904fc4-bc03-4423-8a89-19c1390445c1"}, {"type": "GlyphRenderer", "id": "6c459e73-f057-4cca-8e0f-c229d17afbd7"}, {"type": "GlyphRenderer", "id": "e086c4b3-5e2f-4f9e-8daa-2c0c5a5b998d"}, {"type": "CategoricalAxis", "id": "3bce4cf7-bac3-42b5-84a0-936c33119a7f"}, {"type": "LinearAxis", "id": "42fa106c-c267-4c86-bf3f-0e08be43e2b0"}]}, "subtype": "Chart"}], "root_ids": ["7af1b914-8176-4925-82eb-a6c4dafd32ae"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "fb218644-6877-40c6-aa90-ae012d51d607", "modelid": "7af1b914-8176-4925-82eb-a6c4dafd32ae", "elementid": "b9aadf54-d1d5-4a09-8d50-7cee6285f18e"}];
          
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