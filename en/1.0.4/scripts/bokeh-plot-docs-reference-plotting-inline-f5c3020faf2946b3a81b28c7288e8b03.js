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
      };var element = document.getElementById("cd4dc7bb-11a1-40a2-be12-214ec1b9fa65");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cd4dc7bb-11a1-40a2-be12-214ec1b9fa65' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8c4aa89b-7759-4655-938d-d72f9294432a":{"roots":{"references":[{"attributes":{},"id":"32772","type":"SaveTool"},{"attributes":{},"id":"32760","type":"BasicTicker"},{"attributes":{},"id":"32793","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"32750","subtype":"Figure","type":"Plot"},"ticker":{"id":"32760","type":"BasicTicker"}},"id":"32763","type":"Grid"},{"attributes":{},"id":"32773","type":"ResetTool"},{"attributes":{},"id":"32795","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"32791","type":"BasicTickFormatter"},"plot":{"id":"32750","subtype":"Figure","type":"Plot"},"ticker":{"id":"32765","type":"BasicTicker"}},"id":"32764","type":"LinearAxis"},{"attributes":{},"id":"32774","type":"HelpTool"},{"attributes":{},"id":"32796","type":"Selection"},{"attributes":{},"id":"32765","type":"BasicTicker"},{"attributes":{"callback":null},"id":"32751","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"32769","type":"PanTool"},{"id":"32770","type":"WheelZoomTool"},{"id":"32771","type":"BoxZoomTool"},{"id":"32772","type":"SaveTool"},{"id":"32773","type":"ResetTool"},{"id":"32774","type":"HelpTool"}]},"id":"32775","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"32796","type":"Selection"},"selection_policy":{"id":"32795","type":"UnionRenderers"}},"id":"32784","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"32759","type":"LinearAxis"}],"left":[{"id":"32764","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"32759","type":"LinearAxis"},{"id":"32763","type":"Grid"},{"id":"32764","type":"LinearAxis"},{"id":"32768","type":"Grid"},{"id":"32777","type":"BoxAnnotation"},{"id":"32787","type":"GlyphRenderer"}],"title":{"id":"32789","type":"Title"},"toolbar":{"id":"32775","type":"Toolbar"},"x_range":{"id":"32751","type":"DataRange1d"},"x_scale":{"id":"32755","type":"LinearScale"},"y_range":{"id":"32753","type":"DataRange1d"},"y_scale":{"id":"32757","type":"LinearScale"}},"id":"32750","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"32750","subtype":"Figure","type":"Plot"},"ticker":{"id":"32765","type":"BasicTicker"}},"id":"32768","type":"Grid"},{"attributes":{"data_source":{"id":"32784","type":"ColumnDataSource"},"glyph":{"id":"32785","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32786","type":"Cross"},"selection_glyph":null,"view":{"id":"32788","type":"CDSView"}},"id":"32787","type":"GlyphRenderer"},{"attributes":{},"id":"32757","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"32777","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32786","type":"Cross"},{"attributes":{"callback":null},"id":"32753","type":"DataRange1d"},{"attributes":{"source":{"id":"32784","type":"ColumnDataSource"}},"id":"32788","type":"CDSView"},{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"32785","type":"Cross"},{"attributes":{},"id":"32755","type":"LinearScale"},{"attributes":{"formatter":{"id":"32793","type":"BasicTickFormatter"},"plot":{"id":"32750","subtype":"Figure","type":"Plot"},"ticker":{"id":"32760","type":"BasicTicker"}},"id":"32759","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"32789","type":"Title"},{"attributes":{},"id":"32769","type":"PanTool"},{"attributes":{},"id":"32791","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"32777","type":"BoxAnnotation"}},"id":"32771","type":"BoxZoomTool"},{"attributes":{},"id":"32770","type":"WheelZoomTool"}],"root_ids":["32750"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"8c4aa89b-7759-4655-938d-d72f9294432a","roots":{"32750":"cd4dc7bb-11a1-40a2-be12-214ec1b9fa65"}}];
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