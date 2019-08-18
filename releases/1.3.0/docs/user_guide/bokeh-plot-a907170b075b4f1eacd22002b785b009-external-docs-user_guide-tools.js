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
      };var element = document.getElementById("e5d7649f-f8b7-490c-b873-230ad28427fa");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e5d7649f-f8b7-490c-b873-230ad28427fa' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"0be40a92-4681-4352-8c0a-038099702ab1":{"roots":{"references":[{"attributes":{"data_source":{"id":"36828","type":"ColumnDataSource"},"glyph":{"id":"36866","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"36867","type":"Circle"},"selection_glyph":null,"view":{"id":"36869","type":"CDSView"}},"id":"36868","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"36850","type":"PanTool"},{"id":"36851","type":"WheelZoomTool"},{"id":"36852","type":"BoxZoomTool"},{"id":"36853","type":"SaveTool"},{"id":"36854","type":"ResetTool"},{"id":"36855","type":"HelpTool"},{"id":"36856","type":"HoverTool"}]},"id":"36857","type":"Toolbar"},{"attributes":{},"id":"36838","type":"LinearScale"},{"attributes":{"source":{"id":"36828","type":"ColumnDataSource"}},"id":"36869","type":"CDSView"},{"attributes":{},"id":"36850","type":"PanTool"},{"attributes":{"formatter":{"id":"36872","type":"BasicTickFormatter"},"ticker":{"id":"36841","type":"BasicTicker"}},"id":"36840","type":"LinearAxis"},{"attributes":{},"id":"36851","type":"WheelZoomTool"},{"attributes":{},"id":"36872","type":"BasicTickFormatter"},{"attributes":{},"id":"36841","type":"BasicTicker"},{"attributes":{"overlay":{"id":"36875","type":"BoxAnnotation"}},"id":"36852","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"desc":["A","b","C","d","E"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"36877","type":"Selection"},"selection_policy":{"id":"36876","type":"UnionRenderers"}},"id":"36828","type":"ColumnDataSource"},{"attributes":{},"id":"36874","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"36841","type":"BasicTicker"}},"id":"36844","type":"Grid"},{"attributes":{},"id":"36853","type":"SaveTool"},{"attributes":{"below":[{"id":"36840","type":"LinearAxis"}],"center":[{"id":"36844","type":"Grid"},{"id":"36849","type":"Grid"}],"left":[{"id":"36845","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"36868","type":"GlyphRenderer"}],"title":{"id":"36830","type":"Title"},"toolbar":{"id":"36857","type":"Toolbar"},"x_range":{"id":"36832","type":"DataRange1d"},"x_scale":{"id":"36836","type":"LinearScale"},"y_range":{"id":"36834","type":"DataRange1d"},"y_scale":{"id":"36838","type":"LinearScale"}},"id":"36829","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"36875","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"36874","type":"BasicTickFormatter"},"ticker":{"id":"36846","type":"BasicTicker"}},"id":"36845","type":"LinearAxis"},{"attributes":{},"id":"36854","type":"ResetTool"},{"attributes":{},"id":"36876","type":"UnionRenderers"},{"attributes":{},"id":"36846","type":"BasicTicker"},{"attributes":{"text":"Mouse over the dots"},"id":"36830","type":"Title"},{"attributes":{},"id":"36855","type":"HelpTool"},{"attributes":{},"id":"36877","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"36846","type":"BasicTicker"}},"id":"36849","type":"Grid"},{"attributes":{"callback":null},"id":"36832","type":"DataRange1d"},{"attributes":{"callback":null,"tooltips":[["index","$index"],["(x,y)","($x, $y)"],["desc","@desc"]]},"id":"36856","type":"HoverTool"},{"attributes":{"callback":null},"id":"36834","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"36867","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"36866","type":"Circle"},{"attributes":{},"id":"36836","type":"LinearScale"}],"root_ids":["36829"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"0be40a92-4681-4352-8c0a-038099702ab1","roots":{"36829":"e5d7649f-f8b7-490c-b873-230ad28427fa"}}];
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