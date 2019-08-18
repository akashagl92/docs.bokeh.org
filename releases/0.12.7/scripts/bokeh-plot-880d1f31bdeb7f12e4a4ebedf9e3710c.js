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
      };var element = document.getElementById("8f09b77a-904f-405a-8e9c-f74498cf23f1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8f09b77a-904f-405a-8e9c-f74498cf23f1' but no matching script tag was found. ")
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
                var docs_json = {"09374b2d-dd39-410c-9ea6-c5b65a7a6aa7":{"roots":{"references":[{"attributes":{"plot":{"id":"657389f6-66d8-4ca3-a3be-4f2ce0f70676","subtype":"Figure","type":"Plot"},"ticker":{"id":"e6a5b562-10d4-4423-bb5a-bde1cc57411c","type":"BasicTicker"}},"id":"2166ee80-2ff9-4328-9437-3fc5fe78c82d","type":"Grid"},{"attributes":{},"id":"bf651940-fb69-4407-81ff-a91589abd048","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e32f930a-a43e-48e4-8678-1d08a1a03293","type":"PanTool"},{"id":"5cadb9e2-bd68-45b0-90c2-e1893a547cd1","type":"WheelZoomTool"},{"id":"9c6218ec-ece8-4099-b937-450ca4d0f5a9","type":"BoxZoomTool"},{"id":"bf651940-fb69-4407-81ff-a91589abd048","type":"SaveTool"},{"id":"7b2401b2-d0ec-44e7-9ae6-dd39b0da789c","type":"ResetTool"},{"id":"eb5659ca-0e8b-4f04-8907-091e3c7ac000","type":"HelpTool"}]},"id":"8e2a9a9d-5dcc-4d2c-91fd-daa206aa4eee","type":"Toolbar"},{"attributes":{"callback":null},"id":"9fa3ce3e-2c92-444e-bc88-0a7d6dd4fe1e","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"a16d2725-c3ff-4981-bfd7-7a1fb267e9e9","type":"Line"},{"attributes":{"formatter":{"id":"82acadbe-498e-4b0a-b165-e73ca4ae189f","type":"BasicTickFormatter"},"plot":{"id":"657389f6-66d8-4ca3-a3be-4f2ce0f70676","subtype":"Figure","type":"Plot"},"ticker":{"id":"709b9f22-8cd5-4bba-ba5f-86ce9863188a","type":"BasicTicker"}},"id":"893fc864-a493-4b94-981d-434e09e9a77e","type":"LinearAxis"},{"attributes":{},"id":"709b9f22-8cd5-4bba-ba5f-86ce9863188a","type":"BasicTicker"},{"attributes":{},"id":"2f774821-2822-41f6-a15d-d22754bfd151","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"502d17ce-06bc-423b-8f41-146c3872f19d","type":"Line"},{"attributes":{"data_source":{"id":"9800a100-186b-4409-b18d-c2ba9dc87e12","type":"ColumnDataSource"},"glyph":{"id":"a16d2725-c3ff-4981-bfd7-7a1fb267e9e9","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"502d17ce-06bc-423b-8f41-146c3872f19d","type":"Line"},"selection_glyph":null,"view":{"id":"af2503c0-15cb-4b21-b844-960ca760fd5e","type":"CDSView"}},"id":"a2a537f2-f635-49aa-9137-0500c077b7a5","type":"GlyphRenderer"},{"attributes":{},"id":"e32f930a-a43e-48e4-8678-1d08a1a03293","type":"PanTool"},{"attributes":{"formatter":{"id":"17d626e0-5d23-43c0-a61e-bb53bb3240fe","type":"BasicTickFormatter"},"plot":{"id":"657389f6-66d8-4ca3-a3be-4f2ce0f70676","subtype":"Figure","type":"Plot"},"ticker":{"id":"e6a5b562-10d4-4423-bb5a-bde1cc57411c","type":"BasicTicker"}},"id":"cb4b920a-111b-4cbc-a9a6-c845efc82941","type":"LinearAxis"},{"attributes":{"source":{"id":"9800a100-186b-4409-b18d-c2ba9dc87e12","type":"ColumnDataSource"}},"id":"af2503c0-15cb-4b21-b844-960ca760fd5e","type":"CDSView"},{"attributes":{"overlay":{"id":"1d769c9f-dfbd-4958-91f3-6f9a66c34516","type":"BoxAnnotation"}},"id":"9c6218ec-ece8-4099-b937-450ca4d0f5a9","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"4cb27830-ea0d-4328-8a8c-653cbe8af296","type":"DataRange1d"},{"attributes":{"below":[{"id":"cb4b920a-111b-4cbc-a9a6-c845efc82941","type":"LinearAxis"}],"left":[{"id":"893fc864-a493-4b94-981d-434e09e9a77e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cb4b920a-111b-4cbc-a9a6-c845efc82941","type":"LinearAxis"},{"id":"2166ee80-2ff9-4328-9437-3fc5fe78c82d","type":"Grid"},{"id":"893fc864-a493-4b94-981d-434e09e9a77e","type":"LinearAxis"},{"id":"e9a6be18-c530-4e4f-83bc-605518b7e903","type":"Grid"},{"id":"1d769c9f-dfbd-4958-91f3-6f9a66c34516","type":"BoxAnnotation"},{"id":"a2a537f2-f635-49aa-9137-0500c077b7a5","type":"GlyphRenderer"}],"title":{"id":"b00e8d7a-e803-4721-841b-ddab5fc749c5","type":"Title"},"toolbar":{"id":"8e2a9a9d-5dcc-4d2c-91fd-daa206aa4eee","type":"Toolbar"},"x_range":{"id":"9fa3ce3e-2c92-444e-bc88-0a7d6dd4fe1e","type":"DataRange1d"},"x_scale":{"id":"bd253c8a-c7e9-42a6-a575-bcc06670fdaf","type":"LinearScale"},"y_range":{"id":"4cb27830-ea0d-4328-8a8c-653cbe8af296","type":"DataRange1d"},"y_scale":{"id":"2f774821-2822-41f6-a15d-d22754bfd151","type":"LinearScale"}},"id":"657389f6-66d8-4ca3-a3be-4f2ce0f70676","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"82acadbe-498e-4b0a-b165-e73ca4ae189f","type":"BasicTickFormatter"},{"attributes":{},"id":"17d626e0-5d23-43c0-a61e-bb53bb3240fe","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"b00e8d7a-e803-4721-841b-ddab5fc749c5","type":"Title"},{"attributes":{"callback":null,"end":4,"js_property_callbacks":{"change:value":[{"id":"fc4caa3f-800c-4ba0-9060-56306086095e","type":"CustomJS"}]},"start":0.1,"step":0.1,"title":"power","value":1},"id":"396971b5-f00c-47f7-b8ba-946cd2f96e5e","type":"Slider"},{"attributes":{},"id":"e6a5b562-10d4-4423-bb5a-bde1cc57411c","type":"BasicTicker"},{"attributes":{},"id":"5cadb9e2-bd68-45b0-90c2-e1893a547cd1","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"9800a100-186b-4409-b18d-c2ba9dc87e12","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1d769c9f-dfbd-4958-91f3-6f9a66c34516","type":"BoxAnnotation"},{"attributes":{},"id":"bd253c8a-c7e9-42a6-a575-bcc06670fdaf","type":"LinearScale"},{"attributes":{},"id":"eb5659ca-0e8b-4f04-8907-091e3c7ac000","type":"HelpTool"},{"attributes":{"args":{"source":{"id":"9800a100-186b-4409-b18d-c2ba9dc87e12","type":"ColumnDataSource"}},"code":"\n    var data = source.data;\n    var f = cb_obj.value\n    x = data['x']\n    y = data['y']\n    for (i = 0; i < x.length; i++) {\n        y[i] = Math.pow(x[i], f)\n    }\n    source.change.emit();\n"},"id":"fc4caa3f-800c-4ba0-9060-56306086095e","type":"CustomJS"},{"attributes":{"children":[{"id":"d22ef011-c9a9-4ec0-b48c-616e94fa4feb","type":"WidgetBox"},{"id":"657389f6-66d8-4ca3-a3be-4f2ce0f70676","subtype":"Figure","type":"Plot"}]},"id":"49324237-b35a-48cd-bd27-0099c1ad72b2","type":"Column"},{"attributes":{"children":[{"id":"396971b5-f00c-47f7-b8ba-946cd2f96e5e","type":"Slider"}]},"id":"d22ef011-c9a9-4ec0-b48c-616e94fa4feb","type":"WidgetBox"},{"attributes":{},"id":"7b2401b2-d0ec-44e7-9ae6-dd39b0da789c","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"657389f6-66d8-4ca3-a3be-4f2ce0f70676","subtype":"Figure","type":"Plot"},"ticker":{"id":"709b9f22-8cd5-4bba-ba5f-86ce9863188a","type":"BasicTicker"}},"id":"e9a6be18-c530-4e4f-83bc-605518b7e903","type":"Grid"}],"root_ids":["49324237-b35a-48cd-bd27-0099c1ad72b2"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"09374b2d-dd39-410c-9ea6-c5b65a7a6aa7","elementid":"8f09b77a-904f-405a-8e9c-f74498cf23f1","modelid":"49324237-b35a-48cd-bd27-0099c1ad72b2"}];
                
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
