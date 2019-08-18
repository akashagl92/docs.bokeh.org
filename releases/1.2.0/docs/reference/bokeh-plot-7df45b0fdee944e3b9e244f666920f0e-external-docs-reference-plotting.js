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
      };var element = document.getElementById("5998b4a4-d473-4a29-ad6c-e23edc7ecc21");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5998b4a4-d473-4a29-ad6c-e23edc7ecc21' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"46043b74-706c-458a-9e71-3402869bea13":{"roots":{"references":[{"attributes":{},"id":"16360","type":"BasicTicker"},{"attributes":{"callback":null},"id":"16346","type":"DataRange1d"},{"attributes":{"text":""},"id":"16382","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16364","type":"PanTool"},{"id":"16365","type":"WheelZoomTool"},{"id":"16366","type":"BoxZoomTool"},{"id":"16367","type":"SaveTool"},{"id":"16368","type":"ResetTool"},{"id":"16369","type":"HelpTool"}]},"id":"16370","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"16360","type":"BasicTicker"}},"id":"16363","type":"Grid"},{"attributes":{},"id":"16368","type":"ResetTool"},{"attributes":{},"id":"16352","type":"LinearScale"},{"attributes":{"source":{"id":"16377","type":"ColumnDataSource"}},"id":"16381","type":"CDSView"},{"attributes":{"callback":null},"id":"16348","type":"DataRange1d"},{"attributes":{"data_source":{"id":"16377","type":"ColumnDataSource"},"glyph":{"id":"16378","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16379","type":"Patches"},"selection_glyph":null,"view":{"id":"16381","type":"CDSView"}},"id":"16380","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16378","type":"Patches"},{"attributes":{},"id":"16350","type":"LinearScale"},{"attributes":{"callback":null,"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]},"selected":{"id":"16388","type":"Selection"},"selection_policy":{"id":"16389","type":"UnionRenderers"}},"id":"16377","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"16386","type":"BasicTickFormatter"},"ticker":{"id":"16355","type":"BasicTicker"}},"id":"16354","type":"LinearAxis"},{"attributes":{},"id":"16364","type":"PanTool"},{"attributes":{},"id":"16389","type":"UnionRenderers"},{"attributes":{},"id":"16365","type":"WheelZoomTool"},{"attributes":{},"id":"16369","type":"HelpTool"},{"attributes":{},"id":"16355","type":"BasicTicker"},{"attributes":{},"id":"16388","type":"Selection"},{"attributes":{"overlay":{"id":"16390","type":"BoxAnnotation"}},"id":"16366","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"16355","type":"BasicTicker"}},"id":"16358","type":"Grid"},{"attributes":{},"id":"16386","type":"BasicTickFormatter"},{"attributes":{},"id":"16367","type":"SaveTool"},{"attributes":{"below":[{"id":"16354","type":"LinearAxis"}],"center":[{"id":"16358","type":"Grid"},{"id":"16363","type":"Grid"}],"left":[{"id":"16359","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16380","type":"GlyphRenderer"}],"title":{"id":"16382","type":"Title"},"toolbar":{"id":"16370","type":"Toolbar"},"x_range":{"id":"16346","type":"DataRange1d"},"x_scale":{"id":"16350","type":"LinearScale"},"y_range":{"id":"16348","type":"DataRange1d"},"y_scale":{"id":"16352","type":"LinearScale"}},"id":"16345","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"16384","type":"BasicTickFormatter"},"ticker":{"id":"16360","type":"BasicTicker"}},"id":"16359","type":"LinearAxis"},{"attributes":{},"id":"16384","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16390","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16379","type":"Patches"}],"root_ids":["16345"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"46043b74-706c-458a-9e71-3402869bea13","roots":{"16345":"5998b4a4-d473-4a29-ad6c-e23edc7ecc21"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
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