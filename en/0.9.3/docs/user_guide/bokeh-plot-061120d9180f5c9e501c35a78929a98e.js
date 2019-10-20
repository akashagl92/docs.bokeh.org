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

  var elt = document.getElementById("c5801f43-b330-4095-8c38-30e05f77cb7b");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c5801f43-b330-4095-8c38-30e05f77cb7b' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "9d04b7c0-abb4-4266-8ea6-399e24c21740"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "aabda1c2-7288-432c-94dc-377b7267d28d"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "896778e4-1d75-4cfe-83c4-6992a2080fcb"}, {"type": "Grid", "id": "582daa2f-6e02-4ce8-b71f-36c663b4ddff"}, {"type": "LinearAxis", "id": "1e507c6d-e5f3-47bf-bab8-36985d201d28"}, {"type": "Grid", "id": "b1c8805b-20d8-400b-85f0-f72235b545c6"}, {"type": "GlyphRenderer", "id": "4aedf1f9-36c4-4122-a275-46fa26c88612"}], "below": [{"type": "LinearAxis", "id": "896778e4-1d75-4cfe-83c4-6992a2080fcb"}], "left": [{"type": "LinearAxis", "id": "1e507c6d-e5f3-47bf-bab8-36985d201d28"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "title": null, "tools": [{"type": "BoxZoomTool", "id": "dfdbdae6-c6fa-47cf-820c-c6fee075caca"}, {"type": "BoxSelectTool", "id": "a148fd59-b35e-4dff-9952-c2dcb4e1777a"}, {"type": "CrosshairTool", "id": "22f47f08-9afb-4392-86c3-293638c9e8b5"}, {"type": "ResizeTool", "id": "7ef39e73-3e57-4cac-a954-7d2b8897a2a8"}, {"type": "ResetTool", "id": "d66043b5-55b3-4782-b9cc-4d1d668a04aa"}], "x_range": {"type": "DataRange1d", "id": "ab2f648c-683b-4661-b95d-3eb39a04980a"}, "id": "c408dc02-4f54-43fb-b6f5-afb4bbe9a4ad"}, "id": "c408dc02-4f54-43fb-b6f5-afb4bbe9a4ad", "subtype": "Figure"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "df77ee43-d433-464f-8a85-29fd7e248833"}, "tags": [], "glyph": {"type": "Circle", "id": "4144f351-5d89-4fea-a7b8-d54a9aa1089d"}, "doc": null, "nonselection_glyph": {"type": "Circle", "id": "726a841a-ff11-4e05-9aef-169278c980c3"}, "selection_glyph": null, "id": "4aedf1f9-36c4-4122-a275-46fa26c88612"}, "id": "4aedf1f9-36c4-4122-a275-46fa26c88612"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 0.1}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 10}, "line_alpha": {"value": 0.1}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "726a841a-ff11-4e05-9aef-169278c980c3"}, "id": "726a841a-ff11-4e05-9aef-169278c980c3"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "c408dc02-4f54-43fb-b6f5-afb4bbe9a4ad", "subtype": "Figure"}, "id": "dfdbdae6-c6fa-47cf-820c-c6fee075caca"}, "id": "dfdbdae6-c6fa-47cf-820c-c6fee075caca"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "0697807e-2aa6-439c-a27f-0fd3a96cef61"}, "id": "0697807e-2aa6-439c-a27f-0fd3a96cef61"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "8ce11c5f-0466-4e5a-b4b0-0c8e78e3674d"}, "id": "8ce11c5f-0466-4e5a-b4b0-0c8e78e3674d"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "0697807e-2aa6-439c-a27f-0fd3a96cef61"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "c408dc02-4f54-43fb-b6f5-afb4bbe9a4ad", "subtype": "Figure"}, "dimension": 1, "id": "b1c8805b-20d8-400b-85f0-f72235b545c6"}, "id": "b1c8805b-20d8-400b-85f0-f72235b545c6"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "c408dc02-4f54-43fb-b6f5-afb4bbe9a4ad", "subtype": "Figure"}, "id": "d66043b5-55b3-4782-b9cc-4d1d668a04aa", "tags": [], "doc": null}, "id": "d66043b5-55b3-4782-b9cc-4d1d668a04aa"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "9d04b7c0-abb4-4266-8ea6-399e24c21740", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "9d04b7c0-abb4-4266-8ea6-399e24c21740"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "c1989ff1-4527-43c2-976d-5b28a535762f", "tags": []}, "id": "c1989ff1-4527-43c2-976d-5b28a535762f"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "8ce11c5f-0466-4e5a-b4b0-0c8e78e3674d"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "c408dc02-4f54-43fb-b6f5-afb4bbe9a4ad", "subtype": "Figure"}, "dimension": 0, "id": "582daa2f-6e02-4ce8-b71f-36c663b4ddff"}, "id": "582daa2f-6e02-4ce8-b71f-36c663b4ddff"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "aabda1c2-7288-432c-94dc-377b7267d28d", "tags": [], "geometries": []}, "id": "aabda1c2-7288-432c-94dc-377b7267d28d"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 1.0}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 10}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "4144f351-5d89-4fea-a7b8-d54a9aa1089d"}, "id": "4144f351-5d89-4fea-a7b8-d54a9aa1089d"}, {"type": "CrosshairTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "c408dc02-4f54-43fb-b6f5-afb4bbe9a4ad", "subtype": "Figure"}, "id": "22f47f08-9afb-4392-86c3-293638c9e8b5"}, "id": "22f47f08-9afb-4392-86c3-293638c9e8b5"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "0697807e-2aa6-439c-a27f-0fd3a96cef61"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "4f6199fd-0b31-4197-9121-8c49d8076b9d"}, "plot": {"type": "Plot", "id": "c408dc02-4f54-43fb-b6f5-afb4bbe9a4ad", "subtype": "Figure"}, "id": "1e507c6d-e5f3-47bf-bab8-36985d201d28"}, "id": "1e507c6d-e5f3-47bf-bab8-36985d201d28"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "8ce11c5f-0466-4e5a-b4b0-0c8e78e3674d"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "c1989ff1-4527-43c2-976d-5b28a535762f"}, "plot": {"type": "Plot", "id": "c408dc02-4f54-43fb-b6f5-afb4bbe9a4ad", "subtype": "Figure"}, "id": "896778e4-1d75-4cfe-83c4-6992a2080fcb"}, "id": "896778e4-1d75-4cfe-83c4-6992a2080fcb"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5]}, "doc": null, "id": "df77ee43-d433-464f-8a85-29fd7e248833", "column_names": ["y", "x"]}, "id": "df77ee43-d433-464f-8a85-29fd7e248833"}, {"type": "BoxSelectTool", "attributes": {"callback": null, "dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "c408dc02-4f54-43fb-b6f5-afb4bbe9a4ad", "subtype": "Figure"}, "id": "a148fd59-b35e-4dff-9952-c2dcb4e1777a", "names": [], "renderers": [{"type": "GlyphRenderer", "id": "4aedf1f9-36c4-4122-a275-46fa26c88612"}]}, "id": "a148fd59-b35e-4dff-9952-c2dcb4e1777a"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "ab2f648c-683b-4661-b95d-3eb39a04980a", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "ab2f648c-683b-4661-b95d-3eb39a04980a"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "4f6199fd-0b31-4197-9121-8c49d8076b9d", "tags": []}, "id": "4f6199fd-0b31-4197-9121-8c49d8076b9d"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "c408dc02-4f54-43fb-b6f5-afb4bbe9a4ad", "subtype": "Figure"}, "id": "7ef39e73-3e57-4cac-a954-7d2b8897a2a8", "tags": [], "doc": null}, "id": "7ef39e73-3e57-4cac-a954-7d2b8897a2a8"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("c5801f43-b330-4095-8c38-30e05f77cb7b", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("c5801f43-b330-4095-8c38-30e05f77cb7b", all_models);
    });
  }

}(this));