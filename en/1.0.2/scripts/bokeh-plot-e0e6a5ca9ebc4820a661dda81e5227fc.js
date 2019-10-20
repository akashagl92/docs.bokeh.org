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
      };var element = document.getElementById("f476544b-c291-44b8-826d-e94e1f056e85");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f476544b-c291-44b8-826d-e94e1f056e85' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"c32599f2-8fa2-4f03-9886-564f215855a9":{"roots":{"references":[{"attributes":{"callback":null},"id":"14847","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14879","type":"Circle"},{"attributes":{},"id":"14864","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"14853","type":"LinearAxis"}],"left":[{"id":"14858","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14853","type":"LinearAxis"},{"id":"14857","type":"Grid"},{"id":"14858","type":"LinearAxis"},{"id":"14862","type":"Grid"},{"id":"14871","type":"BoxAnnotation"},{"id":"14881","type":"GlyphRenderer"}],"title":{"id":"14884","type":"Title"},"toolbar":{"id":"14869","type":"Toolbar"},"x_range":{"id":"14845","type":"DataRange1d"},"x_scale":{"id":"14849","type":"LinearScale"},"y_range":{"id":"14847","type":"DataRange1d"},"y_scale":{"id":"14851","type":"LinearScale"}},"id":"14844","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14854","type":"BasicTicker"},{"attributes":{"overlay":{"id":"14871","type":"BoxAnnotation"}},"id":"14865","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"14845","type":"DataRange1d"},{"attributes":{},"id":"14886","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"14884","type":"Title"},{"attributes":{"data_source":{"id":"14878","type":"ColumnDataSource"},"glyph":{"id":"14879","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14880","type":"Circle"},"selection_glyph":null,"view":{"id":"14882","type":"CDSView"}},"id":"14881","type":"GlyphRenderer"},{"attributes":{},"id":"14849","type":"LinearScale"},{"attributes":{},"id":"14867","type":"ResetTool"},{"attributes":{"source":{"id":"14878","type":"ColumnDataSource"}},"id":"14882","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"14844","subtype":"Figure","type":"Plot"},"ticker":{"id":"14859","type":"BasicTicker"}},"id":"14862","type":"Grid"},{"attributes":{},"id":"14890","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14871","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"14844","subtype":"Figure","type":"Plot"},"ticker":{"id":"14854","type":"BasicTicker"}},"id":"14857","type":"Grid"},{"attributes":{"axis_label":"Bin Count","formatter":{"id":"14888","type":"BasicTickFormatter"},"plot":{"id":"14844","subtype":"Figure","type":"Plot"},"ticker":{"id":"14859","type":"BasicTicker"}},"id":"14858","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14863","type":"PanTool"},{"id":"14864","type":"WheelZoomTool"},{"id":"14865","type":"BoxZoomTool"},{"id":"14866","type":"SaveTool"},{"id":"14867","type":"ResetTool"},{"id":"14868","type":"HelpTool"}]},"id":"14869","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14891","type":"Selection"},"selection_policy":{"id":"14890","type":"UnionRenderers"}},"id":"14878","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14880","type":"Circle"},{"attributes":{},"id":"14868","type":"HelpTool"},{"attributes":{},"id":"14891","type":"Selection"},{"attributes":{},"id":"14863","type":"PanTool"},{"attributes":{},"id":"14851","type":"LinearScale"},{"attributes":{},"id":"14866","type":"SaveTool"},{"attributes":{"axis_label":"Lot Number","axis_label_standoff":30,"axis_label_text_color":{"value":"#aa6666"},"formatter":{"id":"14886","type":"BasicTickFormatter"},"plot":{"id":"14844","subtype":"Figure","type":"Plot"},"ticker":{"id":"14854","type":"BasicTicker"}},"id":"14853","type":"LinearAxis"},{"attributes":{},"id":"14888","type":"BasicTickFormatter"},{"attributes":{},"id":"14859","type":"BasicTicker"}],"root_ids":["14844"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"c32599f2-8fa2-4f03-9886-564f215855a9","roots":{"14844":"f476544b-c291-44b8-826d-e94e1f056e85"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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