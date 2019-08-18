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
      };var element = document.getElementById("beadbce7-2913-42b3-aaa7-de13c5584c81");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'beadbce7-2913-42b3-aaa7-de13c5584c81' but no matching script tag was found. ")
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
                    var docs_json = {"3bc6d4ac-efc4-4495-8170-31c1f9c8bd78":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b7c83156-1a1b-43f6-953e-a9800fa56972","type":"PanTool"},{"id":"3c7b47af-8d70-4126-8fe9-9fef9f1ed967","type":"WheelZoomTool"},{"id":"e1d67fcc-e7fd-43e9-910b-b599e9799cfd","type":"BoxZoomTool"},{"id":"f4b7cfb0-ce9b-423f-a6a6-0a2741e9cb7f","type":"SaveTool"},{"id":"8bf37d90-ab61-4551-8ff0-7c88f80782f2","type":"ResetTool"},{"id":"ccda49bf-85e0-4696-9fcf-20d45e281b40","type":"HelpTool"}]},"id":"fc05245b-8fdc-4bb5-965c-9d907f808d3d","type":"Toolbar"},{"attributes":{},"id":"8bf37d90-ab61-4551-8ff0-7c88f80782f2","type":"ResetTool"},{"attributes":{},"id":"1a4c4806-9ad6-447d-b414-db1e9cadf4e4","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"b20ab3f2-a097-4da6-9152-27b4e7b092c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"d03034bb-6ef6-4fb4-b7f8-d811f379fd7f","type":"BasicTicker"}},"id":"a987769c-6d1e-4321-888a-fb55ddb7fe8e","type":"Grid"},{"attributes":{},"id":"2075381e-28d6-4bd9-85ba-d7c9badf2707","type":"LinearScale"},{"attributes":{"plot":{"id":"b20ab3f2-a097-4da6-9152-27b4e7b092c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a4c4806-9ad6-447d-b414-db1e9cadf4e4","type":"BasicTicker"}},"id":"1f893ce3-5f3b-425c-af70-53157e51491b","type":"Grid"},{"attributes":{},"id":"7c4952f1-df8e-4115-9a2c-a0c98fe6100c","type":"BasicTickFormatter"},{"attributes":{},"id":"d03034bb-6ef6-4fb4-b7f8-d811f379fd7f","type":"BasicTicker"},{"attributes":{},"id":"5434039d-5bf4-4715-8719-f41be984041a","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"a23df7cb-8b90-431e-89d9-cda7a266f8c9","type":"Title"},{"attributes":{"overlay":{"id":"3526043f-a52a-438e-ad27-c8c05e9aa60b","type":"BoxAnnotation"}},"id":"e1d67fcc-e7fd-43e9-910b-b599e9799cfd","type":"BoxZoomTool"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"e47b3dda-546e-485d-a925-0c9e76274b36","type":"Line"},{"attributes":{},"id":"58de8962-92a8-4330-91ee-548cc3c5bb60","type":"LinearScale"},{"attributes":{"formatter":{"id":"7c4952f1-df8e-4115-9a2c-a0c98fe6100c","type":"BasicTickFormatter"},"plot":{"id":"b20ab3f2-a097-4da6-9152-27b4e7b092c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a4c4806-9ad6-447d-b414-db1e9cadf4e4","type":"BasicTicker"}},"id":"2754bc5b-c8ba-4852-a8e1-e18e87397bde","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"15ef5bf7-0e09-4234-833f-e2a180c48a7a","type":"ColumnDataSource"},{"attributes":{"callback":{"id":"55019850-3fc9-452f-9478-77c766e13c4d","type":"CustomJS"},"end":4,"start":0.1,"step":0.1,"title":"power","value":1},"id":"31fd640c-f4b3-4194-8b3a-92c6da23e3d6","type":"Slider"},{"attributes":{"callback":null},"id":"c08ee14c-7966-4e3b-bc93-f6b2aa7b9091","type":"DataRange1d"},{"attributes":{"children":[{"id":"f4fa7579-b226-4e6c-b047-c08c932f622c","type":"WidgetBox"},{"id":"b20ab3f2-a097-4da6-9152-27b4e7b092c2","subtype":"Figure","type":"Plot"}]},"id":"33dd5f0e-6f0d-4a25-aa92-bdde60490b2f","type":"Column"},{"attributes":{},"id":"f4b7cfb0-ce9b-423f-a6a6-0a2741e9cb7f","type":"SaveTool"},{"attributes":{"callback":null},"id":"38704560-9d59-493c-b9fe-76453b3f9a74","type":"DataRange1d"},{"attributes":{"children":[{"id":"31fd640c-f4b3-4194-8b3a-92c6da23e3d6","type":"Slider"}]},"id":"f4fa7579-b226-4e6c-b047-c08c932f622c","type":"WidgetBox"},{"attributes":{},"id":"3c7b47af-8d70-4126-8fe9-9fef9f1ed967","type":"WheelZoomTool"},{"attributes":{},"id":"ccda49bf-85e0-4696-9fcf-20d45e281b40","type":"HelpTool"},{"attributes":{},"id":"b7c83156-1a1b-43f6-953e-a9800fa56972","type":"PanTool"},{"attributes":{"source":{"id":"15ef5bf7-0e09-4234-833f-e2a180c48a7a","type":"ColumnDataSource"}},"id":"320e5324-95fc-40f4-92c2-1a549e35c563","type":"CDSView"},{"attributes":{"formatter":{"id":"5434039d-5bf4-4715-8719-f41be984041a","type":"BasicTickFormatter"},"plot":{"id":"b20ab3f2-a097-4da6-9152-27b4e7b092c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"d03034bb-6ef6-4fb4-b7f8-d811f379fd7f","type":"BasicTicker"}},"id":"e69d7df1-4e97-42e5-af0b-910bc92a830b","type":"LinearAxis"},{"attributes":{"args":{"source":{"id":"15ef5bf7-0e09-4234-833f-e2a180c48a7a","type":"ColumnDataSource"}},"code":"var _pyfunc_range = function (start, end, step) {\nvar i, res = [];\n    var val = start;\n    var n = (end - start) / step;\n    for (i=0; i<n; i++) {\n        res.push(val);\n        val += step;\n    }\n    return res;\n};\nvar cb;\ncb = function (source, window) {\n    var data, f, i, stub1_, x, y;\n    source = (source === undefined) ? source: source;\n    window = (window === undefined) ? null: window;\n    data = source.data;\n    f = cb_obj.value;\n    stub1_ = [data[\"x\"], data[\"y\"]];\n    x = stub1_[0];y = stub1_[1];\n    for (i = 0; i < x.length; i += 1) {\n        y[i] = window.Math.pow(x[i], f);\n    }\n    source.change.emit();\n    return null;\n};\ncb(source, window);\n"},"id":"55019850-3fc9-452f-9478-77c766e13c4d","type":"CustomJS"},{"attributes":{"data_source":{"id":"15ef5bf7-0e09-4234-833f-e2a180c48a7a","type":"ColumnDataSource"},"glyph":{"id":"e47b3dda-546e-485d-a925-0c9e76274b36","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31f8bfeb-4269-403b-a15e-3727b585e4be","type":"Line"},"selection_glyph":null,"view":{"id":"320e5324-95fc-40f4-92c2-1a549e35c563","type":"CDSView"}},"id":"26056531-4032-48a6-8e88-c818e0102612","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"2754bc5b-c8ba-4852-a8e1-e18e87397bde","type":"LinearAxis"}],"left":[{"id":"e69d7df1-4e97-42e5-af0b-910bc92a830b","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2754bc5b-c8ba-4852-a8e1-e18e87397bde","type":"LinearAxis"},{"id":"1f893ce3-5f3b-425c-af70-53157e51491b","type":"Grid"},{"id":"e69d7df1-4e97-42e5-af0b-910bc92a830b","type":"LinearAxis"},{"id":"a987769c-6d1e-4321-888a-fb55ddb7fe8e","type":"Grid"},{"id":"3526043f-a52a-438e-ad27-c8c05e9aa60b","type":"BoxAnnotation"},{"id":"26056531-4032-48a6-8e88-c818e0102612","type":"GlyphRenderer"}],"title":{"id":"a23df7cb-8b90-431e-89d9-cda7a266f8c9","type":"Title"},"toolbar":{"id":"fc05245b-8fdc-4bb5-965c-9d907f808d3d","type":"Toolbar"},"x_range":{"id":"c08ee14c-7966-4e3b-bc93-f6b2aa7b9091","type":"DataRange1d"},"x_scale":{"id":"58de8962-92a8-4330-91ee-548cc3c5bb60","type":"LinearScale"},"y_range":{"id":"38704560-9d59-493c-b9fe-76453b3f9a74","type":"DataRange1d"},"y_scale":{"id":"2075381e-28d6-4bd9-85ba-d7c9badf2707","type":"LinearScale"}},"id":"b20ab3f2-a097-4da6-9152-27b4e7b092c2","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3526043f-a52a-438e-ad27-c8c05e9aa60b","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"31f8bfeb-4269-403b-a15e-3727b585e4be","type":"Line"}],"root_ids":["33dd5f0e-6f0d-4a25-aa92-bdde60490b2f"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"3bc6d4ac-efc4-4495-8170-31c1f9c8bd78","elementid":"beadbce7-2913-42b3-aaa7-de13c5584c81","modelid":"33dd5f0e-6f0d-4a25-aa92-bdde60490b2f"}];
                
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
