
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
  }

  function run_callbacks() {
    window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
    delete window._bokeh_onload_callbacks
    console.info("Bokeh: all callbacks have finished");
  }

  function load_libs(js_urls, callback) {
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading > 0) {
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
      return null;
    }
    if (js_urls == null || js_urls.length === 0) {
      run_callbacks();
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
    window._bokeh_is_loading = js_urls.length;
    for (var i = 0; i < js_urls.length; i++) {
      var url = js_urls[i];
      var s = document.createElement('script');
      s.src = url;
      s.async = false;
      s.onreadystatechange = s.onload = function() {
        window._bokeh_is_loading--;
        if (window._bokeh_is_loading === 0) {
          console.log("Bokeh: all BokehJS libraries loaded");
          run_callbacks()
        }
      };
      s.onerror = function() {
        console.warn("failed to load library " + url);
      };
      console.log("Bokeh: injecting script tag for BokehJS library: ", url);
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };var element = document.getElementById("4e8c1797-1da4-4cb3-874c-1a03adec1095");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '4e8c1797-1da4-4cb3-874c-1a03adec1095' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"04a2b197-31a7-403a-ad8b-e3af57c17631": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "PreviewSaveTool", "id": "6db9bb67-3dde-4c82-ad42-521ff4a6ea54", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d18ce987-99cb-4464-82b1-5e28bfee8155"}}}, {"type": "BasicTickFormatter", "id": "b268f470-eb61-4e96-8987-9c769365c103", "attributes": {}}, {"type": "Grid", "id": "0d6fa812-ce35-4ff5-b803-4dcc40c3fa6b", "attributes": {"ticker": {"type": "BasicTicker", "id": "2e74cba2-5567-41e3-9cbb-770b3845348a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d18ce987-99cb-4464-82b1-5e28bfee8155"}}}, {"type": "BasicTicker", "id": "5b50656e-bfc5-4498-ba88-f4e96d874d4c", "attributes": {}}, {"type": "BoxAnnotation", "id": "e366dcf4-6594-4c01-881d-3a0df1fdda75", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Circle", "id": "d76079ca-9e06-4bb1-908e-877a715bb4cb", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ResetTool", "id": "c222776e-d128-4d3e-8527-28499f6f26f4", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d18ce987-99cb-4464-82b1-5e28bfee8155"}}}, {"type": "DataRange1d", "id": "478c9415-76c8-4a89-a508-417a93f51f19", "attributes": {"callback": null}}, {"type": "ResizeTool", "id": "09ad94e8-5573-40fd-80ad-89b018b5759f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d18ce987-99cb-4464-82b1-5e28bfee8155"}}}, {"type": "LinearAxis", "id": "2713f641-8831-4bfc-a0e4-6b5ec3dbc780", "attributes": {"ticker": {"type": "BasicTicker", "id": "5b50656e-bfc5-4498-ba88-f4e96d874d4c"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d18ce987-99cb-4464-82b1-5e28bfee8155"}, "formatter": {"type": "BasicTickFormatter", "id": "bdcdf131-5608-439e-bd4f-b020e331e903"}, "axis_label": "Bin Count", "axis_label_text_font_style": "italic"}}, {"type": "WheelZoomTool", "id": "ccd9ca24-578e-41d1-b0a2-41616188f342", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d18ce987-99cb-4464-82b1-5e28bfee8155"}}}, {"type": "BoxZoomTool", "id": "3502504b-52c1-455e-bb94-3bed18ccd711", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "e366dcf4-6594-4c01-881d-3a0df1fdda75"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d18ce987-99cb-4464-82b1-5e28bfee8155"}}}, {"type": "BasicTickFormatter", "id": "bdcdf131-5608-439e-bd4f-b020e331e903", "attributes": {}}, {"type": "DataRange1d", "id": "9a99a8de-4d16-4840-954c-df0b64da9c2b", "attributes": {"callback": null}}, {"type": "Circle", "id": "b0cc5253-b3c2-4766-94b6-f7355b2ad998", "attributes": {"line_color": {"value": "#1f77b4"}, "x": {"field": "x"}, "size": {"value": 10, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"value": "#1f77b4"}}}, {"type": "ToolEvents", "id": "ff510df9-4b31-41e4-b304-c93850e2e6b7", "attributes": {}}, {"type": "GlyphRenderer", "id": "6c98ccfe-1c66-4545-bb95-45e41cf5a2c4", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "843ea384-48b0-4016-b0dc-b9be412bcfd1"}, "nonselection_glyph": {"type": "Circle", "id": "d76079ca-9e06-4bb1-908e-877a715bb4cb"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "b0cc5253-b3c2-4766-94b6-f7355b2ad998"}}}, {"type": "ColumnDataSource", "id": "843ea384-48b0-4016-b0dc-b9be412bcfd1", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [2, 5, 8, 2, 7]}, "column_names": ["x", "y"], "callback": null}}, {"type": "HelpTool", "id": "101ed17b-a77a-4105-935d-13b3821a127d", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d18ce987-99cb-4464-82b1-5e28bfee8155"}}}, {"type": "Grid", "id": "051682e0-095d-40bd-a4cf-f0dc96150433", "attributes": {"ticker": {"type": "BasicTicker", "id": "5b50656e-bfc5-4498-ba88-f4e96d874d4c"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "d18ce987-99cb-4464-82b1-5e28bfee8155"}}}, {"type": "Plot", "id": "d18ce987-99cb-4464-82b1-5e28bfee8155", "attributes": {"tools": [{"type": "PanTool", "id": "750c44e6-5376-4a21-8acf-bc2e361edff0"}, {"type": "WheelZoomTool", "id": "ccd9ca24-578e-41d1-b0a2-41616188f342"}, {"type": "BoxZoomTool", "id": "3502504b-52c1-455e-bb94-3bed18ccd711"}, {"type": "PreviewSaveTool", "id": "6db9bb67-3dde-4c82-ad42-521ff4a6ea54"}, {"type": "ResizeTool", "id": "09ad94e8-5573-40fd-80ad-89b018b5759f"}, {"type": "ResetTool", "id": "c222776e-d128-4d3e-8527-28499f6f26f4"}, {"type": "HelpTool", "id": "101ed17b-a77a-4105-935d-13b3821a127d"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "478c9415-76c8-4a89-a508-417a93f51f19"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "b6b7ced6-da18-4f26-aa77-b93f9aa989e8"}, {"type": "Grid", "id": "0d6fa812-ce35-4ff5-b803-4dcc40c3fa6b"}, {"type": "LinearAxis", "id": "2713f641-8831-4bfc-a0e4-6b5ec3dbc780"}, {"type": "Grid", "id": "051682e0-095d-40bd-a4cf-f0dc96150433"}, {"type": "BoxAnnotation", "id": "e366dcf4-6594-4c01-881d-3a0df1fdda75"}, {"type": "GlyphRenderer", "id": "6c98ccfe-1c66-4545-bb95-45e41cf5a2c4"}], "left": [{"type": "LinearAxis", "id": "2713f641-8831-4bfc-a0e4-6b5ec3dbc780"}], "below": [{"type": "LinearAxis", "id": "b6b7ced6-da18-4f26-aa77-b93f9aa989e8"}], "tool_events": {"type": "ToolEvents", "id": "ff510df9-4b31-41e4-b304-c93850e2e6b7"}, "x_range": {"type": "DataRange1d", "id": "9a99a8de-4d16-4840-954c-df0b64da9c2b"}}, "subtype": "Figure"}, {"type": "BasicTicker", "id": "2e74cba2-5567-41e3-9cbb-770b3845348a", "attributes": {}}, {"type": "PanTool", "id": "750c44e6-5376-4a21-8acf-bc2e361edff0", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "d18ce987-99cb-4464-82b1-5e28bfee8155"}}}, {"type": "LinearAxis", "id": "b6b7ced6-da18-4f26-aa77-b93f9aa989e8", "attributes": {"ticker": {"type": "BasicTicker", "id": "2e74cba2-5567-41e3-9cbb-770b3845348a"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "d18ce987-99cb-4464-82b1-5e28bfee8155"}, "axis_label_standoff": 30, "axis_label_text_color": {"value": "#aa6666"}, "formatter": {"type": "BasicTickFormatter", "id": "b268f470-eb61-4e96-8987-9c769365c103"}, "axis_label": "Lot Number"}}], "root_ids": ["d18ce987-99cb-4464-82b1-5e28bfee8155"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "04a2b197-31a7-403a-ad8b-e3af57c17631", "modelid": "d18ce987-99cb-4464-82b1-5e28bfee8155", "elementid": "4e8c1797-1da4-4cb3-874c-1a03adec1095"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
    }
  ];

  function run_inline_js() {
    for (var i = 0; i < inline_js.length; i++) {
      inline_js[i](window.Bokeh);
    }
  }

  if (window._bokeh_is_loading === 0) {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    run_inline_js();
  } else {
    load_libs(js_urls, function() {
      console.log("Bokeh: BokehJS plotting callback run at", now());
      run_inline_js();
    });
  }
}(this));