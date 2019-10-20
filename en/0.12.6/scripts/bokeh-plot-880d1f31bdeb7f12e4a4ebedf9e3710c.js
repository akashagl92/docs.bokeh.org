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
      };var element = document.getElementById("6f8c4713-3e29-469b-90e2-864741ee89b3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6f8c4713-3e29-469b-90e2-864741ee89b3' but no matching script tag was found. ")
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
                var docs_json = {"7f15deae-2a8f-4c38-814a-b6a60bcc5e0c":{"roots":{"references":[{"attributes":{"overlay":{"id":"fe3fb76b-c446-4a29-8a17-f9c71403fcd3","type":"BoxAnnotation"},"plot":{"id":"73cbbd26-1af7-4529-be7a-b4ef9ec869d7","subtype":"Figure","type":"Plot"}},"id":"b870fc2d-f185-4406-aa2e-c3b8fc27c261","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"52d2781d-ede6-46a9-a56a-f586d24ddc28","type":"PanTool"},{"id":"7c1c6c2f-81aa-4ce9-b123-df3a44eb741c","type":"WheelZoomTool"},{"id":"b870fc2d-f185-4406-aa2e-c3b8fc27c261","type":"BoxZoomTool"},{"id":"a4a46629-6291-4ae1-8644-4036f7637521","type":"SaveTool"},{"id":"c8113ec9-e216-4968-82cc-55f708e054c5","type":"ResetTool"},{"id":"558eca56-62cf-442a-80de-0ccbcb3e2c31","type":"HelpTool"}]},"id":"d270fe76-4140-4b41-b390-f01df0b1c10c","type":"Toolbar"},{"attributes":{},"id":"d1cba151-fae9-4b05-be43-f42c1ab52fcd","type":"ToolEvents"},{"attributes":{"callback":null,"end":4,"js_property_callbacks":{"change:value":[{"id":"dfd16aac-5ee3-4c03-b919-a1deadff4576","type":"CustomJS"}]},"start":0.1,"title":"power","value":1},"id":"6c126f54-2b19-47b6-9e65-db3f1921e61c","type":"Slider"},{"attributes":{},"id":"6ea56d38-0d06-46d9-947e-f69c4b1743ad","type":"LinearScale"},{"attributes":{"plot":{"id":"73cbbd26-1af7-4529-be7a-b4ef9ec869d7","subtype":"Figure","type":"Plot"}},"id":"558eca56-62cf-442a-80de-0ccbcb3e2c31","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"6278f5af-53ce-41f5-82a0-6c82904b670e","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"2d9c681a-91a9-49b2-b6f8-733b2734ca7e","type":"Line"},{"attributes":{},"id":"d368b1d6-8ab5-4f8c-b280-78f6251ccd4e","type":"LinearScale"},{"attributes":{},"id":"c50e5589-df81-46c5-9111-e21c673a4a3b","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"66db6ee0-5cb7-46d3-9b43-5d0ca904a8d1","type":"LinearAxis"}],"left":[{"id":"42667c30-0b54-41f0-8367-fe96ed2ccdf3","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"66db6ee0-5cb7-46d3-9b43-5d0ca904a8d1","type":"LinearAxis"},{"id":"ea145723-138d-4090-8265-901eeb87606c","type":"Grid"},{"id":"42667c30-0b54-41f0-8367-fe96ed2ccdf3","type":"LinearAxis"},{"id":"fc32e6e8-e66a-4d97-b368-d6bd78fbc273","type":"Grid"},{"id":"fe3fb76b-c446-4a29-8a17-f9c71403fcd3","type":"BoxAnnotation"},{"id":"af48ab9a-8d2c-44ed-a7f5-957b8a41ec32","type":"GlyphRenderer"}],"title":{"id":"c1f1bd3d-8146-4d3c-90fe-bf0fce237661","type":"Title"},"tool_events":{"id":"d1cba151-fae9-4b05-be43-f42c1ab52fcd","type":"ToolEvents"},"toolbar":{"id":"d270fe76-4140-4b41-b390-f01df0b1c10c","type":"Toolbar"},"x_range":{"id":"2a60ba6d-b44e-41b1-ac82-b7e42d298c47","type":"DataRange1d"},"x_scale":{"id":"d368b1d6-8ab5-4f8c-b280-78f6251ccd4e","type":"LinearScale"},"y_range":{"id":"b07dfb95-cbe0-4d71-a5b0-2beb0586d0bd","type":"DataRange1d"},"y_scale":{"id":"6ea56d38-0d06-46d9-947e-f69c4b1743ad","type":"LinearScale"}},"id":"73cbbd26-1af7-4529-be7a-b4ef9ec869d7","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5eea25aa-e03d-4e3d-81ba-58f98b8bb5be","type":"BasicTickFormatter"},{"attributes":{},"id":"335c030f-6fb3-4ab7-84a5-bcf2fd204fcf","type":"BasicTicker"},{"attributes":{"children":[{"id":"7ae55526-e0d7-48de-8498-5403ca80d238","type":"WidgetBox"},{"id":"73cbbd26-1af7-4529-be7a-b4ef9ec869d7","subtype":"Figure","type":"Plot"}]},"id":"3953a172-f1ac-4996-a739-5bf5840781e7","type":"Column"},{"attributes":{"args":{"source":{"id":"6278f5af-53ce-41f5-82a0-6c82904b670e","type":"ColumnDataSource"}},"code":"\n    var data = source.data;\n    var f = cb_obj.value\n    x = data['x']\n    y = data['y']\n    for (i = 0; i < x.length; i++) {\n        y[i] = Math.pow(x[i], f)\n    }\n    source.change.emit();\n"},"id":"dfd16aac-5ee3-4c03-b919-a1deadff4576","type":"CustomJS"},{"attributes":{"plot":{"id":"73cbbd26-1af7-4529-be7a-b4ef9ec869d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"640eb899-7a8c-4e09-850f-6f7d21cbba17","type":"BasicTicker"}},"id":"ea145723-138d-4090-8265-901eeb87606c","type":"Grid"},{"attributes":{"data_source":{"id":"6278f5af-53ce-41f5-82a0-6c82904b670e","type":"ColumnDataSource"},"glyph":{"id":"2d9c681a-91a9-49b2-b6f8-733b2734ca7e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"84168091-27cf-4881-8400-fcd3624fcd73","type":"Line"},"selection_glyph":null},"id":"af48ab9a-8d2c-44ed-a7f5-957b8a41ec32","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"5eea25aa-e03d-4e3d-81ba-58f98b8bb5be","type":"BasicTickFormatter"},"plot":{"id":"73cbbd26-1af7-4529-be7a-b4ef9ec869d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"640eb899-7a8c-4e09-850f-6f7d21cbba17","type":"BasicTicker"}},"id":"66db6ee0-5cb7-46d3-9b43-5d0ca904a8d1","type":"LinearAxis"},{"attributes":{"formatter":{"id":"c50e5589-df81-46c5-9111-e21c673a4a3b","type":"BasicTickFormatter"},"plot":{"id":"73cbbd26-1af7-4529-be7a-b4ef9ec869d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"335c030f-6fb3-4ab7-84a5-bcf2fd204fcf","type":"BasicTicker"}},"id":"42667c30-0b54-41f0-8367-fe96ed2ccdf3","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"73cbbd26-1af7-4529-be7a-b4ef9ec869d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"335c030f-6fb3-4ab7-84a5-bcf2fd204fcf","type":"BasicTicker"}},"id":"fc32e6e8-e66a-4d97-b368-d6bd78fbc273","type":"Grid"},{"attributes":{"children":[{"id":"6c126f54-2b19-47b6-9e65-db3f1921e61c","type":"Slider"}]},"id":"7ae55526-e0d7-48de-8498-5403ca80d238","type":"WidgetBox"},{"attributes":{"plot":{"id":"73cbbd26-1af7-4529-be7a-b4ef9ec869d7","subtype":"Figure","type":"Plot"}},"id":"52d2781d-ede6-46a9-a56a-f586d24ddc28","type":"PanTool"},{"attributes":{"plot":{"id":"73cbbd26-1af7-4529-be7a-b4ef9ec869d7","subtype":"Figure","type":"Plot"}},"id":"7c1c6c2f-81aa-4ce9-b123-df3a44eb741c","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"73cbbd26-1af7-4529-be7a-b4ef9ec869d7","subtype":"Figure","type":"Plot"}},"id":"c8113ec9-e216-4968-82cc-55f708e054c5","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"84168091-27cf-4881-8400-fcd3624fcd73","type":"Line"},{"attributes":{"callback":null},"id":"2a60ba6d-b44e-41b1-ac82-b7e42d298c47","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fe3fb76b-c446-4a29-8a17-f9c71403fcd3","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"b07dfb95-cbe0-4d71-a5b0-2beb0586d0bd","type":"DataRange1d"},{"attributes":{},"id":"640eb899-7a8c-4e09-850f-6f7d21cbba17","type":"BasicTicker"},{"attributes":{"plot":{"id":"73cbbd26-1af7-4529-be7a-b4ef9ec869d7","subtype":"Figure","type":"Plot"}},"id":"a4a46629-6291-4ae1-8644-4036f7637521","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"c1f1bd3d-8146-4d3c-90fe-bf0fce237661","type":"Title"}],"root_ids":["3953a172-f1ac-4996-a739-5bf5840781e7"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"7f15deae-2a8f-4c38-814a-b6a60bcc5e0c","elementid":"6f8c4713-3e29-469b-90e2-864741ee89b3","modelid":"3953a172-f1ac-4996-a739-5bf5840781e7"}];
                
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
