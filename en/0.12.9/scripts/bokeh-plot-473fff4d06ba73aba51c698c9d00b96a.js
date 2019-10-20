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
      };var element = document.getElementById("54624493-7a38-48fc-b9a1-0f7bd692a278");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '54624493-7a38-48fc-b9a1-0f7bd692a278' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"f74c7dcd-0add-4413-bed3-433f5d778e11":{"roots":{"references":[{"attributes":{"data_source":{"id":"20dec039-2328-4270-9db5-4d4e3dd9e0b1","type":"ColumnDataSource"},"glyph":{"id":"ed20e7d8-cd0b-4460-a55e-61ec4fd0e2eb","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d788ca33-3334-4efc-a12c-1114bb8f2ab8","type":"Line"},"selection_glyph":null,"view":{"id":"1509321f-fd43-4fa7-a48c-d7d6d9243a70","type":"CDSView"}},"id":"fd110ea6-f6a9-45c6-b8ce-a686ca883cca","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"ed20e7d8-cd0b-4460-a55e-61ec4fd0e2eb","type":"Line"},{"attributes":{"children":[{"id":"a1a9efdd-8efe-4ad6-810e-12adb4e9385c","type":"Slider"}]},"id":"062ad082-1d28-48ab-9076-bd4817c7c2b5","type":"WidgetBox"},{"attributes":{},"id":"3cce72c9-1c9c-4aba-93d6-52eac28e356d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"23c13198-26dc-4163-a983-d8874188b427","subtype":"Figure","type":"Plot"},"ticker":{"id":"3cce72c9-1c9c-4aba-93d6-52eac28e356d","type":"BasicTicker"}},"id":"75879eab-1053-40e2-a0d1-8fad78a4ef5c","type":"Grid"},{"attributes":{"callback":null},"id":"0a2cec6a-9959-4ab3-8017-9e6a19b7093d","type":"DataRange1d"},{"attributes":{"source":{"id":"20dec039-2328-4270-9db5-4d4e3dd9e0b1","type":"ColumnDataSource"}},"id":"1509321f-fd43-4fa7-a48c-d7d6d9243a70","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d4c40988-ecc0-482b-b2ca-2f9eb8315cba","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"d4c40988-ecc0-482b-b2ca-2f9eb8315cba","type":"BoxAnnotation"}},"id":"e450c548-bfcb-4e14-a839-9e87d7d4059f","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7df2ba06-65c0-4b38-8388-2e64bab823a9","type":"PanTool"},{"id":"ce84c6d3-9c6c-485f-a20a-14dcbe4c214b","type":"WheelZoomTool"},{"id":"e450c548-bfcb-4e14-a839-9e87d7d4059f","type":"BoxZoomTool"},{"id":"d58fff52-55a8-4b45-a0a9-2e898ec715a3","type":"SaveTool"},{"id":"f40bac52-e64c-4433-b72a-a539209a96b7","type":"ResetTool"},{"id":"4e9822ed-6467-4798-bb4d-2090b020a5e9","type":"HelpTool"}]},"id":"ca4bf4e6-b8eb-4e78-9792-5de545e82a08","type":"Toolbar"},{"attributes":{},"id":"7df2ba06-65c0-4b38-8388-2e64bab823a9","type":"PanTool"},{"attributes":{},"id":"59321c9f-cc70-4ce1-8b77-e92d188d6f96","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"d788ca33-3334-4efc-a12c-1114bb8f2ab8","type":"Line"},{"attributes":{},"id":"7987b401-fb90-479b-b19f-fcbc01bc60a4","type":"BasicTickFormatter"},{"attributes":{},"id":"4e9822ed-6467-4798-bb4d-2090b020a5e9","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"0a5611f3-062e-48ec-a587-b660b87a47b0","type":"Title"},{"attributes":{},"id":"d58fff52-55a8-4b45-a0a9-2e898ec715a3","type":"SaveTool"},{"attributes":{},"id":"b3b9543f-b59d-46c0-b860-555767b4b464","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"20dec039-2328-4270-9db5-4d4e3dd9e0b1","type":"ColumnDataSource"},{"attributes":{},"id":"ebf5d99f-25ab-496c-bfe3-ebfa56b70f8d","type":"LinearScale"},{"attributes":{"formatter":{"id":"59321c9f-cc70-4ce1-8b77-e92d188d6f96","type":"BasicTickFormatter"},"plot":{"id":"23c13198-26dc-4163-a983-d8874188b427","subtype":"Figure","type":"Plot"},"ticker":{"id":"3cce72c9-1c9c-4aba-93d6-52eac28e356d","type":"BasicTicker"}},"id":"a0677742-ec06-4fbe-845f-8941e1a8ef85","type":"LinearAxis"},{"attributes":{"children":[{"id":"062ad082-1d28-48ab-9076-bd4817c7c2b5","type":"WidgetBox"},{"id":"23c13198-26dc-4163-a983-d8874188b427","subtype":"Figure","type":"Plot"}]},"id":"c847b445-19a3-4f17-8fb7-06d30bec0656","type":"Column"},{"attributes":{},"id":"6e7837ea-2802-48e6-9053-98439192ef82","type":"BasicTicker"},{"attributes":{},"id":"f40bac52-e64c-4433-b72a-a539209a96b7","type":"ResetTool"},{"attributes":{"args":{"source":{"id":"20dec039-2328-4270-9db5-4d4e3dd9e0b1","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.value\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.change.emit();\n    "},"id":"976a5e28-50bb-48bc-9464-86bfe4c71dcb","type":"CustomJS"},{"attributes":{"below":[{"id":"b9f407ca-a447-42f9-92df-379ab5fba8ee","type":"LinearAxis"}],"left":[{"id":"a0677742-ec06-4fbe-845f-8941e1a8ef85","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b9f407ca-a447-42f9-92df-379ab5fba8ee","type":"LinearAxis"},{"id":"d3b0b198-997b-4a61-9f76-a63fa8bfb2c1","type":"Grid"},{"id":"a0677742-ec06-4fbe-845f-8941e1a8ef85","type":"LinearAxis"},{"id":"75879eab-1053-40e2-a0d1-8fad78a4ef5c","type":"Grid"},{"id":"d4c40988-ecc0-482b-b2ca-2f9eb8315cba","type":"BoxAnnotation"},{"id":"fd110ea6-f6a9-45c6-b8ce-a686ca883cca","type":"GlyphRenderer"}],"title":{"id":"0a5611f3-062e-48ec-a587-b660b87a47b0","type":"Title"},"toolbar":{"id":"ca4bf4e6-b8eb-4e78-9792-5de545e82a08","type":"Toolbar"},"x_range":{"id":"0a2cec6a-9959-4ab3-8017-9e6a19b7093d","type":"DataRange1d"},"x_scale":{"id":"ebf5d99f-25ab-496c-bfe3-ebfa56b70f8d","type":"LinearScale"},"y_range":{"id":"9e014e39-d629-4275-9126-892cbbe53a84","type":"DataRange1d"},"y_scale":{"id":"b3b9543f-b59d-46c0-b860-555767b4b464","type":"LinearScale"}},"id":"23c13198-26dc-4163-a983-d8874188b427","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"23c13198-26dc-4163-a983-d8874188b427","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e7837ea-2802-48e6-9053-98439192ef82","type":"BasicTicker"}},"id":"d3b0b198-997b-4a61-9f76-a63fa8bfb2c1","type":"Grid"},{"attributes":{},"id":"ce84c6d3-9c6c-485f-a20a-14dcbe4c214b","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"9e014e39-d629-4275-9126-892cbbe53a84","type":"DataRange1d"},{"attributes":{"callback":{"id":"976a5e28-50bb-48bc-9464-86bfe4c71dcb","type":"CustomJS"},"end":4,"start":0.1,"step":0.1,"title":"power","value":1},"id":"a1a9efdd-8efe-4ad6-810e-12adb4e9385c","type":"Slider"},{"attributes":{"formatter":{"id":"7987b401-fb90-479b-b19f-fcbc01bc60a4","type":"BasicTickFormatter"},"plot":{"id":"23c13198-26dc-4163-a983-d8874188b427","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e7837ea-2802-48e6-9053-98439192ef82","type":"BasicTicker"}},"id":"b9f407ca-a447-42f9-92df-379ab5fba8ee","type":"LinearAxis"}],"root_ids":["c847b445-19a3-4f17-8fb7-06d30bec0656"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"f74c7dcd-0add-4413-bed3-433f5d778e11","elementid":"54624493-7a38-48fc-b9a1-0f7bd692a278","modelid":"c847b445-19a3-4f17-8fb7-06d30bec0656"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
