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
      };var element = document.getElementById("5fca1de7-0190-494f-9f46-788c6b5f7f03");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5fca1de7-0190-494f-9f46-788c6b5f7f03' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e49ddf07-cd4e-4f87-8c46-2ecbae4bf4ec":{"roots":{"references":[{"attributes":{},"id":"087e91e7-2a3f-4ee4-a1e6-1c25df518e1d","type":"Selection"},{"attributes":{"callback":null,"end":4,"js_property_callbacks":{"change:value":[{"id":"2233a63c-5f75-4f51-985e-cdef07ec5e4c","type":"CustomJS"}]},"start":0.1,"step":0.1,"title":"power","value":1},"id":"eaa9aab9-18cc-4489-ab55-5c059d2bc193","type":"Slider"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2038bf4f-b65c-4cfd-8fe9-5b8d92b5c300","type":"BoxAnnotation"},{"attributes":{},"id":"5135199f-4b01-43fb-9457-00ea4cd95657","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"2038bf4f-b65c-4cfd-8fe9-5b8d92b5c300","type":"BoxAnnotation"}},"id":"e6f51eac-90d8-4234-9f35-647cf377961a","type":"BoxZoomTool"},{"attributes":{},"id":"c5d9632f-cc04-497b-bbd2-3b9e5e75a3d8","type":"BasicTicker"},{"attributes":{},"id":"80cae281-e19e-4dbc-a6db-1a1a8a084373","type":"WheelZoomTool"},{"attributes":{},"id":"30a3c831-2655-463d-86dc-c879dda0091b","type":"BasicTicker"},{"attributes":{"source":{"id":"d8a1db5d-15f6-4dd2-8f2b-b4e72f59e865","type":"ColumnDataSource"}},"id":"24260e21-dc3f-4ac0-9192-d2c89c9598ec","type":"CDSView"},{"attributes":{"callback":null},"id":"a48e6d1e-f620-44c0-9be4-984c655d3d6e","type":"DataRange1d"},{"attributes":{},"id":"dbdada50-27cc-4df6-a0b9-1acd9479a080","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]},"selected":{"id":"087e91e7-2a3f-4ee4-a1e6-1c25df518e1d","type":"Selection"},"selection_policy":{"id":"37108544-b156-4b34-bd38-d422dae931c8","type":"UnionRenderers"}},"id":"d8a1db5d-15f6-4dd2-8f2b-b4e72f59e865","type":"ColumnDataSource"},{"attributes":{},"id":"3376b948-e69e-4f39-a6b8-f6c1ad907e66","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"39c5f034-d62f-445e-b616-75e80f026691","subtype":"Figure","type":"Plot"},"ticker":{"id":"c5d9632f-cc04-497b-bbd2-3b9e5e75a3d8","type":"BasicTicker"}},"id":"f268b8e1-5b08-4fc6-bed7-c60151618923","type":"Grid"},{"attributes":{"children":[{"id":"8c4e1b91-f07d-4420-ad3e-2b7f5d67e00b","type":"WidgetBox"},{"id":"39c5f034-d62f-445e-b616-75e80f026691","subtype":"Figure","type":"Plot"}]},"id":"ae20f007-1634-4241-8d90-9c8e00e7f022","type":"Column"},{"attributes":{},"id":"351afb86-8b53-4eac-b9e3-dbcaa17ef61a","type":"LinearScale"},{"attributes":{},"id":"fde54c91-e7d0-461d-bbf8-b47c03b02580","type":"ResetTool"},{"attributes":{"plot":{"id":"39c5f034-d62f-445e-b616-75e80f026691","subtype":"Figure","type":"Plot"},"ticker":{"id":"30a3c831-2655-463d-86dc-c879dda0091b","type":"BasicTicker"}},"id":"0bec87c8-4516-40fe-9f2b-9974ea8ec83d","type":"Grid"},{"attributes":{},"id":"65033e8d-399c-4ecd-b97f-9429e0f72b21","type":"HelpTool"},{"attributes":{"callback":null},"id":"0bb92ed6-a9a0-42df-9720-17d646524347","type":"DataRange1d"},{"attributes":{"data_source":{"id":"d8a1db5d-15f6-4dd2-8f2b-b4e72f59e865","type":"ColumnDataSource"},"glyph":{"id":"34b5c169-53a6-4899-a412-18b4c5c57060","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5803f4a1-49d6-4c3c-be7c-a8db281f2013","type":"Line"},"selection_glyph":null,"view":{"id":"24260e21-dc3f-4ac0-9192-d2c89c9598ec","type":"CDSView"}},"id":"47d0a481-91a5-4464-a7e5-72655cc89dfc","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"c9659ef5-a1b4-4c41-a2bf-23e7b721c7af","type":"LinearAxis"}],"left":[{"id":"f5386e1c-730d-42c2-93b6-ce6d28df5e65","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c9659ef5-a1b4-4c41-a2bf-23e7b721c7af","type":"LinearAxis"},{"id":"0bec87c8-4516-40fe-9f2b-9974ea8ec83d","type":"Grid"},{"id":"f5386e1c-730d-42c2-93b6-ce6d28df5e65","type":"LinearAxis"},{"id":"f268b8e1-5b08-4fc6-bed7-c60151618923","type":"Grid"},{"id":"2038bf4f-b65c-4cfd-8fe9-5b8d92b5c300","type":"BoxAnnotation"},{"id":"47d0a481-91a5-4464-a7e5-72655cc89dfc","type":"GlyphRenderer"}],"title":{"id":"23c085e4-164a-491e-811f-65fc55f2a64b","type":"Title"},"toolbar":{"id":"13fe1e1a-6b27-4e74-9b30-e3755d55acd7","type":"Toolbar"},"x_range":{"id":"a48e6d1e-f620-44c0-9be4-984c655d3d6e","type":"DataRange1d"},"x_scale":{"id":"351afb86-8b53-4eac-b9e3-dbcaa17ef61a","type":"LinearScale"},"y_range":{"id":"0bb92ed6-a9a0-42df-9720-17d646524347","type":"DataRange1d"},"y_scale":{"id":"8bdc7bf8-fc05-41c7-b34a-c0e0fcac8d21","type":"LinearScale"}},"id":"39c5f034-d62f-445e-b616-75e80f026691","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"dbdada50-27cc-4df6-a0b9-1acd9479a080","type":"PanTool"},{"id":"80cae281-e19e-4dbc-a6db-1a1a8a084373","type":"WheelZoomTool"},{"id":"e6f51eac-90d8-4234-9f35-647cf377961a","type":"BoxZoomTool"},{"id":"3376b948-e69e-4f39-a6b8-f6c1ad907e66","type":"SaveTool"},{"id":"fde54c91-e7d0-461d-bbf8-b47c03b02580","type":"ResetTool"},{"id":"65033e8d-399c-4ecd-b97f-9429e0f72b21","type":"HelpTool"}]},"id":"13fe1e1a-6b27-4e74-9b30-e3755d55acd7","type":"Toolbar"},{"attributes":{"args":{"source":{"id":"d8a1db5d-15f6-4dd2-8f2b-b4e72f59e865","type":"ColumnDataSource"}},"code":"\\n    var data = source.data;\\n    var f = cb_obj.value\\n    var x = data[&#x27;x&#x27;]\\n    var y = data[&#x27;y&#x27;]\\n    for (var i = 0; i &lt; x.length; i++) {\\n        y[i] = Math.pow(x[i], f)\\n    }\\n    source.change.emit();\\n"},"id":"2233a63c-5f75-4f51-985e-cdef07ec5e4c","type":"CustomJS"},{"attributes":{"formatter":{"id":"cf486809-9861-4da0-9ca9-a7afd704fac2","type":"BasicTickFormatter"},"plot":{"id":"39c5f034-d62f-445e-b616-75e80f026691","subtype":"Figure","type":"Plot"},"ticker":{"id":"c5d9632f-cc04-497b-bbd2-3b9e5e75a3d8","type":"BasicTicker"}},"id":"f5386e1c-730d-42c2-93b6-ce6d28df5e65","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"5803f4a1-49d6-4c3c-be7c-a8db281f2013","type":"Line"},{"attributes":{},"id":"37108544-b156-4b34-bd38-d422dae931c8","type":"UnionRenderers"},{"attributes":{},"id":"8bdc7bf8-fc05-41c7-b34a-c0e0fcac8d21","type":"LinearScale"},{"attributes":{},"id":"cf486809-9861-4da0-9ca9-a7afd704fac2","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"5135199f-4b01-43fb-9457-00ea4cd95657","type":"BasicTickFormatter"},"plot":{"id":"39c5f034-d62f-445e-b616-75e80f026691","subtype":"Figure","type":"Plot"},"ticker":{"id":"30a3c831-2655-463d-86dc-c879dda0091b","type":"BasicTicker"}},"id":"c9659ef5-a1b4-4c41-a2bf-23e7b721c7af","type":"LinearAxis"},{"attributes":{"line_alpha":0.6,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"34b5c169-53a6-4899-a412-18b4c5c57060","type":"Line"},{"attributes":{"children":[{"id":"eaa9aab9-18cc-4489-ab55-5c059d2bc193","type":"Slider"}]},"id":"8c4e1b91-f07d-4420-ad3e-2b7f5d67e00b","type":"WidgetBox"},{"attributes":{"plot":null,"text":""},"id":"23c085e4-164a-491e-811f-65fc55f2a64b","type":"Title"}],"root_ids":["ae20f007-1634-4241-8d90-9c8e00e7f022"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e49ddf07-cd4e-4f87-8c46-2ecbae4bf4ec","roots":{"ae20f007-1634-4241-8d90-9c8e00e7f022":"5fca1de7-0190-494f-9f46-788c6b5f7f03"}}];
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