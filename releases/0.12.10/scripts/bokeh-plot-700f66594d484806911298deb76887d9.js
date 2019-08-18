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
      };var element = document.getElementById("2e0daae0-19aa-4122-b0fe-529a1f5bbcab");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2e0daae0-19aa-4122-b0fe-529a1f5bbcab' but no matching script tag was found. ")
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
                    var docs_json = {"fa1988a2-f30c-45d6-9bb4-0c764e8cc07f":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"959052c6-bbe6-4612-9b21-e1f77a842442","subtype":"Figure","type":"Plot"},"ticker":{"id":"7235d90d-c335-4328-9100-f9f73ae98faa","type":"BasicTicker"}},"id":"848d7ef2-d9c1-4b17-99e9-40f4add34bf1","type":"Grid"},{"attributes":{"formatter":{"id":"010da3ac-051f-46fc-8b3a-35b858dcec3f","type":"BasicTickFormatter"},"plot":{"id":"959052c6-bbe6-4612-9b21-e1f77a842442","subtype":"Figure","type":"Plot"},"ticker":{"id":"82efa737-6649-4221-b0e1-bd4fae7e127b","type":"BasicTicker"}},"id":"8cc2959a-4848-4304-aedf-07227ed3797e","type":"LinearAxis"},{"attributes":{"formatter":{"id":"00ba351c-62f5-48bc-9c17-5dbf079be20d","type":"BasicTickFormatter"},"plot":{"id":"959052c6-bbe6-4612-9b21-e1f77a842442","subtype":"Figure","type":"Plot"},"ticker":{"id":"7235d90d-c335-4328-9100-f9f73ae98faa","type":"BasicTicker"}},"id":"102199f1-5fb6-4e96-9d32-d8598d9ffdb1","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"68cd7b7a-e2fc-432b-9eb7-ddc774036252","type":"Title"},{"attributes":{"callback":null},"id":"e9f37fd3-267d-4ae9-bbb1-7c8079ea26e9","type":"DataRange1d"},{"attributes":{},"id":"7235d90d-c335-4328-9100-f9f73ae98faa","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5f032f49-62b6-4f55-b5cc-4c4fe13611d9","type":"PanTool"},{"id":"256d18ef-4042-4fbd-9deb-9c0d34b87461","type":"WheelZoomTool"},{"id":"70056662-310b-49d7-9187-a460238e0033","type":"BoxZoomTool"},{"id":"7c8a0ecb-0536-4e1f-8edd-800b02a9f7bd","type":"SaveTool"},{"id":"d3ebcddd-2ae3-49cd-b2e0-8d7609f8e7e5","type":"ResetTool"},{"id":"0a1a61d8-c494-4d96-9f7d-8a85de6a5edf","type":"HelpTool"}]},"id":"23b45802-2712-445d-88ce-5f4a926156d5","type":"Toolbar"},{"attributes":{},"id":"010da3ac-051f-46fc-8b3a-35b858dcec3f","type":"BasicTickFormatter"},{"attributes":{},"id":"f37a2743-b883-4cc4-99c2-80ee3070dc73","type":"LinearScale"},{"attributes":{"source":{"id":"fa2a5a8c-4323-4c2b-93bd-771299e1cb58","type":"ColumnDataSource"}},"id":"043e084d-e22e-4724-95d0-5f5946635407","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"019895f6-4c7f-46bc-a473-15e9e13f51ea","type":"Circle"},{"attributes":{},"id":"256d18ef-4042-4fbd-9deb-9c0d34b87461","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"fa2a5a8c-4323-4c2b-93bd-771299e1cb58","type":"ColumnDataSource"},"glyph":{"id":"019895f6-4c7f-46bc-a473-15e9e13f51ea","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d256c28f-da7e-45a2-b26e-04bef4b71e68","type":"Circle"},"selection_glyph":null,"view":{"id":"043e084d-e22e-4724-95d0-5f5946635407","type":"CDSView"}},"id":"7d9cdd9f-048c-4660-83b7-9a85e5755110","type":"GlyphRenderer"},{"attributes":{},"id":"82efa737-6649-4221-b0e1-bd4fae7e127b","type":"BasicTicker"},{"attributes":{"below":[{"id":"8cc2959a-4848-4304-aedf-07227ed3797e","type":"LinearAxis"}],"left":[{"id":"102199f1-5fb6-4e96-9d32-d8598d9ffdb1","type":"LinearAxis"}],"plot_height":300,"plot_width":700,"renderers":[{"id":"8cc2959a-4848-4304-aedf-07227ed3797e","type":"LinearAxis"},{"id":"1a4601ae-7bf0-428a-8b50-8824cd8cc2b6","type":"Grid"},{"id":"102199f1-5fb6-4e96-9d32-d8598d9ffdb1","type":"LinearAxis"},{"id":"848d7ef2-d9c1-4b17-99e9-40f4add34bf1","type":"Grid"},{"id":"37ba4031-111b-4d8b-9d30-cf3165408165","type":"BoxAnnotation"},{"id":"7d9cdd9f-048c-4660-83b7-9a85e5755110","type":"GlyphRenderer"}],"title":{"id":"68cd7b7a-e2fc-432b-9eb7-ddc774036252","type":"Title"},"toolbar":{"id":"23b45802-2712-445d-88ce-5f4a926156d5","type":"Toolbar"},"x_range":{"id":"e9f37fd3-267d-4ae9-bbb1-7c8079ea26e9","type":"DataRange1d"},"x_scale":{"id":"f37a2743-b883-4cc4-99c2-80ee3070dc73","type":"LinearScale"},"y_range":{"id":"904fad10-c825-4a8b-a379-f37c7d3642e7","type":"DataRange1d"},"y_scale":{"id":"7dc52877-9bb3-4e47-b6ed-4a227b6f61c2","type":"LinearScale"}},"id":"959052c6-bbe6-4612-9b21-e1f77a842442","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5f032f49-62b6-4f55-b5cc-4c4fe13611d9","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"fa2a5a8c-4323-4c2b-93bd-771299e1cb58","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d256c28f-da7e-45a2-b26e-04bef4b71e68","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37ba4031-111b-4d8b-9d30-cf3165408165","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"37ba4031-111b-4d8b-9d30-cf3165408165","type":"BoxAnnotation"}},"id":"70056662-310b-49d7-9187-a460238e0033","type":"BoxZoomTool"},{"attributes":{},"id":"7c8a0ecb-0536-4e1f-8edd-800b02a9f7bd","type":"SaveTool"},{"attributes":{},"id":"7dc52877-9bb3-4e47-b6ed-4a227b6f61c2","type":"LinearScale"},{"attributes":{},"id":"d3ebcddd-2ae3-49cd-b2e0-8d7609f8e7e5","type":"ResetTool"},{"attributes":{"plot":{"id":"959052c6-bbe6-4612-9b21-e1f77a842442","subtype":"Figure","type":"Plot"},"ticker":{"id":"82efa737-6649-4221-b0e1-bd4fae7e127b","type":"BasicTicker"}},"id":"1a4601ae-7bf0-428a-8b50-8824cd8cc2b6","type":"Grid"},{"attributes":{},"id":"0a1a61d8-c494-4d96-9f7d-8a85de6a5edf","type":"HelpTool"},{"attributes":{"callback":null},"id":"904fad10-c825-4a8b-a379-f37c7d3642e7","type":"DataRange1d"},{"attributes":{},"id":"00ba351c-62f5-48bc-9c17-5dbf079be20d","type":"BasicTickFormatter"}],"root_ids":["959052c6-bbe6-4612-9b21-e1f77a842442"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"fa1988a2-f30c-45d6-9bb4-0c764e8cc07f","elementid":"2e0daae0-19aa-4122-b0fe-529a1f5bbcab","modelid":"959052c6-bbe6-4612-9b21-e1f77a842442"}];
                
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
