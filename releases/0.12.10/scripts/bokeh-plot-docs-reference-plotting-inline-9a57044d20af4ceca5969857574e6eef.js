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
      };var element = document.getElementById("d7304d2d-c285-4faf-95ce-6dfd766a115c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd7304d2d-c285-4faf-95ce-6dfd766a115c' but no matching script tag was found. ")
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
                    var docs_json = {"214faefd-3a39-437f-85c5-5fdaa419149c":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"a4dd8929-8831-4a87-9791-b40b91f451a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"995fd528-4821-441c-972b-f49e95ab8d79","type":"BasicTicker"}},"id":"1597dbed-8737-452a-af46-daa68cd3b9c4","type":"Grid"},{"attributes":{"data_source":{"id":"d1da087b-0aad-4270-80c7-e155e29b7341","type":"ColumnDataSource"},"glyph":{"id":"6b789f67-d5ed-4f1e-97dc-0ecd611b02b6","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c98f2c4a-6d6f-4952-8c57-6040d298ab00","type":"DiamondCross"},"selection_glyph":null,"view":{"id":"098c90fb-677b-4be2-945b-0e2ff60454d7","type":"CDSView"}},"id":"92fa4733-f613-46a6-b6ca-b6964a3704b1","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3b09e39e-dd09-4ac9-ae04-e674b804f9b6","type":"BasicTickFormatter"},"plot":{"id":"a4dd8929-8831-4a87-9791-b40b91f451a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"5edc9ab9-f92a-4d8b-95d5-b3f4e3877de4","type":"BasicTicker"}},"id":"595277cf-9a01-4486-896c-630b788a688a","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c98f2c4a-6d6f-4952-8c57-6040d298ab00","type":"DiamondCross"},{"attributes":{},"id":"a3cdf7df-8b42-4a03-b12d-e8d7c6dcbb8d","type":"PanTool"},{"attributes":{"callback":null},"id":"9f918444-eac6-4826-8037-a3be42d80c5c","type":"DataRange1d"},{"attributes":{"below":[{"id":"595277cf-9a01-4486-896c-630b788a688a","type":"LinearAxis"}],"left":[{"id":"2c24bad9-21d3-4fe8-8b44-670609ce0ada","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"595277cf-9a01-4486-896c-630b788a688a","type":"LinearAxis"},{"id":"11f604ca-ea01-4d41-8af8-7b095d9e76e1","type":"Grid"},{"id":"2c24bad9-21d3-4fe8-8b44-670609ce0ada","type":"LinearAxis"},{"id":"1597dbed-8737-452a-af46-daa68cd3b9c4","type":"Grid"},{"id":"7af21e89-0104-4af4-bb86-e214520ae352","type":"BoxAnnotation"},{"id":"92fa4733-f613-46a6-b6ca-b6964a3704b1","type":"GlyphRenderer"}],"title":{"id":"8051232d-4e85-4e6b-96de-7ff40b5d4ee8","type":"Title"},"toolbar":{"id":"d1ca205c-93e7-4ccc-a476-1b90bf9f3683","type":"Toolbar"},"x_range":{"id":"9f918444-eac6-4826-8037-a3be42d80c5c","type":"DataRange1d"},"x_scale":{"id":"f18c17f9-35ca-4176-acd3-6c6ae6f1749a","type":"LinearScale"},"y_range":{"id":"8652e9d1-22fd-449d-a964-ee5923039726","type":"DataRange1d"},"y_scale":{"id":"5cf562a9-2519-448b-9796-9df7d0d1fabf","type":"LinearScale"}},"id":"a4dd8929-8831-4a87-9791-b40b91f451a1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3b09e39e-dd09-4ac9-ae04-e674b804f9b6","type":"BasicTickFormatter"},{"attributes":{},"id":"67213835-b60e-423b-b101-6175a71c6dd6","type":"BasicTickFormatter"},{"attributes":{},"id":"0f2079ff-97d9-4169-89f2-a7b594e4c3aa","type":"HelpTool"},{"attributes":{"overlay":{"id":"7af21e89-0104-4af4-bb86-e214520ae352","type":"BoxAnnotation"}},"id":"f48d5638-0bfa-4204-b86e-640f1066b990","type":"BoxZoomTool"},{"attributes":{},"id":"5cf562a9-2519-448b-9796-9df7d0d1fabf","type":"LinearScale"},{"attributes":{"plot":{"id":"a4dd8929-8831-4a87-9791-b40b91f451a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"5edc9ab9-f92a-4d8b-95d5-b3f4e3877de4","type":"BasicTicker"}},"id":"11f604ca-ea01-4d41-8af8-7b095d9e76e1","type":"Grid"},{"attributes":{},"id":"5edc9ab9-f92a-4d8b-95d5-b3f4e3877de4","type":"BasicTicker"},{"attributes":{},"id":"de2bb36e-11e3-49a5-8f97-be238e4367cb","type":"WheelZoomTool"},{"attributes":{},"id":"fae39ee5-8743-40bc-bea1-57ef200838e1","type":"ResetTool"},{"attributes":{"callback":null},"id":"8652e9d1-22fd-449d-a964-ee5923039726","type":"DataRange1d"},{"attributes":{},"id":"6cff7bb3-3ee9-4396-82d7-0864676ef3bf","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7af21e89-0104-4af4-bb86-e214520ae352","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a3cdf7df-8b42-4a03-b12d-e8d7c6dcbb8d","type":"PanTool"},{"id":"de2bb36e-11e3-49a5-8f97-be238e4367cb","type":"WheelZoomTool"},{"id":"f48d5638-0bfa-4204-b86e-640f1066b990","type":"BoxZoomTool"},{"id":"6cff7bb3-3ee9-4396-82d7-0864676ef3bf","type":"SaveTool"},{"id":"fae39ee5-8743-40bc-bea1-57ef200838e1","type":"ResetTool"},{"id":"0f2079ff-97d9-4169-89f2-a7b594e4c3aa","type":"HelpTool"}]},"id":"d1ca205c-93e7-4ccc-a476-1b90bf9f3683","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b789f67-d5ed-4f1e-97dc-0ecd611b02b6","type":"DiamondCross"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"d1da087b-0aad-4270-80c7-e155e29b7341","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"8051232d-4e85-4e6b-96de-7ff40b5d4ee8","type":"Title"},{"attributes":{"formatter":{"id":"67213835-b60e-423b-b101-6175a71c6dd6","type":"BasicTickFormatter"},"plot":{"id":"a4dd8929-8831-4a87-9791-b40b91f451a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"995fd528-4821-441c-972b-f49e95ab8d79","type":"BasicTicker"}},"id":"2c24bad9-21d3-4fe8-8b44-670609ce0ada","type":"LinearAxis"},{"attributes":{},"id":"995fd528-4821-441c-972b-f49e95ab8d79","type":"BasicTicker"},{"attributes":{},"id":"f18c17f9-35ca-4176-acd3-6c6ae6f1749a","type":"LinearScale"},{"attributes":{"source":{"id":"d1da087b-0aad-4270-80c7-e155e29b7341","type":"ColumnDataSource"}},"id":"098c90fb-677b-4be2-945b-0e2ff60454d7","type":"CDSView"}],"root_ids":["a4dd8929-8831-4a87-9791-b40b91f451a1"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"214faefd-3a39-437f-85c5-5fdaa419149c","elementid":"d7304d2d-c285-4faf-95ce-6dfd766a115c","modelid":"a4dd8929-8831-4a87-9791-b40b91f451a1"}];
                
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
