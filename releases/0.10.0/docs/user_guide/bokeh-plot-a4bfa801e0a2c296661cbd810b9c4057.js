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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.10.0.min.js"

  var elt = document.getElementById("b9bbf8a0-bbe2-43cc-9152-5a945fe06490");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b9bbf8a0-bbe2-43cc-9152-5a945fe06490' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"subtype": "Figure", "type": "Plot", "id": "30b60457-3131-4bef-aade-4edb01b2a4f2", "attributes": {"x_range": {"type": "DataRange1d", "id": "e7eeb069-653e-425f-b917-c2eb3ed98ed8"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "5f13c0c1-141d-4278-989d-190da4ce6ec1"}, {"type": "WheelZoomTool", "id": "986bc503-90b4-496c-bb12-b43ab4f0b361"}, {"type": "BoxZoomTool", "id": "c846e720-5195-48df-a399-9f7e2de5855b"}, {"type": "PreviewSaveTool", "id": "bd3cf98a-21d4-4b9a-ad14-9b052fe10e9c"}, {"type": "ResizeTool", "id": "09453d6b-7666-49c2-b046-41288e291ceb"}, {"type": "ResetTool", "id": "ddb9506e-a39d-441c-aba7-50d4a0373044"}, {"type": "HelpTool", "id": "e21a6621-dc16-481d-9bff-8cf93876125f"}], "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "46bb97fa-5414-42ef-aa5c-c90f19e61daa"}, {"type": "Grid", "id": "b60d9753-5982-4830-aa7c-478300d5b43c"}, {"type": "LinearAxis", "id": "7dd70141-f58a-48c9-98bd-cbfe748c8337"}, {"type": "Grid", "id": "0823c0c6-6949-4121-a00b-1d5008cd4c3b"}, {"type": "GlyphRenderer", "id": "cb28e9d2-da0f-4e21-b188-474edb0dd0e5"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "d501a51d-fd50-468b-8fc1-78ae024be756"}, "above": [], "doc": null, "id": "30b60457-3131-4bef-aade-4edb01b2a4f2", "y_range": {"type": "DataRange1d", "id": "20e42c8e-dbaf-4714-a329-72dd0586aa9f"}, "below": [{"type": "LinearAxis", "id": "46bb97fa-5414-42ef-aa5c-c90f19e61daa"}], "left": [{"type": "LinearAxis", "id": "7dd70141-f58a-48c9-98bd-cbfe748c8337"}]}}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "30b60457-3131-4bef-aade-4edb01b2a4f2"}, "tags": [], "doc": null, "id": "bd3cf98a-21d4-4b9a-ad14-9b052fe10e9c"}, "type": "PreviewSaveTool", "id": "bd3cf98a-21d4-4b9a-ad14-9b052fe10e9c"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "250ead09-dacc-4e32-ba7f-0cca4e09675c", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "250ead09-dacc-4e32-ba7f-0cca4e09675c"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "30b60457-3131-4bef-aade-4edb01b2a4f2"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "e669b957-fd14-406e-90e0-6c16434f8a1c"}, "ticker": {"type": "BasicTicker", "id": "250ead09-dacc-4e32-ba7f-0cca4e09675c"}, "id": "7dd70141-f58a-48c9-98bd-cbfe748c8337"}, "type": "LinearAxis", "id": "7dd70141-f58a-48c9-98bd-cbfe748c8337"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "20e42c8e-dbaf-4714-a329-72dd0586aa9f"}, "type": "DataRange1d", "id": "20e42c8e-dbaf-4714-a329-72dd0586aa9f"}, {"attributes": {"doc": null, "id": "e669b957-fd14-406e-90e0-6c16434f8a1c", "tags": []}, "type": "BasicTickFormatter", "id": "e669b957-fd14-406e-90e0-6c16434f8a1c"}, {"attributes": {"doc": null, "id": "f0996669-5b9c-4634-a47b-e33b41cf82c3", "tags": []}, "type": "BasicTickFormatter", "id": "f0996669-5b9c-4634-a47b-e33b41cf82c3"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "d501a51d-fd50-468b-8fc1-78ae024be756"}, "type": "ToolEvents", "id": "d501a51d-fd50-468b-8fc1-78ae024be756"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "30b60457-3131-4bef-aade-4edb01b2a4f2"}, "tags": [], "doc": null, "id": "ddb9506e-a39d-441c-aba7-50d4a0373044"}, "type": "ResetTool", "id": "ddb9506e-a39d-441c-aba7-50d4a0373044"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "start_angle": {"units": "rad", "value": 0.4}, "doc": null, "tags": [], "end_angle": {"units": "rad", "value": 4.8}, "radius": {"units": "data", "value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "e03f493c-370f-45e3-b8a2-44ebb84d32ed"}, "type": "Arc", "id": "e03f493c-370f-45e3-b8a2-44ebb84d32ed"}, {"attributes": {"line_color": {"value": "navy"}, "line_alpha": {"value": 1.0}, "start_angle": {"units": "rad", "value": 0.4}, "doc": null, "tags": [], "end_angle": {"units": "rad", "value": 4.8}, "radius": {"units": "data", "value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "4d58b0d6-9430-475d-9111-06bd330c99a8"}, "type": "Arc", "id": "4d58b0d6-9430-475d-9111-06bd330c99a8"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [1, 2, 3], "x": [1, 2, 3]}, "id": "9d3c8334-682e-4c8b-b6ea-2b3bed4b0fff"}, "type": "ColumnDataSource", "id": "9d3c8334-682e-4c8b-b6ea-2b3bed4b0fff"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "30b60457-3131-4bef-aade-4edb01b2a4f2"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "250ead09-dacc-4e32-ba7f-0cca4e09675c"}, "id": "0823c0c6-6949-4121-a00b-1d5008cd4c3b"}, "type": "Grid", "id": "0823c0c6-6949-4121-a00b-1d5008cd4c3b"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "1bd4608e-9986-4508-93fa-61d468c2794a", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "1bd4608e-9986-4508-93fa-61d468c2794a"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "30b60457-3131-4bef-aade-4edb01b2a4f2"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "986bc503-90b4-496c-bb12-b43ab4f0b361"}, "type": "WheelZoomTool", "id": "986bc503-90b4-496c-bb12-b43ab4f0b361"}, {"attributes": {"nonselection_glyph": {"type": "Arc", "id": "e03f493c-370f-45e3-b8a2-44ebb84d32ed"}, "data_source": {"type": "ColumnDataSource", "id": "9d3c8334-682e-4c8b-b6ea-2b3bed4b0fff"}, "tags": [], "doc": null, "selection_glyph": null, "id": "cb28e9d2-da0f-4e21-b188-474edb0dd0e5", "glyph": {"type": "Arc", "id": "4d58b0d6-9430-475d-9111-06bd330c99a8"}}, "type": "GlyphRenderer", "id": "cb28e9d2-da0f-4e21-b188-474edb0dd0e5"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "30b60457-3131-4bef-aade-4edb01b2a4f2"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "c846e720-5195-48df-a399-9f7e2de5855b"}, "type": "BoxZoomTool", "id": "c846e720-5195-48df-a399-9f7e2de5855b"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "30b60457-3131-4bef-aade-4edb01b2a4f2"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "f0996669-5b9c-4634-a47b-e33b41cf82c3"}, "ticker": {"type": "BasicTicker", "id": "1bd4608e-9986-4508-93fa-61d468c2794a"}, "id": "46bb97fa-5414-42ef-aa5c-c90f19e61daa"}, "type": "LinearAxis", "id": "46bb97fa-5414-42ef-aa5c-c90f19e61daa"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "30b60457-3131-4bef-aade-4edb01b2a4f2"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "1bd4608e-9986-4508-93fa-61d468c2794a"}, "id": "b60d9753-5982-4830-aa7c-478300d5b43c"}, "type": "Grid", "id": "b60d9753-5982-4830-aa7c-478300d5b43c"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "30b60457-3131-4bef-aade-4edb01b2a4f2"}, "tags": [], "doc": null, "id": "09453d6b-7666-49c2-b046-41288e291ceb"}, "type": "ResizeTool", "id": "09453d6b-7666-49c2-b046-41288e291ceb"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "30b60457-3131-4bef-aade-4edb01b2a4f2"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "5f13c0c1-141d-4278-989d-190da4ce6ec1"}, "type": "PanTool", "id": "5f13c0c1-141d-4278-989d-190da4ce6ec1"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "e7eeb069-653e-425f-b917-c2eb3ed98ed8"}, "type": "DataRange1d", "id": "e7eeb069-653e-425f-b917-c2eb3ed98ed8"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "30b60457-3131-4bef-aade-4edb01b2a4f2"}, "tags": [], "doc": null, "id": "e21a6621-dc16-481d-9bff-8cf93876125f"}, "type": "HelpTool", "id": "e21a6621-dc16-481d-9bff-8cf93876125f"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("b9bbf8a0-bbe2-43cc-9152-5a945fe06490", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("b9bbf8a0-bbe2-43cc-9152-5a945fe06490", all_models);
    });
  }

}(this));