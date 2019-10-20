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
      };var element = document.getElementById("6dcf6324-119c-44c6-a064-70c454c1cc74");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6dcf6324-119c-44c6-a064-70c454c1cc74' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ba5fe2fc-a702-4682-bdae-76338090fbc6":{"roots":{"references":[{"attributes":{},"id":"1abd8bb6-9042-4200-9c89-9339d8608157","type":"LinearScale"},{"attributes":{},"id":"27915f83-bc29-49f4-a22d-fed528bfbb01","type":"PanTool"},{"attributes":{"overlay":{"id":"8c50c172-eddc-457d-923c-000ec3ff2ff3","type":"BoxAnnotation"}},"id":"c140410e-3513-4b25-b977-6cd8044b9ac6","type":"BoxZoomTool"},{"attributes":{"source":{"id":"bb60bb51-4f6f-4b5c-a1f6-f29e6bbe6b63","type":"ColumnDataSource"}},"id":"c8ac1a95-e59e-4f2a-a662-bb6745e01e2e","type":"CDSView"},{"attributes":{"plot":{"id":"024257f6-d7d9-4cb8-b1db-01d0eb2650a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"7dec3e04-8d35-4eae-9405-b0af27f5c953","type":"BasicTicker"}},"id":"dc1a56b5-f921-4709-8681-89d05dbab9fa","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"024257f6-d7d9-4cb8-b1db-01d0eb2650a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"59501079-6075-410a-a033-f90b6620c22a","type":"BasicTicker"}},"id":"455610b9-26fb-4aac-ae11-654e672d48da","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"aefdd9c3-7dba-47fa-9398-bae1d4b0a033","type":"Selection"},"selection_policy":{"id":"c800e35d-91b9-41f6-bb4b-d3d313511a95","type":"UnionRenderers"}},"id":"bb60bb51-4f6f-4b5c-a1f6-f29e6bbe6b63","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"9e8f1530-119f-4b05-b19d-cacd114bed45","type":"BasicTickFormatter"},"plot":{"id":"024257f6-d7d9-4cb8-b1db-01d0eb2650a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"7dec3e04-8d35-4eae-9405-b0af27f5c953","type":"BasicTicker"}},"id":"caa90963-08e0-4aa9-bdec-6a8f5ed4cc00","type":"LinearAxis"},{"attributes":{"formatter":{"id":"1ee21e18-5f28-4e82-8d6a-613376c716aa","type":"BasicTickFormatter"},"plot":{"id":"024257f6-d7d9-4cb8-b1db-01d0eb2650a5","subtype":"Figure","type":"Plot"},"ticker":{"id":"59501079-6075-410a-a033-f90b6620c22a","type":"BasicTicker"}},"id":"b9a1614b-8286-47d7-8070-082e5a9a54ec","type":"LinearAxis"},{"attributes":{},"id":"7dec3e04-8d35-4eae-9405-b0af27f5c953","type":"BasicTicker"},{"attributes":{},"id":"59501079-6075-410a-a033-f90b6620c22a","type":"BasicTicker"},{"attributes":{},"id":"aefdd9c3-7dba-47fa-9398-bae1d4b0a033","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6f6f5bfd-d8a1-4389-bce2-1bb87a4ba88f","type":"Circle"},{"attributes":{},"id":"2c4b3fb2-e436-4cb0-9cf3-f100a42ff16d","type":"HelpTool"},{"attributes":{},"id":"1ee21e18-5f28-4e82-8d6a-613376c716aa","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"094f0305-81af-4d31-9c51-ef99a655afae","type":"DataRange1d"},{"attributes":{},"id":"7b16745e-a239-4705-8580-f98061bec93e","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0b1aa627-de0b-4e6a-94dd-9b8f159b778e","type":"Circle"},{"attributes":{},"id":"d917ce64-a3f1-4b3f-87e2-6328478a99d0","type":"LinearScale"},{"attributes":{},"id":"c800e35d-91b9-41f6-bb4b-d3d313511a95","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"bb60bb51-4f6f-4b5c-a1f6-f29e6bbe6b63","type":"ColumnDataSource"},"glyph":{"id":"0b1aa627-de0b-4e6a-94dd-9b8f159b778e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6f6f5bfd-d8a1-4389-bce2-1bb87a4ba88f","type":"Circle"},"selection_glyph":null,"view":{"id":"c8ac1a95-e59e-4f2a-a662-bb6745e01e2e","type":"CDSView"}},"id":"c84ae0e1-641a-40b3-87dd-7f09550cdba0","type":"GlyphRenderer"},{"attributes":{},"id":"a3cc46f4-02b9-41eb-9a04-74850b39474b","type":"ResetTool"},{"attributes":{"below":[{"id":"caa90963-08e0-4aa9-bdec-6a8f5ed4cc00","type":"LinearAxis"}],"left":[{"id":"b9a1614b-8286-47d7-8070-082e5a9a54ec","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"caa90963-08e0-4aa9-bdec-6a8f5ed4cc00","type":"LinearAxis"},{"id":"dc1a56b5-f921-4709-8681-89d05dbab9fa","type":"Grid"},{"id":"b9a1614b-8286-47d7-8070-082e5a9a54ec","type":"LinearAxis"},{"id":"455610b9-26fb-4aac-ae11-654e672d48da","type":"Grid"},{"id":"8c50c172-eddc-457d-923c-000ec3ff2ff3","type":"BoxAnnotation"},{"id":"c84ae0e1-641a-40b3-87dd-7f09550cdba0","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"9b1c2632-b10a-4fdc-aa0e-518bec8add44","type":"Toolbar"},"toolbar_location":"below","toolbar_sticky":false,"x_range":{"id":"e3aa0343-b314-4376-8715-6a82165a9f0f","type":"DataRange1d"},"x_scale":{"id":"d917ce64-a3f1-4b3f-87e2-6328478a99d0","type":"LinearScale"},"y_range":{"id":"094f0305-81af-4d31-9c51-ef99a655afae","type":"DataRange1d"},"y_scale":{"id":"1abd8bb6-9042-4200-9c89-9339d8608157","type":"LinearScale"}},"id":"024257f6-d7d9-4cb8-b1db-01d0eb2650a5","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9e8f1530-119f-4b05-b19d-cacd114bed45","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"27915f83-bc29-49f4-a22d-fed528bfbb01","type":"PanTool"},{"id":"5d1cd664-195a-49f5-a712-866959d3174f","type":"WheelZoomTool"},{"id":"c140410e-3513-4b25-b977-6cd8044b9ac6","type":"BoxZoomTool"},{"id":"7b16745e-a239-4705-8580-f98061bec93e","type":"SaveTool"},{"id":"a3cc46f4-02b9-41eb-9a04-74850b39474b","type":"ResetTool"},{"id":"2c4b3fb2-e436-4cb0-9cf3-f100a42ff16d","type":"HelpTool"}]},"id":"9b1c2632-b10a-4fdc-aa0e-518bec8add44","type":"Toolbar"},{"attributes":{},"id":"5d1cd664-195a-49f5-a712-866959d3174f","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"e3aa0343-b314-4376-8715-6a82165a9f0f","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8c50c172-eddc-457d-923c-000ec3ff2ff3","type":"BoxAnnotation"}],"root_ids":["024257f6-d7d9-4cb8-b1db-01d0eb2650a5"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"ba5fe2fc-a702-4682-bdae-76338090fbc6","roots":{"024257f6-d7d9-4cb8-b1db-01d0eb2650a5":"6dcf6324-119c-44c6-a064-70c454c1cc74"}}];
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