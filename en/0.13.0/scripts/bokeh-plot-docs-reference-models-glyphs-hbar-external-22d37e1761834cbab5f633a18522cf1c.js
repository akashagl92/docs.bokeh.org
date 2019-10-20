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
      };var element = document.getElementById("99bc2a15-3ad0-46f7-a012-77412f2b8924");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '99bc2a15-3ad0-46f7-a012-77412f2b8924' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"67728e1c-2370-4cf5-828c-dc3daa9039e1":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#b3de69"},"height":{"value":0.5},"right":{"field":"right"},"y":{"field":"y"}},"id":"4623ac33-b7d7-4fbb-a7b3-d75d96dbb71f","type":"HBar"},{"attributes":{"plot":{"id":"bbc1d07e-fe6c-4f39-b0eb-ce9dc207cb04","type":"Plot"},"ticker":{"id":"c7161c68-a810-456c-9006-42c18ce04e35","type":"BasicTicker"}},"id":"554a2ce8-c19f-41f3-b45c-57ce81c87023","type":"Grid"},{"attributes":{},"id":"77557ec6-751d-4c13-afde-17dee9a0365e","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"f2149324-e913-4af9-bf6b-196e5e745555","type":"DataRange1d"},{"attributes":{},"id":"43891492-416b-4d94-a8f0-e85f29441d03","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"a4bea020-a620-4011-bb4b-75273062fd7d","type":"Toolbar"},{"attributes":{"formatter":{"id":"77557ec6-751d-4c13-afde-17dee9a0365e","type":"BasicTickFormatter"},"plot":{"id":"bbc1d07e-fe6c-4f39-b0eb-ce9dc207cb04","type":"Plot"},"ticker":{"id":"c7161c68-a810-456c-9006-42c18ce04e35","type":"BasicTicker"}},"id":"b0453069-2d52-4b04-bc08-b0049e1d481b","type":"LinearAxis"},{"attributes":{"data_source":{"id":"167c49d2-c347-4cb0-97c4-24f509a57eb3","type":"ColumnDataSource"},"glyph":{"id":"4623ac33-b7d7-4fbb-a7b3-d75d96dbb71f","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ec1fb702-4d70-471c-b015-64f9e329c956","type":"CDSView"}},"id":"80c3fbde-6cc4-476d-8883-141929a93a49","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"right":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}},"selected":{"id":"b3b1ee7d-9759-46bf-af74-fef6720055ad","type":"Selection"},"selection_policy":{"id":"43891492-416b-4d94-a8f0-e85f29441d03","type":"UnionRenderers"}},"id":"167c49d2-c347-4cb0-97c4-24f509a57eb3","type":"ColumnDataSource"},{"attributes":{},"id":"c7161c68-a810-456c-9006-42c18ce04e35","type":"BasicTicker"},{"attributes":{"source":{"id":"167c49d2-c347-4cb0-97c4-24f509a57eb3","type":"ColumnDataSource"}},"id":"ec1fb702-4d70-471c-b015-64f9e329c956","type":"CDSView"},{"attributes":{"callback":null},"id":"5adf279c-1239-491b-b3d8-4d5ded602f01","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"bbc1d07e-fe6c-4f39-b0eb-ce9dc207cb04","type":"Plot"},"ticker":{"id":"ccbca8ed-a5f6-4b7b-9663-fbb14181aeba","type":"BasicTicker"}},"id":"02017636-4dc0-4d84-b27d-c4e49b9efc03","type":"Grid"},{"attributes":{"formatter":{"id":"95ac8e19-8357-45b8-9944-f6ced62add7e","type":"BasicTickFormatter"},"plot":{"id":"bbc1d07e-fe6c-4f39-b0eb-ce9dc207cb04","type":"Plot"},"ticker":{"id":"ccbca8ed-a5f6-4b7b-9663-fbb14181aeba","type":"BasicTicker"}},"id":"bdb2e290-6dbd-4105-b2c2-c59f531a70ec","type":"LinearAxis"},{"attributes":{},"id":"ccbca8ed-a5f6-4b7b-9663-fbb14181aeba","type":"BasicTicker"},{"attributes":{},"id":"2abca33d-1f55-4f84-a23a-c3a0e0178f98","type":"LinearScale"},{"attributes":{},"id":"95ac8e19-8357-45b8-9944-f6ced62add7e","type":"BasicTickFormatter"},{"attributes":{},"id":"6bb017df-9bc5-4c87-bd40-33e40e86e043","type":"LinearScale"},{"attributes":{"below":[{"id":"b0453069-2d52-4b04-bc08-b0049e1d481b","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"bdb2e290-6dbd-4105-b2c2-c59f531a70ec","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"80c3fbde-6cc4-476d-8883-141929a93a49","type":"GlyphRenderer"},{"id":"b0453069-2d52-4b04-bc08-b0049e1d481b","type":"LinearAxis"},{"id":"bdb2e290-6dbd-4105-b2c2-c59f531a70ec","type":"LinearAxis"},{"id":"554a2ce8-c19f-41f3-b45c-57ce81c87023","type":"Grid"},{"id":"02017636-4dc0-4d84-b27d-c4e49b9efc03","type":"Grid"}],"title":null,"toolbar":{"id":"a4bea020-a620-4011-bb4b-75273062fd7d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5adf279c-1239-491b-b3d8-4d5ded602f01","type":"DataRange1d"},"x_scale":{"id":"2abca33d-1f55-4f84-a23a-c3a0e0178f98","type":"LinearScale"},"y_range":{"id":"f2149324-e913-4af9-bf6b-196e5e745555","type":"DataRange1d"},"y_scale":{"id":"6bb017df-9bc5-4c87-bd40-33e40e86e043","type":"LinearScale"}},"id":"bbc1d07e-fe6c-4f39-b0eb-ce9dc207cb04","type":"Plot"},{"attributes":{},"id":"b3b1ee7d-9759-46bf-af74-fef6720055ad","type":"Selection"}],"root_ids":["bbc1d07e-fe6c-4f39-b0eb-ce9dc207cb04"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"67728e1c-2370-4cf5-828c-dc3daa9039e1","roots":{"bbc1d07e-fe6c-4f39-b0eb-ce9dc207cb04":"99bc2a15-3ad0-46f7-a012-77412f2b8924"}}];
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