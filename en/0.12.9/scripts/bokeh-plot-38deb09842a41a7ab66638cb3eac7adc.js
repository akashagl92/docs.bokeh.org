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
      };var element = document.getElementById("f201f7be-c5bb-4eba-b82c-14e7ce44b0ed");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f201f7be-c5bb-4eba-b82c-14e7ce44b0ed' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"94fd6519-be60-476d-8d49-a7e4b17c3820":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["start","end"],"data":{"end":[0,1,2,3,4,5,6,7],"start":[0,0,0,0,0,0,0,0]}},"id":"3b180047-331c-4ca8-b2f9-be0bafc50afa","type":"ColumnDataSource"},{"attributes":{},"id":"7161197d-e4e0-40f0-970d-4c8a7f6fd414","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2fcd8c9e-5d3c-4f94-9724-9df2363f8a64","type":"Toolbar"},{"attributes":{"edge_renderer":{"id":"6781db7f-d6f4-4f0c-928b-349d25635975","type":"GlyphRenderer"},"inspection_policy":{"id":"10c45e84-d136-4a68-87cd-5ac977e96b08","type":"NodesOnly"},"layout_provider":{"id":"442cf23d-818b-4c88-b121-590bcde536d3","type":"StaticLayoutProvider"},"node_renderer":{"id":"08dbe421-d3d1-491d-8f9d-b21a1d37a85c","type":"GlyphRenderer"},"selection_policy":{"id":"4cc8a0eb-2219-49f8-8a27-6e4af338c144","type":"NodesOnly"}},"id":"4eb93bb1-18a7-425d-bcbc-7a4703fc520e","type":"GraphRenderer"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.7071067811865476,0.7071067811865475],"2":[6.123233995736766e-17,1.0],"3":[-0.7071067811865475,0.7071067811865476],"4":[-1.0,1.2246467991473532e-16],"5":[-0.7071067811865477,-0.7071067811865475],"6":[-1.8369701987210297e-16,-1.0],"7":[0.7071067811865475,-0.7071067811865477]}},"id":"442cf23d-818b-4c88-b121-590bcde536d3","type":"StaticLayoutProvider"},{"attributes":{"formatter":{"id":"bdb1eae7-3196-49e6-b1f1-e900a5ed09f5","type":"BasicTickFormatter"},"plot":{"id":"2e5db6ca-c203-4103-a8a2-1429155361ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"ef114537-4eb9-4ad5-b2e0-e5a9e36ca526","type":"BasicTicker"}},"id":"d242ad24-b1f4-445c-b3c5-1a2013a1d4f9","type":"LinearAxis"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":0.1},"width":{"units":"data","value":0.2}},"id":"f2ab03ad-e869-4faa-ad7f-e47a014e52b4","type":"Oval"},{"attributes":{"plot":null,"text":"Graph Layout Demonstration"},"id":"164a9efc-4027-48f3-a6a8-59e85ad4dd1d","type":"Title"},{"attributes":{},"id":"43f9840a-c422-4ac5-9161-4887a62c07a4","type":"BasicTicker"},{"attributes":{},"id":"bdb1eae7-3196-49e6-b1f1-e900a5ed09f5","type":"BasicTickFormatter"},{"attributes":{},"id":"10c45e84-d136-4a68-87cd-5ac977e96b08","type":"NodesOnly"},{"attributes":{"below":[{"id":"00056d34-5c62-4db5-9d2f-6a9b5fa3ba73","type":"LinearAxis"}],"left":[{"id":"d242ad24-b1f4-445c-b3c5-1a2013a1d4f9","type":"LinearAxis"}],"renderers":[{"id":"00056d34-5c62-4db5-9d2f-6a9b5fa3ba73","type":"LinearAxis"},{"id":"7f52a5e1-b732-4d11-be23-ab775af74423","type":"Grid"},{"id":"d242ad24-b1f4-445c-b3c5-1a2013a1d4f9","type":"LinearAxis"},{"id":"d6f9b7ab-42a3-4324-8379-5a91fd334c52","type":"Grid"},{"id":"4eb93bb1-18a7-425d-bcbc-7a4703fc520e","type":"GraphRenderer"}],"title":{"id":"164a9efc-4027-48f3-a6a8-59e85ad4dd1d","type":"Title"},"toolbar":{"id":"2fcd8c9e-5d3c-4f94-9724-9df2363f8a64","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e5cdf5e9-93a6-4e9a-8cc6-4d7c6634a74b","type":"Range1d"},"x_scale":{"id":"7161197d-e4e0-40f0-970d-4c8a7f6fd414","type":"LinearScale"},"y_range":{"id":"e0b0f19b-10d1-43f3-9bf5-04c4c066e0e9","type":"Range1d"},"y_scale":{"id":"e331ba97-9e6a-4a76-b4d4-afa660886797","type":"LinearScale"}},"id":"2e5db6ca-c203-4103-a8a2-1429155361ca","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"a845d5b1-9b0c-4ebd-86ff-8350530efc87","type":"BasicTickFormatter"},"plot":{"id":"2e5db6ca-c203-4103-a8a2-1429155361ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"43f9840a-c422-4ac5-9161-4887a62c07a4","type":"BasicTicker"}},"id":"00056d34-5c62-4db5-9d2f-6a9b5fa3ba73","type":"LinearAxis"},{"attributes":{},"id":"4cc8a0eb-2219-49f8-8a27-6e4af338c144","type":"NodesOnly"},{"attributes":{"source":{"id":"3b180047-331c-4ca8-b2f9-be0bafc50afa","type":"ColumnDataSource"}},"id":"ba35dc2e-9d21-4b5a-832d-badb0233b88c","type":"CDSView"},{"attributes":{},"id":"ef114537-4eb9-4ad5-b2e0-e5a9e36ca526","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["index"],"data":{"fill_color":["#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f"],"index":[0,1,2,3,4,5,6,7]}},"id":"706b954f-1ff0-4515-8d08-2922aa21f9c9","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"e0b0f19b-10d1-43f3-9bf5-04c4c066e0e9","type":"Range1d"},{"attributes":{"data_source":{"id":"3b180047-331c-4ca8-b2f9-be0bafc50afa","type":"ColumnDataSource"},"glyph":{"id":"51f2760f-65e7-479b-a49c-b6950a400771","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ba35dc2e-9d21-4b5a-832d-badb0233b88c","type":"CDSView"}},"id":"6781db7f-d6f4-4f0c-928b-349d25635975","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"2e5db6ca-c203-4103-a8a2-1429155361ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"ef114537-4eb9-4ad5-b2e0-e5a9e36ca526","type":"BasicTicker"}},"id":"d6f9b7ab-42a3-4324-8379-5a91fd334c52","type":"Grid"},{"attributes":{"data_source":{"id":"706b954f-1ff0-4515-8d08-2922aa21f9c9","type":"ColumnDataSource"},"glyph":{"id":"f2ab03ad-e869-4faa-ad7f-e47a014e52b4","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"248d7f81-989e-4359-a78c-e40455194782","type":"CDSView"}},"id":"08dbe421-d3d1-491d-8f9d-b21a1d37a85c","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"e5cdf5e9-93a6-4e9a-8cc6-4d7c6634a74b","type":"Range1d"},{"attributes":{},"id":"a845d5b1-9b0c-4ebd-86ff-8350530efc87","type":"BasicTickFormatter"},{"attributes":{},"id":"e331ba97-9e6a-4a76-b4d4-afa660886797","type":"LinearScale"},{"attributes":{"source":{"id":"706b954f-1ff0-4515-8d08-2922aa21f9c9","type":"ColumnDataSource"}},"id":"248d7f81-989e-4359-a78c-e40455194782","type":"CDSView"},{"attributes":{"plot":{"id":"2e5db6ca-c203-4103-a8a2-1429155361ca","subtype":"Figure","type":"Plot"},"ticker":{"id":"43f9840a-c422-4ac5-9161-4887a62c07a4","type":"BasicTicker"}},"id":"7f52a5e1-b732-4d11-be23-ab775af74423","type":"Grid"},{"attributes":{},"id":"51f2760f-65e7-479b-a49c-b6950a400771","type":"MultiLine"}],"root_ids":["2e5db6ca-c203-4103-a8a2-1429155361ca"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"94fd6519-be60-476d-8d49-a7e4b17c3820","elementid":"f201f7be-c5bb-4eba-b82c-14e7ce44b0ed","modelid":"2e5db6ca-c203-4103-a8a2-1429155361ca"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
