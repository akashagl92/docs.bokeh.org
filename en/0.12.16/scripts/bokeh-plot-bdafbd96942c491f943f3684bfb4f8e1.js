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
      };var element = document.getElementById("058a836e-e189-4d9c-bc3d-ba2501a36959");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '058a836e-e189-4d9c-bc3d-ba2501a36959' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
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
                    
                  var docs_json = '{"e321979d-9cec-4bed-be29-59a877010380":{"roots":{"references":[{"attributes":{},"id":"20c0bb02-50d2-45a0-993d-6c2ae3c6a7c8","type":"LinearScale"},{"attributes":{"plot":{"id":"ef2d5029-6472-485f-965a-6170a0ded1bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"08a08f74-1a2e-4267-b2fd-674232551349","type":"BasicTicker"}},"id":"651ba476-cda0-408f-835f-0333bfea05c9","type":"Grid"},{"attributes":{"below":[{"id":"8b60794a-f178-4cc5-8fa8-b2f8106831ab","type":"LinearAxis"}],"left":[{"id":"7b470616-aeac-4324-8c97-0b84727f86f1","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"8b60794a-f178-4cc5-8fa8-b2f8106831ab","type":"LinearAxis"},{"id":"651ba476-cda0-408f-835f-0333bfea05c9","type":"Grid"},{"id":"7b470616-aeac-4324-8c97-0b84727f86f1","type":"LinearAxis"},{"id":"4c79c71d-57d1-45b7-88bb-ccf5a34b390d","type":"Grid"},{"id":"8c4298db-e5ae-43b1-800b-03c511768fc4","type":"GlyphRenderer"}],"title":{"id":"c62bac81-d0e6-4281-a036-ba5400d78f94","type":"Title"},"toolbar":{"id":"cd2a6788-09a1-4039-8cc8-8308897ed174","type":"Toolbar"},"x_range":{"id":"4a3b9728-9f24-481d-b563-aa0f930877f5","type":"DataRange1d"},"x_scale":{"id":"f9e9dddd-3b3a-4a70-b708-8a019a84d27e","type":"LinearScale"},"y_range":{"id":"8c36b9b4-ff69-423e-b847-0bc2c2c6cc4f","type":"DataRange1d"},"y_scale":{"id":"20c0bb02-50d2-45a0-993d-6c2ae3c6a7c8","type":"LinearScale"}},"id":"ef2d5029-6472-485f-965a-6170a0ded1bb","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"4a3b9728-9f24-481d-b563-aa0f930877f5","type":"DataRange1d"},{"attributes":{"callback":null},"id":"8c36b9b4-ff69-423e-b847-0bc2c2c6cc4f","type":"DataRange1d"},{"attributes":{},"id":"4f7c9580-f2ee-4a71-89ae-4904c2d221b5","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ca3ee0d9-b03e-4a8c-ab1f-ce8bcffe6f06","type":"PanTool"},{"id":"29f989f9-e367-4f81-8996-2ea2db9146e0","type":"ResetTool"},{"id":"24c1daf9-0330-45a7-a946-b65f02b44ba5","type":"SaveTool"}]},"id":"cd2a6788-09a1-4039-8cc8-8308897ed174","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"28948fdd-390d-44e6-8f06-1fb3fd411c5f","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"c62bac81-d0e6-4281-a036-ba5400d78f94","type":"Title"},{"attributes":{},"id":"08a08f74-1a2e-4267-b2fd-674232551349","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]},"selected":{"id":"f3eab14f-6fa3-4e3e-9c94-fc73aea60855","type":"Selection"},"selection_policy":{"id":"6e78024b-3897-4d5d-be5c-7aa82c1fc232","type":"UnionRenderers"}},"id":"da77abc4-ab73-4014-a3ab-84775ccee4c6","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"5788f1cd-acb3-4e94-a3bf-c142b30e38e4","type":"BasicTickFormatter"},"plot":{"id":"ef2d5029-6472-485f-965a-6170a0ded1bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f7c9580-f2ee-4a71-89ae-4904c2d221b5","type":"BasicTicker"}},"id":"7b470616-aeac-4324-8c97-0b84727f86f1","type":"LinearAxis"},{"attributes":{},"id":"c8b8b633-10fb-4e70-9be0-8c969e7891c1","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"793a06ba-9d8e-4b9e-bde5-8bc700c0f87f","type":"Circle"},{"attributes":{"formatter":{"id":"c8b8b633-10fb-4e70-9be0-8c969e7891c1","type":"BasicTickFormatter"},"plot":{"id":"ef2d5029-6472-485f-965a-6170a0ded1bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"08a08f74-1a2e-4267-b2fd-674232551349","type":"BasicTicker"}},"id":"8b60794a-f178-4cc5-8fa8-b2f8106831ab","type":"LinearAxis"},{"attributes":{"data_source":{"id":"da77abc4-ab73-4014-a3ab-84775ccee4c6","type":"ColumnDataSource"},"glyph":{"id":"793a06ba-9d8e-4b9e-bde5-8bc700c0f87f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"28948fdd-390d-44e6-8f06-1fb3fd411c5f","type":"Circle"},"selection_glyph":null,"view":{"id":"3fa54657-3d4f-4be0-9d0f-440c37037f4f","type":"CDSView"}},"id":"8c4298db-e5ae-43b1-800b-03c511768fc4","type":"GlyphRenderer"},{"attributes":{"source":{"id":"da77abc4-ab73-4014-a3ab-84775ccee4c6","type":"ColumnDataSource"}},"id":"3fa54657-3d4f-4be0-9d0f-440c37037f4f","type":"CDSView"},{"attributes":{},"id":"f3eab14f-6fa3-4e3e-9c94-fc73aea60855","type":"Selection"},{"attributes":{},"id":"24c1daf9-0330-45a7-a946-b65f02b44ba5","type":"SaveTool"},{"attributes":{},"id":"29f989f9-e367-4f81-8996-2ea2db9146e0","type":"ResetTool"},{"attributes":{},"id":"6e78024b-3897-4d5d-be5c-7aa82c1fc232","type":"UnionRenderers"},{"attributes":{},"id":"f9e9dddd-3b3a-4a70-b708-8a019a84d27e","type":"LinearScale"},{"attributes":{},"id":"5788f1cd-acb3-4e94-a3bf-c142b30e38e4","type":"BasicTickFormatter"},{"attributes":{},"id":"ca3ee0d9-b03e-4a8c-ab1f-ce8bcffe6f06","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"ef2d5029-6472-485f-965a-6170a0ded1bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f7c9580-f2ee-4a71-89ae-4904c2d221b5","type":"BasicTicker"}},"id":"4c79c71d-57d1-45b7-88bb-ccf5a34b390d","type":"Grid"}],"root_ids":["ef2d5029-6472-485f-965a-6170a0ded1bb"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"e321979d-9cec-4bed-be29-59a877010380","elementid":"058a836e-e189-4d9c-bc3d-ba2501a36959","modelid":"ef2d5029-6472-485f-965a-6170a0ded1bb"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
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