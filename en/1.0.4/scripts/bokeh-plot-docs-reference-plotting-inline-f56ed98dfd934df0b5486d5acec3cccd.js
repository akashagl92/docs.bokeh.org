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
      };var element = document.getElementById("6385cac5-6527-4850-9f3e-dfe047176ce2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6385cac5-6527-4850-9f3e-dfe047176ce2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"be216a07-15da-4a1a-8eb2-01a9dab50903":{"roots":{"references":[{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"34982","type":"Wedge"},{"attributes":{"formatter":{"id":"34990","type":"BasicTickFormatter"},"plot":{"id":"34947","subtype":"Figure","type":"Plot"},"ticker":{"id":"34957","type":"BasicTicker"}},"id":"34956","type":"LinearAxis"},{"attributes":{},"id":"34966","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34966","type":"PanTool"},{"id":"34967","type":"WheelZoomTool"},{"id":"34968","type":"BoxZoomTool"},{"id":"34969","type":"SaveTool"},{"id":"34970","type":"ResetTool"},{"id":"34971","type":"HelpTool"}]},"id":"34972","type":"Toolbar"},{"attributes":{"overlay":{"id":"34974","type":"BoxAnnotation"}},"id":"34968","type":"BoxZoomTool"},{"attributes":{},"id":"34970","type":"ResetTool"},{"attributes":{},"id":"34988","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34993","type":"Selection"},"selection_policy":{"id":"34992","type":"UnionRenderers"}},"id":"34981","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"34986","type":"Title"},{"attributes":{},"id":"34954","type":"LinearScale"},{"attributes":{},"id":"34993","type":"Selection"},{"attributes":{},"id":"34992","type":"UnionRenderers"},{"attributes":{},"id":"34957","type":"BasicTicker"},{"attributes":{},"id":"34990","type":"BasicTickFormatter"},{"attributes":{},"id":"34952","type":"LinearScale"},{"attributes":{},"id":"34969","type":"SaveTool"},{"attributes":{},"id":"34962","type":"BasicTicker"},{"attributes":{"data_source":{"id":"34981","type":"ColumnDataSource"},"glyph":{"id":"34982","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34983","type":"Wedge"},"selection_glyph":null,"view":{"id":"34985","type":"CDSView"}},"id":"34984","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"34947","subtype":"Figure","type":"Plot"},"ticker":{"id":"34962","type":"BasicTicker"}},"id":"34965","type":"Grid"},{"attributes":{"plot":{"id":"34947","subtype":"Figure","type":"Plot"},"ticker":{"id":"34957","type":"BasicTicker"}},"id":"34960","type":"Grid"},{"attributes":{},"id":"34967","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34974","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"34956","type":"LinearAxis"}],"left":[{"id":"34961","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34956","type":"LinearAxis"},{"id":"34960","type":"Grid"},{"id":"34961","type":"LinearAxis"},{"id":"34965","type":"Grid"},{"id":"34974","type":"BoxAnnotation"},{"id":"34984","type":"GlyphRenderer"}],"title":{"id":"34986","type":"Title"},"toolbar":{"id":"34972","type":"Toolbar"},"x_range":{"id":"34948","type":"DataRange1d"},"x_scale":{"id":"34952","type":"LinearScale"},"y_range":{"id":"34950","type":"DataRange1d"},"y_scale":{"id":"34954","type":"LinearScale"}},"id":"34947","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"34948","type":"DataRange1d"},{"attributes":{"source":{"id":"34981","type":"ColumnDataSource"}},"id":"34985","type":"CDSView"},{"attributes":{"callback":null},"id":"34950","type":"DataRange1d"},{"attributes":{},"id":"34971","type":"HelpTool"},{"attributes":{"formatter":{"id":"34988","type":"BasicTickFormatter"},"plot":{"id":"34947","subtype":"Figure","type":"Plot"},"ticker":{"id":"34962","type":"BasicTicker"}},"id":"34961","type":"LinearAxis"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"34983","type":"Wedge"}],"root_ids":["34947"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"be216a07-15da-4a1a-8eb2-01a9dab50903","roots":{"34947":"6385cac5-6527-4850-9f3e-dfe047176ce2"}}];
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