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
      };var element = document.getElementById("c74eaaa9-649f-4901-8aa7-f6fc920fe415");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c74eaaa9-649f-4901-8aa7-f6fc920fe415' but no matching script tag was found. ")
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
                    var docs_json = {"c7fe3257-d9d6-4afc-b855-f67e6a39bbf2":{"roots":{"references":[{"attributes":{},"id":"75bc7f54-830c-4d1c-a38d-52d3acd9d919","type":"LinearScale"},{"attributes":{"plot":{"id":"411a5895-eefb-4c4b-bf7e-1de49ae228b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"50c690e1-fefa-4411-bc97-69973ac1f37c","type":"BasicTicker"}},"id":"9d9b77ba-21a0-43b5-8b29-540e47e534d9","type":"Grid"},{"attributes":{},"id":"d1cefe72-7380-4548-ad19-64004428bf42","type":"BasicTickFormatter"},{"attributes":{},"id":"50c690e1-fefa-4411-bc97-69973ac1f37c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"ff1f83a6-7fee-4669-a7fc-52d634589938","type":"ColumnDataSource"},"glyph":{"id":"ec70e866-6ed3-4b3b-82a5-024f403aac70","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90529bfb-52a0-44fb-8984-6ef11d6dff27","type":"Circle"},"selection_glyph":{"id":"2384d33e-731c-48cd-a5ba-a1eab1e0d4c1","type":"Circle"},"view":{"id":"c52e8bda-5025-47a6-a0fc-866b7bd1990d","type":"CDSView"}},"id":"8bfe3268-4367-490b-99b3-f9a676110a45","type":"GlyphRenderer"},{"attributes":{"source":{"id":"ff1f83a6-7fee-4669-a7fc-52d634589938","type":"ColumnDataSource"}},"id":"c52e8bda-5025-47a6-a0fc-866b7bd1990d","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"411a5895-eefb-4c4b-bf7e-1de49ae228b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"77fd4fce-0ed5-4975-834d-6d8683e1efc0","type":"BasicTicker"}},"id":"7c09b2e6-496b-4046-932f-9d1b4854ddb5","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"ec70e866-6ed3-4b3b-82a5-024f403aac70","type":"Circle"},{"attributes":{"below":[{"id":"415fed22-f5a4-4376-8faa-1ed471d0f7b7","type":"LinearAxis"}],"left":[{"id":"8b711597-ab61-457c-826a-992e83c31d0a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"415fed22-f5a4-4376-8faa-1ed471d0f7b7","type":"LinearAxis"},{"id":"9d9b77ba-21a0-43b5-8b29-540e47e534d9","type":"Grid"},{"id":"8b711597-ab61-457c-826a-992e83c31d0a","type":"LinearAxis"},{"id":"7c09b2e6-496b-4046-932f-9d1b4854ddb5","type":"Grid"},{"id":"8bfe3268-4367-490b-99b3-f9a676110a45","type":"GlyphRenderer"}],"title":{"id":"63a78af5-670b-476f-809a-5e98dd002b0e","type":"Title"},"toolbar":{"id":"ba144167-d8f9-4883-bd20-b4ab8fff8fb5","type":"Toolbar"},"x_range":{"id":"581f7c02-6b68-41cb-ab8e-811489222b33","type":"DataRange1d"},"x_scale":{"id":"42f0ffaf-ccc6-48f3-ba37-43e05cad5774","type":"LinearScale"},"y_range":{"id":"422aa075-cc6f-45b6-a5aa-36061fb9a583","type":"DataRange1d"},"y_scale":{"id":"75bc7f54-830c-4d1c-a38d-52d3acd9d919","type":"LinearScale"}},"id":"411a5895-eefb-4c4b-bf7e-1de49ae228b2","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"00cab1a8-73bc-44ba-8758-2bf5b066aab6","type":"TapTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"00cab1a8-73bc-44ba-8758-2bf5b066aab6","type":"TapTool"}]},"id":"ba144167-d8f9-4883-bd20-b4ab8fff8fb5","type":"Toolbar"},{"attributes":{},"id":"5179b1fb-f1c9-40b6-8cc1-c2e08a420930","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"2384d33e-731c-48cd-a5ba-a1eab1e0d4c1","type":"Circle"},{"attributes":{"formatter":{"id":"d1cefe72-7380-4548-ad19-64004428bf42","type":"BasicTickFormatter"},"plot":{"id":"411a5895-eefb-4c4b-bf7e-1de49ae228b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"50c690e1-fefa-4411-bc97-69973ac1f37c","type":"BasicTicker"}},"id":"415fed22-f5a4-4376-8faa-1ed471d0f7b7","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"90529bfb-52a0-44fb-8984-6ef11d6dff27","type":"Circle"},{"attributes":{},"id":"77fd4fce-0ed5-4975-834d-6d8683e1efc0","type":"BasicTicker"},{"attributes":{},"id":"42f0ffaf-ccc6-48f3-ba37-43e05cad5774","type":"LinearScale"},{"attributes":{"formatter":{"id":"5179b1fb-f1c9-40b6-8cc1-c2e08a420930","type":"BasicTickFormatter"},"plot":{"id":"411a5895-eefb-4c4b-bf7e-1de49ae228b2","subtype":"Figure","type":"Plot"},"ticker":{"id":"77fd4fce-0ed5-4975-834d-6d8683e1efc0","type":"BasicTicker"}},"id":"8b711597-ab61-457c-826a-992e83c31d0a","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"ff1f83a6-7fee-4669-a7fc-52d634589938","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"63a78af5-670b-476f-809a-5e98dd002b0e","type":"Title"},{"attributes":{"callback":null},"id":"581f7c02-6b68-41cb-ab8e-811489222b33","type":"DataRange1d"},{"attributes":{"callback":null},"id":"422aa075-cc6f-45b6-a5aa-36061fb9a583","type":"DataRange1d"}],"root_ids":["411a5895-eefb-4c4b-bf7e-1de49ae228b2"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"c7fe3257-d9d6-4afc-b855-f67e6a39bbf2","elementid":"c74eaaa9-649f-4901-8aa7-f6fc920fe415","modelid":"411a5895-eefb-4c4b-bf7e-1de49ae228b2"}];
                
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
