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

  var elt = document.getElementById("d0c37038-1382-408a-a004-893dd380cedd");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'd0c37038-1382-408a-a004-893dd380cedd' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "768a2153-c185-4033-8279-e7dbeed79708"}, "type": "BasicTicker", "id": "768a2153-c185-4033-8279-e7dbeed79708"}, {"attributes": {"plot": {"type": "Plot", "id": "f6d77058-33d6-4eb1-baf2-3735e9752dce"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "768a2153-c185-4033-8279-e7dbeed79708"}, "id": "543665da-e641-4d9b-9c82-0947c11a9932"}, "type": "Grid", "id": "543665da-e641-4d9b-9c82-0947c11a9932"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "9f3d77bc-26ba-4e0e-be35-34ec4822c037"}, "tags": [], "doc": null, "selection_glyph": null, "id": "8721e06a-3af6-49b3-b3dd-0cbffddb3aa7", "glyph": {"type": "CircleX", "id": "73211ece-ced8-4289-8f70-0b2db5b286a4"}}, "type": "GlyphRenderer", "id": "8721e06a-3af6-49b3-b3dd-0cbffddb3aa7"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "535fa35e-d323-4d8b-a271-cb8ec55e4138"}, "type": "ToolEvents", "id": "535fa35e-d323-4d8b-a271-cb8ec55e4138"}, {"attributes": {"plot": {"type": "Plot", "id": "f6d77058-33d6-4eb1-baf2-3735e9752dce"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "9cd3f97f-021c-4f25-b945-e967048f967e"}, "ticker": {"type": "BasicTicker", "id": "ceee5371-cf2e-4d5e-b4fb-46dc36074cfb"}, "id": "f948eb38-5751-4f4f-ac9c-3573a98c3c19"}, "type": "LinearAxis", "id": "f948eb38-5751-4f4f-ac9c-3573a98c3c19"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "c7bc9453-231f-4654-9676-217129598a47"}, "type": "DataRange1d", "id": "c7bc9453-231f-4654-9676-217129598a47"}, {"attributes": {"line_color": {"value": "#dd1c77"}, "fill_color": null, "tags": [], "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "73211ece-ced8-4289-8f70-0b2db5b286a4", "size": {"units": "screen", "field": "sizes"}}, "type": "CircleX", "id": "73211ece-ced8-4289-8f70-0b2db5b286a4"}, {"attributes": {"plot": {"type": "Plot", "id": "f6d77058-33d6-4eb1-baf2-3735e9752dce"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "fed0a268-9b8e-407c-8332-490a26de3d74"}, "ticker": {"type": "BasicTicker", "id": "768a2153-c185-4033-8279-e7dbeed79708"}, "id": "008dbef4-2655-4d7c-b435-85f82f515db5"}, "type": "LinearAxis", "id": "008dbef4-2655-4d7c-b435-85f82f515db5"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "ceee5371-cf2e-4d5e-b4fb-46dc36074cfb"}, "type": "BasicTicker", "id": "ceee5371-cf2e-4d5e-b4fb-46dc36074cfb"}, {"attributes": {"column_names": ["y", "x", "sizes"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0]}, "id": "9f3d77bc-26ba-4e0e-be35-34ec4822c037"}, "type": "ColumnDataSource", "id": "9f3d77bc-26ba-4e0e-be35-34ec4822c037"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "36591c42-e410-4a22-9619-a36bbdb85d8c"}, "type": "DataRange1d", "id": "36591c42-e410-4a22-9619-a36bbdb85d8c"}, {"attributes": {"doc": null, "id": "9cd3f97f-021c-4f25-b945-e967048f967e", "tags": []}, "type": "BasicTickFormatter", "id": "9cd3f97f-021c-4f25-b945-e967048f967e"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "c7bc9453-231f-4654-9676-217129598a47"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "8721e06a-3af6-49b3-b3dd-0cbffddb3aa7"}, {"type": "LinearAxis", "id": "f948eb38-5751-4f4f-ac9c-3573a98c3c19"}, {"type": "LinearAxis", "id": "008dbef4-2655-4d7c-b435-85f82f515db5"}, {"type": "Grid", "id": "624d40e7-1d7b-481a-ba97-1902580b284e"}, {"type": "Grid", "id": "543665da-e641-4d9b-9c82-0947c11a9932"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "535fa35e-d323-4d8b-a271-cb8ec55e4138"}, "h_symmetry": false, "tools": [], "id": "f6d77058-33d6-4eb1-baf2-3735e9752dce", "title": null, "y_range": {"type": "DataRange1d", "id": "36591c42-e410-4a22-9619-a36bbdb85d8c"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "f948eb38-5751-4f4f-ac9c-3573a98c3c19"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "008dbef4-2655-4d7c-b435-85f82f515db5"}]}, "type": "Plot", "id": "f6d77058-33d6-4eb1-baf2-3735e9752dce"}, {"attributes": {"plot": {"type": "Plot", "id": "f6d77058-33d6-4eb1-baf2-3735e9752dce"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "ceee5371-cf2e-4d5e-b4fb-46dc36074cfb"}, "id": "624d40e7-1d7b-481a-ba97-1902580b284e"}, "type": "Grid", "id": "624d40e7-1d7b-481a-ba97-1902580b284e"}, {"attributes": {"doc": null, "id": "fed0a268-9b8e-407c-8332-490a26de3d74", "tags": []}, "type": "BasicTickFormatter", "id": "fed0a268-9b8e-407c-8332-490a26de3d74"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("d0c37038-1382-408a-a004-893dd380cedd", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("d0c37038-1382-408a-a004-893dd380cedd", all_models);
    });
  }

}(this));