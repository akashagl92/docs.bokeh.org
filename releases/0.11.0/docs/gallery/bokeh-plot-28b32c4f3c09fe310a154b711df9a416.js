
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
  };var element = document.getElementById("dab351a0-0a54-4140-a3a9-3bba8ed9891c");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'dab351a0-0a54-4140-a3a9-3bba8ed9891c' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"59bb2240-9bc6-4491-9b1e-73bb55f0d5da": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "LinearAxis", "id": "23d465cc-21aa-4fc4-8330-3f927202edb2", "attributes": {"ticker": {"type": "BasicTicker", "id": "f5b71dc7-7905-4b76-81bc-98caa9c41c66"}, "formatter": {"type": "BasicTickFormatter", "id": "f28a971c-534e-4337-8a21-7c0d22775dcb"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "61e71b1a-d986-4b01-acb2-08052681f98e"}}}, {"type": "Patches", "id": "6862a7e3-b0ea-45ac-8d19-721427a3ed60", "attributes": {"line_color": {"value": null}, "xs": {"field": "xs"}, "ys": {"field": "ys"}, "line_alpha": {"value": 0.8}, "fill_color": {"field": "fill_color"}, "fill_alpha": {"value": 0.8}}}, {"type": "Grid", "id": "fc9bcb8d-5da5-48a5-9647-efd9648bc70e", "attributes": {"ticker": {"type": "BasicTicker", "id": "8b7d72d1-0e9a-4f9d-bf04-44e9824cddb1"}, "minor_grid_line_color": {"value": "#eeeeee"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "61e71b1a-d986-4b01-acb2-08052681f98e"}}}, {"type": "GlyphRenderer", "id": "4782b9d1-4245-418f-a4c4-3ffbf6c7bbea", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "c14906b2-26a9-43b4-b5fd-a92bd6dbfa01"}, "nonselection_glyph": {"type": "Patches", "id": "e4fbebf0-f9be-4a50-bdf9-c6fa68a1839d"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Patches", "id": "6862a7e3-b0ea-45ac-8d19-721427a3ed60"}}}, {"type": "WheelZoomTool", "id": "e5aeec20-ec50-489b-b334-fdd27f542eeb", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "61e71b1a-d986-4b01-acb2-08052681f98e"}}}, {"type": "BoxZoomTool", "id": "aa5607ca-4a65-4eb5-b1d4-21fa0a95311d", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "74bf3449-8bd8-49ac-b6c1-c567a51a1a7d"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "61e71b1a-d986-4b01-acb2-08052681f98e"}}}, {"type": "BasicTicker", "id": "8b7d72d1-0e9a-4f9d-bf04-44e9824cddb1", "attributes": {}}, {"type": "DataRange1d", "id": "1cb4bdbe-3cfc-4fc0-b186-fb5237853081", "attributes": {"callback": null}}, {"type": "Patches", "id": "e4fbebf0-f9be-4a50-bdf9-c6fa68a1839d", "attributes": {"line_color": {"value": "#1f77b4"}, "xs": {"field": "xs"}, "ys": {"field": "ys"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "LinearAxis", "id": "5db82a2a-5497-47b1-a2d8-4d9b9f259cd5", "attributes": {"ticker": {"type": "BasicTicker", "id": "8b7d72d1-0e9a-4f9d-bf04-44e9824cddb1"}, "formatter": {"type": "BasicTickFormatter", "id": "58d5cc16-d00a-44ca-b78f-33461b494fce"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "61e71b1a-d986-4b01-acb2-08052681f98e"}}}, {"type": "ResetTool", "id": "90ef6623-7e9c-41b8-b403-c870fdaa6c55", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "61e71b1a-d986-4b01-acb2-08052681f98e"}}}, {"type": "DataRange1d", "id": "bd928b24-e46a-4260-8cb3-06a7aee51c4a", "attributes": {"callback": null}}, {"type": "Plot", "id": "61e71b1a-d986-4b01-acb2-08052681f98e", "attributes": {"y_range": {"type": "DataRange1d", "id": "1cb4bdbe-3cfc-4fc0-b186-fb5237853081"}, "left": [{"type": "LinearAxis", "id": "23d465cc-21aa-4fc4-8330-3f927202edb2"}], "renderers": [{"type": "LinearAxis", "id": "5db82a2a-5497-47b1-a2d8-4d9b9f259cd5"}, {"type": "Grid", "id": "fc9bcb8d-5da5-48a5-9647-efd9648bc70e"}, {"type": "LinearAxis", "id": "23d465cc-21aa-4fc4-8330-3f927202edb2"}, {"type": "Grid", "id": "1af2d439-6d9a-4495-a686-4bad9f91aaa8"}, {"type": "BoxAnnotation", "id": "74bf3449-8bd8-49ac-b6c1-c567a51a1a7d"}, {"type": "GlyphRenderer", "id": "4782b9d1-4245-418f-a4c4-3ffbf6c7bbea"}], "tool_events": {"type": "ToolEvents", "id": "11c152ae-9492-4518-8e33-8389a031fbfd"}, "below": [{"type": "LinearAxis", "id": "5db82a2a-5497-47b1-a2d8-4d9b9f259cd5"}], "tools": [{"type": "PanTool", "id": "33dd7342-6895-4c2b-be79-d94605435c49"}, {"type": "WheelZoomTool", "id": "e5aeec20-ec50-489b-b334-fdd27f542eeb"}, {"type": "BoxZoomTool", "id": "aa5607ca-4a65-4eb5-b1d4-21fa0a95311d"}, {"type": "PreviewSaveTool", "id": "c2cff0af-17e1-4642-a9b8-6f8d4e680f0a"}, {"type": "ResizeTool", "id": "af8c932a-4aea-4fcc-b3e5-ef185d305bb1"}, {"type": "ResetTool", "id": "90ef6623-7e9c-41b8-b403-c870fdaa6c55"}, {"type": "HelpTool", "id": "b3e2539d-3fe2-4791-b1c6-5b03b5b3e97f"}], "x_range": {"type": "DataRange1d", "id": "bd928b24-e46a-4260-8cb3-06a7aee51c4a"}}, "subtype": "Figure"}, {"type": "BoxAnnotation", "id": "74bf3449-8bd8-49ac-b6c1-c567a51a1a7d", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "Grid", "id": "1af2d439-6d9a-4495-a686-4bad9f91aaa8", "attributes": {"ticker": {"type": "BasicTicker", "id": "f5b71dc7-7905-4b76-81bc-98caa9c41c66"}, "minor_grid_line_color": {"value": "#eeeeee"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "61e71b1a-d986-4b01-acb2-08052681f98e"}}}, {"type": "HelpTool", "id": "b3e2539d-3fe2-4791-b1c6-5b03b5b3e97f", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "61e71b1a-d986-4b01-acb2-08052681f98e"}}}, {"type": "BasicTicker", "id": "f5b71dc7-7905-4b76-81bc-98caa9c41c66", "attributes": {}}, {"type": "BasicTickFormatter", "id": "58d5cc16-d00a-44ca-b78f-33461b494fce", "attributes": {}}, {"type": "ToolEvents", "id": "11c152ae-9492-4518-8e33-8389a031fbfd", "attributes": {}}, {"type": "ColumnDataSource", "id": "c14906b2-26a9-43b4-b5fd-a92bd6dbfa01", "attributes": {"data": {"ys": [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 67.0, 58.0, 91.0, 45.0, 82.0, 89.0, 39.0, 82.0, 78.0, 81.0, 37.0, 57.0, 44.0, 73.0, 45.0, 95.0, 29.0, 22.0, 31.0, 88.0], [88.0, 31.0, 22.0, 29.0, 95.0, 45.0, 73.0, 44.0, 57.0, 37.0, 81.0, 78.0, 82.0, 39.0, 89.0, 82.0, 45.0, 91.0, 58.0, 67.0, 100.0, 144.0, 161.0, 57.0, 143.0, 168.0, 102.0, 155.0, 166.0, 148.0, 136.0, 114.0, 80.0, 116.0, 65.0, 163.0, 101.0, 47.0, 111.0, 113.0], [113.0, 111.0, 47.0, 101.0, 163.0, 65.0, 116.0, 80.0, 114.0, 136.0, 148.0, 166.0, 155.0, 102.0, 168.0, 143.0, 57.0, 161.0, 144.0, 100.0, 167.0, 241.0, 253.0, 81.0, 219.0, 265.0, 175.0, 232.0, 213.0, 194.0, 170.0, 160.0, 108.0, 169.0, 79.0, 243.0, 169.0, 58.0, 161.0, 209.0], [209.0, 161.0, 58.0, 169.0, 243.0, 79.0, 169.0, 108.0, 160.0, 170.0, 194.0, 213.0, 232.0, 175.0, 265.0, 219.0, 81.0, 253.0, 241.0, 167.0, 241.0, 257.0, 326.0, 147.0, 262.0, 347.0, 204.0, 306.0, 259.0, 219.0, 227.0, 243.0, 119.0, 207.0, 142.0, 300.0, 239.0, 154.0, 220.0, 308.0], [308.0, 220.0, 154.0, 239.0, 300.0, 142.0, 207.0, 119.0, 243.0, 227.0, 219.0, 259.0, 306.0, 204.0, 347.0, 262.0, 147.0, 326.0, 257.0, 241.0, 281.0, 275.0, 357.0, 163.0, 329.0, 435.0, 280.0, 324.0, 340.0, 266.0, 298.0, 337.0, 186.0, 234.0, 225.0, 387.0, 300.0, 211.0, 258.0, 338.0], [338.0, 258.0, 211.0, 300.0, 387.0, 225.0, 234.0, 186.0, 337.0, 298.0, 266.0, 340.0, 324.0, 280.0, 435.0, 329.0, 163.0, 357.0, 275.0, 281.0, 304.0, 373.0, 410.0, 210.0, 369.0, 528.0, 311.0, 341.0, 352.0, 308.0, 388.0, 407.0, 268.0, 283.0, 310.0, 466.0, 342.0, 291.0, 324.0, 371.0], [371.0, 324.0, 291.0, 342.0, 466.0, 310.0, 283.0, 268.0, 407.0, 388.0, 308.0, 352.0, 341.0, 311.0, 528.0, 369.0, 210.0, 410.0, 373.0, 304.0, 362.0, 469.0, 425.0, 268.0, 379.0, 541.0, 336.0, 439.0, 426.0, 361.0, 421.0, 467.0, 309.0, 342.0, 342.0, 527.0, 408.0, 357.0, 392.0, 406.0], [406.0, 392.0, 357.0, 408.0, 527.0, 342.0, 342.0, 309.0, 467.0, 421.0, 361.0, 426.0, 439.0, 336.0, 541.0, 379.0, 268.0, 425.0, 469.0, 362.0, 399.0, 544.0, 443.0, 363.0, 429.0, 556.0, 430.0, 497.0, 521.0, 373.0, 448.0, 546.0, 356.0, 439.0, 387.0, 610.0, 467.0, 375.0, 482.0, 438.0], [438.0, 482.0, 375.0, 467.0, 610.0, 387.0, 439.0, 356.0, 546.0, 448.0, 373.0, 521.0, 497.0, 430.0, 556.0, 429.0, 363.0, 443.0, 544.0, 399.0, 445.0, 640.0, 455.0, 381.0, 502.0, 577.0, 452.0, 581.0, 614.0, 405.0, 530.0, 565.0, 424.0, 538.0, 482.0, 699.0, 548.0, 425.0, 571.0, 512.0], [512.0, 571.0, 425.0, 548.0, 699.0, 482.0, 538.0, 424.0, 565.0, 530.0, 405.0, 614.0, 581.0, 452.0, 577.0, 502.0, 381.0, 455.0, 640.0, 445.0, 520.0, 687.0, 495.0, 442.0, 596.0, 600.0, 536.0, 646.0, 684.0, 442.0, 552.0, 644.0, 499.0, 592.0, 544.0, 720.0, 559.0, 492.0, 599.0, 550.0]], "xs": [[19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]], "fill_color": ["#5e4fa2", "#3288bd", "#66c2a5", "#abdda4", "#e6f598", "#fee08b", "#fdae61", "#f46d43", "#d53e4f", "#9e0142"]}, "column_names": ["ys", "xs", "fill_color"], "callback": null}}, {"type": "BasicTickFormatter", "id": "f28a971c-534e-4337-8a21-7c0d22775dcb", "attributes": {}}, {"type": "PreviewSaveTool", "id": "c2cff0af-17e1-4642-a9b8-6f8d4e680f0a", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "61e71b1a-d986-4b01-acb2-08052681f98e"}}}, {"type": "PanTool", "id": "33dd7342-6895-4c2b-be79-d94605435c49", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "61e71b1a-d986-4b01-acb2-08052681f98e"}}}, {"type": "ResizeTool", "id": "af8c932a-4aea-4fcc-b3e5-ef185d305bb1", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "61e71b1a-d986-4b01-acb2-08052681f98e"}}}], "root_ids": ["61e71b1a-d986-4b01-acb2-08052681f98e"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "59bb2240-9bc6-4491-9b1e-73bb55f0d5da", "modelid": "61e71b1a-d986-4b01-acb2-08052681f98e", "elementid": "dab351a0-0a54-4140-a3a9-3bba8ed9891c"}];
          
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