
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
  };var element = document.getElementById("15fae5ad-fc88-4e75-8fb1-848a21cb3bc0");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '15fae5ad-fc88-4e75-8fb1-848a21cb3bc0' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"3f4cf6e5-4ae5-4e51-b5b3-6e5ea17cd2a6":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23ebfaa8-79d9-4414-a90a-ff3c18e93f3b","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#F2583E"},"height":{"field":"height","units":"data"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ebeef0f-d460-4b64-af93-5ff931928eb4","type":"Rect"},{"attributes":{"callback":null,"column_names":["x0","x1","y0","y1"],"data":{"x0":[951868800000.0,951955200000.0,952041600000.0,952300800000.0,952387200000.0,952473600000.0,952560000000.0,952646400000.0,952905600000.0,952992000000.0,953078400000.0,953164800000.0,953251200000.0,953510400000.0,953596800000.0,953683200000.0,953769600000.0,953856000000.0,954115200000.0,954201600000.0,954288000000.0,954374400000.0,954460800000.0,954720000000.0,954806400000.0,954892800000.0,954979200000.0,955065600000.0,955324800000.0,955411200000.0,955497600000.0,955584000000.0,955670400000.0,955929600000.0,956016000000.0,956102400000.0,956188800000.0,956534400000.0,956620800000.0,956707200000.0,956793600000.0,956880000000.0,957139200000.0,957225600000.0,957312000000.0,957398400000.0,957484800000.0,957744000000.0,957830400000.0,957916800000.0],"x1":[951868800000.0,951955200000.0,952041600000.0,952300800000.0,952387200000.0,952473600000.0,952560000000.0,952646400000.0,952905600000.0,952992000000.0,953078400000.0,953164800000.0,953251200000.0,953510400000.0,953596800000.0,953683200000.0,953769600000.0,953856000000.0,954115200000.0,954201600000.0,954288000000.0,954374400000.0,954460800000.0,954720000000.0,954806400000.0,954892800000.0,954979200000.0,955065600000.0,955324800000.0,955411200000.0,955497600000.0,955584000000.0,955670400000.0,955929600000.0,956016000000.0,956102400000.0,956188800000.0,956534400000.0,956620800000.0,956707200000.0,956793600000.0,956880000000.0,957139200000.0,957225600000.0,957312000000.0,957398400000.0,957484800000.0,957744000000.0,957830400000.0,957916800000.0],"y0":[94.09,95.37,98.87,97.37,97.5,96.19,100.0,102.5,100.25,99.25,96.62,96.69,99.5,99.75,103.12,105.62,112.87,115.0,108.25,107.44,108.94,108.62,108.25,96.5,92.0,88.5,88.0,89.37,88.62,86.06,82.25,82.25,79.5,76.0,81.94,81.5,79.87,68.0,69.5,71.12,69.94,71.0,74.0,73.5,70.81,71.25,71.81,71.37,70.44,67.87],"y1":[88.94,91.12,93.87,90.12,91.94,91.0,95.0,99.5,97.5,95.12,93.69,93.25,94.5,96.5,96.5,101.12,106.62,109.56,103.94,102.37,105.12,102.5,104.12,90.0,84.94,85.87,85.27,85.0,86.0,83.5,78.75,79.0,73.25,73.0,75.87,78.12,77.5,65.0,67.62,67.37,67.37,68.25,71.69,69.5,68.81,69.31,69.87,69.69,67.5,65.75]}},"id":"9271b58e-624a-44f9-a036-15db58cdc9e0","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"80ecc254-5982-441f-bd74-0df6f5fafbfd","type":"DatetimeAxis"}],"left":[{"id":"6bb0c16e-1cab-4e0e-8dcb-ec8a64a1d018","type":"LinearAxis"}],"plot_width":1000,"renderers":[{"id":"80ecc254-5982-441f-bd74-0df6f5fafbfd","type":"DatetimeAxis"},{"id":"8a9dbb58-d0b9-4fec-932e-de15e5c38f6d","type":"Grid"},{"id":"6bb0c16e-1cab-4e0e-8dcb-ec8a64a1d018","type":"LinearAxis"},{"id":"3aa3ae0c-7413-4c16-a82f-cceb8ec58a7f","type":"Grid"},{"id":"23ebfaa8-79d9-4414-a90a-ff3c18e93f3b","type":"BoxAnnotation"},{"id":"94578c66-dfdb-48f1-b729-20e96ad6bff3","type":"GlyphRenderer"},{"id":"c4d59885-0dac-45cd-81ee-d77ba7d93116","type":"GlyphRenderer"},{"id":"85d8aace-101b-402e-8fb6-15b0f2b5eb76","type":"GlyphRenderer"}],"title":"MSFT Candlestick","tool_events":{"id":"6a54a424-d885-455a-8344-34113fc7200e","type":"ToolEvents"},"toolbar_location":"left","tools":[{"id":"1569d0d9-e3a6-4572-92ab-f78e7236075b","type":"PanTool"},{"id":"1de69462-f6e8-487c-8cc9-af7f6f7929a9","type":"WheelZoomTool"},{"id":"6aa35b8b-ccff-4cef-a58d-6e9096fa27cd","type":"BoxZoomTool"},{"id":"17d71f63-8722-4b6f-a037-59c2b019057f","type":"ResetTool"},{"id":"71013124-5a4b-415d-ad84-a9b89f5cd201","type":"PreviewSaveTool"}],"x_range":{"id":"7dc0bdad-c2bd-42fa-a926-4acacee5e501","type":"DataRange1d"},"y_range":{"id":"6776e07d-2f74-4156-91ce-5caca34d90d9","type":"DataRange1d"}},"id":"0f374682-f253-44f6-b313-0e60d9bed2d4","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"7dc0bdad-c2bd-42fa-a926-4acacee5e501","type":"DataRange1d"},{"attributes":{"grid_line_alpha":{"value":0.3},"plot":{"id":"0f374682-f253-44f6-b313-0e60d9bed2d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"0fc95415-39ff-4ea1-b21d-8dc6db642abe","type":"DatetimeTicker"}},"id":"8a9dbb58-d0b9-4fec-932e-de15e5c38f6d","type":"Grid"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"420a4697-da33-42b1-ac2f-918a09f84dbf","type":"Segment"},{"attributes":{"data_source":{"id":"fe2e05db-407c-4864-b5d6-9a9ba229dfa5","type":"ColumnDataSource"},"glyph":{"id":"8ebeef0f-d460-4b64-af93-5ff931928eb4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"f41a6f1b-24b8-4cfa-9e5d-3d6c90df4dc6","type":"Rect"},"selection_glyph":null},"id":"85d8aace-101b-402e-8fb6-15b0f2b5eb76","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"f4ce3d1e-3e3c-417b-9f3b-dddfb47f8ae1","type":"ColumnDataSource"},"glyph":{"id":"fdc9779d-cbd7-402d-bfbe-93231ec3a1b2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"5e08953f-36f0-43af-97a7-25d82e107502","type":"Rect"},"selection_glyph":null},"id":"c4d59885-0dac-45cd-81ee-d77ba7d93116","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0f374682-f253-44f6-b313-0e60d9bed2d4","subtype":"Figure","type":"Plot"}},"id":"17d71f63-8722-4b6f-a037-59c2b019057f","type":"ResetTool"},{"attributes":{"data_source":{"id":"9271b58e-624a-44f9-a036-15db58cdc9e0","type":"ColumnDataSource"},"glyph":{"id":"420a4697-da33-42b1-ac2f-918a09f84dbf","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"45743c4f-4619-4fa6-94b1-b30af39f04e7","type":"Segment"},"selection_glyph":null},"id":"94578c66-dfdb-48f1-b729-20e96ad6bff3","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"23ebfaa8-79d9-4414-a90a-ff3c18e93f3b","type":"BoxAnnotation"},"plot":{"id":"0f374682-f253-44f6-b313-0e60d9bed2d4","subtype":"Figure","type":"Plot"}},"id":"6aa35b8b-ccff-4cef-a58d-6e9096fa27cd","type":"BoxZoomTool"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"fa9608f1-a7e1-4eef-81d6-15967552bed2","type":"AdaptiveTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e08953f-36f0-43af-97a7-25d82e107502","type":"Rect"},{"attributes":{"plot":{"id":"0f374682-f253-44f6-b313-0e60d9bed2d4","subtype":"Figure","type":"Plot"}},"id":"71013124-5a4b-415d-ad84-a9b89f5cd201","type":"PreviewSaveTool"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"dc16b042-e331-4d46-9606-7b6fa96d6e22","type":"AdaptiveTicker"},{"attributes":{},"id":"6a54a424-d885-455a-8344-34113fc7200e","type":"ToolEvents"},{"attributes":{},"id":"cd138763-aec8-4882-8622-a688263c239c","type":"YearsTicker"},{"attributes":{"callback":null,"column_names":["height","y","x"],"data":{"height":[5.3799999999999955,3.25,3.5,0.5699999999999932,1.3799999999999955,0.9300000000000068,3.7099999999999937,2.819999999999993,3.569999999999993,3.0,1.8799999999999955,1.8700000000000045,2.5600000000000023,1.25,2.75,1.6200000000000045,5.0,2.75,0.6299999999999955,2.0,1.0,2.9399999999999977,1.1299999999999955,2.3799999999999955,1.5600000000000023],"x":[952300800000.0,952387200000.0,952992000000.0,953164800000.0,953510400000.0,953856000000.0,954115200000.0,954374400000.0,954720000000.0,954806400000.0,954892800000.0,954979200000.0,955324800000.0,955411200000.0,955497600000.0,955584000000.0,955670400000.0,956102400000.0,956534400000.0,956707200000.0,956880000000.0,957225600000.0,957744000000.0,957830400000.0,957916800000.0],"y":[93.31,94.495,96.87,95.655,98.06,112.155,105.91499999999999,104.78,92.655,90.06,87.31,86.935,87.34,84.495,80.745,80.06,76.62,80.065,66.935,69.0,70.25,71.34,70.375,69.0,66.97]}},"id":"fe2e05db-407c-4864-b5d6-9a9ba229dfa5","type":"ColumnDataSource"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"504c9ca4-ccd6-406b-8695-b296cc45e1cd","type":"MonthsTicker"},{"attributes":{},"id":"fd71a47d-e094-47d2-a1a0-7277e90764eb","type":"BasicTicker"},{"attributes":{"months":[0,4,8]},"id":"4e7d18d4-91a5-40a1-8c07-0377f306c521","type":"MonthsTicker"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"0f374682-f253-44f6-b313-0e60d9bed2d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd71a47d-e094-47d2-a1a0-7277e90764eb","type":"BasicTicker"}},"id":"3aa3ae0c-7413-4c16-a82f-cceb8ec58a7f","type":"Grid"},{"attributes":{"formatter":{"id":"7f67b335-88e0-4c58-8106-69ab5cfb5590","type":"BasicTickFormatter"},"plot":{"id":"0f374682-f253-44f6-b313-0e60d9bed2d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd71a47d-e094-47d2-a1a0-7277e90764eb","type":"BasicTicker"}},"id":"6bb0c16e-1cab-4e0e-8dcb-ec8a64a1d018","type":"LinearAxis"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"36dc28b8-fb1a-4b71-94cb-447e732671e2","type":"MonthsTicker"},{"attributes":{"formatter":{"id":"a4c67ae8-0f51-4b26-99f2-92f8899b510a","type":"DatetimeTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"0f374682-f253-44f6-b313-0e60d9bed2d4","subtype":"Figure","type":"Plot"},"ticker":{"id":"0fc95415-39ff-4ea1-b21d-8dc6db642abe","type":"DatetimeTicker"}},"id":"80ecc254-5982-441f-bd74-0df6f5fafbfd","type":"DatetimeAxis"},{"attributes":{"callback":null,"column_names":["height","y","x"],"data":{"height":[1.1899999999999977,1.5600000000000023,1.3700000000000045,1.75,4.689999999999998,1.4399999999999977,0.37999999999999545,0.8100000000000023,4.1200000000000045,6.0,0.4399999999999977,5.060000000000002,0.6899999999999977,2.0,0.25,2.0600000000000023,1.6200000000000045,4.060000000000002,0.3199999999999932,0.6200000000000045,2.3700000000000045,0.5699999999999932,0.18999999999999773,0.12999999999999545,0.8700000000000045],"x":[951868800000.0,951955200000.0,952041600000.0,952473600000.0,952560000000.0,952646400000.0,952905600000.0,953078400000.0,953251200000.0,953596800000.0,953683200000.0,953769600000.0,954201600000.0,954288000000.0,954460800000.0,955065600000.0,955929600000.0,956016000000.0,956188800000.0,956620800000.0,956793600000.0,957139200000.0,957312000000.0,957398400000.0,957484800000.0],"y":[90.215,92.59,95.435,94.685,97.655,100.28,97.81,94.965,97.31,99.75,103.03,109.34,103.965,106.19,106.125,88.03,75.06,78.53,78.78,69.06,68.625,73.155,70.465,70.375,70.685]}},"id":"f4ce3d1e-3e3c-417b-9f3b-dddfb47f8ae1","type":"ColumnDataSource"},{"attributes":{"months":[0,6]},"id":"5ac79c7f-82d2-4446-a239-4b059b3cb50b","type":"MonthsTicker"},{"attributes":{"num_minor_ticks":5},"id":"0fc95415-39ff-4ea1-b21d-8dc6db642abe","type":"DatetimeTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"f41a6f1b-24b8-4cfa-9e5d-3d6c90df4dc6","type":"Rect"},{"attributes":{},"id":"7f67b335-88e0-4c58-8106-69ab5cfb5590","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"0f374682-f253-44f6-b313-0e60d9bed2d4","subtype":"Figure","type":"Plot"}},"id":"1569d0d9-e3a6-4572-92ab-f78e7236075b","type":"PanTool"},{"attributes":{"days":[1,8,15,22]},"id":"4ba1f11a-481d-4084-9e1b-d3c4e7675fef","type":"DaysTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"45743c4f-4619-4fa6-94b1-b30af39f04e7","type":"Segment"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"aabc0c67-b795-4f99-9b85-33d099ec6b58","type":"DaysTicker"},{"attributes":{"days":[1,15]},"id":"f151f4e2-26a6-4b62-add1-404d8d250a76","type":"DaysTicker"},{"attributes":{"plot":{"id":"0f374682-f253-44f6-b313-0e60d9bed2d4","subtype":"Figure","type":"Plot"}},"id":"1de69462-f6e8-487c-8cc9-af7f6f7929a9","type":"WheelZoomTool"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"494abd1c-26c9-48c2-91b9-806ce9546b42","type":"DaysTicker"},{"attributes":{"callback":null},"id":"6776e07d-2f74-4156-91ce-5caca34d90d9","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#D5E1DD"},"height":{"field":"height","units":"data"},"width":{"units":"data","value":43200000},"x":{"field":"x"},"y":{"field":"y"}},"id":"fdc9779d-cbd7-402d-bfbe-93231ec3a1b2","type":"Rect"},{"attributes":{},"id":"a4c67ae8-0f51-4b26-99f2-92f8899b510a","type":"DatetimeTickFormatter"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"b361b325-7169-4b75-b30d-640520fb591a","type":"AdaptiveTicker"}],"root_ids":["0f374682-f253-44f6-b313-0e60d9bed2d4"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"3f4cf6e5-4ae5-4e51-b5b3-6e5ea17cd2a6","elementid":"15fae5ad-fc88-4e75-8fb1-848a21cb3bc0","modelid":"0f374682-f253-44f6-b313-0e60d9bed2d4"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
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