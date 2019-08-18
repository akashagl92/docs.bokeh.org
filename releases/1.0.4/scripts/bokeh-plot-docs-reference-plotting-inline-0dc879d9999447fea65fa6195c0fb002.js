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
      };var element = document.getElementById("017390bf-367a-4e8e-989d-218d68d092c4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '017390bf-367a-4e8e-989d-218d68d092c4' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"5965ab59-f425-4104-969a-5dda1ce45ce9":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"34901","type":"Title"},{"attributes":{"formatter":{"id":"34903","type":"BasicTickFormatter"},"plot":{"id":"34862","subtype":"Figure","type":"Plot"},"ticker":{"id":"34877","type":"BasicTicker"}},"id":"34876","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"34862","subtype":"Figure","type":"Plot"},"ticker":{"id":"34877","type":"BasicTicker"}},"id":"34880","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34889","type":"BoxAnnotation"},{"attributes":{},"id":"34886","type":"HelpTool"},{"attributes":{"plot":{"id":"34862","subtype":"Figure","type":"Plot"},"ticker":{"id":"34872","type":"BasicTicker"}},"id":"34875","type":"Grid"},{"attributes":{"formatter":{"id":"34905","type":"BasicTickFormatter"},"plot":{"id":"34862","subtype":"Figure","type":"Plot"},"ticker":{"id":"34872","type":"BasicTicker"}},"id":"34871","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34881","type":"PanTool"},{"id":"34882","type":"WheelZoomTool"},{"id":"34883","type":"BoxZoomTool"},{"id":"34884","type":"SaveTool"},{"id":"34885","type":"ResetTool"},{"id":"34886","type":"HelpTool"}]},"id":"34887","type":"Toolbar"},{"attributes":{},"id":"34872","type":"BasicTicker"},{"attributes":{"source":{"id":"34896","type":"ColumnDataSource"}},"id":"34900","type":"CDSView"},{"attributes":{},"id":"34908","type":"Selection"},{"attributes":{"data_source":{"id":"34896","type":"ColumnDataSource"},"glyph":{"id":"34897","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34898","type":"VBar"},"selection_glyph":null,"view":{"id":"34900","type":"CDSView"}},"id":"34899","type":"GlyphRenderer"},{"attributes":{},"id":"34884","type":"SaveTool"},{"attributes":{},"id":"34905","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"34889","type":"BoxAnnotation"}},"id":"34883","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"34863","type":"DataRange1d"},{"attributes":{},"id":"34907","type":"UnionRenderers"},{"attributes":{},"id":"34882","type":"WheelZoomTool"},{"attributes":{},"id":"34903","type":"BasicTickFormatter"},{"attributes":{},"id":"34877","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"34897","type":"VBar"},{"attributes":{},"id":"34881","type":"PanTool"},{"attributes":{},"id":"34867","type":"LinearScale"},{"attributes":{"below":[{"id":"34871","type":"LinearAxis"}],"left":[{"id":"34876","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34871","type":"LinearAxis"},{"id":"34875","type":"Grid"},{"id":"34876","type":"LinearAxis"},{"id":"34880","type":"Grid"},{"id":"34889","type":"BoxAnnotation"},{"id":"34899","type":"GlyphRenderer"}],"title":{"id":"34901","type":"Title"},"toolbar":{"id":"34887","type":"Toolbar"},"x_range":{"id":"34863","type":"DataRange1d"},"x_scale":{"id":"34867","type":"LinearScale"},"y_range":{"id":"34865","type":"DataRange1d"},"y_scale":{"id":"34869","type":"LinearScale"}},"id":"34862","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34885","type":"ResetTool"},{"attributes":{},"id":"34869","type":"LinearScale"},{"attributes":{"callback":null,"data":{"top":[1,2,3],"x":[1,2,3]},"selected":{"id":"34908","type":"Selection"},"selection_policy":{"id":"34907","type":"UnionRenderers"}},"id":"34896","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"34898","type":"VBar"},{"attributes":{"callback":null},"id":"34865","type":"DataRange1d"}],"root_ids":["34862"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"5965ab59-f425-4104-969a-5dda1ce45ce9","roots":{"34862":"017390bf-367a-4e8e-989d-218d68d092c4"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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