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
      };var element = document.getElementById("eb8cf611-7120-4a1b-9592-297f064c28eb");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'eb8cf611-7120-4a1b-9592-297f064c28eb' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"91529dc7-2131-4d0e-a558-d6f0d5d0e65d":{"roots":{"references":[{"attributes":{},"id":"16780","type":"WheelZoomTool"},{"attributes":{},"id":"16799","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"16805","type":"BoxAnnotation"}},"id":"16781","type":"BoxZoomTool"},{"attributes":{},"id":"16770","type":"BasicTicker"},{"attributes":{},"id":"16801","type":"BasicTickFormatter"},{"attributes":{},"id":"16782","type":"SaveTool"},{"attributes":{"ticker":{"id":"16770","type":"BasicTicker"}},"id":"16773","type":"Grid"},{"attributes":{},"id":"16803","type":"Selection"},{"attributes":{},"id":"16783","type":"ResetTool"},{"attributes":{"formatter":{"id":"16799","type":"BasicTickFormatter"},"ticker":{"id":"16775","type":"BasicTicker"}},"id":"16774","type":"LinearAxis"},{"attributes":{},"id":"16804","type":"UnionRenderers"},{"attributes":{},"id":"16784","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"16794","type":"Square"},{"attributes":{},"id":"16775","type":"BasicTicker"},{"attributes":{"callback":null},"id":"16761","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16805","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16779","type":"PanTool"},{"id":"16780","type":"WheelZoomTool"},{"id":"16781","type":"BoxZoomTool"},{"id":"16782","type":"SaveTool"},{"id":"16783","type":"ResetTool"},{"id":"16784","type":"HelpTool"}]},"id":"16785","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"16775","type":"BasicTicker"}},"id":"16778","type":"Grid"},{"attributes":{},"id":"16767","type":"LinearScale"},{"attributes":{"source":{"id":"16792","type":"ColumnDataSource"}},"id":"16796","type":"CDSView"},{"attributes":{"callback":null},"id":"16763","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"16793","type":"Square"},{"attributes":{},"id":"16765","type":"LinearScale"},{"attributes":{"below":[{"id":"16769","type":"LinearAxis"}],"center":[{"id":"16773","type":"Grid"},{"id":"16778","type":"Grid"}],"left":[{"id":"16774","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16795","type":"GlyphRenderer"}],"title":{"id":"16797","type":"Title"},"toolbar":{"id":"16785","type":"Toolbar"},"x_range":{"id":"16761","type":"DataRange1d"},"x_scale":{"id":"16765","type":"LinearScale"},"y_range":{"id":"16763","type":"DataRange1d"},"y_scale":{"id":"16767","type":"LinearScale"}},"id":"16760","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"16803","type":"Selection"},"selection_policy":{"id":"16804","type":"UnionRenderers"}},"id":"16792","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"16797","type":"Title"},{"attributes":{"data_source":{"id":"16792","type":"ColumnDataSource"},"glyph":{"id":"16793","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16794","type":"Square"},"selection_glyph":null,"view":{"id":"16796","type":"CDSView"}},"id":"16795","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"16801","type":"BasicTickFormatter"},"ticker":{"id":"16770","type":"BasicTicker"}},"id":"16769","type":"LinearAxis"},{"attributes":{},"id":"16779","type":"PanTool"}],"root_ids":["16760"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"91529dc7-2131-4d0e-a558-d6f0d5d0e65d","roots":{"16760":"eb8cf611-7120-4a1b-9592-297f064c28eb"}}];
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