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
      };var element = document.getElementById("8d9b4986-ac85-421c-9cfd-1189bd842652");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8d9b4986-ac85-421c-9cfd-1189bd842652' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"1f179f73-f655-411b-8b7b-ab3c4eeec303":{"roots":{"references":[{"attributes":{"overlay":{"id":"35135","type":"BoxAnnotation"}},"id":"35129","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"35117","type":"LinearAxis"}],"left":[{"id":"35122","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"35117","type":"LinearAxis"},{"id":"35121","type":"Grid"},{"id":"35122","type":"LinearAxis"},{"id":"35126","type":"Grid"},{"id":"35135","type":"BoxAnnotation"},{"id":"35145","type":"GlyphRenderer"},{"id":"35150","type":"GlyphRenderer"}],"title":{"id":"35106","type":"Title"},"toolbar":{"id":"35133","type":"Toolbar"},"x_range":{"id":"35109","type":"DataRange1d"},"x_scale":{"id":"35113","type":"LinearScale"},"y_range":{"id":"35111","type":"DataRange1d"},"y_scale":{"id":"35115","type":"LinearScale"}},"id":"35107","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35115","type":"LinearScale"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35148","type":"Circle"},{"attributes":{"source":{"id":"35142","type":"ColumnDataSource"}},"id":"35146","type":"CDSView"},{"attributes":{"callback":null},"id":"35109","type":"DataRange1d"},{"attributes":{},"id":"35131","type":"ResetTool"},{"attributes":{"source":{"id":"35147","type":"ColumnDataSource"}},"id":"35151","type":"CDSView"},{"attributes":{},"id":"35159","type":"UnionRenderers"},{"attributes":{"plot":null,"text":"example"},"id":"35106","type":"Title"},{"attributes":{},"id":"35132","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35160","type":"Selection"},"selection_policy":{"id":"35161","type":"UnionRenderers"}},"id":"35147","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35144","type":"Line"},{"attributes":{"formatter":{"id":"35156","type":"BasicTickFormatter"},"plot":{"id":"35107","subtype":"Figure","type":"Plot"},"ticker":{"id":"35123","type":"BasicTicker"}},"id":"35122","type":"LinearAxis"},{"attributes":{},"id":"35158","type":"Selection"},{"attributes":{},"id":"35128","type":"WheelZoomTool"},{"attributes":{},"id":"35156","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]},"selected":{"id":"35158","type":"Selection"},"selection_policy":{"id":"35159","type":"UnionRenderers"}},"id":"35142","type":"ColumnDataSource"},{"attributes":{},"id":"35160","type":"Selection"},{"attributes":{},"id":"35161","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35149","type":"Circle"},{"attributes":{"callback":null},"id":"35111","type":"DataRange1d"},{"attributes":{},"id":"35154","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35127","type":"PanTool"},{"id":"35128","type":"WheelZoomTool"},{"id":"35129","type":"BoxZoomTool"},{"id":"35130","type":"SaveTool"},{"id":"35131","type":"ResetTool"},{"id":"35132","type":"HelpTool"}]},"id":"35133","type":"Toolbar"},{"attributes":{},"id":"35113","type":"LinearScale"},{"attributes":{"plot":{"id":"35107","subtype":"Figure","type":"Plot"},"ticker":{"id":"35118","type":"BasicTicker"}},"id":"35121","type":"Grid"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"35143","type":"Line"},{"attributes":{},"id":"35123","type":"BasicTicker"},{"attributes":{},"id":"35130","type":"SaveTool"},{"attributes":{},"id":"35118","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"35107","subtype":"Figure","type":"Plot"},"ticker":{"id":"35123","type":"BasicTicker"}},"id":"35126","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"35135","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"35142","type":"ColumnDataSource"},"glyph":{"id":"35143","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35144","type":"Line"},"selection_glyph":null,"view":{"id":"35146","type":"CDSView"}},"id":"35145","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"35147","type":"ColumnDataSource"},"glyph":{"id":"35148","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35149","type":"Circle"},"selection_glyph":null,"view":{"id":"35151","type":"CDSView"}},"id":"35150","type":"GlyphRenderer"},{"attributes":{},"id":"35127","type":"PanTool"},{"attributes":{"formatter":{"id":"35154","type":"BasicTickFormatter"},"plot":{"id":"35107","subtype":"Figure","type":"Plot"},"ticker":{"id":"35118","type":"BasicTicker"}},"id":"35117","type":"LinearAxis"}],"root_ids":["35107"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"1f179f73-f655-411b-8b7b-ab3c4eeec303","roots":{"35107":"8d9b4986-ac85-421c-9cfd-1189bd842652"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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