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

  var elt = document.getElementById("3ed59fd7-5a65-47a7-9221-401646a25917");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '3ed59fd7-5a65-47a7-9221-401646a25917' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "TapTool", "attributes": {"always_active": true, "id": "253a75c6-19fb-4e6f-8d8b-86a625d4f82f", "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2c6e3d1b-2e64-4746-a027-acf5cb525af5", "subtype": "Figure"}, "renderers": [], "callback": null, "names": []}, "id": "253a75c6-19fb-4e6f-8d8b-86a625d4f82f"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "10cc220e-bd64-4501-986f-6853df310f52"}, "id": "10cc220e-bd64-4501-986f-6853df310f52"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 1.0}, "tags": [], "x": {"field": "x"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}, "size": {"units": "screen", "value": 50}, "line_alpha": {"value": 1.0}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "2532de6b-fc2a-43ee-b87e-8e6ae75bdbcd"}, "id": "2532de6b-fc2a-43ee-b87e-8e6ae75bdbcd"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "10cc220e-bd64-4501-986f-6853df310f52"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "cf381184-0702-4332-a250-4183a4f9066d"}, "plot": {"type": "Plot", "id": "2c6e3d1b-2e64-4746-a027-acf5cb525af5", "subtype": "Figure"}, "id": "6a554055-e5dd-480d-bae6-835b9974e6cd"}, "id": "6a554055-e5dd-480d-bae6-835b9974e6cd"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "f1a83c94-c9a5-4408-9ee4-1c275ff97f66"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "081d8d1c-bb20-41d0-8dde-4b9761c07d8c"}, "plot": {"type": "Plot", "id": "2c6e3d1b-2e64-4746-a027-acf5cb525af5", "subtype": "Figure"}, "id": "9b29703c-bbd0-4ca1-b6d3-ce268d30807f"}, "id": "9b29703c-bbd0-4ca1-b6d3-ce268d30807f"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "f1a83c94-c9a5-4408-9ee4-1c275ff97f66"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2c6e3d1b-2e64-4746-a027-acf5cb525af5", "subtype": "Figure"}, "dimension": 0, "id": "60f0376f-040c-4d78-91f0-ab940b189fcf"}, "id": "60f0376f-040c-4d78-91f0-ab940b189fcf"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "cf381184-0702-4332-a250-4183a4f9066d", "tags": []}, "id": "cf381184-0702-4332-a250-4183a4f9066d"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "3aed6a67-00e5-4c35-8278-46f433454655", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "3aed6a67-00e5-4c35-8278-46f433454655"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "233f0499-5dd6-4ec0-95ad-bba12a3ecd01", "tags": [], "geometries": []}, "id": "233f0499-5dd6-4ec0-95ad-bba12a3ecd01"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"y": [2, 5, 8, 2, 7], "x": [1, 2, 3, 4, 5]}, "doc": null, "id": "0011abe6-7553-4c8d-a497-d22ae09cd424", "column_names": ["y", "x"]}, "id": "0011abe6-7553-4c8d-a497-d22ae09cd424"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "0011abe6-7553-4c8d-a497-d22ae09cd424"}, "tags": [], "name": "mycircle", "doc": null, "nonselection_glyph": {"type": "Circle", "id": "ddf67227-2a31-4773-985d-f2ed988f25b7"}, "glyph": {"type": "Circle", "id": "2532de6b-fc2a-43ee-b87e-8e6ae75bdbcd"}, "selection_glyph": {"type": "Circle", "id": "101aed40-cdad-4914-9867-183cca616f7f"}, "id": "e7d30949-c0c2-437d-b6cb-963c79147f96"}, "id": "e7d30949-c0c2-437d-b6cb-963c79147f96"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 1.0}, "fill_color": {"value": "firebrick"}, "line_color": null, "tags": [], "doc": null, "id": "101aed40-cdad-4914-9867-183cca616f7f"}, "id": "101aed40-cdad-4914-9867-183cca616f7f"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "081d8d1c-bb20-41d0-8dde-4b9761c07d8c", "tags": []}, "id": "081d8d1c-bb20-41d0-8dde-4b9761c07d8c"}, {"type": "Grid", "attributes": {"ticker": {"type": "BasicTicker", "id": "10cc220e-bd64-4501-986f-6853df310f52"}, "tags": [], "doc": null, "plot": {"type": "Plot", "id": "2c6e3d1b-2e64-4746-a027-acf5cb525af5", "subtype": "Figure"}, "dimension": 1, "id": "5b0d6b83-b8ed-4a7e-ae84-cd67d738ebc0"}, "id": "5b0d6b83-b8ed-4a7e-ae84-cd67d738ebc0"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "4a4ebd14-a137-44c1-8a75-78c4c53783d5", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "4a4ebd14-a137-44c1-8a75-78c4c53783d5"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "f1a83c94-c9a5-4408-9ee4-1c275ff97f66"}, "id": "f1a83c94-c9a5-4408-9ee4-1c275ff97f66"}, {"type": "Plot", "attributes": {"plot_height": 400, "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "3aed6a67-00e5-4c35-8278-46f433454655"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "233f0499-5dd6-4ec0-95ad-bba12a3ecd01"}, "right": [], "renderers": [{"type": "LinearAxis", "id": "9b29703c-bbd0-4ca1-b6d3-ce268d30807f"}, {"type": "Grid", "id": "60f0376f-040c-4d78-91f0-ab940b189fcf"}, {"type": "LinearAxis", "id": "6a554055-e5dd-480d-bae6-835b9974e6cd"}, {"type": "Grid", "id": "5b0d6b83-b8ed-4a7e-ae84-cd67d738ebc0"}, {"type": "GlyphRenderer", "id": "e7d30949-c0c2-437d-b6cb-963c79147f96"}], "below": [{"type": "LinearAxis", "id": "9b29703c-bbd0-4ca1-b6d3-ce268d30807f"}], "left": [{"type": "LinearAxis", "id": "6a554055-e5dd-480d-bae6-835b9974e6cd"}], "above": [], "tags": [], "plot_width": 400, "extra_y_ranges": {}, "title": "Select a circle", "tools": [{"type": "TapTool", "id": "253a75c6-19fb-4e6f-8d8b-86a625d4f82f"}], "x_range": {"type": "DataRange1d", "id": "4a4ebd14-a137-44c1-8a75-78c4c53783d5"}, "id": "2c6e3d1b-2e64-4746-a027-acf5cb525af5"}, "id": "2c6e3d1b-2e64-4746-a027-acf5cb525af5", "subtype": "Figure"}, {"type": "Circle", "attributes": {"fill_alpha": {"value": 0.2}, "fill_color": {"value": "blue"}, "line_color": {"value": "firebrick"}, "tags": [], "doc": null, "id": "ddf67227-2a31-4773-985d-f2ed988f25b7"}, "id": "ddf67227-2a31-4773-985d-f2ed988f25b7"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("3ed59fd7-5a65-47a7-9221-401646a25917", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("3ed59fd7-5a65-47a7-9221-401646a25917", all_models);
    });
  }

}(this));