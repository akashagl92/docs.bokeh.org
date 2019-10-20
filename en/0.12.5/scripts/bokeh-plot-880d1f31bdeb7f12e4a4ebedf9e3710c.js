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
      };var element = document.getElementById("2b95febb-5586-46e3-8ae5-6e34885429fb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2b95febb-5586-46e3-8ae5-6e34885429fb' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"d23b5931-1363-44d5-9d1f-274c22724dfe":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"1df3cb7a-59a1-412e-bfae-238b4703306d","type":"Line"},{"attributes":{"below":[{"id":"d101ac24-dd62-42db-abb9-f8f0625aa22a","type":"LinearAxis"}],"left":[{"id":"9bdd50b6-ce28-40b0-b4a0-7ffdc5800032","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d101ac24-dd62-42db-abb9-f8f0625aa22a","type":"LinearAxis"},{"id":"e46c102e-392f-49dd-a72c-4e486d69b8f5","type":"Grid"},{"id":"9bdd50b6-ce28-40b0-b4a0-7ffdc5800032","type":"LinearAxis"},{"id":"2e5f3df0-1e29-4153-99f9-cadca9840767","type":"Grid"},{"id":"e6db2f46-35cc-4b98-8690-9f08f0c2076b","type":"BoxAnnotation"},{"id":"6d145a3e-9bd3-4e9b-995d-9182e77d6ebc","type":"GlyphRenderer"}],"title":{"id":"96a683fd-ab0b-4c05-bdc9-317091d65d7c","type":"Title"},"tool_events":{"id":"0e7f34e1-5fec-4222-b764-626a3b0cdcc0","type":"ToolEvents"},"toolbar":{"id":"ebc70c74-a849-4af6-b160-b0b6f8b1cbb9","type":"Toolbar"},"x_range":{"id":"a50bbc26-fcc0-4eeb-b5f0-a19e0e9a885b","type":"DataRange1d"},"y_range":{"id":"8bf0c57b-230e-47b9-93f4-c8227df94502","type":"DataRange1d"}},"id":"c19fae3d-5c7a-4eb3-a11a-bb4cbbef65a4","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"dd2926ae-b08c-483b-ac97-485df88a2347","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"e6db2f46-35cc-4b98-8690-9f08f0c2076b","type":"BoxAnnotation"},"plot":{"id":"c19fae3d-5c7a-4eb3-a11a-bb4cbbef65a4","subtype":"Figure","type":"Plot"}},"id":"5d277f33-b32a-4c22-8b84-483dc09ed098","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"96a683fd-ab0b-4c05-bdc9-317091d65d7c","type":"Title"},{"attributes":{"callback":null,"end":4,"js_property_callbacks":{"change:value":[{"id":"6e2906f8-4968-415a-aac8-eaca0c4e312a","type":"CustomJS"}]},"start":0.1,"title":"power","value":1},"id":"dc7a3fe4-ff60-4320-9303-6571eb715765","type":"Slider"},{"attributes":{"formatter":{"id":"86b87190-03af-49fe-8a0b-dabc0fe3abeb","type":"BasicTickFormatter"},"plot":{"id":"c19fae3d-5c7a-4eb3-a11a-bb4cbbef65a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"75913a64-d353-47eb-ac02-2fe5a3c41ea4","type":"BasicTicker"}},"id":"d101ac24-dd62-42db-abb9-f8f0625aa22a","type":"LinearAxis"},{"attributes":{"formatter":{"id":"dd2926ae-b08c-483b-ac97-485df88a2347","type":"BasicTickFormatter"},"plot":{"id":"c19fae3d-5c7a-4eb3-a11a-bb4cbbef65a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"1485cd3d-66c4-43b8-9b52-a44055c7b293","type":"BasicTicker"}},"id":"9bdd50b6-ce28-40b0-b4a0-7ffdc5800032","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"c19fae3d-5c7a-4eb3-a11a-bb4cbbef65a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"1485cd3d-66c4-43b8-9b52-a44055c7b293","type":"BasicTicker"}},"id":"2e5f3df0-1e29-4153-99f9-cadca9840767","type":"Grid"},{"attributes":{"callback":null},"id":"8bf0c57b-230e-47b9-93f4-c8227df94502","type":"DataRange1d"},{"attributes":{"plot":{"id":"c19fae3d-5c7a-4eb3-a11a-bb4cbbef65a4","subtype":"Figure","type":"Plot"}},"id":"9b9fc237-aca2-4a21-82f4-a1e4fc42a28d","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e8fa893f-39a9-4eda-b58d-1a110c226a62","type":"PanTool"},{"id":"3cd81f0d-e05a-42dd-bed8-5213246371db","type":"WheelZoomTool"},{"id":"5d277f33-b32a-4c22-8b84-483dc09ed098","type":"BoxZoomTool"},{"id":"14f240bc-6f91-4f13-83d2-39340ed1e7d3","type":"SaveTool"},{"id":"6030ddd9-47dc-4838-ad09-b3152e8f25de","type":"ResetTool"},{"id":"9b9fc237-aca2-4a21-82f4-a1e4fc42a28d","type":"HelpTool"}]},"id":"ebc70c74-a849-4af6-b160-b0b6f8b1cbb9","type":"Toolbar"},{"attributes":{"plot":{"id":"c19fae3d-5c7a-4eb3-a11a-bb4cbbef65a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"75913a64-d353-47eb-ac02-2fe5a3c41ea4","type":"BasicTicker"}},"id":"e46c102e-392f-49dd-a72c-4e486d69b8f5","type":"Grid"},{"attributes":{"children":[{"id":"2d50542c-53b1-4e6d-b6fa-1c54e0baeeef","type":"WidgetBox"},{"id":"c19fae3d-5c7a-4eb3-a11a-bb4cbbef65a4","subtype":"Figure","type":"Plot"}]},"id":"879a91a7-fb35-4a28-b8a1-c3f1fed181d3","type":"Column"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"80b54ebe-7da8-4027-9351-87b700e49bb7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c19fae3d-5c7a-4eb3-a11a-bb4cbbef65a4","subtype":"Figure","type":"Plot"}},"id":"6030ddd9-47dc-4838-ad09-b3152e8f25de","type":"ResetTool"},{"attributes":{},"id":"86b87190-03af-49fe-8a0b-dabc0fe3abeb","type":"BasicTickFormatter"},{"attributes":{},"id":"75913a64-d353-47eb-ac02-2fe5a3c41ea4","type":"BasicTicker"},{"attributes":{"children":[{"id":"dc7a3fe4-ff60-4320-9303-6571eb715765","type":"Slider"}]},"id":"2d50542c-53b1-4e6d-b6fa-1c54e0baeeef","type":"WidgetBox"},{"attributes":{"plot":{"id":"c19fae3d-5c7a-4eb3-a11a-bb4cbbef65a4","subtype":"Figure","type":"Plot"}},"id":"e8fa893f-39a9-4eda-b58d-1a110c226a62","type":"PanTool"},{"attributes":{"callback":null},"id":"a50bbc26-fcc0-4eeb-b5f0-a19e0e9a885b","type":"DataRange1d"},{"attributes":{"data_source":{"id":"80b54ebe-7da8-4027-9351-87b700e49bb7","type":"ColumnDataSource"},"glyph":{"id":"1df3cb7a-59a1-412e-bfae-238b4703306d","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b6dc07bf-29e1-4e9d-a410-33cab6483317","type":"Line"},"selection_glyph":null},"id":"6d145a3e-9bd3-4e9b-995d-9182e77d6ebc","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c19fae3d-5c7a-4eb3-a11a-bb4cbbef65a4","subtype":"Figure","type":"Plot"}},"id":"3cd81f0d-e05a-42dd-bed8-5213246371db","type":"WheelZoomTool"},{"attributes":{},"id":"0e7f34e1-5fec-4222-b764-626a3b0cdcc0","type":"ToolEvents"},{"attributes":{"args":{"source":{"id":"80b54ebe-7da8-4027-9351-87b700e49bb7","type":"ColumnDataSource"}},"code":"\n    var data = source.data;\n    var f = cb_obj.value\n    x = data['x']\n    y = data['y']\n    for (i = 0; i < x.length; i++) {\n        y[i] = Math.pow(x[i], f)\n    }\n    source.trigger('change');\n"},"id":"6e2906f8-4968-415a-aac8-eaca0c4e312a","type":"CustomJS"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e6db2f46-35cc-4b98-8690-9f08f0c2076b","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"b6dc07bf-29e1-4e9d-a410-33cab6483317","type":"Line"},{"attributes":{},"id":"1485cd3d-66c4-43b8-9b52-a44055c7b293","type":"BasicTicker"},{"attributes":{"plot":{"id":"c19fae3d-5c7a-4eb3-a11a-bb4cbbef65a4","subtype":"Figure","type":"Plot"}},"id":"14f240bc-6f91-4f13-83d2-39340ed1e7d3","type":"SaveTool"}],"root_ids":["879a91a7-fb35-4a28-b8a1-c3f1fed181d3"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"d23b5931-1363-44d5-9d1f-274c22724dfe","elementid":"2b95febb-5586-46e3-8ae5-6e34885429fb","modelid":"879a91a7-fb35-4a28-b8a1-c3f1fed181d3"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
