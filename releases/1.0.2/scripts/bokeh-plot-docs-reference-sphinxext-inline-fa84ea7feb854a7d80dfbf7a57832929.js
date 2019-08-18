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
      };var element = document.getElementById("95b0e85e-9901-44b3-ae05-4fa27fc74879");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '95b0e85e-9901-44b3-ae05-4fa27fc74879' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3a027ac5-ea13-4ea5-b189-3ac7b87e9d6a":{"roots":{"references":[{"attributes":{"data_source":{"id":"35145","type":"ColumnDataSource"},"glyph":{"id":"35146","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35147","type":"Line"},"selection_glyph":null,"view":{"id":"35149","type":"CDSView"}},"id":"35148","type":"GlyphRenderer"},{"attributes":{},"id":"35116","type":"LinearScale"},{"attributes":{},"id":"35121","type":"BasicTicker"},{"attributes":{"plot":{"id":"35110","subtype":"Figure","type":"Plot"},"ticker":{"id":"35121","type":"BasicTicker"}},"id":"35124","type":"Grid"},{"attributes":{"source":{"id":"35150","type":"ColumnDataSource"}},"id":"35154","type":"CDSView"},{"attributes":{"source":{"id":"35145","type":"ColumnDataSource"}},"id":"35149","type":"CDSView"},{"attributes":{},"id":"35164","type":"Selection"},{"attributes":{},"id":"35161","type":"UnionRenderers"},{"attributes":{},"id":"35162","type":"Selection"},{"attributes":{},"id":"35135","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35152","type":"Circle"},{"attributes":{"callback":null},"id":"35112","type":"DataRange1d"},{"attributes":{},"id":"35131","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"35159","type":"BasicTickFormatter"},"plot":{"id":"35110","subtype":"Figure","type":"Plot"},"ticker":{"id":"35126","type":"BasicTicker"}},"id":"35125","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35130","type":"PanTool"},{"id":"35131","type":"WheelZoomTool"},{"id":"35132","type":"BoxZoomTool"},{"id":"35133","type":"SaveTool"},{"id":"35134","type":"ResetTool"},{"id":"35135","type":"HelpTool"}]},"id":"35136","type":"Toolbar"},{"attributes":{},"id":"35134","type":"ResetTool"},{"attributes":{"below":[{"id":"35120","type":"LinearAxis"}],"left":[{"id":"35125","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"35120","type":"LinearAxis"},{"id":"35124","type":"Grid"},{"id":"35125","type":"LinearAxis"},{"id":"35129","type":"Grid"},{"id":"35138","type":"BoxAnnotation"},{"id":"35148","type":"GlyphRenderer"},{"id":"35153","type":"GlyphRenderer"}],"title":{"id":"35109","type":"Title"},"toolbar":{"id":"35136","type":"Toolbar"},"x_range":{"id":"35112","type":"DataRange1d"},"x_scale":{"id":"35116","type":"LinearScale"},"y_range":{"id":"35114","type":"DataRange1d"},"y_scale":{"id":"35118","type":"LinearScale"}},"id":"35110","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35157","type":"BasicTickFormatter"},{"attributes":{},"id":"35126","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35146","type":"Line"},{"attributes":{"overlay":{"id":"35138","type":"BoxAnnotation"}},"id":"35132","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"example"},"id":"35109","type":"Title"},{"attributes":{},"id":"35118","type":"LinearScale"},{"attributes":{},"id":"35133","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35138","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"35110","subtype":"Figure","type":"Plot"},"ticker":{"id":"35126","type":"BasicTicker"}},"id":"35129","type":"Grid"},{"attributes":{},"id":"35159","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"35157","type":"BasicTickFormatter"},"plot":{"id":"35110","subtype":"Figure","type":"Plot"},"ticker":{"id":"35121","type":"BasicTicker"}},"id":"35120","type":"LinearAxis"},{"attributes":{},"id":"35130","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35147","type":"Line"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35162","type":"Selection"},"selection_policy":{"id":"35161","type":"UnionRenderers"}},"id":"35145","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35164","type":"Selection"},"selection_policy":{"id":"35163","type":"UnionRenderers"}},"id":"35150","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35150","type":"ColumnDataSource"},"glyph":{"id":"35151","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35152","type":"Circle"},"selection_glyph":null,"view":{"id":"35154","type":"CDSView"}},"id":"35153","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"35114","type":"DataRange1d"},{"attributes":{},"id":"35163","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35151","type":"Circle"}],"root_ids":["35110"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"3a027ac5-ea13-4ea5-b189-3ac7b87e9d6a","roots":{"35110":"95b0e85e-9901-44b3-ae05-4fa27fc74879"}}];
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