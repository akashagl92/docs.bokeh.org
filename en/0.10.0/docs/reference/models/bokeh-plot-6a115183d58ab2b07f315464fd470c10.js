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

  var elt = document.getElementById("a47492e2-bbb6-4ecc-946d-e3ca0ff9306c");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a47492e2-bbb6-4ecc-946d-e3ca0ff9306c' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "138ac338-0f79-4718-b951-60757ed12ede"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "db061d57-ef7a-4188-8c50-b1ac3e1eb841"}, "id": "426a6896-067e-494d-ad69-51b6e6d0beea"}, "type": "Grid", "id": "426a6896-067e-494d-ad69-51b6e6d0beea"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "55a95ac9-9381-4565-a7ad-ae474acbbf8a"}, "tags": [], "doc": null, "selection_glyph": null, "id": "a6771c55-ed69-4162-aedb-32f72b181183", "glyph": {"type": "Segment", "id": "1553a6b5-b19c-4857-a7a9-0935b98f91e5"}}, "type": "GlyphRenderer", "id": "a6771c55-ed69-4162-aedb-32f72b181183"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "f06f7f8b-82d3-4b44-94bb-8e98bbf13ef8"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "a6771c55-ed69-4162-aedb-32f72b181183"}, {"type": "LinearAxis", "id": "4e49131d-b413-469f-9460-ddd9c41f93a2"}, {"type": "LinearAxis", "id": "f9b6e570-1ece-42c6-a971-0036af20c383"}, {"type": "Grid", "id": "67fa2211-c7a8-41b3-95ce-ad762ab346a0"}, {"type": "Grid", "id": "426a6896-067e-494d-ad69-51b6e6d0beea"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "6809df7c-a7ec-4fee-b0f2-fb6a1106f244"}, "h_symmetry": false, "tools": [], "id": "138ac338-0f79-4718-b951-60757ed12ede", "title": null, "y_range": {"type": "DataRange1d", "id": "2015062c-011c-435e-a65b-8b60c9827dc0"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "4e49131d-b413-469f-9460-ddd9c41f93a2"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "f9b6e570-1ece-42c6-a971-0036af20c383"}]}, "type": "Plot", "id": "138ac338-0f79-4718-b951-60757ed12ede"}, {"attributes": {"plot": {"type": "Plot", "id": "138ac338-0f79-4718-b951-60757ed12ede"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "f766507a-8f31-4c0c-ab24-9d7926479f83"}, "id": "67fa2211-c7a8-41b3-95ce-ad762ab346a0"}, "type": "Grid", "id": "67fa2211-c7a8-41b3-95ce-ad762ab346a0"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "f766507a-8f31-4c0c-ab24-9d7926479f83"}, "type": "BasicTicker", "id": "f766507a-8f31-4c0c-ab24-9d7926479f83"}, {"attributes": {"line_color": {"value": "#f4a582"}, "line_width": {"value": 3}, "tags": [], "doc": null, "y1": {"field": "ym01"}, "y0": {"field": "y"}, "x0": {"field": "x"}, "x1": {"field": "xm01"}, "id": "1553a6b5-b19c-4857-a7a9-0935b98f91e5"}, "type": "Segment", "id": "1553a6b5-b19c-4857-a7a9-0935b98f91e5"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "db061d57-ef7a-4188-8c50-b1ac3e1eb841"}, "type": "BasicTicker", "id": "db061d57-ef7a-4188-8c50-b1ac3e1eb841"}, {"attributes": {"plot": {"type": "Plot", "id": "138ac338-0f79-4718-b951-60757ed12ede"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "cf0cdf97-f2f6-412c-96de-6263cf58fe11"}, "ticker": {"type": "BasicTicker", "id": "db061d57-ef7a-4188-8c50-b1ac3e1eb841"}, "id": "f9b6e570-1ece-42c6-a971-0036af20c383"}, "type": "LinearAxis", "id": "f9b6e570-1ece-42c6-a971-0036af20c383"}, {"attributes": {"doc": null, "id": "1bb6f73b-6996-4687-97df-e7583f7dfaf2", "tags": []}, "type": "BasicTickFormatter", "id": "1bb6f73b-6996-4687-97df-e7583f7dfaf2"}, {"attributes": {"plot": {"type": "Plot", "id": "138ac338-0f79-4718-b951-60757ed12ede"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "1bb6f73b-6996-4687-97df-e7583f7dfaf2"}, "ticker": {"type": "BasicTicker", "id": "f766507a-8f31-4c0c-ab24-9d7926479f83"}, "id": "4e49131d-b413-469f-9460-ddd9c41f93a2"}, "type": "LinearAxis", "id": "4e49131d-b413-469f-9460-ddd9c41f93a2"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "6809df7c-a7ec-4fee-b0f2-fb6a1106f244"}, "type": "ToolEvents", "id": "6809df7c-a7ec-4fee-b0f2-fb6a1106f244"}, {"attributes": {"doc": null, "id": "cf0cdf97-f2f6-412c-96de-6263cf58fe11", "tags": []}, "type": "BasicTickFormatter", "id": "cf0cdf97-f2f6-412c-96de-6263cf58fe11"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "f06f7f8b-82d3-4b44-94bb-8e98bbf13ef8"}, "type": "DataRange1d", "id": "f06f7f8b-82d3-4b44-94bb-8e98bbf13ef8"}, {"attributes": {"column_names": ["xm01", "y", "ym01", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"xm01": [-0.8999999999999999, -0.8625, -0.6000000000000001, -0.1875, 0.3, 0.7875, 1.2, 1.4625000000000001, 1.5], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "ym01": [4.1, 2.525, 1.4, 0.725, 0.5, 0.725, 1.4, 2.525, 4.1], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0]}, "id": "55a95ac9-9381-4565-a7ad-ae474acbbf8a"}, "type": "ColumnDataSource", "id": "55a95ac9-9381-4565-a7ad-ae474acbbf8a"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "2015062c-011c-435e-a65b-8b60c9827dc0"}, "type": "DataRange1d", "id": "2015062c-011c-435e-a65b-8b60c9827dc0"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("a47492e2-bbb6-4ecc-946d-e3ca0ff9306c", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("a47492e2-bbb6-4ecc-946d-e3ca0ff9306c", all_models);
    });
  }

}(this));