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

  var elt = document.getElementById("a3397dca-a8c6-426f-96ff-f02f8ec88877");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a3397dca-a8c6-426f-96ff-f02f8ec88877' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"id": "a7c6ac8b-7146-4b30-a991-17339ed34d53", "type": "BasicTickFormatter", "attributes": {"id": "a7c6ac8b-7146-4b30-a991-17339ed34d53", "doc": null, "tags": []}}, {"id": "191e7fe1-7ec6-4d7c-9369-f06ffafcdf8a", "type": "ImageURL", "attributes": {"h": {"field": "h1", "units": "data"}, "url": {"field": "url", "units": "data"}, "tags": [], "y": {"field": "y1", "units": "data"}, "anchor": "center", "id": "191e7fe1-7ec6-4d7c-9369-f06ffafcdf8a", "w": {"field": "w1", "units": "data"}, "doc": null, "x": {"field": "x1", "units": "data"}}}, {"id": "4d616dbe-f058-434b-bc2a-1b47e6c5aa00", "type": "BasicTicker", "attributes": {"id": "4d616dbe-f058-434b-bc2a-1b47e6c5aa00", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "bc4c8bd7-5838-4b51-a92d-0ce3830f7a29", "type": "LinearAxis", "attributes": {"id": "bc4c8bd7-5838-4b51-a92d-0ce3830f7a29", "formatter": {"id": "17949167-156d-4fd1-bddc-5c5032348433", "type": "BasicTickFormatter"}, "plot": {"id": "a213dae9-6d14-456b-a0a6-28a6490e8a68", "type": "Plot"}, "ticker": {"id": "4d616dbe-f058-434b-bc2a-1b47e6c5aa00", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "a213dae9-6d14-456b-a0a6-28a6490e8a68", "type": "Plot", "attributes": {"tool_events": {"id": "b595de72-6cb5-4f37-b8ff-e5f00ae86604", "type": "ToolEvents"}, "title": null, "renderers": [{"id": "2133def1-e70b-49af-b541-fb2743757b23", "type": "GlyphRenderer"}, {"id": "a61c9dec-3fae-4143-b25c-5d90606a5a91", "type": "GlyphRenderer"}, {"id": "ef2534a8-c29c-48e5-8c5b-df132ef8a259", "type": "GlyphRenderer"}, {"id": "bc4c8bd7-5838-4b51-a92d-0ce3830f7a29", "type": "LinearAxis"}, {"id": "ee4bc0eb-5dca-44bd-bd74-e566a849a624", "type": "LinearAxis"}, {"id": "6efa418e-2880-47c5-9a68-bbb2a75259be", "type": "Grid"}, {"id": "02f7a98a-52c3-468e-9777-60d7ab7fe712", "type": "Grid"}], "left": [{"id": "ee4bc0eb-5dca-44bd-bd74-e566a849a624", "type": "LinearAxis"}], "v_symmetry": false, "x_range": {"id": "1289e660-58c2-408b-bc30-282fbda3bf52", "type": "Range1d"}, "extra_x_ranges": {}, "tools": [], "id": "a213dae9-6d14-456b-a0a6-28a6490e8a68", "y_range": {"id": "0aab1cb9-36bc-460c-91ca-91ddacaededf", "type": "Range1d"}, "plot_width": 300, "above": [], "min_border": 0, "extra_y_ranges": {}, "doc": null, "below": [{"id": "bc4c8bd7-5838-4b51-a92d-0ce3830f7a29", "type": "LinearAxis"}], "right": [], "toolbar_location": null, "plot_height": 300, "h_symmetry": false, "tags": []}}, {"id": "50d89a39-eb35-4442-8078-2a66139b4dfb", "type": "ColumnDataSource", "attributes": {"selected": [], "data": {"h1": [10.0, 20.0, 30.0, 40.0, 50.0], "y1": [0.0, 37.5, 75.0, 112.5, 150.0], "x1": [0.0, 37.5, 75.0, 112.5, 150.0], "url": ["http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png"], "y2": [0.0, 50.0, 100.0, 150.0, 200.0], "x2": [-50.0, 0.0, 50.0, 100.0, 150.0], "w1": [10.0, 20.0, 30.0, 40.0, 50.0]}, "column_names": ["h1", "url", "x1", "y1", "y2", "x2", "w1"], "id": "50d89a39-eb35-4442-8078-2a66139b4dfb", "doc": null, "tags": []}}, {"id": "7abba1cc-1f3c-47f8-a9cb-bb66d296d6a4", "type": "ImageURL", "attributes": {"url": {"value": "http://bokeh.pydata.org/en/latest/_static/bokeh-transparent.png", "units": "data"}, "tags": [], "y": {"value": -100, "units": "data"}, "anchor": "bottom_right", "id": "7abba1cc-1f3c-47f8-a9cb-bb66d296d6a4", "doc": null, "x": {"value": 200, "units": "data"}}}, {"id": "17949167-156d-4fd1-bddc-5c5032348433", "type": "BasicTickFormatter", "attributes": {"id": "17949167-156d-4fd1-bddc-5c5032348433", "doc": null, "tags": []}}, {"id": "02f7a98a-52c3-468e-9777-60d7ab7fe712", "type": "Grid", "attributes": {"id": "02f7a98a-52c3-468e-9777-60d7ab7fe712", "plot": {"id": "a213dae9-6d14-456b-a0a6-28a6490e8a68", "type": "Plot"}, "dimension": 1, "ticker": {"id": "a0af0101-e661-4f95-8508-415004ab9dd5", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "0aab1cb9-36bc-460c-91ca-91ddacaededf", "type": "Range1d", "attributes": {"end": 200, "start": -100, "id": "0aab1cb9-36bc-460c-91ca-91ddacaededf", "doc": null, "tags": []}}, {"id": "ee4bc0eb-5dca-44bd-bd74-e566a849a624", "type": "LinearAxis", "attributes": {"id": "ee4bc0eb-5dca-44bd-bd74-e566a849a624", "formatter": {"id": "a7c6ac8b-7146-4b30-a991-17339ed34d53", "type": "BasicTickFormatter"}, "plot": {"id": "a213dae9-6d14-456b-a0a6-28a6490e8a68", "type": "Plot"}, "ticker": {"id": "a0af0101-e661-4f95-8508-415004ab9dd5", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "6efa418e-2880-47c5-9a68-bbb2a75259be", "type": "Grid", "attributes": {"id": "6efa418e-2880-47c5-9a68-bbb2a75259be", "plot": {"id": "a213dae9-6d14-456b-a0a6-28a6490e8a68", "type": "Plot"}, "dimension": 0, "ticker": {"id": "4d616dbe-f058-434b-bc2a-1b47e6c5aa00", "type": "BasicTicker"}, "doc": null, "tags": []}}, {"id": "a0af0101-e661-4f95-8508-415004ab9dd5", "type": "BasicTicker", "attributes": {"id": "a0af0101-e661-4f95-8508-415004ab9dd5", "mantissas": [2, 5, 10], "tags": [], "doc": null}}, {"id": "da99f7b0-25cb-4858-9814-37df89275ed4", "type": "ImageURL", "attributes": {"h": {"value": 20, "units": "data"}, "url": {"field": "url", "units": "data"}, "tags": [], "y": {"field": "y2", "units": "data"}, "anchor": "top_left", "id": "da99f7b0-25cb-4858-9814-37df89275ed4", "w": {"value": 20, "units": "data"}, "doc": null, "x": {"field": "x2", "units": "data"}}}, {"id": "2133def1-e70b-49af-b541-fb2743757b23", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "50d89a39-eb35-4442-8078-2a66139b4dfb", "type": "ColumnDataSource"}, "id": "2133def1-e70b-49af-b541-fb2743757b23", "glyph": {"id": "191e7fe1-7ec6-4d7c-9369-f06ffafcdf8a", "type": "ImageURL"}, "tags": [], "doc": null}}, {"id": "1289e660-58c2-408b-bc30-282fbda3bf52", "type": "Range1d", "attributes": {"end": 200, "start": -100, "id": "1289e660-58c2-408b-bc30-282fbda3bf52", "doc": null, "tags": []}}, {"id": "a61c9dec-3fae-4143-b25c-5d90606a5a91", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "50d89a39-eb35-4442-8078-2a66139b4dfb", "type": "ColumnDataSource"}, "id": "a61c9dec-3fae-4143-b25c-5d90606a5a91", "glyph": {"id": "da99f7b0-25cb-4858-9814-37df89275ed4", "type": "ImageURL"}, "tags": [], "doc": null}}, {"id": "b595de72-6cb5-4f37-b8ff-e5f00ae86604", "type": "ToolEvents", "attributes": {"geometries": [], "id": "b595de72-6cb5-4f37-b8ff-e5f00ae86604", "doc": null, "tags": []}}, {"id": "ef2534a8-c29c-48e5-8c5b-df132ef8a259", "type": "GlyphRenderer", "attributes": {"selection_glyph": null, "nonselection_glyph": null, "data_source": {"id": "50d89a39-eb35-4442-8078-2a66139b4dfb", "type": "ColumnDataSource"}, "id": "ef2534a8-c29c-48e5-8c5b-df132ef8a259", "glyph": {"id": "7abba1cc-1f3c-47f8-a9cb-bb66d296d6a4", "type": "ImageURL"}, "tags": [], "doc": null}}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("a3397dca-a8c6-426f-96ff-f02f8ec88877", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("a3397dca-a8c6-426f-96ff-f02f8ec88877", all_models);
    });
  }

}(this));