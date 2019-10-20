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
      };var element = document.getElementById("8262c6c7-4acb-4640-b353-2db60cfa805e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '8262c6c7-4acb-4640-b353-2db60cfa805e' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
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
                    
                  var docs_json = '{"9602fa69-a82d-4d88-9d41-4eb18b70138a":{"roots":{"references":[{"attributes":{"edge_renderer":{"id":"23610","type":"GlyphRenderer"},"inspection_policy":{"id":"23618","type":"NodesOnly"},"layout_provider":{"id":"23612","type":"StaticLayoutProvider"},"node_renderer":{"id":"23597","type":"GlyphRenderer"},"selection_policy":{"id":"23623","type":"NodesOnly"}},"id":"23594","type":"GraphRenderer"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.7071067811865476,0.7071067811865475],"2":[6.123233995736766e-17,1.0],"3":[-0.7071067811865475,0.7071067811865476],"4":[-1.0,1.2246467991473532e-16],"5":[-0.7071067811865477,-0.7071067811865475],"6":[-1.8369701987210297e-16,-1.0],"7":[0.7071067811865474,-0.7071067811865477]}},"id":"23612","type":"StaticLayoutProvider"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23575","type":"Range1d"},{"attributes":{},"id":"23631","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"23584","type":"BasicTicker"}},"id":"23587","type":"Grid"},{"attributes":{"data_source":{"id":"23596","type":"ColumnDataSource"},"glyph":{"id":"23603","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23598","type":"CDSView"}},"id":"23597","type":"GlyphRenderer"},{"attributes":{},"id":"23629","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"23593","type":"Toolbar"},{"attributes":{"source":{"id":"23609","type":"ColumnDataSource"}},"id":"23611","type":"CDSView"},{"attributes":{},"id":"23579","type":"LinearScale"},{"attributes":{"text":"Graph Layout Demonstration"},"id":"23573","type":"Title"},{"attributes":{},"id":"23630","type":"Selection"},{"attributes":{},"id":"23623","type":"NodesOnly"},{"attributes":{"dimension":1,"ticker":{"id":"23589","type":"BasicTicker"}},"id":"23592","type":"Grid"},{"attributes":{"callback":null,"data":{"color":["#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f"],"index":[0,1,2,3,4,5,6,7]},"selected":{"id":"23630","type":"Selection"},"selection_policy":{"id":"23631","type":"UnionRenderers"}},"id":"23596","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"23609","type":"ColumnDataSource"},"glyph":{"id":"23608","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"23611","type":"CDSView"}},"id":"23610","type":"GlyphRenderer"},{"attributes":{},"id":"23628","type":"Selection"},{"attributes":{"fill_color":{"field":"color"},"height":{"units":"data","value":0.1},"width":{"units":"data","value":0.2}},"id":"23603","type":"Oval"},{"attributes":{"below":[{"id":"23583","type":"LinearAxis"}],"center":[{"id":"23587","type":"Grid"},{"id":"23592","type":"Grid"}],"left":[{"id":"23588","type":"LinearAxis"}],"renderers":[{"id":"23594","type":"GraphRenderer"}],"title":{"id":"23573","type":"Title"},"toolbar":{"id":"23593","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"23575","type":"Range1d"},"x_scale":{"id":"23579","type":"LinearScale"},"y_range":{"id":"23577","type":"Range1d"},"y_scale":{"id":"23581","type":"LinearScale"}},"id":"23572","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"23624","type":"BasicTickFormatter"},"ticker":{"id":"23589","type":"BasicTicker"}},"id":"23588","type":"LinearAxis"},{"attributes":{"formatter":{"id":"23626","type":"BasicTickFormatter"},"ticker":{"id":"23584","type":"BasicTicker"}},"id":"23583","type":"LinearAxis"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"23577","type":"Range1d"},{"attributes":{},"id":"23626","type":"BasicTickFormatter"},{"attributes":{},"id":"23608","type":"MultiLine"},{"attributes":{"callback":null,"data":{"end":[0,1,2,3,4,5,6,7],"start":[0,0,0,0,0,0,0,0]},"selected":{"id":"23628","type":"Selection"},"selection_policy":{"id":"23629","type":"UnionRenderers"}},"id":"23609","type":"ColumnDataSource"},{"attributes":{},"id":"23618","type":"NodesOnly"},{"attributes":{},"id":"23589","type":"BasicTicker"},{"attributes":{"source":{"id":"23596","type":"ColumnDataSource"}},"id":"23598","type":"CDSView"},{"attributes":{},"id":"23584","type":"BasicTicker"},{"attributes":{},"id":"23581","type":"LinearScale"},{"attributes":{},"id":"23624","type":"BasicTickFormatter"}],"root_ids":["23572"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"9602fa69-a82d-4d88-9d41-4eb18b70138a","roots":{"23572":"8262c6c7-4acb-4640-b353-2db60cfa805e"}}];
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