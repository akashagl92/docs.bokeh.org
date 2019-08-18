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
      };var element = document.getElementById("fa1971df-2e23-4eee-9f92-eadee383a841");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'fa1971df-2e23-4eee-9f92-eadee383a841' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"6169c260-4940-4859-aab0-18f329872b2e":{"roots":{"references":[{"attributes":{"overlay":{"id":"34508","type":"BoxAnnotation"}},"id":"34485","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34508","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"34479","type":"BasicTicker"}},"id":"34482","type":"Grid"},{"attributes":{},"id":"34471","type":"LinearScale"},{"attributes":{},"id":"34474","type":"BasicTicker"},{"attributes":{},"id":"34509","type":"Selection"},{"attributes":{},"id":"34487","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"34498","type":"Circle"},{"attributes":{"formatter":{"id":"34506","type":"BasicTickFormatter"},"ticker":{"id":"34474","type":"BasicTicker"}},"id":"34473","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"34497","type":"Circle"},{"attributes":{},"id":"34510","type":"UnionRenderers"},{"attributes":{},"id":"34486","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[0,2,4,6,8,10],"y":[6,2,4,10,8,0]},"selected":{"id":"34509","type":"Selection"},"selection_policy":{"id":"34510","type":"UnionRenderers"}},"id":"34496","type":"ColumnDataSource"},{"attributes":{},"id":"34484","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"34465","type":"DataRange1d"},{"attributes":{"ticker":{"id":"34474","type":"BasicTicker"}},"id":"34477","type":"Grid"},{"attributes":{},"id":"34469","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34483","type":"PanTool"},{"id":"34484","type":"WheelZoomTool"},{"id":"34485","type":"BoxZoomTool"},{"id":"34486","type":"SaveTool"},{"id":"34487","type":"ResetTool"},{"id":"34488","type":"HelpTool"}]},"id":"34489","type":"Toolbar"},{"attributes":{},"id":"34483","type":"PanTool"},{"attributes":{"code":"\\n    return Math.floor(tick) + \\" + \\" + (tick % 1).toFixed(2)\\n"},"id":"34501","type":"FuncTickFormatter"},{"attributes":{"text":""},"id":"34504","type":"Title"},{"attributes":{"below":[{"id":"34473","type":"LinearAxis"}],"center":[{"id":"34477","type":"Grid"},{"id":"34482","type":"Grid"}],"left":[{"id":"34478","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"34499","type":"GlyphRenderer"}],"title":{"id":"34504","type":"Title"},"toolbar":{"id":"34489","type":"Toolbar"},"x_range":{"id":"34465","type":"DataRange1d"},"x_scale":{"id":"34469","type":"LinearScale"},"y_range":{"id":"34467","type":"DataRange1d"},"y_scale":{"id":"34471","type":"LinearScale"}},"id":"34464","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"34501","type":"FuncTickFormatter"},"ticker":{"id":"34479","type":"BasicTicker"}},"id":"34478","type":"LinearAxis"},{"attributes":{"source":{"id":"34496","type":"ColumnDataSource"}},"id":"34500","type":"CDSView"},{"attributes":{"data_source":{"id":"34496","type":"ColumnDataSource"},"glyph":{"id":"34497","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34498","type":"Circle"},"selection_glyph":null,"view":{"id":"34500","type":"CDSView"}},"id":"34499","type":"GlyphRenderer"},{"attributes":{},"id":"34506","type":"BasicTickFormatter"},{"attributes":{},"id":"34479","type":"BasicTicker"},{"attributes":{},"id":"34488","type":"HelpTool"},{"attributes":{"callback":null},"id":"34467","type":"DataRange1d"}],"root_ids":["34464"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"6169c260-4940-4859-aab0-18f329872b2e","roots":{"34464":"fa1971df-2e23-4eee-9f92-eadee383a841"}}];
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