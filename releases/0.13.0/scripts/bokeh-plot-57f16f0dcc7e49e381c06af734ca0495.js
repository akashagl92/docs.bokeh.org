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
      };var element = document.getElementById("a79848bb-be7f-4ded-8b2c-e1a2c7632b6b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a79848bb-be7f-4ded-8b2c-e1a2c7632b6b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5c132af0-1a62-4031-82ed-0373707b6f40":{"roots":{"references":[{"attributes":{},"id":"13e3034b-38f6-4402-87dc-97cbe19d1fe9","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"13e3034b-38f6-4402-87dc-97cbe19d1fe9","type":"Selection"},"selection_policy":{"id":"d0fd48ac-4374-4272-a370-d2ae0708e61d","type":"UnionRenderers"}},"id":"047edf5e-b55a-4596-b019-91b239f5c433","type":"ColumnDataSource"},{"attributes":{"source":{"id":"047edf5e-b55a-4596-b019-91b239f5c433","type":"ColumnDataSource"}},"id":"d1ed8fc7-0b70-4bb1-97b4-d6c8dbce8530","type":"CDSView"},{"attributes":{"below":[{"id":"53b0b672-9630-4078-bc5c-2ee1a86ad64f","type":"LinearAxis"}],"left":[{"id":"c2eb8b48-d99d-4e16-9853-f44c4ca1e8a7","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"53b0b672-9630-4078-bc5c-2ee1a86ad64f","type":"LinearAxis"},{"id":"406ea562-0f39-41b5-8aba-49edd3779e56","type":"Grid"},{"id":"c2eb8b48-d99d-4e16-9853-f44c4ca1e8a7","type":"LinearAxis"},{"id":"9fd23550-05eb-4c70-8554-2d76643cc464","type":"Grid"},{"id":"c96b120b-8246-4676-a340-1d8a0a829436","type":"GlyphRenderer"}],"title":{"id":"912d149d-62eb-4cab-ae50-84cd14b9555c","type":"Title"},"toolbar":{"id":"a97221f1-9226-494e-a541-3deccfa70d82","type":"Toolbar"},"x_range":{"id":"2b731bdc-b630-47df-8c6e-52b1d3bde033","type":"DataRange1d"},"x_scale":{"id":"43abc3fe-4b69-4d79-a138-5f5151c1a43b","type":"LinearScale"},"y_range":{"id":"e18a0f29-e09d-4281-80d1-1700a68801d7","type":"DataRange1d"},"y_scale":{"id":"d2dcf76a-0ef1-4721-b248-50312ee4fcc7","type":"LinearScale"}},"id":"7db69520-90d8-483f-b145-3e4ace2a2cdd","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d0fd48ac-4374-4272-a370-d2ae0708e61d","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"7db69520-90d8-483f-b145-3e4ace2a2cdd","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c8e5b55-58d1-47ce-a447-778669d09867","type":"BasicTicker"}},"id":"9fd23550-05eb-4c70-8554-2d76643cc464","type":"Grid"},{"attributes":{},"id":"e5457e16-c7f2-40ff-b740-ca9a5f7d85e2","type":"BasicTickFormatter"},{"attributes":{},"id":"e6060071-5767-4595-88ef-e550dc1bb0de","type":"BasicTickFormatter"},{"attributes":{},"id":"c0aaed64-1dbb-4358-94e2-578e05f9a7ed","type":"BasicTicker"},{"attributes":{"formatter":{"id":"e6060071-5767-4595-88ef-e550dc1bb0de","type":"BasicTickFormatter"},"plot":{"id":"7db69520-90d8-483f-b145-3e4ace2a2cdd","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c8e5b55-58d1-47ce-a447-778669d09867","type":"BasicTicker"}},"id":"c2eb8b48-d99d-4e16-9853-f44c4ca1e8a7","type":"LinearAxis"},{"attributes":{"data_source":{"id":"047edf5e-b55a-4596-b019-91b239f5c433","type":"ColumnDataSource"},"glyph":{"id":"106439af-5c44-4bbb-aeac-4c1dea1eee26","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e681869f-660b-4640-b1c0-c9bfe6e07c79","type":"Circle"},"selection_glyph":{"id":"112fa431-903f-4708-be39-3558dce540fc","type":"Circle"},"view":{"id":"d1ed8fc7-0b70-4bb1-97b4-d6c8dbce8530","type":"CDSView"}},"id":"c96b120b-8246-4676-a340-1d8a0a829436","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"2b731bdc-b630-47df-8c6e-52b1d3bde033","type":"DataRange1d"},{"attributes":{"callback":null},"id":"48e91088-66da-40b6-b3eb-0c553375d278","type":"TapTool"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"112fa431-903f-4708-be39-3558dce540fc","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"e681869f-660b-4640-b1c0-c9bfe6e07c79","type":"Circle"},{"attributes":{"plot":{"id":"7db69520-90d8-483f-b145-3e4ace2a2cdd","subtype":"Figure","type":"Plot"},"ticker":{"id":"c0aaed64-1dbb-4358-94e2-578e05f9a7ed","type":"BasicTicker"}},"id":"406ea562-0f39-41b5-8aba-49edd3779e56","type":"Grid"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"912d149d-62eb-4cab-ae50-84cd14b9555c","type":"Title"},{"attributes":{"callback":null},"id":"e18a0f29-e09d-4281-80d1-1700a68801d7","type":"DataRange1d"},{"attributes":{"formatter":{"id":"e5457e16-c7f2-40ff-b740-ca9a5f7d85e2","type":"BasicTickFormatter"},"plot":{"id":"7db69520-90d8-483f-b145-3e4ace2a2cdd","subtype":"Figure","type":"Plot"},"ticker":{"id":"c0aaed64-1dbb-4358-94e2-578e05f9a7ed","type":"BasicTicker"}},"id":"53b0b672-9630-4078-bc5c-2ee1a86ad64f","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"106439af-5c44-4bbb-aeac-4c1dea1eee26","type":"Circle"},{"attributes":{},"id":"6c8e5b55-58d1-47ce-a447-778669d09867","type":"BasicTicker"},{"attributes":{},"id":"43abc3fe-4b69-4d79-a138-5f5151c1a43b","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"48e91088-66da-40b6-b3eb-0c553375d278","type":"TapTool"}]},"id":"a97221f1-9226-494e-a541-3deccfa70d82","type":"Toolbar"},{"attributes":{},"id":"d2dcf76a-0ef1-4721-b248-50312ee4fcc7","type":"LinearScale"}],"root_ids":["7db69520-90d8-483f-b145-3e4ace2a2cdd"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"5c132af0-1a62-4031-82ed-0373707b6f40","roots":{"7db69520-90d8-483f-b145-3e4ace2a2cdd":"a79848bb-be7f-4ded-8b2c-e1a2c7632b6b"}}];
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