(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("b27453cf-5ad5-4a83-8669-6395f5dd2561");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b27453cf-5ad5-4a83-8669-6395f5dd2561' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"0693b8f6-ca4a-42ee-a5a1-72a739f6c2c8":{"roots":{"references":[{"attributes":{"plot":{"id":"35032","subtype":"Figure","type":"Plot"},"ticker":{"id":"35042","type":"BasicTicker"}},"id":"35045","type":"Grid"},{"attributes":{},"id":"35075","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35068","type":"X"},{"attributes":{},"id":"35055","type":"ResetTool"},{"attributes":{"formatter":{"id":"35073","type":"BasicTickFormatter"},"plot":{"id":"35032","subtype":"Figure","type":"Plot"},"ticker":{"id":"35047","type":"BasicTicker"}},"id":"35046","type":"LinearAxis"},{"attributes":{},"id":"35077","type":"UnionRenderers"},{"attributes":{"below":[{"id":"35041","type":"LinearAxis"}],"left":[{"id":"35046","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"35041","type":"LinearAxis"},{"id":"35045","type":"Grid"},{"id":"35046","type":"LinearAxis"},{"id":"35050","type":"Grid"},{"id":"35059","type":"BoxAnnotation"},{"id":"35069","type":"GlyphRenderer"}],"title":{"id":"35071","type":"Title"},"toolbar":{"id":"35057","type":"Toolbar"},"x_range":{"id":"35033","type":"DataRange1d"},"x_scale":{"id":"35037","type":"LinearScale"},"y_range":{"id":"35035","type":"DataRange1d"},"y_scale":{"id":"35039","type":"LinearScale"}},"id":"35032","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"35033","type":"DataRange1d"},{"attributes":{},"id":"35056","type":"HelpTool"},{"attributes":{},"id":"35047","type":"BasicTicker"},{"attributes":{},"id":"35078","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35051","type":"PanTool"},{"id":"35052","type":"WheelZoomTool"},{"id":"35053","type":"BoxZoomTool"},{"id":"35054","type":"SaveTool"},{"id":"35055","type":"ResetTool"},{"id":"35056","type":"HelpTool"}]},"id":"35057","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"35032","subtype":"Figure","type":"Plot"},"ticker":{"id":"35047","type":"BasicTicker"}},"id":"35050","type":"Grid"},{"attributes":{"data_source":{"id":"35066","type":"ColumnDataSource"},"glyph":{"id":"35067","type":"X"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35068","type":"X"},"selection_glyph":null,"view":{"id":"35070","type":"CDSView"}},"id":"35069","type":"GlyphRenderer"},{"attributes":{},"id":"35039","type":"LinearScale"},{"attributes":{"callback":null},"id":"35035","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35059","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#fa9fb5"},"line_color":{"value":"#fa9fb5"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35067","type":"X"},{"attributes":{},"id":"35037","type":"LinearScale"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"35078","type":"Selection"},"selection_policy":{"id":"35077","type":"UnionRenderers"}},"id":"35066","type":"ColumnDataSource"},{"attributes":{"source":{"id":"35066","type":"ColumnDataSource"}},"id":"35070","type":"CDSView"},{"attributes":{"formatter":{"id":"35075","type":"BasicTickFormatter"},"plot":{"id":"35032","subtype":"Figure","type":"Plot"},"ticker":{"id":"35042","type":"BasicTicker"}},"id":"35041","type":"LinearAxis"},{"attributes":{},"id":"35051","type":"PanTool"},{"attributes":{},"id":"35052","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"35071","type":"Title"},{"attributes":{"overlay":{"id":"35059","type":"BoxAnnotation"}},"id":"35053","type":"BoxZoomTool"},{"attributes":{},"id":"35042","type":"BasicTicker"},{"attributes":{},"id":"35073","type":"BasicTickFormatter"},{"attributes":{},"id":"35054","type":"SaveTool"}],"root_ids":["35032"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"0693b8f6-ca4a-42ee-a5a1-72a739f6c2c8","roots":{"35032":"b27453cf-5ad5-4a83-8669-6395f5dd2561"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();