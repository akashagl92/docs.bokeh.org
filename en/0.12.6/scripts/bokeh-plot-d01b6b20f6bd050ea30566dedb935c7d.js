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
      };var element = document.getElementById("d5065158-3a86-4880-af2f-70837f17fab7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd5065158-3a86-4880-af2f-70837f17fab7' but no matching script tag was found. ")
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
                var docs_json = {"d427f4c9-89ad-440f-8b31-97ad22d2cf2f":{"roots":{"references":[{"attributes":{},"id":"fa869877-7f5c-46da-863d-7d82e32a09fa","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"01a4a6e0-a4a5-49e4-bca2-34da6ed0d959","type":"BasicTickFormatter"},"plot":{"id":"88364260-cd70-41e9-9149-2e7bdef5a708","subtype":"Figure","type":"Plot"},"ticker":{"id":"925f1dcb-2b52-4108-85ca-4b6aba4b4266","type":"BasicTicker"}},"id":"44eb1935-d302-4fe6-b128-5d8f4ea637a1","type":"LinearAxis"},{"attributes":{"plot":{"id":"88364260-cd70-41e9-9149-2e7bdef5a708","subtype":"Figure","type":"Plot"}},"id":"5f4814da-5b18-42f0-be6e-1520d08a5c72","type":"PanTool"},{"attributes":{"plot":{"id":"88364260-cd70-41e9-9149-2e7bdef5a708","subtype":"Figure","type":"Plot"}},"id":"4eb376a0-d406-46fa-8949-f54236352e75","type":"SaveTool"},{"attributes":{"plot":{"id":"88364260-cd70-41e9-9149-2e7bdef5a708","subtype":"Figure","type":"Plot"},"ticker":{"id":"925f1dcb-2b52-4108-85ca-4b6aba4b4266","type":"BasicTicker"}},"id":"28ed0de7-eda3-4e0f-a2e4-6a14d7050034","type":"Grid"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"4439181e-e601-4c9f-9575-bcec6afd34a5","type":"Line"},{"attributes":{},"id":"d707b152-68d1-4d4a-81b8-face9c6a6139","type":"LinearScale"},{"attributes":{"callback":null},"id":"1bac6685-b21b-43aa-97b6-db4e934df469","type":"DataRange1d"},{"attributes":{},"id":"01a4a6e0-a4a5-49e4-bca2-34da6ed0d959","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"44eb1935-d302-4fe6-b128-5d8f4ea637a1","type":"LinearAxis"}],"left":[{"id":"cf43bc6e-dc41-44c4-97dc-000d8e85ca1f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"44eb1935-d302-4fe6-b128-5d8f4ea637a1","type":"LinearAxis"},{"id":"28ed0de7-eda3-4e0f-a2e4-6a14d7050034","type":"Grid"},{"id":"cf43bc6e-dc41-44c4-97dc-000d8e85ca1f","type":"LinearAxis"},{"id":"a3677db1-44ce-49b9-9118-e790db861f13","type":"Grid"},{"id":"bd47282b-f9a9-43fe-9463-32ac2a67a68e","type":"BoxAnnotation"},{"id":"f87272c7-62bf-4798-9b06-c4de4da7358e","type":"GlyphRenderer"}],"title":{"id":"46e53543-99d6-46f6-ae81-b61126cd1f81","type":"Title"},"tool_events":{"id":"8410b44e-78ba-4791-8b0b-5864ac947a13","type":"ToolEvents"},"toolbar":{"id":"b750db46-d337-4c61-abf6-cc8565bf9033","type":"Toolbar"},"x_range":{"id":"a15c22de-cbe0-4f42-841b-bccb432bca90","type":"DataRange1d"},"x_scale":{"id":"9b02496f-ac81-46ba-af12-a57c38997d4c","type":"LinearScale"},"y_range":{"id":"1bac6685-b21b-43aa-97b6-db4e934df469","type":"DataRange1d"},"y_scale":{"id":"d707b152-68d1-4d4a-81b8-face9c6a6139","type":"LinearScale"}},"id":"88364260-cd70-41e9-9149-2e7bdef5a708","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"88364260-cd70-41e9-9149-2e7bdef5a708","subtype":"Figure","type":"Plot"},"ticker":{"id":"6379acc2-09ae-4b30-8030-4be1b8306274","type":"BasicTicker"}},"id":"a3677db1-44ce-49b9-9118-e790db861f13","type":"Grid"},{"attributes":{"callback":null},"id":"a15c22de-cbe0-4f42-841b-bccb432bca90","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"46e53543-99d6-46f6-ae81-b61126cd1f81","type":"Title"},{"attributes":{},"id":"925f1dcb-2b52-4108-85ca-4b6aba4b4266","type":"BasicTicker"},{"attributes":{"plot":{"id":"88364260-cd70-41e9-9149-2e7bdef5a708","subtype":"Figure","type":"Plot"}},"id":"4a9ebd2a-67d0-4965-b042-158a3d8c2a15","type":"HelpTool"},{"attributes":{"plot":{"id":"88364260-cd70-41e9-9149-2e7bdef5a708","subtype":"Figure","type":"Plot"}},"id":"85fc656b-79ef-4c74-a626-84819d453110","type":"WheelZoomTool"},{"attributes":{},"id":"6379acc2-09ae-4b30-8030-4be1b8306274","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"47cbd62a-281c-45ba-8ab1-a96bf50516a1","type":"Line"},{"attributes":{"args":{"source":{"id":"815de3ce-e857-476b-9850-871f2f209563","type":"ColumnDataSource"}},"code":"var _pyfunc_range = function (start, end, step) {\nvar i, res = [];\n    var val = start;\n    var n = (end - start) / step;\n    for (i=0; i<n; i++) {\n        res.push(val);\n        val += step;\n    }\n    return res;\n};\nvar cb;\ncb = function (source, window) {\n    var data, f, i, stub1_, x, y;\n    source = (source === undefined) ? source: source;\n    window = (window === undefined) ? null: window;\n    data = source.data;\n    f = cb_obj.value;\n    stub1_ = [data[\"x\"], data[\"y\"]];\n    x = stub1_[0];y = stub1_[1];\n    for (i = 0; i < x.length; i += 1) {\n        y[i] = window.Math.pow(x[i], f);\n    }\n    source.change.emit();\n    return null;\n};\ncb(source, window);\n"},"id":"6af540af-5889-4d67-bbc3-d44457309da6","type":"CustomJS"},{"attributes":{"children":[{"id":"4d7b9ed6-1d09-47b5-9726-8049dfdf1c65","type":"Slider"}]},"id":"b6a5d03c-8d32-4f6f-8d6c-b49deb181a7f","type":"WidgetBox"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5f4814da-5b18-42f0-be6e-1520d08a5c72","type":"PanTool"},{"id":"85fc656b-79ef-4c74-a626-84819d453110","type":"WheelZoomTool"},{"id":"b0043046-ca57-4ddf-a920-c79637e672f4","type":"BoxZoomTool"},{"id":"4eb376a0-d406-46fa-8949-f54236352e75","type":"SaveTool"},{"id":"7c031953-7b85-4717-873d-07e0422871e5","type":"ResetTool"},{"id":"4a9ebd2a-67d0-4965-b042-158a3d8c2a15","type":"HelpTool"}]},"id":"b750db46-d337-4c61-abf6-cc8565bf9033","type":"Toolbar"},{"attributes":{},"id":"9b02496f-ac81-46ba-af12-a57c38997d4c","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"815de3ce-e857-476b-9850-871f2f209563","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"bd47282b-f9a9-43fe-9463-32ac2a67a68e","type":"BoxAnnotation"},"plot":{"id":"88364260-cd70-41e9-9149-2e7bdef5a708","subtype":"Figure","type":"Plot"}},"id":"b0043046-ca57-4ddf-a920-c79637e672f4","type":"BoxZoomTool"},{"attributes":{},"id":"8410b44e-78ba-4791-8b0b-5864ac947a13","type":"ToolEvents"},{"attributes":{"children":[{"id":"b6a5d03c-8d32-4f6f-8d6c-b49deb181a7f","type":"WidgetBox"},{"id":"88364260-cd70-41e9-9149-2e7bdef5a708","subtype":"Figure","type":"Plot"}]},"id":"f022c671-104d-4349-af90-65a8e4cc1868","type":"Column"},{"attributes":{"formatter":{"id":"fa869877-7f5c-46da-863d-7d82e32a09fa","type":"BasicTickFormatter"},"plot":{"id":"88364260-cd70-41e9-9149-2e7bdef5a708","subtype":"Figure","type":"Plot"},"ticker":{"id":"6379acc2-09ae-4b30-8030-4be1b8306274","type":"BasicTicker"}},"id":"cf43bc6e-dc41-44c4-97dc-000d8e85ca1f","type":"LinearAxis"},{"attributes":{"plot":{"id":"88364260-cd70-41e9-9149-2e7bdef5a708","subtype":"Figure","type":"Plot"}},"id":"7c031953-7b85-4717-873d-07e0422871e5","type":"ResetTool"},{"attributes":{"callback":{"id":"6af540af-5889-4d67-bbc3-d44457309da6","type":"CustomJS"},"end":4,"start":0.1,"title":"power","value":1},"id":"4d7b9ed6-1d09-47b5-9726-8049dfdf1c65","type":"Slider"},{"attributes":{"data_source":{"id":"815de3ce-e857-476b-9850-871f2f209563","type":"ColumnDataSource"},"glyph":{"id":"4439181e-e601-4c9f-9575-bcec6afd34a5","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"47cbd62a-281c-45ba-8ab1-a96bf50516a1","type":"Line"},"selection_glyph":null},"id":"f87272c7-62bf-4798-9b06-c4de4da7358e","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bd47282b-f9a9-43fe-9463-32ac2a67a68e","type":"BoxAnnotation"}],"root_ids":["f022c671-104d-4349-af90-65a8e4cc1868"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"d427f4c9-89ad-440f-8b31-97ad22d2cf2f","elementid":"d5065158-3a86-4880-af2f-70837f17fab7","modelid":"f022c671-104d-4349-af90-65a8e4cc1868"}];
                
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
