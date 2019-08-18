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

  var elt = document.getElementById("2006f693-819b-4eae-84c7-1b47ed5b49b5");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '2006f693-819b-4eae-84c7-1b47ed5b49b5' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "d2bb4c58-3182-4941-af96-bb73712b0dbe"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "ff1a0956-3501-4fec-8c75-7dfb7eb3fa64"}, "id": "07a68e88-6e25-4980-b531-9161c81c6d61"}, "type": "Grid", "id": "07a68e88-6e25-4980-b531-9161c81c6d61"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "4d872adf-862b-43ff-b760-e4afed397c02"}, "right": [], "tags": [], "toolbar_location": null, "v_symmetry": false, "plot_width": 300, "renderers": [{"type": "GlyphRenderer", "id": "860bbb10-607a-45d7-80c7-68310c6a087c"}, {"type": "LinearAxis", "id": "14784a6b-c75b-4a6f-b8c6-4bf769223f85"}, {"type": "LinearAxis", "id": "d68bfb47-9dd2-4714-b8e6-c6a2e149a147"}, {"type": "Grid", "id": "67977937-7558-4e81-a43e-d506b42c98e9"}, {"type": "Grid", "id": "07a68e88-6e25-4980-b531-9161c81c6d61"}], "plot_height": 300, "tool_events": {"type": "ToolEvents", "id": "8d639b5e-405f-4b90-b0ae-c758a8eb8970"}, "h_symmetry": false, "tools": [], "id": "d2bb4c58-3182-4941-af96-bb73712b0dbe", "title": null, "y_range": {"type": "DataRange1d", "id": "509ec9b9-c263-4430-b4a4-f0750c43eb53"}, "min_border": 0, "extra_y_ranges": {}, "below": [{"type": "LinearAxis", "id": "14784a6b-c75b-4a6f-b8c6-4bf769223f85"}], "extra_x_ranges": {}, "above": [], "doc": null, "left": [{"type": "LinearAxis", "id": "d68bfb47-9dd2-4714-b8e6-c6a2e149a147"}]}, "type": "Plot", "id": "d2bb4c58-3182-4941-af96-bb73712b0dbe"}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "8d639b5e-405f-4b90-b0ae-c758a8eb8970"}, "type": "ToolEvents", "id": "8d639b5e-405f-4b90-b0ae-c758a8eb8970"}, {"attributes": {"column_names": ["y", "text", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [4.0, 2.25, 1.0, 0.25, 0.0, 0.25, 1.0, 2.25, 4.0], "text": ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"], "x": [-2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0]}, "id": "7f8e9423-b0f4-418a-8941-0d42307f585c"}, "type": "ColumnDataSource", "id": "7f8e9423-b0f4-418a-8941-0d42307f585c"}, {"attributes": {"plot": {"type": "Plot", "id": "d2bb4c58-3182-4941-af96-bb73712b0dbe"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "7202b1c8-0009-4727-81f9-2da54a87084a"}, "ticker": {"type": "BasicTicker", "id": "72147b48-c9b6-4b29-8379-8de673681c23"}, "id": "14784a6b-c75b-4a6f-b8c6-4bf769223f85"}, "type": "LinearAxis", "id": "14784a6b-c75b-4a6f-b8c6-4bf769223f85"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "ff1a0956-3501-4fec-8c75-7dfb7eb3fa64"}, "type": "BasicTicker", "id": "ff1a0956-3501-4fec-8c75-7dfb7eb3fa64"}, {"attributes": {"angle": {"units": "rad", "value": 0.3}, "tags": [], "text": {"field": "text"}, "text_color": {"value": "#96deb3"}, "doc": null, "y": {"field": "y"}, "x": {"field": "x"}, "id": "fc5181fd-c6b1-48dd-b398-daf3f12d69e0"}, "type": "Text", "id": "fc5181fd-c6b1-48dd-b398-daf3f12d69e0"}, {"attributes": {"doc": null, "id": "7ffb5a3e-ab1a-48fb-8fe9-0569dda3ceb4", "tags": []}, "type": "BasicTickFormatter", "id": "7ffb5a3e-ab1a-48fb-8fe9-0569dda3ceb4"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "4d872adf-862b-43ff-b760-e4afed397c02"}, "type": "DataRange1d", "id": "4d872adf-862b-43ff-b760-e4afed397c02"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "509ec9b9-c263-4430-b4a4-f0750c43eb53"}, "type": "DataRange1d", "id": "509ec9b9-c263-4430-b4a4-f0750c43eb53"}, {"attributes": {"nonselection_glyph": null, "data_source": {"type": "ColumnDataSource", "id": "7f8e9423-b0f4-418a-8941-0d42307f585c"}, "tags": [], "doc": null, "selection_glyph": null, "id": "860bbb10-607a-45d7-80c7-68310c6a087c", "glyph": {"type": "Text", "id": "fc5181fd-c6b1-48dd-b398-daf3f12d69e0"}}, "type": "GlyphRenderer", "id": "860bbb10-607a-45d7-80c7-68310c6a087c"}, {"attributes": {"plot": {"type": "Plot", "id": "d2bb4c58-3182-4941-af96-bb73712b0dbe"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "72147b48-c9b6-4b29-8379-8de673681c23"}, "id": "67977937-7558-4e81-a43e-d506b42c98e9"}, "type": "Grid", "id": "67977937-7558-4e81-a43e-d506b42c98e9"}, {"attributes": {"plot": {"type": "Plot", "id": "d2bb4c58-3182-4941-af96-bb73712b0dbe"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "7ffb5a3e-ab1a-48fb-8fe9-0569dda3ceb4"}, "ticker": {"type": "BasicTicker", "id": "ff1a0956-3501-4fec-8c75-7dfb7eb3fa64"}, "id": "d68bfb47-9dd2-4714-b8e6-c6a2e149a147"}, "type": "LinearAxis", "id": "d68bfb47-9dd2-4714-b8e6-c6a2e149a147"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "72147b48-c9b6-4b29-8379-8de673681c23"}, "type": "BasicTicker", "id": "72147b48-c9b6-4b29-8379-8de673681c23"}, {"attributes": {"doc": null, "id": "7202b1c8-0009-4727-81f9-2da54a87084a", "tags": []}, "type": "BasicTickFormatter", "id": "7202b1c8-0009-4727-81f9-2da54a87084a"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("2006f693-819b-4eae-84c7-1b47ed5b49b5", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("2006f693-819b-4eae-84c7-1b47ed5b49b5", all_models);
    });
  }

}(this));