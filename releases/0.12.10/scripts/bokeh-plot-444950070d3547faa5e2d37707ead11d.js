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
      };var element = document.getElementById("adf19148-24a1-4a7f-9d8e-102064772e72");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'adf19148-24a1-4a7f-9d8e-102064772e72' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"12ced9ee-1927-4365-b8aa-c00fb15499f8":{"roots":{"references":[{"attributes":{"line_color":{"value":"#abdda4"},"line_width":{"value":5}},"id":"33d9792b-ef16-4df4-a2c1-4f5978a98b4b","type":"MultiLine"},{"attributes":{"line_color":{"value":"#fdae61"},"line_width":{"value":5}},"id":"9d831762-b65a-4820-b96e-44531d484712","type":"MultiLine"},{"attributes":{"fill_color":{"value":"#abdda4"},"size":{"units":"screen","value":15}},"id":"f7ef47be-dc75-4019-9ba9-d2aec6402bf5","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"4afc3a26-6750-40f2-9bcd-e0ef3c3e1622","type":"BoxAnnotation"}},"id":"f535d3cd-0a31-4f09-9225-ac705e38ee2d","type":"BoxSelectTool"},{"attributes":{"line_alpha":{"value":0.8},"line_color":{"value":"#CCCCCC"},"line_width":{"value":5}},"id":"40a3535e-fab9-4ba5-a2ad-757fcea787c5","type":"MultiLine"},{"attributes":{"plot_height":400,"plot_width":400,"renderers":[{"id":"4afc3a26-6750-40f2-9bcd-e0ef3c3e1622","type":"BoxAnnotation"},{"id":"00da5df3-6d1c-4d55-9c14-0a640ea88ac1","type":"GraphRenderer"}],"title":{"id":"4f88b6ea-f69a-41e3-9f6b-d976b8ff1865","type":"Title"},"toolbar":{"id":"deb9e3a5-16a9-44be-b950-f5dd1d2bf26d","type":"Toolbar"},"x_range":{"id":"dfb40fb8-f7a9-41e8-9954-0676de8b28c7","type":"Range1d"},"x_scale":{"id":"b7945712-1e0a-4a7d-9da8-999ad9a2497c","type":"LinearScale"},"y_range":{"id":"2601691e-f222-40af-a4b3-94cccfd4f142","type":"Range1d"},"y_scale":{"id":"3dd7d9b6-38ef-451b-89bf-e5ebbe16a0dc","type":"LinearScale"}},"id":"94efb270-bca4-4432-b95b-0f3fcabf5238","type":"Plot"},{"attributes":{"callback":null,"column_names":["start","end"],"data":{"end":[1,2,3,4,5,6,7,8,10,11,12,13,17,19,21,31,2,3,7,13,17,19,21,30,3,7,8,9,13,27,28,32,7,12,13,6,10,6,10,16,16,30,32,33,33,33,32,33,32,33,32,33,33,32,33,32,33,25,27,29,32,33,25,27,31,31,29,33,33,31,33,32,33,32,33,32,33,33],"start":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,5,5,5,6,8,8,8,9,13,14,14,15,15,18,18,19,20,20,22,22,23,23,23,23,23,24,24,24,25,26,26,27,28,28,29,29,30,30,31,31,32]}},"id":"b2045bb3-91cb-4338-b990-1a86221d291a","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"98f824c4-3dd0-4a1f-8de7-9411e07f546d","type":"HoverTool"},{"id":"7c4a2339-fbc0-4b26-9073-faf8bb2d24f4","type":"TapTool"},{"id":"f535d3cd-0a31-4f09-9225-ac705e38ee2d","type":"BoxSelectTool"}]},"id":"deb9e3a5-16a9-44be-b950-f5dd1d2bf26d","type":"Toolbar"},{"attributes":{"data_source":{"id":"ebaacf16-58e3-45ef-b9d8-eaa6971e5718","type":"ColumnDataSource"},"glyph":{"id":"9d3d2fa4-0f36-4569-b1e5-9b75ada4d65c","type":"Circle"},"hover_glyph":{"id":"f7ef47be-dc75-4019-9ba9-d2aec6402bf5","type":"Circle"},"muted_glyph":null,"selection_glyph":{"id":"b83020de-2975-40db-9c35-3ad844f80ffc","type":"Circle"},"view":{"id":"b861661f-184e-4415-9c76-a8bc0d8101c7","type":"CDSView"}},"id":"2f505153-883e-4b14-a89f-12aec189430c","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Graph Interaction Demonstration"},"id":"4f88b6ea-f69a-41e3-9f6b-d976b8ff1865","type":"Title"},{"attributes":{"callback":null,"column_names":["index"],"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]}},"id":"ebaacf16-58e3-45ef-b9d8-eaa6971e5718","type":"ColumnDataSource"},{"attributes":{},"id":"c859853f-29af-4444-9440-fb950801ef38","type":"EdgesAndLinkedNodes"},{"attributes":{},"id":"58dc1c8d-a6e5-48b1-bf28-227bff4c8e06","type":"NodesAndLinkedEdges"},{"attributes":{},"id":"b7945712-1e0a-4a7d-9da8-999ad9a2497c","type":"LinearScale"},{"attributes":{"source":{"id":"ebaacf16-58e3-45ef-b9d8-eaa6971e5718","type":"ColumnDataSource"}},"id":"b861661f-184e-4415-9c76-a8bc0d8101c7","type":"CDSView"},{"attributes":{"data_source":{"id":"b2045bb3-91cb-4338-b990-1a86221d291a","type":"ColumnDataSource"},"glyph":{"id":"40a3535e-fab9-4ba5-a2ad-757fcea787c5","type":"MultiLine"},"hover_glyph":{"id":"33d9792b-ef16-4df4-a2c1-4f5978a98b4b","type":"MultiLine"},"muted_glyph":null,"selection_glyph":{"id":"9d831762-b65a-4820-b96e-44531d484712","type":"MultiLine"},"view":{"id":"08dc9b54-6c35-4c8e-ae3d-f2e09677a816","type":"CDSView"}},"id":"b1ef7109-628b-44cc-bccb-83b099c10650","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"dfb40fb8-f7a9-41e8-9954-0676de8b28c7","type":"Range1d"},{"attributes":{"source":{"id":"b2045bb3-91cb-4338-b990-1a86221d291a","type":"ColumnDataSource"}},"id":"08dc9b54-6c35-4c8e-ae3d-f2e09677a816","type":"CDSView"},{"attributes":{"edge_renderer":{"id":"b1ef7109-628b-44cc-bccb-83b099c10650","type":"GlyphRenderer"},"inspection_policy":{"id":"c859853f-29af-4444-9440-fb950801ef38","type":"EdgesAndLinkedNodes"},"layout_provider":{"id":"c293b7e7-1887-46a8-a41c-66533bba690c","type":"StaticLayoutProvider"},"node_renderer":{"id":"2f505153-883e-4b14-a89f-12aec189430c","type":"GlyphRenderer"},"selection_policy":{"id":"58dc1c8d-a6e5-48b1-bf28-227bff4c8e06","type":"NodesAndLinkedEdges"}},"id":"00da5df3-6d1c-4d55-9c14-0a640ea88ac1","type":"GraphRenderer"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.9829730996839018,0.18374951781657034],"10":[-0.2736629900720829,0.961825643172819],"11":[-0.4457383557765382,0.8951632913550623],"12":[-0.6026346363792563,0.7980172272802396],"13":[-0.739008917220659,0.6736956436465574],"14":[-0.8502171357296142,0.5264321628773557],"15":[-0.9324722294043558,0.3612416661871529],"16":[-0.9829730996839018,0.18374951781657037],"17":[-1.0,1.2246467991473532e-16],"18":[-0.9829730996839018,-0.18374951781657012],"19":[-0.9324722294043557,-0.3612416661871531],"2":[0.9324722294043558,0.3612416661871529],"20":[-0.8502171357296141,-0.5264321628773558],"21":[-0.7390089172206591,-0.6736956436465572],"22":[-0.6026346363792565,-0.7980172272802395],"23":[-0.44573835577653803,-0.8951632913550625],"24":[-0.2736629900720831,-0.961825643172819],"25":[-0.09226835946330192,-0.9957341762950346],"26":[0.09226835946330154,-0.9957341762950346],"27":[0.2736629900720828,-0.961825643172819],"28":[0.44573835577653853,-0.8951632913550622],"29":[0.6026346363792562,-0.7980172272802397],"3":[0.8502171357296142,0.5264321628773557],"30":[0.7390089172206592,-0.6736956436465571],"31":[0.8502171357296139,-0.5264321628773562],"32":[0.9324722294043558,-0.36124166618715303],"33":[0.9829730996839018,-0.18374951781657006],"4":[0.7390089172206591,0.6736956436465572],"5":[0.6026346363792564,0.7980172272802395],"6":[0.4457383557765383,0.8951632913550623],"7":[0.2736629900720828,0.961825643172819],"8":[0.09226835946330202,0.9957341762950345],"9":[-0.09226835946330189,0.9957341762950346]}},"id":"c293b7e7-1887-46a8-a41c-66533bba690c","type":"StaticLayoutProvider"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4afc3a26-6750-40f2-9bcd-e0ef3c3e1622","type":"BoxAnnotation"},{"attributes":{"callback":null,"tooltips":null},"id":"98f824c4-3dd0-4a1f-8de7-9411e07f546d","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#2b83ba"},"size":{"units":"screen","value":15}},"id":"9d3d2fa4-0f36-4569-b1e5-9b75ada4d65c","type":"Circle"},{"attributes":{"callback":null},"id":"7c4a2339-fbc0-4b26-9073-faf8bb2d24f4","type":"TapTool"},{"attributes":{},"id":"3dd7d9b6-38ef-451b-89bf-e5ebbe16a0dc","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#fdae61"},"size":{"units":"screen","value":15}},"id":"b83020de-2975-40db-9c35-3ad844f80ffc","type":"Circle"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"2601691e-f222-40af-a4b3-94cccfd4f142","type":"Range1d"}],"root_ids":["94efb270-bca4-4432-b95b-0f3fcabf5238"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"12ced9ee-1927-4365-b8aa-c00fb15499f8","elementid":"adf19148-24a1-4a7f-9d8e-102064772e72","modelid":"94efb270-bca4-4432-b95b-0f3fcabf5238"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
