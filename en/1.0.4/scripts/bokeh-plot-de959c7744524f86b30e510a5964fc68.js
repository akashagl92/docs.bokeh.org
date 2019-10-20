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
      };var element = document.getElementById("5fccbb6c-da03-426e-a1f9-d3ed7a77ae75");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5fccbb6c-da03-426e-a1f9-d3ed7a77ae75' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"102939e9-2dba-48c6-969c-742b4f195ff1":{"roots":{"references":[{"attributes":{"children":[{"id":"6067","type":"Slider"}]},"id":"6068","type":"WidgetBox"},{"attributes":{"line_alpha":0.6,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"6062","type":"Line"},{"attributes":{"formatter":{"id":"6074","type":"BasicTickFormatter"},"plot":{"id":"6027","subtype":"Figure","type":"Plot"},"ticker":{"id":"6037","type":"BasicTicker"}},"id":"6036","type":"LinearAxis"},{"attributes":{"plot":{"id":"6027","subtype":"Figure","type":"Plot"},"ticker":{"id":"6037","type":"BasicTicker"}},"id":"6040","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"6070","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"6063","type":"Line"},{"attributes":{},"id":"6037","type":"BasicTicker"},{"attributes":{"below":[{"id":"6036","type":"LinearAxis"}],"left":[{"id":"6041","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6036","type":"LinearAxis"},{"id":"6040","type":"Grid"},{"id":"6041","type":"LinearAxis"},{"id":"6045","type":"Grid"},{"id":"6054","type":"BoxAnnotation"},{"id":"6064","type":"GlyphRenderer"}],"title":{"id":"6070","type":"Title"},"toolbar":{"id":"6052","type":"Toolbar"},"x_range":{"id":"6028","type":"DataRange1d"},"x_scale":{"id":"6032","type":"LinearScale"},"y_range":{"id":"6030","type":"DataRange1d"},"y_scale":{"id":"6034","type":"LinearScale"}},"id":"6027","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6072","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"6026","type":"ColumnDataSource"},"glyph":{"id":"6062","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6063","type":"Line"},"selection_glyph":null,"view":{"id":"6065","type":"CDSView"}},"id":"6064","type":"GlyphRenderer"},{"attributes":{},"id":"6074","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6028","type":"DataRange1d"},{"attributes":{},"id":"6076","type":"UnionRenderers"},{"attributes":{},"id":"6077","type":"Selection"},{"attributes":{},"id":"6047","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"6027","subtype":"Figure","type":"Plot"},"ticker":{"id":"6042","type":"BasicTicker"}},"id":"6045","type":"Grid"},{"attributes":{"overlay":{"id":"6054","type":"BoxAnnotation"}},"id":"6048","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6054","type":"BoxAnnotation"},{"attributes":{},"id":"6046","type":"PanTool"},{"attributes":{"callback":{"id":"6066","type":"CustomJS"},"end":4,"start":0.1,"step":0.1,"title":"power","value":1},"id":"6067","type":"Slider"},{"attributes":{},"id":"6049","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]},"selected":{"id":"6077","type":"Selection"},"selection_policy":{"id":"6076","type":"UnionRenderers"}},"id":"6026","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"6030","type":"DataRange1d"},{"attributes":{"args":{"source":{"id":"6026","type":"ColumnDataSource"}},"code":"var cb;\\ncb = function flx_cb (source, window) {\\n    var data, f, i, stub1_, x, y;\\n    source = (source === undefined) ? source: source;\\n    window = (window === undefined) ? null: window;\\n    data = source.data;\\n    f = cb_obj.value;\\n    stub1_ = [data[\\"x\\"], data[\\"y\\"]];\\n    x = stub1_[0];y = stub1_[1];\\n    for (i = 0; i &lt; x.length; i += 1) {\\n        y[i] = window.Math.pow(x[i], f);\\n    }\\n    source.change.emit();\\n    return null;\\n};\\ncb(source, window);\\n"},"id":"6066","type":"CustomJS"},{"attributes":{},"id":"6032","type":"LinearScale"},{"attributes":{"source":{"id":"6026","type":"ColumnDataSource"}},"id":"6065","type":"CDSView"},{"attributes":{},"id":"6034","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6046","type":"PanTool"},{"id":"6047","type":"WheelZoomTool"},{"id":"6048","type":"BoxZoomTool"},{"id":"6049","type":"SaveTool"},{"id":"6050","type":"ResetTool"},{"id":"6051","type":"HelpTool"}]},"id":"6052","type":"Toolbar"},{"attributes":{},"id":"6051","type":"HelpTool"},{"attributes":{"children":[{"id":"6068","type":"WidgetBox"},{"id":"6027","subtype":"Figure","type":"Plot"}]},"id":"6069","type":"Column"},{"attributes":{"formatter":{"id":"6072","type":"BasicTickFormatter"},"plot":{"id":"6027","subtype":"Figure","type":"Plot"},"ticker":{"id":"6042","type":"BasicTicker"}},"id":"6041","type":"LinearAxis"},{"attributes":{},"id":"6050","type":"ResetTool"},{"attributes":{},"id":"6042","type":"BasicTicker"}],"root_ids":["6069"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"102939e9-2dba-48c6-969c-742b4f195ff1","roots":{"6069":"5fccbb6c-da03-426e-a1f9-d3ed7a77ae75"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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