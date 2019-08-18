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
      };var element = document.getElementById("4655b72c-026c-4355-adb5-850dd0ada875");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '4655b72c-026c-4355-adb5-850dd0ada875' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"52e6e5d9-cc69-4ab8-924c-22a294147eb1":{"roots":{"references":[{"attributes":{"formatter":{"id":"32206","type":"BasicTickFormatter"},"ticker":{"id":"32174","type":"BasicTicker"}},"id":"32173","type":"LinearAxis"},{"attributes":{},"id":"32174","type":"BasicTicker"},{"attributes":{"active":true,"button_type":"success","callback":null,"icon":null,"js_property_callbacks":{"change:active":[{"id":"32198","type":"CustomJS"}]},"label":"Pink Line"},"id":"32197","type":"Toggle"},{"attributes":{},"id":"32169","type":"LinearScale"},{"attributes":{"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"32185","type":"Line"},{"attributes":{"callback":null},"id":"32165","type":"DataRange1d"},{"attributes":{"formatter":{"id":"32204","type":"BasicTickFormatter"},"ticker":{"id":"32179","type":"BasicTicker"}},"id":"32178","type":"LinearAxis"},{"attributes":{},"id":"32171","type":"LinearScale"},{"attributes":{"args":{"other":{"id":"32192","type":"GlyphRenderer"}},"code":"other.visible = this.active"},"id":"32198","type":"CustomJS"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"32186","type":"Line"},{"attributes":{},"id":"32179","type":"BasicTicker"},{"attributes":{"ticker":{"id":"32174","type":"BasicTicker"}},"id":"32177","type":"Grid"},{"attributes":{"children":[{"id":"32164","subtype":"Figure","type":"Plot"}]},"id":"32199","type":"Row"},{"attributes":{"below":[{"id":"32173","type":"LinearAxis"}],"center":[{"id":"32177","type":"Grid"},{"id":"32182","type":"Grid"},{"id":"32194","type":"BoxAnnotation"}],"left":[{"id":"32178","type":"LinearAxis"}],"plot_height":200,"renderers":[{"id":"32187","type":"GlyphRenderer"},{"id":"32192","type":"GlyphRenderer"}],"title":{"id":"32202","type":"Title"},"toolbar":{"id":"32183","type":"Toolbar"},"x_range":{"id":"32165","type":"DataRange1d"},"x_scale":{"id":"32169","type":"LinearScale"},"y_range":{"id":"32167","type":"DataRange1d"},"y_scale":{"id":"32171","type":"LinearScale"}},"id":"32164","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"32183","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,1]},"selected":{"id":"32208","type":"Selection"},"selection_policy":{"id":"32209","type":"UnionRenderers"}},"id":"32184","type":"ColumnDataSource"},{"attributes":{"args":{"other":{"id":"32194","type":"BoxAnnotation"}},"code":"other.visible = this.active"},"id":"32196","type":"CustomJS"},{"attributes":{"active":true,"button_type":"success","callback":null,"icon":null,"js_property_callbacks":{"change:active":[{"id":"32196","type":"CustomJS"}]},"label":"Green Box"},"id":"32195","type":"Toggle"},{"attributes":{},"id":"32210","type":"Selection"},{"attributes":{},"id":"32211","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"32179","type":"BasicTicker"}},"id":"32182","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"green"},"left":1.5,"right":2.5},"id":"32194","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"32189","type":"ColumnDataSource"},"glyph":{"id":"32190","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32191","type":"Line"},"selection_glyph":null,"view":{"id":"32193","type":"CDSView"}},"id":"32192","type":"GlyphRenderer"},{"attributes":{"source":{"id":"32189","type":"ColumnDataSource"}},"id":"32193","type":"CDSView"},{"attributes":{},"id":"32209","type":"UnionRenderers"},{"attributes":{},"id":"32206","type":"BasicTickFormatter"},{"attributes":{},"id":"32204","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"32195","type":"Toggle"},{"id":"32197","type":"Toggle"}]},"id":"32200","type":"Row"},{"attributes":{},"id":"32208","type":"Selection"},{"attributes":{"line_color":"pink","x":{"field":"x"},"y":{"field":"y"}},"id":"32190","type":"Line"},{"attributes":{"text":""},"id":"32202","type":"Title"},{"attributes":{"source":{"id":"32184","type":"ColumnDataSource"}},"id":"32188","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[2,1,2]},"selected":{"id":"32210","type":"Selection"},"selection_policy":{"id":"32211","type":"UnionRenderers"}},"id":"32189","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"32184","type":"ColumnDataSource"},"glyph":{"id":"32185","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32186","type":"Line"},"selection_glyph":null,"view":{"id":"32188","type":"CDSView"}},"id":"32187","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"32167","type":"DataRange1d"},{"attributes":{"children":[{"id":"32199","type":"Row"},{"id":"32200","type":"Row"}]},"id":"32201","type":"Column"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"32191","type":"Line"}],"root_ids":["32201"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"52e6e5d9-cc69-4ab8-924c-22a294147eb1","roots":{"32201":"4655b72c-026c-4355-adb5-850dd0ada875"}}];
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