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
      };var element = document.getElementById("92165bf5-f2fe-4eb1-ad87-3fb241c22d5a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '92165bf5-f2fe-4eb1-ad87-3fb241c22d5a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"9a9245a7-0ae6-48f1-a151-e5e0c04b866d":{"roots":{"references":[{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"20132","type":"FactorRange"},{"attributes":{"below":[{"id":"20140","type":"CategoricalAxis"}],"left":[{"id":"20144","type":"CategoricalAxis"}],"renderers":[{"id":"20140","type":"CategoricalAxis"},{"id":"20143","type":"Grid"},{"id":"20144","type":"CategoricalAxis"},{"id":"20147","type":"Grid"},{"id":"20154","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"20129","type":"Title"},"toolbar":{"id":"20149","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20132","type":"FactorRange"},"x_scale":{"id":"20136","type":"CategoricalScale"},"y_range":{"id":"20134","type":"FactorRange"},"y_scale":{"id":"20138","type":"CategoricalScale"}},"id":"20130","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20172","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"20172","type":"Selection"},"selection_policy":{"id":"20171","type":"UnionRenderers"}},"id":"20124","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"20130","subtype":"Figure","type":"Plot"},{"id":"20099","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"20156","type":"Row"},{"attributes":{"data_source":{"id":"20119","type":"ColumnDataSource"},"glyph":{"id":"20120","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20121","type":"Segment"},"selection_glyph":null,"view":{"id":"20123","type":"CDSView"}},"id":"20122","type":"GlyphRenderer"},{"attributes":{},"id":"20138","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"20166","type":"CategoricalTickFormatter"},"plot":{"id":"20099","subtype":"Figure","type":"Plot"},"ticker":{"id":"20115","type":"CategoricalTicker"}},"id":"20114","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"20098","type":"Title"},{"attributes":{},"id":"20136","type":"CategoricalScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"20153","type":"Rect"},{"attributes":{},"id":"20160","type":"CategoricalTickFormatter"},{"attributes":{},"id":"20110","type":"BasicTicker"},{"attributes":{"below":[{"id":"20109","type":"LinearAxis"}],"left":[{"id":"20114","type":"CategoricalAxis"}],"renderers":[{"id":"20109","type":"LinearAxis"},{"id":"20113","type":"Grid"},{"id":"20114","type":"CategoricalAxis"},{"id":"20117","type":"Grid"},{"id":"20122","type":"GlyphRenderer"},{"id":"20127","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"20098","type":"Title"},"toolbar":{"id":"20118","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20101","type":"Range1d"},"x_scale":{"id":"20105","type":"LinearScale"},"y_range":{"id":"20103","type":"FactorRange"},"y_scale":{"id":"20107","type":"CategoricalScale"}},"id":"20099","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20107","type":"CategoricalScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20148","type":"HoverTool"}]},"id":"20149","type":"Toolbar"},{"attributes":{"source":{"id":"20124","type":"ColumnDataSource"}},"id":"20128","type":"CDSView"},{"attributes":{"callback":null},"id":"20148","type":"HoverTool"},{"attributes":{},"id":"20162","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"20118","type":"Toolbar"},{"attributes":{"source":{"id":"20151","type":"ColumnDataSource"}},"id":"20155","type":"CDSView"},{"attributes":{"callback":null,"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]},"selected":{"id":"20170","type":"Selection"},"selection_policy":{"id":"20169","type":"UnionRenderers"}},"id":"20119","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"20103","type":"FactorRange"},{"attributes":{"dimension":1,"plot":{"id":"20099","subtype":"Figure","type":"Plot"},"ticker":{"id":"20115","type":"CategoricalTicker"}},"id":"20117","type":"Grid"},{"attributes":{"data_source":{"id":"20124","type":"ColumnDataSource"},"glyph":{"id":"20125","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20126","type":"Circle"},"selection_glyph":null,"view":{"id":"20128","type":"CDSView"}},"id":"20127","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"20164","type":"BasicTickFormatter"},"plot":{"id":"20099","subtype":"Figure","type":"Plot"},"ticker":{"id":"20110","type":"BasicTicker"}},"id":"20109","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"20121","type":"Segment"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"20120","type":"Segment"},{"attributes":{"formatter":{"id":"20160","type":"CategoricalTickFormatter"},"plot":{"id":"20130","subtype":"Figure","type":"Plot"},"ticker":{"id":"20141","type":"CategoricalTicker"}},"id":"20140","type":"CategoricalAxis"},{"attributes":{"dimension":1,"plot":{"id":"20130","subtype":"Figure","type":"Plot"},"ticker":{"id":"20145","type":"CategoricalTicker"}},"id":"20147","type":"Grid"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"20134","type":"FactorRange"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"20129","type":"Title"},{"attributes":{"callback":null,"end":100},"id":"20101","type":"Range1d"},{"attributes":{"data_source":{"id":"20151","type":"ColumnDataSource"},"glyph":{"id":"20152","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20153","type":"Rect"},"selection_glyph":null,"view":{"id":"20155","type":"CDSView"}},"id":"20154","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"20152","type":"Rect"},{"attributes":{"source":{"id":"20119","type":"ColumnDataSource"}},"id":"20123","type":"CDSView"},{"attributes":{},"id":"20167","type":"UnionRenderers"},{"attributes":{},"id":"20169","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"20162","type":"CategoricalTickFormatter"},"plot":{"id":"20130","subtype":"Figure","type":"Plot"},"ticker":{"id":"20145","type":"CategoricalTicker"}},"id":"20144","type":"CategoricalAxis"},{"attributes":{},"id":"20166","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"20125","type":"Circle"},{"attributes":{},"id":"20145","type":"CategoricalTicker"},{"attributes":{},"id":"20170","type":"Selection"},{"attributes":{},"id":"20168","type":"Selection"},{"attributes":{},"id":"20115","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"20130","subtype":"Figure","type":"Plot"},"ticker":{"id":"20141","type":"CategoricalTicker"}},"id":"20143","type":"Grid"},{"attributes":{},"id":"20164","type":"BasicTickFormatter"},{"attributes":{},"id":"20105","type":"LinearScale"},{"attributes":{},"id":"20171","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]},"selected":{"id":"20168","type":"Selection"},"selection_policy":{"id":"20167","type":"UnionRenderers"}},"id":"20151","type":"ColumnDataSource"},{"attributes":{},"id":"20141","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"20126","type":"Circle"},{"attributes":{"plot":{"id":"20099","subtype":"Figure","type":"Plot"},"ticker":{"id":"20110","type":"BasicTicker"}},"id":"20113","type":"Grid"}],"root_ids":["20156"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"9a9245a7-0ae6-48f1-a151-e5e0c04b866d","roots":{"20156":"92165bf5-f2fe-4eb1-ad87-3fb241c22d5a"}}];
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