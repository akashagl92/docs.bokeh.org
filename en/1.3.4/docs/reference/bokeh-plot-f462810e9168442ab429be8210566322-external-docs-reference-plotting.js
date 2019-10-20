(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("fa3b4f06-6ede-4780-9cc5-3d2a020995f7");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'fa3b4f06-6ede-4780-9cc5-3d2a020995f7' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"1598f61b-e4ed-46cb-b273-9c741283f796":{"roots":{"references":[{"attributes":{"data_source":{"id":"16398","type":"ColumnDataSource"},"glyph":{"id":"16399","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16400","type":"Patches"},"selection_glyph":null,"view":{"id":"16402","type":"CDSView"}},"id":"16401","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16385","type":"PanTool"},{"id":"16386","type":"WheelZoomTool"},{"id":"16387","type":"BoxZoomTool"},{"id":"16388","type":"SaveTool"},{"id":"16389","type":"ResetTool"},{"id":"16390","type":"HelpTool"}]},"id":"16391","type":"Toolbar"},{"attributes":{"text":""},"id":"16404","type":"Title"},{"attributes":{},"id":"16373","type":"LinearScale"},{"attributes":{"callback":null},"id":"16369","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"16381","type":"BasicTicker"}},"id":"16384","type":"Grid"},{"attributes":{},"id":"16388","type":"SaveTool"},{"attributes":{},"id":"16409","type":"Selection"},{"attributes":{"callback":null,"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]},"selected":{"id":"16409","type":"Selection"},"selection_policy":{"id":"16410","type":"UnionRenderers"}},"id":"16398","type":"ColumnDataSource"},{"attributes":{},"id":"16410","type":"UnionRenderers"},{"attributes":{},"id":"16381","type":"BasicTicker"},{"attributes":{},"id":"16389","type":"ResetTool"},{"attributes":{"formatter":{"id":"16408","type":"BasicTickFormatter"},"ticker":{"id":"16376","type":"BasicTicker"}},"id":"16375","type":"LinearAxis"},{"attributes":{},"id":"16390","type":"HelpTool"},{"attributes":{"ticker":{"id":"16376","type":"BasicTicker"}},"id":"16379","type":"Grid"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16399","type":"Patches"},{"attributes":{"overlay":{"id":"16411","type":"BoxAnnotation"}},"id":"16387","type":"BoxZoomTool"},{"attributes":{},"id":"16408","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"16406","type":"BasicTickFormatter"},"ticker":{"id":"16381","type":"BasicTicker"}},"id":"16380","type":"LinearAxis"},{"attributes":{},"id":"16406","type":"BasicTickFormatter"},{"attributes":{},"id":"16386","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"16367","type":"DataRange1d"},{"attributes":{"source":{"id":"16398","type":"ColumnDataSource"}},"id":"16402","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16400","type":"Patches"},{"attributes":{},"id":"16371","type":"LinearScale"},{"attributes":{},"id":"16385","type":"PanTool"},{"attributes":{},"id":"16376","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16411","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"16375","type":"LinearAxis"}],"center":[{"id":"16379","type":"Grid"},{"id":"16384","type":"Grid"}],"left":[{"id":"16380","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16401","type":"GlyphRenderer"}],"title":{"id":"16404","type":"Title"},"toolbar":{"id":"16391","type":"Toolbar"},"x_range":{"id":"16367","type":"DataRange1d"},"x_scale":{"id":"16371","type":"LinearScale"},"y_range":{"id":"16369","type":"DataRange1d"},"y_scale":{"id":"16373","type":"LinearScale"}},"id":"16366","subtype":"Figure","type":"Plot"}],"root_ids":["16366"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"1598f61b-e4ed-46cb-b273-9c741283f796","roots":{"16366":"fa3b4f06-6ede-4780-9cc5-3d2a020995f7"}}];
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
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();