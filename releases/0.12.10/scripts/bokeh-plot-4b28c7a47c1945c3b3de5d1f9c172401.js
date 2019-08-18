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
      };var element = document.getElementById("fad4bc6e-e129-4573-8268-9b4f37af21b2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fad4bc6e-e129-4573-8268-9b4f37af21b2' but no matching script tag was found. ")
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
                    var docs_json = {"e05954b9-54ef-4f99-ab55-0ecb386fe1f5":{"roots":{"references":[{"attributes":{},"id":"57bbb2d0-a58a-4198-af83-8b34d1883f04","type":"BasicTicker"},{"attributes":{},"id":"a82e8ca3-a5f5-414b-bc2c-ff8574b32038","type":"LinearScale"},{"attributes":{},"id":"238fb099-dfa8-4791-b056-cd4294533e91","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["index"],"data":{"fill_color":["#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f"],"index":[0,1,2,3,4,5,6,7]}},"id":"863f7bc0-e540-4122-a9a0-bee63863405b","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"238fb099-dfa8-4791-b056-cd4294533e91","type":"BasicTickFormatter"},"plot":{"id":"eb0c9f18-63c8-42f5-8347-bc035dbade5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"9631d070-dd3b-4ddf-a310-7454f8c485f1","type":"BasicTicker"}},"id":"e1eade31-dce7-436f-a718-4caffd84da26","type":"LinearAxis"},{"attributes":{},"id":"67b81365-4300-4ab5-81e5-06dee901c80f","type":"MultiLine"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"11fffb71-d882-4172-85b2-bc3507ee4a9e","type":"Toolbar"},{"attributes":{"source":{"id":"607dc440-85dc-46ba-b143-fbb2ebb6597e","type":"ColumnDataSource"}},"id":"582bfcbe-6187-4ced-b285-6f23e3df14d1","type":"CDSView"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"3ee4ff09-1f04-4e4d-9bc0-2c09ca24ff8f","type":"Range1d"},{"attributes":{"data_source":{"id":"607dc440-85dc-46ba-b143-fbb2ebb6597e","type":"ColumnDataSource"},"glyph":{"id":"67b81365-4300-4ab5-81e5-06dee901c80f","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"582bfcbe-6187-4ced-b285-6f23e3df14d1","type":"CDSView"}},"id":"00bdfeba-f05a-4fef-8c26-676e34bbe7c3","type":"GlyphRenderer"},{"attributes":{},"id":"9631d070-dd3b-4ddf-a310-7454f8c485f1","type":"BasicTicker"},{"attributes":{"source":{"id":"863f7bc0-e540-4122-a9a0-bee63863405b","type":"ColumnDataSource"}},"id":"a6c5ad77-8644-4358-a892-018da3bedc2d","type":"CDSView"},{"attributes":{},"id":"fea5e413-d14e-48ba-83b1-5f467294683f","type":"BasicTickFormatter"},{"attributes":{"graph_layout":{"0":[1.0,0.0],"1":[0.7071067811865476,0.7071067811865475],"2":[6.123233995736766e-17,1.0],"3":[-0.7071067811865475,0.7071067811865476],"4":[-1.0,1.2246467991473532e-16],"5":[-0.7071067811865477,-0.7071067811865475],"6":[-1.8369701987210297e-16,-1.0],"7":[0.7071067811865474,-0.7071067811865477]}},"id":"626c38fa-cddc-4f7a-9fbc-5064ecce4a4a","type":"StaticLayoutProvider"},{"attributes":{"edge_renderer":{"id":"00bdfeba-f05a-4fef-8c26-676e34bbe7c3","type":"GlyphRenderer"},"inspection_policy":{"id":"c04dbd04-dc94-4e7e-be01-ba626bdc9e92","type":"NodesOnly"},"layout_provider":{"id":"626c38fa-cddc-4f7a-9fbc-5064ecce4a4a","type":"StaticLayoutProvider"},"node_renderer":{"id":"8c6e7911-ed47-4880-a9b1-6dddf5e51a8e","type":"GlyphRenderer"},"selection_policy":{"id":"01bf6664-899a-4669-b462-ce1c5c44f746","type":"NodesOnly"}},"id":"d23cb650-9ad2-4b1d-b3a4-b4a50dff9420","type":"GraphRenderer"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"77f44e1a-a3df-474d-9f67-12882ee89cec","type":"Range1d"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":0.1},"width":{"units":"data","value":0.2}},"id":"c07ce215-c473-4165-8017-02742d87f299","type":"Oval"},{"attributes":{"plot":null,"text":"Graph Layout Demonstration"},"id":"2c112b51-1059-41c6-b3a8-4cf89fa1230f","type":"Title"},{"attributes":{},"id":"01bf6664-899a-4669-b462-ce1c5c44f746","type":"NodesOnly"},{"attributes":{"plot":{"id":"eb0c9f18-63c8-42f5-8347-bc035dbade5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"9631d070-dd3b-4ddf-a310-7454f8c485f1","type":"BasicTicker"}},"id":"a975f9a7-8b5c-465d-8250-9f46f08bde82","type":"Grid"},{"attributes":{"below":[{"id":"e1eade31-dce7-436f-a718-4caffd84da26","type":"LinearAxis"}],"left":[{"id":"9e5930d6-117a-4d3b-b17b-898c8d07fb5d","type":"LinearAxis"}],"renderers":[{"id":"e1eade31-dce7-436f-a718-4caffd84da26","type":"LinearAxis"},{"id":"a975f9a7-8b5c-465d-8250-9f46f08bde82","type":"Grid"},{"id":"9e5930d6-117a-4d3b-b17b-898c8d07fb5d","type":"LinearAxis"},{"id":"a2ff20e0-41ad-4eeb-b827-ac82e9d3e541","type":"Grid"},{"id":"d23cb650-9ad2-4b1d-b3a4-b4a50dff9420","type":"GraphRenderer"}],"title":{"id":"2c112b51-1059-41c6-b3a8-4cf89fa1230f","type":"Title"},"toolbar":{"id":"11fffb71-d882-4172-85b2-bc3507ee4a9e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ee4ff09-1f04-4e4d-9bc0-2c09ca24ff8f","type":"Range1d"},"x_scale":{"id":"a82e8ca3-a5f5-414b-bc2c-ff8574b32038","type":"LinearScale"},"y_range":{"id":"77f44e1a-a3df-474d-9f67-12882ee89cec","type":"Range1d"},"y_scale":{"id":"d57da670-f93f-4e1a-935f-fa65bcb6b071","type":"LinearScale"}},"id":"eb0c9f18-63c8-42f5-8347-bc035dbade5e","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"863f7bc0-e540-4122-a9a0-bee63863405b","type":"ColumnDataSource"},"glyph":{"id":"c07ce215-c473-4165-8017-02742d87f299","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"a6c5ad77-8644-4358-a892-018da3bedc2d","type":"CDSView"}},"id":"8c6e7911-ed47-4880-a9b1-6dddf5e51a8e","type":"GlyphRenderer"},{"attributes":{},"id":"d57da670-f93f-4e1a-935f-fa65bcb6b071","type":"LinearScale"},{"attributes":{"formatter":{"id":"fea5e413-d14e-48ba-83b1-5f467294683f","type":"BasicTickFormatter"},"plot":{"id":"eb0c9f18-63c8-42f5-8347-bc035dbade5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"57bbb2d0-a58a-4198-af83-8b34d1883f04","type":"BasicTicker"}},"id":"9e5930d6-117a-4d3b-b17b-898c8d07fb5d","type":"LinearAxis"},{"attributes":{},"id":"c04dbd04-dc94-4e7e-be01-ba626bdc9e92","type":"NodesOnly"},{"attributes":{"dimension":1,"plot":{"id":"eb0c9f18-63c8-42f5-8347-bc035dbade5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"57bbb2d0-a58a-4198-af83-8b34d1883f04","type":"BasicTicker"}},"id":"a2ff20e0-41ad-4eeb-b827-ac82e9d3e541","type":"Grid"},{"attributes":{"callback":null,"column_names":["start","end"],"data":{"end":[0,1,2,3,4,5,6,7],"start":[0,0,0,0,0,0,0,0]}},"id":"607dc440-85dc-46ba-b143-fbb2ebb6597e","type":"ColumnDataSource"}],"root_ids":["eb0c9f18-63c8-42f5-8347-bc035dbade5e"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"e05954b9-54ef-4f99-ab55-0ecb386fe1f5","elementid":"fad4bc6e-e129-4573-8268-9b4f37af21b2","modelid":"eb0c9f18-63c8-42f5-8347-bc035dbade5e"}];
                
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
