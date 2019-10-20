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
      };var element = document.getElementById("dc594903-8f62-432d-925c-68c41cb14453");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dc594903-8f62-432d-925c-68c41cb14453' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"b84d615d-fb22-468b-a39f-b3cdec821ba1":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"13935","type":"Circle"},{"attributes":{},"id":"13922","type":"ResetTool"},{"attributes":{},"id":"13940","type":"BasicTickFormatter"},{"attributes":{"bounds":[2,4],"formatter":{"id":"13942","type":"BasicTickFormatter"},"plot":{"id":"13899","subtype":"Figure","type":"Plot"},"ticker":{"id":"13909","type":"BasicTicker"}},"id":"13908","type":"LinearAxis"},{"attributes":{"overlay":{"id":"13926","type":"BoxAnnotation"}},"id":"13920","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"13934","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13926","type":"BoxAnnotation"},{"attributes":{},"id":"13942","type":"BasicTickFormatter"},{"attributes":{},"id":"13921","type":"SaveTool"},{"attributes":{"plot":{"id":"13899","subtype":"Figure","type":"Plot"},"ticker":{"id":"13909","type":"BasicTicker"}},"id":"13912","type":"Grid"},{"attributes":{},"id":"13946","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"13899","subtype":"Figure","type":"Plot"},"ticker":{"id":"13914","type":"BasicTicker"}},"id":"13917","type":"Grid"},{"attributes":{},"id":"13906","type":"LinearScale"},{"attributes":{},"id":"13904","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"13938","type":"Title"},{"attributes":{"callback":null},"id":"13902","type":"DataRange1d"},{"attributes":{"source":{"id":"13933","type":"ColumnDataSource"}},"id":"13937","type":"CDSView"},{"attributes":{},"id":"13919","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"13940","type":"BasicTickFormatter"},"plot":{"id":"13899","subtype":"Figure","type":"Plot"},"ticker":{"id":"13914","type":"BasicTicker"}},"id":"13913","type":"LinearAxis"},{"attributes":{},"id":"13923","type":"HelpTool"},{"attributes":{},"id":"13914","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13918","type":"PanTool"},{"id":"13919","type":"WheelZoomTool"},{"id":"13920","type":"BoxZoomTool"},{"id":"13921","type":"SaveTool"},{"id":"13922","type":"ResetTool"},{"id":"13923","type":"HelpTool"}]},"id":"13924","type":"Toolbar"},{"attributes":{"callback":null},"id":"13900","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"13945","type":"Selection"},"selection_policy":{"id":"13946","type":"UnionRenderers"}},"id":"13933","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"13908","type":"LinearAxis"}],"left":[{"id":"13913","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"13908","type":"LinearAxis"},{"id":"13912","type":"Grid"},{"id":"13913","type":"LinearAxis"},{"id":"13917","type":"Grid"},{"id":"13926","type":"BoxAnnotation"},{"id":"13936","type":"GlyphRenderer"}],"title":{"id":"13938","type":"Title"},"toolbar":{"id":"13924","type":"Toolbar"},"x_range":{"id":"13900","type":"DataRange1d"},"x_scale":{"id":"13904","type":"LinearScale"},"y_range":{"id":"13902","type":"DataRange1d"},"y_scale":{"id":"13906","type":"LinearScale"}},"id":"13899","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"13918","type":"PanTool"},{"attributes":{},"id":"13945","type":"Selection"},{"attributes":{},"id":"13909","type":"BasicTicker"},{"attributes":{"data_source":{"id":"13933","type":"ColumnDataSource"},"glyph":{"id":"13934","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13935","type":"Circle"},"selection_glyph":null,"view":{"id":"13937","type":"CDSView"}},"id":"13936","type":"GlyphRenderer"}],"root_ids":["13899"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"b84d615d-fb22-468b-a39f-b3cdec821ba1","roots":{"13899":"dc594903-8f62-432d-925c-68c41cb14453"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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