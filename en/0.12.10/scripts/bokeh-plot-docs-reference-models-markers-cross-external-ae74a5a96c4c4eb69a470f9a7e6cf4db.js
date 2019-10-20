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
      };var element = document.getElementById("0b6ed732-3a4e-408b-bcc9-099247cad13b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0b6ed732-3a4e-408b-bcc9-099247cad13b' but no matching script tag was found. ")
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
                    var docs_json = {"3406aac8-97e4-47dc-ba22-7bc890fe5d0f":{"roots":{"references":[{"attributes":{},"id":"550cf5f3-6a54-4a6f-ace8-5c854ef8f67a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"fab51127-6947-40fe-b31e-78faa971e29e","type":"BasicTickFormatter"},"plot":{"id":"fdf07fc5-1d37-4f88-83e9-f7f5409b4341","type":"Plot"},"ticker":{"id":"b8d81b72-0807-46f7-95b1-930569462377","type":"BasicTicker"}},"id":"d6e479e4-dd57-4b55-8e89-369fc1efbe7a","type":"LinearAxis"},{"attributes":{},"id":"b8d81b72-0807-46f7-95b1-930569462377","type":"BasicTicker"},{"attributes":{"callback":null},"id":"dcdc03a2-f6ab-4ea0-ab07-0641ff3aba0e","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y","sizes"],"data":{"sizes":{"__ndarray__":"AAAAAAAAJEAAAAAAAIAmQAAAAAAAAClAAAAAAACAK0AAAAAAAAAuQAAAAAAAQDBAAAAAAACAMUAAAAAAAMAyQAAAAAAAADRA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"35c32a63-0bfc-4d69-a4ef-9e4ef6ba6680","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"40ee3814-c4b7-4c85-96ca-d36fbe2c99e6","type":"BasicTickFormatter"},"plot":{"id":"fdf07fc5-1d37-4f88-83e9-f7f5409b4341","type":"Plot"},"ticker":{"id":"550cf5f3-6a54-4a6f-ace8-5c854ef8f67a","type":"BasicTicker"}},"id":"9e57fa23-8c09-4957-92ab-808c4b01170c","type":"LinearAxis"},{"attributes":{},"id":"40ee3814-c4b7-4c85-96ca-d36fbe2c99e6","type":"BasicTickFormatter"},{"attributes":{},"id":"fab51127-6947-40fe-b31e-78faa971e29e","type":"BasicTickFormatter"},{"attributes":{},"id":"a65bab10-50c1-455e-b764-ca5c94821822","type":"LinearScale"},{"attributes":{"below":[{"id":"d6e479e4-dd57-4b55-8e89-369fc1efbe7a","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9e57fa23-8c09-4957-92ab-808c4b01170c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"15dbed4b-795e-4b1a-b98c-1fbee0218bfc","type":"GlyphRenderer"},{"id":"d6e479e4-dd57-4b55-8e89-369fc1efbe7a","type":"LinearAxis"},{"id":"9e57fa23-8c09-4957-92ab-808c4b01170c","type":"LinearAxis"},{"id":"0704fbb6-2c47-419c-9ff4-e89a4e2074ac","type":"Grid"},{"id":"7f282264-8fda-43b6-bbea-4b2d56d59861","type":"Grid"}],"title":null,"toolbar":{"id":"db82dc1a-9b64-4155-b476-d28750cdd441","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"dcdc03a2-f6ab-4ea0-ab07-0641ff3aba0e","type":"DataRange1d"},"x_scale":{"id":"a65bab10-50c1-455e-b764-ca5c94821822","type":"LinearScale"},"y_range":{"id":"fe962bb3-f8a9-48a6-983d-4c413d8efaa2","type":"DataRange1d"},"y_scale":{"id":"a585bdde-8797-49f5-be71-09635e9fa1ce","type":"LinearScale"}},"id":"fdf07fc5-1d37-4f88-83e9-f7f5409b4341","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"db82dc1a-9b64-4155-b476-d28750cdd441","type":"Toolbar"},{"attributes":{"data_source":{"id":"35c32a63-0bfc-4d69-a4ef-9e4ef6ba6680","type":"ColumnDataSource"},"glyph":{"id":"bcb45864-4925-4fc8-8215-187a4f1f9abd","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4bf537ed-4d41-473a-92e7-23c8ea158c2b","type":"CDSView"}},"id":"15dbed4b-795e-4b1a-b98c-1fbee0218bfc","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"fdf07fc5-1d37-4f88-83e9-f7f5409b4341","type":"Plot"},"ticker":{"id":"550cf5f3-6a54-4a6f-ace8-5c854ef8f67a","type":"BasicTicker"}},"id":"7f282264-8fda-43b6-bbea-4b2d56d59861","type":"Grid"},{"attributes":{"callback":null},"id":"fe962bb3-f8a9-48a6-983d-4c413d8efaa2","type":"DataRange1d"},{"attributes":{},"id":"a585bdde-8797-49f5-be71-09635e9fa1ce","type":"LinearScale"},{"attributes":{"plot":{"id":"fdf07fc5-1d37-4f88-83e9-f7f5409b4341","type":"Plot"},"ticker":{"id":"b8d81b72-0807-46f7-95b1-930569462377","type":"BasicTicker"}},"id":"0704fbb6-2c47-419c-9ff4-e89a4e2074ac","type":"Grid"},{"attributes":{"source":{"id":"35c32a63-0bfc-4d69-a4ef-9e4ef6ba6680","type":"ColumnDataSource"}},"id":"4bf537ed-4d41-473a-92e7-23c8ea158c2b","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#e6550d"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bcb45864-4925-4fc8-8215-187a4f1f9abd","type":"Cross"}],"root_ids":["fdf07fc5-1d37-4f88-83e9-f7f5409b4341"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"3406aac8-97e4-47dc-ba22-7bc890fe5d0f","elementid":"0b6ed732-3a4e-408b-bcc9-099247cad13b","modelid":"fdf07fc5-1d37-4f88-83e9-f7f5409b4341"}];
                
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
