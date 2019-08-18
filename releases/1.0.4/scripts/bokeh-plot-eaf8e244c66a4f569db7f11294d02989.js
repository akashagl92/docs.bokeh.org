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
      };var element = document.getElementById("15172585-8209-424b-b154-fca6ab25cf97");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '15172585-8209-424b-b154-fca6ab25cf97' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2c67e51c-7ab7-4923-b057-77af1a662f7f":{"roots":{"references":[{"attributes":{},"id":"23020","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"22980","type":"Circle"},{"attributes":{"callback":null,"end":100},"id":"22956","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"22954","subtype":"Figure","type":"Plot"},"ticker":{"id":"22970","type":"CategoricalTicker"}},"id":"22972","type":"Grid"},{"attributes":{"children":[{"id":"22985","subtype":"Figure","type":"Plot"},{"id":"22954","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"23011","type":"Row"},{"attributes":{},"id":"23016","type":"CategoricalTickFormatter"},{"attributes":{},"id":"22970","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"22989","type":"FactorRange"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"22953","type":"Title"},{"attributes":{"below":[{"id":"22964","type":"LinearAxis"}],"left":[{"id":"22969","type":"CategoricalAxis"}],"renderers":[{"id":"22964","type":"LinearAxis"},{"id":"22968","type":"Grid"},{"id":"22969","type":"CategoricalAxis"},{"id":"22972","type":"Grid"},{"id":"22977","type":"GlyphRenderer"},{"id":"22982","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"22953","type":"Title"},"toolbar":{"id":"22973","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22956","type":"Range1d"},"x_scale":{"id":"22960","type":"LinearScale"},"y_range":{"id":"22958","type":"FactorRange"},"y_scale":{"id":"22962","type":"CategoricalScale"}},"id":"22954","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"23008","type":"Rect"},{"attributes":{"below":[{"id":"22995","type":"CategoricalAxis"}],"left":[{"id":"22999","type":"CategoricalAxis"}],"renderers":[{"id":"22995","type":"CategoricalAxis"},{"id":"22998","type":"Grid"},{"id":"22999","type":"CategoricalAxis"},{"id":"23002","type":"Grid"},{"id":"23009","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"22984","type":"Title"},"toolbar":{"id":"23004","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22987","type":"FactorRange"},"x_scale":{"id":"22991","type":"CategoricalScale"},"y_range":{"id":"22989","type":"FactorRange"},"y_scale":{"id":"22993","type":"CategoricalScale"}},"id":"22985","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"23022","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"23016","type":"CategoricalTickFormatter"},"plot":{"id":"22985","subtype":"Figure","type":"Plot"},"ticker":{"id":"22996","type":"CategoricalTicker"}},"id":"22995","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"22985","subtype":"Figure","type":"Plot"},"ticker":{"id":"22996","type":"CategoricalTicker"}},"id":"22998","type":"Grid"},{"attributes":{"callback":null,"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]},"selected":{"id":"23023","type":"Selection"},"selection_policy":{"id":"23022","type":"UnionRenderers"}},"id":"23006","type":"ColumnDataSource"},{"attributes":{"source":{"id":"22974","type":"ColumnDataSource"}},"id":"22978","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"23003","type":"HoverTool"}]},"id":"23004","type":"Toolbar"},{"attributes":{"source":{"id":"22979","type":"ColumnDataSource"}},"id":"22983","type":"CDSView"},{"attributes":{},"id":"23024","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"22975","type":"Segment"},{"attributes":{"callback":null,"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]},"selected":{"id":"23025","type":"Selection"},"selection_policy":{"id":"23024","type":"UnionRenderers"}},"id":"22974","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"23014","type":"CategoricalTickFormatter"},"plot":{"id":"22985","subtype":"Figure","type":"Plot"},"ticker":{"id":"23000","type":"CategoricalTicker"}},"id":"22999","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"22974","type":"ColumnDataSource"},"glyph":{"id":"22975","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22976","type":"Segment"},"selection_glyph":null,"view":{"id":"22978","type":"CDSView"}},"id":"22977","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"22984","type":"Title"},{"attributes":{},"id":"22993","type":"CategoricalScale"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"23027","type":"Selection"},"selection_policy":{"id":"23026","type":"UnionRenderers"}},"id":"22979","type":"ColumnDataSource"},{"attributes":{"source":{"id":"23006","type":"ColumnDataSource"}},"id":"23010","type":"CDSView"},{"attributes":{},"id":"23018","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"22981","type":"Circle"},{"attributes":{},"id":"23026","type":"UnionRenderers"},{"attributes":{},"id":"23025","type":"Selection"},{"attributes":{"formatter":{"id":"23020","type":"BasicTickFormatter"},"plot":{"id":"22954","subtype":"Figure","type":"Plot"},"ticker":{"id":"22965","type":"BasicTicker"}},"id":"22964","type":"LinearAxis"},{"attributes":{},"id":"23014","type":"CategoricalTickFormatter"},{"attributes":{},"id":"23000","type":"CategoricalTicker"},{"attributes":{},"id":"22996","type":"CategoricalTicker"},{"attributes":{},"id":"22965","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"22976","type":"Segment"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"22973","type":"Toolbar"},{"attributes":{},"id":"22960","type":"LinearScale"},{"attributes":{},"id":"22991","type":"CategoricalScale"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"23007","type":"Rect"},{"attributes":{"data_source":{"id":"22979","type":"ColumnDataSource"},"glyph":{"id":"22980","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22981","type":"Circle"},"selection_glyph":null,"view":{"id":"22983","type":"CDSView"}},"id":"22982","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"22958","type":"FactorRange"},{"attributes":{"formatter":{"id":"23018","type":"CategoricalTickFormatter"},"plot":{"id":"22954","subtype":"Figure","type":"Plot"},"ticker":{"id":"22970","type":"CategoricalTicker"}},"id":"22969","type":"CategoricalAxis"},{"attributes":{},"id":"23023","type":"Selection"},{"attributes":{"callback":null},"id":"23003","type":"HoverTool"},{"attributes":{},"id":"22962","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"23006","type":"ColumnDataSource"},"glyph":{"id":"23007","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23008","type":"Rect"},"selection_glyph":null,"view":{"id":"23010","type":"CDSView"}},"id":"23009","type":"GlyphRenderer"},{"attributes":{},"id":"23027","type":"Selection"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"22987","type":"FactorRange"},{"attributes":{"dimension":1,"plot":{"id":"22985","subtype":"Figure","type":"Plot"},"ticker":{"id":"23000","type":"CategoricalTicker"}},"id":"23002","type":"Grid"},{"attributes":{"plot":{"id":"22954","subtype":"Figure","type":"Plot"},"ticker":{"id":"22965","type":"BasicTicker"}},"id":"22968","type":"Grid"}],"root_ids":["23011"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"2c67e51c-7ab7-4923-b057-77af1a662f7f","roots":{"23011":"15172585-8209-424b-b154-fca6ab25cf97"}}];
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