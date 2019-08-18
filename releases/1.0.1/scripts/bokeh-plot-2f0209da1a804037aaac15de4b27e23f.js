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
      };var element = document.getElementById("74bd52b2-9680-4c19-97c4-faca25860104");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '74bd52b2-9680-4c19-97c4-faca25860104' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4e5e3ab7-36cc-4eec-985b-edb1b30b87a9":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22999","type":"HoverTool"}]},"id":"23000","type":"Toolbar"},{"attributes":{"source":{"id":"22975","type":"ColumnDataSource"}},"id":"22979","type":"CDSView"},{"attributes":{"children":[{"id":"22981","subtype":"Figure","type":"Plot"},{"id":"22950","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"23007","type":"Row"},{"attributes":{},"id":"23020","type":"Selection"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"22976","type":"Circle"},{"attributes":{"callback":null,"renderers":"auto"},"id":"22999","type":"HoverTool"},{"attributes":{},"id":"23018","type":"Selection"},{"attributes":{"plot":{"id":"22981","subtype":"Figure","type":"Plot"},"ticker":{"id":"22992","type":"CategoricalTicker"}},"id":"22994","type":"Grid"},{"attributes":{},"id":"23013","type":"CategoricalTickFormatter"},{"attributes":{},"id":"23019","type":"UnionRenderers"},{"attributes":{"below":[{"id":"22960","type":"LinearAxis"}],"left":[{"id":"22965","type":"CategoricalAxis"}],"renderers":[{"id":"22960","type":"LinearAxis"},{"id":"22964","type":"Grid"},{"id":"22965","type":"CategoricalAxis"},{"id":"22968","type":"Grid"},{"id":"22973","type":"GlyphRenderer"},{"id":"22978","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"22949","type":"Title"},"toolbar":{"id":"22969","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22952","type":"Range1d"},"x_scale":{"id":"22956","type":"LinearScale"},"y_range":{"id":"22954","type":"FactorRange"},"y_scale":{"id":"22958","type":"CategoricalScale"}},"id":"22950","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"23011","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"22975","type":"ColumnDataSource"},"glyph":{"id":"22976","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22977","type":"Circle"},"selection_glyph":null,"view":{"id":"22979","type":"CDSView"}},"id":"22978","type":"GlyphRenderer"},{"attributes":{},"id":"22992","type":"CategoricalTicker"},{"attributes":{"source":{"id":"22970","type":"ColumnDataSource"}},"id":"22974","type":"CDSView"},{"attributes":{},"id":"22958","type":"CategoricalScale"},{"attributes":{},"id":"22989","type":"CategoricalScale"},{"attributes":{},"id":"22987","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"23013","type":"CategoricalTickFormatter"},"plot":{"id":"22981","subtype":"Figure","type":"Plot"},"ticker":{"id":"22996","type":"CategoricalTicker"}},"id":"22995","type":"CategoricalAxis"},{"attributes":{},"id":"22956","type":"LinearScale"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"23003","type":"Rect"},{"attributes":{"callback":null,"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]},"selected":{"id":"23020","type":"Selection"},"selection_policy":{"id":"23021","type":"UnionRenderers"}},"id":"22970","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"23004","type":"Rect"},{"attributes":{"formatter":{"id":"23011","type":"CategoricalTickFormatter"},"plot":{"id":"22981","subtype":"Figure","type":"Plot"},"ticker":{"id":"22992","type":"CategoricalTicker"}},"id":"22991","type":"CategoricalAxis"},{"attributes":{},"id":"22996","type":"CategoricalTicker"},{"attributes":{"source":{"id":"23002","type":"ColumnDataSource"}},"id":"23006","type":"CDSView"},{"attributes":{"formatter":{"id":"23017","type":"CategoricalTickFormatter"},"plot":{"id":"22950","subtype":"Figure","type":"Plot"},"ticker":{"id":"22966","type":"CategoricalTicker"}},"id":"22965","type":"CategoricalAxis"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"22954","type":"FactorRange"},{"attributes":{"data_source":{"id":"23002","type":"ColumnDataSource"},"glyph":{"id":"23003","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"23004","type":"Rect"},"selection_glyph":null,"view":{"id":"23006","type":"CDSView"}},"id":"23005","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"23022","type":"Selection"},"selection_policy":{"id":"23023","type":"UnionRenderers"}},"id":"22975","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"22950","subtype":"Figure","type":"Plot"},"ticker":{"id":"22966","type":"CategoricalTicker"}},"id":"22968","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"22981","subtype":"Figure","type":"Plot"},"ticker":{"id":"22996","type":"CategoricalTicker"}},"id":"22998","type":"Grid"},{"attributes":{},"id":"22961","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"22977","type":"Circle"},{"attributes":{"data_source":{"id":"22970","type":"ColumnDataSource"},"glyph":{"id":"22971","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22972","type":"Segment"},"selection_glyph":null,"view":{"id":"22974","type":"CDSView"}},"id":"22973","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"22991","type":"CategoricalAxis"}],"left":[{"id":"22995","type":"CategoricalAxis"}],"renderers":[{"id":"22991","type":"CategoricalAxis"},{"id":"22994","type":"Grid"},{"id":"22995","type":"CategoricalAxis"},{"id":"22998","type":"Grid"},{"id":"23005","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"22980","type":"Title"},"toolbar":{"id":"23000","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22983","type":"FactorRange"},"x_scale":{"id":"22987","type":"CategoricalScale"},"y_range":{"id":"22985","type":"FactorRange"},"y_scale":{"id":"22989","type":"CategoricalScale"}},"id":"22981","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"22969","type":"Toolbar"},{"attributes":{},"id":"23021","type":"UnionRenderers"},{"attributes":{"plot":{"id":"22950","subtype":"Figure","type":"Plot"},"ticker":{"id":"22961","type":"BasicTicker"}},"id":"22964","type":"Grid"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"22985","type":"FactorRange"},{"attributes":{},"id":"23017","type":"CategoricalTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"22972","type":"Segment"},{"attributes":{"formatter":{"id":"23015","type":"BasicTickFormatter"},"plot":{"id":"22950","subtype":"Figure","type":"Plot"},"ticker":{"id":"22961","type":"BasicTicker"}},"id":"22960","type":"LinearAxis"},{"attributes":{"callback":null,"end":100},"id":"22952","type":"Range1d"},{"attributes":{},"id":"22966","type":"CategoricalTicker"},{"attributes":{},"id":"23022","type":"Selection"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"22971","type":"Segment"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"22949","type":"Title"},{"attributes":{},"id":"23023","type":"UnionRenderers"},{"attributes":{},"id":"23015","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"22980","type":"Title"},{"attributes":{"callback":null,"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]},"selected":{"id":"23018","type":"Selection"},"selection_policy":{"id":"23019","type":"UnionRenderers"}},"id":"23002","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"22983","type":"FactorRange"}],"root_ids":["23007"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"4e5e3ab7-36cc-4eec-985b-edb1b30b87a9","roots":{"23007":"74bd52b2-9680-4c19-97c4-faca25860104"}}];
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