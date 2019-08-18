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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("0efd9978-1fd6-4edc-a9b7-30f9dbbd5c43");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0efd9978-1fd6-4edc-a9b7-30f9dbbd5c43' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"1a1be58b-1956-480a-ba0e-f0270b74ef3e":{"roots":{"references":[{"attributes":{"formatter":{"id":"fe706552-5d96-45e0-8121-48d45653e90f","type":"BasicTickFormatter"},"plot":{"id":"d814aabc-b9ac-4026-a325-137e9705b806","subtype":"Figure","type":"Plot"},"ticker":{"id":"9421b1fd-601a-47f0-97db-cfa297cdf5f1","type":"BasicTicker"}},"id":"a68f60bf-0ce1-42c4-99a2-d98fc96066ec","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"5d460c02-357a-4835-ba52-d51ea76a9ad7","type":"Line"},{"attributes":{"data_source":{"id":"06a342cd-4201-44e9-913b-cb30594c65ec","type":"ColumnDataSource"},"glyph":{"id":"5d460c02-357a-4835-ba52-d51ea76a9ad7","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"44458b4b-36b5-4dee-b8e2-61c894284241","type":"Line"},"selection_glyph":null},"id":"225461bd-6156-4355-9a3e-3b727eb72686","type":"GlyphRenderer"},{"attributes":{"args":{"source":{"id":"06a342cd-4201-44e9-913b-cb30594c65ec","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.value\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.change.emit();\n    "},"id":"9816490a-40a8-4957-b450-662b83ba4190","type":"CustomJS"},{"attributes":{"children":[{"id":"0ec64a94-f447-4206-89f6-ace373788b14","type":"WidgetBox"},{"id":"d814aabc-b9ac-4026-a325-137e9705b806","subtype":"Figure","type":"Plot"}]},"id":"6c8d2e76-05d4-432a-8317-afbed0ed816e","type":"Column"},{"attributes":{"dimension":1,"plot":{"id":"d814aabc-b9ac-4026-a325-137e9705b806","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ce2e0eb-67bf-474c-9aba-e7065aceb9eb","type":"BasicTicker"}},"id":"145f8f24-42b7-43b1-aa8c-753483e8acd9","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"5a45edc5-e1e6-40ff-aae7-3ff59b61cdf9","type":"Title"},{"attributes":{"callback":{"id":"9816490a-40a8-4957-b450-662b83ba4190","type":"CustomJS"},"end":4,"start":0.1,"title":"power","value":1},"id":"5cd9a62e-1797-403d-846e-af573d62afe0","type":"Slider"},{"attributes":{"plot":{"id":"d814aabc-b9ac-4026-a325-137e9705b806","subtype":"Figure","type":"Plot"}},"id":"e11fe635-5fbc-4976-917e-ff6a7c3ad742","type":"SaveTool"},{"attributes":{"callback":null},"id":"d04a3522-2d3e-40fa-be55-5d6ced503ad3","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"44458b4b-36b5-4dee-b8e2-61c894284241","type":"Line"},{"attributes":{},"id":"913a6622-f350-48cd-9c2d-f9ab3214b558","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d1116335-4448-4473-835d-4bdccb054d49","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"a68f60bf-0ce1-42c4-99a2-d98fc96066ec","type":"LinearAxis"}],"left":[{"id":"1ac9473f-c7de-4cb4-8d9c-7eee39c54c9c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a68f60bf-0ce1-42c4-99a2-d98fc96066ec","type":"LinearAxis"},{"id":"abe9518c-e414-4941-92c4-38461ee65b04","type":"Grid"},{"id":"1ac9473f-c7de-4cb4-8d9c-7eee39c54c9c","type":"LinearAxis"},{"id":"145f8f24-42b7-43b1-aa8c-753483e8acd9","type":"Grid"},{"id":"d1116335-4448-4473-835d-4bdccb054d49","type":"BoxAnnotation"},{"id":"225461bd-6156-4355-9a3e-3b727eb72686","type":"GlyphRenderer"}],"title":{"id":"5a45edc5-e1e6-40ff-aae7-3ff59b61cdf9","type":"Title"},"tool_events":{"id":"fbd78076-1008-4632-a7e3-65fb35a93e9b","type":"ToolEvents"},"toolbar":{"id":"397f7685-30f7-4f17-a9b1-9d495e695ac6","type":"Toolbar"},"x_range":{"id":"bbd4a6bd-0ca6-497b-a244-b405b6608fab","type":"DataRange1d"},"x_scale":{"id":"aeb4addf-6a91-44f6-af9a-3835513ba24e","type":"LinearScale"},"y_range":{"id":"d04a3522-2d3e-40fa-be55-5d6ced503ad3","type":"DataRange1d"},"y_scale":{"id":"913a6622-f350-48cd-9c2d-f9ab3214b558","type":"LinearScale"}},"id":"d814aabc-b9ac-4026-a325-137e9705b806","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"d814aabc-b9ac-4026-a325-137e9705b806","subtype":"Figure","type":"Plot"},"ticker":{"id":"9421b1fd-601a-47f0-97db-cfa297cdf5f1","type":"BasicTicker"}},"id":"abe9518c-e414-4941-92c4-38461ee65b04","type":"Grid"},{"attributes":{"plot":{"id":"d814aabc-b9ac-4026-a325-137e9705b806","subtype":"Figure","type":"Plot"}},"id":"6c131049-7594-4556-a75e-09fedc4b03f4","type":"PanTool"},{"attributes":{"children":[{"id":"5cd9a62e-1797-403d-846e-af573d62afe0","type":"Slider"}]},"id":"0ec64a94-f447-4206-89f6-ace373788b14","type":"WidgetBox"},{"attributes":{"overlay":{"id":"d1116335-4448-4473-835d-4bdccb054d49","type":"BoxAnnotation"},"plot":{"id":"d814aabc-b9ac-4026-a325-137e9705b806","subtype":"Figure","type":"Plot"}},"id":"4c3a4e89-94cd-437c-b876-e9ae7e7b9273","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"bbd4a6bd-0ca6-497b-a244-b405b6608fab","type":"DataRange1d"},{"attributes":{"plot":{"id":"d814aabc-b9ac-4026-a325-137e9705b806","subtype":"Figure","type":"Plot"}},"id":"4d1b546e-098d-4d41-84ef-090c1e2fc680","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6c131049-7594-4556-a75e-09fedc4b03f4","type":"PanTool"},{"id":"e7b266d2-fbd5-483c-b777-2480f39c43bc","type":"WheelZoomTool"},{"id":"4c3a4e89-94cd-437c-b876-e9ae7e7b9273","type":"BoxZoomTool"},{"id":"e11fe635-5fbc-4976-917e-ff6a7c3ad742","type":"SaveTool"},{"id":"928c89bb-bbfb-4439-aef0-3cca100d9504","type":"ResetTool"},{"id":"4d1b546e-098d-4d41-84ef-090c1e2fc680","type":"HelpTool"}]},"id":"397f7685-30f7-4f17-a9b1-9d495e695ac6","type":"Toolbar"},{"attributes":{},"id":"fbd78076-1008-4632-a7e3-65fb35a93e9b","type":"ToolEvents"},{"attributes":{"formatter":{"id":"c0d707f1-045e-482e-9951-4eb8f5710bc3","type":"BasicTickFormatter"},"plot":{"id":"d814aabc-b9ac-4026-a325-137e9705b806","subtype":"Figure","type":"Plot"},"ticker":{"id":"1ce2e0eb-67bf-474c-9aba-e7065aceb9eb","type":"BasicTicker"}},"id":"1ac9473f-c7de-4cb4-8d9c-7eee39c54c9c","type":"LinearAxis"},{"attributes":{},"id":"c0d707f1-045e-482e-9951-4eb8f5710bc3","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d814aabc-b9ac-4026-a325-137e9705b806","subtype":"Figure","type":"Plot"}},"id":"e7b266d2-fbd5-483c-b777-2480f39c43bc","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"06a342cd-4201-44e9-913b-cb30594c65ec","type":"ColumnDataSource"},{"attributes":{},"id":"fe706552-5d96-45e0-8121-48d45653e90f","type":"BasicTickFormatter"},{"attributes":{},"id":"1ce2e0eb-67bf-474c-9aba-e7065aceb9eb","type":"BasicTicker"},{"attributes":{},"id":"9421b1fd-601a-47f0-97db-cfa297cdf5f1","type":"BasicTicker"},{"attributes":{},"id":"aeb4addf-6a91-44f6-af9a-3835513ba24e","type":"LinearScale"},{"attributes":{"plot":{"id":"d814aabc-b9ac-4026-a325-137e9705b806","subtype":"Figure","type":"Plot"}},"id":"928c89bb-bbfb-4439-aef0-3cca100d9504","type":"ResetTool"}],"root_ids":["6c8d2e76-05d4-432a-8317-afbed0ed816e"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"1a1be58b-1956-480a-ba0e-f0270b74ef3e","elementid":"0efd9978-1fd6-4edc-a9b7-30f9dbbd5c43","modelid":"6c8d2e76-05d4-432a-8317-afbed0ed816e"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
