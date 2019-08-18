(function(global) {
  if (typeof (window._bokeh_onload_callbacks) === "undefined"){
    window._bokeh_onload_callbacks = [];
  }
  function load_lib(url, callback){
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading){
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", new Date());
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", new Date());
    window._bokeh_is_loading = true;
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = function(){
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.9.3.min.js"

  var elt = document.getElementById("1d6a5c99-f93c-4054-9e59-2fa84e19a6cc");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1d6a5c99-f93c-4054-9e59-2fa84e19a6cc' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "736fe91e-1e1d-4de3-a110-4b1fc07b75af", "subtype": "Chart"}, "id": "173288b9-f863-47df-84a0-52ae9da3fa56", "tags": [], "doc": null}, "id": "173288b9-f863-47df-84a0-52ae9da3fa56"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "736fe91e-1e1d-4de3-a110-4b1fc07b75af", "subtype": "Chart"}, "id": "9aaf6c8a-4316-415f-8190-898697d56dc8", "tags": [], "doc": null}, "id": "9aaf6c8a-4316-415f-8190-898697d56dc8"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "736fe91e-1e1d-4de3-a110-4b1fc07b75af", "subtype": "Chart"}, "id": "2b004784-3a6d-4438-bed5-ebab5451f0e2"}, "id": "2b004784-3a6d-4438-bed5-ebab5451f0e2"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "eea236d7-14b0-49ac-86dc-df4e0906faa8", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "eea236d7-14b0-49ac-86dc-df4e0906faa8"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "5cffec60-96a6-4eb4-882a-4d8bd0a5aba8", "tags": []}, "id": "5cffec60-96a6-4eb4-882a-4d8bd0a5aba8"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "736fe91e-1e1d-4de3-a110-4b1fc07b75af", "subtype": "Chart"}, "id": "4ebae915-faaf-4158-a8e8-fac00e9f7b74", "tags": [], "doc": null}, "id": "4ebae915-faaf-4158-a8e8-fac00e9f7b74"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "b331cf7c-efdb-43ad-a5d0-af2c4cfabd15"}, "tags": [], "glyph": {"type": "Line", "id": "c0d177ba-1978-415d-92b8-1689cc53a838"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "8b81f4b7-3eec-48cd-9b9b-38d700bc709e"}, "id": "8b81f4b7-3eec-48cd-9b9b-38d700bc709e"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "736fe91e-1e1d-4de3-a110-4b1fc07b75af", "subtype": "Chart"}, "id": "036ac51f-58e2-4ab0-b208-bc2abfdac01e"}, "id": "036ac51f-58e2-4ab0-b208-bc2abfdac01e"}, {"type": "Legend", "attributes": {"legends": [["python", [{"type": "GlyphRenderer", "id": "7781e65a-bc0b-4b5f-b5d3-3edef0a5719d"}]], ["pypy", [{"type": "GlyphRenderer", "id": "8b81f4b7-3eec-48cd-9b9b-38d700bc709e"}]], ["jython", [{"type": "GlyphRenderer", "id": "063c12e8-8f0f-4924-a01b-6ceeb9a49518"}]]], "orientation": "top_left", "tags": [], "doc": null, "plot": {"type": "Plot", "id": "736fe91e-1e1d-4de3-a110-4b1fc07b75af", "subtype": "Chart"}, "id": "71fe055a-1a55-4978-ad9d-e2e9fbaa24ac"}, "id": "71fe055a-1a55-4978-ad9d-e2e9fbaa24ac"}, {"type": "DatetimeAxis", "attributes": {"doc": null, "ticker": {"type": "DatetimeTicker", "id": "521dfb60-97c2-48ae-83ed-9e466975c03c"}, "tags": [], "formatter": {"type": "DatetimeTickFormatter", "id": "dd7c60cb-d3b8-48e4-a96d-9790914a34c9"}, "plot": {"type": "Plot", "id": "736fe91e-1e1d-4de3-a110-4b1fc07b75af", "subtype": "Chart"}, "axis_label": null, "id": "0df53f79-05eb-4208-99f1-366cee32a74c"}, "id": "0df53f79-05eb-4208-99f1-366cee32a74c"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y_jython": [22, 43, 10, 25, 26], "x_pypy": [1440756045519.181, 1440756105519.181, 1440756165519.181, 1440756225519.181, 1440756285519.181], "x_python": [1440756045519.181, 1440756105519.181, 1440756165519.181, 1440756225519.181, 1440756285519.181], "y_pypy": [12, 33, 47, 15, 126], "y_python": [2, 3, 7, 5, 26], "x_jython": [1440756045519.181, 1440756105519.181, 1440756165519.181, 1440756225519.181, 1440756285519.181]}, "doc": null, "id": "b331cf7c-efdb-43ad-a5d0-af2c4cfabd15", "column_names": ["y_jython", "x_pypy", "x_python", "y_pypy", "x_jython", "y_python"]}, "id": "b331cf7c-efdb-43ad-a5d0-af2c4cfabd15"}, {"type": "Line", "attributes": {"y": {"field": "y_jython"}, "line_color": {"value": "#407ee7"}, "tags": [], "doc": null, "x": {"field": "x_jython"}, "id": "ce35e4c0-93db-4ef3-80fd-e881d2bcc9bf"}, "id": "ce35e4c0-93db-4ef3-80fd-e881d2bcc9bf"}, {"type": "DatetimeTicker", "attributes": {"doc": null, "id": "521dfb60-97c2-48ae-83ed-9e466975c03c", "tags": []}, "id": "521dfb60-97c2-48ae-83ed-9e466975c03c"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "736fe91e-1e1d-4de3-a110-4b1fc07b75af", "subtype": "Chart"}, "id": "7613a6ea-7736-4d38-9eda-cfb0477f1093", "tags": [], "doc": null}, "id": "7613a6ea-7736-4d38-9eda-cfb0477f1093"}, {"type": "Line", "attributes": {"y": {"field": "y_python"}, "line_color": {"value": "#f22c40"}, "tags": [], "doc": null, "x": {"field": "x_python"}, "id": "bbce9163-3891-4693-afbe-a8d5a723bd43"}, "id": "bbce9163-3891-4693-afbe-a8d5a723bd43"}, {"type": "Range1d", "attributes": {"callback": null, "id": "a8e7e951-bc24-488e-a78c-4472c1dc72f9", "tags": [], "doc": null, "end": 138.4, "start": -10.4}, "id": "a8e7e951-bc24-488e-a78c-4472c1dc72f9"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "b331cf7c-efdb-43ad-a5d0-af2c4cfabd15"}, "tags": [], "glyph": {"type": "Line", "id": "bbce9163-3891-4693-afbe-a8d5a723bd43"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "7781e65a-bc0b-4b5f-b5d3-3edef0a5719d"}, "id": "7781e65a-bc0b-4b5f-b5d3-3edef0a5719d"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "96b6b1b9-aa9b-4fee-a6fc-cea7e3583fda", "tags": [], "geometries": []}, "id": "96b6b1b9-aa9b-4fee-a6fc-cea7e3583fda"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "5cffec60-96a6-4eb4-882a-4d8bd0a5aba8"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "ac15de41-e840-448d-bc41-9ae1f12f9397"}, "plot": {"type": "Plot", "id": "736fe91e-1e1d-4de3-a110-4b1fc07b75af", "subtype": "Chart"}, "axis_label": "Languages", "id": "39426064-8de5-41b3-a31d-bf317b10de24"}, "id": "39426064-8de5-41b3-a31d-bf317b10de24"}, {"type": "DatetimeTickFormatter", "attributes": {"formats": {}, "doc": null, "id": "dd7c60cb-d3b8-48e4-a96d-9790914a34c9", "tags": []}, "id": "dd7c60cb-d3b8-48e4-a96d-9790914a34c9"}, {"type": "Grid", "attributes": {"ticker": {"type": "DatetimeTicker", "id": "521dfb60-97c2-48ae-83ed-9e466975c03c"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "736fe91e-1e1d-4de3-a110-4b1fc07b75af", "subtype": "Chart"}, "dimension": 0, "id": "c84968ee-1f3e-4605-997e-4d8de7ff90a8"}, "id": "c84968ee-1f3e-4605-997e-4d8de7ff90a8"}, {"type": "Line", "attributes": {"y": {"field": "y_pypy"}, "line_color": {"value": "#5ab738"}, "tags": [], "doc": null, "x": {"field": "x_pypy"}, "id": "c0d177ba-1978-415d-92b8-1689cc53a838"}, "id": "c0d177ba-1978-415d-92b8-1689cc53a838"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "736fe91e-1e1d-4de3-a110-4b1fc07b75af", "subtype": "Chart"}, "id": "738eb87e-d739-4aba-b05f-eb5aa252c6a6"}, "id": "738eb87e-d739-4aba-b05f-eb5aa252c6a6"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "ac15de41-e840-448d-bc41-9ae1f12f9397", "tags": []}, "id": "ac15de41-e840-448d-bc41-9ae1f12f9397"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "5cffec60-96a6-4eb4-882a-4d8bd0a5aba8"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "736fe91e-1e1d-4de3-a110-4b1fc07b75af", "subtype": "Chart"}, "dimension": 1, "id": "56de87ea-ae8f-4193-b3ce-438748e6d06e"}, "id": "56de87ea-ae8f-4193-b3ce-438748e6d06e"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "b331cf7c-efdb-43ad-a5d0-af2c4cfabd15"}, "tags": [], "glyph": {"type": "Line", "id": "ce35e4c0-93db-4ef3-80fd-e881d2bcc9bf"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "063c12e8-8f0f-4924-a01b-6ceeb9a49518"}, "id": "063c12e8-8f0f-4924-a01b-6ceeb9a49518"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "Range1d", "id": "a8e7e951-bc24-488e-a78c-4472c1dc72f9"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "96b6b1b9-aa9b-4fee-a6fc-cea7e3583fda"}, "right": [], "renderers": [{"type": "DatetimeAxis", "id": "0df53f79-05eb-4208-99f1-366cee32a74c"}, {"type": "LinearAxis", "id": "39426064-8de5-41b3-a31d-bf317b10de24"}, {"type": "Grid", "id": "c84968ee-1f3e-4605-997e-4d8de7ff90a8"}, {"type": "Grid", "id": "56de87ea-ae8f-4193-b3ce-438748e6d06e"}, {"type": "GlyphRenderer", "id": "7781e65a-bc0b-4b5f-b5d3-3edef0a5719d"}, {"type": "GlyphRenderer", "id": "8b81f4b7-3eec-48cd-9b9b-38d700bc709e"}, {"type": "GlyphRenderer", "id": "063c12e8-8f0f-4924-a01b-6ceeb9a49518"}, {"type": "Legend", "id": "71fe055a-1a55-4978-ad9d-e2e9fbaa24ac"}], "below": [{"type": "DatetimeAxis", "id": "0df53f79-05eb-4208-99f1-366cee32a74c"}], "left": [{"type": "LinearAxis", "id": "39426064-8de5-41b3-a31d-bf317b10de24"}], "above": [], "tags": [], "plot_width": 600, "extra_y_ranges": {}, "title": "TimeSeries", "tools": [{"type": "PanTool", "id": "036ac51f-58e2-4ab0-b208-bc2abfdac01e"}, {"type": "WheelZoomTool", "id": "738eb87e-d739-4aba-b05f-eb5aa252c6a6"}, {"type": "BoxZoomTool", "id": "2b004784-3a6d-4438-bed5-ebab5451f0e2"}, {"type": "PreviewSaveTool", "id": "4ebae915-faaf-4158-a8e8-fac00e9f7b74"}, {"type": "ResizeTool", "id": "7613a6ea-7736-4d38-9eda-cfb0477f1093"}, {"type": "ResetTool", "id": "9aaf6c8a-4316-415f-8190-898697d56dc8"}, {"type": "HelpTool", "id": "173288b9-f863-47df-84a0-52ae9da3fa56"}], "x_range": {"type": "DataRange1d", "id": "eea236d7-14b0-49ac-86dc-df4e0906faa8"}, "id": "736fe91e-1e1d-4de3-a110-4b1fc07b75af"}, "id": "736fe91e-1e1d-4de3-a110-4b1fc07b75af", "subtype": "Chart"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("1d6a5c99-f93c-4054-9e59-2fa84e19a6cc", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("1d6a5c99-f93c-4054-9e59-2fa84e19a6cc", all_models);
    });
  }

}(this));