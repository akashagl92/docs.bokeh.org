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
      };var element = document.getElementById("07fa0c98-32d1-4761-bb7c-1075bad3687d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '07fa0c98-32d1-4761-bb7c-1075bad3687d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"54c3a15f-af48-4b09-a480-6fa8c1dd70a7":{"roots":{"references":[{"attributes":{},"id":"14112","type":"BasicTickFormatter"},{"attributes":{},"id":"14116","type":"Selection"},{"attributes":{},"id":"14093","type":"HelpTool"},{"attributes":{"data_source":{"id":"14103","type":"ColumnDataSource"},"glyph":{"id":"14104","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14105","type":"Circle"},"selection_glyph":null,"view":{"id":"14107","type":"CDSView"}},"id":"14106","type":"GlyphRenderer"},{"attributes":{},"id":"14115","type":"UnionRenderers"},{"attributes":{},"id":"14088","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14104","type":"Circle"},{"attributes":{"callback":null},"id":"14072","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14116","type":"Selection"},"selection_policy":{"id":"14115","type":"UnionRenderers"}},"id":"14103","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"14078","type":"LinearAxis"}],"left":[{"id":"14083","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14078","type":"LinearAxis"},{"id":"14082","type":"Grid"},{"id":"14083","type":"LinearAxis"},{"id":"14087","type":"Grid"},{"id":"14096","type":"BoxAnnotation"},{"id":"14106","type":"GlyphRenderer"}],"title":{"id":"14110","type":"Title"},"toolbar":{"id":"14094","type":"Toolbar"},"x_range":{"id":"14070","type":"DataRange1d"},"x_scale":{"id":"14074","type":"LinearScale"},"y_range":{"id":"14072","type":"DataRange1d"},"y_scale":{"id":"14076","type":"LinearScale"}},"id":"14069","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14114","type":"BasicTickFormatter"},{"attributes":{},"id":"14089","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14105","type":"Circle"},{"attributes":{"overlay":{"id":"14096","type":"BoxAnnotation"}},"id":"14090","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14096","type":"BoxAnnotation"},{"attributes":{},"id":"14074","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"14069","subtype":"Figure","type":"Plot"},"ticker":{"id":"14084","type":"BasicTicker"}},"id":"14087","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"14110","type":"Title"},{"attributes":{},"id":"14076","type":"LinearScale"},{"attributes":{"formatter":{"id":"14112","type":"BasicTickFormatter"},"plot":{"id":"14069","subtype":"Figure","type":"Plot"},"ticker":{"id":"14084","type":"BasicTicker"}},"id":"14083","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14088","type":"PanTool"},{"id":"14089","type":"WheelZoomTool"},{"id":"14090","type":"BoxZoomTool"},{"id":"14091","type":"SaveTool"},{"id":"14092","type":"ResetTool"},{"id":"14093","type":"HelpTool"}]},"id":"14094","type":"Toolbar"},{"attributes":{"formatter":{"id":"14114","type":"BasicTickFormatter"},"plot":{"id":"14069","subtype":"Figure","type":"Plot"},"ticker":{"id":"14108","type":"FixedTicker"}},"id":"14078","type":"LinearAxis"},{"attributes":{},"id":"14092","type":"ResetTool"},{"attributes":{"plot":{"id":"14069","subtype":"Figure","type":"Plot"},"ticker":{"id":"14079","type":"BasicTicker"}},"id":"14082","type":"Grid"},{"attributes":{},"id":"14079","type":"BasicTicker"},{"attributes":{},"id":"14091","type":"SaveTool"},{"attributes":{"ticks":[2,3.5,4]},"id":"14108","type":"FixedTicker"},{"attributes":{"callback":null},"id":"14070","type":"DataRange1d"},{"attributes":{},"id":"14084","type":"BasicTicker"},{"attributes":{"source":{"id":"14103","type":"ColumnDataSource"}},"id":"14107","type":"CDSView"}],"root_ids":["14069"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"54c3a15f-af48-4b09-a480-6fa8c1dd70a7","roots":{"14069":"07fa0c98-32d1-4761-bb7c-1075bad3687d"}}];
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