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
      };var element = document.getElementById("3cd5731c-80d1-44ee-8c08-3fe9f9d0f39b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3cd5731c-80d1-44ee-8c08-3fe9f9d0f39b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a5a2a8e4-96c0-4c83-9455-cbcf4b99c9d6":{"roots":{"references":[{"attributes":{"below":[{"id":"9885","type":"LinearAxis"}],"left":[{"id":"9890","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9885","type":"LinearAxis"},{"id":"9889","type":"Grid"},{"id":"9890","type":"LinearAxis"},{"id":"9894","type":"Grid"},{"id":"9903","type":"BoxAnnotation"},{"id":"9913","type":"GlyphRenderer"},{"id":"9918","type":"GlyphRenderer"}],"title":{"id":"9921","type":"Title"},"toolbar":{"id":"9901","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9877","type":"DataRange1d"},"x_scale":{"id":"9881","type":"LinearScale"},"y_range":{"id":"9879","type":"DataRange1d"},"y_scale":{"id":"9883","type":"LinearScale"}},"id":"9876","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9900","type":"HelpTool"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9917","type":"Text"},{"attributes":{},"id":"9896","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"9915","type":"ColumnDataSource"},"glyph":{"id":"9916","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9917","type":"Text"},"selection_glyph":null,"view":{"id":"9919","type":"CDSView"}},"id":"9918","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"9925","type":"BasicTickFormatter"},"plot":{"id":"9876","subtype":"Figure","type":"Plot"},"ticker":{"id":"9891","type":"BasicTicker"}},"id":"9890","type":"LinearAxis"},{"attributes":{},"id":"9895","type":"PanTool"},{"attributes":{},"id":"9929","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"9879","type":"DataRange1d"},{"attributes":{},"id":"9886","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9877","type":"DataRange1d"},{"attributes":{"overlay":{"id":"9903","type":"BoxAnnotation"}},"id":"9897","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"fill_color":["firebrick","firebrick","firebrick","navy","navy","navy","navy"],"q":[0,0,0,-1,-1,1,1],"r":[0,-1,1,0,1,-1,0]},"selected":{"id":"9928","type":"Selection"},"selection_policy":{"id":"9927","type":"UnionRenderers"}},"id":"9910","type":"ColumnDataSource"},{"attributes":{},"id":"9928","type":"Selection"},{"attributes":{"data_source":{"id":"9910","type":"ColumnDataSource"},"glyph":{"id":"9911","type":"HexTile"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9912","type":"HexTile"},"selection_glyph":null,"view":{"id":"9914","type":"CDSView"}},"id":"9913","type":"GlyphRenderer"},{"attributes":{},"id":"9891","type":"BasicTicker"},{"attributes":{"source":{"id":"9910","type":"ColumnDataSource"}},"id":"9914","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"9895","type":"PanTool"},{"id":"9896","type":"WheelZoomTool"},{"id":"9897","type":"BoxZoomTool"},{"id":"9898","type":"SaveTool"},{"id":"9899","type":"ResetTool"},{"id":"9900","type":"HelpTool"}]},"id":"9901","type":"Toolbar"},{"attributes":{},"id":"9899","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.5},"line_color":{"value":"white"},"q":{"field":"q"},"r":{"field":"r"}},"id":"9911","type":"HexTile"},{"attributes":{"formatter":{"id":"9923","type":"BasicTickFormatter"},"plot":{"id":"9876","subtype":"Figure","type":"Plot"},"ticker":{"id":"9886","type":"BasicTicker"}},"id":"9885","type":"LinearAxis"},{"attributes":{"source":{"id":"9915","type":"ColumnDataSource"}},"id":"9919","type":"CDSView"},{"attributes":{"callback":null,"data":{"text":["(0, 0)","(0, -1)","(0, 1)","(-1, 0)","(-1, 1)","(1, -1)","(1, 0)"],"x":{"__ndarray__":"AAAAAAAAAACqTFjoerbrv6pMWOh6tus/qkxY6Hq2+7+qTFjoerbrv6pMWOh6tus/qkxY6Hq2+z8=","dtype":"float64","shape":[7]},"y":{"__ndarray__":"AAAAAAAAAIAAAAAAAAD4PwAAAAAAAPi/AAAAAAAAAIAAAAAAAAD4vwAAAAAAAPg/AAAAAAAAAIA=","dtype":"float64","shape":[7]}},"selected":{"id":"9930","type":"Selection"},"selection_policy":{"id":"9929","type":"UnionRenderers"}},"id":"9915","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"}},"id":"9912","type":"HexTile"},{"attributes":{"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9916","type":"Text"},{"attributes":{},"id":"9898","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9903","type":"BoxAnnotation"},{"attributes":{},"id":"9883","type":"LinearScale"},{"attributes":{},"id":"9930","type":"Selection"},{"attributes":{},"id":"9927","type":"UnionRenderers"},{"attributes":{"plot":{"id":"9876","subtype":"Figure","type":"Plot"},"ticker":{"id":"9886","type":"BasicTicker"},"visible":false},"id":"9889","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"9876","subtype":"Figure","type":"Plot"},"ticker":{"id":"9891","type":"BasicTicker"},"visible":false},"id":"9894","type":"Grid"},{"attributes":{},"id":"9925","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"9921","type":"Title"},{"attributes":{},"id":"9881","type":"LinearScale"},{"attributes":{},"id":"9923","type":"BasicTickFormatter"}],"root_ids":["9876"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"a5a2a8e4-96c0-4c83-9455-cbcf4b99c9d6","roots":{"9876":"3cd5731c-80d1-44ee-8c08-3fe9f9d0f39b"}}];
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