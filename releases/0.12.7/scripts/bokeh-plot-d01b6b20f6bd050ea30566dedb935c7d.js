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
      };var element = document.getElementById("2787ea0b-c74d-4373-baf9-940525210a1c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2787ea0b-c74d-4373-baf9-940525210a1c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"17d2f741-6cb3-4dd1-8e2e-2a41cef15caf":{"roots":{"references":[{"attributes":{"callback":{"id":"2f2db1a2-91cd-4f2b-b9d3-45f2fb56a823","type":"CustomJS"},"end":4,"start":0.1,"step":0.1,"title":"power","value":1},"id":"61f3cfb6-d318-4090-bcc5-ccfef5e34ece","type":"Slider"},{"attributes":{},"id":"f391900e-768f-4109-9a97-da7ff40691b4","type":"SaveTool"},{"attributes":{},"id":"7c5c688b-606f-4799-b292-3062d9bdbd22","type":"ResetTool"},{"attributes":{},"id":"588b5d71-2b59-4af6-b723-2ceb77d3326f","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"1e8e06b7-1dbf-499a-bcc7-5ad658b837f0","type":"ColumnDataSource"},{"attributes":{},"id":"1b654b6e-08b3-4f88-ad4c-ae22366aca5d","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"fbc4bf4e-741d-473b-8988-ae54db83df90","type":"Line"},{"attributes":{},"id":"5e01e478-2ba7-4339-8927-104dd6f08408","type":"LinearScale"},{"attributes":{},"id":"41cc0f03-ae36-44ad-9ae6-5821c7ff8f37","type":"PanTool"},{"attributes":{},"id":"1dae415a-bc63-444a-8652-a43e874a45b3","type":"LinearScale"},{"attributes":{"below":[{"id":"03dce688-24e6-44d7-9051-e872d0d05226","type":"LinearAxis"}],"left":[{"id":"7ef944c3-6327-4f54-8ec8-60c931f5fea9","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"03dce688-24e6-44d7-9051-e872d0d05226","type":"LinearAxis"},{"id":"84fd1e16-c938-44b2-af88-ef243c1d99be","type":"Grid"},{"id":"7ef944c3-6327-4f54-8ec8-60c931f5fea9","type":"LinearAxis"},{"id":"4a33baa9-1d7e-43e8-a47a-5b59b6a36e6e","type":"Grid"},{"id":"8bc8be2a-43f7-4fee-9ef6-69337eab1dfd","type":"BoxAnnotation"},{"id":"5b6f17ce-9407-4275-950c-24ee745dba4f","type":"GlyphRenderer"}],"title":{"id":"fad99b0d-b7eb-47d2-b28f-c2ade5c97e7a","type":"Title"},"toolbar":{"id":"7ecdd2dd-9b07-4dd9-a090-5fb20ed9f5bc","type":"Toolbar"},"x_range":{"id":"49ac911c-f362-4944-8e66-b53215a6c3ed","type":"DataRange1d"},"x_scale":{"id":"5e01e478-2ba7-4339-8927-104dd6f08408","type":"LinearScale"},"y_range":{"id":"bba6e532-3546-439f-9876-3cf63f30cf0e","type":"DataRange1d"},"y_scale":{"id":"1dae415a-bc63-444a-8652-a43e874a45b3","type":"LinearScale"}},"id":"1d90d916-bb6c-4bd3-832e-6d496c5f6298","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"1d90d916-bb6c-4bd3-832e-6d496c5f6298","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b654b6e-08b3-4f88-ad4c-ae22366aca5d","type":"BasicTicker"}},"id":"4a33baa9-1d7e-43e8-a47a-5b59b6a36e6e","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"41cc0f03-ae36-44ad-9ae6-5821c7ff8f37","type":"PanTool"},{"id":"1915262b-5a19-47e7-8e87-c407b32d1a17","type":"WheelZoomTool"},{"id":"b061d974-a2e9-4388-beb7-bd0a4dd42f32","type":"BoxZoomTool"},{"id":"f391900e-768f-4109-9a97-da7ff40691b4","type":"SaveTool"},{"id":"7c5c688b-606f-4799-b292-3062d9bdbd22","type":"ResetTool"},{"id":"588b5d71-2b59-4af6-b723-2ceb77d3326f","type":"HelpTool"}]},"id":"7ecdd2dd-9b07-4dd9-a090-5fb20ed9f5bc","type":"Toolbar"},{"attributes":{"callback":null},"id":"49ac911c-f362-4944-8e66-b53215a6c3ed","type":"DataRange1d"},{"attributes":{},"id":"516b40f2-7b1b-4905-bd81-8d9b530c62f2","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"bba6e532-3546-439f-9876-3cf63f30cf0e","type":"DataRange1d"},{"attributes":{},"id":"1915262b-5a19-47e7-8e87-c407b32d1a17","type":"WheelZoomTool"},{"attributes":{"args":{"source":{"id":"1e8e06b7-1dbf-499a-bcc7-5ad658b837f0","type":"ColumnDataSource"}},"code":"var _pyfunc_range = function (start, end, step) {\nvar i, res = [];\n    var val = start;\n    var n = (end - start) / step;\n    for (i=0; i<n; i++) {\n        res.push(val);\n        val += step;\n    }\n    return res;\n};\nvar cb;\ncb = function (source, window) {\n    var data, f, i, stub1_, x, y;\n    source = (source === undefined) ? source: source;\n    window = (window === undefined) ? null: window;\n    data = source.data;\n    f = cb_obj.value;\n    stub1_ = [data[\"x\"], data[\"y\"]];\n    x = stub1_[0];y = stub1_[1];\n    for (i = 0; i < x.length; i += 1) {\n        y[i] = window.Math.pow(x[i], f);\n    }\n    source.change.emit();\n    return null;\n};\ncb(source, window);\n"},"id":"2f2db1a2-91cd-4f2b-b9d3-45f2fb56a823","type":"CustomJS"},{"attributes":{"children":[{"id":"8c68def0-6e8c-42ab-a3a5-4e36ae8c43fb","type":"WidgetBox"},{"id":"1d90d916-bb6c-4bd3-832e-6d496c5f6298","subtype":"Figure","type":"Plot"}]},"id":"eb6dd4a6-925c-4c73-be6e-b38d7134b3cd","type":"Column"},{"attributes":{"source":{"id":"1e8e06b7-1dbf-499a-bcc7-5ad658b837f0","type":"ColumnDataSource"}},"id":"af01cada-f4e0-43b2-b397-5f9f49e1cc32","type":"CDSView"},{"attributes":{"children":[{"id":"61f3cfb6-d318-4090-bcc5-ccfef5e34ece","type":"Slider"}]},"id":"8c68def0-6e8c-42ab-a3a5-4e36ae8c43fb","type":"WidgetBox"},{"attributes":{"formatter":{"id":"d0d538d0-16e7-40ae-8fdd-7daa65a05c79","type":"BasicTickFormatter"},"plot":{"id":"1d90d916-bb6c-4bd3-832e-6d496c5f6298","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b654b6e-08b3-4f88-ad4c-ae22366aca5d","type":"BasicTicker"}},"id":"7ef944c3-6327-4f54-8ec8-60c931f5fea9","type":"LinearAxis"},{"attributes":{"overlay":{"id":"8bc8be2a-43f7-4fee-9ef6-69337eab1dfd","type":"BoxAnnotation"}},"id":"b061d974-a2e9-4388-beb7-bd0a4dd42f32","type":"BoxZoomTool"},{"attributes":{},"id":"d0d538d0-16e7-40ae-8fdd-7daa65a05c79","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"516b40f2-7b1b-4905-bd81-8d9b530c62f2","type":"BasicTickFormatter"},"plot":{"id":"1d90d916-bb6c-4bd3-832e-6d496c5f6298","subtype":"Figure","type":"Plot"},"ticker":{"id":"6839bf1c-b8f7-4712-bc4f-fca9c564662d","type":"BasicTicker"}},"id":"03dce688-24e6-44d7-9051-e872d0d05226","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"fad99b0d-b7eb-47d2-b28f-c2ade5c97e7a","type":"Title"},{"attributes":{},"id":"6839bf1c-b8f7-4712-bc4f-fca9c564662d","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8bc8be2a-43f7-4fee-9ef6-69337eab1dfd","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"1d90d916-bb6c-4bd3-832e-6d496c5f6298","subtype":"Figure","type":"Plot"},"ticker":{"id":"6839bf1c-b8f7-4712-bc4f-fca9c564662d","type":"BasicTicker"}},"id":"84fd1e16-c938-44b2-af88-ef243c1d99be","type":"Grid"},{"attributes":{"data_source":{"id":"1e8e06b7-1dbf-499a-bcc7-5ad658b837f0","type":"ColumnDataSource"},"glyph":{"id":"fbc4bf4e-741d-473b-8988-ae54db83df90","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2ae41d2c-8837-418f-9199-bcc7f889decd","type":"Line"},"selection_glyph":null,"view":{"id":"af01cada-f4e0-43b2-b397-5f9f49e1cc32","type":"CDSView"}},"id":"5b6f17ce-9407-4275-950c-24ee745dba4f","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ae41d2c-8837-418f-9199-bcc7f889decd","type":"Line"}],"root_ids":["eb6dd4a6-925c-4c73-be6e-b38d7134b3cd"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"17d2f741-6cb3-4dd1-8e2e-2a41cef15caf","elementid":"2787ea0b-c74d-4373-baf9-940525210a1c","modelid":"eb6dd4a6-925c-4c73-be6e-b38d7134b3cd"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
