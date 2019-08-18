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
      };var element = document.getElementById("e9238499-7d78-42e0-af18-44a4c4b6777f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e9238499-7d78-42e0-af18-44a4c4b6777f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"5d0ce9fd-b60a-4391-a132-3b6abf1707ea":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32772","type":"Cross"},{"attributes":{},"id":"32742","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32784","type":"Selection"},"selection_policy":{"id":"32783","type":"UnionRenderers"}},"id":"32771","type":"ColumnDataSource"},{"attributes":{"source":{"id":"32771","type":"ColumnDataSource"}},"id":"32775","type":"CDSView"},{"attributes":{"data_source":{"id":"32771","type":"ColumnDataSource"},"glyph":{"id":"32772","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32773","type":"Cross"},"selection_glyph":null,"view":{"id":"32775","type":"CDSView"}},"id":"32774","type":"GlyphRenderer"},{"attributes":{},"id":"32744","type":"LinearScale"},{"attributes":{},"id":"32756","type":"PanTool"},{"attributes":{},"id":"32747","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"32777","type":"Title"},{"attributes":{},"id":"32757","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"32764","type":"BoxAnnotation"}},"id":"32758","type":"BoxZoomTool"},{"attributes":{},"id":"32779","type":"BasicTickFormatter"},{"attributes":{},"id":"32759","type":"SaveTool"},{"attributes":{"plot":{"id":"32737","subtype":"Figure","type":"Plot"},"ticker":{"id":"32747","type":"BasicTicker"}},"id":"32750","type":"Grid"},{"attributes":{},"id":"32781","type":"BasicTickFormatter"},{"attributes":{},"id":"32760","type":"ResetTool"},{"attributes":{"below":[{"id":"32746","type":"LinearAxis"}],"left":[{"id":"32751","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32746","type":"LinearAxis"},{"id":"32750","type":"Grid"},{"id":"32751","type":"LinearAxis"},{"id":"32755","type":"Grid"},{"id":"32764","type":"BoxAnnotation"},{"id":"32774","type":"GlyphRenderer"}],"title":{"id":"32777","type":"Title"},"toolbar":{"id":"32762","type":"Toolbar"},"x_range":{"id":"32738","type":"DataRange1d"},"x_scale":{"id":"32742","type":"LinearScale"},"y_range":{"id":"32740","type":"DataRange1d"},"y_scale":{"id":"32744","type":"LinearScale"}},"id":"32737","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"32781","type":"BasicTickFormatter"},"plot":{"id":"32737","subtype":"Figure","type":"Plot"},"ticker":{"id":"32752","type":"BasicTicker"}},"id":"32751","type":"LinearAxis"},{"attributes":{},"id":"32783","type":"UnionRenderers"},{"attributes":{},"id":"32761","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32773","type":"Cross"},{"attributes":{},"id":"32752","type":"BasicTicker"},{"attributes":{"callback":null},"id":"32738","type":"DataRange1d"},{"attributes":{},"id":"32784","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32756","type":"PanTool"},{"id":"32757","type":"WheelZoomTool"},{"id":"32758","type":"BoxZoomTool"},{"id":"32759","type":"SaveTool"},{"id":"32760","type":"ResetTool"},{"id":"32761","type":"HelpTool"}]},"id":"32762","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"32737","subtype":"Figure","type":"Plot"},"ticker":{"id":"32752","type":"BasicTicker"}},"id":"32755","type":"Grid"},{"attributes":{"formatter":{"id":"32779","type":"BasicTickFormatter"},"plot":{"id":"32737","subtype":"Figure","type":"Plot"},"ticker":{"id":"32747","type":"BasicTicker"}},"id":"32746","type":"LinearAxis"},{"attributes":{"callback":null},"id":"32740","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32764","type":"BoxAnnotation"}],"root_ids":["32737"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"5d0ce9fd-b60a-4391-a132-3b6abf1707ea","roots":{"32737":"e9238499-7d78-42e0-af18-44a4c4b6777f"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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