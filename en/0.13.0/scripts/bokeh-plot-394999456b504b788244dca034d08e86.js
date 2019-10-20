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
      };var element = document.getElementById("1401a2a7-54ba-434b-a6e9-5ecaddcc287e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1401a2a7-54ba-434b-a6e9-5ecaddcc287e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"0bdfd158-d12f-4d26-9078-f94cd1543e59":{"roots":{"references":[{"attributes":{},"id":"71704b1b-0d64-4568-86fe-97fb1646e41d","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"87f4d73d-e704-4ac8-af6a-c60f3cc28bda","type":"ColumnDataSource"},"glyph":{"id":"7371acae-272a-448f-871f-cbb99d71590a","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3c7d1906-8139-4610-8a2c-d3d741e43e0c","type":"Line"},"selection_glyph":null,"view":{"id":"ef4094be-2c85-45f4-87c1-47a26e968b10","type":"CDSView"}},"id":"c31e4829-d16e-45bf-a32b-b325ce0bd53a","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"05560eef-51ef-40b4-9bac-9152f9f10273","type":"BasicTickFormatter"},"plot":{"id":"e1ceb39b-6262-47a6-891c-c31a14f448ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbfd24f5-e822-4329-92a7-342860ad9a8c","type":"BasicTicker"}},"id":"06159163-431f-4e90-9fbc-9db62051f792","type":"LinearAxis"},{"attributes":{"children":[{"id":"5e5fc5cc-5607-430c-b63e-c657df4a2907","type":"Slider"}]},"id":"2a0f278e-0ee7-491f-af54-b62752ba5a16","type":"WidgetBox"},{"attributes":{},"id":"33d97b53-5196-4d32-b438-5eb73ebf7f5d","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0a8fb2ac-6236-4660-bc1c-d10aa9c63312","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"dadf9cdf-0426-4e35-b081-151e85a48a57","type":"Title"},{"attributes":{},"id":"05560eef-51ef-40b4-9bac-9152f9f10273","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"2a0f278e-0ee7-491f-af54-b62752ba5a16","type":"WidgetBox"},{"id":"e1ceb39b-6262-47a6-891c-c31a14f448ef","subtype":"Figure","type":"Plot"}]},"id":"789c276d-8876-4c6d-9365-72f2111f45a5","type":"Column"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"3c7d1906-8139-4610-8a2c-d3d741e43e0c","type":"Line"},{"attributes":{"formatter":{"id":"cdb4016b-c97e-48db-b3e9-53cd85bed811","type":"BasicTickFormatter"},"plot":{"id":"e1ceb39b-6262-47a6-891c-c31a14f448ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"151e5992-5f4a-4602-adc4-9f907c2cc9d4","type":"BasicTicker"}},"id":"05b8fc63-70e2-44c2-9f83-8cbf4f005ffb","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"e1ceb39b-6262-47a6-891c-c31a14f448ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbfd24f5-e822-4329-92a7-342860ad9a8c","type":"BasicTicker"}},"id":"d3b62b3b-e2b4-436d-8e1e-7faf4718eb6e","type":"Grid"},{"attributes":{},"id":"47e3e0d0-4df5-4946-be9b-ad9841cc1f98","type":"ResetTool"},{"attributes":{"callback":null},"id":"7614ca42-1f24-49ac-a85f-3b56c67be828","type":"DataRange1d"},{"attributes":{},"id":"bbfd24f5-e822-4329-92a7-342860ad9a8c","type":"BasicTicker"},{"attributes":{},"id":"759dc54b-6e12-4eb5-9799-a48d145d0971","type":"PanTool"},{"attributes":{},"id":"151e5992-5f4a-4602-adc4-9f907c2cc9d4","type":"BasicTicker"},{"attributes":{},"id":"cd4edade-91f5-4c78-bcd1-be55c828eb85","type":"WheelZoomTool"},{"attributes":{"source":{"id":"87f4d73d-e704-4ac8-af6a-c60f3cc28bda","type":"ColumnDataSource"}},"id":"ef4094be-2c85-45f4-87c1-47a26e968b10","type":"CDSView"},{"attributes":{"below":[{"id":"05b8fc63-70e2-44c2-9f83-8cbf4f005ffb","type":"LinearAxis"}],"left":[{"id":"06159163-431f-4e90-9fbc-9db62051f792","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"05b8fc63-70e2-44c2-9f83-8cbf4f005ffb","type":"LinearAxis"},{"id":"b5583227-14b7-4f8c-a63d-d07b181124e3","type":"Grid"},{"id":"06159163-431f-4e90-9fbc-9db62051f792","type":"LinearAxis"},{"id":"d3b62b3b-e2b4-436d-8e1e-7faf4718eb6e","type":"Grid"},{"id":"0a8fb2ac-6236-4660-bc1c-d10aa9c63312","type":"BoxAnnotation"},{"id":"c31e4829-d16e-45bf-a32b-b325ce0bd53a","type":"GlyphRenderer"}],"title":{"id":"dadf9cdf-0426-4e35-b081-151e85a48a57","type":"Title"},"toolbar":{"id":"d47a4df1-c345-48d8-9e34-790b1a5cd2cc","type":"Toolbar"},"x_range":{"id":"7614ca42-1f24-49ac-a85f-3b56c67be828","type":"DataRange1d"},"x_scale":{"id":"20eb92d4-7506-4aff-adfa-0dd357bf6174","type":"LinearScale"},"y_range":{"id":"46cef844-6f4c-42f2-b9ec-60bc4df2ed74","type":"DataRange1d"},"y_scale":{"id":"596ccba2-db0f-4099-a9fe-3efd5f996196","type":"LinearScale"}},"id":"e1ceb39b-6262-47a6-891c-c31a14f448ef","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"0a8fb2ac-6236-4660-bc1c-d10aa9c63312","type":"BoxAnnotation"}},"id":"1dac6dc6-04d2-400c-b801-4cfec9bf7e5f","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"759dc54b-6e12-4eb5-9799-a48d145d0971","type":"PanTool"},{"id":"cd4edade-91f5-4c78-bcd1-be55c828eb85","type":"WheelZoomTool"},{"id":"1dac6dc6-04d2-400c-b801-4cfec9bf7e5f","type":"BoxZoomTool"},{"id":"ffbdeffb-6fcc-48cc-ab29-6bedf66d502b","type":"SaveTool"},{"id":"47e3e0d0-4df5-4946-be9b-ad9841cc1f98","type":"ResetTool"},{"id":"33d97b53-5196-4d32-b438-5eb73ebf7f5d","type":"HelpTool"}]},"id":"d47a4df1-c345-48d8-9e34-790b1a5cd2cc","type":"Toolbar"},{"attributes":{},"id":"20eb92d4-7506-4aff-adfa-0dd357bf6174","type":"LinearScale"},{"attributes":{"callback":{"id":"8673f8a7-6d69-4884-b0d1-99540cde5835","type":"CustomJS"},"end":4,"start":0.1,"step":0.1,"title":"power","value":1},"id":"5e5fc5cc-5607-430c-b63e-c657df4a2907","type":"Slider"},{"attributes":{},"id":"ffbdeffb-6fcc-48cc-ab29-6bedf66d502b","type":"SaveTool"},{"attributes":{"plot":{"id":"e1ceb39b-6262-47a6-891c-c31a14f448ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"151e5992-5f4a-4602-adc4-9f907c2cc9d4","type":"BasicTicker"}},"id":"b5583227-14b7-4f8c-a63d-d07b181124e3","type":"Grid"},{"attributes":{},"id":"cdb4016b-c97e-48db-b3e9-53cd85bed811","type":"BasicTickFormatter"},{"attributes":{},"id":"596ccba2-db0f-4099-a9fe-3efd5f996196","type":"LinearScale"},{"attributes":{},"id":"a1d27b84-9d8d-4e8b-9f8a-103cbd37561b","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]},"selected":{"id":"a1d27b84-9d8d-4e8b-9f8a-103cbd37561b","type":"Selection"},"selection_policy":{"id":"71704b1b-0d64-4568-86fe-97fb1646e41d","type":"UnionRenderers"}},"id":"87f4d73d-e704-4ac8-af6a-c60f3cc28bda","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.6,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"7371acae-272a-448f-871f-cbb99d71590a","type":"Line"},{"attributes":{"callback":null},"id":"46cef844-6f4c-42f2-b9ec-60bc4df2ed74","type":"DataRange1d"},{"attributes":{"args":{"source":{"id":"87f4d73d-e704-4ac8-af6a-c60f3cc28bda","type":"ColumnDataSource"}},"code":"\\n        var data = source.data;\\n        var f = cb_obj.value\\n        var x = data[&#x27;x&#x27;]\\n        var y = data[&#x27;y&#x27;]\\n        for (var i = 0; i &lt; x.length; i++) {\\n            y[i] = Math.pow(x[i], f)\\n        }\\n        source.change.emit();\\n    "},"id":"8673f8a7-6d69-4884-b0d1-99540cde5835","type":"CustomJS"}],"root_ids":["789c276d-8876-4c6d-9365-72f2111f45a5"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"0bdfd158-d12f-4d26-9078-f94cd1543e59","roots":{"789c276d-8876-4c6d-9365-72f2111f45a5":"1401a2a7-54ba-434b-a6e9-5ecaddcc287e"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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