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
      };var element = document.getElementById("6c24239b-327a-4bf4-9e15-b63c51b5e327");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6c24239b-327a-4bf4-9e15-b63c51b5e327' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e76d1ce5-37ad-44dd-b796-dec86dddfb35":{"roots":{"references":[{"attributes":{},"id":"20954","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"20949","type":"BasicTicker"}},"id":"20952","type":"Grid"},{"attributes":{"ticker":{"id":"20944","type":"BasicTicker"}},"id":"20947","type":"Grid"},{"attributes":{},"id":"20939","type":"LinearScale"},{"attributes":{"formatter":{"id":"20968","type":"BasicTickFormatter"},"ticker":{"id":"20949","type":"BasicTicker"}},"id":"20948","type":"LinearAxis"},{"attributes":{"below":[{"id":"20943","type":"LinearAxis"}],"center":[{"id":"20947","type":"Grid"},{"id":"20952","type":"Grid"}],"left":[{"id":"20948","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"20963","type":"GlyphRenderer"}],"title":{"id":"20966","type":"Title"},"toolbar":{"id":"20956","type":"Toolbar"},"x_range":{"id":"20935","type":"DataRange1d"},"x_scale":{"id":"20939","type":"LinearScale"},"y_range":{"id":"20937","type":"DataRange1d"},"y_scale":{"id":"20941","type":"LinearScale"}},"id":"20934","subtype":"Figure","type":"Plot"},{"attributes":{"text":""},"id":"20966","type":"Title"},{"attributes":{},"id":"20972","type":"Selection"},{"attributes":{"formatter":{"id":"20970","type":"BasicTickFormatter"},"ticker":{"id":"20944","type":"BasicTicker"}},"id":"20943","type":"LinearAxis"},{"attributes":{},"id":"20968","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"20935","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"20961","type":"Circle"},{"attributes":{},"id":"20949","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"20962","type":"Circle"},{"attributes":{},"id":"20971","type":"UnionRenderers"},{"attributes":{},"id":"20944","type":"BasicTicker"},{"attributes":{},"id":"20970","type":"BasicTickFormatter"},{"attributes":{},"id":"20953","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]},"selected":{"id":"20972","type":"Selection"},"selection_policy":{"id":"20971","type":"UnionRenderers"}},"id":"20960","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20953","type":"PanTool"},{"id":"20954","type":"ResetTool"},{"id":"20955","type":"SaveTool"}]},"id":"20956","type":"Toolbar"},{"attributes":{"data_source":{"id":"20960","type":"ColumnDataSource"},"glyph":{"id":"20961","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20962","type":"Circle"},"selection_glyph":null,"view":{"id":"20964","type":"CDSView"}},"id":"20963","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"20937","type":"DataRange1d"},{"attributes":{},"id":"20955","type":"SaveTool"},{"attributes":{"source":{"id":"20960","type":"ColumnDataSource"}},"id":"20964","type":"CDSView"},{"attributes":{},"id":"20941","type":"LinearScale"}],"root_ids":["20934"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"e76d1ce5-37ad-44dd-b796-dec86dddfb35","roots":{"20934":"6c24239b-327a-4bf4-9e15-b63c51b5e327"}}];
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