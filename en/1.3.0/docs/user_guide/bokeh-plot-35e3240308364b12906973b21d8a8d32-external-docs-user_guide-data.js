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
      };var element = document.getElementById("c09b7bcd-b8fe-4a53-8952-3b56d4953243");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c09b7bcd-b8fe-4a53-8952-3b56d4953243' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f23df272-3ae9-41de-a263-344563ed81b0":{"roots":{"references":[{"attributes":{},"id":"22172","type":"ResetTool"},{"attributes":{"callback":null},"id":"22203","type":"HoverTool"},{"attributes":{},"id":"22188","type":"LinearScale"},{"attributes":{"indices":[0,2,4]},"id":"22149","type":"IndexFilter"},{"attributes":{"ticker":{"id":"22193","type":"BasicTicker"}},"id":"22196","type":"Grid"},{"attributes":{},"id":"22156","type":"LinearScale"},{"attributes":{"data_source":{"id":"22148","type":"ColumnDataSource"},"glyph":{"id":"22210","type":"Circle"},"hover_glyph":{"id":"22212","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22211","type":"Circle"},"selection_glyph":null,"view":{"id":"22150","type":"CDSView"}},"id":"22213","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22220","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22179","type":"Circle"},{"attributes":{"below":[{"id":"22192","type":"LinearAxis"}],"center":[{"id":"22196","type":"Grid"},{"id":"22201","type":"Grid"}],"left":[{"id":"22197","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22213","type":"GlyphRenderer"}],"title":{"id":"22225","type":"Title"},"toolbar":{"id":"22205","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22184","type":"DataRange1d"},"x_scale":{"id":"22188","type":"LinearScale"},"y_range":{"id":"22186","type":"DataRange1d"},"y_scale":{"id":"22190","type":"LinearScale"}},"id":"22183","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"22148","type":"ColumnDataSource"}},"id":"22182","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22178","type":"Circle"},{"attributes":{"callback":null},"id":"22186","type":"DataRange1d"},{"attributes":{"callback":null},"id":"22171","type":"HoverTool"},{"attributes":{},"id":"22166","type":"BasicTicker"},{"attributes":{"below":[{"id":"22160","type":"LinearAxis"}],"center":[{"id":"22164","type":"Grid"},{"id":"22169","type":"Grid"}],"left":[{"id":"22165","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"22181","type":"GlyphRenderer"}],"title":{"id":"22215","type":"Title"},"toolbar":{"id":"22173","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22152","type":"DataRange1d"},"x_scale":{"id":"22156","type":"LinearScale"},"y_range":{"id":"22154","type":"DataRange1d"},"y_scale":{"id":"22158","type":"LinearScale"}},"id":"22151","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"22154","type":"DataRange1d"},{"attributes":{"data_source":{"id":"22148","type":"ColumnDataSource"},"glyph":{"id":"22178","type":"Circle"},"hover_glyph":{"id":"22180","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"22179","type":"Circle"},"selection_glyph":null,"view":{"id":"22182","type":"CDSView"}},"id":"22181","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"22198","type":"BasicTicker"}},"id":"22201","type":"Grid"},{"attributes":{},"id":"22229","type":"BasicTickFormatter"},{"attributes":{},"id":"22219","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22212","type":"Circle"},{"attributes":{"formatter":{"id":"22217","type":"BasicTickFormatter"},"ticker":{"id":"22161","type":"BasicTicker"}},"id":"22160","type":"LinearAxis"},{"attributes":{"filters":[{"id":"22149","type":"IndexFilter"}],"source":{"id":"22148","type":"ColumnDataSource"}},"id":"22150","type":"CDSView"},{"attributes":{},"id":"22190","type":"LinearScale"},{"attributes":{"text":""},"id":"22215","type":"Title"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[1,2,3,4,5]},"selected":{"id":"22222","type":"Selection"},"selection_policy":{"id":"22221","type":"UnionRenderers"}},"id":"22148","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"22225","type":"Title"},{"attributes":{},"id":"22193","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22210","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22202","type":"BoxSelectTool"},{"id":"22203","type":"HoverTool"},{"id":"22204","type":"ResetTool"}]},"id":"22205","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22230","type":"BoxAnnotation"},{"attributes":{},"id":"22204","type":"ResetTool"},{"attributes":{},"id":"22227","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"22219","type":"BasicTickFormatter"},"ticker":{"id":"22166","type":"BasicTicker"}},"id":"22165","type":"LinearAxis"},{"attributes":{"formatter":{"id":"22227","type":"BasicTickFormatter"},"ticker":{"id":"22193","type":"BasicTicker"}},"id":"22192","type":"LinearAxis"},{"attributes":{},"id":"22217","type":"BasicTickFormatter"},{"attributes":{},"id":"22198","type":"BasicTicker"},{"attributes":{},"id":"22222","type":"Selection"},{"attributes":{"formatter":{"id":"22229","type":"BasicTickFormatter"},"ticker":{"id":"22198","type":"BasicTicker"}},"id":"22197","type":"LinearAxis"},{"attributes":{"tools":[{"id":"22170","type":"BoxSelectTool"},{"id":"22171","type":"HoverTool"},{"id":"22172","type":"ResetTool"},{"id":"22202","type":"BoxSelectTool"},{"id":"22203","type":"HoverTool"},{"id":"22204","type":"ResetTool"}]},"id":"22235","type":"ProxyToolbar"},{"attributes":{"callback":null,"overlay":{"id":"22230","type":"BoxAnnotation"}},"id":"22202","type":"BoxSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"22220","type":"BoxAnnotation"}},"id":"22170","type":"BoxSelectTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22180","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"22211","type":"Circle"},{"attributes":{"toolbar":{"id":"22235","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"22236","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"22184","type":"DataRange1d"},{"attributes":{"callback":null},"id":"22152","type":"DataRange1d"},{"attributes":{},"id":"22158","type":"LinearScale"},{"attributes":{"children":[[{"id":"22151","subtype":"Figure","type":"Plot"},0,0],[{"id":"22183","subtype":"Figure","type":"Plot"},0,1]]},"id":"22234","type":"GridBox"},{"attributes":{"dimension":1,"ticker":{"id":"22166","type":"BasicTicker"}},"id":"22169","type":"Grid"},{"attributes":{"ticker":{"id":"22161","type":"BasicTicker"}},"id":"22164","type":"Grid"},{"attributes":{},"id":"22221","type":"UnionRenderers"},{"attributes":{"children":[{"id":"22236","type":"ToolbarBox"},{"id":"22234","type":"GridBox"}]},"id":"22237","type":"Column"},{"attributes":{},"id":"22161","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22170","type":"BoxSelectTool"},{"id":"22171","type":"HoverTool"},{"id":"22172","type":"ResetTool"}]},"id":"22173","type":"Toolbar"}],"root_ids":["22237"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"f23df272-3ae9-41de-a263-344563ed81b0","roots":{"22237":"c09b7bcd-b8fe-4a53-8952-3b56d4953243"}}];
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