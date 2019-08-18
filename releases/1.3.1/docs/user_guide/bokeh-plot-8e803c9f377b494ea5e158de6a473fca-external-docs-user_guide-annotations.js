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
      };var element = document.getElementById("a9869942-5d5e-478e-ae91-b336e837ea07");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a9869942-5d5e-478e-ae91-b336e837ea07' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a920be11-434e-454c-949f-6aa99479e9f0":{"roots":{"references":[{"attributes":{},"id":"17909","type":"HelpTool"},{"attributes":{"text":"Basic Title"},"id":"17884","type":"Title"},{"attributes":{"data_source":{"id":"17917","type":"ColumnDataSource"},"glyph":{"id":"17918","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17919","type":"Circle"},"selection_glyph":null,"view":{"id":"17921","type":"CDSView"}},"id":"17920","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"17928","type":"Selection"},"selection_policy":{"id":"17929","type":"UnionRenderers"}},"id":"17917","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17919","type":"Circle"},{"attributes":{"formatter":{"id":"17923","type":"BasicTickFormatter"},"ticker":{"id":"17900","type":"BasicTicker"}},"id":"17899","type":"LinearAxis"},{"attributes":{},"id":"17900","type":"BasicTicker"},{"attributes":{},"id":"17925","type":"BasicTickFormatter"},{"attributes":{},"id":"17904","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"17918","type":"Circle"},{"attributes":{"callback":null},"id":"17888","type":"DataRange1d"},{"attributes":{},"id":"17895","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17927","type":"BoxAnnotation"},{"attributes":{},"id":"17907","type":"SaveTool"},{"attributes":{},"id":"17892","type":"LinearScale"},{"attributes":{},"id":"17929","type":"UnionRenderers"},{"attributes":{"source":{"id":"17917","type":"ColumnDataSource"}},"id":"17921","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17904","type":"PanTool"},{"id":"17905","type":"WheelZoomTool"},{"id":"17906","type":"BoxZoomTool"},{"id":"17907","type":"SaveTool"},{"id":"17908","type":"ResetTool"},{"id":"17909","type":"HelpTool"}]},"id":"17910","type":"Toolbar"},{"attributes":{"overlay":{"id":"17927","type":"BoxAnnotation"}},"id":"17906","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"17886","type":"DataRange1d"},{"attributes":{},"id":"17908","type":"ResetTool"},{"attributes":{},"id":"17923","type":"BasicTickFormatter"},{"attributes":{},"id":"17928","type":"Selection"},{"attributes":{"below":[{"id":"17894","type":"LinearAxis"}],"center":[{"id":"17898","type":"Grid"},{"id":"17903","type":"Grid"}],"left":[{"id":"17899","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"17920","type":"GlyphRenderer"}],"title":{"id":"17884","type":"Title"},"toolbar":{"id":"17910","type":"Toolbar"},"x_range":{"id":"17886","type":"DataRange1d"},"x_scale":{"id":"17890","type":"LinearScale"},"y_range":{"id":"17888","type":"DataRange1d"},"y_scale":{"id":"17892","type":"LinearScale"}},"id":"17883","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"ticker":{"id":"17900","type":"BasicTicker"}},"id":"17903","type":"Grid"},{"attributes":{},"id":"17905","type":"WheelZoomTool"},{"attributes":{},"id":"17890","type":"LinearScale"},{"attributes":{"formatter":{"id":"17925","type":"BasicTickFormatter"},"ticker":{"id":"17895","type":"BasicTicker"}},"id":"17894","type":"LinearAxis"},{"attributes":{"ticker":{"id":"17895","type":"BasicTicker"}},"id":"17898","type":"Grid"}],"root_ids":["17883"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"a920be11-434e-454c-949f-6aa99479e9f0","roots":{"17883":"a9869942-5d5e-478e-ae91-b336e837ea07"}}];
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