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
      };var element = document.getElementById("7c542f37-d570-4189-9d52-fc8e55313e4d");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '7c542f37-d570-4189-9d52-fc8e55313e4d' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"84edf566-e566-44ea-ba8d-c8fd80f7139d":{"roots":{"references":[{"attributes":{"ticker":{"id":"19186","type":"BasicTicker"}},"id":"19189","type":"Grid"},{"attributes":{},"id":"19199","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"19191","type":"BasicTicker"}},"id":"19194","type":"Grid"},{"attributes":{},"id":"19200","type":"HelpTool"},{"attributes":{"source":{"id":"19208","type":"ColumnDataSource"}},"id":"19212","type":"CDSView"},{"attributes":{"callback":null},"id":"19177","type":"DataRange1d"},{"attributes":{},"id":"19191","type":"BasicTicker"},{"attributes":{"below":[{"id":"19185","type":"LinearAxis"}],"center":[{"id":"19189","type":"Grid"},{"id":"19194","type":"Grid"},{"id":"19213","type":"Slope"}],"left":[{"id":"19190","type":"LinearAxis"}],"plot_height":450,"plot_width":450,"renderers":[{"id":"19211","type":"GlyphRenderer"}],"title":{"id":"19215","type":"Title"},"toolbar":{"id":"19201","type":"Toolbar"},"x_range":{"id":"19177","type":"DataRange1d"},"x_scale":{"id":"19181","type":"LinearScale"},"y_range":{"id":"19179","type":"Range1d"},"y_scale":{"id":"19183","type":"LinearScale"}},"id":"19176","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19186","type":"BasicTicker"},{"attributes":{},"id":"19222","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19220","type":"BoxAnnotation"},{"attributes":{"text":""},"id":"19215","type":"Title"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"y":{"__ndarray__":"RUelWvzzEEAM1weBnOobQKU8SZPwKihAl6u3xJyIK0AkiMFEPeQQQP5fity4eTtA5L5g2aA+MkApQAKQmv8yQNCKc3wg1DNA5wCm9xHIQUAUTjWP3xg+QEahklr1aUNATnBEFxrnQUDuJEwvJXJFQDEJ8z4HQUBAQzeHPLY0REDm4Gw1DPdCQN1zk8jk2EVA6Ly4wMNNR0B9/zmhTZJIQA==","dtype":"float64","shape":[20]}},"selected":{"id":"19221","type":"Selection"},"selection_policy":{"id":"19222","type":"UnionRenderers"}},"id":"19208","type":"ColumnDataSource"},{"attributes":{},"id":"19195","type":"PanTool"},{"attributes":{"axis_label":"x","formatter":{"id":"19218","type":"BasicTickFormatter"},"ticker":{"id":"19186","type":"BasicTicker"}},"id":"19185","type":"LinearAxis"},{"attributes":{},"id":"19216","type":"BasicTickFormatter"},{"attributes":{},"id":"19183","type":"LinearScale"},{"attributes":{"overlay":{"id":"19220","type":"BoxAnnotation"}},"id":"19197","type":"BoxZoomTool"},{"attributes":{"gradient":2,"line_color":{"value":"orange"},"line_dash":[6],"line_width":{"value":3.5},"y_intercept":10},"id":"19213","type":"Slope"},{"attributes":{},"id":"19181","type":"LinearScale"},{"attributes":{},"id":"19198","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"19210","type":"Circle"},{"attributes":{"data_source":{"id":"19208","type":"ColumnDataSource"},"glyph":{"id":"19209","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19210","type":"Circle"},"selection_glyph":null,"view":{"id":"19212","type":"CDSView"}},"id":"19211","type":"GlyphRenderer"},{"attributes":{},"id":"19196","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":54.05729348054054},"id":"19179","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19195","type":"PanTool"},{"id":"19196","type":"WheelZoomTool"},{"id":"19197","type":"BoxZoomTool"},{"id":"19198","type":"SaveTool"},{"id":"19199","type":"ResetTool"},{"id":"19200","type":"HelpTool"}]},"id":"19201","type":"Toolbar"},{"attributes":{"axis_label":"y","formatter":{"id":"19216","type":"BasicTickFormatter"},"ticker":{"id":"19191","type":"BasicTicker"}},"id":"19190","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"19209","type":"Circle"},{"attributes":{},"id":"19218","type":"BasicTickFormatter"},{"attributes":{},"id":"19221","type":"Selection"}],"root_ids":["19176"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"84edf566-e566-44ea-ba8d-c8fd80f7139d","roots":{"19176":"7c542f37-d570-4189-9d52-fc8e55313e4d"}}];
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