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
      };var element = document.getElementById("92439f5e-7c18-439a-83ad-8a7e1597df85");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '92439f5e-7c18-439a-83ad-8a7e1597df85' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"df08c704-947c-4cb4-af72-1b743f49bbd8":{"roots":{"references":[{"attributes":{},"id":"ceb5aa76-f4a9-4532-ace0-002b5f068b32","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"ceb5aa76-f4a9-4532-ace0-002b5f068b32","type":"BasicTickFormatter"},"plot":{"id":"29f7a758-8928-4d13-a022-a6c39947bd5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"c56c99bf-5b3e-454f-8606-d9c979ce640a","type":"BasicTicker"}},"id":"49ccad86-da29-48df-8757-7daa455aa666","type":"LinearAxis"},{"attributes":{"callback":null},"id":"c6a26172-109c-44b8-b993-aef7e3579419","type":"DataRange1d"},{"attributes":{"callback":null},"id":"4dbf9fa0-8329-46cf-8f8f-cd5bd6de72b3","type":"TapTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"79c4a769-59c4-44c9-8288-a565879226e0","type":"Circle"},{"attributes":{"below":[{"id":"49ccad86-da29-48df-8757-7daa455aa666","type":"LinearAxis"}],"left":[{"id":"cb1d53a3-5d10-4eb8-97ea-0f4f40502e57","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"49ccad86-da29-48df-8757-7daa455aa666","type":"LinearAxis"},{"id":"03373067-bb94-40a9-bb9d-972c53542dfb","type":"Grid"},{"id":"cb1d53a3-5d10-4eb8-97ea-0f4f40502e57","type":"LinearAxis"},{"id":"30281c86-4663-4845-91b4-eabb5f01e4c1","type":"Grid"},{"id":"7d6748d0-e9f8-41d7-9d12-af5de37bf8a0","type":"GlyphRenderer"}],"title":{"id":"a545c6ea-07a0-4e1b-bf01-e828aadeac69","type":"Title"},"toolbar":{"id":"00176f83-0e8c-4b57-a9c2-3aeaf5d4b79a","type":"Toolbar"},"x_range":{"id":"c6a26172-109c-44b8-b993-aef7e3579419","type":"DataRange1d"},"x_scale":{"id":"0f45bf0a-290f-4f28-b310-e6b06cc96760","type":"LinearScale"},"y_range":{"id":"78f789ba-926e-4e63-ae4a-2fa090731729","type":"DataRange1d"},"y_scale":{"id":"4ccf5da6-530a-4c8e-a09a-45dedb029d92","type":"LinearScale"}},"id":"29f7a758-8928-4d13-a022-a6c39947bd5c","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"007f8c3a-9b4e-4599-8c50-eb4274a0e2b3","type":"ColumnDataSource"},"glyph":{"id":"79c4a769-59c4-44c9-8288-a565879226e0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21564075-4f28-435c-8e71-024a2d2c8be9","type":"Circle"},"selection_glyph":{"id":"f85b8d7b-ef0b-4be6-b9e8-1b099a165735","type":"Circle"},"view":{"id":"2358974b-a749-41b6-892f-8c1877cb937d","type":"CDSView"}},"id":"7d6748d0-e9f8-41d7-9d12-af5de37bf8a0","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":null}},"id":"f85b8d7b-ef0b-4be6-b9e8-1b099a165735","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"29f7a758-8928-4d13-a022-a6c39947bd5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"ade3c002-1f84-480a-bce2-bafe9f0bdd42","type":"BasicTicker"}},"id":"30281c86-4663-4845-91b4-eabb5f01e4c1","type":"Grid"},{"attributes":{},"id":"4ccf5da6-530a-4c8e-a09a-45dedb029d92","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"}},"id":"21564075-4f28-435c-8e71-024a2d2c8be9","type":"Circle"},{"attributes":{},"id":"c5cee918-419e-4b82-91ca-9071a021c350","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"df9a1147-7a72-4f6f-b4e6-645482fa62f6","type":"Selection"},"selection_policy":{"id":"a9fb98d6-a548-4e6d-98d0-d429ed720a80","type":"UnionRenderers"}},"id":"007f8c3a-9b4e-4599-8c50-eb4274a0e2b3","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"29f7a758-8928-4d13-a022-a6c39947bd5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"c56c99bf-5b3e-454f-8606-d9c979ce640a","type":"BasicTicker"}},"id":"03373067-bb94-40a9-bb9d-972c53542dfb","type":"Grid"},{"attributes":{},"id":"df9a1147-7a72-4f6f-b4e6-645482fa62f6","type":"Selection"},{"attributes":{},"id":"0f45bf0a-290f-4f28-b310-e6b06cc96760","type":"LinearScale"},{"attributes":{"source":{"id":"007f8c3a-9b4e-4599-8c50-eb4274a0e2b3","type":"ColumnDataSource"}},"id":"2358974b-a749-41b6-892f-8c1877cb937d","type":"CDSView"},{"attributes":{},"id":"c56c99bf-5b3e-454f-8606-d9c979ce640a","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"a545c6ea-07a0-4e1b-bf01-e828aadeac69","type":"Title"},{"attributes":{"callback":null},"id":"78f789ba-926e-4e63-ae4a-2fa090731729","type":"DataRange1d"},{"attributes":{},"id":"ade3c002-1f84-480a-bce2-bafe9f0bdd42","type":"BasicTicker"},{"attributes":{"formatter":{"id":"c5cee918-419e-4b82-91ca-9071a021c350","type":"BasicTickFormatter"},"plot":{"id":"29f7a758-8928-4d13-a022-a6c39947bd5c","subtype":"Figure","type":"Plot"},"ticker":{"id":"ade3c002-1f84-480a-bce2-bafe9f0bdd42","type":"BasicTicker"}},"id":"cb1d53a3-5d10-4eb8-97ea-0f4f40502e57","type":"LinearAxis"},{"attributes":{},"id":"a9fb98d6-a548-4e6d-98d0-d429ed720a80","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4dbf9fa0-8329-46cf-8f8f-cd5bd6de72b3","type":"TapTool"}]},"id":"00176f83-0e8c-4b57-a9c2-3aeaf5d4b79a","type":"Toolbar"}],"root_ids":["29f7a758-8928-4d13-a022-a6c39947bd5c"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"df08c704-947c-4cb4-af72-1b743f49bbd8","roots":{"29f7a758-8928-4d13-a022-a6c39947bd5c":"92439f5e-7c18-439a-83ad-8a7e1597df85"}}];
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