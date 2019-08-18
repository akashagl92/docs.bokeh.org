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
      };var element = document.getElementById("c867f0cf-d5c5-4654-b404-27c017f72a09");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c867f0cf-d5c5-4654-b404-27c017f72a09' but no matching script tag was found. ")
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
                    var docs_json = {"bcd568a1-5d2d-45bf-8c4d-41c286339245":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"51a1e127-19fa-4c57-8b0b-591bd0542c47","type":"Line"},{"attributes":{"callback":null,"end":4,"js_property_callbacks":{"change:value":[{"id":"35bb3891-e56a-4c81-849b-2ee2e3202f90","type":"CustomJS"}]},"start":0.1,"step":0.1,"title":"power","value":1},"id":"5cf155f3-184f-4b31-be70-85f0cb5cdf61","type":"Slider"},{"attributes":{},"id":"0a884ed6-4012-4f7c-9102-039a5815dcae","type":"LinearScale"},{"attributes":{"source":{"id":"34adf183-7fc6-4ee9-abbc-be83004ab7a0","type":"ColumnDataSource"}},"id":"e2903dd2-f6db-4335-8032-25f7465f5e8a","type":"CDSView"},{"attributes":{"data_source":{"id":"34adf183-7fc6-4ee9-abbc-be83004ab7a0","type":"ColumnDataSource"},"glyph":{"id":"43d49096-b5d9-4368-a352-501fcab85178","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"51a1e127-19fa-4c57-8b0b-591bd0542c47","type":"Line"},"selection_glyph":null,"view":{"id":"e2903dd2-f6db-4335-8032-25f7465f5e8a","type":"CDSView"}},"id":"8a29fc7d-edd1-4942-82c7-bea86745d095","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"4fee2e54-4665-4185-9296-966ee645c789","type":"BasicTickFormatter"},"plot":{"id":"4d0bb7f4-6993-4845-8fab-8b134350ee14","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2bd5649-c4e4-446e-82af-f121c60e607e","type":"BasicTicker"}},"id":"461e1e70-df2a-4a42-ac63-9bc862d37ebf","type":"LinearAxis"},{"attributes":{},"id":"13ace80d-bc2e-4efb-a27c-1da55753d266","type":"SaveTool"},{"attributes":{},"id":"868a12d1-bf27-4b02-8113-ef9f1d91ca05","type":"BasicTickFormatter"},{"attributes":{},"id":"57135d92-8685-4062-8c71-d1e685a22308","type":"PanTool"},{"attributes":{"overlay":{"id":"38ac7fdf-ff31-42c3-9605-54d6cdfacb1a","type":"BoxAnnotation"}},"id":"3876eece-650e-43de-8dcd-83444bb289c2","type":"BoxZoomTool"},{"attributes":{},"id":"972085d5-5523-4abf-856e-5203d5e48ff0","type":"ResetTool"},{"attributes":{"callback":null},"id":"25d420ff-c773-47d0-99bd-3acfc974f8e6","type":"DataRange1d"},{"attributes":{"children":[{"id":"b7603cff-38a1-4e6d-9c0c-c7e248ef851f","type":"WidgetBox"},{"id":"4d0bb7f4-6993-4845-8fab-8b134350ee14","subtype":"Figure","type":"Plot"}]},"id":"38686143-90b4-4061-972a-fb543677b45e","type":"Column"},{"attributes":{},"id":"7dda1942-660e-46cc-af25-724bd7d1ad3c","type":"LinearScale"},{"attributes":{},"id":"034578b4-8ec8-46b0-a887-17236aa4f8ff","type":"HelpTool"},{"attributes":{},"id":"9ae37fa7-90c7-485c-9b31-f2231547dcfe","type":"BasicTicker"},{"attributes":{},"id":"43f47015-4802-4255-8ac8-694c841813ab","type":"WheelZoomTool"},{"attributes":{},"id":"4fee2e54-4665-4185-9296-966ee645c789","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"688cf0a3-7da9-45e8-b903-b6498aca1a0f","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"34adf183-7fc6-4ee9-abbc-be83004ab7a0","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"9184695f-ffc5-4187-92b7-71b8b9f744b5","type":"LinearAxis"}],"left":[{"id":"461e1e70-df2a-4a42-ac63-9bc862d37ebf","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9184695f-ffc5-4187-92b7-71b8b9f744b5","type":"LinearAxis"},{"id":"c2c7c0f3-5a4b-487f-badd-d7501289cfeb","type":"Grid"},{"id":"461e1e70-df2a-4a42-ac63-9bc862d37ebf","type":"LinearAxis"},{"id":"801a324c-cedb-45b8-a3e9-99ebdb26afb2","type":"Grid"},{"id":"38ac7fdf-ff31-42c3-9605-54d6cdfacb1a","type":"BoxAnnotation"},{"id":"8a29fc7d-edd1-4942-82c7-bea86745d095","type":"GlyphRenderer"}],"title":{"id":"688cf0a3-7da9-45e8-b903-b6498aca1a0f","type":"Title"},"toolbar":{"id":"1c9da30d-1a1f-4c5c-9de7-b68c016ef3f6","type":"Toolbar"},"x_range":{"id":"25d420ff-c773-47d0-99bd-3acfc974f8e6","type":"DataRange1d"},"x_scale":{"id":"0a884ed6-4012-4f7c-9102-039a5815dcae","type":"LinearScale"},"y_range":{"id":"77a6e010-18a6-4358-82eb-d24c9725d593","type":"DataRange1d"},"y_scale":{"id":"7dda1942-660e-46cc-af25-724bd7d1ad3c","type":"LinearScale"}},"id":"4d0bb7f4-6993-4845-8fab-8b134350ee14","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"57135d92-8685-4062-8c71-d1e685a22308","type":"PanTool"},{"id":"43f47015-4802-4255-8ac8-694c841813ab","type":"WheelZoomTool"},{"id":"3876eece-650e-43de-8dcd-83444bb289c2","type":"BoxZoomTool"},{"id":"13ace80d-bc2e-4efb-a27c-1da55753d266","type":"SaveTool"},{"id":"972085d5-5523-4abf-856e-5203d5e48ff0","type":"ResetTool"},{"id":"034578b4-8ec8-46b0-a887-17236aa4f8ff","type":"HelpTool"}]},"id":"1c9da30d-1a1f-4c5c-9de7-b68c016ef3f6","type":"Toolbar"},{"attributes":{"children":[{"id":"5cf155f3-184f-4b31-be70-85f0cb5cdf61","type":"Slider"}]},"id":"b7603cff-38a1-4e6d-9c0c-c7e248ef851f","type":"WidgetBox"},{"attributes":{"dimension":1,"plot":{"id":"4d0bb7f4-6993-4845-8fab-8b134350ee14","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2bd5649-c4e4-446e-82af-f121c60e607e","type":"BasicTicker"}},"id":"801a324c-cedb-45b8-a3e9-99ebdb26afb2","type":"Grid"},{"attributes":{"args":{"source":{"id":"34adf183-7fc6-4ee9-abbc-be83004ab7a0","type":"ColumnDataSource"}},"code":"\n    var data = source.data;\n    var f = cb_obj.value\n    x = data['x']\n    y = data['y']\n    for (i = 0; i < x.length; i++) {\n        y[i] = Math.pow(x[i], f)\n    }\n    source.change.emit();\n"},"id":"35bb3891-e56a-4c81-849b-2ee2e3202f90","type":"CustomJS"},{"attributes":{},"id":"e2bd5649-c4e4-446e-82af-f121c60e607e","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"43d49096-b5d9-4368-a352-501fcab85178","type":"Line"},{"attributes":{"plot":{"id":"4d0bb7f4-6993-4845-8fab-8b134350ee14","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ae37fa7-90c7-485c-9b31-f2231547dcfe","type":"BasicTicker"}},"id":"c2c7c0f3-5a4b-487f-badd-d7501289cfeb","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"38ac7fdf-ff31-42c3-9605-54d6cdfacb1a","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"77a6e010-18a6-4358-82eb-d24c9725d593","type":"DataRange1d"},{"attributes":{"formatter":{"id":"868a12d1-bf27-4b02-8113-ef9f1d91ca05","type":"BasicTickFormatter"},"plot":{"id":"4d0bb7f4-6993-4845-8fab-8b134350ee14","subtype":"Figure","type":"Plot"},"ticker":{"id":"9ae37fa7-90c7-485c-9b31-f2231547dcfe","type":"BasicTicker"}},"id":"9184695f-ffc5-4187-92b7-71b8b9f744b5","type":"LinearAxis"}],"root_ids":["38686143-90b4-4061-972a-fb543677b45e"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"bcd568a1-5d2d-45bf-8c4d-41c286339245","elementid":"c867f0cf-d5c5-4654-b404-27c017f72a09","modelid":"38686143-90b4-4061-972a-fb543677b45e"}];
                
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
