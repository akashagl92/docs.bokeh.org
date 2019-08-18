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
      };var element = document.getElementById("6c846c66-4aeb-4224-8017-c731230669d3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6c846c66-4aeb-4224-8017-c731230669d3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"d6408e55-06ab-4400-a049-d08e4a2651ad":{"roots":{"references":[{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.7071067811865476,0.7071067811865475],"2":[6.123233995736766e-17,1.0],"3":[-0.7071067811865475,0.7071067811865476],"4":[-1.0,1.2246467991473532e-16],"5":[-0.7071067811865477,-0.7071067811865475],"6":[-1.8369701987210297e-16,-1.0],"7":[0.7071067811865474,-0.7071067811865477]}},"id":"d2946021-7728-4442-9a3e-d4726ec46468","type":"StaticLayoutProvider"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"e8f99fc6-45ad-4c1d-a515-5e7b4cd06e7c","type":"Range1d"},{"attributes":{},"id":"c498c327-9637-4244-a201-064e78d4c8a0","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"e0faf07a-f250-4fe4-a18a-efe702cda30f","subtype":"Figure","type":"Plot"},"ticker":{"id":"735b3232-d892-427f-ac93-ddf195a858ca","type":"BasicTicker"}},"id":"6c88dfa9-5023-4ac2-9266-6f86f03ae80f","type":"Grid"},{"attributes":{},"id":"25420a63-6258-49f2-af11-60f519f7e184","type":"NodesOnly"},{"attributes":{},"id":"735b3232-d892-427f-ac93-ddf195a858ca","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["index"],"data":{"fill_color":["#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f"],"index":[0,1,2,3,4,5,6,7]}},"id":"14df85f0-f04e-4d07-a875-d54087532529","type":"ColumnDataSource"},{"attributes":{"source":{"id":"14df85f0-f04e-4d07-a875-d54087532529","type":"ColumnDataSource"}},"id":"13197ab2-186e-4eb0-98cd-1ba4a5d506a8","type":"CDSView"},{"attributes":{},"id":"3e88bd30-de55-43e2-89e7-82f985790cce","type":"NodesOnly"},{"attributes":{"data_source":{"id":"e4a5834c-64f5-4415-8208-c7c6336be1a9","type":"ColumnDataSource"},"glyph":{"id":"760bc73a-154a-4677-8427-dd5cbf602ff1","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"7fded62b-fcb9-438b-afaf-bb4f96e8a1e6","type":"CDSView"}},"id":"197b7a68-d325-4801-9e2a-49e4e94a7688","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"001c1d0f-0fb8-48aa-bdf0-d03d911bfa7d","type":"LinearAxis"}],"left":[{"id":"e35ecb48-b464-4af8-8b3d-8b0a2448646a","type":"LinearAxis"}],"renderers":[{"id":"001c1d0f-0fb8-48aa-bdf0-d03d911bfa7d","type":"LinearAxis"},{"id":"6c88dfa9-5023-4ac2-9266-6f86f03ae80f","type":"Grid"},{"id":"e35ecb48-b464-4af8-8b3d-8b0a2448646a","type":"LinearAxis"},{"id":"afc49d0a-442a-49af-bb7c-771c2e1a79d3","type":"Grid"},{"id":"b8f92d0b-5199-4d38-9aa3-40dd29bb1068","type":"GraphRenderer"}],"title":{"id":"bfbcd658-b8ec-404c-b25f-fc0f1f1b907a","type":"Title"},"toolbar":{"id":"5683b9bb-843b-46c6-b41c-435afb0b189f","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e8f99fc6-45ad-4c1d-a515-5e7b4cd06e7c","type":"Range1d"},"x_scale":{"id":"13e1c53b-33a1-49e1-8b8a-1edb9c925b30","type":"LinearScale"},"y_range":{"id":"49aa3b08-3290-41c4-ab44-a254b780314f","type":"Range1d"},"y_scale":{"id":"d528663b-32ea-4bea-a40a-113418554a99","type":"LinearScale"}},"id":"e0faf07a-f250-4fe4-a18a-efe702cda30f","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"49aa3b08-3290-41c4-ab44-a254b780314f","type":"Range1d"},{"attributes":{},"id":"8b793ba8-512b-4d7a-ba28-38ab7352b618","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Graph Layout Demonstration"},"id":"bfbcd658-b8ec-404c-b25f-fc0f1f1b907a","type":"Title"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":0.1},"width":{"units":"data","value":0.2}},"id":"a7c6eee6-e0ae-47b2-b720-617055a76947","type":"Oval"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5683b9bb-843b-46c6-b41c-435afb0b189f","type":"Toolbar"},{"attributes":{},"id":"760bc73a-154a-4677-8427-dd5cbf602ff1","type":"MultiLine"},{"attributes":{},"id":"13e1c53b-33a1-49e1-8b8a-1edb9c925b30","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["start","end"],"data":{"end":[0,1,2,3,4,5,6,7],"start":[0,0,0,0,0,0,0,0]}},"id":"e4a5834c-64f5-4415-8208-c7c6336be1a9","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"14df85f0-f04e-4d07-a875-d54087532529","type":"ColumnDataSource"},"glyph":{"id":"a7c6eee6-e0ae-47b2-b720-617055a76947","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"13197ab2-186e-4eb0-98cd-1ba4a5d506a8","type":"CDSView"}},"id":"1ccb60d9-737b-4730-9f4c-aff0373c760d","type":"GlyphRenderer"},{"attributes":{"edge_renderer":{"id":"197b7a68-d325-4801-9e2a-49e4e94a7688","type":"GlyphRenderer"},"inspection_policy":{"id":"3e88bd30-de55-43e2-89e7-82f985790cce","type":"NodesOnly"},"layout_provider":{"id":"d2946021-7728-4442-9a3e-d4726ec46468","type":"StaticLayoutProvider"},"node_renderer":{"id":"1ccb60d9-737b-4730-9f4c-aff0373c760d","type":"GlyphRenderer"},"selection_policy":{"id":"25420a63-6258-49f2-af11-60f519f7e184","type":"NodesOnly"}},"id":"b8f92d0b-5199-4d38-9aa3-40dd29bb1068","type":"GraphRenderer"},{"attributes":{},"id":"d528663b-32ea-4bea-a40a-113418554a99","type":"LinearScale"},{"attributes":{},"id":"1965ee94-43c0-425a-ba8d-0fd25f845e79","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e0faf07a-f250-4fe4-a18a-efe702cda30f","subtype":"Figure","type":"Plot"},"ticker":{"id":"1965ee94-43c0-425a-ba8d-0fd25f845e79","type":"BasicTicker"}},"id":"afc49d0a-442a-49af-bb7c-771c2e1a79d3","type":"Grid"},{"attributes":{"source":{"id":"e4a5834c-64f5-4415-8208-c7c6336be1a9","type":"ColumnDataSource"}},"id":"7fded62b-fcb9-438b-afaf-bb4f96e8a1e6","type":"CDSView"},{"attributes":{"formatter":{"id":"8b793ba8-512b-4d7a-ba28-38ab7352b618","type":"BasicTickFormatter"},"plot":{"id":"e0faf07a-f250-4fe4-a18a-efe702cda30f","subtype":"Figure","type":"Plot"},"ticker":{"id":"735b3232-d892-427f-ac93-ddf195a858ca","type":"BasicTicker"}},"id":"001c1d0f-0fb8-48aa-bdf0-d03d911bfa7d","type":"LinearAxis"},{"attributes":{"formatter":{"id":"c498c327-9637-4244-a201-064e78d4c8a0","type":"BasicTickFormatter"},"plot":{"id":"e0faf07a-f250-4fe4-a18a-efe702cda30f","subtype":"Figure","type":"Plot"},"ticker":{"id":"1965ee94-43c0-425a-ba8d-0fd25f845e79","type":"BasicTicker"}},"id":"e35ecb48-b464-4af8-8b3d-8b0a2448646a","type":"LinearAxis"}],"root_ids":["e0faf07a-f250-4fe4-a18a-efe702cda30f"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"d6408e55-06ab-4400-a049-d08e4a2651ad","elementid":"6c846c66-4aeb-4224-8017-c731230669d3","modelid":"e0faf07a-f250-4fe4-a18a-efe702cda30f"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
