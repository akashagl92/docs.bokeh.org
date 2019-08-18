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
      };var element = document.getElementById("41d492cb-f375-47f7-bec4-a31274315367");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '41d492cb-f375-47f7-bec4-a31274315367' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"552cab81-4f10-472d-a3b9-9c79ed974441":{"roots":{"references":[{"attributes":{"children":[{"id":"7fd2cccd-c9b1-44df-b2b7-badd5da1dbcf","type":"Slider"}]},"id":"105d5060-a5f3-4edd-b09b-9d25aa677f8f","type":"WidgetBox"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"858e7226-c43e-4a88-b825-4335e2bada5d","type":"Line"},{"attributes":{},"id":"63f24520-ab9d-4f33-8428-c704b69bda87","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dba67cdb-e4d2-4947-b895-57d9f0e030fd","type":"PanTool"},{"id":"0000632d-6ecc-49ba-93c2-e100ac10d6ce","type":"WheelZoomTool"},{"id":"0236f5e9-7044-4371-96a4-2f79f8ac7cc6","type":"BoxZoomTool"},{"id":"3d9007a3-0594-445c-84b1-d12d5226b409","type":"SaveTool"},{"id":"6f5f1b40-ec7c-4dbc-9bf6-54ae34287ac9","type":"ResetTool"},{"id":"74865f08-33f4-424d-9d9b-1132b5cf896e","type":"HelpTool"}]},"id":"15f03205-190d-4ce6-93e7-175d9b00c906","type":"Toolbar"},{"attributes":{"children":[{"id":"105d5060-a5f3-4edd-b09b-9d25aa677f8f","type":"WidgetBox"},{"id":"d074eda8-757b-4e49-b86f-b80f386d343d","subtype":"Figure","type":"Plot"}]},"id":"6d902691-d05f-4be3-b3de-c8e87946bd17","type":"Column"},{"attributes":{"formatter":{"id":"100c6878-3f43-4216-9245-a0017f954db4","type":"BasicTickFormatter"},"plot":{"id":"d074eda8-757b-4e49-b86f-b80f386d343d","subtype":"Figure","type":"Plot"},"ticker":{"id":"02b04a86-4599-49d7-9512-891968e86e1d","type":"BasicTicker"}},"id":"bbba4f35-db21-4570-83b0-54e43ee62d1e","type":"LinearAxis"},{"attributes":{"source":{"id":"1884a26b-a57b-48cc-a909-dbea13864247","type":"ColumnDataSource"}},"id":"c75744c6-f053-4892-b5a1-92ecb1d55a71","type":"CDSView"},{"attributes":{"formatter":{"id":"508f76e0-b0f2-4172-9dee-5e69112b68e9","type":"BasicTickFormatter"},"plot":{"id":"d074eda8-757b-4e49-b86f-b80f386d343d","subtype":"Figure","type":"Plot"},"ticker":{"id":"63f24520-ab9d-4f33-8428-c704b69bda87","type":"BasicTicker"}},"id":"e3e6b8b8-61a2-4d46-a485-7677f507e7dc","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1884a26b-a57b-48cc-a909-dbea13864247","type":"ColumnDataSource"},"glyph":{"id":"858e7226-c43e-4a88-b825-4335e2bada5d","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f670a8c3-5fc3-4623-9192-367643611066","type":"Line"},"selection_glyph":null,"view":{"id":"c75744c6-f053-4892-b5a1-92ecb1d55a71","type":"CDSView"}},"id":"03f1019c-22f6-41af-857c-3f371347e775","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3a144083-ec68-4503-a594-5cfabe43fe8e","type":"BoxAnnotation"},{"attributes":{"callback":{"id":"7f63301d-4e8b-4431-945d-ab4848cd7684","type":"CustomJS"},"end":4,"start":0.1,"step":0.1,"title":"power","value":1},"id":"7fd2cccd-c9b1-44df-b2b7-badd5da1dbcf","type":"Slider"},{"attributes":{},"id":"6f5f1b40-ec7c-4dbc-9bf6-54ae34287ac9","type":"ResetTool"},{"attributes":{},"id":"74865f08-33f4-424d-9d9b-1132b5cf896e","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]}},"id":"1884a26b-a57b-48cc-a909-dbea13864247","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"bbba4f35-db21-4570-83b0-54e43ee62d1e","type":"LinearAxis"}],"left":[{"id":"e3e6b8b8-61a2-4d46-a485-7677f507e7dc","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"bbba4f35-db21-4570-83b0-54e43ee62d1e","type":"LinearAxis"},{"id":"1b6e78a1-4b7a-48ac-8eaf-bd5cceda3bad","type":"Grid"},{"id":"e3e6b8b8-61a2-4d46-a485-7677f507e7dc","type":"LinearAxis"},{"id":"63670696-dcdb-44b5-b123-ac9365b7e1e7","type":"Grid"},{"id":"3a144083-ec68-4503-a594-5cfabe43fe8e","type":"BoxAnnotation"},{"id":"03f1019c-22f6-41af-857c-3f371347e775","type":"GlyphRenderer"}],"title":{"id":"f93ca1f3-30e5-40ea-b5b8-9311f0375a7a","type":"Title"},"toolbar":{"id":"15f03205-190d-4ce6-93e7-175d9b00c906","type":"Toolbar"},"x_range":{"id":"6a5cf9ce-0199-4204-8e5f-e9a5e26fe545","type":"DataRange1d"},"x_scale":{"id":"646c52f1-5c54-4559-a48e-2a70b4592db1","type":"LinearScale"},"y_range":{"id":"5b1a0ce0-97d1-4d41-8376-1980c2e2559a","type":"DataRange1d"},"y_scale":{"id":"61a78219-55b6-4029-8bca-f1a3f850bcd6","type":"LinearScale"}},"id":"d074eda8-757b-4e49-b86f-b80f386d343d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"61a78219-55b6-4029-8bca-f1a3f850bcd6","type":"LinearScale"},{"attributes":{},"id":"3d9007a3-0594-445c-84b1-d12d5226b409","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"d074eda8-757b-4e49-b86f-b80f386d343d","subtype":"Figure","type":"Plot"},"ticker":{"id":"63f24520-ab9d-4f33-8428-c704b69bda87","type":"BasicTicker"}},"id":"63670696-dcdb-44b5-b123-ac9365b7e1e7","type":"Grid"},{"attributes":{},"id":"646c52f1-5c54-4559-a48e-2a70b4592db1","type":"LinearScale"},{"attributes":{},"id":"dba67cdb-e4d2-4947-b895-57d9f0e030fd","type":"PanTool"},{"attributes":{},"id":"100c6878-3f43-4216-9245-a0017f954db4","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6a5cf9ce-0199-4204-8e5f-e9a5e26fe545","type":"DataRange1d"},{"attributes":{"args":{"source":{"id":"1884a26b-a57b-48cc-a909-dbea13864247","type":"ColumnDataSource"}},"code":"\n        var data = source.data;\n        var f = cb_obj.value\n        x = data['x']\n        y = data['y']\n        for (i = 0; i < x.length; i++) {\n            y[i] = Math.pow(x[i], f)\n        }\n        source.change.emit();\n    "},"id":"7f63301d-4e8b-4431-945d-ab4848cd7684","type":"CustomJS"},{"attributes":{},"id":"0000632d-6ecc-49ba-93c2-e100ac10d6ce","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"5b1a0ce0-97d1-4d41-8376-1980c2e2559a","type":"DataRange1d"},{"attributes":{"overlay":{"id":"3a144083-ec68-4503-a594-5cfabe43fe8e","type":"BoxAnnotation"}},"id":"0236f5e9-7044-4371-96a4-2f79f8ac7cc6","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"f93ca1f3-30e5-40ea-b5b8-9311f0375a7a","type":"Title"},{"attributes":{},"id":"02b04a86-4599-49d7-9512-891968e86e1d","type":"BasicTicker"},{"attributes":{},"id":"508f76e0-b0f2-4172-9dee-5e69112b68e9","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"f670a8c3-5fc3-4623-9192-367643611066","type":"Line"},{"attributes":{"plot":{"id":"d074eda8-757b-4e49-b86f-b80f386d343d","subtype":"Figure","type":"Plot"},"ticker":{"id":"02b04a86-4599-49d7-9512-891968e86e1d","type":"BasicTicker"}},"id":"1b6e78a1-4b7a-48ac-8eaf-bd5cceda3bad","type":"Grid"}],"root_ids":["6d902691-d05f-4be3-b3de-c8e87946bd17"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"552cab81-4f10-472d-a3b9-9c79ed974441","elementid":"41d492cb-f375-47f7-bec4-a31274315367","modelid":"6d902691-d05f-4be3-b3de-c8e87946bd17"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
