(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
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
      };var element = document.getElementById("38c23f89-329a-476f-a1bf-9180cba4cb78");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '38c23f89-329a-476f-a1bf-9180cba4cb78' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"294a774c-b056-442c-9a8d-6d51c83b8a62":{"roots":{"references":[{"attributes":{"plot":{"id":"88d65016-0cc0-4062-9306-40cbf735fc8b","subtype":"Figure","type":"Plot"}},"id":"27cb7991-2a6a-4c13-998b-c3874f5a7975","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b285d89-5ee6-4261-98b6-e996867b6cfd","type":"Line"},{"attributes":{},"id":"303ba41d-5667-4fa0-9d34-9b7b9183d317","type":"BasicTicker"},{"attributes":{"plot":{"id":"88d65016-0cc0-4062-9306-40cbf735fc8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"00c478a9-1f62-4819-ab3a-4ea20904ff8d","type":"BasicTicker"}},"id":"944c932d-7f7c-4160-b97e-7e9b9b7f915a","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"d27e13f5-fd1f-4aec-b024-048d89ca8ad2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"88d65016-0cc0-4062-9306-40cbf735fc8b","subtype":"Figure","type":"Plot"}},"id":"70ae607e-31b5-43fa-baf8-f95aaaeaa9e1","type":"PanTool"},{"attributes":{"callback":null},"id":"9fcb5390-1698-494a-8e65-a6947be6043d","type":"DataRange1d"},{"attributes":{"plot":{"id":"88d65016-0cc0-4062-9306-40cbf735fc8b","subtype":"Figure","type":"Plot"}},"id":"3d5457cf-dfc3-4efd-ae62-717d1cc389f2","type":"HelpTool"},{"attributes":{"formatter":{"id":"f6288e04-550f-4737-b0b3-97312e6253bc","type":"BasicTickFormatter"},"plot":{"id":"88d65016-0cc0-4062-9306-40cbf735fc8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"00c478a9-1f62-4819-ab3a-4ea20904ff8d","type":"BasicTicker"}},"id":"97096416-249e-4885-b566-d484a869e6e8","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"38376748-9540-4cba-a653-990a416f72e4","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"70ae607e-31b5-43fa-baf8-f95aaaeaa9e1","type":"PanTool"},{"id":"78319ad2-ab46-4f17-9a21-8212cbec854f","type":"WheelZoomTool"},{"id":"a23a16ac-d17d-4387-b92f-0a59266295cc","type":"BoxZoomTool"},{"id":"fdefd76e-6c93-4f48-88d5-3c982ffe96e2","type":"SaveTool"},{"id":"27cb7991-2a6a-4c13-998b-c3874f5a7975","type":"ResetTool"},{"id":"3d5457cf-dfc3-4efd-ae62-717d1cc389f2","type":"HelpTool"}]},"id":"1fe700e7-db6e-42fc-bf06-04531741bfe4","type":"Toolbar"},{"attributes":{},"id":"9665010c-b8d1-435e-ad39-876dfa1a9da3","type":"ToolEvents"},{"attributes":{"children":[{"id":"a15a44ff-9111-4d90-a146-38099cc51aa4","type":"WidgetBox"},{"id":"88d65016-0cc0-4062-9306-40cbf735fc8b","subtype":"Figure","type":"Plot"}]},"id":"34bdab13-7886-4a7d-837c-539b63e118ce","type":"Column"},{"attributes":{"callback":{"id":"705d9ccd-13cb-4f27-9db2-11dbc4ba1132","type":"CustomJS"},"end":4,"start":0.1,"title":"power","value":1},"id":"50dc3274-9fb8-4f49-b5d8-ad5b3b1c47da","type":"Slider"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d5a2d42f-8f65-44c8-9acd-a857843771fa","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"88d65016-0cc0-4062-9306-40cbf735fc8b","subtype":"Figure","type":"Plot"}},"id":"fdefd76e-6c93-4f48-88d5-3c982ffe96e2","type":"SaveTool"},{"attributes":{"formatter":{"id":"6d861b37-6604-480b-8a5a-3aa2013d3289","type":"BasicTickFormatter"},"plot":{"id":"88d65016-0cc0-4062-9306-40cbf735fc8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"303ba41d-5667-4fa0-9d34-9b7b9183d317","type":"BasicTicker"}},"id":"40cad494-1bd5-403a-946f-c2340cde4a14","type":"LinearAxis"},{"attributes":{},"id":"00c478a9-1f62-4819-ab3a-4ea20904ff8d","type":"BasicTicker"},{"attributes":{"below":[{"id":"97096416-249e-4885-b566-d484a869e6e8","type":"LinearAxis"}],"left":[{"id":"40cad494-1bd5-403a-946f-c2340cde4a14","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"97096416-249e-4885-b566-d484a869e6e8","type":"LinearAxis"},{"id":"944c932d-7f7c-4160-b97e-7e9b9b7f915a","type":"Grid"},{"id":"40cad494-1bd5-403a-946f-c2340cde4a14","type":"LinearAxis"},{"id":"c3783927-990a-485f-8ba2-6059f143489d","type":"Grid"},{"id":"d5a2d42f-8f65-44c8-9acd-a857843771fa","type":"BoxAnnotation"},{"id":"8143b55b-c037-49e4-ad2d-80e4304fd41c","type":"GlyphRenderer"}],"title":{"id":"38376748-9540-4cba-a653-990a416f72e4","type":"Title"},"tool_events":{"id":"9665010c-b8d1-435e-ad39-876dfa1a9da3","type":"ToolEvents"},"toolbar":{"id":"1fe700e7-db6e-42fc-bf06-04531741bfe4","type":"Toolbar"},"x_range":{"id":"9fcb5390-1698-494a-8e65-a6947be6043d","type":"DataRange1d"},"y_range":{"id":"6a1f5377-0e7f-495d-9bbc-b600e545d997","type":"DataRange1d"}},"id":"88d65016-0cc0-4062-9306-40cbf735fc8b","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"d5a2d42f-8f65-44c8-9acd-a857843771fa","type":"BoxAnnotation"},"plot":{"id":"88d65016-0cc0-4062-9306-40cbf735fc8b","subtype":"Figure","type":"Plot"}},"id":"a23a16ac-d17d-4387-b92f-0a59266295cc","type":"BoxZoomTool"},{"attributes":{},"id":"6d861b37-6604-480b-8a5a-3aa2013d3289","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"50dc3274-9fb8-4f49-b5d8-ad5b3b1c47da","type":"Slider"}]},"id":"a15a44ff-9111-4d90-a146-38099cc51aa4","type":"WidgetBox"},{"attributes":{"dimension":1,"plot":{"id":"88d65016-0cc0-4062-9306-40cbf735fc8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"303ba41d-5667-4fa0-9d34-9b7b9183d317","type":"BasicTicker"}},"id":"c3783927-990a-485f-8ba2-6059f143489d","type":"Grid"},{"attributes":{"data_source":{"id":"d27e13f5-fd1f-4aec-b024-048d89ca8ad2","type":"ColumnDataSource"},"glyph":{"id":"8a19ad29-9385-4cf8-a3fa-5e615cf08550","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"6b285d89-5ee6-4261-98b6-e996867b6cfd","type":"Line"},"selection_glyph":null},"id":"8143b55b-c037-49e4-ad2d-80e4304fd41c","type":"GlyphRenderer"},{"attributes":{},"id":"f6288e04-550f-4737-b0b3-97312e6253bc","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6a1f5377-0e7f-495d-9bbc-b600e545d997","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"8a19ad29-9385-4cf8-a3fa-5e615cf08550","type":"Line"},{"attributes":{"plot":{"id":"88d65016-0cc0-4062-9306-40cbf735fc8b","subtype":"Figure","type":"Plot"}},"id":"78319ad2-ab46-4f17-9a21-8212cbec854f","type":"WheelZoomTool"},{"attributes":{"args":{"source":{"id":"d27e13f5-fd1f-4aec-b024-048d89ca8ad2","type":"ColumnDataSource"}},"code":"var _pyfunc_range = function (start, end, step) {\nvar i, res = [];\n    var val = start;\n    var n = (end - start) / step;\n    for (i=0; i<n; i++) {\n        res.push(val);\n        val += step;\n    }\n    return res;\n};\nvar cb;\ncb = function (source, window) {\n    var data, dummy1_, f, i, x, y;\n    source = (source === undefined) ? source: source;\n    window = (window === undefined) ? null: window;\n    data = source.data;\n    f = cb_obj.value;\n    dummy1_ = [data[\"x\"], data[\"y\"]];\n    x = dummy1_[0];y = dummy1_[1];\n    for (i = 0; i < x.length; i += 1) {\n        y[i] = window.Math.pow(x[i], f);\n    }\n    source.trigger(\"change\");\n    return null;\n};\ncb(source, window);\n"},"id":"705d9ccd-13cb-4f27-9db2-11dbc4ba1132","type":"CustomJS"}],"root_ids":["34bdab13-7886-4a7d-837c-539b63e118ce"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"294a774c-b056-442c-9a8d-6d51c83b8a62","elementid":"38c23f89-329a-476f-a1bf-9180cba4cb78","modelid":"34bdab13-7886-4a7d-837c-539b63e118ce"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
