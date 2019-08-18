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
      };var element = document.getElementById("3a00ebad-e833-43f7-bf2e-20b8598eeb38");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3a00ebad-e833-43f7-bf2e-20b8598eeb38' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"99343662-82f8-47ae-9a01-896b9acbf5a9":{"roots":{"references":[{"attributes":{},"id":"17297","type":"PanTool"},{"attributes":{"callback":null,"data":{"top":[1,2,3],"x":[1,2,3]},"selected":{"id":"17323","type":"Selection"},"selection_policy":{"id":"17322","type":"UnionRenderers"}},"id":"17310","type":"ColumnDataSource"},{"attributes":{},"id":"17288","type":"BasicTicker"},{"attributes":{"source":{"id":"17310","type":"ColumnDataSource"}},"id":"17314","type":"CDSView"},{"attributes":{},"id":"17293","type":"BasicTicker"},{"attributes":{"overlay":{"id":"17321","type":"BoxAnnotation"}},"id":"17299","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"17311","type":"VBar"},{"attributes":{},"id":"17298","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"17320","type":"BasicTickFormatter"},"ticker":{"id":"17293","type":"BasicTicker"}},"id":"17292","type":"LinearAxis"},{"attributes":{"ticker":{"id":"17288","type":"BasicTicker"}},"id":"17291","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17297","type":"PanTool"},{"id":"17298","type":"WheelZoomTool"},{"id":"17299","type":"BoxZoomTool"},{"id":"17300","type":"SaveTool"},{"id":"17301","type":"ResetTool"},{"id":"17302","type":"HelpTool"}]},"id":"17303","type":"Toolbar"},{"attributes":{},"id":"17301","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"17293","type":"BasicTicker"}},"id":"17296","type":"Grid"},{"attributes":{"below":[{"id":"17287","type":"LinearAxis"}],"center":[{"id":"17291","type":"Grid"},{"id":"17296","type":"Grid"}],"left":[{"id":"17292","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17313","type":"GlyphRenderer"}],"title":{"id":"17316","type":"Title"},"toolbar":{"id":"17303","type":"Toolbar"},"x_range":{"id":"17279","type":"DataRange1d"},"x_scale":{"id":"17283","type":"LinearScale"},"y_range":{"id":"17281","type":"DataRange1d"},"y_scale":{"id":"17285","type":"LinearScale"}},"id":"17278","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17322","type":"UnionRenderers"},{"attributes":{},"id":"17320","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"17310","type":"ColumnDataSource"},"glyph":{"id":"17311","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17312","type":"VBar"},"selection_glyph":null,"view":{"id":"17314","type":"CDSView"}},"id":"17313","type":"GlyphRenderer"},{"attributes":{},"id":"17300","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"17312","type":"VBar"},{"attributes":{},"id":"17283","type":"LinearScale"},{"attributes":{"text":""},"id":"17316","type":"Title"},{"attributes":{},"id":"17323","type":"Selection"},{"attributes":{},"id":"17318","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17321","type":"BoxAnnotation"},{"attributes":{},"id":"17285","type":"LinearScale"},{"attributes":{"callback":null},"id":"17279","type":"DataRange1d"},{"attributes":{"formatter":{"id":"17318","type":"BasicTickFormatter"},"ticker":{"id":"17288","type":"BasicTicker"}},"id":"17287","type":"LinearAxis"},{"attributes":{"callback":null},"id":"17281","type":"DataRange1d"},{"attributes":{},"id":"17302","type":"HelpTool"}],"root_ids":["17278"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"99343662-82f8-47ae-9a01-896b9acbf5a9","roots":{"17278":"3a00ebad-e833-43f7-bf2e-20b8598eeb38"}}];
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