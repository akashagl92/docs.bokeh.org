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

  var elt = document.getElementById("ebbb9bb9-ac2a-4f29-a3a3-463bdc484fa1");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'ebbb9bb9-ac2a-4f29-a3a3-463bdc484fa1' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "60bb31a9-8eba-49ce-be85-3f1464aae4f6"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "9cc14d39-aacc-4139-9c11-03032c707c4b"}, {"type": "LinearAxis", "id": "57ad58f5-a38f-43cc-9bf8-ad0a179c7ec2"}, {"type": "LinearAxis", "id": "05ea504c-dc5e-4789-b523-f8c76cbeee34"}, {"type": "Grid", "id": "96082193-7a96-4fb8-aa16-14c7d8466918"}, {"type": "Grid", "id": "f8fae7a3-8f3c-48e7-910f-d35b26cb545e"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "91f976ca-d44b-4b89-b1bf-49481e05709d"}, "h_symmetry": false, "tools": [], "id": "24a42861-6b13-40c9-9ead-62d7aa2032c8", "title": null, "y_range": {"type": "DataRange1d", "id": "5b788ed9-a51f-4790-87d1-30376f52a3e4"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "57ad58f5-a38f-43cc-9bf8-ad0a179c7ec2"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "05ea504c-dc5e-4789-b523-f8c76cbeee34"}]}, "type": "Plot", "id": "24a42861-6b13-40c9-9ead-62d7aa2032c8"}, {"attributes": {"plot": {"type": "Plot", "id": "24a42861-6b13-40c9-9ead-62d7aa2032c8"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "94673b7f-906b-4649-8341-905ddccf67d0"}, "id": "96082193-7a96-4fb8-aa16-14c7d8466918"}, "type": "Grid", "id": "96082193-7a96-4fb8-aa16-14c7d8466918"}, {"attributes": {"plot": {"type": "Plot", "id": "24a42861-6b13-40c9-9ead-62d7aa2032c8"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "9d37a8c0-7397-48aa-a637-7d2c4c3acadf"}, "ticker": {"type": "BasicTicker", "id": "94673b7f-906b-4649-8341-905ddccf67d0"}, "id": "57ad58f5-a38f-43cc-9bf8-ad0a179c7ec2"}, "type": "LinearAxis", "id": "57ad58f5-a38f-43cc-9bf8-ad0a179c7ec2"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "97b99406-afc3-4bd7-a4f9-ddd3289f4a30"}, "type": "BasicTicker", "id": "97b99406-afc3-4bd7-a4f9-ddd3289f4a30"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "fc8f5658-98c9-4f27-8af2-906b252a4f9d"}, "tags": [], "doc": null, "selection_glyph": null, "id": "9cc14d39-aacc-4139-9c11-03032c707c4b", "glyph": {"type": "Triangle", "id": "f27fc1f0-ecb2-4224-8327-33e13c023df6"}}, "type": "GlyphRenderer", "id": "9cc14d39-aacc-4139-9c11-03032c707c4b"}, {"attributes": {"doc": null, "id": "9d37a8c0-7397-48aa-a637-7d2c4c3acadf", "tags": []}, "type": "BasicTickFormatter", "id": "9d37a8c0-7397-48aa-a637-7d2c4c3acadf"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "94673b7f-906b-4649-8341-905ddccf67d0"}, "type": "BasicTicker", "id": "94673b7f-906b-4649-8341-905ddccf67d0"}, {"attributes": {"doc": null, "id": "6f82fda4-b4cd-4257-b0a7-a4a464b3806a", "tags": []}, "type": "BasicTickFormatter", "id": "6f82fda4-b4cd-4257-b0a7-a4a464b3806a"}, {"attributes": {"plot": {"type": "Plot", "id": "24a42861-6b13-40c9-9ead-62d7aa2032c8"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "97b99406-afc3-4bd7-a4f9-ddd3289f4a30"}, "id": "f8fae7a3-8f3c-48e7-910f-d35b26cb545e"}, "type": "Grid", "id": "f8fae7a3-8f3c-48e7-910f-d35b26cb545e"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "60bb31a9-8eba-49ce-be85-3f1464aae4f6"}, "type": "DataRange1d", "id": "60bb31a9-8eba-49ce-be85-3f1464aae4f6"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "91f976ca-d44b-4b89-b1bf-49481e05709d"}, "type": "ToolEvents", "id": "91f976ca-d44b-4b89-b1bf-49481e05709d"}, {"attributes": {"column_names": ["y", "x", "sizes"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "id": "fc8f5658-98c9-4f27-8af2-906b252a4f9d"}, "type": "ColumnDataSource", "id": "fc8f5658-98c9-4f27-8af2-906b252a4f9d"}, {"attributes": {"line_color": {"value": "#99d594"}, "line_width": {"value": 2}, "fill_color": null, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "f27fc1f0-ecb2-4224-8327-33e13c023df6", "size": {"units": "screen", "field": "sizes"}}, "type": "Triangle", "id": "f27fc1f0-ecb2-4224-8327-33e13c023df6"}, {"attributes": {"plot": {"type": "Plot", "id": "24a42861-6b13-40c9-9ead-62d7aa2032c8"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "6f82fda4-b4cd-4257-b0a7-a4a464b3806a"}, "ticker": {"type": "BasicTicker", "id": "97b99406-afc3-4bd7-a4f9-ddd3289f4a30"}, "id": "05ea504c-dc5e-4789-b523-f8c76cbeee34"}, "type": "LinearAxis", "id": "05ea504c-dc5e-4789-b523-f8c76cbeee34"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "5b788ed9-a51f-4790-87d1-30376f52a3e4"}, "type": "DataRange1d", "id": "5b788ed9-a51f-4790-87d1-30376f52a3e4"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("ebbb9bb9-ac2a-4f29-a3a3-463bdc484fa1", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("ebbb9bb9-ac2a-4f29-a3a3-463bdc484fa1", all_models);
    });
  }

}(this));