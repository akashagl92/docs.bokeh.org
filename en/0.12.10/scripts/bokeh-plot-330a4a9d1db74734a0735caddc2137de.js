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
      };var element = document.getElementById("85065ca9-8818-43e3-85f0-d82eded0bbb3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '85065ca9-8818-43e3-85f0-d82eded0bbb3' but no matching script tag was found. ")
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
                    var docs_json = {"fde6ee44-674d-4677-863f-9e06dbde15e3":{"roots":{"references":[{"attributes":{"below":[{"id":"681ce2e5-70f8-4798-aeb4-284d75b99a79","type":"LinearAxis"}],"border_fill_color":{"value":"whitesmoke"},"left":[{"id":"fb29e771-da28-4e33-abac-5103c2990ed2","type":"LinearAxis"}],"min_border_left":80,"plot_height":400,"plot_width":400,"renderers":[{"id":"681ce2e5-70f8-4798-aeb4-284d75b99a79","type":"LinearAxis"},{"id":"9a628453-ed2b-46bc-a2ef-6f8e185d814d","type":"Grid"},{"id":"fb29e771-da28-4e33-abac-5103c2990ed2","type":"LinearAxis"},{"id":"e3b75e6f-c1de-4584-ad2d-5e794b5274a2","type":"Grid"},{"id":"0624b1f7-eeb2-4e1a-9659-8426d088e004","type":"BoxAnnotation"},{"id":"9d38d19d-cfbf-4db8-8b03-1e6457387ff4","type":"GlyphRenderer"}],"title":{"id":"467b8685-52e8-4e04-971a-81cf405eb883","type":"Title"},"toolbar":{"id":"272abbfe-5177-4ea9-bbd5-4397dcb71a73","type":"Toolbar"},"x_range":{"id":"61655c2f-fd7c-447b-81d4-6f657d56cd54","type":"DataRange1d"},"x_scale":{"id":"0c4e2327-ea5b-4a3e-adc6-d63cb308672b","type":"LinearScale"},"y_range":{"id":"dcb6cdd3-ca61-4bec-bc9f-86d053965df1","type":"DataRange1d"},"y_scale":{"id":"db39df0e-ff87-4b2b-a3fe-3cd7ea7c7ba5","type":"LinearScale"}},"id":"89c3f8d1-73ee-4a7a-a47d-b517e1b15ffc","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"0624b1f7-eeb2-4e1a-9659-8426d088e004","type":"BoxAnnotation"}},"id":"4e8a9c7b-ecee-4db5-a5c0-762b699e9f61","type":"BoxZoomTool"},{"attributes":{},"id":"db39df0e-ff87-4b2b-a3fe-3cd7ea7c7ba5","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a621907f-fb24-486c-865f-eed803b13d65","type":"PanTool"},{"id":"542f8b50-5b19-4af4-be7d-3f2390cea3ea","type":"WheelZoomTool"},{"id":"4e8a9c7b-ecee-4db5-a5c0-762b699e9f61","type":"BoxZoomTool"},{"id":"19507076-8207-492d-a0bb-8d25f2f377b9","type":"SaveTool"},{"id":"b1f6a0a2-cd3a-4ca9-8064-d8caf17fffcb","type":"ResetTool"},{"id":"1df4d4a4-51ef-48df-b6d6-939913261b2a","type":"HelpTool"}]},"id":"272abbfe-5177-4ea9-bbd5-4397dcb71a73","type":"Toolbar"},{"attributes":{},"id":"542f8b50-5b19-4af4-be7d-3f2390cea3ea","type":"WheelZoomTool"},{"attributes":{},"id":"0c4e2327-ea5b-4a3e-adc6-d63cb308672b","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"467b8685-52e8-4e04-971a-81cf405eb883","type":"Title"},{"attributes":{},"id":"b1f6a0a2-cd3a-4ca9-8064-d8caf17fffcb","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9da0719-7a0f-46ff-94df-bedb4e99575a","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"89c3f8d1-73ee-4a7a-a47d-b517e1b15ffc","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cbdacd4-d5ac-4998-93b0-f1c7fa1515ef","type":"BasicTicker"}},"id":"e3b75e6f-c1de-4584-ad2d-5e794b5274a2","type":"Grid"},{"attributes":{},"id":"1df4d4a4-51ef-48df-b6d6-939913261b2a","type":"HelpTool"},{"attributes":{},"id":"9f0ac538-37f5-4964-8ecf-0e0a004fa988","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"98ae643c-a1b7-4ad1-860f-2f05115f490c","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"ed5fc096-9458-406d-aa57-e69db9febfe9","type":"BasicTickFormatter"},"plot":{"id":"89c3f8d1-73ee-4a7a-a47d-b517e1b15ffc","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cbdacd4-d5ac-4998-93b0-f1c7fa1515ef","type":"BasicTicker"}},"id":"fb29e771-da28-4e33-abac-5103c2990ed2","type":"LinearAxis"},{"attributes":{},"id":"ed5fc096-9458-406d-aa57-e69db9febfe9","type":"BasicTickFormatter"},{"attributes":{},"id":"19507076-8207-492d-a0bb-8d25f2f377b9","type":"SaveTool"},{"attributes":{},"id":"0cbdacd4-d5ac-4998-93b0-f1c7fa1515ef","type":"BasicTicker"},{"attributes":{},"id":"a621907f-fb24-486c-865f-eed803b13d65","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a78de0f9-a17a-40bd-b981-8ce2caf8598b","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0624b1f7-eeb2-4e1a-9659-8426d088e004","type":"BoxAnnotation"},{"attributes":{},"id":"c800559a-2f98-424d-ad3d-be749dc99182","type":"BasicTicker"},{"attributes":{"source":{"id":"98ae643c-a1b7-4ad1-860f-2f05115f490c","type":"ColumnDataSource"}},"id":"99592eca-ed18-451e-9e6d-c6e1669d8f2d","type":"CDSView"},{"attributes":{"callback":null},"id":"dcb6cdd3-ca61-4bec-bc9f-86d053965df1","type":"DataRange1d"},{"attributes":{"plot":{"id":"89c3f8d1-73ee-4a7a-a47d-b517e1b15ffc","subtype":"Figure","type":"Plot"},"ticker":{"id":"c800559a-2f98-424d-ad3d-be749dc99182","type":"BasicTicker"}},"id":"9a628453-ed2b-46bc-a2ef-6f8e185d814d","type":"Grid"},{"attributes":{"callback":null},"id":"61655c2f-fd7c-447b-81d4-6f657d56cd54","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9f0ac538-37f5-4964-8ecf-0e0a004fa988","type":"BasicTickFormatter"},"plot":{"id":"89c3f8d1-73ee-4a7a-a47d-b517e1b15ffc","subtype":"Figure","type":"Plot"},"ticker":{"id":"c800559a-2f98-424d-ad3d-be749dc99182","type":"BasicTicker"}},"id":"681ce2e5-70f8-4798-aeb4-284d75b99a79","type":"LinearAxis"},{"attributes":{"data_source":{"id":"98ae643c-a1b7-4ad1-860f-2f05115f490c","type":"ColumnDataSource"},"glyph":{"id":"a9da0719-7a0f-46ff-94df-bedb4e99575a","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a78de0f9-a17a-40bd-b981-8ce2caf8598b","type":"Circle"},"selection_glyph":null,"view":{"id":"99592eca-ed18-451e-9e6d-c6e1669d8f2d","type":"CDSView"}},"id":"9d38d19d-cfbf-4db8-8b03-1e6457387ff4","type":"GlyphRenderer"}],"root_ids":["89c3f8d1-73ee-4a7a-a47d-b517e1b15ffc"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"fde6ee44-674d-4677-863f-9e06dbde15e3","elementid":"85065ca9-8818-43e3-85f0-d82eded0bbb3","modelid":"89c3f8d1-73ee-4a7a-a47d-b517e1b15ffc"}];
                
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
