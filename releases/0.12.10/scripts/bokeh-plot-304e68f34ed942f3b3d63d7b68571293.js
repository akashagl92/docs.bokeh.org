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
      };var element = document.getElementById("16f42034-0152-44dd-bdde-42ac0926bc4b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '16f42034-0152-44dd-bdde-42ac0926bc4b' but no matching script tag was found. ")
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
                    var docs_json = {"93b9150e-3c78-4edb-b6ac-18e38aafb270":{"roots":{"references":[{"attributes":{},"id":"15750185-b016-4c2a-963d-fc73a4f5f307","type":"HelpTool"},{"attributes":{},"id":"a42bc0f5-2b85-47f1-b454-5eb14aefa9b8","type":"PanTool"},{"attributes":{"data_source":{"id":"4108aec1-a249-4d73-b9c4-6c41d1cc5f95","type":"ColumnDataSource"},"glyph":{"id":"06e92b89-8332-41fe-a9a3-c5f0e5c719fa","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"051e15ed-dc89-40a1-afd9-194037895f2e","type":"Line"},"selection_glyph":null,"view":{"id":"610765d1-32f6-44c8-b8be-02367b6900a9","type":"CDSView"}},"id":"f5c6a41c-b902-4935-84af-15b888c52f3c","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"4108aec1-a249-4d73-b9c4-6c41d1cc5f95","type":"ColumnDataSource"},{"attributes":{},"id":"274e18cc-8316-474b-8f8c-e0118e3bea12","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a0ccbfcd-0483-473d-b3e3-04ef2e9ae2f5","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"be05c4e8-e6b4-489e-aeab-83a00a7256f4","type":"Title"},{"attributes":{},"id":"0508658b-5e79-47c1-b494-ee1e3a8b9d9c","type":"BasicTicker"},{"attributes":{"below":[{"id":"5ee36c65-167e-4607-bbb2-ec4eb2ae3791","type":"LinearAxis"}],"left":[{"id":"d06ed683-662d-44f7-82c0-79c8cc752cc5","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5ee36c65-167e-4607-bbb2-ec4eb2ae3791","type":"LinearAxis"},{"id":"8d0642d3-370d-4f8c-8592-dae14c9e6758","type":"Grid"},{"id":"d06ed683-662d-44f7-82c0-79c8cc752cc5","type":"LinearAxis"},{"id":"129e4303-ca05-4fb0-81d6-0f62dbc442f6","type":"Grid"},{"id":"a0ccbfcd-0483-473d-b3e3-04ef2e9ae2f5","type":"BoxAnnotation"},{"id":"f5c6a41c-b902-4935-84af-15b888c52f3c","type":"GlyphRenderer"}],"title":{"id":"be05c4e8-e6b4-489e-aeab-83a00a7256f4","type":"Title"},"toolbar":{"id":"4f33c093-0f2f-4183-bbe3-4cbb16593787","type":"Toolbar"},"x_range":{"id":"ad215c12-f9ea-4f91-98fe-70cf099bad8a","type":"DataRange1d"},"x_scale":{"id":"6f159ed2-c393-4cd2-bc79-9d8c1d54846d","type":"LinearScale"},"y_range":{"id":"0d7bfd30-ff8f-4c70-8d80-99777958479b","type":"DataRange1d"},"y_scale":{"id":"dc66968b-a3db-4ff8-a7a9-fdac298fc213","type":"LinearScale"}},"id":"4b02cd4c-6b2a-4371-b380-9e1dea36c787","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a42bc0f5-2b85-47f1-b454-5eb14aefa9b8","type":"PanTool"},{"id":"c0c0b972-cc93-4c65-912d-486f80e693d5","type":"WheelZoomTool"},{"id":"0e4cc516-1ac7-43f8-893f-1ea5dd58a3c6","type":"BoxZoomTool"},{"id":"546aeff1-83f1-4c9f-b7e7-4f89f87eddb8","type":"SaveTool"},{"id":"9d746b18-8316-4c84-b94f-191113b746b8","type":"ResetTool"},{"id":"15750185-b016-4c2a-963d-fc73a4f5f307","type":"HelpTool"}]},"id":"4f33c093-0f2f-4183-bbe3-4cbb16593787","type":"Toolbar"},{"attributes":{"callback":null},"id":"ad215c12-f9ea-4f91-98fe-70cf099bad8a","type":"DataRange1d"},{"attributes":{"children":[{"id":"14b3f805-fe98-4e1d-a1c0-c57caed881ed","type":"Slider"}]},"id":"aa25a0fe-b7a0-4fbc-a820-15ec2ebe546b","type":"WidgetBox"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"06e92b89-8332-41fe-a9a3-c5f0e5c719fa","type":"Line"},{"attributes":{"callback":null},"id":"0d7bfd30-ff8f-4c70-8d80-99777958479b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"274e18cc-8316-474b-8f8c-e0118e3bea12","type":"BasicTickFormatter"},"plot":{"id":"4b02cd4c-6b2a-4371-b380-9e1dea36c787","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4c37981-bedd-4a6a-87b2-147bbf8ab095","type":"BasicTicker"}},"id":"d06ed683-662d-44f7-82c0-79c8cc752cc5","type":"LinearAxis"},{"attributes":{},"id":"dc66968b-a3db-4ff8-a7a9-fdac298fc213","type":"LinearScale"},{"attributes":{"callback":null,"end":4,"js_property_callbacks":{"change:value":[{"id":"62407993-1717-4f24-adc4-73dd23842312","type":"CustomJS"}]},"start":0.1,"step":0.1,"title":"power","value":1},"id":"14b3f805-fe98-4e1d-a1c0-c57caed881ed","type":"Slider"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"051e15ed-dc89-40a1-afd9-194037895f2e","type":"Line"},{"attributes":{},"id":"6f159ed2-c393-4cd2-bc79-9d8c1d54846d","type":"LinearScale"},{"attributes":{},"id":"a4c37981-bedd-4a6a-87b2-147bbf8ab095","type":"BasicTicker"},{"attributes":{"plot":{"id":"4b02cd4c-6b2a-4371-b380-9e1dea36c787","subtype":"Figure","type":"Plot"},"ticker":{"id":"0508658b-5e79-47c1-b494-ee1e3a8b9d9c","type":"BasicTicker"}},"id":"8d0642d3-370d-4f8c-8592-dae14c9e6758","type":"Grid"},{"attributes":{},"id":"95331218-5f02-48f3-9cbd-4e5834a510ad","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"4b02cd4c-6b2a-4371-b380-9e1dea36c787","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4c37981-bedd-4a6a-87b2-147bbf8ab095","type":"BasicTicker"}},"id":"129e4303-ca05-4fb0-81d6-0f62dbc442f6","type":"Grid"},{"attributes":{"source":{"id":"4108aec1-a249-4d73-b9c4-6c41d1cc5f95","type":"ColumnDataSource"}},"id":"610765d1-32f6-44c8-b8be-02367b6900a9","type":"CDSView"},{"attributes":{},"id":"c0c0b972-cc93-4c65-912d-486f80e693d5","type":"WheelZoomTool"},{"attributes":{},"id":"546aeff1-83f1-4c9f-b7e7-4f89f87eddb8","type":"SaveTool"},{"attributes":{"formatter":{"id":"95331218-5f02-48f3-9cbd-4e5834a510ad","type":"BasicTickFormatter"},"plot":{"id":"4b02cd4c-6b2a-4371-b380-9e1dea36c787","subtype":"Figure","type":"Plot"},"ticker":{"id":"0508658b-5e79-47c1-b494-ee1e3a8b9d9c","type":"BasicTicker"}},"id":"5ee36c65-167e-4607-bbb2-ec4eb2ae3791","type":"LinearAxis"},{"attributes":{"overlay":{"id":"a0ccbfcd-0483-473d-b3e3-04ef2e9ae2f5","type":"BoxAnnotation"}},"id":"0e4cc516-1ac7-43f8-893f-1ea5dd58a3c6","type":"BoxZoomTool"},{"attributes":{},"id":"9d746b18-8316-4c84-b94f-191113b746b8","type":"ResetTool"},{"attributes":{"args":{"source":{"id":"4108aec1-a249-4d73-b9c4-6c41d1cc5f95","type":"ColumnDataSource"}},"code":"\n    var data = source.data;\n    var f = cb_obj.value\n    x = data['x']\n    y = data['y']\n    for (i = 0; i < x.length; i++) {\n        y[i] = Math.pow(x[i], f)\n    }\n    source.change.emit();\n"},"id":"62407993-1717-4f24-adc4-73dd23842312","type":"CustomJS"},{"attributes":{"children":[{"id":"aa25a0fe-b7a0-4fbc-a820-15ec2ebe546b","type":"WidgetBox"},{"id":"4b02cd4c-6b2a-4371-b380-9e1dea36c787","subtype":"Figure","type":"Plot"}]},"id":"5856c9b2-14fa-4772-b748-eafd772b2921","type":"Column"}],"root_ids":["5856c9b2-14fa-4772-b748-eafd772b2921"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"93b9150e-3c78-4edb-b6ac-18e38aafb270","elementid":"16f42034-0152-44dd-bdde-42ac0926bc4b","modelid":"5856c9b2-14fa-4772-b748-eafd772b2921"}];
                
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
