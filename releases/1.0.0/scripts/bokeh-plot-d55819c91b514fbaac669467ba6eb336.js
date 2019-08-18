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
      };var element = document.getElementById("cb167e18-665d-4a10-9a83-b2e252c819c0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cb167e18-665d-4a10-9a83-b2e252c819c0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"3dc09d0f-dc90-4c82-8dde-0d63842e0db8":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"6116","subtype":"Figure","type":"Plot"},"ticker":{"id":"6131","type":"BasicTicker"}},"id":"6134","type":"Grid"},{"attributes":{},"id":"6136","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"6164","type":"BasicTickFormatter"},"plot":{"id":"6116","subtype":"Figure","type":"Plot"},"ticker":{"id":"6131","type":"BasicTicker"}},"id":"6130","type":"LinearAxis"},{"attributes":{},"id":"6138","type":"SaveTool"},{"attributes":{"callback":null,"end":4,"js_property_callbacks":{"change:value":[{"id":"6155","type":"CustomJS"}]},"start":0.1,"step":0.1,"title":"power","value":1},"id":"6156","type":"Slider"},{"attributes":{},"id":"6135","type":"PanTool"},{"attributes":{},"id":"6126","type":"BasicTicker"},{"attributes":{},"id":"6139","type":"ResetTool"},{"attributes":{"source":{"id":"6115","type":"ColumnDataSource"}},"id":"6154","type":"CDSView"},{"attributes":{"formatter":{"id":"6162","type":"BasicTickFormatter"},"plot":{"id":"6116","subtype":"Figure","type":"Plot"},"ticker":{"id":"6126","type":"BasicTicker"}},"id":"6125","type":"LinearAxis"},{"attributes":{"args":{"source":{"id":"6115","type":"ColumnDataSource"}},"code":"\\n    var data = source.data;\\n    var f = cb_obj.value\\n    var x = data[&#x27;x&#x27;]\\n    var y = data[&#x27;y&#x27;]\\n    for (var i = 0; i &lt; x.length; i++) {\\n        y[i] = Math.pow(x[i], f)\\n    }\\n    source.change.emit();\\n"},"id":"6155","type":"CustomJS"},{"attributes":{},"id":"6162","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.6,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"6151","type":"Line"},{"attributes":{"children":[{"id":"6157","type":"WidgetBox"},{"id":"6116","subtype":"Figure","type":"Plot"}]},"id":"6158","type":"Column"},{"attributes":{"plot":{"id":"6116","subtype":"Figure","type":"Plot"},"ticker":{"id":"6126","type":"BasicTicker"}},"id":"6129","type":"Grid"},{"attributes":{},"id":"6167","type":"UnionRenderers"},{"attributes":{"children":[{"id":"6156","type":"Slider"}]},"id":"6157","type":"WidgetBox"},{"attributes":{},"id":"6166","type":"Selection"},{"attributes":{},"id":"6164","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"6115","type":"ColumnDataSource"},"glyph":{"id":"6151","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6152","type":"Line"},"selection_glyph":null,"view":{"id":"6154","type":"CDSView"}},"id":"6153","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]},"selected":{"id":"6166","type":"Selection"},"selection_policy":{"id":"6167","type":"UnionRenderers"}},"id":"6115","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"6117","type":"DataRange1d"},{"attributes":{"below":[{"id":"6125","type":"LinearAxis"}],"left":[{"id":"6130","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6125","type":"LinearAxis"},{"id":"6129","type":"Grid"},{"id":"6130","type":"LinearAxis"},{"id":"6134","type":"Grid"},{"id":"6143","type":"BoxAnnotation"},{"id":"6153","type":"GlyphRenderer"}],"title":{"id":"6160","type":"Title"},"toolbar":{"id":"6141","type":"Toolbar"},"x_range":{"id":"6117","type":"DataRange1d"},"x_scale":{"id":"6121","type":"LinearScale"},"y_range":{"id":"6119","type":"DataRange1d"},"y_scale":{"id":"6123","type":"LinearScale"}},"id":"6116","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"6119","type":"DataRange1d"},{"attributes":{},"id":"6123","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6143","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6135","type":"PanTool"},{"id":"6136","type":"WheelZoomTool"},{"id":"6137","type":"BoxZoomTool"},{"id":"6138","type":"SaveTool"},{"id":"6139","type":"ResetTool"},{"id":"6140","type":"HelpTool"}]},"id":"6141","type":"Toolbar"},{"attributes":{},"id":"6140","type":"HelpTool"},{"attributes":{},"id":"6131","type":"BasicTicker"},{"attributes":{},"id":"6121","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"6160","type":"Title"},{"attributes":{"overlay":{"id":"6143","type":"BoxAnnotation"}},"id":"6137","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"6152","type":"Line"}],"root_ids":["6158"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"3dc09d0f-dc90-4c82-8dde-0d63842e0db8","roots":{"6158":"cb167e18-665d-4a10-9a83-b2e252c819c0"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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