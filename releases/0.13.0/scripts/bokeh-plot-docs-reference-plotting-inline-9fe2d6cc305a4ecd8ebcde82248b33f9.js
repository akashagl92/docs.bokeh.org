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
      };var element = document.getElementById("5a5f3890-cca3-4ec5-acb8-7e5ec5c3ad26");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5a5f3890-cca3-4ec5-acb8-7e5ec5c3ad26' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e0a4e379-07a5-4f43-b950-c1a0fc190bef":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16716828-7d52-4cbb-908b-18dfbde14b93","type":"PanTool"},{"id":"cac04800-2a39-4d72-a4b9-3e5ee7988636","type":"WheelZoomTool"},{"id":"b49677e9-c9ba-4370-ba45-b68ef0f8bf72","type":"BoxZoomTool"},{"id":"f07b03ee-a688-4058-a867-496b59ca9bbb","type":"SaveTool"},{"id":"d7a9e5f0-b763-457a-97c3-f1bc1cb4f6ae","type":"ResetTool"},{"id":"049cc254-6909-4ef1-adfc-8f60e2e45a63","type":"HelpTool"}]},"id":"1eff9445-353f-437c-8b3b-293f651d6b3c","type":"Toolbar"},{"attributes":{"formatter":{"id":"3b019392-94e9-4afc-8161-683541f3a83b","type":"BasicTickFormatter"},"plot":{"id":"f227b992-5987-4c9b-a94e-1668bb400557","subtype":"Figure","type":"Plot"},"ticker":{"id":"b21f21f6-96b4-4d28-9bc4-eef8a1a3c07f","type":"BasicTicker"}},"id":"2d5bf64e-019f-459c-8fd7-473a8b68546d","type":"LinearAxis"},{"attributes":{"callback":null},"id":"11d7c4b4-afe8-407d-9cdc-db1f00e201d8","type":"DataRange1d"},{"attributes":{},"id":"b137c7db-e67a-421b-8375-76f4fefcbb62","type":"BasicTicker"},{"attributes":{},"id":"cac04800-2a39-4d72-a4b9-3e5ee7988636","type":"WheelZoomTool"},{"attributes":{"source":{"id":"01a42882-9613-4bfd-9667-053cc7fde483","type":"ColumnDataSource"}},"id":"891a6996-1494-47c4-988d-bad71c08ab46","type":"CDSView"},{"attributes":{},"id":"b21f21f6-96b4-4d28-9bc4-eef8a1a3c07f","type":"BasicTicker"},{"attributes":{},"id":"d7a9e5f0-b763-457a-97c3-f1bc1cb4f6ae","type":"ResetTool"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"f612917f-cc18-4ed0-8d24-78ef52a1c0e2","type":"Selection"},"selection_policy":{"id":"3aba344e-ae29-4ec3-b68e-8de450dab84c","type":"UnionRenderers"}},"id":"01a42882-9613-4bfd-9667-053cc7fde483","type":"ColumnDataSource"},{"attributes":{},"id":"049cc254-6909-4ef1-adfc-8f60e2e45a63","type":"HelpTool"},{"attributes":{},"id":"f07b03ee-a688-4058-a867-496b59ca9bbb","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"31f921c1-4fa4-4eed-bfec-1ded65a6b586","type":"X"},{"attributes":{"data_source":{"id":"01a42882-9613-4bfd-9667-053cc7fde483","type":"ColumnDataSource"},"glyph":{"id":"6b3a779a-af52-4190-b429-d3b107fc0ca2","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31f921c1-4fa4-4eed-bfec-1ded65a6b586","type":"X"},"selection_glyph":null,"view":{"id":"891a6996-1494-47c4-988d-bad71c08ab46","type":"CDSView"}},"id":"1e641556-6f7f-4c41-830b-1ea867ba1d35","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"ce1b7b0b-c000-4ed1-a185-5c79a25821fb","type":"BasicTickFormatter"},"plot":{"id":"f227b992-5987-4c9b-a94e-1668bb400557","subtype":"Figure","type":"Plot"},"ticker":{"id":"b137c7db-e67a-421b-8375-76f4fefcbb62","type":"BasicTicker"}},"id":"86d00993-ffad-4e27-a348-cb740f7f7cb1","type":"LinearAxis"},{"attributes":{"overlay":{"id":"d02abe9a-c25b-4620-b448-b1e162a3923c","type":"BoxAnnotation"}},"id":"b49677e9-c9ba-4370-ba45-b68ef0f8bf72","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"f227b992-5987-4c9b-a94e-1668bb400557","subtype":"Figure","type":"Plot"},"ticker":{"id":"b21f21f6-96b4-4d28-9bc4-eef8a1a3c07f","type":"BasicTicker"}},"id":"05c67286-0913-45db-902f-d5e7c769d532","type":"Grid"},{"attributes":{"below":[{"id":"86d00993-ffad-4e27-a348-cb740f7f7cb1","type":"LinearAxis"}],"left":[{"id":"2d5bf64e-019f-459c-8fd7-473a8b68546d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"86d00993-ffad-4e27-a348-cb740f7f7cb1","type":"LinearAxis"},{"id":"84916c57-b2d3-4096-a299-1884b85c9f76","type":"Grid"},{"id":"2d5bf64e-019f-459c-8fd7-473a8b68546d","type":"LinearAxis"},{"id":"05c67286-0913-45db-902f-d5e7c769d532","type":"Grid"},{"id":"d02abe9a-c25b-4620-b448-b1e162a3923c","type":"BoxAnnotation"},{"id":"1e641556-6f7f-4c41-830b-1ea867ba1d35","type":"GlyphRenderer"}],"title":{"id":"5d8e0e5a-3e94-41e2-9d60-a77986a1b781","type":"Title"},"toolbar":{"id":"1eff9445-353f-437c-8b3b-293f651d6b3c","type":"Toolbar"},"x_range":{"id":"11d7c4b4-afe8-407d-9cdc-db1f00e201d8","type":"DataRange1d"},"x_scale":{"id":"db63063a-3040-44a1-a56d-97ed52e9abc9","type":"LinearScale"},"y_range":{"id":"12e4e3cc-7f02-48f7-8b6e-ee12d0d7c4aa","type":"DataRange1d"},"y_scale":{"id":"dd1e7fd2-37a9-41b5-9406-659fe8239f69","type":"LinearScale"}},"id":"f227b992-5987-4c9b-a94e-1668bb400557","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3b019392-94e9-4afc-8161-683541f3a83b","type":"BasicTickFormatter"},{"attributes":{},"id":"dd1e7fd2-37a9-41b5-9406-659fe8239f69","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b3a779a-af52-4190-b429-d3b107fc0ca2","type":"X"},{"attributes":{"plot":null,"text":""},"id":"5d8e0e5a-3e94-41e2-9d60-a77986a1b781","type":"Title"},{"attributes":{},"id":"db63063a-3040-44a1-a56d-97ed52e9abc9","type":"LinearScale"},{"attributes":{"callback":null},"id":"12e4e3cc-7f02-48f7-8b6e-ee12d0d7c4aa","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d02abe9a-c25b-4620-b448-b1e162a3923c","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"f227b992-5987-4c9b-a94e-1668bb400557","subtype":"Figure","type":"Plot"},"ticker":{"id":"b137c7db-e67a-421b-8375-76f4fefcbb62","type":"BasicTicker"}},"id":"84916c57-b2d3-4096-a299-1884b85c9f76","type":"Grid"},{"attributes":{},"id":"16716828-7d52-4cbb-908b-18dfbde14b93","type":"PanTool"},{"attributes":{},"id":"f612917f-cc18-4ed0-8d24-78ef52a1c0e2","type":"Selection"},{"attributes":{},"id":"ce1b7b0b-c000-4ed1-a185-5c79a25821fb","type":"BasicTickFormatter"},{"attributes":{},"id":"3aba344e-ae29-4ec3-b68e-8de450dab84c","type":"UnionRenderers"}],"root_ids":["f227b992-5987-4c9b-a94e-1668bb400557"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"e0a4e379-07a5-4f43-b950-c1a0fc190bef","roots":{"f227b992-5987-4c9b-a94e-1668bb400557":"5a5f3890-cca3-4ec5-acb8-7e5ec5c3ad26"}}];
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