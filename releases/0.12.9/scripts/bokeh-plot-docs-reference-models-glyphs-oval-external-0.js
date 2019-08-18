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
      };var element = document.getElementById("6b77e4f6-e803-4342-98e1-d86d48557e22");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6b77e4f6-e803-4342-98e1-d86d48557e22' but no matching script tag was found. ")
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
                    var docs_json = {"c2a8c5fd-be83-4ab1-8bea-426c9b74c3fc":{"roots":{"references":[{"attributes":{"formatter":{"id":"0a75adf3-373e-49e7-bc2b-ba653a4c5647","type":"BasicTickFormatter"},"plot":{"id":"b27289da-3ebe-454e-a681-620a9eb9c818","type":"Plot"},"ticker":{"id":"a204174d-2ec8-42be-aa40-942b1b48987e","type":"BasicTicker"}},"id":"114fa609-8850-4377-9cbd-3260b5a82667","type":"LinearAxis"},{"attributes":{},"id":"fe0fcb88-a1e5-4af8-88e6-7075777612b1","type":"LinearScale"},{"attributes":{},"id":"5dbc41db-af92-4cf1-817f-55a6ce82299c","type":"LinearScale"},{"attributes":{"callback":null},"id":"30787bf0-ecc0-4356-9ca6-07e9c24ffcf1","type":"DataRange1d"},{"attributes":{"source":{"id":"973fed9e-017f-4244-a595-d98de9486de3","type":"ColumnDataSource"}},"id":"dfa43b13-60a4-40e4-8f90-0aa1436699e2","type":"CDSView"},{"attributes":{},"id":"b551b160-6f87-4799-be21-67ae0766cbe5","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1d91d0"},"height":{"units":"data","value":0.6},"width":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"a53a63c4-dff2-4a74-a175-12911ca5eb73","type":"Oval"},{"attributes":{},"id":"a204174d-2ec8-42be-aa40-942b1b48987e","type":"BasicTicker"},{"attributes":{"below":[{"id":"fa603201-eea5-4b67-b96a-c313d88f75f7","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"114fa609-8850-4377-9cbd-3260b5a82667","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9d991bb3-1f33-465a-a22b-ccd89319d9d5","type":"GlyphRenderer"},{"id":"fa603201-eea5-4b67-b96a-c313d88f75f7","type":"LinearAxis"},{"id":"114fa609-8850-4377-9cbd-3260b5a82667","type":"LinearAxis"},{"id":"e8011492-3ef5-4474-bf4e-83119428fb71","type":"Grid"},{"id":"2ed7e1f5-a958-4b8a-a550-22023d000039","type":"Grid"}],"title":null,"toolbar":{"id":"8f7b74a7-30f2-4dba-96b0-482529c965e5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"2f4b4439-b45d-4c5d-af65-45b9975d000b","type":"DataRange1d"},"x_scale":{"id":"5dbc41db-af92-4cf1-817f-55a6ce82299c","type":"LinearScale"},"y_range":{"id":"30787bf0-ecc0-4356-9ca6-07e9c24ffcf1","type":"DataRange1d"},"y_scale":{"id":"fe0fcb88-a1e5-4af8-88e6-7075777612b1","type":"LinearScale"}},"id":"b27289da-3ebe-454e-a681-620a9eb9c818","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"8f7b74a7-30f2-4dba-96b0-482529c965e5","type":"Toolbar"},{"attributes":{"data_source":{"id":"973fed9e-017f-4244-a595-d98de9486de3","type":"ColumnDataSource"},"glyph":{"id":"a53a63c4-dff2-4a74-a175-12911ca5eb73","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"dfa43b13-60a4-40e4-8f90-0aa1436699e2","type":"CDSView"}},"id":"9d991bb3-1f33-465a-a22b-ccd89319d9d5","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"b27289da-3ebe-454e-a681-620a9eb9c818","type":"Plot"},"ticker":{"id":"a204174d-2ec8-42be-aa40-942b1b48987e","type":"BasicTicker"}},"id":"2ed7e1f5-a958-4b8a-a550-22023d000039","type":"Grid"},{"attributes":{"callback":null},"id":"2f4b4439-b45d-4c5d-af65-45b9975d000b","type":"DataRange1d"},{"attributes":{},"id":"0a75adf3-373e-49e7-bc2b-ba653a4c5647","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"973fed9e-017f-4244-a595-d98de9486de3","type":"ColumnDataSource"},{"attributes":{},"id":"0f6f9e93-de4e-4430-9f3e-eb774bd2af12","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b27289da-3ebe-454e-a681-620a9eb9c818","type":"Plot"},"ticker":{"id":"b551b160-6f87-4799-be21-67ae0766cbe5","type":"BasicTicker"}},"id":"e8011492-3ef5-4474-bf4e-83119428fb71","type":"Grid"},{"attributes":{"formatter":{"id":"0f6f9e93-de4e-4430-9f3e-eb774bd2af12","type":"BasicTickFormatter"},"plot":{"id":"b27289da-3ebe-454e-a681-620a9eb9c818","type":"Plot"},"ticker":{"id":"b551b160-6f87-4799-be21-67ae0766cbe5","type":"BasicTicker"}},"id":"fa603201-eea5-4b67-b96a-c313d88f75f7","type":"LinearAxis"}],"root_ids":["b27289da-3ebe-454e-a681-620a9eb9c818"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"c2a8c5fd-be83-4ab1-8bea-426c9b74c3fc","elementid":"6b77e4f6-e803-4342-98e1-d86d48557e22","modelid":"b27289da-3ebe-454e-a681-620a9eb9c818"}];
                
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
