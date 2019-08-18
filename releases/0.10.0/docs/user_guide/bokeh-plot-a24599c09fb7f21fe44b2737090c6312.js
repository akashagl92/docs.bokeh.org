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

  var elt = document.getElementById("063fdadb-0f53-4f40-8d1c-8c6e54a04679");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '063fdadb-0f53-4f40-8d1c-8c6e54a04679' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "df4386db-62fd-4e2e-8ecc-4b8dcd71c3da"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "539fc49f-052c-4fe5-aa8a-426edb95d529"}, "type": "WheelZoomTool", "id": "539fc49f-052c-4fe5-aa8a-426edb95d529"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "df4386db-62fd-4e2e-8ecc-4b8dcd71c3da"}, "tags": [], "doc": null, "id": "9624d0ad-e91d-44c6-8855-030e9b381251"}, "type": "ResizeTool", "id": "9624d0ad-e91d-44c6-8855-030e9b381251"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "df4386db-62fd-4e2e-8ecc-4b8dcd71c3da"}, "tags": [], "doc": null, "dimension": 0, "ticker": {"type": "BasicTicker", "id": "45eda533-9200-43c6-93c2-0fcfead8619b"}, "id": "fbd5a3ac-d28b-44c4-bb5f-33ed288598e3"}, "type": "Grid", "id": "fbd5a3ac-d28b-44c4-bb5f-33ed288598e3"}, {"attributes": {"line_color": {"value": "#CAB2D6"}, "line_alpha": {"value": 1.0}, "angle": {"units": "rad", "value": 1.0471975511965976}, "fill_color": {"value": "#CAB2D6"}, "tags": [], "doc": null, "fill_alpha": {"value": 1.0}, "height_units": "screen", "height": {"units": "screen", "value": 40}, "width": {"units": "data", "value": 0.2}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "92e09bef-525d-4d55-a3ac-8fce54797039"}, "type": "Oval", "id": "92e09bef-525d-4d55-a3ac-8fce54797039"}, {"subtype": "Figure", "type": "Plot", "id": "df4386db-62fd-4e2e-8ecc-4b8dcd71c3da", "attributes": {"x_range": {"type": "DataRange1d", "id": "bc0dcfc1-5a55-4427-90ab-c8459b145a18"}, "right": [], "tags": [], "tools": [{"type": "PanTool", "id": "49fddcb9-d2ff-4920-affb-fa575d361083"}, {"type": "WheelZoomTool", "id": "539fc49f-052c-4fe5-aa8a-426edb95d529"}, {"type": "BoxZoomTool", "id": "06012262-af2e-4eb6-a8ea-781359446947"}, {"type": "PreviewSaveTool", "id": "011d808f-1670-4a81-bb0c-cfe33be86bf7"}, {"type": "ResizeTool", "id": "9624d0ad-e91d-44c6-8855-030e9b381251"}, {"type": "ResetTool", "id": "03007f9d-8221-4a0b-a080-65e644907de7"}, {"type": "HelpTool", "id": "1cbd3edb-3a00-4522-9c67-695153418f3c"}], "extra_y_ranges": {}, "plot_width": 400, "renderers": [{"type": "LinearAxis", "id": "d1594afd-152a-49ae-99aa-64be071b1bec"}, {"type": "Grid", "id": "fbd5a3ac-d28b-44c4-bb5f-33ed288598e3"}, {"type": "LinearAxis", "id": "e38fb15d-b1b8-4b01-8bea-bcc7ef717fcb"}, {"type": "Grid", "id": "c32bd5a6-f75b-477d-84df-714547846b04"}, {"type": "GlyphRenderer", "id": "c829591b-b728-4951-9be7-38d78e808661"}], "extra_x_ranges": {}, "plot_height": 400, "tool_events": {"type": "ToolEvents", "id": "87ea47da-9d5c-4672-b064-3483e540060e"}, "above": [], "doc": null, "id": "df4386db-62fd-4e2e-8ecc-4b8dcd71c3da", "y_range": {"type": "DataRange1d", "id": "fbe39d06-f0da-410e-b1a0-a38daff24f39"}, "below": [{"type": "LinearAxis", "id": "d1594afd-152a-49ae-99aa-64be071b1bec"}], "left": [{"type": "LinearAxis", "id": "e38fb15d-b1b8-4b01-8bea-bcc7ef717fcb"}]}}, {"attributes": {"geometries": [], "tags": [], "doc": null, "id": "87ea47da-9d5c-4672-b064-3483e540060e"}, "type": "ToolEvents", "id": "87ea47da-9d5c-4672-b064-3483e540060e"}, {"attributes": {"line_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "angle": {"units": "rad", "value": 1.0471975511965976}, "fill_color": {"value": "#1f77b4"}, "tags": [], "doc": null, "fill_alpha": {"value": 0.1}, "height_units": "screen", "height": {"units": "screen", "value": 40}, "width": {"units": "data", "value": 0.2}, "y": {"field": "y"}, "x": {"field": "x"}, "id": "63d3ef37-3c21-4882-9e35-5c726487a5fe"}, "type": "Oval", "id": "63d3ef37-3c21-4882-9e35-5c726487a5fe"}, {"attributes": {"doc": null, "id": "ba9bf91a-b0bd-48b4-9685-baf4e47ffb1c", "tags": []}, "type": "BasicTickFormatter", "id": "ba9bf91a-b0bd-48b4-9685-baf4e47ffb1c"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "df4386db-62fd-4e2e-8ecc-4b8dcd71c3da"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "c8e342b8-f821-4651-807a-38700cf490b5"}, "ticker": {"type": "BasicTicker", "id": "45eda533-9200-43c6-93c2-0fcfead8619b"}, "id": "d1594afd-152a-49ae-99aa-64be071b1bec"}, "type": "LinearAxis", "id": "d1594afd-152a-49ae-99aa-64be071b1bec"}, {"attributes": {"column_names": ["y", "x"], "tags": [], "doc": null, "selected": {"2d": {"indices": []}, "1d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "data": {"y": [1, 2, 3], "x": [1, 2, 3]}, "id": "a35f2f87-18ef-4386-a548-d057b48b0051"}, "type": "ColumnDataSource", "id": "a35f2f87-18ef-4386-a548-d057b48b0051"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "bc0dcfc1-5a55-4427-90ab-c8459b145a18"}, "type": "DataRange1d", "id": "bc0dcfc1-5a55-4427-90ab-c8459b145a18"}, {"attributes": {"tags": [], "doc": null, "renderers": [], "callback": null, "names": [], "id": "fbe39d06-f0da-410e-b1a0-a38daff24f39"}, "type": "DataRange1d", "id": "fbe39d06-f0da-410e-b1a0-a38daff24f39"}, {"attributes": {"nonselection_glyph": {"type": "Oval", "id": "63d3ef37-3c21-4882-9e35-5c726487a5fe"}, "data_source": {"type": "ColumnDataSource", "id": "a35f2f87-18ef-4386-a548-d057b48b0051"}, "tags": [], "doc": null, "selection_glyph": null, "id": "c829591b-b728-4951-9be7-38d78e808661", "glyph": {"type": "Oval", "id": "92e09bef-525d-4d55-a3ac-8fce54797039"}}, "type": "GlyphRenderer", "id": "c829591b-b728-4951-9be7-38d78e808661"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "df4386db-62fd-4e2e-8ecc-4b8dcd71c3da"}, "tags": [], "doc": null, "id": "1cbd3edb-3a00-4522-9c67-695153418f3c"}, "type": "HelpTool", "id": "1cbd3edb-3a00-4522-9c67-695153418f3c"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "df4386db-62fd-4e2e-8ecc-4b8dcd71c3da"}, "tags": [], "doc": null, "formatter": {"type": "BasicTickFormatter", "id": "ba9bf91a-b0bd-48b4-9685-baf4e47ffb1c"}, "ticker": {"type": "BasicTicker", "id": "bb33187b-5f5b-4c46-92b4-b4c123d3f2bb"}, "id": "e38fb15d-b1b8-4b01-8bea-bcc7ef717fcb"}, "type": "LinearAxis", "id": "e38fb15d-b1b8-4b01-8bea-bcc7ef717fcb"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "df4386db-62fd-4e2e-8ecc-4b8dcd71c3da"}, "tags": [], "doc": null, "id": "03007f9d-8221-4a0b-a080-65e644907de7"}, "type": "ResetTool", "id": "03007f9d-8221-4a0b-a080-65e644907de7"}, {"attributes": {"doc": null, "id": "c8e342b8-f821-4651-807a-38700cf490b5", "tags": []}, "type": "BasicTickFormatter", "id": "c8e342b8-f821-4651-807a-38700cf490b5"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "bb33187b-5f5b-4c46-92b4-b4c123d3f2bb", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "bb33187b-5f5b-4c46-92b4-b4c123d3f2bb"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "df4386db-62fd-4e2e-8ecc-4b8dcd71c3da"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "49fddcb9-d2ff-4920-affb-fa575d361083"}, "type": "PanTool", "id": "49fddcb9-d2ff-4920-affb-fa575d361083"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "df4386db-62fd-4e2e-8ecc-4b8dcd71c3da"}, "dimensions": ["width", "height"], "tags": [], "doc": null, "id": "06012262-af2e-4eb6-a8ea-781359446947"}, "type": "BoxZoomTool", "id": "06012262-af2e-4eb6-a8ea-781359446947"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "df4386db-62fd-4e2e-8ecc-4b8dcd71c3da"}, "tags": [], "doc": null, "dimension": 1, "ticker": {"type": "BasicTicker", "id": "bb33187b-5f5b-4c46-92b4-b4c123d3f2bb"}, "id": "c32bd5a6-f75b-477d-84df-714547846b04"}, "type": "Grid", "id": "c32bd5a6-f75b-477d-84df-714547846b04"}, {"attributes": {"plot": {"subtype": "Figure", "type": "Plot", "id": "df4386db-62fd-4e2e-8ecc-4b8dcd71c3da"}, "tags": [], "doc": null, "id": "011d808f-1670-4a81-bb0c-cfe33be86bf7"}, "type": "PreviewSaveTool", "id": "011d808f-1670-4a81-bb0c-cfe33be86bf7"}, {"attributes": {"tags": [], "doc": null, "mantissas": [2, 5, 10], "id": "45eda533-9200-43c6-93c2-0fcfead8619b", "num_minor_ticks": 5}, "type": "BasicTicker", "id": "45eda533-9200-43c6-93c2-0fcfead8619b"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("063fdadb-0f53-4f40-8d1c-8c6e54a04679", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("063fdadb-0f53-4f40-8d1c-8c6e54a04679", all_models);
    });
  }

}(this));