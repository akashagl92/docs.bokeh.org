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
      };var element = document.getElementById("99792966-799a-4500-8284-82be5e5127db");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '99792966-799a-4500-8284-82be5e5127db' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.2.min.js"];
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
                    
                  var docs_json = '{"85036f0c-3591-4214-b624-cea32300daae":{"roots":{"references":[{"attributes":{},"id":"28410","type":"LinearScale"},{"attributes":{},"id":"28451","type":"BasicTickFormatter"},{"attributes":{},"id":"28413","type":"BasicTicker"},{"attributes":{"formatter":{"id":"28453","type":"BasicTickFormatter"},"ticker":{"id":"28418","type":"BasicTicker"}},"id":"28417","type":"LinearAxis"},{"attributes":{},"id":"28408","type":"LinearScale"},{"attributes":{},"id":"28453","type":"BasicTickFormatter"},{"attributes":{"fields":[]},"id":"28435","type":"Stack"},{"attributes":{"callback":null,"data":{"x1":[1,2,4,3,4],"x2":[1,4,2,2,3],"y":[1,2,3,4,5]},"selected":{"id":"28456","type":"Selection"},"selection_policy":{"id":"28455","type":"UnionRenderers"}},"id":"28402","type":"ColumnDataSource"},{"attributes":{"fields":["x1"]},"id":"28436","type":"Stack"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28422","type":"PanTool"},{"id":"28423","type":"WheelZoomTool"},{"id":"28424","type":"BoxZoomTool"},{"id":"28425","type":"SaveTool"},{"id":"28426","type":"ResetTool"},{"id":"28427","type":"HelpTool"}]},"id":"28428","type":"Toolbar"},{"attributes":{"source":{"id":"28402","type":"ColumnDataSource"}},"id":"28448","type":"CDSView"},{"attributes":{"callback":null},"id":"28404","type":"DataRange1d"},{"attributes":{},"id":"28455","type":"UnionRenderers"},{"attributes":{},"id":"28423","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.8},"left":{"expr":{"id":"28435","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"28436","type":"Stack"}},"y":{"field":"y"}},"id":"28441","type":"HBar"},{"attributes":{},"id":"28427","type":"HelpTool"},{"attributes":{"text":""},"id":"28449","type":"Title"},{"attributes":{"data_source":{"id":"28402","type":"ColumnDataSource"},"glyph":{"id":"28445","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"x2","nonselection_glyph":{"id":"28446","type":"HBar"},"selection_glyph":null,"view":{"id":"28448","type":"CDSView"}},"id":"28447","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"lightgrey"},"height":{"value":0.8},"left":{"expr":{"id":"28437","type":"Stack"}},"line_color":{"value":"lightgrey"},"right":{"expr":{"id":"28438","type":"Stack"}},"y":{"field":"y"}},"id":"28445","type":"HBar"},{"attributes":{},"id":"28456","type":"Selection"},{"attributes":{"ticker":{"id":"28413","type":"BasicTicker"}},"id":"28416","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28457","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"28402","type":"ColumnDataSource"},"glyph":{"id":"28440","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"name":"x1","nonselection_glyph":{"id":"28441","type":"HBar"},"selection_glyph":null,"view":{"id":"28443","type":"CDSView"}},"id":"28442","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"28406","type":"DataRange1d"},{"attributes":{"formatter":{"id":"28451","type":"BasicTickFormatter"},"ticker":{"id":"28413","type":"BasicTicker"}},"id":"28412","type":"LinearAxis"},{"attributes":{},"id":"28422","type":"PanTool"},{"attributes":{"dimension":1,"ticker":{"id":"28418","type":"BasicTicker"}},"id":"28421","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.8},"left":{"expr":{"id":"28437","type":"Stack"}},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"expr":{"id":"28438","type":"Stack"}},"y":{"field":"y"}},"id":"28446","type":"HBar"},{"attributes":{},"id":"28426","type":"ResetTool"},{"attributes":{"fields":["x1","x2"]},"id":"28438","type":"Stack"},{"attributes":{},"id":"28425","type":"SaveTool"},{"attributes":{},"id":"28418","type":"BasicTicker"},{"attributes":{"below":[{"id":"28412","type":"LinearAxis"}],"center":[{"id":"28416","type":"Grid"},{"id":"28421","type":"Grid"}],"left":[{"id":"28417","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28442","type":"GlyphRenderer"},{"id":"28447","type":"GlyphRenderer"}],"title":{"id":"28449","type":"Title"},"toolbar":{"id":"28428","type":"Toolbar"},"x_range":{"id":"28404","type":"DataRange1d"},"x_scale":{"id":"28408","type":"LinearScale"},"y_range":{"id":"28406","type":"DataRange1d"},"y_scale":{"id":"28410","type":"LinearScale"}},"id":"28403","subtype":"Figure","type":"Plot"},{"attributes":{"fields":["x1"]},"id":"28437","type":"Stack"},{"attributes":{"source":{"id":"28402","type":"ColumnDataSource"}},"id":"28443","type":"CDSView"},{"attributes":{"overlay":{"id":"28457","type":"BoxAnnotation"}},"id":"28424","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"grey"},"height":{"value":0.8},"left":{"expr":{"id":"28435","type":"Stack"}},"line_color":{"value":"grey"},"right":{"expr":{"id":"28436","type":"Stack"}},"y":{"field":"y"}},"id":"28440","type":"HBar"}],"root_ids":["28403"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"85036f0c-3591-4214-b624-cea32300daae","roots":{"28403":"99792966-799a-4500-8284-82be5e5127db"}}];
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