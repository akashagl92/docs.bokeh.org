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
      };var element = document.getElementById("71536fb1-0709-4116-9eb0-c5368daae2f6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '71536fb1-0709-4116-9eb0-c5368daae2f6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7240be56-7247-492d-b112-a1f5407386eb":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"20152","type":"Rect"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"20117","type":"Toolbar"},{"attributes":{"source":{"id":"20150","type":"ColumnDataSource"}},"id":"20154","type":"CDSView"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"20131","type":"FactorRange"},{"attributes":{},"id":"20137","type":"CategoricalScale"},{"attributes":{},"id":"20114","type":"CategoricalTicker"},{"attributes":{"source":{"id":"20118","type":"ColumnDataSource"}},"id":"20122","type":"CDSView"},{"attributes":{},"id":"20168","type":"Selection"},{"attributes":{"formatter":{"id":"20165","type":"CategoricalTickFormatter"},"plot":{"id":"20098","subtype":"Figure","type":"Plot"},"ticker":{"id":"20114","type":"CategoricalTicker"}},"id":"20113","type":"CategoricalAxis"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"20124","type":"Circle"},{"attributes":{"callback":null,"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]},"selected":{"id":"20168","type":"Selection"},"selection_policy":{"id":"20169","type":"UnionRenderers"}},"id":"20118","type":"ColumnDataSource"},{"attributes":{},"id":"20167","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"20170","type":"Selection"},"selection_policy":{"id":"20171","type":"UnionRenderers"}},"id":"20123","type":"ColumnDataSource"},{"attributes":{},"id":"20106","type":"CategoricalScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"20120","type":"Segment"},{"attributes":{"children":[{"id":"20129","subtype":"Figure","type":"Plot"},{"id":"20098","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"20155","type":"Row"},{"attributes":{"data_source":{"id":"20123","type":"ColumnDataSource"},"glyph":{"id":"20124","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20125","type":"Circle"},"selection_glyph":null,"view":{"id":"20127","type":"CDSView"}},"id":"20126","type":"GlyphRenderer"},{"attributes":{},"id":"20161","type":"CategoricalTickFormatter"},{"attributes":{},"id":"20169","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"20159","type":"CategoricalTickFormatter"},"plot":{"id":"20129","subtype":"Figure","type":"Plot"},"ticker":{"id":"20140","type":"CategoricalTicker"}},"id":"20139","type":"CategoricalAxis"},{"attributes":{"callback":null,"end":100},"id":"20100","type":"Range1d"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"20133","type":"FactorRange"},{"attributes":{},"id":"20171","type":"UnionRenderers"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"20097","type":"Title"},{"attributes":{},"id":"20140","type":"CategoricalTicker"},{"attributes":{},"id":"20170","type":"Selection"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"20102","type":"FactorRange"},{"attributes":{"source":{"id":"20123","type":"ColumnDataSource"}},"id":"20127","type":"CDSView"},{"attributes":{"plot":{"id":"20129","subtype":"Figure","type":"Plot"},"ticker":{"id":"20140","type":"CategoricalTicker"}},"id":"20142","type":"Grid"},{"attributes":{"below":[{"id":"20139","type":"CategoricalAxis"}],"left":[{"id":"20143","type":"CategoricalAxis"}],"renderers":[{"id":"20139","type":"CategoricalAxis"},{"id":"20142","type":"Grid"},{"id":"20143","type":"CategoricalAxis"},{"id":"20146","type":"Grid"},{"id":"20153","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"20128","type":"Title"},"toolbar":{"id":"20148","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20131","type":"FactorRange"},"x_scale":{"id":"20135","type":"CategoricalScale"},"y_range":{"id":"20133","type":"FactorRange"},"y_scale":{"id":"20137","type":"CategoricalScale"}},"id":"20129","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"20098","subtype":"Figure","type":"Plot"},"ticker":{"id":"20109","type":"BasicTicker"}},"id":"20112","type":"Grid"},{"attributes":{"formatter":{"id":"20161","type":"CategoricalTickFormatter"},"plot":{"id":"20129","subtype":"Figure","type":"Plot"},"ticker":{"id":"20144","type":"CategoricalTicker"}},"id":"20143","type":"CategoricalAxis"},{"attributes":{},"id":"20135","type":"CategoricalScale"},{"attributes":{},"id":"20165","type":"CategoricalTickFormatter"},{"attributes":{},"id":"20163","type":"BasicTickFormatter"},{"attributes":{},"id":"20104","type":"LinearScale"},{"attributes":{},"id":"20144","type":"CategoricalTicker"},{"attributes":{},"id":"20166","type":"Selection"},{"attributes":{"data_source":{"id":"20150","type":"ColumnDataSource"},"glyph":{"id":"20151","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20152","type":"Rect"},"selection_glyph":null,"view":{"id":"20154","type":"CDSView"}},"id":"20153","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]},"selected":{"id":"20166","type":"Selection"},"selection_policy":{"id":"20167","type":"UnionRenderers"}},"id":"20150","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"20119","type":"Segment"},{"attributes":{"dimension":1,"plot":{"id":"20129","subtype":"Figure","type":"Plot"},"ticker":{"id":"20144","type":"CategoricalTicker"}},"id":"20146","type":"Grid"},{"attributes":{"formatter":{"id":"20163","type":"BasicTickFormatter"},"plot":{"id":"20098","subtype":"Figure","type":"Plot"},"ticker":{"id":"20109","type":"BasicTicker"}},"id":"20108","type":"LinearAxis"},{"attributes":{},"id":"20109","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20147","type":"HoverTool"}]},"id":"20148","type":"Toolbar"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"20128","type":"Title"},{"attributes":{"callback":null,"renderers":"auto"},"id":"20147","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"20125","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"20098","subtype":"Figure","type":"Plot"},"ticker":{"id":"20114","type":"CategoricalTicker"}},"id":"20116","type":"Grid"},{"attributes":{},"id":"20159","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"20151","type":"Rect"},{"attributes":{"data_source":{"id":"20118","type":"ColumnDataSource"},"glyph":{"id":"20119","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20120","type":"Segment"},"selection_glyph":null,"view":{"id":"20122","type":"CDSView"}},"id":"20121","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"20108","type":"LinearAxis"}],"left":[{"id":"20113","type":"CategoricalAxis"}],"renderers":[{"id":"20108","type":"LinearAxis"},{"id":"20112","type":"Grid"},{"id":"20113","type":"CategoricalAxis"},{"id":"20116","type":"Grid"},{"id":"20121","type":"GlyphRenderer"},{"id":"20126","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"20097","type":"Title"},"toolbar":{"id":"20117","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20100","type":"Range1d"},"x_scale":{"id":"20104","type":"LinearScale"},"y_range":{"id":"20102","type":"FactorRange"},"y_scale":{"id":"20106","type":"CategoricalScale"}},"id":"20098","subtype":"Figure","type":"Plot"}],"root_ids":["20155"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"7240be56-7247-492d-b112-a1f5407386eb","roots":{"20155":"71536fb1-0709-4116-9eb0-c5368daae2f6"}}];
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