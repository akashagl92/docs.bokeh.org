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
      };var element = document.getElementById("fa950fce-5404-4050-b932-fd37cbd78567");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fa950fce-5404-4050-b932-fd37cbd78567' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"aaddbe60-2054-40f6-aa57-ac74075a1781":{"roots":{"references":[{"attributes":{"below":[{"id":"3729a7bc-560b-437c-a4db-ef06e7618fd8","type":"LinearAxis"}],"left":[{"id":"4418b785-f572-43b5-af67-728ea70695b6","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3729a7bc-560b-437c-a4db-ef06e7618fd8","type":"LinearAxis"},{"id":"c638d5b4-53e6-4ce2-bfed-81ee68ac00d0","type":"Grid"},{"id":"4418b785-f572-43b5-af67-728ea70695b6","type":"LinearAxis"},{"id":"36ab9d3a-2bb2-4728-9ca0-f65af17b207d","type":"Grid"},{"id":"709dc026-7fe7-4d2e-92dc-f8966d117acc","type":"BoxAnnotation"},{"id":"c30b46fb-9d6d-4cb4-ba36-ac37dece728c","type":"GlyphRenderer"}],"title":{"id":"070f713a-bc5a-4208-8b99-f6090bd4f4ae","type":"Title"},"toolbar":{"id":"1bf82868-5c86-4bec-8c7e-3af78c65196a","type":"Toolbar"},"x_range":{"id":"70751363-59c1-47f8-81c2-b4b730ecb98d","type":"DataRange1d"},"x_scale":{"id":"28e44369-089e-48c8-9063-1b4fa7d141b7","type":"LinearScale"},"y_range":{"id":"8be973e1-9143-4c2e-b37e-28fb0050bb76","type":"DataRange1d"},"y_scale":{"id":"a6140ed6-7306-4517-822a-335615df6aa9","type":"LinearScale"}},"id":"3e6e3832-9f0b-4a11-882a-dda114a8d71a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ea16f623-f12b-449f-9ed7-df645bf0a90d","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"b3205dff-a2a3-499b-bb22-6c7b8f31e6e5","type":"PanTool"},{"id":"6477e4be-ff8a-4901-8858-3ead768059f7","type":"WheelZoomTool"},{"id":"cea5d0c8-a016-43c2-bfa5-f3f33082817e","type":"BoxZoomTool"},{"id":"99b16e2b-a967-4b27-ac8a-499f855a6484","type":"SaveTool"},{"id":"9dd6bcde-b029-4274-b2a3-2df5ab1ab0d3","type":"ResetTool"},{"id":"175f0aa9-b099-44c1-abc0-68ac5c247462","type":"HelpTool"}]},"id":"1bf82868-5c86-4bec-8c7e-3af78c65196a","type":"Toolbar"},{"attributes":{},"id":"d8e819c3-40e4-4694-a157-046175293de7","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"70751363-59c1-47f8-81c2-b4b730ecb98d","type":"DataRange1d"},{"attributes":{"overlay":{"id":"709dc026-7fe7-4d2e-92dc-f8966d117acc","type":"BoxAnnotation"}},"id":"cea5d0c8-a016-43c2-bfa5-f3f33082817e","type":"BoxZoomTool"},{"attributes":{},"id":"28e44369-089e-48c8-9063-1b4fa7d141b7","type":"LinearScale"},{"attributes":{},"id":"9dd6bcde-b029-4274-b2a3-2df5ab1ab0d3","type":"ResetTool"},{"attributes":{"callback":null},"id":"8be973e1-9143-4c2e-b37e-28fb0050bb76","type":"DataRange1d"},{"attributes":{},"id":"a6140ed6-7306-4517-822a-335615df6aa9","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"070f713a-bc5a-4208-8b99-f6090bd4f4ae","type":"Title"},{"attributes":{},"id":"f3abd27a-6ecb-4c44-bbc5-6ca64ff7739b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3e6e3832-9f0b-4a11-882a-dda114a8d71a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f981b38c-a2ef-43e5-af17-2232ac2a88a7","type":"BasicTicker"}},"id":"c638d5b4-53e6-4ce2-bfed-81ee68ac00d0","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3702fc36-06b3-4c75-aa33-cfbe8dba284e","type":"Square"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"709dc026-7fe7-4d2e-92dc-f8966d117acc","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"3e6e3832-9f0b-4a11-882a-dda114a8d71a","subtype":"Figure","type":"Plot"},"ticker":{"id":"27e9adba-7135-4242-ac18-3707da8cb2ed","type":"BasicTicker"}},"id":"36ab9d3a-2bb2-4728-9ca0-f65af17b207d","type":"Grid"},{"attributes":{"formatter":{"id":"ea16f623-f12b-449f-9ed7-df645bf0a90d","type":"BasicTickFormatter"},"plot":{"id":"3e6e3832-9f0b-4a11-882a-dda114a8d71a","subtype":"Figure","type":"Plot"},"ticker":{"id":"f981b38c-a2ef-43e5-af17-2232ac2a88a7","type":"BasicTicker"}},"id":"3729a7bc-560b-437c-a4db-ef06e7618fd8","type":"LinearAxis"},{"attributes":{},"id":"99b16e2b-a967-4b27-ac8a-499f855a6484","type":"SaveTool"},{"attributes":{},"id":"f981b38c-a2ef-43e5-af17-2232ac2a88a7","type":"BasicTicker"},{"attributes":{},"id":"175f0aa9-b099-44c1-abc0-68ac5c247462","type":"HelpTool"},{"attributes":{"formatter":{"id":"f3abd27a-6ecb-4c44-bbc5-6ca64ff7739b","type":"BasicTickFormatter"},"plot":{"id":"3e6e3832-9f0b-4a11-882a-dda114a8d71a","subtype":"Figure","type":"Plot"},"ticker":{"id":"27e9adba-7135-4242-ac18-3707da8cb2ed","type":"BasicTicker"}},"id":"4418b785-f572-43b5-af67-728ea70695b6","type":"LinearAxis"},{"attributes":{},"id":"6477e4be-ff8a-4901-8858-3ead768059f7","type":"WheelZoomTool"},{"attributes":{},"id":"27e9adba-7135-4242-ac18-3707da8cb2ed","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"4d25bce4-d6f9-44b7-ac53-e4ea577fd0af","type":"Selection"},"selection_policy":{"id":"d8e819c3-40e4-4694-a157-046175293de7","type":"UnionRenderers"}},"id":"2bc364a1-73f7-49d7-9801-e6f0e9006e9a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2bc364a1-73f7-49d7-9801-e6f0e9006e9a","type":"ColumnDataSource"},"glyph":{"id":"a3bff176-566c-4384-97e4-2b47907ce122","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3702fc36-06b3-4c75-aa33-cfbe8dba284e","type":"Square"},"selection_glyph":null,"view":{"id":"f03ef11f-2b09-4671-9cee-6dba34509e3f","type":"CDSView"}},"id":"c30b46fb-9d6d-4cb4-ba36-ac37dece728c","type":"GlyphRenderer"},{"attributes":{},"id":"b3205dff-a2a3-499b-bb22-6c7b8f31e6e5","type":"PanTool"},{"attributes":{"source":{"id":"2bc364a1-73f7-49d7-9801-e6f0e9006e9a","type":"ColumnDataSource"}},"id":"f03ef11f-2b09-4671-9cee-6dba34509e3f","type":"CDSView"},{"attributes":{},"id":"4d25bce4-d6f9-44b7-ac53-e4ea577fd0af","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a3bff176-566c-4384-97e4-2b47907ce122","type":"Square"}],"root_ids":["3e6e3832-9f0b-4a11-882a-dda114a8d71a"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"aaddbe60-2054-40f6-aa57-ac74075a1781","roots":{"3e6e3832-9f0b-4a11-882a-dda114a8d71a":"fa950fce-5404-4050-b932-fd37cbd78567"}}];
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