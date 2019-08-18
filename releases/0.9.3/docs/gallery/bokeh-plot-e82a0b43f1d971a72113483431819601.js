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

  var elt = document.getElementById("03a91b27-eef2-4e06-a005-490cf9d0c0f2");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '03a91b27-eef2-4e06-a005-490cf9d0c0f2' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "Range1d", "id": "6a6fa0d1-a331-45e5-a904-7c585ff6505a"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "5775d60f-812f-416b-ba7c-c3c270dcfe7a"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "4d2799f5-ebce-45f7-8566-8114da92f438"}, {"type": "LinearAxis", "id": "b5841983-0df0-4cc4-a91d-1a93c47ad009"}, {"type": "Grid", "id": "987e6dd1-0daf-4cc6-b696-29f9a91a0ad1"}, {"type": "Grid", "id": "2b3cf31d-0b68-41b7-950e-4e8b52aeda0d"}, {"type": "GlyphRenderer", "id": "bc36eada-4b24-40dc-8e76-4b657bed5b52"}, {"type": "GlyphRenderer", "id": "32ae2e47-09de-44d6-b567-45ca1f890837"}, {"type": "GlyphRenderer", "id": "0de4d892-ce1d-4980-914d-ffaa8bc7d612"}, {"type": "Legend", "id": "69df82a5-240c-4beb-8aac-c6b9d160e22f"}], "below": [{"type": "LinearAxis", "id": "4d2799f5-ebce-45f7-8566-8114da92f438"}], "left": [{"type": "LinearAxis", "id": "b5841983-0df0-4cc4-a91d-1a93c47ad009"}], "above": [], "tags": [], "plot_width": 600, "extra_y_ranges": {}, "title": "Area Chart", "tools": [{"type": "PanTool", "id": "22925b20-8c11-45b7-bee5-53a54edfc96f"}, {"type": "WheelZoomTool", "id": "3f1cbd84-07e5-496b-9ce3-9ebfb054de21"}, {"type": "BoxZoomTool", "id": "ed665b1f-3140-454e-88a1-5c4c71f309e5"}, {"type": "PreviewSaveTool", "id": "b1f46885-b0ae-4536-b6ed-b673d4255a9f"}, {"type": "ResizeTool", "id": "51088987-3029-4f67-be7c-d35214be0a2f"}, {"type": "ResetTool", "id": "99ff4f68-1014-4ed4-901a-8f8e46470172"}, {"type": "HelpTool", "id": "8094c45d-3ba3-4373-911a-3e4e1e1cc829"}], "x_range": {"type": "DataRange1d", "id": "d817f47f-394a-46e6-ad8b-fd7660e82d89"}, "id": "48604311-c84e-4c9d-82de-c8ca8c272793"}, "id": "48604311-c84e-4c9d-82de-c8ca8c272793", "subtype": "Chart"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "639c2074-ba69-4d79-b52f-32ce3206c00c", "tags": []}, "id": "639c2074-ba69-4d79-b52f-32ce3206c00c"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y_jython": [111.0, 120.0, 267.0, 266.0, 265.0, 254.0, 233.0, 44.0, 221.0, 26.0, 5.0, 7.0, 3.0, 2.0, 24.0, 46.0, 17.0, 30.0, 52.0, 322.0, 158.0, 436.0, 448.0, 480.0, 467.0, 494.0, 259.0, 271.0], "x": [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "y_pypy": [271.0, 259.0, 494.0, 467.0, 480.0, 448.0, 436.0, 158.0, 322.0, 52.0, 30.0, 17.0, 46.0, 24.0, 36.0, 79.0, 64.0, 45.0, 178.0, 443.0, 302.0, 669.0, 702.0, 705.0, 693.0, 761.0, 369.0, 401.0], "y_python": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 3.0, 7.0, 5.0, 26.0, 221.0, 44.0, 233.0, 254.0, 265.0, 266.0, 267.0, 120.0, 111.0]}, "doc": null, "id": "a95e8b09-fded-4c96-be75-47f65f68855b", "column_names": ["y_jython", "x", "y_pypy", "y_python"]}, "id": "a95e8b09-fded-4c96-be75-47f65f68855b"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "48604311-c84e-4c9d-82de-c8ca8c272793", "subtype": "Chart"}, "id": "3f1cbd84-07e5-496b-9ce3-9ebfb054de21"}, "id": "3f1cbd84-07e5-496b-9ce3-9ebfb054de21"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "48604311-c84e-4c9d-82de-c8ca8c272793", "subtype": "Chart"}, "id": "ed665b1f-3140-454e-88a1-5c4c71f309e5"}, "id": "ed665b1f-3140-454e-88a1-5c4c71f309e5"}, {"type": "Patch", "attributes": {"y": {"field": "y_pypy"}, "fill_alpha": {"value": 0.9}, "fill_color": {"value": "#407ee7"}, "tags": [], "doc": null, "x": {"field": "x"}, "id": "6a51614e-ff01-470c-aefc-bb8bb3657505"}, "id": "6a51614e-ff01-470c-aefc-bb8bb3657505"}, {"type": "Patch", "attributes": {"y": {"field": "y_jython"}, "fill_alpha": {"value": 0.9}, "fill_color": {"value": "#5ab738"}, "tags": [], "doc": null, "x": {"field": "x"}, "id": "1f2a0d8a-8449-49e6-8999-bec1c59182e8"}, "id": "1f2a0d8a-8449-49e6-8999-bec1c59182e8"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "48604311-c84e-4c9d-82de-c8ca8c272793", "subtype": "Chart"}, "id": "8094c45d-3ba3-4373-911a-3e4e1e1cc829", "tags": [], "doc": null}, "id": "8094c45d-3ba3-4373-911a-3e4e1e1cc829"}, {"type": "Patch", "attributes": {"y": {"field": "y_python"}, "fill_alpha": {"value": 0.9}, "fill_color": {"value": "#f22c40"}, "tags": [], "doc": null, "x": {"field": "x"}, "id": "2e743c25-3122-4c8d-b985-ac97695780ff"}, "id": "2e743c25-3122-4c8d-b985-ac97695780ff"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "d817f47f-394a-46e6-ad8b-fd7660e82d89", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "d817f47f-394a-46e6-ad8b-fd7660e82d89"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "b46aa211-8a36-47a3-a83c-de2b2c84ab69", "tags": []}, "id": "b46aa211-8a36-47a3-a83c-de2b2c84ab69"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "48604311-c84e-4c9d-82de-c8ca8c272793", "subtype": "Chart"}, "id": "99ff4f68-1014-4ed4-901a-8f8e46470172", "tags": [], "doc": null}, "id": "99ff4f68-1014-4ed4-901a-8f8e46470172"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "073cac07-882c-420c-9a83-06a490591295", "tags": []}, "id": "073cac07-882c-420c-9a83-06a490591295"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "48604311-c84e-4c9d-82de-c8ca8c272793", "subtype": "Chart"}, "id": "b1f46885-b0ae-4536-b6ed-b673d4255a9f", "tags": [], "doc": null}, "id": "b1f46885-b0ae-4536-b6ed-b673d4255a9f"}, {"type": "Range1d", "attributes": {"callback": null, "id": "6a6fa0d1-a331-45e5-a904-7c585ff6505a", "tags": [], "doc": null, "end": 837.1, "start": -76.10000000000001}, "id": "6a6fa0d1-a331-45e5-a904-7c585ff6505a"}, {"type": "Legend", "attributes": {"legends": [["python", [{"type": "GlyphRenderer", "id": "bc36eada-4b24-40dc-8e76-4b657bed5b52"}]], ["jython", [{"type": "GlyphRenderer", "id": "32ae2e47-09de-44d6-b567-45ca1f890837"}]], ["pypy", [{"type": "GlyphRenderer", "id": "0de4d892-ce1d-4980-914d-ffaa8bc7d612"}]]], "orientation": "top_left", "tags": [], "doc": null, "plot": {"type": "Plot", "id": "48604311-c84e-4c9d-82de-c8ca8c272793", "subtype": "Chart"}, "id": "69df82a5-240c-4beb-8aac-c6b9d160e22f"}, "id": "69df82a5-240c-4beb-8aac-c6b9d160e22f"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "073cac07-882c-420c-9a83-06a490591295"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "48604311-c84e-4c9d-82de-c8ca8c272793", "subtype": "Chart"}, "dimension": 1, "id": "2b3cf31d-0b68-41b7-950e-4e8b52aeda0d"}, "id": "2b3cf31d-0b68-41b7-950e-4e8b52aeda0d"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "48604311-c84e-4c9d-82de-c8ca8c272793", "subtype": "Chart"}, "id": "51088987-3029-4f67-be7c-d35214be0a2f", "tags": [], "doc": null}, "id": "51088987-3029-4f67-be7c-d35214be0a2f"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "48604311-c84e-4c9d-82de-c8ca8c272793", "subtype": "Chart"}, "id": "22925b20-8c11-45b7-bee5-53a54edfc96f"}, "id": "22925b20-8c11-45b7-bee5-53a54edfc96f"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "a95e8b09-fded-4c96-be75-47f65f68855b"}, "tags": [], "glyph": {"type": "Patch", "id": "2e743c25-3122-4c8d-b985-ac97695780ff"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "bc36eada-4b24-40dc-8e76-4b657bed5b52"}, "id": "bc36eada-4b24-40dc-8e76-4b657bed5b52"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "a95e8b09-fded-4c96-be75-47f65f68855b"}, "tags": [], "glyph": {"type": "Patch", "id": "1f2a0d8a-8449-49e6-8999-bec1c59182e8"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "32ae2e47-09de-44d6-b567-45ca1f890837"}, "id": "32ae2e47-09de-44d6-b567-45ca1f890837"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "a95e8b09-fded-4c96-be75-47f65f68855b"}, "tags": [], "glyph": {"type": "Patch", "id": "6a51614e-ff01-470c-aefc-bb8bb3657505"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "0de4d892-ce1d-4980-914d-ffaa8bc7d612"}, "id": "0de4d892-ce1d-4980-914d-ffaa8bc7d612"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "a9c24d3d-4173-40a4-9a73-a0ff6295712c", "tags": []}, "id": "a9c24d3d-4173-40a4-9a73-a0ff6295712c"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "639c2074-ba69-4d79-b52f-32ce3206c00c"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "b46aa211-8a36-47a3-a83c-de2b2c84ab69"}, "plot": {"type": "Plot", "id": "48604311-c84e-4c9d-82de-c8ca8c272793", "subtype": "Chart"}, "axis_label": "time", "id": "4d2799f5-ebce-45f7-8566-8114da92f438"}, "id": "4d2799f5-ebce-45f7-8566-8114da92f438"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "073cac07-882c-420c-9a83-06a490591295"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "a9c24d3d-4173-40a4-9a73-a0ff6295712c"}, "plot": {"type": "Plot", "id": "48604311-c84e-4c9d-82de-c8ca8c272793", "subtype": "Chart"}, "axis_label": "memory", "id": "b5841983-0df0-4cc4-a91d-1a93c47ad009"}, "id": "b5841983-0df0-4cc4-a91d-1a93c47ad009"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "639c2074-ba69-4d79-b52f-32ce3206c00c"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "48604311-c84e-4c9d-82de-c8ca8c272793", "subtype": "Chart"}, "dimension": 0, "id": "987e6dd1-0daf-4cc6-b696-29f9a91a0ad1"}, "id": "987e6dd1-0daf-4cc6-b696-29f9a91a0ad1"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "5775d60f-812f-416b-ba7c-c3c270dcfe7a", "tags": [], "geometries": []}, "id": "5775d60f-812f-416b-ba7c-c3c270dcfe7a"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("03a91b27-eef2-4e06-a005-490cf9d0c0f2", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("03a91b27-eef2-4e06-a005-490cf9d0c0f2", all_models);
    });
  }

}(this));