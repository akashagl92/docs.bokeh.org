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
      };var element = document.getElementById("29e639cf-fdd8-4d10-9224-b6ad2d9e96bc");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '29e639cf-fdd8-4d10-9224-b6ad2d9e96bc' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
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
                    
                  var docs_json = '{"06a19fe6-b044-4c3a-ab7b-40741b7b4298":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"17312","type":"VBar"},{"attributes":{},"id":"17286","type":"LinearScale"},{"attributes":{},"id":"17323","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"17311","type":"ColumnDataSource"},"glyph":{"id":"17312","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17313","type":"VBar"},"selection_glyph":null,"view":{"id":"17315","type":"CDSView"}},"id":"17314","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"17321","type":"BasicTickFormatter"},"ticker":{"id":"17289","type":"BasicTicker"}},"id":"17288","type":"LinearAxis"},{"attributes":{},"id":"17322","type":"Selection"},{"attributes":{"text":""},"id":"17317","type":"Title"},{"attributes":{},"id":"17298","type":"PanTool"},{"attributes":{},"id":"17294","type":"BasicTicker"},{"attributes":{"callback":null},"id":"17280","type":"DataRange1d"},{"attributes":{},"id":"17299","type":"WheelZoomTool"},{"attributes":{},"id":"17289","type":"BasicTicker"},{"attributes":{"below":[{"id":"17288","type":"LinearAxis"}],"center":[{"id":"17292","type":"Grid"},{"id":"17297","type":"Grid"}],"left":[{"id":"17293","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17314","type":"GlyphRenderer"}],"title":{"id":"17317","type":"Title"},"toolbar":{"id":"17304","type":"Toolbar"},"x_range":{"id":"17280","type":"DataRange1d"},"x_scale":{"id":"17284","type":"LinearScale"},"y_range":{"id":"17282","type":"DataRange1d"},"y_scale":{"id":"17286","type":"LinearScale"}},"id":"17279","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17298","type":"PanTool"},{"id":"17299","type":"WheelZoomTool"},{"id":"17300","type":"BoxZoomTool"},{"id":"17301","type":"SaveTool"},{"id":"17302","type":"ResetTool"},{"id":"17303","type":"HelpTool"}]},"id":"17304","type":"Toolbar"},{"attributes":{},"id":"17319","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"17311","type":"ColumnDataSource"}},"id":"17315","type":"CDSView"},{"attributes":{"overlay":{"id":"17324","type":"BoxAnnotation"}},"id":"17300","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"17289","type":"BasicTicker"}},"id":"17292","type":"Grid"},{"attributes":{},"id":"17321","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"17282","type":"DataRange1d"},{"attributes":{},"id":"17301","type":"SaveTool"},{"attributes":{"dimension":1,"ticker":{"id":"17294","type":"BasicTicker"}},"id":"17297","type":"Grid"},{"attributes":{},"id":"17284","type":"LinearScale"},{"attributes":{"formatter":{"id":"17319","type":"BasicTickFormatter"},"ticker":{"id":"17294","type":"BasicTicker"}},"id":"17293","type":"LinearAxis"},{"attributes":{},"id":"17302","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"17313","type":"VBar"},{"attributes":{},"id":"17303","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17324","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"top":[1,2,3],"x":[1,2,3]},"selected":{"id":"17322","type":"Selection"},"selection_policy":{"id":"17323","type":"UnionRenderers"}},"id":"17311","type":"ColumnDataSource"}],"root_ids":["17279"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"06a19fe6-b044-4c3a-ab7b-40741b7b4298","roots":{"17279":"29e639cf-fdd8-4d10-9224-b6ad2d9e96bc"}}];
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