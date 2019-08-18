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
      };var element = document.getElementById("dbbf09bd-428c-420b-9ff7-d7b46abcb2cd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dbbf09bd-428c-420b-9ff7-d7b46abcb2cd' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8ca522ef-b1ff-4f41-9678-1ea92cf36b37":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"10591","subtype":"Figure","type":"Plot"},"ticker":{"id":"10606","type":"BasicTicker"}},"id":"10609","type":"Grid"},{"attributes":{},"id":"10638","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"10632","type":"BasicTickFormatter"},"plot":{"id":"10591","subtype":"Figure","type":"Plot"},"ticker":{"id":"10606","type":"BasicTicker"}},"id":"10605","type":"LinearAxis"},{"attributes":{"data_source":{"id":"10625","type":"ColumnDataSource"},"glyph":{"id":"10626","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10627","type":"Line"},"selection_glyph":null,"view":{"id":"10629","type":"CDSView"}},"id":"10628","type":"GlyphRenderer"},{"attributes":{},"id":"10637","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10627","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10610","type":"PanTool"},{"id":"10611","type":"WheelZoomTool"},{"id":"10612","type":"BoxZoomTool"},{"id":"10613","type":"SaveTool"},{"id":"10614","type":"ResetTool"},{"id":"10615","type":"HelpTool"}]},"id":"10616","type":"Toolbar"},{"attributes":{"callback":null},"id":"10592","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3,"NaN",4,5],"y":[6,7,2,4,4,5]},"selected":{"id":"10637","type":"Selection"},"selection_policy":{"id":"10638","type":"UnionRenderers"}},"id":"10625","type":"ColumnDataSource"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10626","type":"Line"},{"attributes":{"callback":null},"id":"10594","type":"DataRange1d"},{"attributes":{},"id":"10596","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10618","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"10618","type":"BoxAnnotation"}},"id":"10612","type":"BoxZoomTool"},{"attributes":{"source":{"id":"10625","type":"ColumnDataSource"}},"id":"10629","type":"CDSView"},{"attributes":{"plot":{"id":"10591","subtype":"Figure","type":"Plot"},"ticker":{"id":"10601","type":"BasicTicker"}},"id":"10604","type":"Grid"},{"attributes":{},"id":"10598","type":"LinearScale"},{"attributes":{},"id":"10613","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"10630","type":"Title"},{"attributes":{},"id":"10610","type":"PanTool"},{"attributes":{},"id":"10632","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"10634","type":"BasicTickFormatter"},"plot":{"id":"10591","subtype":"Figure","type":"Plot"},"ticker":{"id":"10601","type":"BasicTicker"}},"id":"10600","type":"LinearAxis"},{"attributes":{},"id":"10615","type":"HelpTool"},{"attributes":{},"id":"10611","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"10600","type":"LinearAxis"}],"left":[{"id":"10605","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"10600","type":"LinearAxis"},{"id":"10604","type":"Grid"},{"id":"10605","type":"LinearAxis"},{"id":"10609","type":"Grid"},{"id":"10618","type":"BoxAnnotation"},{"id":"10628","type":"GlyphRenderer"}],"title":{"id":"10630","type":"Title"},"toolbar":{"id":"10616","type":"Toolbar"},"x_range":{"id":"10592","type":"DataRange1d"},"x_scale":{"id":"10596","type":"LinearScale"},"y_range":{"id":"10594","type":"DataRange1d"},"y_scale":{"id":"10598","type":"LinearScale"}},"id":"10591","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"10601","type":"BasicTicker"},{"attributes":{},"id":"10634","type":"BasicTickFormatter"},{"attributes":{},"id":"10614","type":"ResetTool"},{"attributes":{},"id":"10606","type":"BasicTicker"}],"root_ids":["10591"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"8ca522ef-b1ff-4f41-9678-1ea92cf36b37","roots":{"10591":"dbbf09bd-428c-420b-9ff7-d7b46abcb2cd"}}];
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