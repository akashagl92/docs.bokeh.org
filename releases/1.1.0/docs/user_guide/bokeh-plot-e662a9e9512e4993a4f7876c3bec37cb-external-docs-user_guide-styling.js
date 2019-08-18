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
      };var element = document.getElementById("a512645d-05c7-4205-b5e7-eb2608689b86");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a512645d-05c7-4205-b5e7-eb2608689b86' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"fb4b5d4c-0f93-41dc-a38d-44a6b4662db2":{"roots":{"references":[{"attributes":{},"id":"32999","type":"LinearScale"},{"attributes":{"source":{"id":"33026","type":"ColumnDataSource"}},"id":"33030","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33027","type":"Circle"},{"attributes":{"ticker":{"id":"33004","type":"BasicTicker"}},"id":"33007","type":"Grid"},{"attributes":{},"id":"33014","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"33036","type":"BasicTickFormatter"},"ticker":{"id":"33009","type":"BasicTicker"}},"id":"33008","type":"LinearAxis"},{"attributes":{"text":""},"id":"33034","type":"Title"},{"attributes":{"overlay":{"id":"33040","type":"BoxAnnotation"}},"id":"33015","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"33026","type":"ColumnDataSource"},"glyph":{"id":"33027","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33028","type":"Circle"},"selection_glyph":null,"view":{"id":"33030","type":"CDSView"}},"id":"33029","type":"GlyphRenderer"},{"attributes":{"ticks":[2,3.5,4]},"id":"33031","type":"FixedTicker"},{"attributes":{},"id":"33013","type":"PanTool"},{"attributes":{"callback":null},"id":"32997","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"33039","type":"Selection"},"selection_policy":{"id":"33038","type":"UnionRenderers"}},"id":"33026","type":"ColumnDataSource"},{"attributes":{},"id":"33036","type":"BasicTickFormatter"},{"attributes":{},"id":"33018","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"33028","type":"Circle"},{"attributes":{},"id":"33004","type":"BasicTicker"},{"attributes":{"callback":null},"id":"32995","type":"DataRange1d"},{"attributes":{},"id":"33037","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33013","type":"PanTool"},{"id":"33014","type":"WheelZoomTool"},{"id":"33015","type":"BoxZoomTool"},{"id":"33016","type":"SaveTool"},{"id":"33017","type":"ResetTool"},{"id":"33018","type":"HelpTool"}]},"id":"33019","type":"Toolbar"},{"attributes":{},"id":"33001","type":"LinearScale"},{"attributes":{},"id":"33016","type":"SaveTool"},{"attributes":{},"id":"33038","type":"UnionRenderers"},{"attributes":{"below":[{"id":"33003","type":"LinearAxis"}],"center":[{"id":"33007","type":"Grid"},{"id":"33012","type":"Grid"}],"left":[{"id":"33008","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"33029","type":"GlyphRenderer"}],"title":{"id":"33034","type":"Title"},"toolbar":{"id":"33019","type":"Toolbar"},"x_range":{"id":"32995","type":"DataRange1d"},"x_scale":{"id":"32999","type":"LinearScale"},"y_range":{"id":"32997","type":"DataRange1d"},"y_scale":{"id":"33001","type":"LinearScale"}},"id":"32994","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"33037","type":"BasicTickFormatter"},"ticker":{"id":"33031","type":"FixedTicker"}},"id":"33003","type":"LinearAxis"},{"attributes":{},"id":"33009","type":"BasicTicker"},{"attributes":{},"id":"33017","type":"ResetTool"},{"attributes":{},"id":"33039","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"33009","type":"BasicTicker"}},"id":"33012","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33040","type":"BoxAnnotation"}],"root_ids":["32994"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"fb4b5d4c-0f93-41dc-a38d-44a6b4662db2","roots":{"32994":"a512645d-05c7-4205-b5e7-eb2608689b86"}}];
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