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
      };var element = document.getElementById("4b9f6cb6-c056-4eb3-bbfb-2c35a6e5cc75");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4b9f6cb6-c056-4eb3-bbfb-2c35a6e5cc75' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"235853fc-36e6-4d9e-8fb7-e476cf6e3839":{"roots":{"references":[{"attributes":{},"id":"34471","type":"Selection"},{"attributes":{},"id":"34439","type":"BasicTicker"},{"attributes":{"callback":null},"id":"34425","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34443","type":"PanTool"},{"id":"34444","type":"WheelZoomTool"},{"id":"34445","type":"BoxZoomTool"},{"id":"34446","type":"SaveTool"},{"id":"34447","type":"ResetTool"},{"id":"34448","type":"HelpTool"}]},"id":"34449","type":"Toolbar"},{"attributes":{"formatter":{"id":"34466","type":"BasicTickFormatter"},"plot":{"id":"34424","subtype":"Figure","type":"Plot"},"ticker":{"id":"34434","type":"BasicTicker"}},"id":"34433","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"34424","subtype":"Figure","type":"Plot"},"ticker":{"id":"34439","type":"BasicTicker"}},"id":"34442","type":"Grid"},{"attributes":{"callback":null},"id":"34427","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34451","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34459","type":"Square"},{"attributes":{},"id":"34429","type":"LinearScale"},{"attributes":{"source":{"id":"34458","type":"ColumnDataSource"}},"id":"34462","type":"CDSView"},{"attributes":{"callback":null,"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"34471","type":"Selection"},"selection_policy":{"id":"34470","type":"UnionRenderers"}},"id":"34458","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"34458","type":"ColumnDataSource"},"glyph":{"id":"34459","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34460","type":"Square"},"selection_glyph":null,"view":{"id":"34462","type":"CDSView"}},"id":"34461","type":"GlyphRenderer"},{"attributes":{},"id":"34431","type":"LinearScale"},{"attributes":{},"id":"34443","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"34464","type":"Title"},{"attributes":{},"id":"34434","type":"BasicTicker"},{"attributes":{},"id":"34444","type":"WheelZoomTool"},{"attributes":{},"id":"34466","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"34451","type":"BoxAnnotation"}},"id":"34445","type":"BoxZoomTool"},{"attributes":{},"id":"34446","type":"SaveTool"},{"attributes":{},"id":"34468","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"34424","subtype":"Figure","type":"Plot"},"ticker":{"id":"34434","type":"BasicTicker"}},"id":"34437","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"34460","type":"Square"},{"attributes":{},"id":"34447","type":"ResetTool"},{"attributes":{"below":[{"id":"34433","type":"LinearAxis"}],"left":[{"id":"34438","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34433","type":"LinearAxis"},{"id":"34437","type":"Grid"},{"id":"34438","type":"LinearAxis"},{"id":"34442","type":"Grid"},{"id":"34451","type":"BoxAnnotation"},{"id":"34461","type":"GlyphRenderer"}],"title":{"id":"34464","type":"Title"},"toolbar":{"id":"34449","type":"Toolbar"},"x_range":{"id":"34425","type":"DataRange1d"},"x_scale":{"id":"34429","type":"LinearScale"},"y_range":{"id":"34427","type":"DataRange1d"},"y_scale":{"id":"34431","type":"LinearScale"}},"id":"34424","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"34470","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"34468","type":"BasicTickFormatter"},"plot":{"id":"34424","subtype":"Figure","type":"Plot"},"ticker":{"id":"34439","type":"BasicTicker"}},"id":"34438","type":"LinearAxis"},{"attributes":{},"id":"34448","type":"HelpTool"}],"root_ids":["34424"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"235853fc-36e6-4d9e-8fb7-e476cf6e3839","roots":{"34424":"4b9f6cb6-c056-4eb3-bbfb-2c35a6e5cc75"}}];
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