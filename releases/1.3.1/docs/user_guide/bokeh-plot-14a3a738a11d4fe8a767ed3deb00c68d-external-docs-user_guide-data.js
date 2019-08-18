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
      };var element = document.getElementById("c798ea52-7ef5-4b8e-ae15-7a2f4dc47509");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c798ea52-7ef5-4b8e-ae15-7a2f4dc47509' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
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
                    
                  var docs_json = '{"1113b208-9629-4c56-ac43-4f2b87d9a8eb":{"roots":{"references":[{"attributes":{},"id":"22191","type":"LinearScale"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22181","type":"Circle"},{"attributes":{"dimension":1,"ticker":{"id":"22167","type":"BasicTicker"}},"id":"22170","type":"Grid"},{"attributes":{"below":[{"id":"22193","type":"LinearAxis"}],"center":[{"id":"22197","type":"Grid"},{"id":"22202","type":"Grid"}],"left":[{"id":"22198","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22214","type":"GlyphRenderer"}],"title":{"id":"22226","type":"Title"},"toolbar":{"id":"22206","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22185","type":"DataRange1d"},"x_scale":{"id":"22189","type":"LinearScale"},"y_range":{"id":"22187","type":"DataRange1d"},"y_scale":{"id":"22191","type":"LinearScale"}},"id":"22184","subtype":"Figure","type":"Plot"},{"attributes":{"ticker":{"id":"22162","type":"BasicTicker"}},"id":"22165","type":"Grid"},{"attributes":{"callback":null},"id":"22172","type":"HoverTool"},{"attributes":{"callback":null,"overlay":{"id":"22231","type":"BoxAnnotation"}},"id":"22203","type":"BoxSelectTool"},{"attributes":{},"id":"22189","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22179","type":"Circle"},{"attributes":{},"id":"22227","type":"BasicTickFormatter"},{"attributes":{"filters":[{"id":"22150","type":"IndexFilter"}],"source":{"id":"22149","type":"ColumnDataSource"}},"id":"22151","type":"CDSView"},{"attributes":{},"id":"22223","type":"UnionRenderers"},{"attributes":{},"id":"22199","type":"BasicTicker"},{"attributes":{},"id":"22173","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22203","type":"BoxSelectTool"},{"id":"22204","type":"HoverTool"},{"id":"22205","type":"ResetTool"}]},"id":"22206","type":"Toolbar"},{"attributes":{},"id":"22229","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"22237","type":"ToolbarBox"},{"id":"22235","type":"GridBox"}]},"id":"22238","type":"Column"},{"attributes":{"callback":null},"id":"22187","type":"DataRange1d"},{"attributes":{"ticker":{"id":"22194","type":"BasicTicker"}},"id":"22197","type":"Grid"},{"attributes":{},"id":"22167","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22213","type":"Circle"},{"attributes":{},"id":"22222","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22171","type":"BoxSelectTool"},{"id":"22172","type":"HoverTool"},{"id":"22173","type":"ResetTool"}]},"id":"22174","type":"Toolbar"},{"attributes":{},"id":"22217","type":"BasicTickFormatter"},{"attributes":{},"id":"22205","type":"ResetTool"},{"attributes":{},"id":"22162","type":"BasicTicker"},{"attributes":{},"id":"22159","type":"LinearScale"},{"attributes":{"text":""},"id":"22226","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22212","type":"Circle"},{"attributes":{"data_source":{"id":"22149","type":"ColumnDataSource"},"glyph":{"id":"22179","type":"Circle"},"hover_glyph":{"id":"22181","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22180","type":"Circle"},"selection_glyph":null,"view":{"id":"22183","type":"CDSView"}},"id":"22182","type":"GlyphRenderer"},{"attributes":{"source":{"id":"22149","type":"ColumnDataSource"}},"id":"22183","type":"CDSView"},{"attributes":{"formatter":{"id":"22227","type":"BasicTickFormatter"},"ticker":{"id":"22199","type":"BasicTicker"}},"id":"22198","type":"LinearAxis"},{"attributes":{"callback":null},"id":"22185","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":{"id":"22222","type":"Selection"},"selection_policy":{"id":"22223","type":"UnionRenderers"}},"id":"22149","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22180","type":"Circle"},{"attributes":{},"id":"22219","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"22204","type":"HoverTool"},{"attributes":{"formatter":{"id":"22219","type":"BasicTickFormatter"},"ticker":{"id":"22162","type":"BasicTicker"}},"id":"22161","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"22199","type":"BasicTicker"}},"id":"22202","type":"Grid"},{"attributes":{"callback":null},"id":"22153","type":"DataRange1d"},{"attributes":{"tools":[{"id":"22171","type":"BoxSelectTool"},{"id":"22172","type":"HoverTool"},{"id":"22173","type":"ResetTool"},{"id":"22203","type":"BoxSelectTool"},{"id":"22204","type":"HoverTool"},{"id":"22205","type":"ResetTool"}]},"id":"22236","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"22236","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"22237","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"22155","type":"DataRange1d"},{"attributes":{"text":""},"id":"22216","type":"Title"},{"attributes":{"children":[[{"id":"22152","subtype":"Figure","type":"Plot"},0,0],[{"id":"22184","subtype":"Figure","type":"Plot"},0,1]]},"id":"22235","type":"GridBox"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22221","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"22161","type":"LinearAxis"}],"center":[{"id":"22165","type":"Grid"},{"id":"22170","type":"Grid"}],"left":[{"id":"22166","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22182","type":"GlyphRenderer"}],"title":{"id":"22216","type":"Title"},"toolbar":{"id":"22174","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22153","type":"DataRange1d"},"x_scale":{"id":"22157","type":"LinearScale"},"y_range":{"id":"22155","type":"DataRange1d"},"y_scale":{"id":"22159","type":"LinearScale"}},"id":"22152","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"22157","type":"LinearScale"},{"attributes":{"formatter":{"id":"22217","type":"BasicTickFormatter"},"ticker":{"id":"22167","type":"BasicTicker"}},"id":"22166","type":"LinearAxis"},{"attributes":{"data_source":{"id":"22149","type":"ColumnDataSource"},"glyph":{"id":"22211","type":"Circle"},"hover_glyph":{"id":"22213","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22212","type":"Circle"},"selection_glyph":null,"view":{"id":"22151","type":"CDSView"}},"id":"22214","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"22229","type":"BasicTickFormatter"},"ticker":{"id":"22194","type":"BasicTicker"}},"id":"22193","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22231","type":"BoxAnnotation"},{"attributes":{},"id":"22194","type":"BasicTicker"},{"attributes":{"indices":[0,2,4]},"id":"22150","type":"IndexFilter"},{"attributes":{"callback":null,"overlay":{"id":"22221","type":"BoxAnnotation"}},"id":"22171","type":"BoxSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22211","type":"Circle"}],"root_ids":["22238"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"1113b208-9629-4c56-ac43-4f2b87d9a8eb","roots":{"22238":"c798ea52-7ef5-4b8e-ae15-7a2f4dc47509"}}];
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