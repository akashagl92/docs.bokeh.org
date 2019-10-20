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
      };var element = document.getElementById("b0dcbe39-eea4-481c-b5c3-2130da8c78f3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b0dcbe39-eea4-481c-b5c3-2130da8c78f3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"45a23760-59e0-4d93-a356-b0f87a5a69be":{"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"center","x":{"field":"x"},"y":{"field":"y"}},"id":"10878","type":"Step"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10861","type":"PanTool"},{"id":"10862","type":"WheelZoomTool"},{"id":"10863","type":"BoxZoomTool"},{"id":"10864","type":"SaveTool"},{"id":"10865","type":"ResetTool"},{"id":"10866","type":"HelpTool"}]},"id":"10867","type":"Toolbar"},{"attributes":{},"id":"10857","type":"BasicTicker"},{"attributes":{},"id":"10866","type":"HelpTool"},{"attributes":{},"id":"10886","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"10851","type":"LinearAxis"}],"left":[{"id":"10856","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"10851","type":"LinearAxis"},{"id":"10855","type":"Grid"},{"id":"10856","type":"LinearAxis"},{"id":"10860","type":"Grid"},{"id":"10869","type":"BoxAnnotation"},{"id":"10879","type":"GlyphRenderer"}],"title":{"id":"10882","type":"Title"},"toolbar":{"id":"10867","type":"Toolbar"},"x_range":{"id":"10843","type":"DataRange1d"},"x_scale":{"id":"10847","type":"LinearScale"},"y_range":{"id":"10845","type":"DataRange1d"},"y_scale":{"id":"10849","type":"LinearScale"}},"id":"10842","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"10882","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"10842","subtype":"Figure","type":"Plot"},"ticker":{"id":"10857","type":"BasicTicker"}},"id":"10860","type":"Grid"},{"attributes":{"callback":null},"id":"10843","type":"DataRange1d"},{"attributes":{},"id":"10884","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"10845","type":"DataRange1d"},{"attributes":{},"id":"10889","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"center","x":{"field":"x"},"y":{"field":"y"}},"id":"10877","type":"Step"},{"attributes":{"data_source":{"id":"10876","type":"ColumnDataSource"},"glyph":{"id":"10877","type":"Step"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10878","type":"Step"},"selection_glyph":null,"view":{"id":"10880","type":"CDSView"}},"id":"10879","type":"GlyphRenderer"},{"attributes":{},"id":"10847","type":"LinearScale"},{"attributes":{},"id":"10888","type":"Selection"},{"attributes":{},"id":"10849","type":"LinearScale"},{"attributes":{},"id":"10861","type":"PanTool"},{"attributes":{"formatter":{"id":"10884","type":"BasicTickFormatter"},"plot":{"id":"10842","subtype":"Figure","type":"Plot"},"ticker":{"id":"10852","type":"BasicTicker"}},"id":"10851","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10869","type":"BoxAnnotation"},{"attributes":{},"id":"10862","type":"WheelZoomTool"},{"attributes":{"source":{"id":"10876","type":"ColumnDataSource"}},"id":"10880","type":"CDSView"},{"attributes":{},"id":"10852","type":"BasicTicker"},{"attributes":{"overlay":{"id":"10869","type":"BoxAnnotation"}},"id":"10863","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"10888","type":"Selection"},"selection_policy":{"id":"10889","type":"UnionRenderers"}},"id":"10876","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"10842","subtype":"Figure","type":"Plot"},"ticker":{"id":"10852","type":"BasicTicker"}},"id":"10855","type":"Grid"},{"attributes":{},"id":"10864","type":"SaveTool"},{"attributes":{"formatter":{"id":"10886","type":"BasicTickFormatter"},"plot":{"id":"10842","subtype":"Figure","type":"Plot"},"ticker":{"id":"10857","type":"BasicTicker"}},"id":"10856","type":"LinearAxis"},{"attributes":{},"id":"10865","type":"ResetTool"}],"root_ids":["10842"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"45a23760-59e0-4d93-a356-b0f87a5a69be","roots":{"10842":"b0dcbe39-eea4-481c-b5c3-2130da8c78f3"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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