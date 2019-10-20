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
      };var element = document.getElementById("91d9998a-db84-4300-afde-7ebb0e131184");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '91d9998a-db84-4300-afde-7ebb0e131184' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"98b38b85-aae7-4e50-994a-b80d7ecb7706":{"roots":{"references":[{"attributes":{"source":{"id":"eac8a20a-b184-4c8b-bd45-ba73a2b3fc9d","type":"ColumnDataSource"}},"id":"f1477f8d-9938-48d7-b066-3c0571436bed","type":"CDSView"},{"attributes":{"below":[{"id":"ce1e010d-e66b-4075-a860-56eece2e7c40","type":"LinearAxis"}],"left":[{"id":"1ab577eb-2fca-4335-98fd-c1b7b83f3d45","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ce1e010d-e66b-4075-a860-56eece2e7c40","type":"LinearAxis"},{"id":"764937d7-8996-4762-aed5-3c0b964db7b2","type":"Grid"},{"id":"1ab577eb-2fca-4335-98fd-c1b7b83f3d45","type":"LinearAxis"},{"id":"bad2da7b-55f7-44ae-b6a2-59123d400f1b","type":"Grid"},{"id":"e8a7b744-e69c-4382-bcc4-a012401e73e5","type":"BoxAnnotation"},{"id":"990f92ca-d1a2-4487-b173-fdb5cc8efdc5","type":"GlyphRenderer"},{"id":"2c9c65b0-107f-4c89-a168-b8cc1de72bac","type":"GlyphRenderer"}],"title":{"id":"ce2a81e3-e5c6-4b66-afa1-90ad551cde4d","type":"Title"},"toolbar":{"id":"2653867b-23de-4f5a-aa65-e223ccd3af74","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"abe250db-2369-4080-ba46-d169f8108b4a","type":"DataRange1d"},"x_scale":{"id":"783f555b-a7f4-4809-9a49-2758eb36f809","type":"LinearScale"},"y_range":{"id":"68b009c3-2fde-4394-af40-308bce1afeb4","type":"DataRange1d"},"y_scale":{"id":"2897be04-49e2-47bc-9f9d-2004c4ac1be1","type":"LinearScale"}},"id":"ba755d59-e365-49fe-b483-0b6f990057a8","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"eac8a20a-b184-4c8b-bd45-ba73a2b3fc9d","type":"ColumnDataSource"},"glyph":{"id":"6ccc9471-72af-457c-8d03-1ab331e35f0f","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"70794861-53ee-4a52-860c-531b73ca32fa","type":"Text"},"selection_glyph":null,"view":{"id":"f1477f8d-9938-48d7-b066-3c0571436bed","type":"CDSView"}},"id":"2c9c65b0-107f-4c89-a168-b8cc1de72bac","type":"GlyphRenderer"},{"attributes":{},"id":"e000fd74-40d2-4537-a939-b2f1b4487367","type":"PanTool"},{"attributes":{},"id":"2897be04-49e2-47bc-9f9d-2004c4ac1be1","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"e000fd74-40d2-4537-a939-b2f1b4487367","type":"PanTool"},{"id":"5ac1cd5d-c738-4d57-9a6c-6518da5b9d73","type":"WheelZoomTool"},{"id":"a828b9ca-cabb-451c-9e5c-4d10802ac218","type":"BoxZoomTool"},{"id":"39648737-6238-4d87-aee7-4a701f23a689","type":"SaveTool"},{"id":"c792ccf3-8103-404b-b862-9e8f00a64ff3","type":"ResetTool"},{"id":"69260ff0-4f46-47c7-bf9f-090054e60bb2","type":"HelpTool"}]},"id":"2653867b-23de-4f5a-aa65-e223ccd3af74","type":"Toolbar"},{"attributes":{},"id":"69260ff0-4f46-47c7-bf9f-090054e60bb2","type":"HelpTool"},{"attributes":{},"id":"783f555b-a7f4-4809-9a49-2758eb36f809","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e8a7b744-e69c-4382-bcc4-a012401e73e5","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"93fc8fc1-8bd3-4fde-9a88-50bcb6689111","type":"ColumnDataSource"},"glyph":{"id":"39974bd9-732b-4fff-8be6-23818c6f3ec1","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33e4f73a-a2be-4aec-8c50-7a27e9926a64","type":"HexTile"},"selection_glyph":null,"view":{"id":"5fde4be2-8023-4a27-9759-c9228f300c5f","type":"CDSView"}},"id":"990f92ca-d1a2-4487-b173-fdb5cc8efdc5","type":"GlyphRenderer"},{"attributes":{"source":{"id":"93fc8fc1-8bd3-4fde-9a88-50bcb6689111","type":"ColumnDataSource"}},"id":"5fde4be2-8023-4a27-9759-c9228f300c5f","type":"CDSView"},{"attributes":{},"id":"5ac1cd5d-c738-4d57-9a6c-6518da5b9d73","type":"WheelZoomTool"},{"attributes":{},"id":"71d40aa8-a63f-4151-a1ff-25abda86104b","type":"BasicTicker"},{"attributes":{},"id":"160ae9d8-3d5d-4d19-89d9-0264b6f53f8f","type":"BasicTicker"},{"attributes":{},"id":"f0bdfba4-e9ae-4356-bd4c-7e1b354b5a5a","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"ba755d59-e365-49fe-b483-0b6f990057a8","subtype":"Figure","type":"Plot"},"ticker":{"id":"160ae9d8-3d5d-4d19-89d9-0264b6f53f8f","type":"BasicTicker"},"visible":false},"id":"bad2da7b-55f7-44ae-b6a2-59123d400f1b","type":"Grid"},{"attributes":{"formatter":{"id":"9c96df77-e46b-4c7b-adff-59cbacede0e2","type":"BasicTickFormatter"},"plot":{"id":"ba755d59-e365-49fe-b483-0b6f990057a8","subtype":"Figure","type":"Plot"},"ticker":{"id":"160ae9d8-3d5d-4d19-89d9-0264b6f53f8f","type":"BasicTicker"}},"id":"1ab577eb-2fca-4335-98fd-c1b7b83f3d45","type":"LinearAxis"},{"attributes":{},"id":"73c3253b-f179-4c57-97be-e4b91c62677a","type":"UnionRenderers"},{"attributes":{},"id":"653f271b-7772-4b7a-8ac0-41105b4db1eb","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"0b77eb3e-bd47-469c-a3fb-6224ee26c192","type":"BasicTickFormatter"},"plot":{"id":"ba755d59-e365-49fe-b483-0b6f990057a8","subtype":"Figure","type":"Plot"},"ticker":{"id":"71d40aa8-a63f-4151-a1ff-25abda86104b","type":"BasicTicker"}},"id":"ce1e010d-e66b-4075-a860-56eece2e7c40","type":"LinearAxis"},{"attributes":{},"id":"0b77eb3e-bd47-469c-a3fb-6224ee26c192","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ba755d59-e365-49fe-b483-0b6f990057a8","subtype":"Figure","type":"Plot"},"ticker":{"id":"71d40aa8-a63f-4151-a1ff-25abda86104b","type":"BasicTicker"},"visible":false},"id":"764937d7-8996-4762-aed5-3c0b964db7b2","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.5},"line_color":{"value":"white"},"q":{"field":"q"},"r":{"field":"r"}},"id":"39974bd9-732b-4fff-8be6-23818c6f3ec1","type":"HexTile"},{"attributes":{"plot":null,"text":""},"id":"ce2a81e3-e5c6-4b66-afa1-90ad551cde4d","type":"Title"},{"attributes":{"callback":null},"id":"68b009c3-2fde-4394-af40-308bce1afeb4","type":"DataRange1d"},{"attributes":{},"id":"c792ccf3-8103-404b-b862-9e8f00a64ff3","type":"ResetTool"},{"attributes":{"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6ccc9471-72af-457c-8d03-1ab331e35f0f","type":"Text"},{"attributes":{},"id":"d4a95581-f68f-4577-94ee-22917b0b5b2e","type":"Selection"},{"attributes":{},"id":"9c96df77-e46b-4c7b-adff-59cbacede0e2","type":"BasicTickFormatter"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"70794861-53ee-4a52-860c-531b73ca32fa","type":"Text"},{"attributes":{"callback":null,"data":{"fill_color":["firebrick","firebrick","firebrick","navy","navy","navy","navy"],"q":[0,0,0,-1,-1,1,1],"r":[0,-1,1,0,1,-1,0]},"selected":{"id":"d4a95581-f68f-4577-94ee-22917b0b5b2e","type":"Selection"},"selection_policy":{"id":"73c3253b-f179-4c57-97be-e4b91c62677a","type":"UnionRenderers"}},"id":"93fc8fc1-8bd3-4fde-9a88-50bcb6689111","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"text":["(0, 0)","(0, -1)","(0, 1)","(-1, 0)","(-1, 1)","(1, -1)","(1, 0)"],"x":{"__ndarray__":"AAAAAAAAAACqTFjoerbrv6pMWOh6tus/qkxY6Hq2+7+qTFjoerbrv6pMWOh6tus/qkxY6Hq2+z8=","dtype":"float64","shape":[7]},"y":{"__ndarray__":"AAAAAAAAAIAAAAAAAAD4PwAAAAAAAPi/AAAAAAAAAIAAAAAAAAD4vwAAAAAAAPg/AAAAAAAAAIA=","dtype":"float64","shape":[7]}},"selected":{"id":"f0bdfba4-e9ae-4356-bd4c-7e1b354b5a5a","type":"Selection"},"selection_policy":{"id":"653f271b-7772-4b7a-8ac0-41105b4db1eb","type":"UnionRenderers"}},"id":"eac8a20a-b184-4c8b-bd45-ba73a2b3fc9d","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"e8a7b744-e69c-4382-bcc4-a012401e73e5","type":"BoxAnnotation"}},"id":"a828b9ca-cabb-451c-9e5c-4d10802ac218","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"abe250db-2369-4080-ba46-d169f8108b4a","type":"DataRange1d"},{"attributes":{},"id":"39648737-6238-4d87-aee7-4a701f23a689","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"33e4f73a-a2be-4aec-8c50-7a27e9926a64","type":"HexTile"}],"root_ids":["ba755d59-e365-49fe-b483-0b6f990057a8"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"98b38b85-aae7-4e50-994a-b80d7ecb7706","roots":{"ba755d59-e365-49fe-b483-0b6f990057a8":"91d9998a-db84-4300-afde-7ebb0e131184"}}];
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