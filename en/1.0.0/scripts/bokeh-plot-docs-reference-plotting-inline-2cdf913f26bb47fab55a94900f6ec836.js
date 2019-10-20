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
      };var element = document.getElementById("dd6a0e80-14a8-44d9-8956-25c051eddc82");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dd6a0e80-14a8-44d9-8956-25c051eddc82' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9a84818c-524b-499b-abd7-4f3b2c9728be":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"34886","type":"Title"},{"attributes":{"overlay":{"id":"34873","type":"BoxAnnotation"}},"id":"34867","type":"BoxZoomTool"},{"attributes":{},"id":"34866","type":"WheelZoomTool"},{"attributes":{},"id":"34888","type":"BasicTickFormatter"},{"attributes":{},"id":"34868","type":"SaveTool"},{"attributes":{},"id":"34856","type":"BasicTicker"},{"attributes":{},"id":"34890","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"34846","subtype":"Figure","type":"Plot"},"ticker":{"id":"34856","type":"BasicTicker"}},"id":"34859","type":"Grid"},{"attributes":{"below":[{"id":"34855","type":"LinearAxis"}],"left":[{"id":"34860","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34855","type":"LinearAxis"},{"id":"34859","type":"Grid"},{"id":"34860","type":"LinearAxis"},{"id":"34864","type":"Grid"},{"id":"34873","type":"BoxAnnotation"},{"id":"34883","type":"GlyphRenderer"}],"title":{"id":"34886","type":"Title"},"toolbar":{"id":"34871","type":"Toolbar"},"x_range":{"id":"34847","type":"DataRange1d"},"x_scale":{"id":"34851","type":"LinearScale"},"y_range":{"id":"34849","type":"DataRange1d"},"y_scale":{"id":"34853","type":"LinearScale"}},"id":"34846","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34869","type":"ResetTool"},{"attributes":{},"id":"34892","type":"Selection"},{"attributes":{"formatter":{"id":"34890","type":"BasicTickFormatter"},"plot":{"id":"34846","subtype":"Figure","type":"Plot"},"ticker":{"id":"34861","type":"BasicTicker"}},"id":"34860","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"34882","type":"VBar"},{"attributes":{},"id":"34870","type":"HelpTool"},{"attributes":{},"id":"34893","type":"UnionRenderers"},{"attributes":{},"id":"34861","type":"BasicTicker"},{"attributes":{"callback":null},"id":"34847","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34865","type":"PanTool"},{"id":"34866","type":"WheelZoomTool"},{"id":"34867","type":"BoxZoomTool"},{"id":"34868","type":"SaveTool"},{"id":"34869","type":"ResetTool"},{"id":"34870","type":"HelpTool"}]},"id":"34871","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"34846","subtype":"Figure","type":"Plot"},"ticker":{"id":"34861","type":"BasicTicker"}},"id":"34864","type":"Grid"},{"attributes":{},"id":"34853","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34873","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"34849","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"34881","type":"VBar"},{"attributes":{},"id":"34851","type":"LinearScale"},{"attributes":{"source":{"id":"34880","type":"ColumnDataSource"}},"id":"34884","type":"CDSView"},{"attributes":{"callback":null,"data":{"top":[1,2,3],"x":[1,2,3]},"selected":{"id":"34892","type":"Selection"},"selection_policy":{"id":"34893","type":"UnionRenderers"}},"id":"34880","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"34880","type":"ColumnDataSource"},"glyph":{"id":"34881","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34882","type":"VBar"},"selection_glyph":null,"view":{"id":"34884","type":"CDSView"}},"id":"34883","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"34888","type":"BasicTickFormatter"},"plot":{"id":"34846","subtype":"Figure","type":"Plot"},"ticker":{"id":"34856","type":"BasicTicker"}},"id":"34855","type":"LinearAxis"},{"attributes":{},"id":"34865","type":"PanTool"}],"root_ids":["34846"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"9a84818c-524b-499b-abd7-4f3b2c9728be","roots":{"34846":"dd6a0e80-14a8-44d9-8956-25c051eddc82"}}];
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