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
      };var element = document.getElementById("daa7181a-3b5f-48fc-8503-e674e435ce6b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'daa7181a-3b5f-48fc-8503-e674e435ce6b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ed3addd8-44de-42c9-bf7f-437578a46711":{"roots":{"references":[{"attributes":{},"id":"0afb2c58-d948-4499-86b6-ed93529baf68","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"909d5d9a-c943-41be-a780-f28b22ffbade","type":"Toolbar"},{"attributes":{"plot":{"id":"6afbf14b-2580-479d-93aa-b7fd522baf28","type":"Plot"},"ticker":{"id":"0afb2c58-d948-4499-86b6-ed93529baf68","type":"BasicTicker"}},"id":"aab23183-aa12-4a6a-a21a-c972a6aa702c","type":"Grid"},{"attributes":{},"id":"44f68223-1309-4caa-9e30-1623d0ab2c15","type":"Selection"},{"attributes":{"formatter":{"id":"cd0fa04e-8442-4106-b7b3-5981105b2fb0","type":"BasicTickFormatter"},"plot":{"id":"6afbf14b-2580-479d-93aa-b7fd522baf28","type":"Plot"},"ticker":{"id":"dc162a21-75f0-46d0-90e7-22b7d26136e9","type":"BasicTicker"}},"id":"219346bf-a987-48c4-abc0-e0dc96dddf5f","type":"LinearAxis"},{"attributes":{"below":[{"id":"04bd3ba6-7cc6-4c10-a03c-e9407b05c05a","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"219346bf-a987-48c4-abc0-e0dc96dddf5f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2f99374f-5c1a-45c2-82d5-95a64f608b47","type":"GlyphRenderer"},{"id":"04bd3ba6-7cc6-4c10-a03c-e9407b05c05a","type":"LinearAxis"},{"id":"219346bf-a987-48c4-abc0-e0dc96dddf5f","type":"LinearAxis"},{"id":"aab23183-aa12-4a6a-a21a-c972a6aa702c","type":"Grid"},{"id":"6da680e9-5521-4b4b-aefe-cab04c7cae5c","type":"Grid"}],"title":null,"toolbar":{"id":"909d5d9a-c943-41be-a780-f28b22ffbade","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fa511e6c-608a-47be-a77d-6421b5a912a6","type":"DataRange1d"},"x_scale":{"id":"ab7ba9e7-518f-4049-90c6-74e39bd36312","type":"LinearScale"},"y_range":{"id":"394d4247-9a6a-4d10-a28f-ac1286699c5a","type":"DataRange1d"},"y_scale":{"id":"7542bfb9-3c53-4029-b52e-884094e32a8f","type":"LinearScale"}},"id":"6afbf14b-2580-479d-93aa-b7fd522baf28","type":"Plot"},{"attributes":{"callback":null},"id":"394d4247-9a6a-4d10-a28f-ac1286699c5a","type":"DataRange1d"},{"attributes":{"data_source":{"id":"597765ea-a273-4295-8d59-a0c6407dfb4e","type":"ColumnDataSource"},"glyph":{"id":"a71e4a1b-fbf2-41cf-9d69-2ef54301edba","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"f783ed72-516d-4c9a-8831-e4ddd9ffe0ec","type":"CDSView"}},"id":"2f99374f-5c1a-45c2-82d5-95a64f608b47","type":"GlyphRenderer"},{"attributes":{},"id":"ab7ba9e7-518f-4049-90c6-74e39bd36312","type":"LinearScale"},{"attributes":{},"id":"cd0fa04e-8442-4106-b7b3-5981105b2fb0","type":"BasicTickFormatter"},{"attributes":{},"id":"7542bfb9-3c53-4029-b52e-884094e32a8f","type":"LinearScale"},{"attributes":{"formatter":{"id":"9dc38d2d-2145-4cb8-abbf-b75fb3c8bd39","type":"BasicTickFormatter"},"plot":{"id":"6afbf14b-2580-479d-93aa-b7fd522baf28","type":"Plot"},"ticker":{"id":"0afb2c58-d948-4499-86b6-ed93529baf68","type":"BasicTicker"}},"id":"04bd3ba6-7cc6-4c10-a03c-e9407b05c05a","type":"LinearAxis"},{"attributes":{},"id":"9dc38d2d-2145-4cb8-abbf-b75fb3c8bd39","type":"BasicTickFormatter"},{"attributes":{},"id":"ee65a56e-3b7e-4830-9160-09fe206d7c5c","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"fa511e6c-608a-47be-a77d-6421b5a912a6","type":"DataRange1d"},{"attributes":{"source":{"id":"597765ea-a273-4295-8d59-a0c6407dfb4e","type":"ColumnDataSource"}},"id":"f783ed72-516d-4c9a-8831-e4ddd9ffe0ec","type":"CDSView"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#b3de69"},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"a71e4a1b-fbf2-41cf-9d69-2ef54301edba","type":"Wedge"},{"attributes":{"callback":null,"data":{"r":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}},"selected":{"id":"44f68223-1309-4caa-9e30-1623d0ab2c15","type":"Selection"},"selection_policy":{"id":"ee65a56e-3b7e-4830-9160-09fe206d7c5c","type":"UnionRenderers"}},"id":"597765ea-a273-4295-8d59-a0c6407dfb4e","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"6afbf14b-2580-479d-93aa-b7fd522baf28","type":"Plot"},"ticker":{"id":"dc162a21-75f0-46d0-90e7-22b7d26136e9","type":"BasicTicker"}},"id":"6da680e9-5521-4b4b-aefe-cab04c7cae5c","type":"Grid"},{"attributes":{},"id":"dc162a21-75f0-46d0-90e7-22b7d26136e9","type":"BasicTicker"}],"root_ids":["6afbf14b-2580-479d-93aa-b7fd522baf28"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"ed3addd8-44de-42c9-bf7f-437578a46711","roots":{"6afbf14b-2580-479d-93aa-b7fd522baf28":"daa7181a-3b5f-48fc-8503-e674e435ce6b"}}];
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