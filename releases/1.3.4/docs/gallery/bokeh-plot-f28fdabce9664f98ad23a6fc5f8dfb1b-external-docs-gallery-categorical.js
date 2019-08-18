(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("9731e4a0-4bfb-4074-a067-511510bf5163");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '9731e4a0-4bfb-4074-a067-511510bf5163' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"9fa6bac1-8af8-40b7-9ab2-76184089bd22":{"roots":{"references":[{"attributes":{"ticker":{"id":"3153","type":"CategoricalTicker"}},"id":"3155","type":"Grid"},{"attributes":{},"id":"3178","type":"BasicTickFormatter"},{"attributes":{},"id":"3150","type":"CategoricalScale"},{"attributes":{"callback":null,"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]},"selected":{"id":"3179","type":"Selection"},"selection_policy":{"id":"3180","type":"UnionRenderers"}},"id":"3163","type":"ColumnDataSource"},{"attributes":{"text":"Categorical Heatmap"},"id":"3142","type":"Title"},{"attributes":{"formatter":{"id":"3178","type":"BasicTickFormatter"},"ticker":{"id":"3122","type":"BasicTicker"}},"id":"3121","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"3183","type":"Selection"},"selection_policy":{"id":"3184","type":"UnionRenderers"}},"id":"3136","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"3144","type":"FactorRange"},{"attributes":{"source":{"id":"3136","type":"ColumnDataSource"}},"id":"3140","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"3138","type":"Circle"},{"attributes":{"data_source":{"id":"3136","type":"ColumnDataSource"},"glyph":{"id":"3137","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3138","type":"Circle"},"selection_glyph":null,"view":{"id":"3140","type":"CDSView"}},"id":"3139","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"3152","type":"CategoricalAxis"}],"center":[{"id":"3155","type":"Grid"},{"id":"3159","type":"Grid"}],"left":[{"id":"3156","type":"CategoricalAxis"}],"renderers":[{"id":"3166","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"3142","type":"Title"},"toolbar":{"id":"3161","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3144","type":"FactorRange"},"x_scale":{"id":"3148","type":"CategoricalScale"},"y_range":{"id":"3146","type":"FactorRange"},"y_scale":{"id":"3150","type":"CategoricalScale"}},"id":"3141","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3148","type":"CategoricalScale"},{"attributes":{},"id":"3172","type":"CategoricalTickFormatter"},{"attributes":{},"id":"3122","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"3146","type":"FactorRange"},{"attributes":{"callback":null,"end":100},"id":"3113","type":"Range1d"},{"attributes":{"below":[{"id":"3121","type":"LinearAxis"}],"center":[{"id":"3125","type":"Grid"},{"id":"3129","type":"Grid"}],"left":[{"id":"3126","type":"CategoricalAxis"}],"renderers":[{"id":"3134","type":"GlyphRenderer"},{"id":"3139","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"3111","type":"Title"},"toolbar":{"id":"3130","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3113","type":"Range1d"},"x_scale":{"id":"3117","type":"LinearScale"},"y_range":{"id":"3115","type":"FactorRange"},"y_scale":{"id":"3119","type":"CategoricalScale"}},"id":"3110","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3127","type":"CategoricalTicker"},{"attributes":{},"id":"3180","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"3174","type":"CategoricalTickFormatter"},"ticker":{"id":"3153","type":"CategoricalTicker"}},"id":"3152","type":"CategoricalAxis"},{"attributes":{"ticker":{"id":"3122","type":"BasicTicker"}},"id":"3125","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"3130","type":"Toolbar"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"3132","type":"Segment"},{"attributes":{"data_source":{"id":"3163","type":"ColumnDataSource"},"glyph":{"id":"3164","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3165","type":"Rect"},"selection_glyph":null,"view":{"id":"3167","type":"CDSView"}},"id":"3166","type":"GlyphRenderer"},{"attributes":{"text":"Categorical Dot Plot"},"id":"3111","type":"Title"},{"attributes":{},"id":"3153","type":"CategoricalTicker"},{"attributes":{"callback":null,"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]},"selected":{"id":"3181","type":"Selection"},"selection_policy":{"id":"3182","type":"UnionRenderers"}},"id":"3131","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"3127","type":"CategoricalTicker"}},"id":"3129","type":"Grid"},{"attributes":{},"id":"3179","type":"Selection"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"3115","type":"FactorRange"},{"attributes":{"callback":null},"id":"3160","type":"HoverTool"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"3137","type":"Circle"},{"attributes":{},"id":"3176","type":"CategoricalTickFormatter"},{"attributes":{"children":[{"id":"3141","subtype":"Figure","type":"Plot"},{"id":"3110","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"3168","type":"Row"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3164","type":"Rect"},{"attributes":{},"id":"3181","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3160","type":"HoverTool"}]},"id":"3161","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3165","type":"Rect"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"3133","type":"Segment"},{"attributes":{},"id":"3182","type":"UnionRenderers"},{"attributes":{},"id":"3174","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"3172","type":"CategoricalTickFormatter"},"ticker":{"id":"3157","type":"CategoricalTicker"}},"id":"3156","type":"CategoricalAxis"},{"attributes":{},"id":"3119","type":"CategoricalScale"},{"attributes":{},"id":"3183","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"3157","type":"CategoricalTicker"}},"id":"3159","type":"Grid"},{"attributes":{"data_source":{"id":"3131","type":"ColumnDataSource"},"glyph":{"id":"3132","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3133","type":"Segment"},"selection_glyph":null,"view":{"id":"3135","type":"CDSView"}},"id":"3134","type":"GlyphRenderer"},{"attributes":{},"id":"3117","type":"LinearScale"},{"attributes":{"source":{"id":"3163","type":"ColumnDataSource"}},"id":"3167","type":"CDSView"},{"attributes":{},"id":"3157","type":"CategoricalTicker"},{"attributes":{},"id":"3184","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"3176","type":"CategoricalTickFormatter"},"ticker":{"id":"3127","type":"CategoricalTicker"}},"id":"3126","type":"CategoricalAxis"},{"attributes":{"source":{"id":"3131","type":"ColumnDataSource"}},"id":"3135","type":"CDSView"}],"root_ids":["3168"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"9fa6bac1-8af8-40b7-9ab2-76184089bd22","roots":{"3168":"9731e4a0-4bfb-4074-a067-511510bf5163"}}];
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
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();