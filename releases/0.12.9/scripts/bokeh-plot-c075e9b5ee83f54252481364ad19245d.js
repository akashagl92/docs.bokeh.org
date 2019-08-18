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
      };var element = document.getElementById("48582866-1993-4d9d-901f-1545452ae31f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '48582866-1993-4d9d-901f-1545452ae31f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"418d20bd-745b-4f02-9fb9-08ccf5a54bf9":{"roots":{"references":[{"attributes":{"source":{"id":"edb53ba2-079a-4f59-862e-364e3c1030a8","type":"ColumnDataSource"}},"id":"dafc8a1c-8b4a-4988-9b0b-e74fa4b391b3","type":"CDSView"},{"attributes":{},"id":"f2c86547-8195-43d2-8526-d7a3b48b3401","type":"BasicTicker"},{"attributes":{"callback":null},"id":"670586d2-3c14-4052-95f8-0d9b19dabafd","type":"DataRange1d"},{"attributes":{"below":[{"id":"113c1334-e261-43ee-baa5-47ace1dc1ef8","type":"LinearAxis"}],"left":[{"id":"60d36db1-778c-454a-9f90-370eddc27696","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"113c1334-e261-43ee-baa5-47ace1dc1ef8","type":"LinearAxis"},{"id":"df81db76-2a9b-4369-bb81-04a7be14079f","type":"Grid"},{"id":"60d36db1-778c-454a-9f90-370eddc27696","type":"LinearAxis"},{"id":"98d3e4aa-5718-4566-b70b-48d7794a198b","type":"Grid"},{"id":"1ebb7652-af19-41bd-832f-608dd661bac2","type":"BoxAnnotation"},{"id":"f8a2b21e-0d2d-413a-976b-e5845edd021d","type":"GlyphRenderer"}],"title":{"id":"7ea2cb0a-cde9-4e10-80ea-0e781b7a6624","type":"Title"},"toolbar":{"id":"dc6ad144-b633-4126-955a-5ae32f6bec71","type":"Toolbar"},"x_range":{"id":"670586d2-3c14-4052-95f8-0d9b19dabafd","type":"DataRange1d"},"x_scale":{"id":"8c6d16d3-46ae-4787-bc3b-13132a00ec64","type":"LinearScale"},"y_range":{"id":"e3f038b4-8253-4415-8652-87a24cd9e9e4","type":"DataRange1d"},"y_scale":{"id":"a50687b0-49e1-4c8f-8eeb-d61b59eabf79","type":"LinearScale"}},"id":"42bf5a18-ca2f-4555-a741-ad988dfd1e93","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"99857bfb-2379-4b72-ad1b-e92ebd15d765","type":"BasicTicker"},{"attributes":{},"id":"402569c4-e833-4a87-a27b-4371fde77be9","type":"HelpTool"},{"attributes":{"formatter":{"id":"4af26a70-4a42-4c7a-a8f8-77a25a9f6cdf","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"42bf5a18-ca2f-4555-a741-ad988dfd1e93","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2c86547-8195-43d2-8526-d7a3b48b3401","type":"BasicTicker"}},"id":"113c1334-e261-43ee-baa5-47ace1dc1ef8","type":"LinearAxis"},{"attributes":{"plot":{"id":"42bf5a18-ca2f-4555-a741-ad988dfd1e93","subtype":"Figure","type":"Plot"},"ticker":{"id":"f2c86547-8195-43d2-8526-d7a3b48b3401","type":"BasicTicker"}},"id":"df81db76-2a9b-4369-bb81-04a7be14079f","type":"Grid"},{"attributes":{},"id":"ddce6785-840d-4c20-87d7-2c0922ad8f5b","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7598d218-9caf-461b-bb8c-f7370edc0490","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1ebb7652-af19-41bd-832f-608dd661bac2","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"e3f038b4-8253-4415-8652-87a24cd9e9e4","type":"DataRange1d"},{"attributes":{},"id":"4b753894-927c-4c00-9181-2c66adb18cab","type":"ResetTool"},{"attributes":{"data_source":{"id":"edb53ba2-079a-4f59-862e-364e3c1030a8","type":"ColumnDataSource"},"glyph":{"id":"c34698ec-8ec2-4df3-8828-b3dc9cdae407","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7598d218-9caf-461b-bb8c-f7370edc0490","type":"Circle"},"selection_glyph":null,"view":{"id":"dafc8a1c-8b4a-4988-9b0b-e74fa4b391b3","type":"CDSView"}},"id":"f8a2b21e-0d2d-413a-976b-e5845edd021d","type":"GlyphRenderer"},{"attributes":{},"id":"8c6d16d3-46ae-4787-bc3b-13132a00ec64","type":"LinearScale"},{"attributes":{"formatter":{"id":"ec22a46b-5f6f-4682-8dcc-d1c1fb1faf27","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"42bf5a18-ca2f-4555-a741-ad988dfd1e93","subtype":"Figure","type":"Plot"},"ticker":{"id":"99857bfb-2379-4b72-ad1b-e92ebd15d765","type":"BasicTicker"}},"id":"60d36db1-778c-454a-9f90-370eddc27696","type":"LinearAxis"},{"attributes":{},"id":"4af26a70-4a42-4c7a-a8f8-77a25a9f6cdf","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c34698ec-8ec2-4df3-8828-b3dc9cdae407","type":"Circle"},{"attributes":{"overlay":{"id":"1ebb7652-af19-41bd-832f-608dd661bac2","type":"BoxAnnotation"}},"id":"d8cff467-f21d-4002-8071-7b92c9734853","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"42bf5a18-ca2f-4555-a741-ad988dfd1e93","subtype":"Figure","type":"Plot"},"ticker":{"id":"99857bfb-2379-4b72-ad1b-e92ebd15d765","type":"BasicTicker"}},"id":"98d3e4aa-5718-4566-b70b-48d7794a198b","type":"Grid"},{"attributes":{},"id":"4a25f58b-c814-4af2-8652-3eb3d374c89d","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"edb53ba2-079a-4f59-862e-364e3c1030a8","type":"ColumnDataSource"},{"attributes":{},"id":"616201e0-b7a7-4547-a35f-596c930c0c5b","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"616201e0-b7a7-4547-a35f-596c930c0c5b","type":"PanTool"},{"id":"ddce6785-840d-4c20-87d7-2c0922ad8f5b","type":"WheelZoomTool"},{"id":"d8cff467-f21d-4002-8071-7b92c9734853","type":"BoxZoomTool"},{"id":"4a25f58b-c814-4af2-8652-3eb3d374c89d","type":"SaveTool"},{"id":"4b753894-927c-4c00-9181-2c66adb18cab","type":"ResetTool"},{"id":"402569c4-e833-4a87-a27b-4371fde77be9","type":"HelpTool"}]},"id":"dc6ad144-b633-4126-955a-5ae32f6bec71","type":"Toolbar"},{"attributes":{},"id":"ec22a46b-5f6f-4682-8dcc-d1c1fb1faf27","type":"BasicTickFormatter"},{"attributes":{},"id":"a50687b0-49e1-4c8f-8eeb-d61b59eabf79","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"7ea2cb0a-cde9-4e10-80ea-0e781b7a6624","type":"Title"}],"root_ids":["42bf5a18-ca2f-4555-a741-ad988dfd1e93"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"418d20bd-745b-4f02-9fb9-08ccf5a54bf9","elementid":"48582866-1993-4d9d-901f-1545452ae31f","modelid":"42bf5a18-ca2f-4555-a741-ad988dfd1e93"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
