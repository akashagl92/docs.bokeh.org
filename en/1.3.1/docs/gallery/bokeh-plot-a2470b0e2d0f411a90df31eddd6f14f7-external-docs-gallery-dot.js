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
      };var element = document.getElementById("02f4a4ae-1eb9-428a-8f0a-09f4e624dc66");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '02f4a4ae-1eb9-428a-8f0a-09f4e624dc66' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js"];
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
                    
                  var docs_json = '{"9b7231dd-e62b-4c53-885f-112514a32296":{"roots":{"references":[{"attributes":{"below":[{"id":"3692","type":"CategoricalAxis"}],"center":[{"id":"3695","type":"Grid"},{"id":"3699","type":"Grid"}],"left":[{"id":"3696","type":"CategoricalAxis"}],"renderers":[{"id":"3706","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"3682","type":"Title"},"toolbar":{"id":"3701","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3684","type":"FactorRange"},"x_scale":{"id":"3688","type":"CategoricalScale"},"y_range":{"id":"3686","type":"FactorRange"},"y_scale":{"id":"3690","type":"CategoricalScale"}},"id":"3681","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3700","type":"HoverTool"}]},"id":"3701","type":"Toolbar"},{"attributes":{},"id":"3690","type":"CategoricalScale"},{"attributes":{},"id":"3720","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo 123","foo 123","foo 123","bar:0.2","bar:0.2","bar:0.2","baz-10","baz-10","baz-10"],"y":["foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10","foo 123","bar:0.2","baz-10"]},"selected":{"id":"3719","type":"Selection"},"selection_policy":{"id":"3720","type":"UnionRenderers"}},"id":"3703","type":"ColumnDataSource"},{"attributes":{},"id":"3721","type":"Selection"},{"attributes":{"text":"Categorical Heatmap"},"id":"3682","type":"Title"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"3686","type":"FactorRange"},{"attributes":{},"id":"3688","type":"CategoricalScale"},{"attributes":{},"id":"3722","type":"UnionRenderers"},{"attributes":{"callback":null,"factors":["foo 123","bar:0.2","baz-10"]},"id":"3684","type":"FactorRange"},{"attributes":{"formatter":{"id":"3713","type":"CategoricalTickFormatter"},"ticker":{"id":"3693","type":"CategoricalTicker"}},"id":"3692","type":"CategoricalAxis"},{"attributes":{"children":[{"id":"3681","subtype":"Figure","type":"Plot"},{"id":"3650","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"3708","type":"Row"},{"attributes":{},"id":"3723","type":"Selection"},{"attributes":{"callback":null},"id":"3700","type":"HoverTool"},{"attributes":{},"id":"3724","type":"UnionRenderers"},{"attributes":{"below":[{"id":"3661","type":"LinearAxis"}],"center":[{"id":"3665","type":"Grid"},{"id":"3669","type":"Grid"}],"left":[{"id":"3666","type":"CategoricalAxis"}],"renderers":[{"id":"3674","type":"GlyphRenderer"},{"id":"3679","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"3651","type":"Title"},"toolbar":{"id":"3670","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3653","type":"Range1d"},"x_scale":{"id":"3657","type":"LinearScale"},"y_range":{"id":"3655","type":"FactorRange"},"y_scale":{"id":"3659","type":"CategoricalScale"}},"id":"3650","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3705","type":"Rect"},{"attributes":{"source":{"id":"3703","type":"ColumnDataSource"}},"id":"3707","type":"CDSView"},{"attributes":{"callback":null,"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]},"selected":{"id":"3721","type":"Selection"},"selection_policy":{"id":"3722","type":"UnionRenderers"}},"id":"3671","type":"ColumnDataSource"},{"attributes":{"text":"Categorical Dot Plot"},"id":"3651","type":"Title"},{"attributes":{"callback":null,"end":100},"id":"3653","type":"Range1d"},{"attributes":{},"id":"3711","type":"CategoricalTickFormatter"},{"attributes":{},"id":"3662","type":"BasicTicker"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"3672","type":"Segment"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"3655","type":"FactorRange"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3704","type":"Rect"},{"attributes":{"data_source":{"id":"3703","type":"ColumnDataSource"},"glyph":{"id":"3704","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3705","type":"Rect"},"selection_glyph":null,"view":{"id":"3707","type":"CDSView"}},"id":"3706","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"3673","type":"Segment"},{"attributes":{},"id":"3657","type":"LinearScale"},{"attributes":{"data_source":{"id":"3671","type":"ColumnDataSource"},"glyph":{"id":"3672","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3673","type":"Segment"},"selection_glyph":null,"view":{"id":"3675","type":"CDSView"}},"id":"3674","type":"GlyphRenderer"},{"attributes":{},"id":"3659","type":"CategoricalScale"},{"attributes":{"source":{"id":"3671","type":"ColumnDataSource"}},"id":"3675","type":"CDSView"},{"attributes":{"formatter":{"id":"3717","type":"BasicTickFormatter"},"ticker":{"id":"3662","type":"BasicTicker"}},"id":"3661","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]},"selected":{"id":"3723","type":"Selection"},"selection_policy":{"id":"3724","type":"UnionRenderers"}},"id":"3676","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"3677","type":"Circle"},{"attributes":{"dimension":1,"ticker":{"id":"3697","type":"CategoricalTicker"}},"id":"3699","type":"Grid"},{"attributes":{},"id":"3717","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"3662","type":"BasicTicker"}},"id":"3665","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"3678","type":"Circle"},{"attributes":{},"id":"3697","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"3715","type":"CategoricalTickFormatter"},"ticker":{"id":"3667","type":"CategoricalTicker"}},"id":"3666","type":"CategoricalAxis"},{"attributes":{},"id":"3719","type":"Selection"},{"attributes":{"data_source":{"id":"3676","type":"ColumnDataSource"},"glyph":{"id":"3677","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3678","type":"Circle"},"selection_glyph":null,"view":{"id":"3680","type":"CDSView"}},"id":"3679","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"3711","type":"CategoricalTickFormatter"},"ticker":{"id":"3697","type":"CategoricalTicker"}},"id":"3696","type":"CategoricalAxis"},{"attributes":{},"id":"3713","type":"CategoricalTickFormatter"},{"attributes":{},"id":"3667","type":"CategoricalTicker"},{"attributes":{"source":{"id":"3676","type":"ColumnDataSource"}},"id":"3680","type":"CDSView"},{"attributes":{"ticker":{"id":"3693","type":"CategoricalTicker"}},"id":"3695","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"3667","type":"CategoricalTicker"}},"id":"3669","type":"Grid"},{"attributes":{},"id":"3693","type":"CategoricalTicker"},{"attributes":{},"id":"3715","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"3670","type":"Toolbar"}],"root_ids":["3708"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"9b7231dd-e62b-4c53-885f-112514a32296","roots":{"3708":"02f4a4ae-1eb9-428a-8f0a-09f4e624dc66"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
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