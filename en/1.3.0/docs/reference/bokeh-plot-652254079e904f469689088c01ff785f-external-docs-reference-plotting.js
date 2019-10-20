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
      };var element = document.getElementById("2dd77042-8467-4a05-99ec-6fc142c14f8a");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2dd77042-8467-4a05-99ec-6fc142c14f8a' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
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
                    
                  var docs_json = '{"3da7a768-6cab-4a5f-bdb7-a675a44df4c4":{"roots":{"references":[{"attributes":{"text":""},"id":"17233","type":"Title"},{"attributes":{"ticker":{"id":"17205","type":"BasicTicker"}},"id":"17208","type":"Grid"},{"attributes":{"below":[{"id":"17204","type":"LinearAxis"}],"center":[{"id":"17208","type":"Grid"},{"id":"17213","type":"Grid"}],"left":[{"id":"17209","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17230","type":"GlyphRenderer"}],"title":{"id":"17233","type":"Title"},"toolbar":{"id":"17220","type":"Toolbar"},"x_range":{"id":"17196","type":"DataRange1d"},"x_scale":{"id":"17200","type":"LinearScale"},"y_range":{"id":"17198","type":"DataRange1d"},"y_scale":{"id":"17202","type":"LinearScale"}},"id":"17195","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y1":[0,0,0],"y2":[1,4,2]},"selected":{"id":"17240","type":"Selection"},"selection_policy":{"id":"17239","type":"UnionRenderers"}},"id":"17227","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"x"},"y1":{"field":"y1"},"y2":{"field":"y2"}},"id":"17229","type":"VArea"},{"attributes":{},"id":"17210","type":"BasicTicker"},{"attributes":{},"id":"17214","type":"PanTool"},{"attributes":{"callback":null},"id":"17196","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"17210","type":"BasicTicker"}},"id":"17213","type":"Grid"},{"attributes":{},"id":"17239","type":"UnionRenderers"},{"attributes":{},"id":"17205","type":"BasicTicker"},{"attributes":{"formatter":{"id":"17235","type":"BasicTickFormatter"},"ticker":{"id":"17205","type":"BasicTicker"}},"id":"17204","type":"LinearAxis"},{"attributes":{"data_source":{"id":"17227","type":"ColumnDataSource"},"glyph":{"id":"17228","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17229","type":"VArea"},"selection_glyph":null,"view":{"id":"17231","type":"CDSView"}},"id":"17230","type":"GlyphRenderer"},{"attributes":{"fill_color":"#99D594","x":{"field":"x"},"y1":{"field":"y1"},"y2":{"field":"y2"}},"id":"17228","type":"VArea"},{"attributes":{},"id":"17237","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"17227","type":"ColumnDataSource"}},"id":"17231","type":"CDSView"},{"attributes":{},"id":"17235","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"17198","type":"DataRange1d"},{"attributes":{},"id":"17217","type":"SaveTool"},{"attributes":{},"id":"17219","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17214","type":"PanTool"},{"id":"17215","type":"WheelZoomTool"},{"id":"17216","type":"BoxZoomTool"},{"id":"17217","type":"SaveTool"},{"id":"17218","type":"ResetTool"},{"id":"17219","type":"HelpTool"}]},"id":"17220","type":"Toolbar"},{"attributes":{"formatter":{"id":"17237","type":"BasicTickFormatter"},"ticker":{"id":"17210","type":"BasicTicker"}},"id":"17209","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17238","type":"BoxAnnotation"},{"attributes":{},"id":"17218","type":"ResetTool"},{"attributes":{},"id":"17200","type":"LinearScale"},{"attributes":{},"id":"17215","type":"WheelZoomTool"},{"attributes":{},"id":"17240","type":"Selection"},{"attributes":{},"id":"17202","type":"LinearScale"},{"attributes":{"overlay":{"id":"17238","type":"BoxAnnotation"}},"id":"17216","type":"BoxZoomTool"}],"root_ids":["17195"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"3da7a768-6cab-4a5f-bdb7-a675a44df4c4","roots":{"17195":"2dd77042-8467-4a05-99ec-6fc142c14f8a"}}];
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