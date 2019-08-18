(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("b4d6c6ce-7c42-4e27-bbdc-b14f76ce7534");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b4d6c6ce-7c42-4e27-bbdc-b14f76ce7534' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"95d3e32c-de7a-46c3-b519-d2096baf1820":{"roots":{"references":[{"attributes":{},"id":"34251982-f275-4665-b992-c3c9f5b99744","type":"SaveTool"},{"attributes":{"source":{"id":"6917fa5c-a9b5-4988-aa82-161058b5e016","type":"ColumnDataSource"}},"id":"8bf5fdfb-7b1d-49a5-af99-cf25209a9571","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"6917fa5c-a9b5-4988-aa82-161058b5e016","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"29359805-dfef-4b8e-a0c5-cc5fce3d1e63","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"f511eb6b-9655-400e-b225-b9812ff9dbe0","type":"Line"},{"attributes":{"formatter":{"id":"b3719c27-5f93-45c5-8728-8ba5e5e03a68","type":"BasicTickFormatter"},"plot":{"id":"c230283d-0374-408e-b647-4d92b22afc54","subtype":"Figure","type":"Plot"},"ticker":{"id":"d1c82da9-c385-4eda-8b40-520e17c0d2ae","type":"BasicTicker"}},"id":"a8c871ab-5818-4f3a-b80e-32f0b458331f","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f93336b4-2e1b-4013-b555-0a38f61994b0","type":"BoxAnnotation"},{"attributes":{},"id":"b43e60a8-dc9f-42a2-969c-9c95fb5e9c5f","type":"WheelZoomTool"},{"attributes":{},"id":"f023d572-4c11-48e3-ba42-70af78e1878f","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"f93336b4-2e1b-4013-b555-0a38f61994b0","type":"BoxAnnotation"}},"id":"403717b8-2ce5-4585-989e-6d5b720e7a73","type":"BoxZoomTool"},{"attributes":{},"id":"9e90d2bc-4a9b-4d55-ad85-61bca850b68b","type":"ResetTool"},{"attributes":{},"id":"d1c82da9-c385-4eda-8b40-520e17c0d2ae","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"f7650d74-df8d-49c3-899e-b121522fa7af","type":"Title"},{"attributes":{},"id":"b3719c27-5f93-45c5-8728-8ba5e5e03a68","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"cdafca51-a581-4df5-b9f1-31a02cffc26f","type":"Line"},{"attributes":{},"id":"b8a77b12-f581-41d4-85b0-a494852b9227","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e5a086a5-17ac-415e-8154-ce65510edb47","type":"PanTool"},{"id":"b43e60a8-dc9f-42a2-969c-9c95fb5e9c5f","type":"WheelZoomTool"},{"id":"403717b8-2ce5-4585-989e-6d5b720e7a73","type":"BoxZoomTool"},{"id":"34251982-f275-4665-b992-c3c9f5b99744","type":"SaveTool"},{"id":"9e90d2bc-4a9b-4d55-ad85-61bca850b68b","type":"ResetTool"},{"id":"b8a77b12-f581-41d4-85b0-a494852b9227","type":"HelpTool"}]},"id":"43c3b7be-3a26-4bab-974e-aa67972aba92","type":"Toolbar"},{"attributes":{"below":[{"id":"a8c871ab-5818-4f3a-b80e-32f0b458331f","type":"LinearAxis"}],"left":[{"id":"e9cd32b4-da03-4312-9d2e-2b842f55a4f0","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a8c871ab-5818-4f3a-b80e-32f0b458331f","type":"LinearAxis"},{"id":"1d06fe60-4251-4e7e-84d5-05a42a41b202","type":"Grid"},{"id":"e9cd32b4-da03-4312-9d2e-2b842f55a4f0","type":"LinearAxis"},{"id":"264dd433-ca61-4741-a71f-6fa303268ebc","type":"Grid"},{"id":"f93336b4-2e1b-4013-b555-0a38f61994b0","type":"BoxAnnotation"},{"id":"a24535b8-488b-440a-a008-8ff0984ebd15","type":"GlyphRenderer"}],"title":{"id":"f7650d74-df8d-49c3-899e-b121522fa7af","type":"Title"},"toolbar":{"id":"43c3b7be-3a26-4bab-974e-aa67972aba92","type":"Toolbar"},"x_range":{"id":"29359805-dfef-4b8e-a0c5-cc5fce3d1e63","type":"DataRange1d"},"x_scale":{"id":"5d85e885-59dc-42c6-a991-7ac71bc7be47","type":"LinearScale"},"y_range":{"id":"80992fe9-da83-4c29-82c6-6d027eb0794c","type":"DataRange1d"},"y_scale":{"id":"7faba085-3c97-4641-aecd-8b5e74e4c5be","type":"LinearScale"}},"id":"c230283d-0374-408e-b647-4d92b22afc54","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"6917fa5c-a9b5-4988-aa82-161058b5e016","type":"ColumnDataSource"},"glyph":{"id":"cdafca51-a581-4df5-b9f1-31a02cffc26f","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f511eb6b-9655-400e-b225-b9812ff9dbe0","type":"Line"},"selection_glyph":null,"view":{"id":"8bf5fdfb-7b1d-49a5-af99-cf25209a9571","type":"CDSView"}},"id":"a24535b8-488b-440a-a008-8ff0984ebd15","type":"GlyphRenderer"},{"attributes":{},"id":"5d85e885-59dc-42c6-a991-7ac71bc7be47","type":"LinearScale"},{"attributes":{"plot":{"id":"c230283d-0374-408e-b647-4d92b22afc54","subtype":"Figure","type":"Plot"},"ticker":{"id":"d1c82da9-c385-4eda-8b40-520e17c0d2ae","type":"BasicTicker"}},"id":"1d06fe60-4251-4e7e-84d5-05a42a41b202","type":"Grid"},{"attributes":{"callback":{"id":"9dea1005-983d-408d-9f98-a37acc61408b","type":"CustomJS"},"end":4,"start":0.1,"step":0.1,"title":"power","value":1},"id":"79f09af6-74cd-4a73-af68-b42316e7a960","type":"Slider"},{"attributes":{"children":[{"id":"79f09af6-74cd-4a73-af68-b42316e7a960","type":"Slider"}]},"id":"394775da-9d20-43bd-b173-c750d42cb1fe","type":"WidgetBox"},{"attributes":{"children":[{"id":"394775da-9d20-43bd-b173-c750d42cb1fe","type":"WidgetBox"},{"id":"c230283d-0374-408e-b647-4d92b22afc54","subtype":"Figure","type":"Plot"}]},"id":"11a372c3-23ef-4a23-80be-8ca5edfb5420","type":"Column"},{"attributes":{"formatter":{"id":"f023d572-4c11-48e3-ba42-70af78e1878f","type":"BasicTickFormatter"},"plot":{"id":"c230283d-0374-408e-b647-4d92b22afc54","subtype":"Figure","type":"Plot"},"ticker":{"id":"c63229a8-6be5-489a-b110-f67edb701ec4","type":"BasicTicker"}},"id":"e9cd32b4-da03-4312-9d2e-2b842f55a4f0","type":"LinearAxis"},{"attributes":{"callback":null},"id":"80992fe9-da83-4c29-82c6-6d027eb0794c","type":"DataRange1d"},{"attributes":{"args":{"source":{"id":"6917fa5c-a9b5-4988-aa82-161058b5e016","type":"ColumnDataSource"}},"code":"var _pyfunc_range = function (start, end, step) {\nvar i, res = [];\n    var val = start;\n    var n = (end - start) / step;\n    for (i=0; i<n; i++) {\n        res.push(val);\n        val += step;\n    }\n    return res;\n};\nvar cb;\ncb = function (source, window) {\n    var data, f, i, stub1_, x, y;\n    source = (source === undefined) ? source: source;\n    window = (window === undefined) ? null: window;\n    data = source.data;\n    f = cb_obj.value;\n    stub1_ = [data[\"x\"], data[\"y\"]];\n    x = stub1_[0];y = stub1_[1];\n    for (i = 0; i < x.length; i += 1) {\n        y[i] = window.Math.pow(x[i], f);\n    }\n    source.change.emit();\n    return null;\n};\ncb(source, window);\n"},"id":"9dea1005-983d-408d-9f98-a37acc61408b","type":"CustomJS"},{"attributes":{},"id":"c63229a8-6be5-489a-b110-f67edb701ec4","type":"BasicTicker"},{"attributes":{},"id":"e5a086a5-17ac-415e-8154-ce65510edb47","type":"PanTool"},{"attributes":{},"id":"7faba085-3c97-4641-aecd-8b5e74e4c5be","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"c230283d-0374-408e-b647-4d92b22afc54","subtype":"Figure","type":"Plot"},"ticker":{"id":"c63229a8-6be5-489a-b110-f67edb701ec4","type":"BasicTicker"}},"id":"264dd433-ca61-4741-a71f-6fa303268ebc","type":"Grid"}],"root_ids":["11a372c3-23ef-4a23-80be-8ca5edfb5420"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"95d3e32c-de7a-46c3-b519-d2096baf1820","elementid":"b4d6c6ce-7c42-4e27-bbdc-b14f76ce7534","modelid":"11a372c3-23ef-4a23-80be-8ca5edfb5420"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
