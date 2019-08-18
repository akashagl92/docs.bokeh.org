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
      };var element = document.getElementById("fcce6165-92ff-4384-a8ab-c62d3de088d3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fcce6165-92ff-4384-a8ab-c62d3de088d3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2f88631c-13b1-483b-87c1-cbad1de78338":{"roots":{"references":[{"attributes":{"plot":{"id":"fb7073f9-edf5-454c-ad71-22049f4824d9","subtype":"Figure","type":"Plot"},"ticker":{"id":"fda3f43c-ead0-4661-96aa-916dc0abcd60","type":"BasicTicker"}},"id":"a0f91279-d242-4bce-b5dd-6c0db616765c","type":"Grid"},{"attributes":{},"id":"33afe8bb-b0f1-4cf0-af53-908f083d7c1a","type":"ResetTool"},{"attributes":{"callback":null},"id":"5b381ec2-a780-4f98-8ae8-c41cf18516d3","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"c2db05e2-2a68-48e0-8388-9bb8b31f035f","type":"Line"},{"attributes":{"formatter":{"id":"1812d8fe-5d51-4677-9e5f-6f6bc52f008b","type":"BasicTickFormatter"},"plot":{"id":"fb7073f9-edf5-454c-ad71-22049f4824d9","subtype":"Figure","type":"Plot"},"ticker":{"id":"fda3f43c-ead0-4661-96aa-916dc0abcd60","type":"BasicTicker"}},"id":"b2f3f3e1-a050-48b8-8e0a-1199f5019c5a","type":"LinearAxis"},{"attributes":{"children":[{"id":"359cbbd1-5171-4c56-a079-2d950f5e4497","type":"WidgetBox"},{"id":"fb7073f9-edf5-454c-ad71-22049f4824d9","subtype":"Figure","type":"Plot"}]},"id":"f81b5cc9-ca37-4380-84b1-26ed35fa37a1","type":"Column"},{"attributes":{"callback":{"id":"3267d121-e426-4189-9fcf-6047b0e80f57","type":"CustomJS"},"end":4,"start":0.1,"step":0.1,"title":"power","value":1},"id":"08a6046d-e54d-4066-8e74-a89e7a630f9c","type":"Slider"},{"attributes":{"callback":null},"id":"4cbeb7b0-a7ab-4965-9327-7959622669f6","type":"DataRange1d"},{"attributes":{"children":[{"id":"08a6046d-e54d-4066-8e74-a89e7a630f9c","type":"Slider"}]},"id":"359cbbd1-5171-4c56-a079-2d950f5e4497","type":"WidgetBox"},{"attributes":{},"id":"47efb2dc-6c18-4889-9799-9d2598228940","type":"Selection"},{"attributes":{"data_source":{"id":"5bcfdb8d-4928-4b34-ad9f-93f19d232b69","type":"ColumnDataSource"},"glyph":{"id":"9e263de3-8608-4b00-af70-e69abe2f9b73","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c2db05e2-2a68-48e0-8388-9bb8b31f035f","type":"Line"},"selection_glyph":null,"view":{"id":"4d16d98d-9526-45ab-834b-72e05829b6c8","type":"CDSView"}},"id":"e3046c69-aad5-4814-a7fd-457d10eeed71","type":"GlyphRenderer"},{"attributes":{},"id":"040c7a6f-45f4-4713-8745-54ae7fcb8326","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9224bd30-edc1-414d-a692-1cf15cf73b53","type":"BoxAnnotation"},{"attributes":{},"id":"1812d8fe-5d51-4677-9e5f-6f6bc52f008b","type":"BasicTickFormatter"},{"attributes":{},"id":"ec2cb6fe-d0e9-43dc-9da3-f51752768075","type":"BasicTickFormatter"},{"attributes":{},"id":"53a8b0d5-63d6-40c7-986a-de89ee9014b1","type":"UnionRenderers"},{"attributes":{"source":{"id":"5bcfdb8d-4928-4b34-ad9f-93f19d232b69","type":"ColumnDataSource"}},"id":"4d16d98d-9526-45ab-834b-72e05829b6c8","type":"CDSView"},{"attributes":{},"id":"01ea3934-e0bf-4bfa-a754-613c89e74cc1","type":"PanTool"},{"attributes":{},"id":"4adb944c-b9df-410b-93d5-56e692faa5f0","type":"BasicTicker"},{"attributes":{},"id":"5a957d73-687f-4bcb-a264-144917c868cb","type":"SaveTool"},{"attributes":{"formatter":{"id":"ec2cb6fe-d0e9-43dc-9da3-f51752768075","type":"BasicTickFormatter"},"plot":{"id":"fb7073f9-edf5-454c-ad71-22049f4824d9","subtype":"Figure","type":"Plot"},"ticker":{"id":"4adb944c-b9df-410b-93d5-56e692faa5f0","type":"BasicTicker"}},"id":"a747677e-0bf1-426d-915c-455325c0dc96","type":"LinearAxis"},{"attributes":{"overlay":{"id":"9224bd30-edc1-414d-a692-1cf15cf73b53","type":"BoxAnnotation"}},"id":"7eb87458-3988-4887-bd99-bc031fd5c569","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"b2f3f3e1-a050-48b8-8e0a-1199f5019c5a","type":"LinearAxis"}],"left":[{"id":"a747677e-0bf1-426d-915c-455325c0dc96","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b2f3f3e1-a050-48b8-8e0a-1199f5019c5a","type":"LinearAxis"},{"id":"a0f91279-d242-4bce-b5dd-6c0db616765c","type":"Grid"},{"id":"a747677e-0bf1-426d-915c-455325c0dc96","type":"LinearAxis"},{"id":"8342dbb9-009f-4309-a45b-78a7b7b59d14","type":"Grid"},{"id":"9224bd30-edc1-414d-a692-1cf15cf73b53","type":"BoxAnnotation"},{"id":"e3046c69-aad5-4814-a7fd-457d10eeed71","type":"GlyphRenderer"}],"title":{"id":"0f73bc6c-f109-493b-a999-000b25a495a4","type":"Title"},"toolbar":{"id":"e64c688a-abc0-4766-b789-a70f16ee2f83","type":"Toolbar"},"x_range":{"id":"4cbeb7b0-a7ab-4965-9327-7959622669f6","type":"DataRange1d"},"x_scale":{"id":"4f457803-8a58-4121-9198-d725c2b38429","type":"LinearScale"},"y_range":{"id":"5b381ec2-a780-4f98-8ae8-c41cf18516d3","type":"DataRange1d"},"y_scale":{"id":"2c67dec6-6b75-462b-afd2-b23a6e17d89c","type":"LinearScale"}},"id":"fb7073f9-edf5-454c-ad71-22049f4824d9","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"05ca80c1-007a-43af-b35b-6868e51d0fb6","type":"HelpTool"},{"attributes":{"line_alpha":0.6,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"9e263de3-8608-4b00-af70-e69abe2f9b73","type":"Line"},{"attributes":{},"id":"fda3f43c-ead0-4661-96aa-916dc0abcd60","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"0f73bc6c-f109-493b-a999-000b25a495a4","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"fb7073f9-edf5-454c-ad71-22049f4824d9","subtype":"Figure","type":"Plot"},"ticker":{"id":"4adb944c-b9df-410b-93d5-56e692faa5f0","type":"BasicTicker"}},"id":"8342dbb9-009f-4309-a45b-78a7b7b59d14","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995],"y":[0.0,0.005,0.01,0.015,0.02,0.025,0.03,0.035,0.04,0.045,0.05,0.055,0.06,0.065,0.07,0.075,0.08,0.085,0.09,0.095,0.1,0.105,0.11,0.115,0.12,0.125,0.13,0.135,0.14,0.145,0.15,0.155,0.16,0.165,0.17,0.17500000000000002,0.18,0.185,0.19,0.195,0.2,0.20500000000000002,0.21,0.215,0.22,0.225,0.23,0.23500000000000001,0.24,0.245,0.25,0.255,0.26,0.265,0.27,0.275,0.28,0.28500000000000003,0.29,0.295,0.3,0.305,0.31,0.315,0.32,0.325,0.33,0.335,0.34,0.34500000000000003,0.35000000000000003,0.355,0.36,0.365,0.37,0.375,0.38,0.385,0.39,0.395,0.4,0.405,0.41000000000000003,0.41500000000000004,0.42,0.425,0.43,0.435,0.44,0.445,0.45,0.455,0.46,0.465,0.47000000000000003,0.47500000000000003,0.48,0.485,0.49,0.495,0.5,0.505,0.51,0.515,0.52,0.525,0.53,0.535,0.54,0.545,0.55,0.555,0.56,0.5650000000000001,0.5700000000000001,0.5750000000000001,0.58,0.585,0.59,0.595,0.6,0.605,0.61,0.615,0.62,0.625,0.63,0.635,0.64,0.645,0.65,0.655,0.66,0.665,0.67,0.675,0.68,0.685,0.6900000000000001,0.6950000000000001,0.7000000000000001,0.705,0.71,0.715,0.72,0.725,0.73,0.735,0.74,0.745,0.75,0.755,0.76,0.765,0.77,0.775,0.78,0.785,0.79,0.795,0.8,0.805,0.81,0.8150000000000001,0.8200000000000001,0.8250000000000001,0.8300000000000001,0.835,0.84,0.845,0.85,0.855,0.86,0.865,0.87,0.875,0.88,0.885,0.89,0.895,0.9,0.905,0.91,0.915,0.92,0.925,0.93,0.935,0.9400000000000001,0.9450000000000001,0.9500000000000001,0.9550000000000001,0.96,0.965,0.97,0.975,0.98,0.985,0.99,0.995]},"selected":{"id":"47efb2dc-6c18-4889-9799-9d2598228940","type":"Selection"},"selection_policy":{"id":"53a8b0d5-63d6-40c7-986a-de89ee9014b1","type":"UnionRenderers"}},"id":"5bcfdb8d-4928-4b34-ad9f-93f19d232b69","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"01ea3934-e0bf-4bfa-a754-613c89e74cc1","type":"PanTool"},{"id":"040c7a6f-45f4-4713-8745-54ae7fcb8326","type":"WheelZoomTool"},{"id":"7eb87458-3988-4887-bd99-bc031fd5c569","type":"BoxZoomTool"},{"id":"5a957d73-687f-4bcb-a264-144917c868cb","type":"SaveTool"},{"id":"33afe8bb-b0f1-4cf0-af53-908f083d7c1a","type":"ResetTool"},{"id":"05ca80c1-007a-43af-b35b-6868e51d0fb6","type":"HelpTool"}]},"id":"e64c688a-abc0-4766-b789-a70f16ee2f83","type":"Toolbar"},{"attributes":{"args":{"source":{"id":"5bcfdb8d-4928-4b34-ad9f-93f19d232b69","type":"ColumnDataSource"}},"code":"var cb;\\ncb = function flx_cb (source, window) {\\n    var data, f, i, stub1_, x, y;\\n    source = (source === undefined) ? source: source;\\n    window = (window === undefined) ? null: window;\\n    data = source.data;\\n    f = cb_obj.value;\\n    stub1_ = [data[\\"x\\"], data[\\"y\\"]];\\n    x = stub1_[0];y = stub1_[1];\\n    for (i = 0; i &lt; x.length; i += 1) {\\n        y[i] = window.Math.pow(x[i], f);\\n    }\\n    source.change.emit();\\n    return null;\\n};\\ncb(source, window);\\n"},"id":"3267d121-e426-4189-9fcf-6047b0e80f57","type":"CustomJS"},{"attributes":{},"id":"2c67dec6-6b75-462b-afd2-b23a6e17d89c","type":"LinearScale"},{"attributes":{},"id":"4f457803-8a58-4121-9198-d725c2b38429","type":"LinearScale"}],"root_ids":["f81b5cc9-ca37-4380-84b1-26ed35fa37a1"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"2f88631c-13b1-483b-87c1-cbad1de78338","roots":{"f81b5cc9-ca37-4380-84b1-26ed35fa37a1":"fcce6165-92ff-4384-a8ab-c62d3de088d3"}}];
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