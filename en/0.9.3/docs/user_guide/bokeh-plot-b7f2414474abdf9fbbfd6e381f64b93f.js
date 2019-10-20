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

  var elt = document.getElementById("df837680-df25-4df5-967f-1497e79aa8c9");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'df837680-df25-4df5-967f-1497e79aa8c9' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [], "x": [], "height": [], "width": []}, "doc": null, "id": "73f1b00a-f9bd-4b85-ba7e-b02b04fb6555", "column_names": ["y", "x", "height", "width"]}, "id": "73f1b00a-f9bd-4b85-ba7e-b02b04fb6555"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "01715f20-2eaf-43e6-8981-af8b0b9f2069"}, "id": "01715f20-2eaf-43e6-8981-af8b0b9f2069"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "be25fbbb-a91a-41d8-9fcf-a014d26f8889"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "ca2b4eb5-17c2-48c3-b4a1-267f887236c8", "subtype": "Figure"}, "dimension": 1, "id": "6136027b-0943-4df5-b326-acfdb46a694d"}, "id": "6136027b-0943-4df5-b326-acfdb46a694d"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "73f1b00a-f9bd-4b85-ba7e-b02b04fb6555"}, "tags": [], "glyph": {"type": "Rect", "id": "5ee50b61-9cba-452b-bc9b-942c556666af"}, "doc": null, "selection_glyph": {"type": "Rect", "id": "5ee50b61-9cba-452b-bc9b-942c556666af"}, "nonselection_glyph": {"type": "Rect", "id": "5ee50b61-9cba-452b-bc9b-942c556666af"}, "id": "e645e832-c804-47a4-94f9-98abf54a8bdc"}, "id": "e645e832-c804-47a4-94f9-98abf54a8bdc"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "be25fbbb-a91a-41d8-9fcf-a014d26f8889"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "dfe5b5b9-2662-4265-b80c-f6a2915ba005"}, "plot": {"type": "Plot", "id": "ca2b4eb5-17c2-48c3-b4a1-267f887236c8", "subtype": "Figure"}, "id": "bbc5f323-565c-4500-b498-90249a1210eb"}, "id": "bbc5f323-565c-4500-b498-90249a1210eb"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "Range1d", "id": "9134c922-52d4-45bc-ab19-1e8a1219fee6"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "334975f8-36dc-4a76-a773-bd0523447a34"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "efa2c3d3-0e44-4af6-8608-b3c0af2fb940"}, {"type": "Grid", "id": "a42e4a8e-99b7-4a78-bc56-57615f95020b"}, {"type": "LinearAxis", "id": "bbc5f323-565c-4500-b498-90249a1210eb"}, {"type": "Grid", "id": "6136027b-0943-4df5-b326-acfdb46a694d"}, {"type": "GlyphRenderer", "id": "e645e832-c804-47a4-94f9-98abf54a8bdc"}], "below": [{"type": "LinearAxis", "id": "efa2c3d3-0e44-4af6-8608-b3c0af2fb940"}], "left": [{"type": "LinearAxis", "id": "bbc5f323-565c-4500-b498-90249a1210eb"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "title": "Select Below", "tools": [{"type": "BoxSelectTool", "id": "9ff26ac9-86b0-464e-97b8-035bf25c5532"}], "x_range": {"type": "Range1d", "id": "3ae5292f-0ba0-4269-9320-8c1206e8334c"}, "id": "ca2b4eb5-17c2-48c3-b4a1-267f887236c8"}, "id": "ca2b4eb5-17c2-48c3-b4a1-267f887236c8", "subtype": "Figure"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "334975f8-36dc-4a76-a773-bd0523447a34", "tags": [], "geometries": []}, "id": "334975f8-36dc-4a76-a773-bd0523447a34"}, {"type": "CustomJS", "attributes": {"code": "\n        // get data source from Callback args\n        var data = source.get('data');\n\n        /// get BoxSelectTool dimensions from cb_data parameter of Callback\n        var geometry = cb_data['geometry'];\n\n        /// calculate Rect attributes\n        var width = geometry['x1'] - geometry['x0'];\n        var height = geometry['y1'] - geometry['y0'];\n        var x = geometry['x0'] + width/2;\n        var y = geometry['y0'] + height/2;\n\n        /// update data source with new Rect attributes\n        data['x'].push(x);\n        data['y'].push(y);\n        data['width'].push(width);\n        data['height'].push(height);\n\n        // trigger update of data source\n        source.trigger('change');\n    ", "args": {"source": {"type": "ColumnDataSource", "id": "73f1b00a-f9bd-4b85-ba7e-b02b04fb6555"}}, "tags": [], "doc": null, "id": "7682f475-800f-40b6-9f8b-cda78e9d2f17"}, "id": "7682f475-800f-40b6-9f8b-cda78e9d2f17"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "5fd3644a-f57d-4592-9b48-47071550978d", "tags": []}, "id": "5fd3644a-f57d-4592-9b48-47071550978d"}, {"type": "Range1d", "attributes": {"callback": null, "id": "9134c922-52d4-45bc-ab19-1e8a1219fee6", "tags": [], "doc": null, "end": 1.0, "start": 0.0}, "id": "9134c922-52d4-45bc-ab19-1e8a1219fee6"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "be25fbbb-a91a-41d8-9fcf-a014d26f8889"}, "id": "be25fbbb-a91a-41d8-9fcf-a014d26f8889"}, {"type": "BoxSelectTool", "attributes": {"callback": {"type": "CustomJS", "id": "7682f475-800f-40b6-9f8b-cda78e9d2f17"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "ca2b4eb5-17c2-48c3-b4a1-267f887236c8", "subtype": "Figure"}, "id": "9ff26ac9-86b0-464e-97b8-035bf25c5532", "names": [], "renderers": []}, "id": "9ff26ac9-86b0-464e-97b8-035bf25c5532"}, {"type": "Range1d", "attributes": {"callback": null, "id": "3ae5292f-0ba0-4269-9320-8c1206e8334c", "tags": [], "doc": null, "end": 1.0, "start": 0.0}, "id": "3ae5292f-0ba0-4269-9320-8c1206e8334c"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "01715f20-2eaf-43e6-8981-af8b0b9f2069"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "5fd3644a-f57d-4592-9b48-47071550978d"}, "plot": {"type": "Plot", "id": "ca2b4eb5-17c2-48c3-b4a1-267f887236c8", "subtype": "Figure"}, "id": "efa2c3d3-0e44-4af6-8608-b3c0af2fb940"}, "id": "efa2c3d3-0e44-4af6-8608-b3c0af2fb940"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "dfe5b5b9-2662-4265-b80c-f6a2915ba005", "tags": []}, "id": "dfe5b5b9-2662-4265-b80c-f6a2915ba005"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "01715f20-2eaf-43e6-8981-af8b0b9f2069"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "ca2b4eb5-17c2-48c3-b4a1-267f887236c8", "subtype": "Figure"}, "dimension": 0, "id": "a42e4a8e-99b7-4a78-bc56-57615f95020b"}, "id": "a42e4a8e-99b7-4a78-bc56-57615f95020b"}, {"type": "Rect", "attributes": {"y": {"field": "y"}, "fill_alpha": {"value": 0.3}, "fill_color": {"value": "#009933"}, "width": {"units": "data", "field": "width"}, "tags": [], "doc": null, "x": {"field": "x"}, "height": {"units": "data", "field": "height"}, "id": "5ee50b61-9cba-452b-bc9b-942c556666af"}, "id": "5ee50b61-9cba-452b-bc9b-942c556666af"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("df837680-df25-4df5-967f-1497e79aa8c9", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("df837680-df25-4df5-967f-1497e79aa8c9", all_models);
    });
  }

}(this));