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

  var elt = document.getElementById("2cfff7e1-16f6-47a6-ac8b-a6e54ffa8299");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2cfff7e1-16f6-47a6-ac8b-a6e54ffa8299' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 3.4673008323424495, 2.9726516052318663, 2.5160523186682524, 2.0975029726516055, 1.7170035671819261, 1.3745541022592156, 1.0701545778834722, 0.8038049940546969, 0.5755053507728893, 0.38525564803804985, 0.23305588585017845, 0.11890606420927469, 0.04280618311533887, 0.004756242568371006, 0.004756242568371006, 0.04280618311533887, 0.11890606420927453, 0.23305588585017845, 0.38525564803804985, 0.5755053507728897, 0.8038049940546969, 1.0701545778834718, 1.3745541022592156, 1.7170035671819261, 2.0975029726516046, 2.5160523186682524, 2.9726516052318663, 3.4673008323424486, 4.0, 8.2, 7.52936979785969, 6.896789536266349, 6.302259215219976, 5.74577883472057, 5.227348394768133, 4.746967895362664, 4.304637336504161, 3.900356718192628, 3.5341260404280623, 3.2059453032104637, 2.9158145065398338, 2.6637336504161713, 2.449702734839477, 2.2737217598097508, 2.135790725326992, 2.0359096313912013, 1.9740784780023783, 1.9502972651605233, 1.9645659928656363, 2.016884661117717, 2.107253269916766, 2.235671819262783, 2.4021403091557674, 2.6066587395957193, 2.84922711058264, 3.1298454221165284, 3.448513674197384, 3.805231866825208, 4.2], "x": [-2.0, -1.8620689655172413, -1.7241379310344827, -1.5862068965517242, -1.4482758620689655, -1.3103448275862069, -1.1724137931034484, -1.0344827586206897, -0.896551724137931, -0.7586206896551724, -0.6206896551724137, -0.48275862068965525, -0.3448275862068966, -0.2068965517241379, -0.06896551724137945, 0.06896551724137945, 0.2068965517241379, 0.34482758620689635, 0.48275862068965525, 0.6206896551724137, 0.7586206896551726, 0.896551724137931, 1.0344827586206895, 1.1724137931034484, 1.3103448275862069, 1.4482758620689653, 1.5862068965517242, 1.7241379310344827, 1.862068965517241, 2.0, 2.0, 1.862068965517241, 1.7241379310344827, 1.5862068965517242, 1.4482758620689653, 1.3103448275862069, 1.1724137931034484, 1.0344827586206895, 0.896551724137931, 0.7586206896551726, 0.6206896551724137, 0.48275862068965525, 0.34482758620689635, 0.2068965517241379, 0.06896551724137945, -0.06896551724137945, -0.2068965517241379, -0.3448275862068966, -0.48275862068965525, -0.6206896551724137, -0.7586206896551724, -0.896551724137931, -1.0344827586206897, -1.1724137931034484, -1.3103448275862069, -1.4482758620689655, -1.5862068965517242, -1.7241379310344827, -1.8620689655172413, -2.0]}, "id": "d6893c95-05fd-4181-a2ed-794cec0ce747"}, "type": "ColumnDataSource", "id": "d6893c95-05fd-4181-a2ed-794cec0ce747"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "c8a9e93a-c95c-436e-8238-bd85e62eb15b"}, "type": "ToolEvents", "id": "c8a9e93a-c95c-436e-8238-bd85e62eb15b"}, {"attributes": {"doc": null, "id": "ebf221c8-e822-4810-b5e4-5a873bc4f709", "tags": []}, "type": "BasicTickFormatter", "id": "ebf221c8-e822-4810-b5e4-5a873bc4f709"}, {"attributes": {"plot": {"type": "Plot", "id": "ac639d28-63c0-4d49-a66b-352762130919"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "c382b4c7-2dde-4323-9883-999b5c1c5122"}, "id": "8a37d87f-4d67-42d8-afdf-9af20601de85"}, "type": "Grid", "id": "8a37d87f-4d67-42d8-afdf-9af20601de85"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "ec3cec52-eef2-48e3-a1bf-bc89b0488787"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "3e48245d-6288-412e-ac9f-1f58d92a0f5c"}, {"type": "LinearAxis", "id": "ea007d8e-8974-4566-9cfe-9a3a40a540f0"}, {"type": "LinearAxis", "id": "8ad62472-c5f2-4801-8ade-ae62bc3367dc"}, {"type": "Grid", "id": "8a37d87f-4d67-42d8-afdf-9af20601de85"}, {"type": "Grid", "id": "6b1931bd-ba2b-46f5-9a47-d54271010415"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "c8a9e93a-c95c-436e-8238-bd85e62eb15b"}, "h_symmetry": false, "tools": [], "id": "ac639d28-63c0-4d49-a66b-352762130919", "title": null, "y_range": {"type": "DataRange1d", "id": "c06b8480-ae8a-4e86-a42e-1094a5e9bcb9"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "ea007d8e-8974-4566-9cfe-9a3a40a540f0"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "8ad62472-c5f2-4801-8ade-ae62bc3367dc"}]}, "type": "Plot", "id": "ac639d28-63c0-4d49-a66b-352762130919"}, {"attributes": {"plot": {"type": "Plot", "id": "ac639d28-63c0-4d49-a66b-352762130919"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "ebf221c8-e822-4810-b5e4-5a873bc4f709"}, "ticker": {"type": "BasicTicker", "id": "c382b4c7-2dde-4323-9883-999b5c1c5122"}, "id": "ea007d8e-8974-4566-9cfe-9a3a40a540f0"}, "type": "LinearAxis", "id": "ea007d8e-8974-4566-9cfe-9a3a40a540f0"}, {"attributes": {"doc": null, "id": "0fb27296-8c42-49b3-9cc6-c9a0ef9ccc53", "tags": []}, "type": "BasicTickFormatter", "id": "0fb27296-8c42-49b3-9cc6-c9a0ef9ccc53"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "d6893c95-05fd-4181-a2ed-794cec0ce747"}, "tags": [], "doc": null, "selection_glyph": null, "id": "3e48245d-6288-412e-ac9f-1f58d92a0f5c", "glyph": {"type": "Patch", "id": "df47d7de-0634-4f5a-8f71-d8ff04bdfb2a"}}, "type": "GlyphRenderer", "id": "3e48245d-6288-412e-ac9f-1f58d92a0f5c"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "254279dd-4d0e-4c2d-b997-349610762202"}, "type": "BasicTicker", "id": "254279dd-4d0e-4c2d-b997-349610762202"}, {"attributes": {"fill_color": {"value": "#a6cee3"}, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "df47d7de-0634-4f5a-8f71-d8ff04bdfb2a"}, "type": "Patch", "id": "df47d7de-0634-4f5a-8f71-d8ff04bdfb2a"}, {"attributes": {"plot": {"type": "Plot", "id": "ac639d28-63c0-4d49-a66b-352762130919"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "254279dd-4d0e-4c2d-b997-349610762202"}, "id": "6b1931bd-ba2b-46f5-9a47-d54271010415"}, "type": "Grid", "id": "6b1931bd-ba2b-46f5-9a47-d54271010415"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "c06b8480-ae8a-4e86-a42e-1094a5e9bcb9"}, "type": "DataRange1d", "id": "c06b8480-ae8a-4e86-a42e-1094a5e9bcb9"}, {"attributes": {"plot": {"type": "Plot", "id": "ac639d28-63c0-4d49-a66b-352762130919"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "0fb27296-8c42-49b3-9cc6-c9a0ef9ccc53"}, "ticker": {"type": "BasicTicker", "id": "254279dd-4d0e-4c2d-b997-349610762202"}, "id": "8ad62472-c5f2-4801-8ade-ae62bc3367dc"}, "type": "LinearAxis", "id": "8ad62472-c5f2-4801-8ade-ae62bc3367dc"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "c382b4c7-2dde-4323-9883-999b5c1c5122"}, "type": "BasicTicker", "id": "c382b4c7-2dde-4323-9883-999b5c1c5122"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "ec3cec52-eef2-48e3-a1bf-bc89b0488787"}, "type": "DataRange1d", "id": "ec3cec52-eef2-48e3-a1bf-bc89b0488787"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("2cfff7e1-16f6-47a6-ac8b-a6e54ffa8299", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("2cfff7e1-16f6-47a6-ac8b-a6e54ffa8299", all_models);
    });
  }

}(this));