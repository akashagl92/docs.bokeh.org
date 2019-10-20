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
      };var element = document.getElementById("7f873751-bc20-4b5b-9ef9-4be749ad7d07");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '7f873751-bc20-4b5b-9ef9-4be749ad7d07' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"38408c10-2dd2-4cf6-a92a-29969c3af15a":{"roots":{"references":[{"attributes":{"callback":null},"id":"33981","type":"DataRange1d"},{"attributes":{},"id":"33995","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33999","type":"PanTool"},{"id":"34000","type":"WheelZoomTool"},{"id":"34001","type":"BoxZoomTool"},{"id":"34002","type":"SaveTool"},{"id":"34003","type":"ResetTool"},{"id":"34004","type":"HelpTool"}]},"id":"34005","type":"Toolbar"},{"attributes":{},"id":"34003","type":"ResetTool"},{"attributes":{},"id":"33990","type":"BasicTicker"},{"attributes":{},"id":"34024","type":"UnionRenderers"},{"attributes":{},"id":"34004","type":"HelpTool"},{"attributes":{},"id":"33987","type":"LinearScale"},{"attributes":{},"id":"34002","type":"SaveTool"},{"attributes":{},"id":"34025","type":"Selection"},{"attributes":{"data_source":{"id":"34012","type":"ColumnDataSource"},"glyph":{"id":"34013","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34014","type":"Circle"},"selection_glyph":null,"view":{"id":"34016","type":"CDSView"}},"id":"34015","type":"GlyphRenderer"},{"attributes":{},"id":"33985","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34014","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"34025","type":"Selection"},"selection_policy":{"id":"34024","type":"UnionRenderers"}},"id":"34012","type":"ColumnDataSource"},{"attributes":{},"id":"34000","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34013","type":"Circle"},{"attributes":{},"id":"34022","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34023","type":"BoxAnnotation"},{"attributes":{"text":""},"id":"34018","type":"Title"},{"attributes":{},"id":"33999","type":"PanTool"},{"attributes":{"axis_label":"Lot Number","axis_label_standoff":30,"axis_label_text_color":{"value":"#aa6666"},"formatter":{"id":"34020","type":"BasicTickFormatter"},"ticker":{"id":"33990","type":"BasicTicker"}},"id":"33989","type":"LinearAxis"},{"attributes":{"callback":null},"id":"33983","type":"DataRange1d"},{"attributes":{"overlay":{"id":"34023","type":"BoxAnnotation"}},"id":"34001","type":"BoxZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"33995","type":"BasicTicker"}},"id":"33998","type":"Grid"},{"attributes":{},"id":"34020","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"34012","type":"ColumnDataSource"}},"id":"34016","type":"CDSView"},{"attributes":{"ticker":{"id":"33990","type":"BasicTicker"}},"id":"33993","type":"Grid"},{"attributes":{"axis_label":"Bin Count","formatter":{"id":"34022","type":"BasicTickFormatter"},"ticker":{"id":"33995","type":"BasicTicker"}},"id":"33994","type":"LinearAxis"},{"attributes":{"below":[{"id":"33989","type":"LinearAxis"}],"center":[{"id":"33993","type":"Grid"},{"id":"33998","type":"Grid"}],"left":[{"id":"33994","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"34015","type":"GlyphRenderer"}],"title":{"id":"34018","type":"Title"},"toolbar":{"id":"34005","type":"Toolbar"},"x_range":{"id":"33981","type":"DataRange1d"},"x_scale":{"id":"33985","type":"LinearScale"},"y_range":{"id":"33983","type":"DataRange1d"},"y_scale":{"id":"33987","type":"LinearScale"}},"id":"33980","subtype":"Figure","type":"Plot"}],"root_ids":["33980"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"38408c10-2dd2-4cf6-a92a-29969c3af15a","roots":{"33980":"7f873751-bc20-4b5b-9ef9-4be749ad7d07"}}];
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