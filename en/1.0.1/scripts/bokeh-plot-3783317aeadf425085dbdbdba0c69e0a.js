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
      };var element = document.getElementById("c142ee20-6d62-46fd-a0ee-6119fc285a49");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c142ee20-6d62-46fd-a0ee-6119fc285a49' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"e22839a9-d7a2-47b4-b4bc-ba7503bf38f2":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"6845","type":"PolyAnnotation"}},"id":"6840","type":"LassoSelectTool"},{"attributes":{"formatter":{"id":"6893","type":"BasicTickFormatter"},"plot":{"id":"6819","subtype":"Figure","type":"Plot"},"ticker":{"id":"6830","type":"BasicTicker"}},"id":"6829","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"6842","type":"BoxAnnotation"}},"id":"6839","type":"BoxSelectTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6875","type":"BoxSelectTool"},{"id":"6876","type":"LassoSelectTool"},{"id":"6877","type":"HelpTool"}]},"id":"6880","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"6888","type":"Circle"},{"attributes":{"children":[{"id":"6914","type":"ToolbarBox"},{"id":"6912","type":"Column"}]},"id":"6915","type":"Column"},{"attributes":{"data_source":{"id":"6818","type":"ColumnDataSource"},"glyph":{"id":"6887","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6888","type":"Circle"},"selection_glyph":null,"view":{"id":"6890","type":"CDSView"}},"id":"6889","type":"GlyphRenderer"},{"attributes":{},"id":"6841","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"6887","type":"Circle"},{"attributes":{"source":{"id":"6818","type":"ColumnDataSource"}},"id":"6890","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"6852","type":"Circle"},{"attributes":{},"id":"6877","type":"HelpTool"},{"attributes":{},"id":"6827","type":"LinearScale"},{"attributes":{},"id":"6825","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"6851","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"6881","type":"PolyAnnotation"}},"id":"6876","type":"LassoSelectTool"},{"attributes":{"plot":{"id":"6819","subtype":"Figure","type":"Plot"},"ticker":{"id":"6830","type":"BasicTicker"}},"id":"6833","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"6878","type":"BoxAnnotation"}},"id":"6875","type":"BoxSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6878","type":"BoxAnnotation"},{"attributes":{},"id":"6895","type":"BasicTickFormatter"},{"attributes":{},"id":"6898","type":"Selection"},{"attributes":{"data_source":{"id":"6818","type":"ColumnDataSource"},"glyph":{"id":"6851","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6852","type":"Circle"},"selection_glyph":null,"view":{"id":"6854","type":"CDSView"}},"id":"6853","type":"GlyphRenderer"},{"attributes":{},"id":"6893","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"6855","subtype":"Figure","type":"Plot"},"ticker":{"id":"6871","type":"BasicTicker"}},"id":"6874","type":"Grid"},{"attributes":{"callback":null},"id":"6859","type":"DataRange1d"},{"attributes":{},"id":"6903","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"6911","type":"Row"}]},"id":"6912","type":"Column"},{"attributes":{"source":{"id":"6818","type":"ColumnDataSource"}},"id":"6854","type":"CDSView"},{"attributes":{},"id":"6905","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"6865","type":"LinearAxis"}],"left":[{"id":"6870","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6865","type":"LinearAxis"},{"id":"6869","type":"Grid"},{"id":"6870","type":"LinearAxis"},{"id":"6874","type":"Grid"},{"id":"6878","type":"BoxAnnotation"},{"id":"6881","type":"PolyAnnotation"},{"id":"6889","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"6880","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6857","type":"DataRange1d"},"x_scale":{"id":"6861","type":"LinearScale"},"y_range":{"id":"6859","type":"DataRange1d"},"y_scale":{"id":"6863","type":"LinearScale"}},"id":"6855","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6861","type":"LinearScale"},{"attributes":{"children":[{"id":"6819","subtype":"Figure","type":"Plot"},{"id":"6855","subtype":"Figure","type":"Plot"}]},"id":"6911","type":"Row"},{"attributes":{"formatter":{"id":"6895","type":"BasicTickFormatter"},"plot":{"id":"6819","subtype":"Figure","type":"Plot"},"ticker":{"id":"6835","type":"BasicTicker"}},"id":"6834","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"6881","type":"PolyAnnotation"},{"attributes":{"tools":[{"id":"6839","type":"BoxSelectTool"},{"id":"6840","type":"LassoSelectTool"},{"id":"6841","type":"HelpTool"},{"id":"6875","type":"BoxSelectTool"},{"id":"6876","type":"LassoSelectTool"},{"id":"6877","type":"HelpTool"}]},"id":"6913","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"6857","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"6913","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"6914","type":"ToolbarBox"},{"attributes":{},"id":"6866","type":"BasicTicker"},{"attributes":{"below":[{"id":"6829","type":"LinearAxis"}],"left":[{"id":"6834","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6829","type":"LinearAxis"},{"id":"6833","type":"Grid"},{"id":"6834","type":"LinearAxis"},{"id":"6838","type":"Grid"},{"id":"6842","type":"BoxAnnotation"},{"id":"6845","type":"PolyAnnotation"},{"id":"6853","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"6844","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6821","type":"DataRange1d"},"x_scale":{"id":"6825","type":"LinearScale"},"y_range":{"id":"6823","type":"DataRange1d"},"y_scale":{"id":"6827","type":"LinearScale"}},"id":"6819","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"6903","type":"BasicTickFormatter"},"plot":{"id":"6855","subtype":"Figure","type":"Plot"},"ticker":{"id":"6866","type":"BasicTicker"}},"id":"6865","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]},"selected":{"id":"6898","type":"Selection"},"selection_policy":{"id":"6899","type":"UnionRenderers"}},"id":"6818","type":"ColumnDataSource"},{"attributes":{},"id":"6835","type":"BasicTicker"},{"attributes":{"formatter":{"id":"6905","type":"BasicTickFormatter"},"plot":{"id":"6855","subtype":"Figure","type":"Plot"},"ticker":{"id":"6871","type":"BasicTicker"}},"id":"6870","type":"LinearAxis"},{"attributes":{"callback":null},"id":"6823","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"6819","subtype":"Figure","type":"Plot"},"ticker":{"id":"6835","type":"BasicTicker"}},"id":"6838","type":"Grid"},{"attributes":{},"id":"6830","type":"BasicTicker"},{"attributes":{},"id":"6871","type":"BasicTicker"},{"attributes":{},"id":"6863","type":"LinearScale"},{"attributes":{},"id":"6899","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"6821","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6839","type":"BoxSelectTool"},{"id":"6840","type":"LassoSelectTool"},{"id":"6841","type":"HelpTool"}]},"id":"6844","type":"Toolbar"},{"attributes":{"plot":{"id":"6855","subtype":"Figure","type":"Plot"},"ticker":{"id":"6866","type":"BasicTicker"}},"id":"6869","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"6845","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6842","type":"BoxAnnotation"}],"root_ids":["6915"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"e22839a9-d7a2-47b4-b4bc-ba7503bf38f2","roots":{"6915":"c142ee20-6d62-46fd-a0ee-6119fc285a49"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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