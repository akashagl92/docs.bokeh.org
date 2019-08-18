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
      };var element = document.getElementById("f5037209-af33-4f7b-893b-448cdf324750");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f5037209-af33-4f7b-893b-448cdf324750' but no matching script tag was found. ")
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
                    var docs_json = {"7f949f76-c7b3-4b8f-bce8-90a215d6d659":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"22618b60-a422-4f37-bb34-063ffe51ef49","type":"Plot"},"ticker":{"id":"b8fc1666-06e2-4486-a6cc-4dd0d1426603","type":"BasicTicker"}},"id":"2edc4fd9-9eac-4e60-b5d8-6aa360fe44eb","type":"Grid"},{"attributes":{"formatter":{"id":"b7f6252b-83f8-4d6b-ae68-2f7a5a8e18c3","type":"BasicTickFormatter"},"plot":{"id":"22618b60-a422-4f37-bb34-063ffe51ef49","type":"Plot"},"ticker":{"id":"a5c7c6ab-446c-4598-ad3c-62918b51f0ee","type":"BasicTicker"}},"id":"f4675067-b072-41ec-bf4b-7f641e754605","type":"LinearAxis"},{"attributes":{"source":{"id":"20974c97-41e9-4b46-8670-15da1cbb2385","type":"ColumnDataSource"}},"id":"71de374e-528d-448a-b34a-b81e64c27b68","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386cb0"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1c69ba9a-8644-494b-87d1-830cc965903c","type":"DiamondCross"},{"attributes":{"below":[{"id":"f4675067-b072-41ec-bf4b-7f641e754605","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"835477b9-f26b-4a39-a26f-158435bbbe3e","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"37dd73fc-df13-4f29-aa2e-3721e1291840","type":"GlyphRenderer"},{"id":"f4675067-b072-41ec-bf4b-7f641e754605","type":"LinearAxis"},{"id":"835477b9-f26b-4a39-a26f-158435bbbe3e","type":"LinearAxis"},{"id":"6eb95c3d-99cd-421c-985f-967a9c9a3c5c","type":"Grid"},{"id":"2edc4fd9-9eac-4e60-b5d8-6aa360fe44eb","type":"Grid"}],"title":null,"toolbar":{"id":"4df7f4d7-fdb3-4ead-b1b5-a125b9ebad53","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"cc499cfc-b683-43c9-874c-b5104d7f8588","type":"DataRange1d"},"x_scale":{"id":"fd8d952f-70fd-4007-9955-5ff609a846a1","type":"LinearScale"},"y_range":{"id":"b5dfd083-d069-4a94-8108-4e63ff3c5092","type":"DataRange1d"},"y_scale":{"id":"d64bc761-c504-4116-bb37-ebc06d6747fa","type":"LinearScale"}},"id":"22618b60-a422-4f37-bb34-063ffe51ef49","type":"Plot"},{"attributes":{"data_source":{"id":"20974c97-41e9-4b46-8670-15da1cbb2385","type":"ColumnDataSource"},"glyph":{"id":"1c69ba9a-8644-494b-87d1-830cc965903c","type":"DiamondCross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"71de374e-528d-448a-b34a-b81e64c27b68","type":"CDSView"}},"id":"37dd73fc-df13-4f29-aa2e-3721e1291840","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"00ef93d0-29f2-4ef0-981a-54e1f2ada864","type":"BasicTickFormatter"},"plot":{"id":"22618b60-a422-4f37-bb34-063ffe51ef49","type":"Plot"},"ticker":{"id":"b8fc1666-06e2-4486-a6cc-4dd0d1426603","type":"BasicTicker"}},"id":"835477b9-f26b-4a39-a26f-158435bbbe3e","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4df7f4d7-fdb3-4ead-b1b5-a125b9ebad53","type":"Toolbar"},{"attributes":{},"id":"b7f6252b-83f8-4d6b-ae68-2f7a5a8e18c3","type":"BasicTickFormatter"},{"attributes":{},"id":"d64bc761-c504-4116-bb37-ebc06d6747fa","type":"LinearScale"},{"attributes":{},"id":"a5c7c6ab-446c-4598-ad3c-62918b51f0ee","type":"BasicTicker"},{"attributes":{},"id":"00ef93d0-29f2-4ef0-981a-54e1f2ada864","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"cc499cfc-b683-43c9-874c-b5104d7f8588","type":"DataRange1d"},{"attributes":{},"id":"b8fc1666-06e2-4486-a6cc-4dd0d1426603","type":"BasicTicker"},{"attributes":{},"id":"fd8d952f-70fd-4007-9955-5ff609a846a1","type":"LinearScale"},{"attributes":{"callback":null},"id":"b5dfd083-d069-4a94-8108-4e63ff3c5092","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"20974c97-41e9-4b46-8670-15da1cbb2385","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"22618b60-a422-4f37-bb34-063ffe51ef49","type":"Plot"},"ticker":{"id":"a5c7c6ab-446c-4598-ad3c-62918b51f0ee","type":"BasicTicker"}},"id":"6eb95c3d-99cd-421c-985f-967a9c9a3c5c","type":"Grid"}],"root_ids":["22618b60-a422-4f37-bb34-063ffe51ef49"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"7f949f76-c7b3-4b8f-bce8-90a215d6d659","elementid":"f5037209-af33-4f7b-893b-448cdf324750","modelid":"22618b60-a422-4f37-bb34-063ffe51ef49"}];
                
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
