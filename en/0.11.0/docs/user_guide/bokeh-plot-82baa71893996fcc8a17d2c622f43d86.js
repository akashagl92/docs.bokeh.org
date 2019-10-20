
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
  };var element = document.getElementById("0e4399d1-ca5d-4a01-9cf2-c6a84f8069a0");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '0e4399d1-ca5d-4a01-9cf2-c6a84f8069a0' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"1cbba336-16c5-4f6e-be5a-6d964eb43167": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ColumnDataSource", "id": "b5683baf-0dde-4e08-8ef4-0b5e6d095cf3", "attributes": {"data": {"x": [1, 2, 3, 4, 5], "y": [6, 7, 2, 4, 5]}, "column_names": ["x", "y"], "callback": null}}, {"type": "BasicTicker", "id": "c8912a0f-0e06-4ba5-8166-5937fc4897be", "attributes": {}}, {"type": "DataRange1d", "id": "28a555de-3e93-419f-846d-2d700e8f9624", "attributes": {"callback": null}}, {"type": "LinearAxis", "id": "15125507-d96f-45bb-93fe-7d386eabab30", "attributes": {"ticker": {"type": "BasicTicker", "id": "c8912a0f-0e06-4ba5-8166-5937fc4897be"}, "formatter": {"type": "BasicTickFormatter", "id": "0abc7f97-f38f-466e-900b-990eeb79c4c4"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "520138fd-ece4-4b9a-ab8b-9c204ea6775c"}}}, {"type": "BasicTickFormatter", "id": "3b6e3127-c081-416c-9189-293ff731f574", "attributes": {}}, {"type": "Grid", "id": "087bd97d-b052-454a-972e-ba89b5d2f146", "attributes": {"ticker": {"type": "BasicTicker", "id": "c8912a0f-0e06-4ba5-8166-5937fc4897be"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "520138fd-ece4-4b9a-ab8b-9c204ea6775c"}}}, {"type": "Plot", "id": "520138fd-ece4-4b9a-ab8b-9c204ea6775c", "attributes": {"tools": [{"type": "PanTool", "id": "192a2b0f-734a-41aa-a3bb-e102783b891c"}, {"type": "WheelZoomTool", "id": "8f9a2aa3-3383-4c00-a4e5-1b7324e69629"}, {"type": "BoxZoomTool", "id": "aeb43f23-1cab-4955-99c2-5b45fd74626e"}, {"type": "PreviewSaveTool", "id": "98ae62fe-493d-4059-b8f2-b2d720b48bd6"}, {"type": "ResizeTool", "id": "361efc3e-7761-468c-8a85-bd68c5181dda"}, {"type": "ResetTool", "id": "efc488c7-b660-40c8-b3e2-6eb56e6d21ca"}, {"type": "HelpTool", "id": "602d8f58-5c8c-455d-9c8b-3f69e6644a6d"}], "plot_width": 400, "y_range": {"type": "DataRange1d", "id": "28a555de-3e93-419f-846d-2d700e8f9624"}, "plot_height": 400, "renderers": [{"type": "LinearAxis", "id": "15125507-d96f-45bb-93fe-7d386eabab30"}, {"type": "Grid", "id": "087bd97d-b052-454a-972e-ba89b5d2f146"}, {"type": "LinearAxis", "id": "8a4647b0-cde3-46ad-a9e0-a9364229ad25"}, {"type": "Grid", "id": "607f8529-ef5e-4eab-b493-c298398eb33c"}, {"type": "BoxAnnotation", "id": "b761fd4c-5cb2-47f5-b0ca-48451e1c1887"}, {"type": "GlyphRenderer", "id": "f33f989d-2bba-4686-989d-b942d47cef09"}], "left": [{"type": "LinearAxis", "id": "8a4647b0-cde3-46ad-a9e0-a9364229ad25"}], "below": [{"type": "LinearAxis", "id": "15125507-d96f-45bb-93fe-7d386eabab30"}], "tool_events": {"type": "ToolEvents", "id": "599aee4f-d974-41fa-935a-f0a40e2d79b7"}, "x_range": {"type": "DataRange1d", "id": "cfcb5616-b886-4dba-8203-91dce3d65058"}}, "subtype": "Figure"}, {"type": "GlyphRenderer", "id": "f33f989d-2bba-4686-989d-b942d47cef09", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "b5683baf-0dde-4e08-8ef4-0b5e6d095cf3"}, "nonselection_glyph": {"type": "Square", "id": "2b4c0289-35a0-44fe-92dc-d2b62c1af8b9"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Square", "id": "a3056a5a-0381-48bd-886b-2c78c51ca0d8"}}}, {"type": "LinearAxis", "id": "8a4647b0-cde3-46ad-a9e0-a9364229ad25", "attributes": {"ticker": {"type": "BasicTicker", "id": "eca8e824-7af1-4f91-9696-5a9a44daffe5"}, "formatter": {"type": "BasicTickFormatter", "id": "3b6e3127-c081-416c-9189-293ff731f574"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "520138fd-ece4-4b9a-ab8b-9c204ea6775c"}}}, {"type": "PanTool", "id": "192a2b0f-734a-41aa-a3bb-e102783b891c", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "520138fd-ece4-4b9a-ab8b-9c204ea6775c"}}}, {"type": "HelpTool", "id": "602d8f58-5c8c-455d-9c8b-3f69e6644a6d", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "520138fd-ece4-4b9a-ab8b-9c204ea6775c"}}}, {"type": "Grid", "id": "607f8529-ef5e-4eab-b493-c298398eb33c", "attributes": {"ticker": {"type": "BasicTicker", "id": "eca8e824-7af1-4f91-9696-5a9a44daffe5"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "520138fd-ece4-4b9a-ab8b-9c204ea6775c"}}}, {"type": "WheelZoomTool", "id": "8f9a2aa3-3383-4c00-a4e5-1b7324e69629", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "520138fd-ece4-4b9a-ab8b-9c204ea6775c"}}}, {"type": "DataRange1d", "id": "cfcb5616-b886-4dba-8203-91dce3d65058", "attributes": {"callback": null}}, {"type": "Square", "id": "2b4c0289-35a0-44fe-92dc-d2b62c1af8b9", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "BoxZoomTool", "id": "aeb43f23-1cab-4955-99c2-5b45fd74626e", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "b761fd4c-5cb2-47f5-b0ca-48451e1c1887"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "520138fd-ece4-4b9a-ab8b-9c204ea6775c"}}}, {"type": "BasicTickFormatter", "id": "0abc7f97-f38f-466e-900b-990eeb79c4c4", "attributes": {}}, {"type": "ResetTool", "id": "efc488c7-b660-40c8-b3e2-6eb56e6d21ca", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "520138fd-ece4-4b9a-ab8b-9c204ea6775c"}}}, {"type": "ToolEvents", "id": "599aee4f-d974-41fa-935a-f0a40e2d79b7", "attributes": {}}, {"type": "PreviewSaveTool", "id": "98ae62fe-493d-4059-b8f2-b2d720b48bd6", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "520138fd-ece4-4b9a-ab8b-9c204ea6775c"}}}, {"type": "ResizeTool", "id": "361efc3e-7761-468c-8a85-bd68c5181dda", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "520138fd-ece4-4b9a-ab8b-9c204ea6775c"}}}, {"type": "BoxAnnotation", "id": "b761fd4c-5cb2-47f5-b0ca-48451e1c1887", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "eca8e824-7af1-4f91-9696-5a9a44daffe5", "attributes": {}}, {"type": "Square", "id": "a3056a5a-0381-48bd-886b-2c78c51ca0d8", "attributes": {"line_color": {"value": "olive"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 20, "units": "screen"}, "line_alpha": {"value": 0.5}, "fill_color": {"value": "olive"}, "fill_alpha": {"value": 0.5}}}], "root_ids": ["520138fd-ece4-4b9a-ab8b-9c204ea6775c"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "1cbba336-16c5-4f6e-be5a-6d964eb43167", "modelid": "520138fd-ece4-4b9a-ab8b-9c204ea6775c", "elementid": "0e4399d1-ca5d-4a01-9cf2-c6a84f8069a0"}];
          
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