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
      };var element = document.getElementById("efa1cf5c-b8d3-496f-bd44-01d1c5de81a0");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'efa1cf5c-b8d3-496f-bd44-01d1c5de81a0' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"35e2058b-d15b-4cab-92dd-75d2b73e1386":{"roots":{"references":[{"attributes":{"data_source":{"id":"22822","type":"ColumnDataSource"},"glyph":{"id":"22821","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"22824","type":"CDSView"}},"id":"22823","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"color":["#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f"],"index":[0,1,2,3,4,5,6,7]},"selected":{"id":"22842","type":"Selection"},"selection_policy":{"id":"22841","type":"UnionRenderers"}},"id":"22809","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"22830","type":"BasicTickFormatter"},"ticker":{"id":"22797","type":"BasicTicker"}},"id":"22796","type":"LinearAxis"},{"attributes":{},"id":"22794","type":"LinearScale"},{"attributes":{"data_source":{"id":"22809","type":"ColumnDataSource"},"glyph":{"id":"22816","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"22811","type":"CDSView"}},"id":"22810","type":"GlyphRenderer"},{"attributes":{},"id":"22828","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"22822","type":"ColumnDataSource"}},"id":"22824","type":"CDSView"},{"attributes":{"edge_renderer":{"id":"22823","type":"GlyphRenderer"},"inspection_policy":{"id":"22836","type":"NodesOnly"},"layout_provider":{"id":"22825","type":"StaticLayoutProvider"},"node_renderer":{"id":"22810","type":"GlyphRenderer"},"selection_policy":{"id":"22831","type":"NodesOnly"}},"id":"22807","type":"GraphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"22788","type":"Range1d"},{"attributes":{"callback":null,"data":{"end":[0,1,2,3,4,5,6,7],"start":[0,0,0,0,0,0,0,0]},"selected":{"id":"22844","type":"Selection"},"selection_policy":{"id":"22843","type":"UnionRenderers"}},"id":"22822","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"22796","type":"LinearAxis"}],"center":[{"id":"22800","type":"Grid"},{"id":"22805","type":"Grid"}],"left":[{"id":"22801","type":"LinearAxis"}],"renderers":[{"id":"22807","type":"GraphRenderer"}],"title":{"id":"22786","type":"Title"},"toolbar":{"id":"22806","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"22788","type":"Range1d"},"x_scale":{"id":"22792","type":"LinearScale"},"y_range":{"id":"22790","type":"Range1d"},"y_scale":{"id":"22794","type":"LinearScale"}},"id":"22785","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"22806","type":"Toolbar"},{"attributes":{},"id":"22836","type":"NodesOnly"},{"attributes":{"text":"Graph Layout Demonstration"},"id":"22786","type":"Title"},{"attributes":{},"id":"22844","type":"Selection"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.7071067811865476,0.7071067811865475],"2":[6.123233995736766e-17,1.0],"3":[-0.7071067811865475,0.7071067811865476],"4":[-1.0,1.2246467991473532e-16],"5":[-0.7071067811865477,-0.7071067811865475],"6":[-1.8369701987210297e-16,-1.0],"7":[0.7071067811865474,-0.7071067811865477]}},"id":"22825","type":"StaticLayoutProvider"},{"attributes":{},"id":"22831","type":"NodesOnly"},{"attributes":{},"id":"22797","type":"BasicTicker"},{"attributes":{},"id":"22821","type":"MultiLine"},{"attributes":{},"id":"22792","type":"LinearScale"},{"attributes":{},"id":"22830","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"color"},"height":{"units":"data","value":0.1},"width":{"units":"data","value":0.2}},"id":"22816","type":"Oval"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"22790","type":"Range1d"},{"attributes":{},"id":"22842","type":"Selection"},{"attributes":{},"id":"22841","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"22797","type":"BasicTicker"}},"id":"22800","type":"Grid"},{"attributes":{"source":{"id":"22809","type":"ColumnDataSource"}},"id":"22811","type":"CDSView"},{"attributes":{},"id":"22843","type":"UnionRenderers"},{"attributes":{},"id":"22802","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"22802","type":"BasicTicker"}},"id":"22805","type":"Grid"},{"attributes":{"formatter":{"id":"22828","type":"BasicTickFormatter"},"ticker":{"id":"22802","type":"BasicTicker"}},"id":"22801","type":"LinearAxis"}],"root_ids":["22785"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"35e2058b-d15b-4cab-92dd-75d2b73e1386","roots":{"22785":"efa1cf5c-b8d3-496f-bd44-01d1c5de81a0"}}];
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