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
      };var element = document.getElementById("799f342f-0ce9-419c-95d4-b3029d545599");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '799f342f-0ce9-419c-95d4-b3029d545599' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e79cccb2-41aa-4204-98ae-dc859b1c23c5":{"roots":{"references":[{"attributes":{"data_source":{"id":"20127","type":"ColumnDataSource"},"glyph":{"id":"20128","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20129","type":"Circle"},"selection_glyph":null,"view":{"id":"20131","type":"CDSView"}},"id":"20130","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"20132","type":"Title"},{"attributes":{"data_source":{"id":"20154","type":"ColumnDataSource"},"glyph":{"id":"20155","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20156","type":"Rect"},"selection_glyph":null,"view":{"id":"20158","type":"CDSView"}},"id":"20157","type":"GlyphRenderer"},{"attributes":{},"id":"20139","type":"CategoricalScale"},{"attributes":{"dimension":1,"plot":{"id":"20133","subtype":"Figure","type":"Plot"},"ticker":{"id":"20148","type":"CategoricalTicker"}},"id":"20150","type":"Grid"},{"attributes":{"below":[{"id":"20143","type":"CategoricalAxis"}],"left":[{"id":"20147","type":"CategoricalAxis"}],"renderers":[{"id":"20143","type":"CategoricalAxis"},{"id":"20146","type":"Grid"},{"id":"20147","type":"CategoricalAxis"},{"id":"20150","type":"Grid"},{"id":"20157","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"20132","type":"Title"},"toolbar":{"id":"20152","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20135","type":"FactorRange"},"x_scale":{"id":"20139","type":"CategoricalScale"},"y_range":{"id":"20137","type":"FactorRange"},"y_scale":{"id":"20141","type":"CategoricalScale"}},"id":"20133","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]},"selected":{"id":"20173","type":"Selection"},"selection_policy":{"id":"20172","type":"UnionRenderers"}},"id":"20122","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"20133","subtype":"Figure","type":"Plot"},{"id":"20102","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"20159","type":"Row"},{"attributes":{"source":{"id":"20122","type":"ColumnDataSource"}},"id":"20126","type":"CDSView"},{"attributes":{"plot":{"id":"20102","subtype":"Figure","type":"Plot"},"ticker":{"id":"20113","type":"BasicTicker"}},"id":"20116","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"20129","type":"Circle"},{"attributes":{"data_source":{"id":"20122","type":"ColumnDataSource"},"glyph":{"id":"20123","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"20124","type":"Segment"},"selection_glyph":null,"view":{"id":"20126","type":"CDSView"}},"id":"20125","type":"GlyphRenderer"},{"attributes":{},"id":"20175","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"20121","type":"Toolbar"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"20155","type":"Rect"},{"attributes":{"formatter":{"id":"20164","type":"CategoricalTickFormatter"},"plot":{"id":"20133","subtype":"Figure","type":"Plot"},"ticker":{"id":"20144","type":"CategoricalTicker"}},"id":"20143","type":"CategoricalAxis"},{"attributes":{},"id":"20174","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"20156","type":"Rect"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"20101","type":"Title"},{"attributes":{},"id":"20113","type":"BasicTicker"},{"attributes":{},"id":"20173","type":"Selection"},{"attributes":{"plot":{"id":"20133","subtype":"Figure","type":"Plot"},"ticker":{"id":"20144","type":"CategoricalTicker"}},"id":"20146","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"20175","type":"Selection"},"selection_policy":{"id":"20174","type":"UnionRenderers"}},"id":"20127","type":"ColumnDataSource"},{"attributes":{"source":{"id":"20154","type":"ColumnDataSource"}},"id":"20158","type":"CDSView"},{"attributes":{},"id":"20110","type":"CategoricalScale"},{"attributes":{},"id":"20170","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"20151","type":"HoverTool"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"20123","type":"Segment"},{"attributes":{},"id":"20172","type":"UnionRenderers"},{"attributes":{},"id":"20144","type":"CategoricalTicker"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"20106","type":"FactorRange"},{"attributes":{"formatter":{"id":"20166","type":"CategoricalTickFormatter"},"plot":{"id":"20102","subtype":"Figure","type":"Plot"},"ticker":{"id":"20118","type":"CategoricalTicker"}},"id":"20117","type":"CategoricalAxis"},{"attributes":{},"id":"20166","type":"CategoricalTickFormatter"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"20128","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"20151","type":"HoverTool"}]},"id":"20152","type":"Toolbar"},{"attributes":{"callback":null,"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]},"selected":{"id":"20171","type":"Selection"},"selection_policy":{"id":"20170","type":"UnionRenderers"}},"id":"20154","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":100},"id":"20104","type":"Range1d"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"20135","type":"FactorRange"},{"attributes":{"below":[{"id":"20112","type":"LinearAxis"}],"left":[{"id":"20117","type":"CategoricalAxis"}],"renderers":[{"id":"20112","type":"LinearAxis"},{"id":"20116","type":"Grid"},{"id":"20117","type":"CategoricalAxis"},{"id":"20120","type":"Grid"},{"id":"20125","type":"GlyphRenderer"},{"id":"20130","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"20101","type":"Title"},"toolbar":{"id":"20121","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"20104","type":"Range1d"},"x_scale":{"id":"20108","type":"LinearScale"},"y_range":{"id":"20106","type":"FactorRange"},"y_scale":{"id":"20110","type":"CategoricalScale"}},"id":"20102","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20118","type":"CategoricalTicker"},{"attributes":{},"id":"20108","type":"LinearScale"},{"attributes":{},"id":"20148","type":"CategoricalTicker"},{"attributes":{},"id":"20171","type":"Selection"},{"attributes":{"formatter":{"id":"20162","type":"CategoricalTickFormatter"},"plot":{"id":"20133","subtype":"Figure","type":"Plot"},"ticker":{"id":"20148","type":"CategoricalTicker"}},"id":"20147","type":"CategoricalAxis"},{"attributes":{},"id":"20168","type":"BasicTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"20124","type":"Segment"},{"attributes":{"source":{"id":"20127","type":"ColumnDataSource"}},"id":"20131","type":"CDSView"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"20137","type":"FactorRange"},{"attributes":{},"id":"20164","type":"CategoricalTickFormatter"},{"attributes":{},"id":"20162","type":"CategoricalTickFormatter"},{"attributes":{},"id":"20141","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"20168","type":"BasicTickFormatter"},"plot":{"id":"20102","subtype":"Figure","type":"Plot"},"ticker":{"id":"20113","type":"BasicTicker"}},"id":"20112","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"20102","subtype":"Figure","type":"Plot"},"ticker":{"id":"20118","type":"CategoricalTicker"}},"id":"20120","type":"Grid"}],"root_ids":["20159"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"e79cccb2-41aa-4204-98ae-dc859b1c23c5","roots":{"20159":"799f342f-0ce9-419c-95d4-b3029d545599"}}];
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