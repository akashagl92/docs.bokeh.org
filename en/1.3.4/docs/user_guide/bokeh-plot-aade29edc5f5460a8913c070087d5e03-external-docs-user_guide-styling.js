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
      };var element = document.getElementById("5a4a78e3-5293-4636-899e-c76a290fa007");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5a4a78e3-5293-4636-899e-c76a290fa007' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"bcaed258-4d74-473d-ba0e-f06d8952fa93":{"roots":{"references":[{"attributes":{"args":{"other":{"id":"32221","type":"BoxAnnotation"}},"code":"other.visible = this.active"},"id":"32223","type":"CustomJS"},{"attributes":{"args":{"other":{"id":"32219","type":"GlyphRenderer"}},"code":"other.visible = this.active"},"id":"32225","type":"CustomJS"},{"attributes":{},"id":"32206","type":"BasicTicker"},{"attributes":{"line_color":"blue","x":{"field":"x"},"y":{"field":"y"}},"id":"32212","type":"Line"},{"attributes":{"active":true,"button_type":"success","callback":null,"icon":null,"js_property_callbacks":{"change:active":[{"id":"32225","type":"CustomJS"}]},"label":"Pink Line"},"id":"32224","type":"Toggle"},{"attributes":{"dimension":1,"ticker":{"id":"32206","type":"BasicTicker"}},"id":"32209","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"32210","type":"Toolbar"},{"attributes":{"children":[{"id":"32191","subtype":"Figure","type":"Plot"}]},"id":"32226","type":"Row"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,1]},"selected":{"id":"32235","type":"Selection"},"selection_policy":{"id":"32236","type":"UnionRenderers"}},"id":"32211","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"32222","type":"Toggle"},{"id":"32224","type":"Toggle"}]},"id":"32227","type":"Row"},{"attributes":{"children":[{"id":"32226","type":"Row"},{"id":"32227","type":"Row"}]},"id":"32228","type":"Column"},{"attributes":{"source":{"id":"32211","type":"ColumnDataSource"}},"id":"32215","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"32213","type":"Line"},{"attributes":{"data_source":{"id":"32211","type":"ColumnDataSource"},"glyph":{"id":"32212","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32213","type":"Line"},"selection_glyph":null,"view":{"id":"32215","type":"CDSView"}},"id":"32214","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"32230","type":"Title"},{"attributes":{"line_color":"pink","x":{"field":"x"},"y":{"field":"y"}},"id":"32217","type":"Line"},{"attributes":{},"id":"32232","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[2,1,2]},"selected":{"id":"32237","type":"Selection"},"selection_policy":{"id":"32238","type":"UnionRenderers"}},"id":"32216","type":"ColumnDataSource"},{"attributes":{},"id":"32235","type":"Selection"},{"attributes":{},"id":"32196","type":"LinearScale"},{"attributes":{"callback":null},"id":"32192","type":"DataRange1d"},{"attributes":{"formatter":{"id":"32234","type":"BasicTickFormatter"},"ticker":{"id":"32201","type":"BasicTicker"}},"id":"32200","type":"LinearAxis"},{"attributes":{"source":{"id":"32216","type":"ColumnDataSource"}},"id":"32220","type":"CDSView"},{"attributes":{"callback":null},"id":"32194","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"32218","type":"Line"},{"attributes":{},"id":"32198","type":"LinearScale"},{"attributes":{},"id":"32234","type":"BasicTickFormatter"},{"attributes":{},"id":"32236","type":"UnionRenderers"},{"attributes":{"below":[{"id":"32200","type":"LinearAxis"}],"center":[{"id":"32204","type":"Grid"},{"id":"32209","type":"Grid"},{"id":"32221","type":"BoxAnnotation"}],"left":[{"id":"32205","type":"LinearAxis"}],"plot_height":200,"renderers":[{"id":"32214","type":"GlyphRenderer"},{"id":"32219","type":"GlyphRenderer"}],"title":{"id":"32230","type":"Title"},"toolbar":{"id":"32210","type":"Toolbar"},"x_range":{"id":"32192","type":"DataRange1d"},"x_scale":{"id":"32196","type":"LinearScale"},"y_range":{"id":"32194","type":"DataRange1d"},"y_scale":{"id":"32198","type":"LinearScale"}},"id":"32191","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"32216","type":"ColumnDataSource"},"glyph":{"id":"32217","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"32218","type":"Line"},"selection_glyph":null,"view":{"id":"32220","type":"CDSView"}},"id":"32219","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"green"},"left":1.5,"right":2.5},"id":"32221","type":"BoxAnnotation"},{"attributes":{},"id":"32237","type":"Selection"},{"attributes":{"ticker":{"id":"32201","type":"BasicTicker"}},"id":"32204","type":"Grid"},{"attributes":{},"id":"32201","type":"BasicTicker"},{"attributes":{},"id":"32238","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"32232","type":"BasicTickFormatter"},"ticker":{"id":"32206","type":"BasicTicker"}},"id":"32205","type":"LinearAxis"},{"attributes":{"active":true,"button_type":"success","callback":null,"icon":null,"js_property_callbacks":{"change:active":[{"id":"32223","type":"CustomJS"}]},"label":"Green Box"},"id":"32222","type":"Toggle"}],"root_ids":["32228"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"bcaed258-4d74-473d-ba0e-f06d8952fa93","roots":{"32228":"5a4a78e3-5293-4636-899e-c76a290fa007"}}];
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