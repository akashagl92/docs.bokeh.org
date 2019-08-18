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
      };var element = document.getElementById("f6e1ef74-ace1-46a5-b4c6-1f11c97c1545");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f6e1ef74-ace1-46a5-b4c6-1f11c97c1545' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"b9825f1c-f933-4fd6-90fb-845a2ac3aa55":{"roots":{"references":[{"attributes":{},"id":"32852","type":"ResetTool"},{"attributes":{"callback":null},"id":"32830","type":"DataRange1d"},{"attributes":{"callback":null},"id":"32832","type":"DataRange1d"},{"attributes":{},"id":"32844","type":"BasicTicker"},{"attributes":{},"id":"32834","type":"LinearScale"},{"attributes":{},"id":"32849","type":"WheelZoomTool"},{"attributes":{"source":{"id":"32863","type":"ColumnDataSource"}},"id":"32867","type":"CDSView"},{"attributes":{"callback":null,"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32875","type":"Selection"},"selection_policy":{"id":"32876","type":"UnionRenderers"}},"id":"32863","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"32838","type":"LinearAxis"}],"left":[{"id":"32843","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32838","type":"LinearAxis"},{"id":"32842","type":"Grid"},{"id":"32843","type":"LinearAxis"},{"id":"32847","type":"Grid"},{"id":"32856","type":"BoxAnnotation"},{"id":"32866","type":"GlyphRenderer"}],"title":{"id":"32868","type":"Title"},"toolbar":{"id":"32854","type":"Toolbar"},"x_range":{"id":"32830","type":"DataRange1d"},"x_scale":{"id":"32834","type":"LinearScale"},"y_range":{"id":"32832","type":"DataRange1d"},"y_scale":{"id":"32836","type":"LinearScale"}},"id":"32829","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32856","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"32863","type":"ColumnDataSource"},"glyph":{"id":"32864","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32865","type":"Dash"},"selection_glyph":null,"view":{"id":"32867","type":"CDSView"}},"id":"32866","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"32872","type":"BasicTickFormatter"},"plot":{"id":"32829","subtype":"Figure","type":"Plot"},"ticker":{"id":"32839","type":"BasicTicker"}},"id":"32838","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"32864","type":"Dash"},{"attributes":{},"id":"32875","type":"Selection"},{"attributes":{"overlay":{"id":"32856","type":"BoxAnnotation"}},"id":"32850","type":"BoxZoomTool"},{"attributes":{},"id":"32836","type":"LinearScale"},{"attributes":{},"id":"32876","type":"UnionRenderers"},{"attributes":{"plot":{"id":"32829","subtype":"Figure","type":"Plot"},"ticker":{"id":"32839","type":"BasicTicker"}},"id":"32842","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32848","type":"PanTool"},{"id":"32849","type":"WheelZoomTool"},{"id":"32850","type":"BoxZoomTool"},{"id":"32851","type":"SaveTool"},{"id":"32852","type":"ResetTool"},{"id":"32853","type":"HelpTool"}]},"id":"32854","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"32829","subtype":"Figure","type":"Plot"},"ticker":{"id":"32844","type":"BasicTicker"}},"id":"32847","type":"Grid"},{"attributes":{},"id":"32870","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"32865","type":"Dash"},{"attributes":{},"id":"32839","type":"BasicTicker"},{"attributes":{},"id":"32851","type":"SaveTool"},{"attributes":{},"id":"32848","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"32868","type":"Title"},{"attributes":{},"id":"32872","type":"BasicTickFormatter"},{"attributes":{},"id":"32853","type":"HelpTool"},{"attributes":{"formatter":{"id":"32870","type":"BasicTickFormatter"},"plot":{"id":"32829","subtype":"Figure","type":"Plot"},"ticker":{"id":"32844","type":"BasicTicker"}},"id":"32843","type":"LinearAxis"}],"root_ids":["32829"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"b9825f1c-f933-4fd6-90fb-845a2ac3aa55","roots":{"32829":"f6e1ef74-ace1-46a5-b4c6-1f11c97c1545"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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