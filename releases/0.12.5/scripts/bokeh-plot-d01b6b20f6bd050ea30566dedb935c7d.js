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
      };var element = document.getElementById("82fcbfce-b861-4efc-a39a-8f9b6e0c83e7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '82fcbfce-b861-4efc-a39a-8f9b6e0c83e7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"a9b21fdf-2992-4684-a9d1-2da950464736":{"roots":{"references":[{"attributes":{"formatter":{"id":"32e49629-4b64-423b-81a7-34adb0476fec","type":"BasicTickFormatter"},"plot":{"id":"00070018-6daa-4287-b19f-0745c07c03f4","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e7b3d0e-a071-46d9-b5b7-17e2b6a2fb01","type":"BasicTicker"}},"id":"3ac2994c-0e52-4462-ade7-6d6cdf9add85","type":"LinearAxis"},{"attributes":{},"id":"32e49629-4b64-423b-81a7-34adb0476fec","type":"BasicTickFormatter"},{"attributes":{"callback":{"id":"c196fcb6-1358-46e0-8866-46c95316f279","type":"CustomJS"},"end":4,"start":0.1,"title":"power","value":1},"id":"3a365241-27bf-46e7-bdb8-23943cfca3ab","type":"Slider"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"25f64e7f-e18b-4633-9d33-9b709f5feba1","type":"PanTool"},{"id":"1c4b45f3-fed8-4c34-9237-7a68852bab85","type":"WheelZoomTool"},{"id":"fbb95dfd-2ac1-476d-b597-0b2756a32299","type":"BoxZoomTool"},{"id":"8e2cc6b2-183a-47db-b1d2-17af30ea1094","type":"SaveTool"},{"id":"be77b742-d7ed-4ece-a0aa-0bb1d9b9e47d","type":"ResetTool"},{"id":"87e2b649-559e-402c-b1eb-5a550d39daa3","type":"HelpTool"}]},"id":"bf35aa57-583f-414a-9bed-df031c563765","type":"Toolbar"},{"attributes":{"plot":{"id":"00070018-6daa-4287-b19f-0745c07c03f4","subtype":"Figure","type":"Plot"}},"id":"25f64e7f-e18b-4633-9d33-9b709f5feba1","type":"PanTool"},{"attributes":{"children":[{"id":"574a74fd-4e1c-4092-aea6-11d92919446e","type":"WidgetBox"},{"id":"00070018-6daa-4287-b19f-0745c07c03f4","subtype":"Figure","type":"Plot"}]},"id":"a7271330-7c6e-4a88-b61a-4cd453e97181","type":"Column"},{"attributes":{"plot":{"id":"00070018-6daa-4287-b19f-0745c07c03f4","subtype":"Figure","type":"Plot"}},"id":"1c4b45f3-fed8-4c34-9237-7a68852bab85","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"00070018-6daa-4287-b19f-0745c07c03f4","subtype":"Figure","type":"Plot"}},"id":"be77b742-d7ed-4ece-a0aa-0bb1d9b9e47d","type":"ResetTool"},{"attributes":{"overlay":{"id":"8c0c156a-1c0e-452f-bc6d-6d03e4291634","type":"BoxAnnotation"},"plot":{"id":"00070018-6daa-4287-b19f-0745c07c03f4","subtype":"Figure","type":"Plot"}},"id":"fbb95dfd-2ac1-476d-b597-0b2756a32299","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"dad91f6a-e144-4186-9c83-7d124affec8e","type":"ColumnDataSource"},{"attributes":{"args":{"source":{"id":"dad91f6a-e144-4186-9c83-7d124affec8e","type":"ColumnDataSource"}},"code":"var _pyfunc_range = function (start, end, step) {\nvar i, res = [];\n    var val = start;\n    var n = (end - start) / step;\n    for (i=0; i<n; i++) {\n        res.push(val);\n        val += step;\n    }\n    return res;\n};\nvar cb;\ncb = function (source, window) {\n    var data, f, i, stub1_, x, y;\n    source = (source === undefined) ? source: source;\n    window = (window === undefined) ? null: window;\n    data = source.data;\n    f = cb_obj.value;\n    stub1_ = [data[\"x\"], data[\"y\"]];\n    x = stub1_[0];y = stub1_[1];\n    for (i = 0; i < x.length; i += 1) {\n        y[i] = window.Math.pow(x[i], f);\n    }\n    source.trigger(\"change\");\n    return null;\n};\ncb(source, window);\n"},"id":"c196fcb6-1358-46e0-8866-46c95316f279","type":"CustomJS"},{"attributes":{},"id":"3e7b3d0e-a071-46d9-b5b7-17e2b6a2fb01","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8c0c156a-1c0e-452f-bc6d-6d03e4291634","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"00070018-6daa-4287-b19f-0745c07c03f4","subtype":"Figure","type":"Plot"}},"id":"87e2b649-559e-402c-b1eb-5a550d39daa3","type":"HelpTool"},{"attributes":{},"id":"d15ac363-0685-40a3-86e2-da16a92411bb","type":"ToolEvents"},{"attributes":{"children":[{"id":"3a365241-27bf-46e7-bdb8-23943cfca3ab","type":"Slider"}]},"id":"574a74fd-4e1c-4092-aea6-11d92919446e","type":"WidgetBox"},{"attributes":{"plot":{"id":"00070018-6daa-4287-b19f-0745c07c03f4","subtype":"Figure","type":"Plot"}},"id":"8e2cc6b2-183a-47db-b1d2-17af30ea1094","type":"SaveTool"},{"attributes":{"below":[{"id":"3ac2994c-0e52-4462-ade7-6d6cdf9add85","type":"LinearAxis"}],"left":[{"id":"2ee6cc46-228b-4ca7-8412-33b13e27df97","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3ac2994c-0e52-4462-ade7-6d6cdf9add85","type":"LinearAxis"},{"id":"61823082-c04f-49c3-863f-ead2feeab67d","type":"Grid"},{"id":"2ee6cc46-228b-4ca7-8412-33b13e27df97","type":"LinearAxis"},{"id":"5f64a423-7de6-4764-85ef-e54d92c0677e","type":"Grid"},{"id":"8c0c156a-1c0e-452f-bc6d-6d03e4291634","type":"BoxAnnotation"},{"id":"92c2b3e4-dc61-4098-801c-b5c60699ae28","type":"GlyphRenderer"}],"title":{"id":"b7888adf-4459-4299-bd97-028d9bb48ff9","type":"Title"},"tool_events":{"id":"d15ac363-0685-40a3-86e2-da16a92411bb","type":"ToolEvents"},"toolbar":{"id":"bf35aa57-583f-414a-9bed-df031c563765","type":"Toolbar"},"x_range":{"id":"0e99dd04-1e38-49f4-aa57-eca4ab5f7cc5","type":"DataRange1d"},"y_range":{"id":"5b23fb0b-23ce-4683-bb98-3aff3bbfde4c","type":"DataRange1d"}},"id":"00070018-6daa-4287-b19f-0745c07c03f4","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"badb9bdb-e925-4ef2-b785-8318ee230bd0","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ae1ec69-d175-4e66-9339-68dba3c73f04","type":"Line"},{"attributes":{"formatter":{"id":"7df113e8-954f-4800-b064-6f69d7950ec9","type":"BasicTickFormatter"},"plot":{"id":"00070018-6daa-4287-b19f-0745c07c03f4","subtype":"Figure","type":"Plot"},"ticker":{"id":"badb9bdb-e925-4ef2-b785-8318ee230bd0","type":"BasicTicker"}},"id":"2ee6cc46-228b-4ca7-8412-33b13e27df97","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"b7888adf-4459-4299-bd97-028d9bb48ff9","type":"Title"},{"attributes":{"callback":null},"id":"5b23fb0b-23ce-4683-bb98-3aff3bbfde4c","type":"DataRange1d"},{"attributes":{},"id":"7df113e8-954f-4800-b064-6f69d7950ec9","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"dad91f6a-e144-4186-9c83-7d124affec8e","type":"ColumnDataSource"},"glyph":{"id":"3c10c5ca-b61d-4c60-bf34-b8fc31bf7335","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8ae1ec69-d175-4e66-9339-68dba3c73f04","type":"Line"},"selection_glyph":null},"id":"92c2b3e4-dc61-4098-801c-b5c60699ae28","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"00070018-6daa-4287-b19f-0745c07c03f4","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e7b3d0e-a071-46d9-b5b7-17e2b6a2fb01","type":"BasicTicker"}},"id":"61823082-c04f-49c3-863f-ead2feeab67d","type":"Grid"},{"attributes":{"callback":null},"id":"0e99dd04-1e38-49f4-aa57-eca4ab5f7cc5","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"00070018-6daa-4287-b19f-0745c07c03f4","subtype":"Figure","type":"Plot"},"ticker":{"id":"badb9bdb-e925-4ef2-b785-8318ee230bd0","type":"BasicTicker"}},"id":"5f64a423-7de6-4764-85ef-e54d92c0677e","type":"Grid"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"3c10c5ca-b61d-4c60-bf34-b8fc31bf7335","type":"Line"}],"root_ids":["a7271330-7c6e-4a88-b61a-4cd453e97181"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"a9b21fdf-2992-4684-a9d1-2da950464736","elementid":"82fcbfce-b861-4efc-a39a-8f9b6e0c83e7","modelid":"a7271330-7c6e-4a88-b61a-4cd453e97181"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
