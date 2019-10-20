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

  var elt = document.getElementById("8b54e308-aeb6-4651-9c5f-7fc541f4f1ad");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8b54e308-aeb6-4651-9c5f-7fc541f4f1ad' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "f972511b-927a-4b2c-924a-68b16b2d59fc", "tags": []}, "id": "f972511b-927a-4b2c-924a-68b16b2d59fc"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "80400c40-12a3-47c7-9792-a1e46510cfc3", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "80400c40-12a3-47c7-9792-a1e46510cfc3"}, {"type": "BasicTicker", "attributes": {"doc": null, "mantissas": [2, 5, 10], "id": "66b4b649-c573-42a9-9210-3bfcecd7b74d", "tags": []}, "id": "66b4b649-c573-42a9-9210-3bfcecd7b74d"}, {"type": "Circle", "attributes": {"y": {"field": "y"}, "fill_color": {"value": "white"}, "size": {"units": "screen", "field": "sizes"}, "line_width": {"value": 3}, "line_color": {"value": "#3288Bd"}, "doc": null, "x": {"field": "x"}, "tags": [], "id": "b2029444-af95-4952-8a19-efaa3e173732"}, "id": "b2029444-af95-4952-8a19-efaa3e173732"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "6386fda4-0453-473e-96fb-269bf0a0504d", "tags": []}, "id": "6386fda4-0453-473e-96fb-269bf0a0504d"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "f0fbda8d-0f9e-45ce-acc4-3fa80afe4d7e", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "f0fbda8d-0f9e-45ce-acc4-3fa80afe4d7e"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "6fc97ff2-b0c4-4776-bafb-5b09d15e1d90", "tags": []}, "id": "6fc97ff2-b0c4-4776-bafb-5b09d15e1d90"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "541b6a44-b7c6-4780-9cfb-6c5529c4fcaf", "tags": [], "geometries": []}, "id": "541b6a44-b7c6-4780-9cfb-6c5529c4fcaf"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "5e0cc5c3-2c35-4a76-88d0-91ba9da7869b"}, "tags": [], "glyph": {"type": "Circle", "id": "b2029444-af95-4952-8a19-efaa3e173732"}, "doc": null, "nonselection_glyph": null, "selection_glyph": null, "id": "75788d57-cdea-4b10-a21b-e9cf8790dd82"}, "id": "75788d57-cdea-4b10-a21b-e9cf8790dd82"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "66b4b649-c573-42a9-9210-3bfcecd7b74d"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "6fc97ff2-b0c4-4776-bafb-5b09d15e1d90"}, "plot": {"type": "Plot", "id": "4c877c61-b17e-4f2f-9925-56105f7c727c"}, "id": "a8e47fd9-f294-427f-bf46-ed1a4560889e"}, "id": "a8e47fd9-f294-427f-bf46-ed1a4560889e"}, {"type": "Plot", "attributes": {"plot_height": 300, "right": [], "left": [{"type": "LinearAxis", "id": "a8e47fd9-f294-427f-bf46-ed1a4560889e"}], "above": [], "tags": [], "extra_y_ranges": {}, "toolbar_location": null, "x_range": {"type": "DataRange1d", "id": "80400c40-12a3-47c7-9792-a1e46510cfc3"}, "id": "4c877c61-b17e-4f2f-9925-56105f7c727c", "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "f0fbda8d-0f9e-45ce-acc4-3fa80afe4d7e"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "541b6a44-b7c6-4780-9cfb-6c5529c4fcaf"}, "renderers": [{"type": "GlyphRenderer", "id": "75788d57-cdea-4b10-a21b-e9cf8790dd82"}, {"type": "LinearAxis", "id": "70cc4bb2-6c85-4f65-9c6a-fd6d66bd54c3"}, {"type": "LinearAxis", "id": "a8e47fd9-f294-427f-bf46-ed1a4560889e"}, {"type": "Grid", "id": "4a58d624-797c-4823-8e81-82140c6e8038"}, {"type": "Grid", "id": "a12e5865-e01f-48a4-b506-0baaa483c91b"}], "below": [{"type": "LinearAxis", "id": "70cc4bb2-6c85-4f65-9c6a-fd6d66bd54c3"}], "plot_width": 300, "title": null, "tools": [], "min_border": 0, "h_symmetry": false, "v_symmetry": false}, "id": "4c877c61-b17e-4f2f-9925-56105f7c727c"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "66b4b649-c573-42a9-9210-3bfcecd7b74d"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "4c877c61-b17e-4f2f-9925-56105f7c727c"}, "dimension": 1, "id": "a12e5865-e01f-48a4-b506-0baaa483c91b"}, "id": "a12e5865-e01f-48a4-b506-0baaa483c91b"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "f972511b-927a-4b2c-924a-68b16b2d59fc"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "6386fda4-0453-473e-96fb-269bf0a0504d"}, "plot": {"type": "Plot", "id": "4c877c61-b17e-4f2f-9925-56105f7c727c"}, "id": "70cc4bb2-6c85-4f65-9c6a-fd6d66bd54c3"}, "id": "70cc4bb2-6c85-4f65-9c6a-fd6d66bd54c3"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "f972511b-927a-4b2c-924a-68b16b2d59fc"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "4c877c61-b17e-4f2f-9925-56105f7c727c"}, "dimension": 0, "id": "4a58d624-797c-4823-8e81-82140c6e8038"}, "id": "4a58d624-797c-4823-8e81-82140c6e8038"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "doc": null, "id": "5e0cc5c3-2c35-4a76-88d0-91ba9da7869b", "column_names": ["y", "x", "sizes"]}, "id": "5e0cc5c3-2c35-4a76-88d0-91ba9da7869b"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("8b54e308-aeb6-4651-9c5f-7fc541f4f1ad", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("8b54e308-aeb6-4651-9c5f-7fc541f4f1ad", all_models);
    });
  }

}(this));