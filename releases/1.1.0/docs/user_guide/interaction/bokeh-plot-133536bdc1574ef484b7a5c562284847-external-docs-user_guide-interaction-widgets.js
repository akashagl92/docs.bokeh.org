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
      };var element = document.getElementById("165db126-c78d-4de9-85f5-8bb7cd972f36");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '165db126-c78d-4de9-85f5-8bb7cd972f36' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8710269d-9bc8-4f5c-85c5-5c751bef945c":{"roots":{"references":[{"attributes":{"dimension":1,"ticker":{"id":"25703","type":"BasicTicker"}},"id":"25706","type":"Grid"},{"attributes":{"data_source":{"id":"25720","type":"ColumnDataSource"},"glyph":{"id":"25721","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25722","type":"Line"},"selection_glyph":null,"view":{"id":"25724","type":"CDSView"}},"id":"25723","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"25740","type":"Selection"},"selection_policy":{"id":"25739","type":"UnionRenderers"}},"id":"25682","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"25659","type":"LinearAxis"}],"center":[{"id":"25663","type":"Grid"},{"id":"25668","type":"Grid"}],"left":[{"id":"25664","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"25685","type":"GlyphRenderer"}],"title":{"id":"25728","type":"Title"},"toolbar":{"id":"25675","type":"Toolbar"},"x_range":{"id":"25651","type":"DataRange1d"},"x_scale":{"id":"25655","type":"LinearScale"},"y_range":{"id":"25653","type":"DataRange1d"},"y_scale":{"id":"25657","type":"LinearScale"}},"id":"25650","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"25743","type":"Selection"},"selection_policy":{"id":"25742","type":"UnionRenderers"}},"id":"25720","type":"ColumnDataSource"},{"attributes":{},"id":"25707","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25741","type":"BoxAnnotation"},{"attributes":{},"id":"25708","type":"WheelZoomTool"},{"attributes":{},"id":"25698","type":"BasicTicker"},{"attributes":{},"id":"25740","type":"Selection"},{"attributes":{},"id":"25670","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"25683","type":"Circle"},{"attributes":{"overlay":{"id":"25744","type":"BoxAnnotation"}},"id":"25709","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"25738","type":"BasicTickFormatter"},"ticker":{"id":"25698","type":"BasicTicker"}},"id":"25697","type":"LinearAxis"},{"attributes":{"ticker":{"id":"25698","type":"BasicTicker"}},"id":"25701","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"25684","type":"Circle"},{"attributes":{},"id":"25695","type":"LinearScale"},{"attributes":{"formatter":{"id":"25736","type":"BasicTickFormatter"},"ticker":{"id":"25703","type":"BasicTicker"}},"id":"25702","type":"LinearAxis"},{"attributes":{},"id":"25710","type":"SaveTool"},{"attributes":{},"id":"25738","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"25665","type":"BasicTicker"}},"id":"25668","type":"Grid"},{"attributes":{"callback":null},"id":"25651","type":"DataRange1d"},{"attributes":{},"id":"25693","type":"LinearScale"},{"attributes":{},"id":"25736","type":"BasicTickFormatter"},{"attributes":{},"id":"25711","type":"ResetTool"},{"attributes":{"callback":null},"id":"25691","type":"DataRange1d"},{"attributes":{},"id":"25712","type":"HelpTool"},{"attributes":{"formatter":{"id":"25734","type":"BasicTickFormatter"},"ticker":{"id":"25660","type":"BasicTicker"}},"id":"25659","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25707","type":"PanTool"},{"id":"25708","type":"WheelZoomTool"},{"id":"25709","type":"BoxZoomTool"},{"id":"25710","type":"SaveTool"},{"id":"25711","type":"ResetTool"},{"id":"25712","type":"HelpTool"}]},"id":"25713","type":"Toolbar"},{"attributes":{},"id":"25703","type":"BasicTicker"},{"attributes":{},"id":"25657","type":"LinearScale"},{"attributes":{"callback":null},"id":"25689","type":"DataRange1d"},{"attributes":{},"id":"25669","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"25722","type":"Line"},{"attributes":{},"id":"25672","type":"SaveTool"},{"attributes":{},"id":"25655","type":"LinearScale"},{"attributes":{"source":{"id":"25720","type":"ColumnDataSource"}},"id":"25724","type":"CDSView"},{"attributes":{"data_source":{"id":"25682","type":"ColumnDataSource"},"glyph":{"id":"25683","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"25684","type":"Circle"},"selection_glyph":null,"view":{"id":"25686","type":"CDSView"}},"id":"25685","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"25721","type":"Line"},{"attributes":{},"id":"25673","type":"ResetTool"},{"attributes":{"child":{"id":"25688","subtype":"Figure","type":"Plot"},"title":"line"},"id":"25725","type":"Panel"},{"attributes":{"ticker":{"id":"25660","type":"BasicTicker"}},"id":"25663","type":"Grid"},{"attributes":{"overlay":{"id":"25741","type":"BoxAnnotation"}},"id":"25671","type":"BoxZoomTool"},{"attributes":{},"id":"25660","type":"BasicTicker"},{"attributes":{"callback":null,"tabs":[{"id":"25687","type":"Panel"},{"id":"25725","type":"Panel"}]},"id":"25726","type":"Tabs"},{"attributes":{},"id":"25665","type":"BasicTicker"},{"attributes":{"text":""},"id":"25728","type":"Title"},{"attributes":{"callback":null},"id":"25653","type":"DataRange1d"},{"attributes":{},"id":"25742","type":"UnionRenderers"},{"attributes":{"text":""},"id":"25730","type":"Title"},{"attributes":{},"id":"25674","type":"HelpTool"},{"attributes":{},"id":"25743","type":"Selection"},{"attributes":{},"id":"25732","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"25682","type":"ColumnDataSource"}},"id":"25686","type":"CDSView"},{"attributes":{},"id":"25734","type":"BasicTickFormatter"},{"attributes":{},"id":"25739","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"25744","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"25697","type":"LinearAxis"}],"center":[{"id":"25701","type":"Grid"},{"id":"25706","type":"Grid"}],"left":[{"id":"25702","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"25723","type":"GlyphRenderer"}],"title":{"id":"25730","type":"Title"},"toolbar":{"id":"25713","type":"Toolbar"},"x_range":{"id":"25689","type":"DataRange1d"},"x_scale":{"id":"25693","type":"LinearScale"},"y_range":{"id":"25691","type":"DataRange1d"},"y_scale":{"id":"25695","type":"LinearScale"}},"id":"25688","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"25669","type":"PanTool"},{"id":"25670","type":"WheelZoomTool"},{"id":"25671","type":"BoxZoomTool"},{"id":"25672","type":"SaveTool"},{"id":"25673","type":"ResetTool"},{"id":"25674","type":"HelpTool"}]},"id":"25675","type":"Toolbar"},{"attributes":{"child":{"id":"25650","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"25687","type":"Panel"},{"attributes":{"formatter":{"id":"25732","type":"BasicTickFormatter"},"ticker":{"id":"25665","type":"BasicTicker"}},"id":"25664","type":"LinearAxis"}],"root_ids":["25726"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"8710269d-9bc8-4f5c-85c5-5c751bef945c","roots":{"25726":"165db126-c78d-4de9-85f5-8bb7cd972f36"}}];
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