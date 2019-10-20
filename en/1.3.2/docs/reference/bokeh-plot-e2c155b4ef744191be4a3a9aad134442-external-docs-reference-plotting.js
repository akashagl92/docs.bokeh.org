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
      };var element = document.getElementById("961d39aa-39eb-4dc6-8103-45a8be228ec0");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '961d39aa-39eb-4dc6-8103-45a8be228ec0' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js"];
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
                    
                  var docs_json = '{"ad2262f6-d14a-45ed-8ad1-ac5dc568784b":{"roots":{"references":[{"attributes":{},"id":"14732","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14762","type":"BoxAnnotation"},{"attributes":{},"id":"14741","type":"HelpTool"},{"attributes":{"dimension":1,"ticker":{"id":"14732","type":"BasicTicker"}},"id":"14735","type":"Grid"},{"attributes":{"callback":null},"id":"14718","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14736","type":"PanTool"},{"id":"14737","type":"WheelZoomTool"},{"id":"14738","type":"BoxZoomTool"},{"id":"14739","type":"SaveTool"},{"id":"14740","type":"ResetTool"},{"id":"14741","type":"HelpTool"}]},"id":"14742","type":"Toolbar"},{"attributes":{"data_source":{"id":"14749","type":"ColumnDataSource"},"glyph":{"id":"14750","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14751","type":"Asterisk"},"selection_glyph":null,"view":{"id":"14753","type":"CDSView"}},"id":"14752","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"14720","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"14750","type":"Asterisk"},{"attributes":{},"id":"14722","type":"LinearScale"},{"attributes":{"source":{"id":"14749","type":"ColumnDataSource"}},"id":"14753","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"14751","type":"Asterisk"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"14761","type":"Selection"},"selection_policy":{"id":"14760","type":"UnionRenderers"}},"id":"14749","type":"ColumnDataSource"},{"attributes":{},"id":"14724","type":"LinearScale"},{"attributes":{"text":""},"id":"14754","type":"Title"},{"attributes":{},"id":"14736","type":"PanTool"},{"attributes":{"formatter":{"id":"14756","type":"BasicTickFormatter"},"ticker":{"id":"14727","type":"BasicTicker"}},"id":"14726","type":"LinearAxis"},{"attributes":{},"id":"14756","type":"BasicTickFormatter"},{"attributes":{},"id":"14737","type":"WheelZoomTool"},{"attributes":{},"id":"14727","type":"BasicTicker"},{"attributes":{},"id":"14758","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"14762","type":"BoxAnnotation"}},"id":"14738","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"14727","type":"BasicTicker"}},"id":"14730","type":"Grid"},{"attributes":{},"id":"14760","type":"UnionRenderers"},{"attributes":{},"id":"14739","type":"SaveTool"},{"attributes":{"below":[{"id":"14726","type":"LinearAxis"}],"center":[{"id":"14730","type":"Grid"},{"id":"14735","type":"Grid"}],"left":[{"id":"14731","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"14752","type":"GlyphRenderer"}],"title":{"id":"14754","type":"Title"},"toolbar":{"id":"14742","type":"Toolbar"},"x_range":{"id":"14718","type":"DataRange1d"},"x_scale":{"id":"14722","type":"LinearScale"},"y_range":{"id":"14720","type":"DataRange1d"},"y_scale":{"id":"14724","type":"LinearScale"}},"id":"14717","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"14758","type":"BasicTickFormatter"},"ticker":{"id":"14732","type":"BasicTicker"}},"id":"14731","type":"LinearAxis"},{"attributes":{},"id":"14761","type":"Selection"},{"attributes":{},"id":"14740","type":"ResetTool"}],"root_ids":["14717"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"ad2262f6-d14a-45ed-8ad1-ac5dc568784b","roots":{"14717":"961d39aa-39eb-4dc6-8103-45a8be228ec0"}}];
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