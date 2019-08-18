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
      };var element = document.getElementById("c32c2485-4d2e-44ba-be96-61cff27e0ddf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c32c2485-4d2e-44ba-be96-61cff27e0ddf' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"55e1e180-3f75-43bb-949d-9ab965c517f7":{"roots":{"references":[{"attributes":{},"id":"10802","type":"BasicTickFormatter"},{"attributes":{},"id":"10781","type":"WheelZoomTool"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10796","type":"Line"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"10807","type":"Selection"},"selection_policy":{"id":"10806","type":"UnionRenderers"}},"id":"10795","type":"ColumnDataSource"},{"attributes":{},"id":"10780","type":"PanTool"},{"attributes":{},"id":"10785","type":"HelpTool"},{"attributes":{},"id":"10783","type":"SaveTool"},{"attributes":{},"id":"10804","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"10788","type":"BoxAnnotation"}},"id":"10782","type":"BoxZoomTool"},{"attributes":{},"id":"10766","type":"LinearScale"},{"attributes":{},"id":"10776","type":"BasicTicker"},{"attributes":{"below":[{"id":"10770","type":"LinearAxis"}],"left":[{"id":"10775","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"10770","type":"LinearAxis"},{"id":"10774","type":"Grid"},{"id":"10775","type":"LinearAxis"},{"id":"10779","type":"Grid"},{"id":"10788","type":"BoxAnnotation"},{"id":"10798","type":"GlyphRenderer"}],"title":{"id":"10800","type":"Title"},"toolbar":{"id":"10786","type":"Toolbar"},"x_range":{"id":"10762","type":"DataRange1d"},"x_scale":{"id":"10766","type":"LinearScale"},"y_range":{"id":"10764","type":"DataRange1d"},"y_scale":{"id":"10768","type":"LinearScale"}},"id":"10761","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10807","type":"Selection"},{"attributes":{"callback":null},"id":"10764","type":"DataRange1d"},{"attributes":{},"id":"10806","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"10804","type":"BasicTickFormatter"},"plot":{"id":"10761","subtype":"Figure","type":"Plot"},"ticker":{"id":"10771","type":"BasicTicker"}},"id":"10770","type":"LinearAxis"},{"attributes":{"source":{"id":"10795","type":"ColumnDataSource"}},"id":"10799","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"10800","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"10761","subtype":"Figure","type":"Plot"},"ticker":{"id":"10776","type":"BasicTicker"}},"id":"10779","type":"Grid"},{"attributes":{},"id":"10784","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10797","type":"Line"},{"attributes":{"plot":{"id":"10761","subtype":"Figure","type":"Plot"},"ticker":{"id":"10771","type":"BasicTicker"}},"id":"10774","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10780","type":"PanTool"},{"id":"10781","type":"WheelZoomTool"},{"id":"10782","type":"BoxZoomTool"},{"id":"10783","type":"SaveTool"},{"id":"10784","type":"ResetTool"},{"id":"10785","type":"HelpTool"}]},"id":"10786","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10788","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"10762","type":"DataRange1d"},{"attributes":{"data_source":{"id":"10795","type":"ColumnDataSource"},"glyph":{"id":"10796","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10797","type":"Line"},"selection_glyph":null,"view":{"id":"10799","type":"CDSView"}},"id":"10798","type":"GlyphRenderer"},{"attributes":{},"id":"10768","type":"LinearScale"},{"attributes":{"formatter":{"id":"10802","type":"BasicTickFormatter"},"plot":{"id":"10761","subtype":"Figure","type":"Plot"},"ticker":{"id":"10776","type":"BasicTicker"}},"id":"10775","type":"LinearAxis"},{"attributes":{},"id":"10771","type":"BasicTicker"}],"root_ids":["10761"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"55e1e180-3f75-43bb-949d-9ab965c517f7","roots":{"10761":"c32c2485-4d2e-44ba-be96-61cff27e0ddf"}}];
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