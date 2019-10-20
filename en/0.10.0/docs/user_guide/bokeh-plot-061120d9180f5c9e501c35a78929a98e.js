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

  var elt = document.getElementById("eb5458e2-3d60-4274-a7b2-0da6fa463256");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'eb5458e2-3d60-4274-a7b2-0da6fa463256' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "670d2b86-d0e6-4686-abbe-3e86a708bc77"}, "type": "DataRange1d", "id": "670d2b86-d0e6-4686-abbe-3e86a708bc77"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "4a655561-e047-47d1-aa72-017bce51a9b5"}, "type": "DataRange1d", "id": "4a655561-e047-47d1-aa72-017bce51a9b5"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "2cf5367b-999b-45ef-b2b6-d4e76bee9d33"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "19a6ae91-bc73-43b5-8397-d7fd2abbf951"}, "type": "CrosshairTool", "id": "19a6ae91-bc73-43b5-8397-d7fd2abbf951"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "2cf5367b-999b-45ef-b2b6-d4e76bee9d33"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "ec8b887f-74a1-4b72-bf8a-76c761991ac9"}, "id": "65ab97db-f977-47c0-b182-6608349ccb6b"}, "type": "Grid", "id": "65ab97db-f977-47c0-b182-6608349ccb6b"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "2cf5367b-999b-45ef-b2b6-d4e76bee9d33"}, "tags": [], "doc": null, "id": "8aaa5774-2977-4795-b144-31c07d2b84e9"}, "type": "ResizeTool", "id": "8aaa5774-2977-4795-b144-31c07d2b84e9"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "2cf5367b-999b-45ef-b2b6-d4e76bee9d33"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "dcef8a4d-6143-4e3e-b0e5-43fc8e201675"}, "ticker": {"type": "BasicTicker", "id": "4d60e6aa-a317-4285-934b-10eb4daeeb07"}, "id": "d84d0816-ab9a-49b7-bb78-838f1a9643b4"}, "type": "LinearAxis", "id": "d84d0816-ab9a-49b7-bb78-838f1a9643b4"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5]}, "id": "2f3142e2-04de-4714-b7cf-ab986f483794"}, "type": "ColumnDataSource", "id": "2f3142e2-04de-4714-b7cf-ab986f483794"}, {"attributes": {"doc": null, "id": "dcef8a4d-6143-4e3e-b0e5-43fc8e201675", "tags": []}, "type": "BasicTickFormatter", "id": "dcef8a4d-6143-4e3e-b0e5-43fc8e201675"}, {"attributes": {"doc": null, "id": "584719ac-aad6-4867-a649-66862c0e1e95", "tags": []}, "type": "BasicTickFormatter", "id": "584719ac-aad6-4867-a649-66862c0e1e95"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "2cf5367b-999b-45ef-b2b6-d4e76bee9d33"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "8f790c8d-8abb-4681-8a6a-2fcbb445e367"}, "type": "BoxZoomTool", "id": "8f790c8d-8abb-4681-8a6a-2fcbb445e367"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "2cf5367b-999b-45ef-b2b6-d4e76bee9d33"}, "tags": [], "doc": null, "id": "548ae466-f2e2-4825-b7bf-d4607a70f3b7"}, "type": "ResetTool", "id": "548ae466-f2e2-4825-b7bf-d4607a70f3b7"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 1.0}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "20ba540e-cec0-4500-acae-b2742619f9ff", "size": {"units": "screen", "value": 10}}, "type": "Circle", "id": "20ba540e-cec0-4500-acae-b2742619f9ff"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "2cf5367b-999b-45ef-b2b6-d4e76bee9d33"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "renderers": [{"type": "GlyphRenderer", "id": "d0226b62-9236-449e-ad8a-122334c23f96"}], "callback": null, "names": [], "id": "d3d5bbdd-6113-4f55-bcb0-0fa3c915b8da"}, "type": "BoxSelectTool", "id": "d3d5bbdd-6113-4f55-bcb0-0fa3c915b8da"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "ec8b887f-74a1-4b72-bf8a-76c761991ac9", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "ec8b887f-74a1-4b72-bf8a-76c761991ac9"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "4d60e6aa-a317-4285-934b-10eb4daeeb07", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "4d60e6aa-a317-4285-934b-10eb4daeeb07"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "2cf5367b-999b-45ef-b2b6-d4e76bee9d33"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "4d60e6aa-a317-4285-934b-10eb4daeeb07"}, "id": "7baadf7d-6189-4d2d-a4ea-cb4f1dcc3ba7"}, "type": "Grid", "id": "7baadf7d-6189-4d2d-a4ea-cb4f1dcc3ba7"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "2cf5367b-999b-45ef-b2b6-d4e76bee9d33"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "584719ac-aad6-4867-a649-66862c0e1e95"}, "ticker": {"type": "BasicTicker", "id": "ec8b887f-74a1-4b72-bf8a-76c761991ac9"}, "id": "d0b5f5ae-d047-48b3-8a19-71a20fc0a6bf"}, "type": "LinearAxis", "id": "d0b5f5ae-d047-48b3-8a19-71a20fc0a6bf"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "c071f588-f7c4-4ed9-a1c7-21a1cb71c2a8"}, "type": "ToolEvents", "id": "c071f588-f7c4-4ed9-a1c7-21a1cb71c2a8"}, {"attributes": {"nonselection_glyph": {"type": "Circle", "id": "22269e3a-dc98-4be8-b9b8-8fe4ed6ffa67"}, "data_source": {"type": "ColumnDataSource", "id": "2f3142e2-04de-4714-b7cf-ab986f483794"}, "tags": [], "doc": null, "selection_glyph": null, "id": "d0226b62-9236-449e-ad8a-122334c23f96", "glyph": {"type": "Circle", "id": "20ba540e-cec0-4500-acae-b2742619f9ff"}}, "type": "GlyphRenderer", "id": "d0226b62-9236-449e-ad8a-122334c23f96"}, {"subtype": "Figure", "type": "Plot", "id": "2cf5367b-999b-45ef-b2b6-d4e76bee9d33", "attributes": {"x_range": {"type": "DataRange1d", "id": "670d2b86-d0e6-4686-abbe-3e86a708bc77"}, "right": [], "tags": [], "tools": [{"type": "BoxZoomTool", "id": "8f790c8d-8abb-4681-8a6a-2fcbb445e367"}, {"type": "BoxSelectTool", "id": "d3d5bbdd-6113-4f55-bcb0-0fa3c915b8da"}, {"type": "CrosshairTool", "id": "19a6ae91-bc73-43b5-8397-d7fd2abbf951"}, {"type": "ResizeTool", "id": "8aaa5774-2977-4795-b144-31c07d2b84e9"}, {"type": "ResetTool", "id": "548ae466-f2e2-4825-b7bf-d4607a70f3b7"}], "title": null, "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "d84d0816-ab9a-49b7-bb78-838f1a9643b4"}, {"type": "Grid", "id": "7baadf7d-6189-4d2d-a4ea-cb4f1dcc3ba7"}, {"type": "LinearAxis", "id": "d0b5f5ae-d047-48b3-8a19-71a20fc0a6bf"}, {"type": "Grid", "id": "65ab97db-f977-47c0-b182-6608349ccb6b"}, {"type": "GlyphRenderer", "id": "d0226b62-9236-449e-ad8a-122334c23f96"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "c071f588-f7c4-4ed9-a1c7-21a1cb71c2a8"}, "above": [], "doc": null, "id": "2cf5367b-999b-45ef-b2b6-d4e76bee9d33", "y_range": {"type": "DataRange1d", "id": "4a655561-e047-47d1-aa72-017bce51a9b5"}, "below": [{"type": "LinearAxis", "id": "d84d0816-ab9a-49b7-bb78-838f1a9643b4"}], "left": [{"type": "LinearAxis", "id": "d0b5f5ae-d047-48b3-8a19-71a20fc0a6bf"}]}}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "22269e3a-dc98-4be8-b9b8-8fe4ed6ffa67", "size": {"units": "screen", "value": 10}}, "type": "Circle", "id": "22269e3a-dc98-4be8-b9b8-8fe4ed6ffa67"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("eb5458e2-3d60-4274-a7b2-0da6fa463256", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("eb5458e2-3d60-4274-a7b2-0da6fa463256", all_models);
    });
  }

}(this));