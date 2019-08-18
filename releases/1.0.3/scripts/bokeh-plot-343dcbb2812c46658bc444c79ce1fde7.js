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
      };var element = document.getElementById("f0458ca0-2382-47b6-ae07-bb67a96af395");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f0458ca0-2382-47b6-ae07-bb67a96af395' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"ac95d2a9-bb26-4baf-ae64-5f88537946c4":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"4643","type":"Toolbar"},{"attributes":{},"id":"4658","type":"MultiLine"},{"attributes":{},"id":"4629","type":"LinearScale"},{"attributes":{},"id":"4631","type":"LinearScale"},{"attributes":{"formatter":{"id":"4666","type":"BasicTickFormatter"},"plot":{"id":"4623","subtype":"Figure","type":"Plot"},"ticker":{"id":"4634","type":"BasicTicker"}},"id":"4633","type":"LinearAxis"},{"attributes":{},"id":"4680","type":"Selection"},{"attributes":{"data_source":{"id":"4659","type":"ColumnDataSource"},"glyph":{"id":"4658","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4661","type":"CDSView"}},"id":"4660","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"end":[0,1,2,3,4,5,6,7],"start":[0,0,0,0,0,0,0,0]},"selected":{"id":"4678","type":"Selection"},"selection_policy":{"id":"4679","type":"UnionRenderers"}},"id":"4659","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"color":["#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f"],"index":[0,1,2,3,4,5,6,7]},"selected":{"id":"4680","type":"Selection"},"selection_policy":{"id":"4681","type":"UnionRenderers"}},"id":"4646","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"4625","type":"Range1d"},{"attributes":{},"id":"4664","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"4627","type":"Range1d"},{"attributes":{},"id":"4634","type":"BasicTicker"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.7071067811865476,0.7071067811865475],"2":[6.123233995736766e-17,1.0],"3":[-0.7071067811865475,0.7071067811865476],"4":[-1.0,1.2246467991473532e-16],"5":[-0.7071067811865477,-0.7071067811865475],"6":[-1.8369701987210297e-16,-1.0],"7":[0.7071067811865474,-0.7071067811865477]}},"id":"4662","type":"StaticLayoutProvider"},{"attributes":{"below":[{"id":"4633","type":"LinearAxis"}],"left":[{"id":"4638","type":"LinearAxis"}],"renderers":[{"id":"4633","type":"LinearAxis"},{"id":"4637","type":"Grid"},{"id":"4638","type":"LinearAxis"},{"id":"4642","type":"Grid"},{"id":"4644","type":"GraphRenderer"}],"title":{"id":"4622","type":"Title"},"toolbar":{"id":"4643","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4625","type":"Range1d"},"x_scale":{"id":"4629","type":"LinearScale"},"y_range":{"id":"4627","type":"Range1d"},"y_scale":{"id":"4631","type":"LinearScale"}},"id":"4623","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4679","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"4646","type":"ColumnDataSource"},"glyph":{"id":"4653","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4648","type":"CDSView"}},"id":"4647","type":"GlyphRenderer"},{"attributes":{},"id":"4681","type":"UnionRenderers"},{"attributes":{"plot":{"id":"4623","subtype":"Figure","type":"Plot"},"ticker":{"id":"4634","type":"BasicTicker"}},"id":"4637","type":"Grid"},{"attributes":{"source":{"id":"4646","type":"ColumnDataSource"}},"id":"4648","type":"CDSView"},{"attributes":{},"id":"4666","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"4659","type":"ColumnDataSource"}},"id":"4661","type":"CDSView"},{"attributes":{},"id":"4668","type":"NodesOnly"},{"attributes":{"formatter":{"id":"4664","type":"BasicTickFormatter"},"plot":{"id":"4623","subtype":"Figure","type":"Plot"},"ticker":{"id":"4639","type":"BasicTicker"}},"id":"4638","type":"LinearAxis"},{"attributes":{"edge_renderer":{"id":"4660","type":"GlyphRenderer"},"inspection_policy":{"id":"4668","type":"NodesOnly"},"layout_provider":{"id":"4662","type":"StaticLayoutProvider"},"node_renderer":{"id":"4647","type":"GlyphRenderer"},"selection_policy":{"id":"4669","type":"NodesOnly"}},"id":"4644","type":"GraphRenderer"},{"attributes":{},"id":"4669","type":"NodesOnly"},{"attributes":{},"id":"4639","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"color"},"height":{"units":"data","value":0.1},"width":{"units":"data","value":0.2}},"id":"4653","type":"Oval"},{"attributes":{"dimension":1,"plot":{"id":"4623","subtype":"Figure","type":"Plot"},"ticker":{"id":"4639","type":"BasicTicker"}},"id":"4642","type":"Grid"},{"attributes":{},"id":"4678","type":"Selection"},{"attributes":{"plot":null,"text":"Graph Layout Demonstration"},"id":"4622","type":"Title"}],"root_ids":["4623"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"ac95d2a9-bb26-4baf-ae64-5f88537946c4","roots":{"4623":"f0458ca0-2382-47b6-ae07-bb67a96af395"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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