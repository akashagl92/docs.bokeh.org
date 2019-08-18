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

  var elt = document.getElementById("fc490d71-e37e-4477-b386-dee28b0480e1");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'fc490d71-e37e-4477-b386-dee28b0480e1' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "781f53a3-b581-4697-8073-9de7032cd7e3"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "3c9cd6fe-d946-4f56-b245-e1041df6177c"}, "ticker": {"type": "BasicTicker", "id": "461efff5-5086-4952-b915-19d1f621f649"}, "id": "d244a2f0-b97e-490d-87d4-3691b31d275d"}, "type": "LinearAxis", "id": "d244a2f0-b97e-490d-87d4-3691b31d275d"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "781f53a3-b581-4697-8073-9de7032cd7e3"}, "tags": [], "doc": null, "id": "4bda41be-53a9-4ae5-a7e1-578404e8fdd4"}, "type": "PreviewSaveTool", "id": "4bda41be-53a9-4ae5-a7e1-578404e8fdd4"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "461efff5-5086-4952-b915-19d1f621f649", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "461efff5-5086-4952-b915-19d1f621f649"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "781f53a3-b581-4697-8073-9de7032cd7e3"}, "tags": [], "doc": null, "id": "90020447-2823-4545-a5ca-8c763981de29"}, "type": "ResetTool", "id": "90020447-2823-4545-a5ca-8c763981de29"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "doc": null, "tags": [], "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "1140dd99-5983-4af1-909d-f49da372c334"}, "type": "Patch", "id": "1140dd99-5983-4af1-909d-f49da372c334"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "781f53a3-b581-4697-8073-9de7032cd7e3"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "43aba36a-9200-4496-87c7-501e73d67bee"}, "id": "bffc3694-39e5-40ee-ae75-f84ff6da6372"}, "type": "Grid", "id": "bffc3694-39e5-40ee-ae75-f84ff6da6372"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "781f53a3-b581-4697-8073-9de7032cd7e3"}, "tags": [], "doc": null, "id": "0237b4f9-9331-4eb5-b949-3c5243f7175e"}, "type": "ResizeTool", "id": "0237b4f9-9331-4eb5-b949-3c5243f7175e"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "781f53a3-b581-4697-8073-9de7032cd7e3"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "26a8d74b-5155-4c6e-8e25-197b1ad75bfa"}, "type": "BoxZoomTool", "id": "26a8d74b-5155-4c6e-8e25-197b1ad75bfa"}, {"subtype": "Figure", "type": "Plot", "id": "781f53a3-b581-4697-8073-9de7032cd7e3", "attributes": {"x_range": {"type": "DataRange1d", "id": "e798b170-9473-427e-a831-aca96af39083"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "d7b2843e-094b-45a1-ac27-2c1483318b55"}, {"type": "WheelZoomTool", "id": "06b3655d-4efa-4cde-aeb3-01877a128484"}, {"type": "BoxZoomTool", "id": "26a8d74b-5155-4c6e-8e25-197b1ad75bfa"}, {"type": "PreviewSaveTool", "id": "4bda41be-53a9-4ae5-a7e1-578404e8fdd4"}, {"type": "ResizeTool", "id": "0237b4f9-9331-4eb5-b949-3c5243f7175e"}, {"type": "ResetTool", "id": "90020447-2823-4545-a5ca-8c763981de29"}, {"type": "HelpTool", "id": "41368097-dd6d-4983-bc88-d970465ce20b"}], "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "d244a2f0-b97e-490d-87d4-3691b31d275d"}, {"type": "Grid", "id": "3a7fa251-1164-46e9-b529-4b04040aa58f"}, {"type": "LinearAxis", "id": "08b042a7-6e5d-4b14-86cb-160c301e7076"}, {"type": "Grid", "id": "bffc3694-39e5-40ee-ae75-f84ff6da6372"}, {"type": "GlyphRenderer", "id": "2016d575-6d9f-44e7-96ca-4cd3cb1e852f"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "5f9ac49b-7a5b-4045-ac56-1f8e12db62e4"}, "above": [], "doc": null, "id": "781f53a3-b581-4697-8073-9de7032cd7e3", "y_range": {"type": "DataRange1d", "id": "0756cad3-c40a-4af9-9d15-f02fc793a949"}, "below": [{"type": "LinearAxis", "id": "d244a2f0-b97e-490d-87d4-3691b31d275d"}], "left": [{"type": "LinearAxis", "id": "08b042a7-6e5d-4b14-86cb-160c301e7076"}]}}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "781f53a3-b581-4697-8073-9de7032cd7e3"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "97f8bcc3-4f5b-4aaf-82d5-9c2ee2f9b730"}, "ticker": {"type": "BasicTicker", "id": "43aba36a-9200-4496-87c7-501e73d67bee"}, "id": "08b042a7-6e5d-4b14-86cb-160c301e7076"}, "type": "LinearAxis", "id": "08b042a7-6e5d-4b14-86cb-160c301e7076"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "781f53a3-b581-4697-8073-9de7032cd7e3"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "06b3655d-4efa-4cde-aeb3-01877a128484"}, "type": "WheelZoomTool", "id": "06b3655d-4efa-4cde-aeb3-01877a128484"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "0756cad3-c40a-4af9-9d15-f02fc793a949"}, "type": "DataRange1d", "id": "0756cad3-c40a-4af9-9d15-f02fc793a949"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "781f53a3-b581-4697-8073-9de7032cd7e3"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "d7b2843e-094b-45a1-ac27-2c1483318b55"}, "type": "PanTool", "id": "d7b2843e-094b-45a1-ac27-2c1483318b55"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "43aba36a-9200-4496-87c7-501e73d67bee", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "43aba36a-9200-4496-87c7-501e73d67bee"}, {"attributes": {"doc": null, "id": "97f8bcc3-4f5b-4aaf-82d5-9c2ee2f9b730", "tags": []}, "type": "BasicTickFormatter", "id": "97f8bcc3-4f5b-4aaf-82d5-9c2ee2f9b730"}, {"attributes": {"doc": null, "id": "3c9cd6fe-d946-4f56-b245-e1041df6177c", "tags": []}, "type": "BasicTickFormatter", "id": "3c9cd6fe-d946-4f56-b245-e1041df6177c"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "781f53a3-b581-4697-8073-9de7032cd7e3"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "461efff5-5086-4952-b915-19d1f621f649"}, "id": "3a7fa251-1164-46e9-b529-4b04040aa58f"}, "type": "Grid", "id": "3a7fa251-1164-46e9-b529-4b04040aa58f"}, {"attributes": {"nonselection_glyph": {"type": "Patch", "id": "1140dd99-5983-4af1-909d-f49da372c334"}, "data_source": {"type": "ColumnDataSource", "id": "5f609f81-5538-4e7a-86f2-a1edd05a9f90"}, "tags": [], "doc": null, "selection_glyph": null, "id": "2016d575-6d9f-44e7-96ca-4cd3cb1e852f", "glyph": {"type": "Patch", "id": "56793717-1653-4f5b-a20c-a4799779196b"}}, "type": "GlyphRenderer", "id": "2016d575-6d9f-44e7-96ca-4cd3cb1e852f"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_width": {"value": 2}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.5}, "doc": null, "tags": [], "fill_alpha": {"value": 0.5}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "56793717-1653-4f5b-a20c-a4799779196b"}, "type": "Patch", "id": "56793717-1653-4f5b-a20c-a4799779196b"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [6.0, 7.0, 5.0, "NaN", 7.0, 3.0, 6.0], "x": [1.0, 2.0, 3.0, "NaN", 4.0, 5.0, 6.0]}, "id": "5f609f81-5538-4e7a-86f2-a1edd05a9f90"}, "type": "ColumnDataSource", "id": "5f609f81-5538-4e7a-86f2-a1edd05a9f90"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "e798b170-9473-427e-a831-aca96af39083"}, "type": "DataRange1d", "id": "e798b170-9473-427e-a831-aca96af39083"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "781f53a3-b581-4697-8073-9de7032cd7e3"}, "tags": [], "doc": null, "id": "41368097-dd6d-4983-bc88-d970465ce20b"}, "type": "HelpTool", "id": "41368097-dd6d-4983-bc88-d970465ce20b"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "5f9ac49b-7a5b-4045-ac56-1f8e12db62e4"}, "type": "ToolEvents", "id": "5f9ac49b-7a5b-4045-ac56-1f8e12db62e4"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("fc490d71-e37e-4477-b386-dee28b0480e1", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("fc490d71-e37e-4477-b386-dee28b0480e1", all_models);
    });
  }

}(this));