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

  var elt = document.getElementById("4376aa08-60cf-4809-8a5d-62e45f8e0222");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '4376aa08-60cf-4809-8a5d-62e45f8e0222' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "05136627-d8a7-4acf-a58d-b5edc527a56b", "tags": []}, "id": "05136627-d8a7-4acf-a58d-b5edc527a56b"}, {"type": "Range1d", "attributes": {"callback": null, "id": "39246d90-11bb-4093-bc1d-05bd97c6c743", "tags": [], "doc": null, "end": 7.49, "start": 0.4099999999999999}, "id": "39246d90-11bb-4093-bc1d-05bd97c6c743"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "0f4cf843-b00e-4fae-b530-6a5a1b5e33e7", "subtype": "Chart"}, "id": "010d88e3-985a-4bd7-8a72-0b8b8bc7c961", "tags": [], "doc": null}, "id": "010d88e3-985a-4bd7-8a72-0b8b8bc7c961"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "7f399770-230a-4565-b889-01ba60ddaf44"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "ab9372cb-3a25-4e3a-bb67-7883bac7ca6b"}, "plot": {"type": "Plot", "id": "0f4cf843-b00e-4fae-b530-6a5a1b5e33e7", "subtype": "Chart"}, "axis_label": "petal width", "id": "4affa0dc-5fc4-4ef2-bce7-7aefd37f583e"}, "id": "4affa0dc-5fc4-4ef2-bce7-7aefd37f583e"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"x_versicolor": [4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4, 4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1], "y_versicolor": [1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3], "x_setosa": [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4], "y_setosa": [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2], "x_virginica": [6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1], "y_virginica": [2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]}, "doc": null, "id": "ead7efe6-f7f2-4641-afa5-cfe8a3ed3832", "column_names": ["x_versicolor", "y_versicolor", "x_setosa", "y_setosa", "x_virginica", "y_virginica"]}, "id": "ead7efe6-f7f2-4641-afa5-cfe8a3ed3832"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 0.2}, "tags": [], "x": {"field": "x_setosa"}, "y": {"field": "y_setosa"}, "fill_color": {"value": "#5ab738"}, "size": {"units": "screen", "value": 10}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#5ab738"}, "doc": null, "id": "5f100c7c-bd1c-4ea2-b196-aa678ac785ad"}, "id": "5f100c7c-bd1c-4ea2-b196-aa678ac785ad"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "ab9372cb-3a25-4e3a-bb67-7883bac7ca6b", "tags": []}, "id": "ab9372cb-3a25-4e3a-bb67-7883bac7ca6b"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "0f4cf843-b00e-4fae-b530-6a5a1b5e33e7", "subtype": "Chart"}, "id": "c3a7df1b-0961-4e02-b6bb-dea61fac002e"}, "id": "c3a7df1b-0961-4e02-b6bb-dea61fac002e"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "feb0a24b-5974-46fb-b1b4-6f715bd88982"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "05136627-d8a7-4acf-a58d-b5edc527a56b"}, "plot": {"type": "Plot", "id": "0f4cf843-b00e-4fae-b530-6a5a1b5e33e7", "subtype": "Chart"}, "axis_label": "petal length", "id": "198e92fd-86c5-49a1-b34c-3817182ed7e1"}, "id": "198e92fd-86c5-49a1-b34c-3817182ed7e1"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "0f4cf843-b00e-4fae-b530-6a5a1b5e33e7", "subtype": "Chart"}, "id": "ab1b5080-0434-4447-b821-cce20d5cfccf"}, "id": "ab1b5080-0434-4447-b821-cce20d5cfccf"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "ead7efe6-f7f2-4641-afa5-cfe8a3ed3832"}, "tags": [], "glyph": {"type": "Circle", "id": "af06483e-f357-47d0-97d1-9535b557ebd6"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "47add0ea-e052-4708-b86e-095460409833"}, "id": "47add0ea-e052-4708-b86e-095460409833"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "feb0a24b-5974-46fb-b1b4-6f715bd88982", "tags": []}, "id": "feb0a24b-5974-46fb-b1b4-6f715bd88982"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "7f399770-230a-4565-b889-01ba60ddaf44", "tags": []}, "id": "7f399770-230a-4565-b889-01ba60ddaf44"}, {"type": "Range1d", "attributes": {"callback": null, "id": "b3b88748-462e-410e-942c-8fab7644324e", "tags": [], "doc": null, "end": 2.74, "start": -0.13999999999999999}, "id": "b3b88748-462e-410e-942c-8fab7644324e"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 0.2}, "tags": [], "x": {"field": "x_versicolor"}, "y": {"field": "y_versicolor"}, "fill_color": {"value": "#f22c40"}, "size": {"units": "screen", "value": 10}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#f22c40"}, "doc": null, "id": "25887169-6eb4-4a17-a2d5-e0ff3f36587d"}, "id": "25887169-6eb4-4a17-a2d5-e0ff3f36587d"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "7f399770-230a-4565-b889-01ba60ddaf44"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "0f4cf843-b00e-4fae-b530-6a5a1b5e33e7", "subtype": "Chart"}, "dimension": 1, "id": "374a210b-50e1-4b0f-9e02-8cc1ff7acfed"}, "id": "374a210b-50e1-4b0f-9e02-8cc1ff7acfed"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "ead7efe6-f7f2-4641-afa5-cfe8a3ed3832"}, "tags": [], "glyph": {"type": "Circle", "id": "5f100c7c-bd1c-4ea2-b196-aa678ac785ad"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "66252e40-17e1-4710-bbd7-ad2a95737e8c"}, "id": "66252e40-17e1-4710-bbd7-ad2a95737e8c"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "0f4cf843-b00e-4fae-b530-6a5a1b5e33e7", "subtype": "Chart"}, "id": "afef83c2-2a6b-4dae-8f93-bb6429f0b835"}, "id": "afef83c2-2a6b-4dae-8f93-bb6429f0b835"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 0.2}, "tags": [], "x": {"field": "x_virginica"}, "y": {"field": "y_virginica"}, "fill_color": {"value": "#407ee7"}, "size": {"units": "screen", "value": 10}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#407ee7"}, "doc": null, "id": "af06483e-f357-47d0-97d1-9535b557ebd6"}, "id": "af06483e-f357-47d0-97d1-9535b557ebd6"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "feb0a24b-5974-46fb-b1b4-6f715bd88982"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "0f4cf843-b00e-4fae-b530-6a5a1b5e33e7", "subtype": "Chart"}, "dimension": 0, "id": "d6e3cb70-99e8-461c-a7f6-9bdae15f4c5d"}, "id": "d6e3cb70-99e8-461c-a7f6-9bdae15f4c5d"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "cb7fab32-f023-4c95-b473-89c2baec5285", "tags": [], "geometries": []}, "id": "cb7fab32-f023-4c95-b473-89c2baec5285"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "0f4cf843-b00e-4fae-b530-6a5a1b5e33e7", "subtype": "Chart"}, "id": "e26c6a92-bae3-4da4-8bea-fdd09b695a13", "tags": [], "doc": null}, "id": "e26c6a92-bae3-4da4-8bea-fdd09b695a13"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "0f4cf843-b00e-4fae-b530-6a5a1b5e33e7", "subtype": "Chart"}, "id": "3264f19f-90af-41a4-ac9c-aa2f926347a8", "tags": [], "doc": null}, "id": "3264f19f-90af-41a4-ac9c-aa2f926347a8"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "0f4cf843-b00e-4fae-b530-6a5a1b5e33e7", "subtype": "Chart"}, "id": "197a2410-9453-4c65-97ff-c38d32407762", "tags": [], "doc": null}, "id": "197a2410-9453-4c65-97ff-c38d32407762"}, {"type": "Legend", "attributes": {"legends": [["versicolor", [{"type": "GlyphRenderer", "id": "4d7647fe-75aa-4966-8bd8-1463ed598f62"}]], ["setosa", [{"type": "GlyphRenderer", "id": "66252e40-17e1-4710-bbd7-ad2a95737e8c"}]], ["virginica", [{"type": "GlyphRenderer", "id": "47add0ea-e052-4708-b86e-095460409833"}]]], "orientation": "top_left", "tags": [], "doc": null, "plot": {"type": "Plot", "id": "0f4cf843-b00e-4fae-b530-6a5a1b5e33e7", "subtype": "Chart"}, "id": "e2588dcb-138f-4f77-ad46-eea2d66bd993"}, "id": "e2588dcb-138f-4f77-ad46-eea2d66bd993"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "Range1d", "id": "b3b88748-462e-410e-942c-8fab7644324e"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "cb7fab32-f023-4c95-b473-89c2baec5285"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "198e92fd-86c5-49a1-b34c-3817182ed7e1"}, {"type": "LinearAxis", "id": "4affa0dc-5fc4-4ef2-bce7-7aefd37f583e"}, {"type": "Grid", "id": "d6e3cb70-99e8-461c-a7f6-9bdae15f4c5d"}, {"type": "Grid", "id": "374a210b-50e1-4b0f-9e02-8cc1ff7acfed"}, {"type": "GlyphRenderer", "id": "4d7647fe-75aa-4966-8bd8-1463ed598f62"}, {"type": "GlyphRenderer", "id": "66252e40-17e1-4710-bbd7-ad2a95737e8c"}, {"type": "GlyphRenderer", "id": "47add0ea-e052-4708-b86e-095460409833"}, {"type": "Legend", "id": "e2588dcb-138f-4f77-ad46-eea2d66bd993"}], "below": [{"type": "LinearAxis", "id": "198e92fd-86c5-49a1-b34c-3817182ed7e1"}], "left": [{"type": "LinearAxis", "id": "4affa0dc-5fc4-4ef2-bce7-7aefd37f583e"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "title": "iris data", "tools": [{"type": "PanTool", "id": "c3a7df1b-0961-4e02-b6bb-dea61fac002e"}, {"type": "WheelZoomTool", "id": "ab1b5080-0434-4447-b821-cce20d5cfccf"}, {"type": "BoxZoomTool", "id": "afef83c2-2a6b-4dae-8f93-bb6429f0b835"}, {"type": "PreviewSaveTool", "id": "010d88e3-985a-4bd7-8a72-0b8b8bc7c961"}, {"type": "ResizeTool", "id": "e26c6a92-bae3-4da4-8bea-fdd09b695a13"}, {"type": "ResetTool", "id": "3264f19f-90af-41a4-ac9c-aa2f926347a8"}, {"type": "HelpTool", "id": "197a2410-9453-4c65-97ff-c38d32407762"}], "x_range": {"type": "Range1d", "id": "39246d90-11bb-4093-bc1d-05bd97c6c743"}, "id": "0f4cf843-b00e-4fae-b530-6a5a1b5e33e7"}, "id": "0f4cf843-b00e-4fae-b530-6a5a1b5e33e7", "subtype": "Chart"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "ead7efe6-f7f2-4641-afa5-cfe8a3ed3832"}, "tags": [], "glyph": {"type": "Circle", "id": "25887169-6eb4-4a17-a2d5-e0ff3f36587d"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "4d7647fe-75aa-4966-8bd8-1463ed598f62"}, "id": "4d7647fe-75aa-4966-8bd8-1463ed598f62"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("4376aa08-60cf-4809-8a5d-62e45f8e0222", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("4376aa08-60cf-4809-8a5d-62e45f8e0222", all_models);
    });
  }

}(this));