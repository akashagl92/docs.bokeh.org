
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
  };var element = document.getElementById("17b4ec73-cb9e-440d-9126-6b3c8baad205");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '17b4ec73-cb9e-440d-9126-6b3c8baad205' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"47883200-85be-4571-bd9c-13ac1f0a3c56": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "CategoricalAxis", "id": "87a17e7a-02d3-4dab-83bb-c36735a7ad21", "attributes": {"ticker": {"type": "CategoricalTicker", "id": "ed3774b5-1f4c-4fe7-9590-75f5b8fb52f0"}, "major_label_orientation": 0.7853981633974483, "formatter": {"type": "CategoricalTickFormatter", "id": "071e390f-f50a-41bc-8a21-d896a84bfa15"}, "axis_label": "Interpreter", "plot": {"type": "Plot", "subtype": "Chart", "id": "88f80bcc-a177-4c28-8f3a-3684198ab9ee"}}}, {"type": "BasicTicker", "id": "7bfb0809-e7b2-4f72-9143-1820d7fb076f", "attributes": {}}, {"type": "ResetTool", "id": "1663047e-61d5-4508-b03b-795ffdcdf7e9", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "88f80bcc-a177-4c28-8f3a-3684198ab9ee"}}}, {"type": "ToolEvents", "id": "9e06de7c-8b61-4b75-b717-d2d5f260b7c8", "attributes": {}}, {"type": "Circle", "id": "b2436e69-c811-45ad-a323-36e78cd2c3af", "attributes": {"line_color": {"value": "#f22c40"}, "y": {"field": "height"}, "x": {"field": "x"}, "size": {"value": 8, "units": "screen"}, "line_alpha": {"field": "line_alpha"}, "fill_color": {"value": "#f22c40"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "BoxAnnotation", "id": "d262d8d1-a28f-43c9-b8eb-6073a3651ae7", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "ColumnDataSource", "id": "d38e09f7-2838-4abd-a6a6-8aec93bfb25d", "attributes": {"data": {"color": ["#5ab738"], "line_color": ["#f22c40"], "width": [0.2], "sample": ["2nd"], "y": [2.5], "line_alpha": [1.0], "height": [5.0], "x": ["python:0.666666666667"], "interpreter": ["python"], "chart_index": [{"interpreter": "python", "sample": "2nd"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "Plot", "id": "88f80bcc-a177-4c28-8f3a-3684198ab9ee", "attributes": {"y_range": {"type": "Range1d", "id": "1b78ce02-87c1-46a0-b92c-d638ce5a1f36"}, "width": 400, "legend": "top_right", "yscale": "auto", "tools": [{"type": "PanTool", "id": "4f82ab4c-5dbd-48b6-a5a3-e26511d2acba"}, {"type": "WheelZoomTool", "id": "39bca37b-6392-4056-bcf9-3dfe35a3f370"}, {"type": "BoxZoomTool", "id": "fb5fa677-e688-4873-a0cb-1b6bf033686a"}, {"type": "PreviewSaveTool", "id": "62ccd73e-f952-4cf1-863f-d872cddf07ed"}, {"type": "ResizeTool", "id": "cc5ef0e4-2dd6-4e9d-8776-e8361051e2a1"}, {"type": "ResetTool", "id": "1663047e-61d5-4508-b03b-795ffdcdf7e9"}, {"type": "HelpTool", "id": "7a40d346-a4a6-4bfb-bec3-fc93a5171bf8"}], "xgrid": false, "title": "Python Interpreter Sampling", "x_mapper_type": "auto", "left": [{"type": "LinearAxis", "id": "d6a04af4-f235-488a-bd03-6748faaa74f5"}], "x_range": {"type": "FactorRange", "id": "d203406e-c741-450c-83ce-fa0db8a3c450"}, "y_mapper_type": "auto", "xscale": "auto", "below": [{"type": "CategoricalAxis", "id": "87a17e7a-02d3-4dab-83bb-c36735a7ad21"}], "title_text_font_size": {"value": "14pt"}, "tool_events": {"type": "ToolEvents", "id": "9e06de7c-8b61-4b75-b717-d2d5f260b7c8"}, "renderers": [{"type": "BoxAnnotation", "id": "d262d8d1-a28f-43c9-b8eb-6073a3651ae7"}, {"type": "GlyphRenderer", "id": "bdccaed2-c4e9-4c58-8e80-a3806160dd4f"}, {"type": "GlyphRenderer", "id": "ff37f445-35f9-4dc7-9385-b864b97c2dd5"}, {"type": "GlyphRenderer", "id": "dcdfbcbf-2c9a-449b-9ae0-d496e8744b26"}, {"type": "GlyphRenderer", "id": "69552733-f5df-4948-82f4-613c0607ca51"}, {"type": "GlyphRenderer", "id": "35ba995c-d263-4ea0-a57e-b72e5aa0927c"}, {"type": "GlyphRenderer", "id": "4073ee8c-94f4-4f4c-a468-96883bfa59d9"}, {"type": "Legend", "id": "442d79e9-e1d7-4fda-8846-35fd5121eb71"}, {"type": "CategoricalAxis", "id": "87a17e7a-02d3-4dab-83bb-c36735a7ad21"}, {"type": "LinearAxis", "id": "d6a04af4-f235-488a-bd03-6748faaa74f5"}, {"type": "Grid", "id": "972b7f42-672f-4cdb-a588-b553977ba615"}]}, "subtype": "Chart"}, {"type": "Grid", "id": "972b7f42-672f-4cdb-a588-b553977ba615", "attributes": {"ticker": {"type": "BasicTicker", "id": "7bfb0809-e7b2-4f72-9143-1820d7fb076f"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Chart", "id": "88f80bcc-a177-4c28-8f3a-3684198ab9ee"}}}, {"type": "FactorRange", "id": "d203406e-c741-450c-83ce-fa0db8a3c450", "attributes": {"factors": ["jython", "pypy", "python"], "callback": null}}, {"type": "GlyphRenderer", "id": "69552733-f5df-4948-82f4-613c0607ca51", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "242e8a90-5cb6-4582-88c3-0e2585632d59"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "31fee1cf-3caa-4664-b1b4-3b2c4f773d5e"}}}, {"type": "ColumnDataSource", "id": "bfc780d3-5697-4d63-93f9-887fe344540c", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["#f22c40"], "width": [0.2], "sample": ["1st"], "y": [11.0], "line_alpha": [1.0], "height": [22.0], "x": ["jython:0.333333333333"], "interpreter": ["jython"], "chart_index": [{"interpreter": "jython", "sample": "1st"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "ColumnDataSource", "id": "a7c087bb-25f0-475f-b289-72b48af22d41", "attributes": {"data": {"color": ["#5ab738"], "line_color": ["#f22c40"], "width": [0.2], "sample": ["2nd"], "y": [15.0], "line_alpha": [1.0], "height": [30.0], "x": ["jython:0.666666666667"], "interpreter": ["jython"], "chart_index": [{"interpreter": "jython", "sample": "2nd"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "Range1d", "id": "1b78ce02-87c1-46a0-b92c-d638ce5a1f36", "attributes": {"start": -3.9000000000000004, "end": 41.9, "callback": null}}, {"type": "ColumnDataSource", "id": "382b936c-3c09-4ff7-87df-22f2ce837004", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["#f22c40"], "width": [0.2], "sample": ["1st"], "y": [6.0], "line_alpha": [1.0], "height": [12.0], "x": ["pypy:0.333333333333"], "interpreter": ["pypy"], "chart_index": [{"interpreter": "pypy", "sample": "1st"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "LinearAxis", "id": "d6a04af4-f235-488a-bd03-6748faaa74f5", "attributes": {"ticker": {"type": "BasicTicker", "id": "7bfb0809-e7b2-4f72-9143-1820d7fb076f"}, "formatter": {"type": "BasicTickFormatter", "id": "1ac75104-35a8-4588-939a-e35474284cde"}, "axis_label": "Mean( Timing )", "plot": {"type": "Plot", "subtype": "Chart", "id": "88f80bcc-a177-4c28-8f3a-3684198ab9ee"}}}, {"type": "Circle", "id": "5098cfef-a280-48a2-8a1c-939c87ec889c", "attributes": {"line_color": {"value": "#f22c40"}, "y": {"field": "height"}, "x": {"field": "x"}, "size": {"value": 8, "units": "screen"}, "line_alpha": {"field": "line_alpha"}, "fill_color": {"value": "#5ab738"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "ColumnDataSource", "id": "242e8a90-5cb6-4582-88c3-0e2585632d59", "attributes": {"data": {"color": ["#5ab738"], "line_color": ["#f22c40"], "width": [0.2], "sample": ["2nd"], "y": [20.0], "line_alpha": [1.0], "height": [40.0], "x": ["pypy:0.666666666667"], "interpreter": ["pypy"], "chart_index": [{"interpreter": "pypy", "sample": "2nd"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "BoxZoomTool", "id": "fb5fa677-e688-4873-a0cb-1b6bf033686a", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "d262d8d1-a28f-43c9-b8eb-6073a3651ae7"}, "plot": {"type": "Plot", "subtype": "Chart", "id": "88f80bcc-a177-4c28-8f3a-3684198ab9ee"}}}, {"type": "Circle", "id": "31fee1cf-3caa-4664-b1b4-3b2c4f773d5e", "attributes": {"line_color": {"value": "#f22c40"}, "y": {"field": "height"}, "x": {"field": "x"}, "size": {"value": 8, "units": "screen"}, "line_alpha": {"field": "line_alpha"}, "fill_color": {"value": "#5ab738"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "GlyphRenderer", "id": "bdccaed2-c4e9-4c58-8e80-a3806160dd4f", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "83c87c5d-de2b-40d7-8419-da0a2b78cfa6"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "46bc8623-9090-4af0-b5ad-f0e78b0aeb7a"}}}, {"type": "WheelZoomTool", "id": "39bca37b-6392-4056-bcf9-3dfe35a3f370", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "88f80bcc-a177-4c28-8f3a-3684198ab9ee"}}}, {"type": "Circle", "id": "46bc8623-9090-4af0-b5ad-f0e78b0aeb7a", "attributes": {"line_color": {"value": "#f22c40"}, "y": {"field": "height"}, "x": {"field": "x"}, "size": {"value": 8, "units": "screen"}, "line_alpha": {"field": "line_alpha"}, "fill_color": {"value": "#f22c40"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "BasicTickFormatter", "id": "1ac75104-35a8-4588-939a-e35474284cde", "attributes": {}}, {"type": "GlyphRenderer", "id": "ff37f445-35f9-4dc7-9385-b864b97c2dd5", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "d38e09f7-2838-4abd-a6a6-8aec93bfb25d"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "5098cfef-a280-48a2-8a1c-939c87ec889c"}}}, {"type": "GlyphRenderer", "id": "dcdfbcbf-2c9a-449b-9ae0-d496e8744b26", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "382b936c-3c09-4ff7-87df-22f2ce837004"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "4a27e8d7-1ba7-42ec-b240-99e4bf3772d4"}}}, {"type": "HelpTool", "id": "7a40d346-a4a6-4bfb-bec3-fc93a5171bf8", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "88f80bcc-a177-4c28-8f3a-3684198ab9ee"}}}, {"type": "Circle", "id": "4a27e8d7-1ba7-42ec-b240-99e4bf3772d4", "attributes": {"line_color": {"value": "#f22c40"}, "y": {"field": "height"}, "x": {"field": "x"}, "size": {"value": 8, "units": "screen"}, "line_alpha": {"field": "line_alpha"}, "fill_color": {"value": "#f22c40"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "PanTool", "id": "4f82ab4c-5dbd-48b6-a5a3-e26511d2acba", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "88f80bcc-a177-4c28-8f3a-3684198ab9ee"}}}, {"type": "PreviewSaveTool", "id": "62ccd73e-f952-4cf1-863f-d872cddf07ed", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "88f80bcc-a177-4c28-8f3a-3684198ab9ee"}}}, {"type": "Legend", "id": "442d79e9-e1d7-4fda-8846-35fd5121eb71", "attributes": {"legends": [["1st", [{"type": "GlyphRenderer", "id": "bdccaed2-c4e9-4c58-8e80-a3806160dd4f"}]], ["2nd", [{"type": "GlyphRenderer", "id": "ff37f445-35f9-4dc7-9385-b864b97c2dd5"}]]], "plot": {"type": "Plot", "subtype": "Chart", "id": "88f80bcc-a177-4c28-8f3a-3684198ab9ee"}}}, {"type": "Circle", "id": "e37b9858-1333-435b-933e-44aa1a8d10a2", "attributes": {"line_color": {"value": "#f22c40"}, "y": {"field": "height"}, "x": {"field": "x"}, "size": {"value": 8, "units": "screen"}, "line_alpha": {"field": "line_alpha"}, "fill_color": {"value": "#5ab738"}, "fill_alpha": {"field": "fill_alpha"}}}, {"type": "ResizeTool", "id": "cc5ef0e4-2dd6-4e9d-8776-e8361051e2a1", "attributes": {"plot": {"type": "Plot", "subtype": "Chart", "id": "88f80bcc-a177-4c28-8f3a-3684198ab9ee"}}}, {"type": "ColumnDataSource", "id": "83c87c5d-de2b-40d7-8419-da0a2b78cfa6", "attributes": {"data": {"color": ["#f22c40"], "line_color": ["#f22c40"], "width": [0.2], "sample": ["1st"], "y": [-1.0], "line_alpha": [1.0], "height": [-2.0], "x": ["python:0.333333333333"], "interpreter": ["python"], "chart_index": [{"interpreter": "python", "sample": "1st"}], "fill_alpha": [0.8]}, "column_names": ["line_color", "width", "y", "height", "line_alpha", "fill_alpha", "color", "x"], "callback": null}}, {"type": "GlyphRenderer", "id": "35ba995c-d263-4ea0-a57e-b72e5aa0927c", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "bfc780d3-5697-4d63-93f9-887fe344540c"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "b2436e69-c811-45ad-a323-36e78cd2c3af"}}}, {"type": "CategoricalTickFormatter", "id": "071e390f-f50a-41bc-8a21-d896a84bfa15", "attributes": {}}, {"type": "GlyphRenderer", "id": "4073ee8c-94f4-4f4c-a468-96883bfa59d9", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "a7c087bb-25f0-475f-b289-72b48af22d41"}, "nonselection_glyph": null, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "e37b9858-1333-435b-933e-44aa1a8d10a2"}}}, {"type": "CategoricalTicker", "id": "ed3774b5-1f4c-4fe7-9590-75f5b8fb52f0", "attributes": {}}], "root_ids": ["88f80bcc-a177-4c28-8f3a-3684198ab9ee"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "47883200-85be-4571-bd9c-13ac1f0a3c56", "modelid": "88f80bcc-a177-4c28-8f3a-3684198ab9ee", "elementid": "17b4ec73-cb9e-440d-9126-6b3c8baad205"}];
          
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