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
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.css");
      window._bokeh_onload_callbacks.forEach(function(callback){callback()});
    };
    s.onerror = function(){
      console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
  }

  bokehjs_url = "https://cdn.bokeh.org/bokeh/release/bokeh-0.8.2.min.js"

  var elt = document.getElementById("a0eea323-2b6f-4b7a-8a37-23692da36d96");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a0eea323-2b6f-4b7a-8a37-23692da36d96' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "19f6e66f-2d1a-461c-83c5-1ac4d753e726", "type": "Grid", "attributes": {"id": "19f6e66f-2d1a-461c-83c5-1ac4d753e726", "plot": {"id": "c80eccb7-036b-4c6e-8b49-160b0cddce71", "type": "Plot"}, "dimension": 1, "ticker": {"id": "e3e8fc9f-38ed-46ed-a238-c22744d319bd", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "f893241f-fb06-46d8-856d-09e57ed1872b", "type": "ToolEvents", "attributes": {"geometries": [], "id": "f893241f-fb06-46d8-856d-09e57ed1872b", "doc": null, "tags": []}}, {"id": "143332f6-3ae8-40d3-b5be-49acb220695c", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "01544bfe-7e12-4eaf-82d8-18dfba821201", "type": "ColumnDataSource"}, "columns": ["x"]}], "id": "143332f6-3ae8-40d3-b5be-49acb220695c", "doc": null, "tags": []}}, {"id": "5fff58d0-6474-4436-b906-5d80bd16a847", "type": "LinearAxis", "attributes": {"id": "5fff58d0-6474-4436-b906-5d80bd16a847", "formatter": {"id": "b1384b26-47c4-48ca-9a58-162bf6aa1067", "type": "BasicTickFormatter"}, "plot": {"id": "c80eccb7-036b-4c6e-8b49-160b0cddce71", "type": "Plot"}, "ticker": {"id": "e74cc3d6-90f9-4927-9207-021bb03927e3", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "1d0d51db-01d8-4ed9-ad5e-c362764a2281", "type": "LinearAxis", "attributes": {"id": "1d0d51db-01d8-4ed9-ad5e-c362764a2281", "formatter": {"id": "8ff2276b-1021-42d9-880e-ee62520e98c3", "type": "BasicTickFormatter"}, "plot": {"id": "c80eccb7-036b-4c6e-8b49-160b0cddce71", "type": "Plot"}, "ticker": {"id": "e3e8fc9f-38ed-46ed-a238-c22744d319bd", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "e3e8fc9f-38ed-46ed-a238-c22744d319bd", "type": "BasicTicker", "attributes": {"id": "e3e8fc9f-38ed-46ed-a238-c22744d319bd", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "de285002-650d-4611-bd45-62171f476404", "type": "CircleX", "attributes": {"x": {"field": "x", "units": "data"}, "y": {"field": "y", "units": "data"}, "id": "de285002-650d-4611-bd45-62171f476404", "fill_color": null, "line_color": {"value": "#dd1c77"}, "doc": null, "tags": [], "size": {"field": "sizes", "units": "screen"}}}, {"id": "49c6bf75-8185-458d-a985-9572a1c93191", "type": "Grid", "attributes": {"id": "49c6bf75-8185-458d-a985-9572a1c93191", "plot": {"id": "c80eccb7-036b-4c6e-8b49-160b0cddce71", "type": "Plot"}, "dimension": 0, "ticker": {"id": "e74cc3d6-90f9-4927-9207-021bb03927e3", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "b1384b26-47c4-48ca-9a58-162bf6aa1067", "type": "BasicTickFormatter", "attributes": {"id": "b1384b26-47c4-48ca-9a58-162bf6aa1067", "doc": null, "tags": []}}, {"id": "c80eccb7-036b-4c6e-8b49-160b0cddce71", "type": "Plot", "attributes": {"tool_events": {"id": "f893241f-fb06-46d8-856d-09e57ed1872b", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "6ec14611-6e19-4260-ae7e-e3a6ad2bad7f", "type": "GlyphRenderer"}, {"id": "5fff58d0-6474-4436-b906-5d80bd16a847", "type": "LinearAxis"}, {"id": "1d0d51db-01d8-4ed9-ad5e-c362764a2281", "type": "LinearAxis"}, {"id": "49c6bf75-8185-458d-a985-9572a1c93191", "type": "Grid"}, {"id": "19f6e66f-2d1a-461c-83c5-1ac4d753e726", "type": "Grid"}], "left": [{"id": "1d0d51db-01d8-4ed9-ad5e-c362764a2281", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "143332f6-3ae8-40d3-b5be-49acb220695c", "type": "DataRange1d"}, "extra_x_ranges": {}, "tools": [], "id": "c80eccb7-036b-4c6e-8b49-160b0cddce71", "y_range": {"id": "e0d88476-d6b2-4c3b-a985-f0e152f03f34", "type": "DataRange1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "5fff58d0-6474-4436-b906-5d80bd16a847", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "01544bfe-7e12-4eaf-82d8-18dfba821201", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"sizes": [10.0, 11.25, 12.5, 13.75, 15.0, 16.25, 17.5, 18.75, 20.0], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0], "y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0]}, "column_names": ["sizes", "y", "x"], "id": "01544bfe-7e12-4eaf-82d8-18dfba821201", "doc": null, "tags": []}}, {"id": "6ec14611-6e19-4260-ae7e-e3a6ad2bad7f", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "01544bfe-7e12-4eaf-82d8-18dfba821201", "type": "ColumnDataSource"}, "id": "6ec14611-6e19-4260-ae7e-e3a6ad2bad7f", "glyph": {"id": "de285002-650d-4611-bd45-62171f476404", "type": "CircleX"}, "tags": [], "doc": null}}, {"id": "8ff2276b-1021-42d9-880e-ee62520e98c3", "type": "BasicTickFormatter", "attributes": {"id": "8ff2276b-1021-42d9-880e-ee62520e98c3", "doc": null, "tags": []}}, {"id": "e0d88476-d6b2-4c3b-a985-f0e152f03f34", "type": "DataRange1d", "attributes": {"sources": [{"source": {"id": "01544bfe-7e12-4eaf-82d8-18dfba821201", "type": "ColumnDataSource"}, "columns": ["y"]}], "id": "e0d88476-d6b2-4c3b-a985-f0e152f03f34", "doc": null, "tags": []}}, {"id": "e74cc3d6-90f9-4927-9207-021bb03927e3", "type": "BasicTicker", "attributes": {"id": "e74cc3d6-90f9-4927-9207-021bb03927e3", "mantissas": [2, 5, 10], "tags": [], "doc": null}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("a0eea323-2b6f-4b7a-8a37-23692da36d96", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("a0eea323-2b6f-4b7a-8a37-23692da36d96", all_models);
    });
  }

}(this));