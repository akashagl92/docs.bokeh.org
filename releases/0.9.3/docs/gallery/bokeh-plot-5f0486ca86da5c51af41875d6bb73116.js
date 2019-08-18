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

  var elt = document.getElementById("201c61c8-24e4-406a-a635-faf8d5efa9e2");
  if(elt==null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '201c61c8-24e4-406a-a635-faf8d5efa9e2' but no matching script tag was found. ")
    return false;
  }

  // These will be set for the static case
  var all_models = [{"type": "Plot", "attributes": {"right": [], "extra_x_ranges": {}, "y_range": {"type": "DataRange1d", "id": "0b371154-5da0-4f08-be0b-5901f90f4d20"}, "doc": null, "tool_events": {"type": "ToolEvents", "id": "cc79ec1f-31a4-44bd-8adf-39254c668d84"}, "renderers": [{"type": "LinearAxis", "id": "4ede1981-b849-4d9c-8d4d-348cad3d0417"}, {"type": "Grid", "id": "4af049ee-586f-468f-ab8d-93d8c7307cdb"}, {"type": "LinearAxis", "id": "e6f77e93-a6b2-44fd-a7e2-6f22190f1808"}, {"type": "Grid", "id": "7251cedb-115a-4345-8ef7-733b173dcf87"}, {"type": "GlyphRenderer", "id": "67e2ba34-1968-435a-91a6-a1b68e446947"}], "below": [{"type": "LinearAxis", "id": "4ede1981-b849-4d9c-8d4d-348cad3d0417"}], "left": [{"type": "LinearAxis", "id": "e6f77e93-a6b2-44fd-a7e2-6f22190f1808"}], "above": [], "tags": [], "extra_y_ranges": {}, "tools": [{"type": "PanTool", "id": "25fd7a3b-32d9-43db-99ef-70d3684c0c1d"}, {"type": "WheelZoomTool", "id": "4bb05b29-384c-4d22-94a1-7d03c88c848d"}, {"type": "BoxZoomTool", "id": "b71c3306-b367-467f-b4da-057ca18f6029"}, {"type": "PreviewSaveTool", "id": "14ff298e-57ab-41a0-80b3-a1385a64a248"}, {"type": "ResizeTool", "id": "0d8cd08a-241f-4669-bd39-2eecd7e3ed9a"}, {"type": "ResetTool", "id": "675724bf-8d38-456b-917f-1258407f97fb"}, {"type": "HelpTool", "id": "8a37c103-5028-4ccc-a51e-47512cf467e4"}], "x_range": {"type": "DataRange1d", "id": "42f3597a-bb79-412d-a839-c8af308fb55d"}, "id": "cc8d3995-9346-4062-9cd1-000a9c52ff99"}, "id": "cc8d3995-9346-4062-9cd1-000a9c52ff99", "subtype": "Figure"}, {"type": "WheelZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "cc8d3995-9346-4062-9cd1-000a9c52ff99", "subtype": "Figure"}, "id": "4bb05b29-384c-4d22-94a1-7d03c88c848d"}, "id": "4bb05b29-384c-4d22-94a1-7d03c88c848d"}, {"type": "ResetTool", "attributes": {"plot": {"type": "Plot", "id": "cc8d3995-9346-4062-9cd1-000a9c52ff99", "subtype": "Figure"}, "id": "675724bf-8d38-456b-917f-1258407f97fb", "tags": [], "doc": null}, "id": "675724bf-8d38-456b-917f-1258407f97fb"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "0b371154-5da0-4f08-be0b-5901f90f4d20", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "0b371154-5da0-4f08-be0b-5901f90f4d20"}, {"type": "Patches", "attributes": {"tags": [], "xs": {"field": "xs"}, "fill_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "line_alpha": {"value": 0.1}, "ys": {"field": "ys"}, "doc": null, "line_color": {"value": "#1f77b4"}, "id": "f1748df3-8b91-4e74-b4b7-bc059682ac42"}, "id": "f1748df3-8b91-4e74-b4b7-bc059682ac42"}, {"type": "PanTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "cc8d3995-9346-4062-9cd1-000a9c52ff99", "subtype": "Figure"}, "id": "25fd7a3b-32d9-43db-99ef-70d3684c0c1d"}, "id": "25fd7a3b-32d9-43db-99ef-70d3684c0c1d"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "4b44e400-08df-4233-9620-cc2556f5cfc5", "tags": []}, "id": "4b44e400-08df-4233-9620-cc2556f5cfc5"}, {"type": "GlyphRenderer", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "19a53e5f-6578-41f3-9acc-7691f266186e"}, "tags": [], "glyph": {"type": "Patches", "id": "86d87964-4c13-4a30-a715-480957ec2521"}, "doc": null, "nonselection_glyph": {"type": "Patches", "id": "f1748df3-8b91-4e74-b4b7-bc059682ac42"}, "selection_glyph": null, "id": "67e2ba34-1968-435a-91a6-a1b68e446947"}, "id": "67e2ba34-1968-435a-91a6-a1b68e446947"}, {"type": "ResizeTool", "attributes": {"plot": {"type": "Plot", "id": "cc8d3995-9346-4062-9cd1-000a9c52ff99", "subtype": "Figure"}, "id": "0d8cd08a-241f-4669-bd39-2eecd7e3ed9a", "tags": [], "doc": null}, "id": "0d8cd08a-241f-4669-bd39-2eecd7e3ed9a"}, {"type": "BasicTickFormatter", "attributes": {"doc": null, "id": "ccd32678-178c-457a-8d61-3bf83c436e1c", "tags": []}, "id": "ccd32678-178c-457a-8d61-3bf83c436e1c"}, {"type": "Grid", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "c779b6d4-bc72-4258-92d3-33af1f10bd8c"}, "tags": [], "minor_grid_line_color": {"value": "#eeeeee"}, "plot": {"type": "Plot", "id": "cc8d3995-9346-4062-9cd1-000a9c52ff99", "subtype": "Figure"}, "dimension": 0, "id": "4af049ee-586f-468f-ab8d-93d8c7307cdb"}, "id": "4af049ee-586f-468f-ab8d-93d8c7307cdb"}, {"type": "ColumnDataSource", "attributes": {"selected": {"1d": {"indices": []}, "2d": {"indices": []}, "0d": {"indices": [], "flag": false}}, "callback": null, "tags": [], "data": {"xs": [[19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]], "fill_color": ["#5e4fa2", "#3288bd", "#66c2a5", "#abdda4", "#e6f598", "#fee08b", "#fdae61", "#f46d43", "#d53e4f", "#9e0142"], "ys": [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 11.0, 76.0, 98.0, 67.0, 30.0, 41.0, 68.0, 77.0, 30.0, 98.0, 92.0, 28.0, 77.0, 61.0, 19.0, 71.0, 75.0, 67.0, 59.0, 73.0], [73.0, 59.0, 67.0, 75.0, 71.0, 19.0, 61.0, 77.0, 28.0, 92.0, 98.0, 30.0, 77.0, 68.0, 41.0, 30.0, 67.0, 98.0, 76.0, 11.0, 78.0, 105.0, 169.0, 130.0, 123.0, 102.0, 92.0, 105.0, 111.0, 156.0, 188.0, 123.0, 167.0, 111.0, 44.0, 114.0, 144.0, 102.0, 74.0, 167.0], [167.0, 74.0, 102.0, 144.0, 114.0, 44.0, 111.0, 167.0, 123.0, 188.0, 156.0, 111.0, 105.0, 92.0, 102.0, 123.0, 130.0, 169.0, 105.0, 78.0, 88.0, 188.0, 222.0, 144.0, 168.0, 134.0, 169.0, 191.0, 157.0, 213.0, 204.0, 168.0, 259.0, 124.0, 132.0, 196.0, 232.0, 152.0, 101.0, 233.0], [233.0, 101.0, 152.0, 232.0, 196.0, 132.0, 124.0, 259.0, 168.0, 204.0, 213.0, 157.0, 191.0, 169.0, 134.0, 168.0, 144.0, 222.0, 188.0, 88.0, 138.0, 229.0, 300.0, 155.0, 239.0, 189.0, 179.0, 249.0, 249.0, 247.0, 296.0, 187.0, 274.0, 168.0, 146.0, 288.0, 302.0, 226.0, 149.0, 253.0], [253.0, 149.0, 226.0, 302.0, 288.0, 146.0, 168.0, 274.0, 187.0, 296.0, 247.0, 249.0, 249.0, 179.0, 189.0, 239.0, 155.0, 300.0, 229.0, 138.0, 208.0, 284.0, 373.0, 184.0, 330.0, 257.0, 211.0, 300.0, 309.0, 305.0, 357.0, 239.0, 290.0, 243.0, 186.0, 309.0, 390.0, 241.0, 225.0, 275.0], [275.0, 225.0, 241.0, 390.0, 309.0, 186.0, 243.0, 290.0, 239.0, 357.0, 305.0, 309.0, 300.0, 211.0, 257.0, 330.0, 184.0, 373.0, 284.0, 208.0, 273.0, 303.0, 412.0, 201.0, 373.0, 309.0, 225.0, 365.0, 373.0, 397.0, 400.0, 292.0, 338.0, 323.0, 212.0, 394.0, 464.0, 257.0, 305.0, 301.0], [301.0, 305.0, 257.0, 464.0, 394.0, 212.0, 323.0, 338.0, 292.0, 400.0, 397.0, 373.0, 365.0, 225.0, 309.0, 373.0, 201.0, 412.0, 303.0, 273.0, 294.0, 327.0, 433.0, 284.0, 431.0, 333.0, 242.0, 389.0, 447.0, 443.0, 478.0, 325.0, 362.0, 377.0, 247.0, 493.0, 556.0, 283.0, 345.0, 321.0], [321.0, 345.0, 283.0, 556.0, 493.0, 247.0, 377.0, 362.0, 325.0, 478.0, 443.0, 447.0, 389.0, 242.0, 333.0, 431.0, 284.0, 433.0, 327.0, 294.0, 358.0, 340.0, 477.0, 318.0, 451.0, 362.0, 340.0, 401.0, 475.0, 509.0, 568.0, 401.0, 392.0, 402.0, 279.0, 524.0, 642.0, 312.0, 367.0, 410.0], [410.0, 367.0, 312.0, 642.0, 524.0, 279.0, 402.0, 392.0, 401.0, 568.0, 509.0, 475.0, 401.0, 340.0, 362.0, 451.0, 318.0, 477.0, 340.0, 358.0, 418.0, 369.0, 501.0, 365.0, 539.0, 409.0, 361.0, 448.0, 558.0, 570.0, 617.0, 456.0, 444.0, 490.0, 334.0, 565.0, 661.0, 356.0, 387.0, 482.0], [482.0, 387.0, 356.0, 661.0, 565.0, 334.0, 490.0, 444.0, 456.0, 617.0, 570.0, 558.0, 448.0, 361.0, 409.0, 539.0, 365.0, 501.0, 369.0, 418.0, 511.0, 438.0, 526.0, 458.0, 599.0, 456.0, 371.0, 461.0, 600.0, 635.0, 692.0, 516.0, 526.0, 550.0, 378.0, 625.0, 741.0, 409.0, 473.0, 524.0]]}, "doc": null, "id": "19a53e5f-6578-41f3-9acc-7691f266186e", "column_names": ["xs", "ys", "fill_color"]}, "id": "19a53e5f-6578-41f3-9acc-7691f266186e"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "c779b6d4-bc72-4258-92d3-33af1f10bd8c"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "4b44e400-08df-4233-9620-cc2556f5cfc5"}, "plot": {"type": "Plot", "id": "cc8d3995-9346-4062-9cd1-000a9c52ff99", "subtype": "Figure"}, "id": "4ede1981-b849-4d9c-8d4d-348cad3d0417"}, "id": "4ede1981-b849-4d9c-8d4d-348cad3d0417"}, {"type": "LinearAxis", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "c18ffd81-b150-4f18-9004-ee096fdfa1e7"}, "tags": [], "formatter": {"type": "BasicTickFormatter", "id": "ccd32678-178c-457a-8d61-3bf83c436e1c"}, "plot": {"type": "Plot", "id": "cc8d3995-9346-4062-9cd1-000a9c52ff99", "subtype": "Figure"}, "id": "e6f77e93-a6b2-44fd-a7e2-6f22190f1808"}, "id": "e6f77e93-a6b2-44fd-a7e2-6f22190f1808"}, {"type": "PreviewSaveTool", "attributes": {"plot": {"type": "Plot", "id": "cc8d3995-9346-4062-9cd1-000a9c52ff99", "subtype": "Figure"}, "id": "14ff298e-57ab-41a0-80b3-a1385a64a248", "tags": [], "doc": null}, "id": "14ff298e-57ab-41a0-80b3-a1385a64a248"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "c18ffd81-b150-4f18-9004-ee096fdfa1e7"}, "id": "c18ffd81-b150-4f18-9004-ee096fdfa1e7"}, {"type": "ToolEvents", "attributes": {"doc": null, "id": "cc79ec1f-31a4-44bd-8adf-39254c668d84", "tags": [], "geometries": []}, "id": "cc79ec1f-31a4-44bd-8adf-39254c668d84"}, {"type": "Patches", "attributes": {"tags": [], "xs": {"field": "xs"}, "fill_alpha": {"value": 0.8}, "fill_color": {"field": "fill_color"}, "line_alpha": {"value": 0.8}, "ys": {"field": "ys"}, "doc": null, "line_color": null, "id": "86d87964-4c13-4a30-a715-480957ec2521"}, "id": "86d87964-4c13-4a30-a715-480957ec2521"}, {"type": "DataRange1d", "attributes": {"callback": null, "id": "42f3597a-bb79-412d-a839-c8af308fb55d", "tags": [], "doc": null, "names": [], "renderers": []}, "id": "42f3597a-bb79-412d-a839-c8af308fb55d"}, {"type": "BasicTicker", "attributes": {"tags": [], "doc": null, "num_minor_ticks": 5, "mantissas": [2, 5, 10], "id": "c779b6d4-bc72-4258-92d3-33af1f10bd8c"}, "id": "c779b6d4-bc72-4258-92d3-33af1f10bd8c"}, {"type": "Grid", "attributes": {"doc": null, "ticker": {"type": "BasicTicker", "id": "c18ffd81-b150-4f18-9004-ee096fdfa1e7"}, "tags": [], "minor_grid_line_color": {"value": "#eeeeee"}, "plot": {"type": "Plot", "id": "cc8d3995-9346-4062-9cd1-000a9c52ff99", "subtype": "Figure"}, "dimension": 1, "id": "7251cedb-115a-4345-8ef7-733b173dcf87"}, "id": "7251cedb-115a-4345-8ef7-733b173dcf87"}, {"type": "HelpTool", "attributes": {"plot": {"type": "Plot", "id": "cc8d3995-9346-4062-9cd1-000a9c52ff99", "subtype": "Figure"}, "id": "8a37c103-5028-4ccc-a51e-47512cf467e4", "tags": [], "doc": null}, "id": "8a37c103-5028-4ccc-a51e-47512cf467e4"}, {"type": "BoxZoomTool", "attributes": {"dimensions": ["width", "height"], "tags": [], "doc": null, "plot": {"type": "Plot", "id": "cc8d3995-9346-4062-9cd1-000a9c52ff99", "subtype": "Figure"}, "id": "b71c3306-b367-467f-b4da-057ca18f6029"}, "id": "b71c3306-b367-467f-b4da-057ca18f6029"}];

  if(typeof(Bokeh) !== "undefined") {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    Bokeh.embed.inject_plot("201c61c8-24e4-406a-a635-faf8d5efa9e2", all_models);
  } else {
    load_lib(bokehjs_url, function() {
      console.log("Bokeh: BokehJS plotting callback run at", new Date())
      Bokeh.embed.inject_plot("201c61c8-24e4-406a-a635-faf8d5efa9e2", all_models);
    });
  }

}(this));