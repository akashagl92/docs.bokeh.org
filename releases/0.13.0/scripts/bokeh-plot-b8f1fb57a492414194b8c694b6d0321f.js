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
      };var element = document.getElementById("ff9cdf63-9c36-4cc2-b591-a83f1b2c4575");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ff9cdf63-9c36-4cc2-b591-a83f1b2c4575' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"53b69b3d-ca25-4305-b376-961934ce8db1":{"roots":{"references":[{"attributes":{"callback":null,"data":{"end":[0,1,2,3,4,5,6,7],"start":[0,0,0,0,0,0,0,0]},"selected":{"id":"f74c6b3a-eca7-449b-bec3-36ae6b82b07b","type":"Selection"},"selection_policy":{"id":"c3e88e51-b86f-4afd-b56f-ddcc9488a203","type":"UnionRenderers"}},"id":"9fd767bf-a786-4065-89ca-19a5326955de","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"7e379ac4-66a8-4bb9-8523-b7c067c21976","type":"Toolbar"},{"attributes":{"callback":null,"data":{"color":["#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f"],"index":[0,1,2,3,4,5,6,7]},"selected":{"id":"78509649-e32f-43a4-8f69-d4a9e093c1d6","type":"Selection"},"selection_policy":{"id":"5834c494-297c-4bcf-ae14-98e70d43d14b","type":"UnionRenderers"}},"id":"180b0983-f58b-4adf-8d7c-d977103f71b5","type":"ColumnDataSource"},{"attributes":{"source":{"id":"180b0983-f58b-4adf-8d7c-d977103f71b5","type":"ColumnDataSource"}},"id":"75d542cf-8f17-405e-9277-6f492b329d97","type":"CDSView"},{"attributes":{},"id":"1dc40b87-fd86-491e-84b0-ce43cf7552f4","type":"LinearScale"},{"attributes":{},"id":"f74c6b3a-eca7-449b-bec3-36ae6b82b07b","type":"Selection"},{"attributes":{},"id":"5834c494-297c-4bcf-ae14-98e70d43d14b","type":"UnionRenderers"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"c26f2142-0a5a-4aa7-846d-a617110eee5e","type":"Range1d"},{"attributes":{},"id":"2f31c5ef-4416-4e5f-9c43-0c19bb9a0042","type":"NodesOnly"},{"attributes":{},"id":"02690792-3dbc-42a7-8a3f-6599ac2677a5","type":"MultiLine"},{"attributes":{},"id":"78509649-e32f-43a4-8f69-d4a9e093c1d6","type":"Selection"},{"attributes":{"below":[{"id":"486c1b78-83c6-4dc3-8598-5acc4b63bfea","type":"LinearAxis"}],"left":[{"id":"143e9927-0d59-4407-830a-8bff4f89c165","type":"LinearAxis"}],"renderers":[{"id":"486c1b78-83c6-4dc3-8598-5acc4b63bfea","type":"LinearAxis"},{"id":"9d5ae022-584b-4fab-98de-c5528ca58fbf","type":"Grid"},{"id":"143e9927-0d59-4407-830a-8bff4f89c165","type":"LinearAxis"},{"id":"b77dcc9c-42bc-4931-be40-4edcd48d57ef","type":"Grid"},{"id":"0278daf5-f345-4676-baab-1e9e55dd5ccb","type":"GraphRenderer"}],"title":{"id":"7322351a-53cb-4767-9679-2b64ea8568b3","type":"Title"},"toolbar":{"id":"7e379ac4-66a8-4bb9-8523-b7c067c21976","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d7299d40-4213-4d8f-bc22-12317e88479c","type":"Range1d"},"x_scale":{"id":"1dc40b87-fd86-491e-84b0-ce43cf7552f4","type":"LinearScale"},"y_range":{"id":"c26f2142-0a5a-4aa7-846d-a617110eee5e","type":"Range1d"},"y_scale":{"id":"d48f3063-2c7e-4cf6-850c-6880ca4cbbbb","type":"LinearScale"}},"id":"f4aa254e-5953-4b03-9a90-416c0b62795c","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"c959ca9e-90c7-4f5d-9169-3cd07efe9fb2","type":"BasicTickFormatter"},"plot":{"id":"f4aa254e-5953-4b03-9a90-416c0b62795c","subtype":"Figure","type":"Plot"},"ticker":{"id":"e6ec230c-40d8-423e-8423-f74fa637c2bb","type":"BasicTicker"}},"id":"486c1b78-83c6-4dc3-8598-5acc4b63bfea","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"color"},"height":{"units":"data","value":0.1},"width":{"units":"data","value":0.2}},"id":"73bc5026-3b98-4f45-b984-db6c1ccc33b9","type":"Oval"},{"attributes":{},"id":"e6ec230c-40d8-423e-8423-f74fa637c2bb","type":"BasicTicker"},{"attributes":{"edge_renderer":{"id":"d55c0370-4844-4a11-91f4-8fffe74ae57e","type":"GlyphRenderer"},"inspection_policy":{"id":"a2c8bddf-0fb4-4d24-a681-e1cab38a16e4","type":"NodesOnly"},"layout_provider":{"id":"7ad3baa5-4d32-4ae5-96da-cda3e4c5702a","type":"StaticLayoutProvider"},"node_renderer":{"id":"b1dd4aa7-acb8-4b6a-a0a7-82d81c7a20e4","type":"GlyphRenderer"},"selection_policy":{"id":"2f31c5ef-4416-4e5f-9c43-0c19bb9a0042","type":"NodesOnly"}},"id":"0278daf5-f345-4676-baab-1e9e55dd5ccb","type":"GraphRenderer"},{"attributes":{},"id":"d4d1f7cb-79da-4b05-9c1b-d60e5a846f77","type":"BasicTickFormatter"},{"attributes":{},"id":"c3e88e51-b86f-4afd-b56f-ddcc9488a203","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"f4aa254e-5953-4b03-9a90-416c0b62795c","subtype":"Figure","type":"Plot"},"ticker":{"id":"797b726f-d338-4d67-9aa8-6e627d421356","type":"BasicTicker"}},"id":"b77dcc9c-42bc-4931-be40-4edcd48d57ef","type":"Grid"},{"attributes":{"plot":null,"text":"Graph Layout Demonstration"},"id":"7322351a-53cb-4767-9679-2b64ea8568b3","type":"Title"},{"attributes":{"formatter":{"id":"d4d1f7cb-79da-4b05-9c1b-d60e5a846f77","type":"BasicTickFormatter"},"plot":{"id":"f4aa254e-5953-4b03-9a90-416c0b62795c","subtype":"Figure","type":"Plot"},"ticker":{"id":"797b726f-d338-4d67-9aa8-6e627d421356","type":"BasicTicker"}},"id":"143e9927-0d59-4407-830a-8bff4f89c165","type":"LinearAxis"},{"attributes":{"source":{"id":"9fd767bf-a786-4065-89ca-19a5326955de","type":"ColumnDataSource"}},"id":"19f7d7a8-aabe-4c39-bf5f-f36a2bba3db0","type":"CDSView"},{"attributes":{"plot":{"id":"f4aa254e-5953-4b03-9a90-416c0b62795c","subtype":"Figure","type":"Plot"},"ticker":{"id":"e6ec230c-40d8-423e-8423-f74fa637c2bb","type":"BasicTicker"}},"id":"9d5ae022-584b-4fab-98de-c5528ca58fbf","type":"Grid"},{"attributes":{},"id":"c959ca9e-90c7-4f5d-9169-3cd07efe9fb2","type":"BasicTickFormatter"},{"attributes":{},"id":"a2c8bddf-0fb4-4d24-a681-e1cab38a16e4","type":"NodesOnly"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"d7299d40-4213-4d8f-bc22-12317e88479c","type":"Range1d"},{"attributes":{"data_source":{"id":"9fd767bf-a786-4065-89ca-19a5326955de","type":"ColumnDataSource"},"glyph":{"id":"02690792-3dbc-42a7-8a3f-6599ac2677a5","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"19f7d7a8-aabe-4c39-bf5f-f36a2bba3db0","type":"CDSView"}},"id":"d55c0370-4844-4a11-91f4-8fffe74ae57e","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"180b0983-f58b-4adf-8d7c-d977103f71b5","type":"ColumnDataSource"},"glyph":{"id":"73bc5026-3b98-4f45-b984-db6c1ccc33b9","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"75d542cf-8f17-405e-9277-6f492b329d97","type":"CDSView"}},"id":"b1dd4aa7-acb8-4b6a-a0a7-82d81c7a20e4","type":"GlyphRenderer"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.7071067811865476,0.7071067811865475],"2":[6.123233995736766e-17,1.0],"3":[-0.7071067811865475,0.7071067811865476],"4":[-1.0,1.2246467991473532e-16],"5":[-0.7071067811865477,-0.7071067811865475],"6":[-1.8369701987210297e-16,-1.0],"7":[0.7071067811865474,-0.7071067811865477]}},"id":"7ad3baa5-4d32-4ae5-96da-cda3e4c5702a","type":"StaticLayoutProvider"},{"attributes":{},"id":"797b726f-d338-4d67-9aa8-6e627d421356","type":"BasicTicker"},{"attributes":{},"id":"d48f3063-2c7e-4cf6-850c-6880ca4cbbbb","type":"LinearScale"}],"root_ids":["f4aa254e-5953-4b03-9a90-416c0b62795c"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"53b69b3d-ca25-4305-b376-961934ce8db1","roots":{"f4aa254e-5953-4b03-9a90-416c0b62795c":"ff9cdf63-9c36-4cc2-b591-a83f1b2c4575"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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