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
      };var element = document.getElementById("a41d4b0a-5751-4085-9883-cb00e334c80a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a41d4b0a-5751-4085-9883-cb00e334c80a' but no matching script tag was found. ")
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
                var docs_json = {"4caa7c13-fa9c-4e60-8581-69dd280c1248":{"roots":{"references":[{"attributes":{},"id":"271b1156-de25-4161-ab34-78443b1b58b2","type":"BasicTicker"},{"attributes":{"plot":{"id":"089d6962-c7be-4e1b-9bcc-e469366d58d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"9645c658-caf2-43a0-b4c5-c59705ba2c9a","type":"BasicTicker"}},"id":"daf993bd-b4c2-4c0e-ad78-29e37ea97e58","type":"Grid"},{"attributes":{"plot":{"id":"089d6962-c7be-4e1b-9bcc-e469366d58d8","subtype":"Figure","type":"Plot"}},"id":"5bf0fa58-eae8-4f17-9b99-6d2a8b96eaa4","type":"SaveTool"},{"attributes":{"children":[{"id":"02a761b3-484d-4fe7-9d7f-27b9863a7cd0","type":"WidgetBox"},{"id":"089d6962-c7be-4e1b-9bcc-e469366d58d8","subtype":"Figure","type":"Plot"}]},"id":"3870c33f-a358-49df-ba81-767d4fd35c3e","type":"Column"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e7754175-01fd-4a95-ad36-ca3c78b411b5","type":"PanTool"},{"id":"8ac246f2-e0c3-4287-83de-c128cac8fb64","type":"WheelZoomTool"},{"id":"88b88e40-15e5-459d-be9d-93100ea98e6b","type":"BoxZoomTool"},{"id":"5bf0fa58-eae8-4f17-9b99-6d2a8b96eaa4","type":"SaveTool"},{"id":"e7108e56-8f84-4b89-ab56-b36b748d0634","type":"ResetTool"},{"id":"1e4574d2-84e6-49a4-acce-bd02c44dfad4","type":"HelpTool"}]},"id":"10b8bd95-4ca5-4875-a55a-87e5b07d6795","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"089d6962-c7be-4e1b-9bcc-e469366d58d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"271b1156-de25-4161-ab34-78443b1b58b2","type":"BasicTicker"}},"id":"a31c6216-33cc-4597-a49e-f93b03edb56a","type":"Grid"},{"attributes":{"formatter":{"id":"20a09c25-f0a4-4d23-a13b-0704ca7278a4","type":"BasicTickFormatter"},"plot":{"id":"089d6962-c7be-4e1b-9bcc-e469366d58d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"271b1156-de25-4161-ab34-78443b1b58b2","type":"BasicTicker"}},"id":"276b532e-9b2f-4286-977c-04d90171f7d4","type":"LinearAxis"},{"attributes":{},"id":"5c7b5ad4-b351-43a5-b37e-f51e8cc290bd","type":"ToolEvents"},{"attributes":{"formatter":{"id":"6f3dbdd6-dc25-4fa4-9a26-89055b9040ff","type":"BasicTickFormatter"},"plot":{"id":"089d6962-c7be-4e1b-9bcc-e469366d58d8","subtype":"Figure","type":"Plot"},"ticker":{"id":"9645c658-caf2-43a0-b4c5-c59705ba2c9a","type":"BasicTicker"}},"id":"c4eabfe2-5a48-483d-a0e0-2e2e7a656dce","type":"LinearAxis"},{"attributes":{"plot":{"id":"089d6962-c7be-4e1b-9bcc-e469366d58d8","subtype":"Figure","type":"Plot"}},"id":"e7754175-01fd-4a95-ad36-ca3c78b411b5","type":"PanTool"},{"attributes":{"children":[{"id":"7b9bffb8-abce-447b-9232-0daa7883a01a","type":"Slider"}]},"id":"02a761b3-484d-4fe7-9d7f-27b9863a7cd0","type":"WidgetBox"},{"attributes":{"data_source":{"id":"c1d0c990-ea9c-4250-b1c9-73c146ff1a8b","type":"ColumnDataSource"},"glyph":{"id":"3f02fba4-fdb9-41cc-8900-185f96c170e3","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"826f56b3-eafe-4bf6-9638-c9137480df14","type":"Line"},"selection_glyph":null},"id":"de350f1b-d2a0-42e9-8401-ec677ab6a9b0","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"91fcad80-7f4c-4b86-9575-72d4cf61e485","type":"BoxAnnotation"},"plot":{"id":"089d6962-c7be-4e1b-9bcc-e469366d58d8","subtype":"Figure","type":"Plot"}},"id":"88b88e40-15e5-459d-be9d-93100ea98e6b","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"ca38e513-e228-4e08-a619-dbcf3eefe07d","type":"Title"},{"attributes":{},"id":"9645c658-caf2-43a0-b4c5-c59705ba2c9a","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"826f56b3-eafe-4bf6-9638-c9137480df14","type":"Line"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f02fba4-fdb9-41cc-8900-185f96c170e3","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"91fcad80-7f4c-4b86-9575-72d4cf61e485","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"089d6962-c7be-4e1b-9bcc-e469366d58d8","subtype":"Figure","type":"Plot"}},"id":"e7108e56-8f84-4b89-ab56-b36b748d0634","type":"ResetTool"},{"attributes":{"callback":null},"id":"1c8ac567-8e41-483d-a3c5-46e8e6b8f6e9","type":"DataRange1d"},{"attributes":{"callback":null},"id":"9231c792-a935-4723-aac1-7317e30e2143","type":"DataRange1d"},{"attributes":{},"id":"20a09c25-f0a4-4d23-a13b-0704ca7278a4","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"089d6962-c7be-4e1b-9bcc-e469366d58d8","subtype":"Figure","type":"Plot"}},"id":"8ac246f2-e0c3-4287-83de-c128cac8fb64","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"c1d0c990-ea9c-4250-b1c9-73c146ff1a8b","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"c4eabfe2-5a48-483d-a0e0-2e2e7a656dce","type":"LinearAxis"}],"left":[{"id":"276b532e-9b2f-4286-977c-04d90171f7d4","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c4eabfe2-5a48-483d-a0e0-2e2e7a656dce","type":"LinearAxis"},{"id":"daf993bd-b4c2-4c0e-ad78-29e37ea97e58","type":"Grid"},{"id":"276b532e-9b2f-4286-977c-04d90171f7d4","type":"LinearAxis"},{"id":"a31c6216-33cc-4597-a49e-f93b03edb56a","type":"Grid"},{"id":"91fcad80-7f4c-4b86-9575-72d4cf61e485","type":"BoxAnnotation"},{"id":"de350f1b-d2a0-42e9-8401-ec677ab6a9b0","type":"GlyphRenderer"}],"title":{"id":"ca38e513-e228-4e08-a619-dbcf3eefe07d","type":"Title"},"tool_events":{"id":"5c7b5ad4-b351-43a5-b37e-f51e8cc290bd","type":"ToolEvents"},"toolbar":{"id":"10b8bd95-4ca5-4875-a55a-87e5b07d6795","type":"Toolbar"},"x_range":{"id":"9231c792-a935-4723-aac1-7317e30e2143","type":"DataRange1d"},"y_range":{"id":"1c8ac567-8e41-483d-a3c5-46e8e6b8f6e9","type":"DataRange1d"}},"id":"089d6962-c7be-4e1b-9bcc-e469366d58d8","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":4,"js_callbacks":{"change:value":[{"id":"b5f0ce0d-9d71-487d-aba8-a84155e1fa85","type":"CustomJS"}]},"start":0.1,"title":"power","value":1},"id":"7b9bffb8-abce-447b-9232-0daa7883a01a","type":"Slider"},{"attributes":{"plot":{"id":"089d6962-c7be-4e1b-9bcc-e469366d58d8","subtype":"Figure","type":"Plot"}},"id":"1e4574d2-84e6-49a4-acce-bd02c44dfad4","type":"HelpTool"},{"attributes":{},"id":"6f3dbdd6-dc25-4fa4-9a26-89055b9040ff","type":"BasicTickFormatter"},{"attributes":{"args":{"source":{"id":"c1d0c990-ea9c-4250-b1c9-73c146ff1a8b","type":"ColumnDataSource"}},"code":"\n    var data = source.data;\n    var f = cb_obj.value\n    x = data['x']\n    y = data['y']\n    for (i = 0; i < x.length; i++) {\n        y[i] = Math.pow(x[i], f)\n    }\n    source.trigger('change');\n"},"id":"b5f0ce0d-9d71-487d-aba8-a84155e1fa85","type":"CustomJS"}],"root_ids":["3870c33f-a358-49df-ba81-767d4fd35c3e"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"4caa7c13-fa9c-4e60-8581-69dd280c1248","elementid":"a41d4b0a-5751-4085-9883-cb00e334c80a","modelid":"3870c33f-a358-49df-ba81-767d4fd35c3e"}];
                
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
