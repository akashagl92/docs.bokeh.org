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
      };var element = document.getElementById("049a38bd-1659-4da7-9e3d-83be0732a3d6");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '049a38bd-1659-4da7-9e3d-83be0732a3d6' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
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
                    
                  var docs_json = '{"30620b54-e441-4502-b3e1-766687334fed":{"roots":{"references":[{"attributes":{},"id":"16119","type":"BasicTickFormatter"},{"attributes":{},"id":"16099","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"16124","type":"BoxAnnotation"}},"id":"16100","type":"BoxZoomTool"},{"attributes":{},"id":"16121","type":"BasicTickFormatter"},{"attributes":{},"id":"16089","type":"BasicTicker"},{"attributes":{},"id":"16122","type":"UnionRenderers"},{"attributes":{},"id":"16101","type":"SaveTool"},{"attributes":{"ticker":{"id":"16089","type":"BasicTicker"}},"id":"16092","type":"Grid"},{"attributes":{},"id":"16102","type":"ResetTool"},{"attributes":{},"id":"16123","type":"Selection"},{"attributes":{"formatter":{"id":"16119","type":"BasicTickFormatter"},"ticker":{"id":"16094","type":"BasicTicker"}},"id":"16093","type":"LinearAxis"},{"attributes":{},"id":"16103","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"16113","type":"Square"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16124","type":"BoxAnnotation"},{"attributes":{},"id":"16094","type":"BasicTicker"},{"attributes":{"callback":null},"id":"16080","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16098","type":"PanTool"},{"id":"16099","type":"WheelZoomTool"},{"id":"16100","type":"BoxZoomTool"},{"id":"16101","type":"SaveTool"},{"id":"16102","type":"ResetTool"},{"id":"16103","type":"HelpTool"}]},"id":"16104","type":"Toolbar"},{"attributes":{"dimension":1,"ticker":{"id":"16094","type":"BasicTicker"}},"id":"16097","type":"Grid"},{"attributes":{},"id":"16086","type":"LinearScale"},{"attributes":{"source":{"id":"16111","type":"ColumnDataSource"}},"id":"16115","type":"CDSView"},{"attributes":{"below":[{"id":"16088","type":"LinearAxis"}],"center":[{"id":"16092","type":"Grid"},{"id":"16097","type":"Grid"}],"left":[{"id":"16093","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16114","type":"GlyphRenderer"}],"title":{"id":"16117","type":"Title"},"toolbar":{"id":"16104","type":"Toolbar"},"x_range":{"id":"16080","type":"DataRange1d"},"x_scale":{"id":"16084","type":"LinearScale"},"y_range":{"id":"16082","type":"DataRange1d"},"y_scale":{"id":"16086","type":"LinearScale"}},"id":"16079","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"16082","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"16112","type":"Square"},{"attributes":{},"id":"16084","type":"LinearScale"},{"attributes":{"callback":null,"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"16123","type":"Selection"},"selection_policy":{"id":"16122","type":"UnionRenderers"}},"id":"16111","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"16117","type":"Title"},{"attributes":{"data_source":{"id":"16111","type":"ColumnDataSource"},"glyph":{"id":"16112","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16113","type":"Square"},"selection_glyph":null,"view":{"id":"16115","type":"CDSView"}},"id":"16114","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"16121","type":"BasicTickFormatter"},"ticker":{"id":"16089","type":"BasicTicker"}},"id":"16088","type":"LinearAxis"},{"attributes":{},"id":"16098","type":"PanTool"}],"root_ids":["16079"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"30620b54-e441-4502-b3e1-766687334fed","roots":{"16079":"049a38bd-1659-4da7-9e3d-83be0732a3d6"}}];
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