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
      };var element = document.getElementById("3747303a-2b71-476c-843f-fa221955a377");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3747303a-2b71-476c-843f-fa221955a377' but no matching script tag was found. ")
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
                    var docs_json = {"bdccc7d4-e3b0-4087-aab5-8c7ef81b9a45":{"roots":{"references":[{"attributes":{},"id":"158150c9-598a-4f05-aebc-3009ff33aa61","type":"BasicTicker"},{"attributes":{"callback":null},"id":"050d70a3-a6e8-4785-9775-f6ebabedb2b5","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"74759242-43ad-4262-b037-11bd882373a4","type":"Plot"},"ticker":{"id":"062917d7-9b0c-4148-a8f2-17c1b3acab8c","type":"BasicTicker"}},"id":"9d263572-2be5-42d9-80ff-8cae731acc0b","type":"Grid"},{"attributes":{"plot":{"id":"74759242-43ad-4262-b037-11bd882373a4","type":"Plot"},"ticker":{"id":"158150c9-598a-4f05-aebc-3009ff33aa61","type":"BasicTicker"}},"id":"1f2dcafa-0a83-4d49-9c03-9e6d4d6da737","type":"Grid"},{"attributes":{"callback":null},"id":"d733cd29-b9c9-466e-b43b-68a9f664ef72","type":"DataRange1d"},{"attributes":{},"id":"1394c521-5146-4261-81ea-d7e47f323604","type":"LinearScale"},{"attributes":{"source":{"id":"5b7c0ca5-2521-43c7-8b75-cdeac573bd3b","type":"ColumnDataSource"}},"id":"62fc0bfa-24d7-4f04-bcf7-a36d15872e57","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#f0027f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"eb59e16b-0166-4e65-bd3e-47add6c4861f","type":"Asterisk"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"5b7c0ca5-2521-43c7-8b75-cdeac573bd3b","type":"ColumnDataSource"},{"attributes":{},"id":"81ae9389-c14c-4702-8fe1-0f792c6f464d","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"3603059b-84a7-4526-ad23-b6b12b0e693d","type":"BasicTickFormatter"},"plot":{"id":"74759242-43ad-4262-b037-11bd882373a4","type":"Plot"},"ticker":{"id":"062917d7-9b0c-4148-a8f2-17c1b3acab8c","type":"BasicTicker"}},"id":"05ac459f-416d-4b83-9631-d69f10611d36","type":"LinearAxis"},{"attributes":{},"id":"3324fbe8-f79f-4fae-97fc-e70a8cfab5a1","type":"LinearScale"},{"attributes":{"formatter":{"id":"81ae9389-c14c-4702-8fe1-0f792c6f464d","type":"BasicTickFormatter"},"plot":{"id":"74759242-43ad-4262-b037-11bd882373a4","type":"Plot"},"ticker":{"id":"158150c9-598a-4f05-aebc-3009ff33aa61","type":"BasicTicker"}},"id":"b5d08a23-aabd-4839-880c-c2220120d1e6","type":"LinearAxis"},{"attributes":{},"id":"062917d7-9b0c-4148-a8f2-17c1b3acab8c","type":"BasicTicker"},{"attributes":{"data_source":{"id":"5b7c0ca5-2521-43c7-8b75-cdeac573bd3b","type":"ColumnDataSource"},"glyph":{"id":"eb59e16b-0166-4e65-bd3e-47add6c4861f","type":"Asterisk"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"62fc0bfa-24d7-4f04-bcf7-a36d15872e57","type":"CDSView"}},"id":"c193f371-9881-4a41-9c0d-b91c55a66764","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f31572fe-92c4-4fe1-8a05-acd398eaa2b9","type":"Toolbar"},{"attributes":{"below":[{"id":"b5d08a23-aabd-4839-880c-c2220120d1e6","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"05ac459f-416d-4b83-9631-d69f10611d36","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c193f371-9881-4a41-9c0d-b91c55a66764","type":"GlyphRenderer"},{"id":"b5d08a23-aabd-4839-880c-c2220120d1e6","type":"LinearAxis"},{"id":"05ac459f-416d-4b83-9631-d69f10611d36","type":"LinearAxis"},{"id":"1f2dcafa-0a83-4d49-9c03-9e6d4d6da737","type":"Grid"},{"id":"9d263572-2be5-42d9-80ff-8cae731acc0b","type":"Grid"}],"title":null,"toolbar":{"id":"f31572fe-92c4-4fe1-8a05-acd398eaa2b9","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d733cd29-b9c9-466e-b43b-68a9f664ef72","type":"DataRange1d"},"x_scale":{"id":"3324fbe8-f79f-4fae-97fc-e70a8cfab5a1","type":"LinearScale"},"y_range":{"id":"050d70a3-a6e8-4785-9775-f6ebabedb2b5","type":"DataRange1d"},"y_scale":{"id":"1394c521-5146-4261-81ea-d7e47f323604","type":"LinearScale"}},"id":"74759242-43ad-4262-b037-11bd882373a4","type":"Plot"},{"attributes":{},"id":"3603059b-84a7-4526-ad23-b6b12b0e693d","type":"BasicTickFormatter"}],"root_ids":["74759242-43ad-4262-b037-11bd882373a4"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"bdccc7d4-e3b0-4087-aab5-8c7ef81b9a45","elementid":"3747303a-2b71-476c-843f-fa221955a377","modelid":"74759242-43ad-4262-b037-11bd882373a4"}];
                
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
