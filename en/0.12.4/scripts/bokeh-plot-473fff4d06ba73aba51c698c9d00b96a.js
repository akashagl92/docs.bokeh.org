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
      };var element = document.getElementById("1184f832-5f0f-4598-9ff7-204762a852ec");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1184f832-5f0f-4598-9ff7-204762a852ec' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"44d2c169-64c9-497f-a451-142b379299d6":{"roots":{"references":[{"attributes":{},"id":"5e51319a-c62d-4248-8506-7aad83fe97af","type":"BasicTickFormatter"},{"attributes":{"args":{"source":{"id":"524ba6c5-2979-49c4-b987-2a081fc440a0","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.value\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.trigger('change');\n    "},"id":"62dc352f-ee3b-40e7-b8f5-ac69508f6684","type":"CustomJS"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"d3e893f8-7c4a-4b03-b95b-aff1b9e5c7bf","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"33dba648-3528-4e9e-9f57-0b96cc5faa40","subtype":"Figure","type":"Plot"},"ticker":{"id":"9cc0d0fe-2628-4128-9f2c-c7de0a6df6c7","type":"BasicTicker"}},"id":"8dcbf1fc-8da8-4561-9a52-177b15f1cf14","type":"Grid"},{"attributes":{"overlay":{"id":"729deda9-844e-411f-baf7-51b051ae60ae","type":"BoxAnnotation"},"plot":{"id":"33dba648-3528-4e9e-9f57-0b96cc5faa40","subtype":"Figure","type":"Plot"}},"id":"162b5099-f901-4c49-8fc2-0980512ba16b","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"33dba648-3528-4e9e-9f57-0b96cc5faa40","subtype":"Figure","type":"Plot"}},"id":"30c0db1f-191a-4daa-859c-351b27cefe6b","type":"PanTool"},{"attributes":{"formatter":{"id":"5e51319a-c62d-4248-8506-7aad83fe97af","type":"BasicTickFormatter"},"plot":{"id":"33dba648-3528-4e9e-9f57-0b96cc5faa40","subtype":"Figure","type":"Plot"},"ticker":{"id":"9cc0d0fe-2628-4128-9f2c-c7de0a6df6c7","type":"BasicTicker"}},"id":"cfcf2a9a-ffd5-4dad-a1cf-413277c90f9f","type":"LinearAxis"},{"attributes":{"plot":{"id":"33dba648-3528-4e9e-9f57-0b96cc5faa40","subtype":"Figure","type":"Plot"}},"id":"a1070a37-3c9b-4f03-8db7-080eb5e56719","type":"HelpTool"},{"attributes":{},"id":"da34291c-cbc5-43c0-9b54-81d134ca98d5","type":"BasicTicker"},{"attributes":{},"id":"70d0ee83-cc61-46b2-b5f5-fb32ee3b3a2c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"33dba648-3528-4e9e-9f57-0b96cc5faa40","subtype":"Figure","type":"Plot"}},"id":"a28d8886-5d37-42e5-baa9-c8e0e5da2bd4","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"0cf63a6c-b832-41ed-8921-441518aac2a6","type":"Slider"}]},"id":"1c9fd74e-a29b-4ca2-95f9-0b5f36d7f019","type":"WidgetBox"},{"attributes":{"plot":{"id":"33dba648-3528-4e9e-9f57-0b96cc5faa40","subtype":"Figure","type":"Plot"}},"id":"602c9882-ad9d-4a83-a37f-497f012e277b","type":"ResetTool"},{"attributes":{"data_source":{"id":"524ba6c5-2979-49c4-b987-2a081fc440a0","type":"ColumnDataSource"},"glyph":{"id":"d3e893f8-7c4a-4b03-b95b-aff1b9e5c7bf","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"7972d137-c571-4fd8-b524-ffaef1c53745","type":"Line"},"selection_glyph":null},"id":"988a3120-2b0b-4bcc-8e4d-c8427f828b71","type":"GlyphRenderer"},{"attributes":{},"id":"9cc0d0fe-2628-4128-9f2c-c7de0a6df6c7","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"30c0db1f-191a-4daa-859c-351b27cefe6b","type":"PanTool"},{"id":"a28d8886-5d37-42e5-baa9-c8e0e5da2bd4","type":"WheelZoomTool"},{"id":"162b5099-f901-4c49-8fc2-0980512ba16b","type":"BoxZoomTool"},{"id":"789f1e10-46cf-4043-bd9c-78282f0f6f35","type":"SaveTool"},{"id":"602c9882-ad9d-4a83-a37f-497f012e277b","type":"ResetTool"},{"id":"a1070a37-3c9b-4f03-8db7-080eb5e56719","type":"HelpTool"}]},"id":"de5dcdb2-ffa5-486f-9cab-e4617229e5f0","type":"Toolbar"},{"attributes":{"below":[{"id":"816bbd45-a0b0-4341-80fc-74721c759ca7","type":"LinearAxis"}],"left":[{"id":"cfcf2a9a-ffd5-4dad-a1cf-413277c90f9f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"816bbd45-a0b0-4341-80fc-74721c759ca7","type":"LinearAxis"},{"id":"a870775f-8074-441c-92c7-73ca16138074","type":"Grid"},{"id":"cfcf2a9a-ffd5-4dad-a1cf-413277c90f9f","type":"LinearAxis"},{"id":"8dcbf1fc-8da8-4561-9a52-177b15f1cf14","type":"Grid"},{"id":"729deda9-844e-411f-baf7-51b051ae60ae","type":"BoxAnnotation"},{"id":"988a3120-2b0b-4bcc-8e4d-c8427f828b71","type":"GlyphRenderer"}],"title":{"id":"a84fe68f-32c1-487e-947e-d04f37381d04","type":"Title"},"tool_events":{"id":"9f9c3669-2e30-4b21-bd10-06a5e8871114","type":"ToolEvents"},"toolbar":{"id":"de5dcdb2-ffa5-486f-9cab-e4617229e5f0","type":"Toolbar"},"x_range":{"id":"6a0d74d4-fe20-42a2-ba69-18be969d19dc","type":"DataRange1d"},"y_range":{"id":"a4ae1908-5f74-4700-a8d7-aca69bf93587","type":"DataRange1d"}},"id":"33dba648-3528-4e9e-9f57-0b96cc5faa40","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"a4ae1908-5f74-4700-a8d7-aca69bf93587","type":"DataRange1d"},{"attributes":{"plot":{"id":"33dba648-3528-4e9e-9f57-0b96cc5faa40","subtype":"Figure","type":"Plot"}},"id":"789f1e10-46cf-4043-bd9c-78282f0f6f35","type":"SaveTool"},{"attributes":{"plot":{"id":"33dba648-3528-4e9e-9f57-0b96cc5faa40","subtype":"Figure","type":"Plot"},"ticker":{"id":"da34291c-cbc5-43c0-9b54-81d134ca98d5","type":"BasicTicker"}},"id":"a870775f-8074-441c-92c7-73ca16138074","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"729deda9-844e-411f-baf7-51b051ae60ae","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"1c9fd74e-a29b-4ca2-95f9-0b5f36d7f019","type":"WidgetBox"},{"id":"33dba648-3528-4e9e-9f57-0b96cc5faa40","subtype":"Figure","type":"Plot"}]},"id":"7391a3d1-257b-4f96-a2ab-91741fb096a9","type":"Column"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"524ba6c5-2979-49c4-b987-2a081fc440a0","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"70d0ee83-cc61-46b2-b5f5-fb32ee3b3a2c","type":"BasicTickFormatter"},"plot":{"id":"33dba648-3528-4e9e-9f57-0b96cc5faa40","subtype":"Figure","type":"Plot"},"ticker":{"id":"da34291c-cbc5-43c0-9b54-81d134ca98d5","type":"BasicTicker"}},"id":"816bbd45-a0b0-4341-80fc-74721c759ca7","type":"LinearAxis"},{"attributes":{},"id":"9f9c3669-2e30-4b21-bd10-06a5e8871114","type":"ToolEvents"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"7972d137-c571-4fd8-b524-ffaef1c53745","type":"Line"},{"attributes":{"callback":null},"id":"6a0d74d4-fe20-42a2-ba69-18be969d19dc","type":"DataRange1d"},{"attributes":{"callback":{"id":"62dc352f-ee3b-40e7-b8f5-ac69508f6684","type":"CustomJS"},"end":4,"start":0.1,"title":"power","value":1},"id":"0cf63a6c-b832-41ed-8921-441518aac2a6","type":"Slider"},{"attributes":{"plot":null,"text":""},"id":"a84fe68f-32c1-487e-947e-d04f37381d04","type":"Title"}],"root_ids":["7391a3d1-257b-4f96-a2ab-91741fb096a9"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"44d2c169-64c9-497f-a451-142b379299d6","elementid":"1184f832-5f0f-4598-9ff7-204762a852ec","modelid":"7391a3d1-257b-4f96-a2ab-91741fb096a9"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
