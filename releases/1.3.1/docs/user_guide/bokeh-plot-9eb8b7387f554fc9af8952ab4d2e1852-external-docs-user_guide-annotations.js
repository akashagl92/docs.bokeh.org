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
      };var element = document.getElementById("41686578-b1d7-4ea6-8bc3-b3ef42b41ee6");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '41686578-b1d7-4ea6-8bc3-b3ef42b41ee6' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js"];
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
                    
                  var docs_json = '{"c37a605d-39cd-4a88-9f24-c5fb0d8ac8f7":{"roots":{"references":[{"attributes":{"below":[{"id":"17974","type":"LinearAxis"}],"center":[{"id":"17978","type":"Grid"},{"id":"17983","type":"Grid"}],"left":[{"id":"17979","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"18000","type":"GlyphRenderer"}],"title":{"id":"17964","type":"Title"},"title_location":"left","toolbar":{"id":"17990","type":"Toolbar"},"x_range":{"id":"17966","type":"DataRange1d"},"x_scale":{"id":"17970","type":"LinearScale"},"y_range":{"id":"17968","type":"DataRange1d"},"y_scale":{"id":"17972","type":"LinearScale"}},"id":"17963","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17999","type":"Circle"},{"attributes":{},"id":"17972","type":"LinearScale"},{"attributes":{"overlay":{"id":"18007","type":"BoxAnnotation"}},"id":"17986","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17984","type":"PanTool"},{"id":"17985","type":"WheelZoomTool"},{"id":"17986","type":"BoxZoomTool"},{"id":"17987","type":"SaveTool"},{"id":"17988","type":"ResetTool"},{"id":"17989","type":"HelpTool"}]},"id":"17990","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17998","type":"Circle"},{"attributes":{},"id":"17988","type":"ResetTool"},{"attributes":{"data_source":{"id":"17997","type":"ColumnDataSource"},"glyph":{"id":"17998","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17999","type":"Circle"},"selection_glyph":null,"view":{"id":"18001","type":"CDSView"}},"id":"18000","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"17975","type":"BasicTicker"}},"id":"17978","type":"Grid"},{"attributes":{},"id":"17980","type":"BasicTicker"},{"attributes":{},"id":"17989","type":"HelpTool"},{"attributes":{},"id":"18005","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"17968","type":"DataRange1d"},{"attributes":{"source":{"id":"17997","type":"ColumnDataSource"}},"id":"18001","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18007","type":"BoxAnnotation"},{"attributes":{},"id":"17975","type":"BasicTicker"},{"attributes":{"formatter":{"id":"18005","type":"BasicTickFormatter"},"ticker":{"id":"17975","type":"BasicTicker"}},"id":"17974","type":"LinearAxis"},{"attributes":{"callback":null},"id":"17966","type":"DataRange1d"},{"attributes":{"formatter":{"id":"18003","type":"BasicTickFormatter"},"ticker":{"id":"17980","type":"BasicTicker"}},"id":"17979","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"17980","type":"BasicTicker"}},"id":"17983","type":"Grid"},{"attributes":{"text":"Left Title"},"id":"17964","type":"Title"},{"attributes":{},"id":"17984","type":"PanTool"},{"attributes":{},"id":"17987","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"18008","type":"Selection"},"selection_policy":{"id":"18009","type":"UnionRenderers"}},"id":"17997","type":"ColumnDataSource"},{"attributes":{},"id":"18003","type":"BasicTickFormatter"},{"attributes":{},"id":"18008","type":"Selection"},{"attributes":{},"id":"17970","type":"LinearScale"},{"attributes":{},"id":"17985","type":"WheelZoomTool"},{"attributes":{},"id":"18009","type":"UnionRenderers"}],"root_ids":["17963"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"c37a605d-39cd-4a88-9f24-c5fb0d8ac8f7","roots":{"17963":"41686578-b1d7-4ea6-8bc3-b3ef42b41ee6"}}];
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