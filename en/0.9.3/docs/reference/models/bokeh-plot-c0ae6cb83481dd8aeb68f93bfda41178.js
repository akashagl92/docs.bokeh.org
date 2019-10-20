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

  var elt = document.getElementById("5375ca6e-94df-4db3-b58d-38bd8425ecde");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5375ca6e-94df-4db3-b58d-38bd8425ecde' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "ffe1484e-25c6-4411-aa14-9e88800335dc", "tags": []}, "id": "ffe1484e-25c6-4411-aa14-9e88800335dc"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "be797b22-7471-422d-84ec-0386666e7a7a", "tags": [], "geometries": []}, "id": "be797b22-7471-422d-84ec-0386666e7a7a"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "d5a181a7-dcca-4395-a2cd-d52a544199e7"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "c7db07f9-0537-4fd4-aac2-d882418c1e16"}, "plot": {"type": "Plot", "id": "ee82b3a0-e68b-44c9-8f08-fd90da69d3cc"}, "id": "36a3af14-115a-4430-8344-e8a8bf4199c5"}, "id": "36a3af14-115a-4430-8344-e8a8bf4199c5"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "36a3af14-115a-4430-8344-e8a8bf4199c5"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "5c49443f-f5f5-41b2-b7e0-2e68ea93d830"}, "id": "ee82b3a0-e68b-44c9-8f08-fd90da69d3cc", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "61b56a9c-81a4-4f2b-b9eb-dcd9e74b3ebd"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "be797b22-7471-422d-84ec-0386666e7a7a"}, "renderers": [{"type": "GlyphRenderer", "id": "35fb08ce-5ac0-45f1-9ba6-ed6ea1fce60e"}, {"type": "LinearAxis", "id": "204da7d7-797a-41aa-909b-e35428088825"}, {"type": "LinearAxis", "id": "36a3af14-115a-4430-8344-e8a8bf4199c5"}, {"type": "Grid", "id": "d73702e9-f2d5-4a44-a088-f6ce982725a9"}, {"type": "Grid", "id": "50bd45e9-1796-454f-b11e-4ab51a7bbf9e"}], "below": [{"type": "LinearAxis", "id": "204da7d7-797a-41aa-909b-e35428088825"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "ee82b3a0-e68b-44c9-8f08-fd90da69d3cc"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "61b56a9c-81a4-4f2b-b9eb-dcd9e74b3ebd", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "61b56a9c-81a4-4f2b-b9eb-dcd9e74b3ebd"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "5c49443f-f5f5-41b2-b7e0-2e68ea93d830", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "5c49443f-f5f5-41b2-b7e0-2e68ea93d830"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "doc": null, "id": "caf3d095-23f3-4301-ae64-f960b5741b7c", "column_names": ["y", "x", "sizes"]}, "id": "caf3d095-23f3-4301-ae64-f960b5741b7c"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "efcaf700-cffa-4325-a32d-1333d088b11c", "tags": []}, "id": "efcaf700-cffa-4325-a32d-1333d088b11c"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "c7db07f9-0537-4fd4-aac2-d882418c1e16", "tags": []}, "id": "c7db07f9-0537-4fd4-aac2-d882418c1e16"}, {"type": "DiamondCross", "attributes": {"y": {"field": "y"}, "fill_color": null, "size": {"units": "screen", "field": "sizes"}, "line_width": {"value": 2}, "line_color": {"value": "#386cb0"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "9068f70d-902a-4c52-b840-29ea1675da4b"}, "id": "9068f70d-902a-4c52-b840-29ea1675da4b"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "d5a181a7-dcca-4395-a2cd-d52a544199e7", "tags": []}, "id": "d5a181a7-dcca-4395-a2cd-d52a544199e7"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "ffe1484e-25c6-4411-aa14-9e88800335dc"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "ee82b3a0-e68b-44c9-8f08-fd90da69d3cc"}, "dimension": 0, "id": "d73702e9-f2d5-4a44-a088-f6ce982725a9"}, "id": "d73702e9-f2d5-4a44-a088-f6ce982725a9"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "ffe1484e-25c6-4411-aa14-9e88800335dc"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "efcaf700-cffa-4325-a32d-1333d088b11c"}, "plot": {"type": "Plot", "id": "ee82b3a0-e68b-44c9-8f08-fd90da69d3cc"}, "id": "204da7d7-797a-41aa-909b-e35428088825"}, "id": "204da7d7-797a-41aa-909b-e35428088825"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "caf3d095-23f3-4301-ae64-f960b5741b7c"}, "tags": [], "glyph": {"type": "DiamondCross", "id": "9068f70d-902a-4c52-b840-29ea1675da4b"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "35fb08ce-5ac0-45f1-9ba6-ed6ea1fce60e"}, "id": "35fb08ce-5ac0-45f1-9ba6-ed6ea1fce60e"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "d5a181a7-dcca-4395-a2cd-d52a544199e7"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "ee82b3a0-e68b-44c9-8f08-fd90da69d3cc"}, "dimension": 1, "id": "50bd45e9-1796-454f-b11e-4ab51a7bbf9e"}, "id": "50bd45e9-1796-454f-b11e-4ab51a7bbf9e"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("5375ca6e-94df-4db3-b58d-38bd8425ecde", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("5375ca6e-94df-4db3-b58d-38bd8425ecde", all_models);
    });
  }

}(this));