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
      };var element = document.getElementById("ca902f86-ddd9-43c4-86f0-d2b183be5698");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'ca902f86-ddd9-43c4-86f0-d2b183be5698' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"e056ea6e-260a-4a22-a5e6-caa4f5903e6a":{"roots":{"references":[{"attributes":{},"id":"29437","type":"BasicTicker"},{"attributes":{},"id":"29441","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"29467","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"29464","type":"BasicTickFormatter"},"ticker":{"id":"29432","type":"BasicTicker"}},"id":"29431","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"xs":[[[[1,1,2,2],[1.2,1.6,1.6],[1.8,1.8,1.6]],[[3,4,3]]]],"ys":[[[[4,3,3,4],[3.2,3.2,3.6],[3.4,3.8,3.8]],[[1,1,3]]]]},"selected":{"id":"29465","type":"Selection"},"selection_policy":{"id":"29466","type":"UnionRenderers"}},"id":"29454","type":"ColumnDataSource"},{"attributes":{},"id":"29442","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"29455","type":"MultiPolygons"},{"attributes":{},"id":"29432","type":"BasicTicker"},{"attributes":{"overlay":{"id":"29467","type":"BoxAnnotation"}},"id":"29443","type":"BoxZoomTool"},{"attributes":{"source":{"id":"29454","type":"ColumnDataSource"}},"id":"29458","type":"CDSView"},{"attributes":{},"id":"29427","type":"LinearScale"},{"attributes":{"ticker":{"id":"29432","type":"BasicTicker"}},"id":"29435","type":"Grid"},{"attributes":{},"id":"29444","type":"SaveTool"},{"attributes":{"text":""},"id":"29460","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"29456","type":"MultiPolygons"},{"attributes":{},"id":"29445","type":"ResetTool"},{"attributes":{},"id":"29464","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"29425","type":"DataRange1d"},{"attributes":{"formatter":{"id":"29462","type":"BasicTickFormatter"},"ticker":{"id":"29437","type":"BasicTicker"}},"id":"29436","type":"LinearAxis"},{"attributes":{},"id":"29465","type":"Selection"},{"attributes":{"callback":null},"id":"29423","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"29437","type":"BasicTicker"}},"id":"29440","type":"Grid"},{"attributes":{"below":[{"id":"29431","type":"LinearAxis"}],"center":[{"id":"29435","type":"Grid"},{"id":"29440","type":"Grid"}],"left":[{"id":"29436","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"29457","type":"GlyphRenderer"}],"title":{"id":"29460","type":"Title"},"toolbar":{"id":"29447","type":"Toolbar"},"x_range":{"id":"29423","type":"DataRange1d"},"x_scale":{"id":"29427","type":"LinearScale"},"y_range":{"id":"29425","type":"DataRange1d"},"y_scale":{"id":"29429","type":"LinearScale"}},"id":"29422","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"29446","type":"HelpTool"},{"attributes":{"data_source":{"id":"29454","type":"ColumnDataSource"},"glyph":{"id":"29455","type":"MultiPolygons"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29456","type":"MultiPolygons"},"selection_glyph":null,"view":{"id":"29458","type":"CDSView"}},"id":"29457","type":"GlyphRenderer"},{"attributes":{},"id":"29462","type":"BasicTickFormatter"},{"attributes":{},"id":"29429","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"29441","type":"PanTool"},{"id":"29442","type":"WheelZoomTool"},{"id":"29443","type":"BoxZoomTool"},{"id":"29444","type":"SaveTool"},{"id":"29445","type":"ResetTool"},{"id":"29446","type":"HelpTool"}]},"id":"29447","type":"Toolbar"},{"attributes":{},"id":"29466","type":"UnionRenderers"}],"root_ids":["29422"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"e056ea6e-260a-4a22-a5e6-caa4f5903e6a","roots":{"29422":"ca902f86-ddd9-43c4-86f0-d2b183be5698"}}];
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