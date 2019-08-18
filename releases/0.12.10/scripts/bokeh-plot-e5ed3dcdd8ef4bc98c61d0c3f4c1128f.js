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
      };var element = document.getElementById("1907d4cf-cef0-4059-8cbf-ca865aedbc5a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1907d4cf-cef0-4059-8cbf-ca865aedbc5a' but no matching script tag was found. ")
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
                    var docs_json = {"b3d3b50f-ce9d-4b93-8e59-09b11cb707f3":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f3789ae9-060f-4959-9fc5-692ef4f88f4e","type":"PanTool"},{"id":"4ae6d3e7-0434-4e82-9648-2a2ba3c8d37f","type":"WheelZoomTool"},{"id":"bf34fe21-f152-471f-95ba-32d54a897e26","type":"BoxZoomTool"},{"id":"75c42562-842a-4c63-a61e-3a179dc5bce1","type":"SaveTool"},{"id":"61aa743b-612b-4d6c-8d71-8cb08b14324c","type":"ResetTool"},{"id":"e16cd61d-5b07-46b8-a3bb-efa5c4742458","type":"HelpTool"}]},"id":"2381c1ce-9d02-4988-af25-15bf807304fa","type":"Toolbar"},{"attributes":{},"id":"e3e752fb-a99c-43c2-a881-0a0f170e0b5a","type":"BasicTicker"},{"attributes":{"plot":{"id":"91cf6595-d605-46ca-8d7d-b75968a80fa4","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3e752fb-a99c-43c2-a881-0a0f170e0b5a","type":"BasicTicker"}},"id":"5790a81a-b842-4be5-bff2-c576dc2cc749","type":"Grid"},{"attributes":{},"id":"75c42562-842a-4c63-a61e-3a179dc5bce1","type":"SaveTool"},{"attributes":{"data_source":{"id":"b49832e1-6f97-4ee4-9d7a-1ec0790b9340","type":"ColumnDataSource"},"glyph":{"id":"7f6303b8-f798-4415-bf28-83b4e86e8769","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b367d45a-8f34-40fd-bd74-7efde10e538d","type":"Circle"},"selection_glyph":null,"view":{"id":"135a59cc-9021-433e-9916-aa9f2326d950","type":"CDSView"}},"id":"81b597a5-981b-49af-b5fa-a540e6372469","type":"GlyphRenderer"},{"attributes":{},"id":"c3d31ad1-a93f-466c-8184-2411dd3d0d3c","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"b49832e1-6f97-4ee4-9d7a-1ec0790b9340","type":"ColumnDataSource"}},"id":"135a59cc-9021-433e-9916-aa9f2326d950","type":"CDSView"},{"attributes":{"below":[{"id":"6bb709d0-5c3d-43af-a24c-12a0c97b5a8a","type":"LinearAxis"}],"left":[{"id":"dbec030e-c8d3-476b-b35d-183033c2d668","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"6bb709d0-5c3d-43af-a24c-12a0c97b5a8a","type":"LinearAxis"},{"id":"5790a81a-b842-4be5-bff2-c576dc2cc749","type":"Grid"},{"id":"dbec030e-c8d3-476b-b35d-183033c2d668","type":"LinearAxis"},{"id":"3cf5f0ea-d692-4f16-a449-867ff5d05a7f","type":"Grid"},{"id":"95554a17-6f73-4fcf-a8f4-73c2b307ee26","type":"BoxAnnotation"},{"id":"81b597a5-981b-49af-b5fa-a540e6372469","type":"GlyphRenderer"}],"title":{"id":"e55956d9-0ad5-4d8c-b017-21daf05b52ed","type":"Title"},"toolbar":{"id":"2381c1ce-9d02-4988-af25-15bf807304fa","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"c63d2f2e-ad48-4b3a-af50-371aaf1dfae3","type":"DataRange1d"},"x_scale":{"id":"0bb81e9e-9f1e-44b6-bf78-d6a665803929","type":"LinearScale"},"y_range":{"id":"e3721a74-b61a-4ce7-b137-68021e28f084","type":"DataRange1d"},"y_scale":{"id":"790b3126-2cc1-4158-a78e-0a58d8287abb","type":"LinearScale"}},"id":"91cf6595-d605-46ca-8d7d-b75968a80fa4","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b367d45a-8f34-40fd-bd74-7efde10e538d","type":"Circle"},{"attributes":{"callback":null},"id":"c63d2f2e-ad48-4b3a-af50-371aaf1dfae3","type":"DataRange1d"},{"attributes":{},"id":"f3789ae9-060f-4959-9fc5-692ef4f88f4e","type":"PanTool"},{"attributes":{"plot":null,"text":"Top Title with Toolbar"},"id":"e55956d9-0ad5-4d8c-b017-21daf05b52ed","type":"Title"},{"attributes":{},"id":"790b3126-2cc1-4158-a78e-0a58d8287abb","type":"LinearScale"},{"attributes":{},"id":"4ae6d3e7-0434-4e82-9648-2a2ba3c8d37f","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"e3721a74-b61a-4ce7-b137-68021e28f084","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"b49832e1-6f97-4ee4-9d7a-1ec0790b9340","type":"ColumnDataSource"},{"attributes":{},"id":"e16cd61d-5b07-46b8-a3bb-efa5c4742458","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"91cf6595-d605-46ca-8d7d-b75968a80fa4","subtype":"Figure","type":"Plot"},"ticker":{"id":"50335316-50b3-462f-ae00-7cdb1fcf83c4","type":"BasicTicker"}},"id":"3cf5f0ea-d692-4f16-a449-867ff5d05a7f","type":"Grid"},{"attributes":{},"id":"61aa743b-612b-4d6c-8d71-8cb08b14324c","type":"ResetTool"},{"attributes":{"overlay":{"id":"95554a17-6f73-4fcf-a8f4-73c2b307ee26","type":"BoxAnnotation"}},"id":"bf34fe21-f152-471f-95ba-32d54a897e26","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"c3d31ad1-a93f-466c-8184-2411dd3d0d3c","type":"BasicTickFormatter"},"plot":{"id":"91cf6595-d605-46ca-8d7d-b75968a80fa4","subtype":"Figure","type":"Plot"},"ticker":{"id":"50335316-50b3-462f-ae00-7cdb1fcf83c4","type":"BasicTicker"}},"id":"dbec030e-c8d3-476b-b35d-183033c2d668","type":"LinearAxis"},{"attributes":{},"id":"6180a040-a90d-494a-a04b-51fb6ddc82cd","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"6180a040-a90d-494a-a04b-51fb6ddc82cd","type":"BasicTickFormatter"},"plot":{"id":"91cf6595-d605-46ca-8d7d-b75968a80fa4","subtype":"Figure","type":"Plot"},"ticker":{"id":"e3e752fb-a99c-43c2-a881-0a0f170e0b5a","type":"BasicTicker"}},"id":"6bb709d0-5c3d-43af-a24c-12a0c97b5a8a","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95554a17-6f73-4fcf-a8f4-73c2b307ee26","type":"BoxAnnotation"},{"attributes":{},"id":"50335316-50b3-462f-ae00-7cdb1fcf83c4","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7f6303b8-f798-4415-bf28-83b4e86e8769","type":"Circle"},{"attributes":{},"id":"0bb81e9e-9f1e-44b6-bf78-d6a665803929","type":"LinearScale"}],"root_ids":["91cf6595-d605-46ca-8d7d-b75968a80fa4"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"b3d3b50f-ce9d-4b93-8e59-09b11cb707f3","elementid":"1907d4cf-cef0-4059-8cbf-ca865aedbc5a","modelid":"91cf6595-d605-46ca-8d7d-b75968a80fa4"}];
                
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
