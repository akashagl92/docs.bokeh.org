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
      };var element = document.getElementById("3a6b538d-72d9-4954-ab6b-6772d73800ef");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3a6b538d-72d9-4954-ab6b-6772d73800ef' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ac33749c-eddb-4f0e-a530-1c7e461d9352":{"roots":{"references":[{"attributes":{},"id":"34470","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"34478","type":"BasicTicker"}},"id":"34481","type":"Grid"},{"attributes":{"formatter":{"id":"34505","type":"BasicTickFormatter"},"ticker":{"id":"34473","type":"BasicTicker"}},"id":"34472","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34507","type":"BoxAnnotation"},{"attributes":{},"id":"34468","type":"LinearScale"},{"attributes":{},"id":"34486","type":"ResetTool"},{"attributes":{},"id":"34508","type":"UnionRenderers"},{"attributes":{"below":[{"id":"34472","type":"LinearAxis"}],"center":[{"id":"34476","type":"Grid"},{"id":"34481","type":"Grid"}],"left":[{"id":"34477","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"34498","type":"GlyphRenderer"}],"title":{"id":"34503","type":"Title"},"toolbar":{"id":"34488","type":"Toolbar"},"x_range":{"id":"34464","type":"DataRange1d"},"x_scale":{"id":"34468","type":"LinearScale"},"y_range":{"id":"34466","type":"DataRange1d"},"y_scale":{"id":"34470","type":"LinearScale"}},"id":"34463","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"34497","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"34496","type":"Circle"},{"attributes":{},"id":"34485","type":"SaveTool"},{"attributes":{},"id":"34509","type":"Selection"},{"attributes":{},"id":"34483","type":"WheelZoomTool"},{"attributes":{},"id":"34473","type":"BasicTicker"},{"attributes":{"callback":null},"id":"34464","type":"DataRange1d"},{"attributes":{"ticker":{"id":"34473","type":"BasicTicker"}},"id":"34476","type":"Grid"},{"attributes":{"data_source":{"id":"34495","type":"ColumnDataSource"},"glyph":{"id":"34496","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34497","type":"Circle"},"selection_glyph":null,"view":{"id":"34499","type":"CDSView"}},"id":"34498","type":"GlyphRenderer"},{"attributes":{},"id":"34482","type":"PanTool"},{"attributes":{"code":"\\n    return Math.floor(tick) + \\" + \\" + (tick % 1).toFixed(2)\\n"},"id":"34500","type":"FuncTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34482","type":"PanTool"},{"id":"34483","type":"WheelZoomTool"},{"id":"34484","type":"BoxZoomTool"},{"id":"34485","type":"SaveTool"},{"id":"34486","type":"ResetTool"},{"id":"34487","type":"HelpTool"}]},"id":"34488","type":"Toolbar"},{"attributes":{"text":""},"id":"34503","type":"Title"},{"attributes":{"callback":null,"data":{"x":[0,2,4,6,8,10],"y":[6,2,4,10,8,0]},"selected":{"id":"34509","type":"Selection"},"selection_policy":{"id":"34508","type":"UnionRenderers"}},"id":"34495","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"34500","type":"FuncTickFormatter"},"ticker":{"id":"34478","type":"BasicTicker"}},"id":"34477","type":"LinearAxis"},{"attributes":{"callback":null},"id":"34466","type":"DataRange1d"},{"attributes":{"source":{"id":"34495","type":"ColumnDataSource"}},"id":"34499","type":"CDSView"},{"attributes":{},"id":"34505","type":"BasicTickFormatter"},{"attributes":{},"id":"34478","type":"BasicTicker"},{"attributes":{},"id":"34487","type":"HelpTool"},{"attributes":{"overlay":{"id":"34507","type":"BoxAnnotation"}},"id":"34484","type":"BoxZoomTool"}],"root_ids":["34463"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"ac33749c-eddb-4f0e-a530-1c7e461d9352","roots":{"34463":"3a6b538d-72d9-4954-ab6b-6772d73800ef"}}];
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