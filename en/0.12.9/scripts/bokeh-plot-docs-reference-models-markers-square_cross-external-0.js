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
      };var element = document.getElementById("3c767572-e36d-4213-9be1-298728a6dc6d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3c767572-e36d-4213-9be1-298728a6dc6d' but no matching script tag was found. ")
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
                    var docs_json = {"df9bc8ab-3285-4bd9-81c1-45bda05e98f5":{"roots":{"references":[{"attributes":{"formatter":{"id":"ac140003-0ee3-4095-995b-d2f892b1f960","type":"BasicTickFormatter"},"plot":{"id":"1274d180-6e65-41d4-be2c-1c626666c027","type":"Plot"},"ticker":{"id":"c32c0a5b-8f72-40b3-93fd-4ab2ca76d7fd","type":"BasicTicker"}},"id":"b3ea0cde-c4c4-4013-9a12-bc55c48af935","type":"LinearAxis"},{"attributes":{},"id":"1ae5b6a2-aec0-4368-a5ef-5b9a252e3cb0","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"d34caf34-28a5-4ce3-8120-82444dccfbae","type":"DataRange1d"},{"attributes":{},"id":"95d3db48-d085-418b-801a-baf2f5d51064","type":"BasicTicker"},{"attributes":{},"id":"d41e8a81-b4d9-402d-afee-771f7c43a3b2","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a98fed74-9e93-46a3-a518-006e197cbaa2","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7fc97f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"280fefb7-30a6-4246-b2b8-bd9b2af449b8","type":"SquareCross"},{"attributes":{"data_source":{"id":"9e8a37b9-5c50-4a1f-baea-ffdaf4ded1cc","type":"ColumnDataSource"},"glyph":{"id":"280fefb7-30a6-4246-b2b8-bd9b2af449b8","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"b4ec9dc7-9896-4eba-b80b-82571ef268d1","type":"CDSView"}},"id":"d4d20c95-c986-4c9a-b30b-4905788c7b08","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"6277ec4e-d802-4f62-9a84-59ed466b7aa1","type":"DataRange1d"},{"attributes":{},"id":"c32c0a5b-8f72-40b3-93fd-4ab2ca76d7fd","type":"BasicTicker"},{"attributes":{"source":{"id":"9e8a37b9-5c50-4a1f-baea-ffdaf4ded1cc","type":"ColumnDataSource"}},"id":"b4ec9dc7-9896-4eba-b80b-82571ef268d1","type":"CDSView"},{"attributes":{},"id":"ac140003-0ee3-4095-995b-d2f892b1f960","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1ae5b6a2-aec0-4368-a5ef-5b9a252e3cb0","type":"BasicTickFormatter"},"plot":{"id":"1274d180-6e65-41d4-be2c-1c626666c027","type":"Plot"},"ticker":{"id":"95d3db48-d085-418b-801a-baf2f5d51064","type":"BasicTicker"}},"id":"82467452-6452-4d9d-b5bf-afc5bf737cdd","type":"LinearAxis"},{"attributes":{"plot":{"id":"1274d180-6e65-41d4-be2c-1c626666c027","type":"Plot"},"ticker":{"id":"c32c0a5b-8f72-40b3-93fd-4ab2ca76d7fd","type":"BasicTicker"}},"id":"eeb9e6d4-a327-4752-ac69-5808dce12a8c","type":"Grid"},{"attributes":{},"id":"4f0790c2-bea0-4e72-8d8c-dad3c1a6c9f2","type":"LinearScale"},{"attributes":{"below":[{"id":"b3ea0cde-c4c4-4013-9a12-bc55c48af935","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"82467452-6452-4d9d-b5bf-afc5bf737cdd","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"d4d20c95-c986-4c9a-b30b-4905788c7b08","type":"GlyphRenderer"},{"id":"b3ea0cde-c4c4-4013-9a12-bc55c48af935","type":"LinearAxis"},{"id":"82467452-6452-4d9d-b5bf-afc5bf737cdd","type":"LinearAxis"},{"id":"eeb9e6d4-a327-4752-ac69-5808dce12a8c","type":"Grid"},{"id":"b8331817-37be-4077-97a4-cb580f22eb6c","type":"Grid"}],"title":null,"toolbar":{"id":"a98fed74-9e93-46a3-a518-006e197cbaa2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6277ec4e-d802-4f62-9a84-59ed466b7aa1","type":"DataRange1d"},"x_scale":{"id":"4f0790c2-bea0-4e72-8d8c-dad3c1a6c9f2","type":"LinearScale"},"y_range":{"id":"d34caf34-28a5-4ce3-8120-82444dccfbae","type":"DataRange1d"},"y_scale":{"id":"d41e8a81-b4d9-402d-afee-771f7c43a3b2","type":"LinearScale"}},"id":"1274d180-6e65-41d4-be2c-1c626666c027","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"1274d180-6e65-41d4-be2c-1c626666c027","type":"Plot"},"ticker":{"id":"95d3db48-d085-418b-801a-baf2f5d51064","type":"BasicTicker"}},"id":"b8331817-37be-4077-97a4-cb580f22eb6c","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"9e8a37b9-5c50-4a1f-baea-ffdaf4ded1cc","type":"ColumnDataSource"}],"root_ids":["1274d180-6e65-41d4-be2c-1c626666c027"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"df9bc8ab-3285-4bd9-81c1-45bda05e98f5","elementid":"3c767572-e36d-4213-9be1-298728a6dc6d","modelid":"1274d180-6e65-41d4-be2c-1c626666c027"}];
                
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
