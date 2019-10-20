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
      };var element = document.getElementById("13b1fec0-1ba1-4fc4-acde-2216276ce190");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '13b1fec0-1ba1-4fc4-acde-2216276ce190' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"f15a27a9-e539-4cbc-910e-7873afe5be89":{"roots":{"references":[{"attributes":{"plot":{"id":"6117","subtype":"Figure","type":"Plot"},"ticker":{"id":"6127","type":"BasicTicker"}},"id":"6130","type":"Grid"},{"attributes":{},"id":"6127","type":"BasicTicker"},{"attributes":{},"id":"6124","type":"LinearScale"},{"attributes":{"below":[{"id":"6126","type":"LinearAxis"}],"left":[{"id":"6131","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6126","type":"LinearAxis"},{"id":"6130","type":"Grid"},{"id":"6131","type":"LinearAxis"},{"id":"6135","type":"Grid"},{"id":"6144","type":"BoxAnnotation"},{"id":"6154","type":"GlyphRenderer"}],"title":{"id":"6160","type":"Title"},"toolbar":{"id":"6142","type":"Toolbar"},"x_range":{"id":"6118","type":"DataRange1d"},"x_scale":{"id":"6122","type":"LinearScale"},"y_range":{"id":"6120","type":"DataRange1d"},"y_scale":{"id":"6124","type":"LinearScale"}},"id":"6117","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"6118","type":"DataRange1d"},{"attributes":{"formatter":{"id":"6164","type":"BasicTickFormatter"},"plot":{"id":"6117","subtype":"Figure","type":"Plot"},"ticker":{"id":"6127","type":"BasicTicker"}},"id":"6126","type":"LinearAxis"},{"attributes":{},"id":"6167","type":"Selection"},{"attributes":{"callback":null,"end":4,"js_property_callbacks":{"change:value":[{"id":"6156","type":"CustomJS"}]},"start":0.1,"step":0.1,"title":"power","value":1},"id":"6157","type":"Slider"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"6153","type":"Line"},{"attributes":{"data_source":{"id":"6116","type":"ColumnDataSource"},"glyph":{"id":"6152","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6153","type":"Line"},"selection_glyph":null,"view":{"id":"6155","type":"CDSView"}},"id":"6154","type":"GlyphRenderer"},{"attributes":{},"id":"6168","type":"UnionRenderers"},{"attributes":{},"id":"6136","type":"PanTool"},{"attributes":{},"id":"6137","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"6144","type":"BoxAnnotation"}},"id":"6138","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"6162","type":"BasicTickFormatter"},"plot":{"id":"6117","subtype":"Figure","type":"Plot"},"ticker":{"id":"6132","type":"BasicTicker"}},"id":"6131","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"6160","type":"Title"},{"attributes":{},"id":"6139","type":"SaveTool"},{"attributes":{},"id":"6162","type":"BasicTickFormatter"},{"attributes":{},"id":"6140","type":"ResetTool"},{"attributes":{"children":[{"id":"6158","type":"WidgetBox"},{"id":"6117","subtype":"Figure","type":"Plot"}]},"id":"6159","type":"Column"},{"attributes":{},"id":"6132","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]},"selected":{"id":"6167","type":"Selection"},"selection_policy":{"id":"6168","type":"UnionRenderers"}},"id":"6116","type":"ColumnDataSource"},{"attributes":{},"id":"6141","type":"HelpTool"},{"attributes":{"children":[{"id":"6157","type":"Slider"}]},"id":"6158","type":"WidgetBox"},{"attributes":{"dimension":1,"plot":{"id":"6117","subtype":"Figure","type":"Plot"},"ticker":{"id":"6132","type":"BasicTicker"}},"id":"6135","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6136","type":"PanTool"},{"id":"6137","type":"WheelZoomTool"},{"id":"6138","type":"BoxZoomTool"},{"id":"6139","type":"SaveTool"},{"id":"6140","type":"ResetTool"},{"id":"6141","type":"HelpTool"}]},"id":"6142","type":"Toolbar"},{"attributes":{},"id":"6164","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6120","type":"DataRange1d"},{"attributes":{"source":{"id":"6116","type":"ColumnDataSource"}},"id":"6155","type":"CDSView"},{"attributes":{"args":{"source":{"id":"6116","type":"ColumnDataSource"}},"code":"\\n    var data = source.data;\\n    var f = cb_obj.value\\n    var x = data[&#x27;x&#x27;]\\n    var y = data[&#x27;y&#x27;]\\n    for (var i = 0; i &lt; x.length; i++) {\\n        y[i] = Math.pow(x[i], f)\\n    }\\n    source.change.emit();\\n"},"id":"6156","type":"CustomJS"},{"attributes":{"line_alpha":0.6,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"6152","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6144","type":"BoxAnnotation"},{"attributes":{},"id":"6122","type":"LinearScale"}],"root_ids":["6159"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"f15a27a9-e539-4cbc-910e-7873afe5be89","roots":{"6159":"13b1fec0-1ba1-4fc4-acde-2216276ce190"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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