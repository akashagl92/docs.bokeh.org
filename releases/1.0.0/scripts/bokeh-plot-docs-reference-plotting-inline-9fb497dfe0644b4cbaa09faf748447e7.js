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
      };var element = document.getElementById("dae90294-94f3-4cef-aac5-8b69d0097a1c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dae90294-94f3-4cef-aac5-8b69d0097a1c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bba89c7d-f903-4d1a-a3c7-ec950945562f":{"roots":{"references":[{"attributes":{},"id":"34125","type":"BasicTickFormatter"},{"attributes":{},"id":"34104","type":"ResetTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"34117","type":"Quad"},{"attributes":{},"id":"34096","type":"BasicTicker"},{"attributes":{},"id":"34123","type":"BasicTickFormatter"},{"attributes":{},"id":"34105","type":"HelpTool"},{"attributes":{},"id":"34127","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"34081","subtype":"Figure","type":"Plot"},"ticker":{"id":"34096","type":"BasicTicker"}},"id":"34099","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"34121","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34100","type":"PanTool"},{"id":"34101","type":"WheelZoomTool"},{"id":"34102","type":"BoxZoomTool"},{"id":"34103","type":"SaveTool"},{"id":"34104","type":"ResetTool"},{"id":"34105","type":"HelpTool"}]},"id":"34106","type":"Toolbar"},{"attributes":{},"id":"34086","type":"LinearScale"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"34116","type":"Quad"},{"attributes":{},"id":"34103","type":"SaveTool"},{"attributes":{"formatter":{"id":"34123","type":"BasicTickFormatter"},"plot":{"id":"34081","subtype":"Figure","type":"Plot"},"ticker":{"id":"34091","type":"BasicTicker"}},"id":"34090","type":"LinearAxis"},{"attributes":{"source":{"id":"34115","type":"ColumnDataSource"}},"id":"34119","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34108","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"34084","type":"DataRange1d"},{"attributes":{"data_source":{"id":"34115","type":"ColumnDataSource"},"glyph":{"id":"34116","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34117","type":"Quad"},"selection_glyph":null,"view":{"id":"34119","type":"CDSView"}},"id":"34118","type":"GlyphRenderer"},{"attributes":{},"id":"34100","type":"PanTool"},{"attributes":{},"id":"34101","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"34081","subtype":"Figure","type":"Plot"},"ticker":{"id":"34091","type":"BasicTicker"}},"id":"34094","type":"Grid"},{"attributes":{},"id":"34128","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"34082","type":"DataRange1d"},{"attributes":{"overlay":{"id":"34108","type":"BoxAnnotation"}},"id":"34102","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"34090","type":"LinearAxis"}],"left":[{"id":"34095","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34090","type":"LinearAxis"},{"id":"34094","type":"Grid"},{"id":"34095","type":"LinearAxis"},{"id":"34099","type":"Grid"},{"id":"34108","type":"BoxAnnotation"},{"id":"34118","type":"GlyphRenderer"}],"title":{"id":"34121","type":"Title"},"toolbar":{"id":"34106","type":"Toolbar"},"x_range":{"id":"34082","type":"DataRange1d"},"x_scale":{"id":"34086","type":"LinearScale"},"y_range":{"id":"34084","type":"DataRange1d"},"y_scale":{"id":"34088","type":"LinearScale"}},"id":"34081","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"34125","type":"BasicTickFormatter"},"plot":{"id":"34081","subtype":"Figure","type":"Plot"},"ticker":{"id":"34096","type":"BasicTicker"}},"id":"34095","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]},"selected":{"id":"34127","type":"Selection"},"selection_policy":{"id":"34128","type":"UnionRenderers"}},"id":"34115","type":"ColumnDataSource"},{"attributes":{},"id":"34091","type":"BasicTicker"},{"attributes":{},"id":"34088","type":"LinearScale"}],"root_ids":["34081"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"bba89c7d-f903-4d1a-a3c7-ec950945562f","roots":{"34081":"dae90294-94f3-4cef-aac5-8b69d0097a1c"}}];
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