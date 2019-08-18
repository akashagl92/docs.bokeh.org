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
      };var element = document.getElementById("944fccc0-420e-4a41-9b7a-5ab025619991");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '944fccc0-420e-4a41-9b7a-5ab025619991' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a0857e77-ba54-4332-b62d-c4624ea2b97a":{"roots":{"references":[{"attributes":{},"id":"35174","type":"Selection"},{"attributes":{},"id":"35143","type":"PanTool"},{"attributes":{},"id":"35175","type":"UnionRenderers"},{"attributes":{},"id":"35144","type":"WheelZoomTool"},{"attributes":{},"id":"35176","type":"Selection"},{"attributes":{"plot":null,"text":"example"},"id":"35122","type":"Title"},{"attributes":{"overlay":{"id":"35151","type":"BoxAnnotation"}},"id":"35145","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"35133","type":"LinearAxis"}],"left":[{"id":"35138","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"35133","type":"LinearAxis"},{"id":"35137","type":"Grid"},{"id":"35138","type":"LinearAxis"},{"id":"35142","type":"Grid"},{"id":"35151","type":"BoxAnnotation"},{"id":"35161","type":"GlyphRenderer"},{"id":"35166","type":"GlyphRenderer"}],"title":{"id":"35122","type":"Title"},"toolbar":{"id":"35149","type":"Toolbar"},"x_range":{"id":"35125","type":"DataRange1d"},"x_scale":{"id":"35129","type":"LinearScale"},"y_range":{"id":"35127","type":"DataRange1d"},"y_scale":{"id":"35131","type":"LinearScale"}},"id":"35123","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"35158","type":"ColumnDataSource"},"glyph":{"id":"35159","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35160","type":"Line"},"selection_glyph":null,"view":{"id":"35162","type":"CDSView"}},"id":"35161","type":"GlyphRenderer"},{"attributes":{},"id":"35146","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35143","type":"PanTool"},{"id":"35144","type":"WheelZoomTool"},{"id":"35145","type":"BoxZoomTool"},{"id":"35146","type":"SaveTool"},{"id":"35147","type":"ResetTool"},{"id":"35148","type":"HelpTool"}]},"id":"35149","type":"Toolbar"},{"attributes":{},"id":"35148","type":"HelpTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35160","type":"Line"},{"attributes":{},"id":"35147","type":"ResetTool"},{"attributes":{"source":{"id":"35158","type":"ColumnDataSource"}},"id":"35162","type":"CDSView"},{"attributes":{"callback":null},"id":"35125","type":"DataRange1d"},{"attributes":{"callback":null},"id":"35127","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35174","type":"Selection"},"selection_policy":{"id":"35173","type":"UnionRenderers"}},"id":"35158","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35165","type":"Circle"},{"attributes":{},"id":"35129","type":"LinearScale"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35164","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35151","type":"BoxAnnotation"},{"attributes":{},"id":"35131","type":"LinearScale"},{"attributes":{"formatter":{"id":"35171","type":"BasicTickFormatter"},"plot":{"id":"35123","subtype":"Figure","type":"Plot"},"ticker":{"id":"35134","type":"BasicTicker"}},"id":"35133","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35176","type":"Selection"},"selection_policy":{"id":"35175","type":"UnionRenderers"}},"id":"35163","type":"ColumnDataSource"},{"attributes":{},"id":"35134","type":"BasicTicker"},{"attributes":{"data_source":{"id":"35163","type":"ColumnDataSource"},"glyph":{"id":"35164","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35165","type":"Circle"},"selection_glyph":null,"view":{"id":"35167","type":"CDSView"}},"id":"35166","type":"GlyphRenderer"},{"attributes":{"source":{"id":"35163","type":"ColumnDataSource"}},"id":"35167","type":"CDSView"},{"attributes":{"plot":{"id":"35123","subtype":"Figure","type":"Plot"},"ticker":{"id":"35134","type":"BasicTicker"}},"id":"35137","type":"Grid"},{"attributes":{"formatter":{"id":"35169","type":"BasicTickFormatter"},"plot":{"id":"35123","subtype":"Figure","type":"Plot"},"ticker":{"id":"35139","type":"BasicTicker"}},"id":"35138","type":"LinearAxis"},{"attributes":{},"id":"35139","type":"BasicTicker"},{"attributes":{},"id":"35169","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"35123","subtype":"Figure","type":"Plot"},"ticker":{"id":"35139","type":"BasicTicker"}},"id":"35142","type":"Grid"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35159","type":"Line"},{"attributes":{},"id":"35171","type":"BasicTickFormatter"},{"attributes":{},"id":"35173","type":"UnionRenderers"}],"root_ids":["35123"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"a0857e77-ba54-4332-b62d-c4624ea2b97a","roots":{"35123":"944fccc0-420e-4a41-9b7a-5ab025619991"}}];
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